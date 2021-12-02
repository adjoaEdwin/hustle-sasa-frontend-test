import React from "react";
import styled from "styled-components";

import Search from "./Icons/Search";
import ShoppingBag from "./Icons/ShoppingBag";

const Navbar = () => {
  return (
    <Wrapper>
      <TopNav>
        <div className="intro__search__container">
          <Group>
            <div className="icon">
              <Search size={24} />
            </div>
            <Control type="search" placeholder="Search for a product ..." />
          </Group>
        </div>

        <NavItem>
          <a href="">My Cart</a>
          <ShoppingBag />
        </NavItem>
      </TopNav>
    </Wrapper>
  );
};

/**
 * styles
 */

const Wrapper = styled.div`
  border: 0;
  color: #05051b;
  font-size: 1rem;
  margin: 0 0.5rem;
`;

const TopNav = styled.div`
  gap: 48px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 992px) {
    max-width: 960px;
    grid-template-columns: 300px minmax(0, 1fr);
  }

  @media (min-width: 1200px) {
    max-width: 80%;
    grid-template-columns: 300px minmax(0, 1fr);
  }
`;

const Group = styled.div`
  border: 0;
  width: 100%;
  height: 50px;
  position: relative;

  .icon {
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    position: absolute;
    align-items: center;
  }
`;

const Control = styled.input`
  width: 100%;
  margin: 0px;
  height: 100%;
  border: 0px;
  display: none;
  outline: none;
  font-size: inherit;
  border-radius: 6px;
  font-family: inherit;
  background-color: white;
  padding: 1rem 1rem 1rem 3rem;

  @media (min-width: 992px) {
    display: block;
  }
`;

const NavItem = styled.div`
  gap: 2rem;
  display: flex;
  cursor: pointer;
  margin-left: auto;
  align-items: center;

  a {
    display: none;
    font-weight: 400;
    color: #05051b;
    text-decoration: none;
  }

  @media (min-width: 992px) {
    a {
      display: block;
    }
  }
`;

export default Navbar;
