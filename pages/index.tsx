/* eslint-disable @next/next/no-page-custom-font */
import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import * as Home from "../components";

import { GetStaticProps } from "next";
import { IntroProps } from "../components/Intro";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://run.mocky.io/v3/5194b007-b9b9-4748-a63f-f5db0ee4cd47"
  );
  const vendor = await res.json();

  return {
    props: {
      vendor,
    },
  };
};

interface Vendor {
  vendor: {
    hustle: {
      shop_banner: string;
      shop_logo: string;
      name: string;
    };
    products: {
      product_image: string;
      name: string;
      price: number;
    }[];

    sort_by: {
      label: string;
      value: string;
      map(arg0: (item: string) => { value: string; label: string }): undefined;
    };
    categories: {
      label: string;
      value: string;
      map(arg0: (item: string) => { value: string; label: string }): undefined;
    };
  };
}

const Index: NextPage<Vendor> = ({ vendor }) => {
  const { hustle, products, sort_by, categories } = vendor;

  return (
    <div>
      <Head>
        <title>{vendor?.hustle?.name}</title>
        <meta name="description" content="Coding assessment" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=optional"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home.Navbar />
      <Home.Intro {...{ vendor: hustle }} />
      <Home.Shop
        {...{
          products,
          categories,
          sort: sort_by,
        }}
      />
    </div>
  );
};

export default Index;
