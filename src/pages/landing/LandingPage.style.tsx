import { Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  overflow: hidden;
`;

interface SectionProps {
  imagelink?: string;
  notFirst?: boolean;
}

export const Section = styled.section<SectionProps>`
  height: 100vh;
  width: 100%;

  margin-top: ${(props) => (props.notFirst ? "2rem" : "0rem")};
  padding: 4rem;
  display: flex;
  flex-flow: column nowrap;

  background-image: ${(props) =>
    props.imagelink ? `url(${props.imagelink})` : ""};
  background-size: cover;
  opacity: 0.9;
`;

export const Title = styled.p`
  font-weight: 800;
  font-size: 4rem;
`;

export const SubTitle = styled.p`
  font-weight: 800;
  font-size: 3rem;
`;

interface startBtnProps {
  variant?: string;
}
export const StartBtn = styled(Button)<startBtnProps>``;
