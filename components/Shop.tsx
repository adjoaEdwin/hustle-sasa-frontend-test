import React, { Fragment } from "react";
import styled from "styled-components";
import styles from "../styles/Home.module.css";

import Dropdown from "./Shop/Dropdown";
import Item from "./Shop/Item";

interface Shop {
  sort: {
    label: string;
    value: string;
    map(
      arg0: (item: string) => { value: string; label: string }
    ):
      | import("react-select").OptionsOrGroups<
          string,
          import("react-select").GroupBase<string>
        >
      | undefined;
  };
  products: {
    product_image: string;
    name: string;
    price: number;
  }[];
  categories: {
    label: string;
    value: string;
    map(
      arg0: (item: string) => { value: string; label: string }
    ):
      | import("react-select").OptionsOrGroups<
          string,
          import("react-select").GroupBase<string>
        >
      | undefined;
  };
}

const Shop = ({ products, categories, sort }: Shop) => {
  return (
    <Fragment>
      <Wrapper className={styles.container}>
        <div className="filter">
          <Dropdown placeholder="Sort by" {...{ options: sort }} />
          <Dropdown placeholder="Categories" {...{ options: categories }} />
        </div>

        <Grid>
          {products.map((product: any, index: number) => (
            <Item key={index} {...{ product }} />
          ))}
        </Grid>
      </Wrapper>
    </Fragment>
  );
};

// styles
const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;

  .filter {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Shop;
