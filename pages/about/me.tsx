import { NextPage } from "next";
import Link from "next/link";

const AboutMePage: NextPage = () => {
  return (
    <>
      <h1>This is the ABOUT ME page</h1>
      <Link href="/about">Go to ABOUT page</Link>
    </>
  );
};

export default AboutMePage;
