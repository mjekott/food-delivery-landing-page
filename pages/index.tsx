import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b to-transparent from-orange-100">
      <Head>
        <title>Cafeterio</title>
      </Head>
      <Header />
      <Navigation />
    </div>
  );
};

export default Home;
