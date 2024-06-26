import Image from "next/image";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12 ">
        <h1 className="text-4xl text-semibold">
          Everything <br /> is better <br /> with a &nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-4 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex items-center gap-2 bg-primary uppercase  text-white px-4 py-2 rounded-full">
            Order Now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn More <Right />
          </button>
        </div>
      </div>

      <div className="relative ">
        <Image
          src={"/pizza.png"}
          alt="pizza"
          layout="fill"
          objectFit="contain"
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
