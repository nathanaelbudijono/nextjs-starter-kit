import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import ArrowLink from "@/components/links/arrow-link";

export default function Home() {
  return (
    <Layout className="justify-center items-center">
      <Typography variant="h2">NextJs starter kit</Typography>
      <ArrowLink href="">Github Repository</ArrowLink>
    </Layout>
  );
}
