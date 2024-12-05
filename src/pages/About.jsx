import hero from "../assets/hero.jpg";
export default function About() {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center justify-evenly h-auto  md:h-[650px] mx-4">
      <div className="md:w-1/2">
        <span className="text-blue-600 text-xl font-medium">WELCOME TO</span>
        <h1 className="text-7xl font-semibold">Singh store</h1>
        <p className="mt-[20px] ">
          Welcome to Singh E-commerce, your trusted destination for quality
          products and exceptional service. We are committed to providing a
          seamless online shopping experience with a diverse range of products,
          secure payment options, and fast delivery. Our platform is designed
          with user-friendly navigation and responsive support to ensure
          customer satisfaction. At Singh E-commerce, we prioritize quality,
          affordability, and convenience, making your shopping journey enjoyable
          and hassle-free. Thank you for choosing us as your shopping partner!
        </p>
        <button className="bg-buttonColor px-4 py-3 text-white mt-[20px] ">
          SHOP NOW
        </button>
      </div>
      <div className="border border-black ">
        <img
          src={hero}
          alt="hero"
          className="h-[200px] sm:h-[360px] w-[550px]"
        />
      </div>
    </div>
  );
}
