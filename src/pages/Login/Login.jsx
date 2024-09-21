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
import "./Login.css";
import { login } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [hasCharacter, setHasCharacter] = useState("");
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [validateInput, setValidateInput] = useState({
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
      setValidateInput((prev) => ({
        ...prev,
        email: value ? !emailRegex.test(value) : false,
      }));
    }

    if (name === "password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setValidateInput((prev) => ({
        ...prev,
        password: value ? !passwordRegex.test(value) : false,
      }));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateInput.email === false && validateInput.password === false) {
      dispatch(login(userCredentials)).then((res) => {
        if (res.payload.success === false) {
          toast.error(res.payload.message);
          return;
        }
        toast.success(res.payload.message);

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  return (
    <>
      <div
        className={`w-full h-[60px] bg-[#f9f9fa] lg:px-[160px] md:px-[32px] px-[12px] flex items-center text-[15px]`}
      >
        <Link to="/" className="text-gray-400 hover:text-gradient">
          Trang chủ
        </Link>
        <span>
          <ArrowRightIcon className={`w-[14px] mx-3 font-bold`} />
        </span>
        <span>Đăng nhập tài khoản</span>
      </div>

      <div
        className={`bg-[#f0d4d8] w-full py-[20px] lg:py-[80px] lg:px-[160px] md:px-[32px] px-[12px]`}
      >
        <div
          className={`w-full h-[532px] bg-white rounded-xl p-5 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5`}
        >
          <div className="relative col-span-1 hidden md:block">
            <img
              src={loginBanner}
              alt=""
              className="lg:w-[520px] md:w-[600px] absolute lg:top-[-80px] md:top-[20px] lg:left-12 md:left-0"
            />
          </div>
          <div className="col-span-1 w-full flex flex-col items-center justify-center lg:px-[110px] md:px-[20px] text-sm">
            <h1 className="uppercase lg:text-2xl md:text-xl text-center">
              Đăng nhập tài khoản
            </h1>

            <form onSubmit={handleLogin} className="w-full">
              <div className="w-full mt-6">
                <input
                  type="email"
                  name="email"
                  value={userCredentials.email}
                  className={`w-full h-[52px] border-2 ${
                    validateInput.email ? "border-red-500" : "border-[#EBEBEB]"
                  } rounded-full text-md px-6 placeholder:text-sm placeholder:text-gray-400 focus:outline-none`}
                  placeholder="Email"
                  onChange={handleInputChange}
                  onBlur={checkFormatInput}
                  onKeyDown={handleKeyDown}
                />
                <p
                  className={`text-[13px] mt-1 text-red-500 px-5 ${
                    validateInput.email ? "block" : "hidden"
                  }`}
                >
                  Email không đúng định dạng
                </p>
              </div>

              <div className="w-full my-3">
                <div
                  className={`w-full h-[52px] border-2 ${
                    validateInput.password
                      ? "border-red-500"
                      : "border-[#EBEBEB]"
                  } rounded-full text-md flex items-center`}
                >
                  <input
                    type={isShowPassword ? "text" : "password"}
                    name="password"
                    value={userCredentials.password}
                    className={`w-full h-full rounded-full px-4 placeholder:text-sm placeholder:text-gray-400 focus:outline-none`}
                    placeholder="Mật khẩu"
                    onChange={handleInputChange}
                    onBlur={checkFormatInput}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    type="button"
                    onClick={handleOnclickPassword}
                    className="w-[24px] h-[24px] flex items-center justify-center"
                  >
                    {hasCharacter.length > 0 ? (
                      <div>{isShowPassword ? <EyeOffIcon /> : <EyeIcon />}</div>
                    ) : null}
                  </button>
                </div>
                <p
                  className={`text-[13px] mt-1 text-red-500 px-5 ${
                    validateInput.password ? "block" : "hidden"
                  }`}
                >
                  Mật khẩu không đúng định dạng
                </p>
              </div>

              <button
                type="submit"
                className={`w-full h-[52px] rounded-full btn-login text-white`}
              >
                Đăng nhập
              </button>
            </form>

            <p className="text-gray-500 my-6 text-center">
              Bạn chưa có tài khoản, vui lòng đăng ký
              <Link
                to="/register"
                className="underline ml-1 hover:text-gradient"
              >
                tại đây
              </Link>
            </p>

            <p className="text-center mb-4">Hoặc đăng nhập bằng</p>

            <div className="flex justify-between lg:px-8">
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

export default Login;
