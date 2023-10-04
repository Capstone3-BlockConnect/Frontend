import React, { useEffect, useState } from "react";
import {
  CenterMenu,
  LoginButton,
  Logo,
  MenuNav,
  MenuItem,
  ProfileButton,
  RightMenu,
} from "./Header.style";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import normalToast from "../alert/normalToast";
function Header() {
  const navigate = useNavigate();
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
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        블록-커넥트
      </Logo>
      <CenterMenu>
        <MenuItem
          onClick={() => {
            navigate("/introduce");
          }}
        >
          서비스소개
        </MenuItem>

        <MenuItem
          onClick={() => {
            navigate("/store");
          }}
        >
          중고거래
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/service");
          }}
        >
          고객센터
        </MenuItem>
      </CenterMenu>
      <RightMenu>
        <ProfileButton
          variant="outlined"
          color="success"
          endIcon={<AccountCircleIcon />}
        >
          내정보
        </ProfileButton>
        <LoginButton
          variant="outlined"
          color="info"
          endIcon={<LoginIcon />}
          onClick={() => {
            normalToast({ icon: "success", title: "로그인되었습니다" });
          }}
        >
          로그인
        </LoginButton>
      </RightMenu>
    </MenuNav>
  );
}

export default Header;
