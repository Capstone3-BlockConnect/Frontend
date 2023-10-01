import styled from "styled-components";

interface containerProps {
  isSticky?: boolean;
}

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(15, minmax(80px, auto));

  position: relative;
`;

export const HeaderWrapper = styled.header<containerProps>`
  grid-column: 1 / 6;
  grid-row: 1 / 2;

  position: sticky;
  top: 0;

  z-index: ${(props) => (props.isSticky ? "5" : "1")};
`;
export const Content = styled.section<containerProps>`
  grid-column: 1 / 6;
  grid-row: 2 / 15;
`;

export const FooterWrapper = styled.footer`
  grid-column: 1 / 6;
  grid-row: 15 / 16;
`;
