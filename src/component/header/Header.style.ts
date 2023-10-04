import { Button } from "@mui/material";
import styled from "styled-components";
import { mediaQuaries } from "../../style/mediaQuaries";

interface navProps {
  isSticky?: boolean;
}

export const MenuNav = styled.nav<navProps>`
  width: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0.7rem 2rem 1rem 2rem;
  border-bottom: ${(props) =>
    props.isSticky ? "1px solid white" : "1px solid gray"};

  color: ${(props) => (props.isSticky ? "white" : "black")};

  @media (max-width: ${mediaQuaries.TABLET}px) {
    flex-flow: column wrap;
  }
`;

export const Logo = styled.p`
  white-space: nowrap;
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 1.2rem;

  display: flex;
  align-items: center;

  flex-shrink: 0;

  @media (max-width: ${mediaQuaries.TABLET}px) {
    width: 100%;
  }
`;

export const WordBoxWithLottie = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
`;

export const MenuItem = styled.p`
  white-space: nowrap;

  font-weight: 800;

  display: flex;
  align-items: center;

  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0; // 아이템의 하단에 위치
    left: 0; // 아이템의 왼쪽에서 시작
    height: 2px; // 선의 높이
    width: 0; // 초기 상태에서 선의 너비는 0
    background-color: black; // 선의 색상
    transition: width 0.5s ease; // 너비 변화에 대한 전환 효과
  }

  &:hover:after {
    width: 100%; // hover 상태에서 선의 너비를 100%로 변경
  }
`;

export const CenterMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  column-gap: 4rem;
  margin: 0rem 4rem 0rem 4rem;

  width: 100%;
  flex-shrink: 1;

  @media (max-width: ${mediaQuaries.TABLET}px) {
    align-items: center;
    margin: 0;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 10px;
  @media (max-width: ${mediaQuaries.TABLET}px) {
    width: 100%;
    margin-top: 1rem;
    justify-content: flex-end;
  }
`;

export const ProfileButton = styled(Button)`
  white-space: nowrap;
  border: 3px solid black;
  border-radius: 30px;
  padding: 0.5rem 0.3rem 0.5rem 0.3rem;
  flex-shrink: 0;
`;

export const LoginButton = styled(Button)`
  white-space: nowrap;
  border: 3px solid black;
  border-radius: 30px;
  padding: 0.5rem 0.3rem 0.5rem 0.3rem;
  flex-shrink: 0;
`;

export const LottieWrapper = styled.div`
  position: relative;
  top: 10%;
  left: 10%;

  @media (max-width: ${mediaQuaries.DESKTOP}px) {
  }
`;
