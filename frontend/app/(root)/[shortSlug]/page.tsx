import { apiUrl } from "@/config";
import axios from "axios";
import { notFound, redirect } from "next/navigation";

async function getOriginalUrl(shortSlug: string) {
  try {
    const response = await axios.get(`${apiUrl}/short-url/${shortSlug}`);

    if (response.status === 404) {
      return null;
    }

    const originalUrl = response.data.originalUrl;

    return originalUrl;
  } catch (error) {
    console.log(error);
  }
}

export default async function RedirectPage({
  params,
}: {
  params: { shortSlug: string };
}) {
  const originalUrl = await getOriginalUrl(params.shortSlug);

  if (!originalUrl) {
    notFound();
  }
  redirect(originalUrl);

  return <></>;
}
