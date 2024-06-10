import Image from "next/image";
import WhiteButton from "./components/whitebutton";
export default function Home() {
  return (
    <div>
      <div className="bg-[url('/images/home-cover.png')] w-full bg-cover bg-center ">
        <div className="flex justify-between items-center px-[120px] py-[170px]">
          <div className="flex flex-col gap-5 w-[40%]">
            <div className="text-white text-[60px] font-extrabold">
              Your Dream, Our Responsibility
            </div>
            <div className="text-white text-[20px]">
              UniVision is aimed at developing a centralized platform that
              provides all relevant information to students in selecting
              colleges to apply to, while simultaneously providing their school
              counselors with a dynamic platform to oversee this process.
            </div>
            <WhiteButton text="Get Started" />
          </div>
          <div className="w-[50%]">
            <Image
              src={"/images/banner-secondary.png"}
              height={890}
              width={890}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="section-header pt-5">Our Products</div>
      </div>
    </div>
  );
}
