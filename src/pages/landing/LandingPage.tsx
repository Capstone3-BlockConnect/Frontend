import React, { useEffect, useState } from "react";
import {
  Container,
  Section,
  StartBtn,
  SubTitle,
  Title,
} from "./LandingPage.style";
import { useNavigate } from "react-router-dom";
import animationData from "../../asset/lottie/landingLottie.json";
import { LottieWrapper } from "../../component/header/Header.style";
import LottieDisplayer from "../../component/lottie/LottieDisplayer";

const IMAGE_LINKS = [
  "https://plus.unsplash.com/premium_photo-1678917827802-721b5f5b4bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format",
];

function LandingPage() {
  const navigate = useNavigate();

  const [width, setWidth] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(width.width);

  return (
    <Container>
      <Section imagelink={IMAGE_LINKS[1]}>
        <SubTitle>블록체인</SubTitle>
        <Title>하이퍼로컬 간편 중고거래서비스</Title>
        <StartBtn
          variant="contained"
          color="success"
          // MUI는 이상하게 스타일링을 인라인으로 넣어야만 되네 왜지?
          style={{ width: "70%", marginTop: "2rem", padding: "0.5rem" }}
          onClick={() => {
            navigate("/store");
          }}
        >
          시작하기
        </StartBtn>

        <LottieWrapper>
          <LottieDisplayer
            animationData={animationData}
            width={width.width < 1200 ? (width.width < 800 ? 300 : 400) : 500}
            height={width.width < 1200 ? (width.width < 800 ? 300 : 400) : 500}
          />
        </LottieWrapper>
      </Section>

      <Section notFirst={false} imagelink={IMAGE_LINKS[0]}>
        <SubTitle>이제 사기 당하지 말자!</SubTitle>
        <Title>경유 에스크로 결제서비스</Title>
        <div style={{ marginTop: "2rem" }}>
          <SubTitle>ERC20토큰 기반</SubTitle>
          <SubTitle>1:1 담보</SubTitle>
        </div>
      </Section>
    </Container>
  );
}

export default LandingPage;
