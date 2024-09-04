import React from "react";
import { ArrowRightIcon } from "../../components/icons/icons";
import loginBanner from "../../assets/images/bg_login_register.webp";

const Login = () => {
  return (
    <>
      <div
        className={`w-full h-[60px] bg-[#f9f9fa] lg:px-[160px] md:px-[32px] px-[12px] flex  items-center  text-[15px]`}
      >
        <span className="text-gray-400 ">Trang chủ</span>
        <span>
          <ArrowRightIcon className={`w-[14px] mx-3 font-bold`} />
        </span>
        <span>Đăng nhập tài khoản</span>
      </div>

      <div
        className={`bg-[#f0d4d8] w-full py-[80px] lg:px-[160px] md:px-[32px] px-[12px] `}
      >
        <div
          className={`w-full h-[532px] bg-white rounded-xl  p-5  grid grid-cols-2`}
        >
          <div className="relative col-span-1">
            <img
              src={loginBanner}
              alt=""
              srcset=""
              className="w-[520px] absolute top-[-64px] left-12"
            />
          </div>
          <div className="col-span-1">
            <h1 className="uppercase">Đăng nhập tài khoản</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
