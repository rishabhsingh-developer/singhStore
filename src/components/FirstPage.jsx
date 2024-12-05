import hero from "../assets/hero.jpg";
export default function FirstPage() {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center justify-evenly h-auto  md:h-[650px] mx-4">
      <div className="md:w-1/2">
        <span className="text-blue-600 text-xl font-medium">WELCOME TO</span>
        <h1 className="text-7xl font-semibold">Singh store</h1>
        <p className="mt-[20px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          facilis veniam perferendis porro vitae repellat quo doloremque
          distinctio iusto quae reprehenderit!
        </p>
        <button className="bg-buttonColor px-4 py-3 text-white mt-[20px] ">
          SHOP NOW
        </button>
      </div>
      <div className=" ">
        <img
          src={hero}
          alt="hero"
          className="h-[200px] sm:h-[360px] w-[550px]"
        />
      </div>
    </div>
  );
}
