import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const ButtonComponent: FunctionComponent<Props> = ({
  children,
  ...props
}: Props) => {
  return <Button {...props}>{children}</Button>;
};

/**
 * styles
 */

const Button = styled.button`
  display: flex;
  height: 32px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  line-height: 18px;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  padding: 0.5rem 1.75rem;
  background-color: white;
  outline: none !important;
  border: 1px solid #e3e6ea;
  transition: ease-in-out all 0.25s;
`;

export default ButtonComponent;
