import Link from "next/link";
import React, { FC } from "react";
import CategoryCard from "../components/CategoryCard";

type Props = {
  title: string;
  children: React.ReactNode;
};

const RowContainer: FC<Props> = ({ title, children }) => {
  return (
    <section className="container my-10">
      <h2 className="heading">{title}</h2>

      <div className="flex flex-wrap -ml-3">{children}</div>
    </section>
  );
};

export default RowContainer;
