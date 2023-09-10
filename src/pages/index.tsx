import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";
import Footer from "@/modules/footer";

import Navbar from "@/modules/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Layout className="justify-center items-center flex-col h-screen">
        <Typography variant="h2">NextJs starter kit</Typography>
        <ArrowLink href="https://github.com/nathanaelbudijono/nextjs-starter-kit">
          Github Repository
        </ArrowLink>
      </Layout>
      <Footer />
    </main>
  );
}
