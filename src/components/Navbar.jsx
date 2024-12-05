import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
  const [bar, setBar] = useState(false);
  const card = useSelector((state) => state.addtocard.card);

  return (
    <nav className=" px-6 py-6 bg-gray-100">
      <div className="flex justify-between items-center ">
        <h1 className="text-6xl">
          {" "}
          <Link to="/">🛒</Link>
        </h1>
        <ul className="hidden md:flex gap-14 items-center text-xl  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            <Link to="/product">Product</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button className="bg-buttonColor px-3 py-3 text-white">
              LOGE IN
            </button>
          </li>
          <li>
            <Link to={"/card"}>
              <span className="flex justify-center items-center text-white absolute top-5 right-4 rounded-[50px] h-[20px] w-[20px] bg-buttonColor ">
                {card.length}
              </span>
              <CiShoppingCart size={36} />
            </Link>
          </li>
        </ul>
        <div className="block md:hidden" onClick={() => setBar(!bar)}>
          {bar ? <RxCross1 size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      <div className="absolute top-[105px] right-0 z-30 w-full  bg-gray-100">
        {bar ? (
          <div className="  ">
            <ul className="flex flex-col  gap-14 items-center text-xl ">
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <Link to="/about">About</Link>{" "}
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                {" "}
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <button className="bg-buttonColor px-3 py-3 text-white">
                  LOGE IN
                </button>
              </li>
              <li>
                <Link to={"/card"}>
                  <span className="flex justify-center items-center text-white relative left-3 rounded-[50px] h-[20px] w-[20px] bg-buttonColor ">
                    {card.length}
                  </span>
                  <CiShoppingCart size={36} />
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
