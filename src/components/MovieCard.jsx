import { Link } from "react-router-dom";
export default function MovieCard({ data }) {
  return (
    <Link to={`/singlepage/${data.id}`}>
      <div className=" flex flex-col items-center bg-white rounded-xl py-3 ">
        <img
          src={data.image}
          alt={data.name}
          className="h-[150px] w-[220px] sm:h-[200px] sm:w-[320px] "
        />
        <div className="flex justify-between mt-5 w-full px-[20px] ">
          <span className="text-xl ">{data.name}</span>
          <span className="text-xl text-blue-400">{data.price / 100}</span>
        </div>
      </div>
    </Link>
  );
}
