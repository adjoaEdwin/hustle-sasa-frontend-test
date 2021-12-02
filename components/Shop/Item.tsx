/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

import Button from "./Button";
import { colors } from "../shared/colors";
import * as Type from "../shared/styles";

type ItemProps = {
  product: {
    product_image: string;
    name: string;
    price: number;
  };
};

const Item = ({ product }: ItemProps) => {
  return (
    <Wrapper>
      <div className="product__image__wrapper">
        <img
          alt=""
          width="100%"
          height="100%"
          className="avatar"
          src={product?.product_image}
        />
      </div>

      <div className="product__details">
        <Type.Regular className="product__name">{product?.name}</Type.Regular>
        <Type.Regular className="product__price">
          <span>Ksh</span>{" "}
          <span>{`${new Intl.NumberFormat().format(product.price)}.00`}</span>
        </Type.Regular>

        <Actions>
          <Button>Buy now</Button>
          <Button>Add to cart</Button>
        </Actions>
      </div>
    </Wrapper>
  );
};

/**
 * styles
 */

const Wrapper = styled.div`
  .product {
    &__image__wrapper {
      width: 100%;
      height: 230px;
      padding: 1rem;
      position: relative;
      text-align: center;
      border-radius: 12px;
      border: solid 1px ${colors.grey};

      img.avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &__name {
      font-weight: 500;
      line-height: 24px;
      margin-top: 1rem;
      margin-bottom: 0;
    }

    &__price {
      color: grey;
      font-weight: 500;
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default Item;
