import AboutUs from "../src/presentation/components/AboutUs";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function AboutUsPage() {
  return <AboutUs />;
}
