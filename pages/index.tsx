import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useState } from "react";
import CategoryList from "../components/Categories";
import DishList from "../components/DishList";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import CategoryContainer from "../container/RowContainer";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b to-transparent from-orange-100">
      <Head>
        <title>Cafeterio</title>
      </Head>
      <Header />
      <CategoryList />
      <DishList />
      <Navigation />
    </div>
  );
};

export default Home;
