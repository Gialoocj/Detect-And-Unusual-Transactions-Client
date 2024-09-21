import React, { useEffect, useRef, useState } from "react";
import {
  MenuIcon,
  SearchIcon,
  UserIcon,
  UserIcon2,
  CartIcon,
} from "../../../components/icons/icons";
import logo from "../../../assets/images/logo.webp";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

const categories = [
  { name: "Trang chủ", path: "/" },
  { name: "Giới thiệu", path: "/introduce" },
  {
    name: "Sản phẩm",
    path: "/products",
  },
  {
    name: "Tin tức",
    path: "/news",
  },
  {
    name: "Liên hệ",
    path: "/contact",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const cartRef = useRef(null);
  const userRef = useRef(null);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenMenuLoggedIn, setIsOpenMenuLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpenMenu(false);
      }

      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartVisible(false);
      }

      if (userRef.current && !userRef.current.contains(event.target)) {
        setIsOpenMenuLoggedIn(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOnClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleOpenMenuLoggedIn = () => {
    setIsOpenMenuLoggedIn(!isOpenMenuLoggedIn);
  };

  const handleToggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleDirection = (target) => {
    navigate(target);
  };

  useEffect(() => {
    const location = window.location.pathname;
    const currentPathName = location.split("/")[1];

    if (currentPathName === "login" || currentPathName === "register") {
      setIsActive(false);
    } else setIsActive(true);
  }, []);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      console.log(accessToken);
      return;
    }

    console.log(accessToken);
  });

  return (
    <div
      className={`flex items-center justify-between lg:px-[160px] lg:py-[24px] md:px-[24px] md:py-[12px] py-[12px] pr-[20px] pl-2 relative`}
    >
      <div
        className={`w-[100vw] h-[100vh] bg-black opacity-40 absolute top-0 left-0 ${
          isOpenMenu ? "block" : "hidden"
        } z-0`}
      ></div>
      <div
        className={`flex items-center justify-center`}
        onClick={handleOnClickMenu}
        ref={buttonRef}
      >
        <button
          className={`lg:w-[40px] lg:h-[40px] md:w-[36px] md:h-[36px] w-[32px] h-[32px] rounded-full bg-gradient-to-r from-[#FF636D] to-[#FF816C] flex justify-center items-center`}
        >
          <MenuIcon className={`lg:w-[24px] w-[20px] text-white`} />
        </button>
        <span className="text-md ml-3 hover:cursor-pointer hover:text-gradient hidden md:block lg:block">
          Danh mục
        </span>
      </div>
      <div>
        <img
          src={logo}
          className="lg:w-[220px] md:w-[200px] w-[160px]"
          alt="logo"
        />
      </div>

      <div
        className={`lg:w-[140px] md:w-[130px] w-[84px] flex items-center justify-between  ${
          isActive ? "opacity-100" : ""
        }`}
      >
        <button className={`hover:cursor-pointer`}>
          <SearchIcon className={`w-[22px] md:w-[28px] font-bold`} />
        </button>
        <div className="relative" ref={userRef}>
          <button
            className={`hover:cursor-pointer`}
            onClick={handleOpenMenuLoggedIn}
          >
            <UserIcon className={`w-[22px] md:w-[28px] font-bold`} />
          </button>

          <div
            className={`absolute lg:left-[-88px] md:right-[-56px] md:top-[34px] right-[-32px] top-[28px] border-[1px] shadow-lg px-5 py-1 w-[200px] rounded-md border-[#FF636D] text-sm bg-white flex flex-col ${
              isOpenMenuLoggedIn ? "opacity-100 scale-100" : "opacity-0 scale-0"
            } transition-all duration-300 ease-in-out`}
          >
            <button
              className="w-[160px] border-[1px] border-[#FF636D] py-2 rounded-full font-semibold hover:bg-text-gradient hover:text-white my-2 transition-colors duration-150 ease-linear"
              onClick={() => {
                handleDirection("/login");
                setIsOpenMenuLoggedIn(false);
              }}
            >
              Đăng nhập
            </button>
            <button
              className="w-[160px] border-[1px] border-[#FF636D] py-2 rounded-full font-semibold hover:bg-text-gradient hover:text-white my-2 transition-colors duration-150 ease-linear"
              onClick={() => {
                handleDirection("/register");
                setIsOpenMenuLoggedIn(false);
              }}
            >
              Đăng ký
            </button>
          </div>
        </div>
        <div className="relative" ref={cartRef} onClick={handleToggleCart}>
          <button className="relative">
            <CartIcon className={`w-[22px] md:w-[28px] font-bold`} />
            <div
              className={`absolute top-[-16px] right-[-16px] bg-red-400 w-[24px] h-[24px] rounded-full text-white text-[14px] flex justify-center items-center `}
            >
              0
            </div>
          </button>

          <div
            className={`absolute right-0 border-[1px] shadow-lg px-5 py-2 rounded-md border-[#FF636D] w-[240px] text-sm bg-white ${
              isCartVisible ? "animate-fall-down" : "hidden"
            } transition-all duration-300 ease-in-out`}
          >
            Không có sản phẩm nào trong giỏ hàng
          </div>
        </div>
      </div>

      <div
        className={`absolute z-10 top-0 left-0 lg:w-[400px] md:w-[400px] w-[300px] h-[100vh] bg-[#FF7383] ${
          isOpenMenu ? "translate-x-0" : "translate-x-[-100%]"
        } transition-all duration-300 ease-in-out lg:px-12 px-10 list-none pt-[120px]`}
        ref={menuRef}
      >
        {categories.map((category, key) => {
          return (
            <Link
              className={`border-t-[0.5px] border-[#F997A2] py-3 text-[14px] uppercase text-white font-semibold flex justify-end hover:cursor-pointer hover:text-black transition-all duration-300`}
              to={category.path}
              key={key}
              onClick={handleOnClickMenu}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
