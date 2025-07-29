import AboutUs from "../components/AboutUs";

export async function getServerSideProps() {
  return {
    props: {},
  };
}
export default function AboutUsPage() {
  return <AboutUs />;
}
