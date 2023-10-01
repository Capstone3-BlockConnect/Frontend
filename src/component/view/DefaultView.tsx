import React, { ReactNode, useEffect, useState } from "react";
import {
  Content,
  Container,
  HeaderWrapper,
  FooterWrapper,
} from "./DefaultView.style";
import Footer from "../footer/Footer";
import Header from "../header/Header";

type DefaultViewPropsType = {
  children: ReactNode;
};

export default function DefaultView(props: DefaultViewPropsType) {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
      console.log(window.scrollY);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <Container>
      <HeaderWrapper isSticky={isSticky}>
        <Header />
      </HeaderWrapper>
      <Content isSticky={isSticky}>{props.children}</Content>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  );
}
