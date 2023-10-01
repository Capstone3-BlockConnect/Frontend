import React, { useEffect, useState } from "react";
import {
  CenterMenu,
  LoginButton,
  Logo,
  MenuNav,
  MenuItem,
} from "./Header.style";
import LoginIcon from "@mui/icons-material/Login";
function Header() {
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
    <MenuNav isSticky={isSticky}>
      <Logo>블록커넥트</Logo>
      <CenterMenu>
        <MenuItem>서비스소개</MenuItem>
        <MenuItem>중고거래</MenuItem>
        <MenuItem>고객센터</MenuItem>
      </CenterMenu>
      <LoginButton variant="outlined" color="info" endIcon={<LoginIcon />}>
        로그인
      </LoginButton>
    </MenuNav>
  );
}

export default Header;
