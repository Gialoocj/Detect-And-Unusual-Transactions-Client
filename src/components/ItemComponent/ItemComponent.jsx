import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { Link } from "react-router-dom";
import { CartIcon, HeartIcon, EyeIcon } from "../../components/icons/icons.jsx";
import "./ItemComponent.css";

const ItemComponent = ({ product }) => {
  return (
    <div className="w-full flex flex-col justify-center text-[14px] border border-white hover:border-gray-200 pb-12 relative product px-3 py-3 rounded-md">
      <img src={product.imgUrl} alt="" className="product-img" />
      <Link
        to="/"
        className="text-gray-400 my-2 hover:text-gradient transition-all duration-300 ease-linear"
      >
        {product.productName}
      </Link>
      <p>
        <span>{formatCurrency(product.salesPrice)}</span>{" "}
        <span className="text-[12px] line-through ml-2">
          {formatCurrency(product.basePrice)}
        </span>
      </p>

      <div className="absolute bottom-[140px] w-full flex justify-center active">
        <div className="flex ">
          <button className="w-[56px] h-[56px] bg-white rounded-full shadow-md hover:bg-[#FF636D] hover:text-white flex items-center justify-center">
            <CartIcon className={`w-[24px] h-[24px]`} />
          </button>
          <button className="w-[56px] h-[56px] bg-white rounded-full shadow-md hover:bg-[#FF636D] hover:text-white flex items-center justify-center mx-2">
            <HeartIcon className={`w-[24px] h-[24px]`} />
          </button>
          <button className="w-[56px] h-[56px] bg-white rounded-full shadow-md hover:bg-[#FF636D] hover:text-white flex items-center justify-center">
            <EyeIcon className={`w-[24px] h-[24px]`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;
