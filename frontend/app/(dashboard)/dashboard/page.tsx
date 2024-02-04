import Cards from "@/components/Cards";
import Chart from "@/components/Chart";
import Heading from "@/components/Heading";
import { authOptions } from "@/lib/next-auth-options";
import { generateDefaultGraphData, getDaysInThisMonth } from "@/lib/utils";
import axios from "axios";
import { getServerSession } from "next-auth";

async function getGraphData(userId: number, accessToken: string) {
  const response = await axios.get(
    `${process.env.API_URL}/short-url/stats/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const rawData = response.data as any[];

  const reducedRawData = rawData.reduce((result, item) => {
    const date = item.date.slice(0, 10);

    if (!result[date]) {
      result[date] = {
        date: date,
        clicks: item.click,
      };
    } else {
      result[date].clicks += item.click;
    }

    return result;
  }, {});

  // Mengubah objek hasil menjadi array
  const graphData = Object.values(reducedRawData);

  const daysOfMonth = getDaysInThisMonth();

  const defaultGraphData = generateDefaultGraphData(daysOfMonth);

  const graphDataMontly = [...graphData, ...defaultGraphData] as any[];

  const reduceGraphDataMontly = graphDataMontly.reduce((result, item) => {
    const date = item.date;

    // Mengecek apakah tanggal sudah ada dalam objek hasil atau belum
    if (!result[date]) {
      result[date] = {
        date: date,
        clicks: item.clicks,
      };
    } else {
      result[date].clicks += item.clicks;
    }

    return result;
  }, {});

  const result = Object.values(reduceGraphDataMontly) as any[];

  result.sort((a, b) => (new Date(a.date) as any) - (new Date(b.date) as any));

  return result;
}

//insight data for card dashboard
async function getInsightData(userId: number, accessToken: string) {
  const response = await axios.get(
    `${process.env.API_URL}/short-url/insight/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const totalLink = response.data.totalLink;
  const totalClick = response.data.totalClick;

  return { totalLink, totalClick };
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id || 0;
  const accessToken = session?.backendToken.accessToken || "";

  const { totalLink, totalClick } = await getInsightData(userId, accessToken);

  const graphData = await getGraphData(userId, accessToken);

  const labels = graphData.map((item: any) => item.date);
  const clicks = graphData.map((item: any) => item.clicks);

  return (
    <div className="flex flex-col gap-10 p-10">
      <Heading>Stats</Heading>
      <Cards totalLink={totalLink} totalClick={totalClick} />
      <Chart labels={labels} clicks={clicks} />
    </div>
  );
}
