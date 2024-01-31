import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Cards from "@/components/Cards";
import Chart from "@/components/Chart";
import Heading from "@/components/Heading";
import { apiUrl } from "@/config";
import axios from "axios";
import { getServerSession } from "next-auth";

async function getGraphData(userId: number, accessToken: string) {
  const response = await axios.get(`${apiUrl}/short-url/stats/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const dataGraph = (response.data as any[]).reduce((result, item) => {
    const date = item.createdAt.slice(0, 10); // Mengambil bagian tanggal (tahun-bulan-tanggal)

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

  // Mengubah objek hasil menjadi array
  const result = Object.values(dataGraph);
  console.log(result);
  return result;
}

async function getInsightData(userId: number, accessToken: string) {
  const response = await axios.get(`${apiUrl}/short-url/insight/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const totalLink = response.data.totalLink;
  const totalClick = response.data.totalClick;

  return { totalLink, totalClick };
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id || 0;
  const accessToken = session?.backendToken.accessToken || "";

  //const { date, clicks } = await getGraphData(userId, accessToken);
  const { totalLink, totalClick } = await getInsightData(userId, accessToken);

  const dataGraph = await getGraphData(userId, accessToken);

  const labels = dataGraph.map((item: any) => item.date);
  const clicks = dataGraph.map((item: any) => item.clicks);

  return (
    <div className="flex flex-col gap-10 p-10">
      <Heading>Stats</Heading>
      <Cards totalLink={totalLink} totalClick={totalClick} />
      <Chart labels={labels} clicks={clicks} />
    </div>
  );
}
