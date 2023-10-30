import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";
import Footer from "@/modules/footer";

import Navbar from "@/modules/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Layout className="justify-center items-center flex-col h-[70vh]">
        <Typography variant="h2">NextJs starter kit by Nathanael</Typography>
        <ArrowLink href="https://nathanaelbudijono.vercel.app">
          Click me!
        </ArrowLink>
      </Layout>
      <Footer />
    </main>
  );
}
