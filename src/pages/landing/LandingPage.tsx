import React from "react";
import {
  Container,
  Section,
  StartBtn,
  SubTitle,
  Title,
} from "./LandingPage.style";

function LandingPage() {
  return (
    <Container>
      <Section imagelink="https://plus.unsplash.com/premium_photo-1678917827802-721b5f5b4bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
        <SubTitle>블록체인</SubTitle>
        <Title>하이퍼로컬 간편 중고거래서비스</Title>
        <StartBtn
          variant="contained"
          color="success"
          style={{ width: "40%", marginTop: "2rem", padding: "0.5rem" }}
        >
          시작하기
        </StartBtn>
      </Section>

      <Section
        notFirst={true}
        imagelink="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      >
        <SubTitle>블록체인</SubTitle>
        <Title>하이퍼로컬 간편 중고거래서비스</Title>
      </Section>
    </Container>
  );
}

export default LandingPage;
