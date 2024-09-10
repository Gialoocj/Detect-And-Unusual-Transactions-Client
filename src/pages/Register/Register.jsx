import React, { useState } from "react";
import {
  ArrowRightIcon,
  EyeIcon,
  EyeOffIcon,
} from "../../components/icons/icons";
import loginBanner from "../../assets/images/bg_login_register.webp";
import fbImg from "../../assets/images/fb-btn.svg";
import googleImg from "../../assets/images/gp-btn.svg";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [hasCharacter, setHasCharacter] = useState("");

  const handleOnclickPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleInputPasswordChange = (e) => {
    setHasCharacter(e.target.value);
  };

  return (
    <>
      <div
        className={`w-full h-[60px] bg-[#f9f9fa] lg:px-[160px] md:px-[32px] px-[12px] flex  items-center  text-[15px]`}
      >
        <Link to="/" className="text-gray-400 hover:text-gradient">
          Trang chủ
        </Link>
        <span>
          <ArrowRightIcon className={`w-[14px] mx-3 font-bold`} />
        </span>
        <span>Đăng ký tài khoản</span>
      </div>

      <div
        className={`bg-[#f0d4d8] w-full py-[20px] lg:py-[80px] lg:px-[160px] md:px-[32px] px-[12px] `}
      >
        <div
          className={`w-full  bg-white rounded-xl px-5 lg:py-[40px] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5`}
        >
          <div className="relative col-span-1 hidden md:block">
            <img
              src={loginBanner}
              alt=""
              srcset=""
              className="lg:w-[520px] md:w-[600px] absolute lg:top-[-80px] md:top-[20px] lg:left-12 md:left-0"
            />
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center py-[20px]  lg:px-[110px] md:px-[20px] text-sm ">
            <h1 className="uppercase lg:text-2xl md:text-xl text-center">
              Đăng ký tài khoản
            </h1>

            <div className="w-full mt-6">
              <input
                type="text"
                name="fullname"
                id=""
                className={`w-full h-[52px] border-2 border-[#EBEBEB] rounded-full text-md px-6 placeholder:text-sm placeholder:text-gray-400 focus:outline-none`}
                placeholder="Họ tên"
              />
            </div>

            <div className="w-full mt-3">
              <input
                type="email"
                name="email"
                id=""
                className={`w-full h-[52px] border-2 border-[#EBEBEB] rounded-full text-md px-6 placeholder:text-sm placeholder:text-gray-400 focus:outline-none`}
                placeholder="Email"
              />
            </div>

            {/* <div className="w-full mt-3">
              <input
                type="text"
                name="phoneNumber"
                id=""
                className={`w-full h-[52px] border-2 border-[#EBEBEB] rounded-full text-md px-6 placeholder:text-sm placeholder:text-gray-400 focus:outline-none`}
                placeholder="Số điện thoại"
              />
            </div> */}

            <div className="w-full h-[52px] border-2 border-[#EBEBEB] rounded-full text-md flex items-center my-3">
              <input
                type={`${isShowPassword ? "text" : "password"}`}
                name="password"
                id=""
                className={`w-full h-full rounded-full px-4 placeholder:text-sm placeholder:text-gray-400 focus:outline-none`}
                placeholder="Mật khẩu"
                onChange={(e) => {
                  handleInputPasswordChange(e);
                }}
              />

              <button>
                {hasCharacter.length > 0 ? (
                  <>
                    {isShowPassword ? (
                      <EyeOffIcon className={`w-[24px]`} />
                    ) : (
                      <EyeIcon className={`w-[24px]`} />
                    )}
                  </>
                ) : null}
              </button>
            </div>

            <button
              className={`w-full h-[52px] rounded-full btn-login text-white`}
            >
              Đăng nhập
            </button>

            <p className="text-gray-500 my-6 text-center">
              Bạn đã có tài khoản, đăng nhập
              <Link to="/login" className="underline ml-1 hover:text-gradient">
                tại đây
              </Link>
            </p>

            <p className="text-center mb-4">Hoặc đăng nhập bằng</p>

            <div className="flex justify-between lg:px-8 ">
              <button className="col-span-1 mx-2 my-[14px] lg:w-[160px] w-1/2 h-[24px]">
                <img src={fbImg} alt="" className="w-full" />
              </button>
              <button className="col-span-1 mx-2 my-[14px] lg:w-[160px] w-1/2 h-[24px]">
                <img src={googleImg} alt="" className="w-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
