import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featureProduct } from "../redux/slice/Feature";
import MovieCard from "../components/MovieCard";
import { searchFilter } from "../redux/slice/Filter";
import { searchCategory } from "../redux/slice/Filter";
import { priceFilter } from "../redux/slice/Filter";
import { clearFilter } from "../redux/slice/Filter";

export default function Product() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.feature.data);
  const searchFilterData = useSelector((state) => state.filter.filterData);
  const category = useSelector((state) => state.filter.category);
  const pricefilter = useSelector((state) => state.filter.pricefilter);
  let productData;

  //   const loading = useSelector((state) => state.feature.isLoading);

  useEffect(() => {
    dispatch(featureProduct());
  }, [dispatch]);

  //   function Search(text) {
  //     data.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
  //   }
  if (searchFilterData) {
    productData = data.filter((i) =>
      i.name.toLowerCase().includes(searchFilterData.toLowerCase())
    );
    console.log(productData);
  } else if (category.length > 0) {
    if (category === "all") {
      productData = data;
    } else {
      productData = data.filter((i) =>
        i.category.toLowerCase().includes(category.toLowerCase())
      );
    }
  } else {
    if (priceFilter) {
      const sortData = [...data];

      if (pricefilter == "lowtohigh") {
        productData = sortData.sort((a, b) => a.price - b.price);
      } else {
        productData = sortData.sort((a, b) => b.price - a.price);
      }
    } else {
      productData = data;
    }
  }

  return (
    <div className="h-auto">
      <div className="flex flex-col sm:flex-row justify-between px-[50px] md:px-[150px] my-[50px]">
        <input
          type="text"
          placeholder="SEARCH..."
          className=" border border-black shadow-xl shadow-gray-300"
          onChange={(e) => dispatch(searchFilter(e.target.value))}
        />
        <span className="text-lg ">{productData.length} Product available</span>
        <select
          name=""
          id=""
          className="border border-black"
          onChange={(e) => dispatch(priceFilter(e.target.value))}
        >
          <option value="">Sort by</option>
          <option value="lowtohigh">low-to-high</option>
          <option value="hightolow">high-to-low</option>
        </select>
      </div>
      <div className="flex flex-col sm:flex-row h-full">
        <div className="lg:pl-[150px] h-full lg:w-1/3 mx-5 text-lg">
          <ul className="flex flex-col gap-7">
            <li className="font-medium">Category</li>
            <li
              className="hover:bg-gray-400"
              onClick={() => dispatch(searchCategory("all"))}
            >
              All
            </li>
            <li
              className="hover:bg-gray-400"
              onClick={() => dispatch(searchCategory("mobile"))}
            >
              Mobile
            </li>
            <li
              className="hover:bg-gray-400"
              onClick={() => dispatch(searchCategory("laptop"))}
            >
              Laptop
            </li>
            <li
              className="hover:bg-gray-400"
              onClick={() => dispatch(searchCategory("computer"))}
            >
              Computer
            </li>
            <li
              className="hover:bg-gray-400"
              onClick={() => dispatch(searchCategory("Accessories"))}
            >
              Accessories
            </li>
            <li
              className="hover:bg-gray-400"
              onClick={() => dispatch(searchCategory("Watch"))}
            >
              Watch
            </li>
            <li onClick={() => dispatch(clearFilter())}>
              <button className="bg-buttonColor px-4 py-4">CLEAR FILTER</button>
            </li>
          </ul>
        </div>
        <div className=" h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3  sm:mx-5 bg-gray-100">
          {productData.map((i) => {
            return <MovieCard key={i.id} data={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
