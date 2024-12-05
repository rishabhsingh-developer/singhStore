import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featureProduct } from "../redux/slice/Feature";
import MovieCard from "./MovieCard";

export default function Feature() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.feature.data);
  const loading = useSelector((state) => state.feature.isLoading);
  const featureData = data.filter((i) => i.featured === true);

  useEffect(() => {
    dispatch(featureProduct());
  }, [dispatch]);
  return (
    <div className="flex flex-col justify-center gap-3 px-[20px] md:px-[70px] h-auto md:h-[600px]  bg-gray-100">
      <span className="text-buttonColor ">CHECK NOW!</span>
      <span className="text-5xl font-semibold"> Our Feature Services</span>
      <div className="flex justify-center items-center ">
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <div className="flex flex-col md:flex-row justify-between gap-[50px] mt-[30px] ">
            {featureData.map((i) => {
              return <MovieCard key={i.id} data={i} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
