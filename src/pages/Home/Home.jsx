import React from "react";
import { Link } from "react-router-dom";
import Slider1 from "../../assets/images/slider_1.webp";
import Banner1 from "../../assets/images/banner_1.webp";
import Banner2 from "../../assets/images/banner_2.webp";
import Banner3 from "../../assets/images/banner_3.webp";
import bgTitle from "../../assets/images/bg_title.webp";
import BgDealWeekend from "../../assets/images/bg_dealweekend.webp";
import { MenuIcon } from "../../components/icons/icons";
import "./Home.css";

import ItemComponent from "../../components/ItemComponent/ItemComponent";

const Home = () => {
  const categories = [
    {
      name: "Nhẫn đính hôn",
      path: "#",
    },
    {
      name: "Nhẫn cưới",
      path: "#",
    },
    {
      name: "Nhẫn kim cương",
      path: "#",
    },
    {
      name: "Nhẫn đá quý",
      path: "#",
    },
    {
      name: "Nhẫn ngọc trai",
      path: "#",
    },
    {
      name: "Vòng đeo cổ vàng",
      path: "#",
    },
  ];

  const productsInformation = [
    {
      imgUrl:
        "https://bizweb.dktcdn.net/thumb/large/100/338/247/products/4.jpg?v=1545866365553",
      productName: "Khuyên tai đá",
      salesPrice: 400000,
      basePrice: 500000,
    },
    {
      imgUrl:
        "https://bizweb.dktcdn.net/thumb/large/100/338/247/products/4.jpg?v=1545866365553",
      productName: "Khuyên tai đá",
      salesPrice: 400000,
      basePrice: 500000,
    },
    {
      imgUrl:
        "https://bizweb.dktcdn.net/thumb/large/100/338/247/products/4.jpg?v=1545866365553",
      productName: "Khuyên tai đá",
      salesPrice: 400000,
      basePrice: 500000,
    },
    {
      imgUrl:
        "https://bizweb.dktcdn.net/thumb/large/100/338/247/products/4.jpg?v=1545866365553",
      productName: "Khuyên tai đá",
      salesPrice: 400000,
      basePrice: 500000,
    },
    {
      imgUrl:
        "https://bizweb.dktcdn.net/thumb/large/100/338/247/products/4.jpg?v=1545866365553",
      productName: "Khuyên tai đá",
      salesPrice: 400000,
      basePrice: 500000,
    },
    {
      imgUrl:
        "https://bizweb.dktcdn.net/thumb/large/100/338/247/products/4.jpg?v=1545866365553",
      productName: "Khuyên tai đá",
      salesPrice: 400000,
      basePrice: 500000,
    },
    {
      imgUrl:
        "https://bizweb.dktcdn.net/thumb/large/100/338/247/products/4.jpg?v=1545866365553",
      productName: "Khuyên tai đá",
      salesPrice: 400000,
      basePrice: 500000,
    },
    {
      imgUrl:
        "https://bizweb.dktcdn.net/thumb/large/100/338/247/products/4.jpg?v=1545866365553",
      productName: "Khuyên tai đá",
      salesPrice: 400000,
      basePrice: 500000,
    },
    {
      imgUrl:
        "https://bizweb.dktcdn.net/thumb/large/100/338/247/products/4.jpg?v=1545866365553",
      productName: "Khuyên tai đá",
      salesPrice: 400000,
      basePrice: 500000,
    },
    {
      imgUrl:
        "https://bizweb.dktcdn.net/thumb/large/100/338/247/products/4.jpg?v=1545866365553",
      productName: "Khuyên tai đá",
      salesPrice: 400000,
      basePrice: 500000,
    },
    {
      imgUrl:
        "https://bizweb.dktcdn.net/thumb/large/100/338/247/products/4.jpg?v=1545866365553",
      productName: "Khuyên tai đá",
      salesPrice: 400000,
      basePrice: 500000,
    },
    {
      imgUrl:
        "https://bizweb.dktcdn.net/thumb/large/100/338/247/products/4.jpg?v=1545866365553",
      productName: "Khuyên tai đá",
      salesPrice: 400000,
      basePrice: 500000,
    },
  ];

  const [showMenu, setShowMenu] = React.useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="lg:px-[160px]">
      <div>
        <img src={Slider1} alt="slider1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        <div className="col-span-1  flex items-end justify-end my-1 md:my-0 lg:my-0">
          <img
            src={Banner1}
            alt="banner1"
            className="w-full h-full md:pl-2 md:py-2 lg:pl-2 lg:py-3"
          />
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-2 align-bottom justify-end">
          <img
            src={Banner2}
            alt="banner2"
            className="w-full h-full lg:pl-2 lg:py-2"
          />
        </div>
      </div>

      <div className="flex flex-col items-start md:items-start lg:flex-row lg:items-center my-2 w-full">
        <div className="hidden md:hidden lg:block">
          <img src={bgTitle} alt="" />
        </div>

        <button
          type="button"
          className="hover:cursor-pointer flex justify-center items-center hover:text-gradient text-lg lg:hidden"
          onClick={handleShowMenu}
        >
          <MenuIcon className={`w-[32px] text-[#FF636D] mr-2 `} />
          <span>Menu</span>
        </button>

        <div
          className={`lg:block px-2 md:px-5 lg:px-0 mt-2 w-full ${
            showMenu ? "grid" : "hidden"
          }`}
        >
          {categories.map((category, idx) => {
            return (
              <Link
                to={category.path}
                key={idx}
                className=" w-full hover:text-gradient transition-all duration-300 ease-linear px-0 py-3 lg:py-0 md:px-3 lg:px-5 mx-1 border-b md:border-b lg:border-r lg:border-b-0 border-gray-300 last:border-0 text-lg md:text-md lg:text-[14px]"
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
        {productsInformation.map((product, idx) => {
          return <ItemComponent key={idx} product={product} />;
        })}
      </div>

      <div className="w-full bg-[#F0D3D8] px-4 py-8 lg:px-12 lg:py-[120px] lg:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div></div>
          <div className="flex flex-col justify-start md:flex-row md:items-center">
            <img src={bgTitle} alt="" className="w-[120px]" />
            <span className="uppercase text-3xl">Deal cuối tuần</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-[456px] bg-white rounded-xl shadow-lg">
          <div className="cols-span-1 hidden md:block">
            <img
              src={BgDealWeekend}
              alt="bg_deal_weekend"
              className="h-full w-full object-fill md:scale-100 lg:scale-110 lg:translate-y-[-40px]"
            />
          </div>
          <div className="cols-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
