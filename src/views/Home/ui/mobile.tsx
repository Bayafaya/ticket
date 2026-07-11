import Image from "next/image";

import { MoviesList } from "@/entities/Movies";
import MainBanner from "@public/assets/logo/mainBanner.png";

export const MobileHomePage = () => {
  return (
    <div className="m-4 space-y-8">
      <div className="bg-white rounded-[14px]">
        <Image src={MainBanner} alt="cinemapark_astana" priority />
      </div>
      <MoviesList />
    </div>
  );
};
