import { useEffect } from "react";
import { singleData } from "../redux/slice/Feature";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbReplace } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { addtocard } from "../redux/slice/addToCard";

export default function SinglePage() {
  const single = useSelector((state) => state.feature.singleData);
  const singleLoading = useSelector((state) => state.feature.singleLoading);
  const card = useSelector((state) => state.addtocard.card);

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleData(id));
  }, [dispatch, id]);

  if (singleLoading) {
    return <p>Loading...</p>;
  }

  if (!single || !single.image) {
    return <p>No data available</p>;
  }

  return (
    <div className="">
      {singleLoading ? (
        ""
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center gap-[100px] h-auto md:h-[600px] md:px-[50px]">
          <div className="flex flex-col md:flex-row items-center gap-8  md:w-1/2 w-full">
            <div className="flex flex-row md:flex md:flex-col gap-3  justify-center mt-5">
              {single.image.map((i) => {
                return (
                  <img
                    src={i.url}
                    alt="img"
                    key={i.id}
                    className="h-[50px] w-[70px] md:h-[100px] md:w-[150px]"
                  />
                );
              })}
            </div>
            <div>
              <img
                src={single.image[0].url}
                alt="img"
                className="h-[250px] w-[400px]"
              />
            </div>
          </div>
          <div className=" flex flex-col md:items-start items-center gap-3 md:w-1/2 w-full text-lg font-medium px-3">
            <h2 className=" font-medium text-5xl">{single.name}</h2>
            <span className="flex gap-2 items-center">
              <CiStar size={32} fill="gold" />
              {single.stars}
            </span>
            <span className="text-green-400 font-light">
              reviews: {single.reviews}
            </span>
            <span className="font-light">Price: {single.price / 10}</span>
            <p className=" font-normal text-sm">{single.description}</p>
            <div className="grid grid-cols-2 md:flex gap-5 ">
              <div className="flex flex-col items-center justify-center gap-2">
                <MdOutlineLocalShipping size={32} />
                <span>Free Delivery</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <TbReplace size={32} />
                <span>30 Days Replacement</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <MdOutlineLocalShipping size={32} />
                <span>Singh Delivered</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <MdOutlineSecurity size={32} />
                <span>2 Year Warranty</span>
              </div>
            </div>
            <button
              className="bg-buttonColor px-4 py-4 w-[150px] mb-3"
              onClick={() => dispatch(addtocard({ card, product: single }))}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
