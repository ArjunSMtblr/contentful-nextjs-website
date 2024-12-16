import { getLayoutContent } from "@/lib/contentful";

export default async function Footer() {
  const data = await getLayoutContent();
  return <footer className="footer"></footer>;
}
