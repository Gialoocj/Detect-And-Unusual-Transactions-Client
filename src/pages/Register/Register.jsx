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
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../../api/authApi";

const Register = () => {
  const dispatch = useDispatch();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [hasCharacter, setHasCharacter] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [validateInput, setValidateInput] = useState({
    username: false,
    email: false,
    password: false,
  });

  const handleOnclickPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleInputPasswordChange = (e) => {
    setHasCharacter(e.target.value);
  };

  const handleInputChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const checkFormatInput = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (value === "") {
        setValidateInput({ ...validateInput, email: false });
      } else if (!emailRegex.test(value)) {
        setValidateInput({ ...validateInput, email: true });
      } else {
        setValidateInput({ ...validateInput, email: false });
      }
    }

    if (name === "password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (value === "") {
        setValidateInput({ ...validateInput, password: false });
      } else if (!passwordRegex.test(value)) {
        setValidateInput({ ...validateInput, password: true });
      } else {
        setValidateInput({ ...validateInput, password: false });
      }
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(register(userCredentials)).then((res) => {
      if (!res) {
        toast.error("Có lỗi xảy ra trong quá trình xử lý");
        return;
      }

      if (res.payload.code !== 200) {
        toast.error(res.payload.message);
        return;
      }

      toast.success(res.payload.data.message);

      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleRegister(e);
    }
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
          <form onSubmit={handleRegister} className="w-full">
            <div className="col-span-1 flex flex-col items-center justify-center py-[20px]  lg:px-[110px] md:px-[20px] text-sm ">
              <h1 className="uppercase lg:text-2xl md:text-xl text-center">
                Đăng ký tài khoản
              </h1>
              <div className="w-full mt-6">
                <input
                  type="text"
                  name="username"
                  id=""
                  className={`w-full h-[52px] border-2 border-[#EBEBEB] rounded-full text-md px-6 placeholder:text-sm placeholder:text-gray-400 focus:outline-none`}
                  placeholder="Họ tên"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div className="w-full mt-3">
                <input
                  type="email"
                  name="email"
                  id=""
                  className={`w-full h-[52px] border-2 border-[#EBEBEB] rounded-full text-md px-6 placeholder:text-sm placeholder:text-gray-400 focus:outline-none ${
                    validateInput.email ? "border-red-500" : "border-[#EBEBEB]"
                  }`}
                  placeholder="Email"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  onBlur={(e) => {
                    checkFormatInput(e);
                  }}
                  onKeyDown={handleKeyDown}
                />
                <p
                  className={`${
                    validateInput.email ? "block" : "hidden"
                  } text-[13px] mt-1 text-red-500 px-5 `}
                >
                  Email không đúng định dạng
                </p>
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
              <div className="w-full my-3">
                <div
                  className={`w-full h-[52px] border-2 border-[#EBEBEB] rounded-full text-md flex items-center ${
                    validateInput.password
                      ? "border-red-500"
                      : "border-[#EBEBEB]"
                  }`}
                >
                  <input
                    type={`${isShowPassword ? "text" : "password"}`}
                    name="password"
                    id=""
                    className={`w-full h-full rounded-full px-4 placeholder:text-sm placeholder:text-gray-400 focus:outline-none `}
                    placeholder="Mật khẩu"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    onBlur={(e) => {
                      checkFormatInput(e);
                    }}
                    onKeyDown={handleKeyDown}
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
                <p
                  className={`${
                    validateInput.password ? "block" : "hidden"
                  } text-[13px] mt-1 text-red-500 px-5 `}
                >
                  Mật khẩu không đúng định dạng
                </p>
              </div>
              <div className="flex items-center w-full justify-between ml-2 mb-2 px-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="showPassword"
                    id=""
                    className="w-4 h-4"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  />
                  <span className="ml-2 ">Hiển thị mật khẩu</span>
                </div>
                <Link
                  to="/forgot-password"
                  className=" ml-1 hover:text-gradient"
                >
                  Quên mật khẩu
                </Link>
              </div>
              <button
                className={`w-full h-[52px] rounded-full btn-login text-white hover:cursor-pointer  `}
                type="submit"
              >
                Đăng ký
              </button>
              <p className="text-gray-500 my-6 text-center">
                Bạn đã có tài khoản, đăng nhập
                <Link
                  to="/login"
                  className="underline ml-1 hover:text-gradient"
                >
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
