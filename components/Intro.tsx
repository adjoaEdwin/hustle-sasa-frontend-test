/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import * as Type from "../components/shared/styles";
import { colors } from "./shared/colors";

export type IntroProps = {
  vendor: {
    shop_banner: string;
    shop_logo: string;
    name: string;
  };
};

const Intro = ({ vendor }: IntroProps) => {
  return (
    <Wrapper>
      <ProfileWrapper
        {...(vendor?.shop_banner && { banner: vendor?.shop_banner })}
      >
        <div className="banner" />
      </ProfileWrapper>

      <div className="vendor__cta cursor-pointer">
        <img
          className="vendor__cta__photo"
          alt="avatar"
          src={vendor?.shop_logo}
        />
      </div>

      <div
        className={`${styles.container} vendor__info`}
        style={{ maxWidth: 466 }}
      >
        <Type.T4 className="vendor__info__title">{vendor?.name}</Type.T4>

        <Type.Regular className="vendor__info__description">
          Home of the best shoes in town. Get free delivery for orders above KES
          5,000 countrywide.
        </Type.Regular>

        <div>
          <Link href="">Facebook</Link> / <Link href="">Instagram</Link> /
          <Link href="">YouTube</Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .vendor__cta {
    width: 100%;
    display: flex;
    justify-content: center;

    &__photo {
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin-top: -50px;
      border-width: 2px;
      border-color: #fff;
      border-radius: 50%;
      border-style: solid;
      object-position: center;
      background-color: ${colors.mediumGray};
    }
  }

  .vendor__info {
    text-align: center;

    &__title {
      margin-bottom: 0 !important;
    }

    a,
    &__description {
      font-weight: 500;
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
      color: ${colors.lightGray};
    }
  }
`;

const ProfileWrapper = styled.div`
  width: 100%;

  .banner {
    width: 100%;
    height: 360px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${({ banner }: any) => banner});
  }

  @media (min-width: 1200px) {
    max-width: 80%;
    margin-right: auto;
    margin-left: auto;

    .banner {
      border-radius: 12px;
    }
  }
`;

export default Intro;
