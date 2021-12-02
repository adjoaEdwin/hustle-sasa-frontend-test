import styled from "styled-components";


export const T1 = styled.h1`
  line-height: 1.2;
  font-weight: 700;
  font-size: 32px;

  @media (min-width: 768px) {
    line-height: 56px;
    font-size: 44px;
  }
`;

export const T2 = styled.h2`
  line-height: 1.2;
  font-weight: 700;
  font-size: 26px;

  @media (min-width: 768px) {
    line-height: 36px;
    font-size: 32px;
  }
`;

export const T3 = styled.h3`
  line-height: 1.2;
  font-weight: 700;
  font-size: 20px;

  @media (min-width: 768px) {
    line-height: 28px;
    font-size: 24px;
  }
`;

export const T4 = styled.h4`
  line-height: 1.8;
  font-weight: 600;
  font-size: 18px;

  @media (min-width: 768px) {
    line-height: 28px;
    font-size: 22px;
  }
`;

export const Large = styled.p`
  line-height: 1.2;
  font-size: 18px;

  @media (min-width: 768px) {
    line-height: 24px;
    font-size: 19px;
  }
`;

export const Regular = styled.p`
  line-height: 24px;
  font-size: 16px;
`;


export const Small = styled.p`
  font-size: 14px;
  line-height: 24px;
`;

export const Micro = styled.p`
  font-size: 8px;
  line-height: 8px;
`;