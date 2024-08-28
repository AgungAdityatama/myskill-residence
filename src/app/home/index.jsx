import Button from "@/components/General/Button";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import Fasilitas from "./Fasilitas";

const HomeIndex = () => {
  return (
    <div className="p-3 flex flex-col">
      <div className=" p-3 py-16 xl:px-20 2xl:px-72 flex flex-col lg:flex-row-reverse items-center justify-center gap-5 lg:gap-14 xl:gap-28">
        <Image
          src="/img/home.png"
          alt="Home"
          width={1000}
          height={1000}
          className="w-full lg:w-1/2"
        />
        <div className="flex flex-col items-center lg:items-start gap-10 lg:w-1/2">
          <h1 className="text-[1.75rem] lg:text-[2.5rem]">
            Selamat datang di{" "}
            <span className="block text-primary">MySkill Residence</span>
          </h1>
          <p className="text-center lg:text-start lg:text-[1.1rem]">
            Hunian Bergaya Modern untuk Kehidupan Berkualitas. Rumah menjadi
            tempat untuk melanjutkan mimpi. Mulailah cerita serta harapan baru
            keluarga tercinta Anda di MySkill Residence.
          </p>
          <div className="flex max-sm:flex-col-reverse gap-5">
            <Button label="Kontak Kami" icon={FiPhone} />
            <Button
              label="Info Detail"
              className="bg-light hover:bg-dark text-content border-content border "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 xl:px-20 2xl:px-72">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[1.3rem] lg:text-[2rem]">
            Fasilitas Yang Dimiliki
          </h1>
          <div className="w-1/2 h-[5px] rounded-md bg-primary"></div>
        </div>
        <Fasilitas />
      </div>
    </div>
  );
};

export default HomeIndex;
