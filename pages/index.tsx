import { NextPage } from "next";
import Link from "next/link";

const Indexpage: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="/about">Go to ABOUT page</Link>
    </>
  );
};

export default Indexpage;
