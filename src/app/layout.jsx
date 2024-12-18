import "../styles/globals.css";
import TopBanner from "../components/TopBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getLayoutContent } from "@/lib/contentful";

export default async function RootLayout({ children }) {
  const data = await getLayoutContent();
  return (
    <html lang="en">
      <body>
        <TopBanner data={data.topBanner} />
        <Header data={data.header} />
        <main>{children}</main>
        <Footer data={data.footer} />
      </body>
    </html>
  )
}