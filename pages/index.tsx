import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b to-transparent from-orange-100">
      <Head>
        <title>Cafeterio</title>
      </Head>
      <Header />
    </div>
  );
};

export default Home;
