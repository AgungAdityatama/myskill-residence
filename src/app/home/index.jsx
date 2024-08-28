import Button from "@/components/General/Button";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";

const HomeIndex = () => {
  return (
    <div className="p-3">
      <div className=" p-3 xl:px-60 xl:py-16 flex flex-col lg:flex-row-reverse items-center justify-center gap-5 lg:gap-14">
        <Image
          src="/img/home.png"
          alt="Home"
          width={350}
          height={300}
          layout="responsive"
          className="max-w-full xl:max-w-[700px]"
        />
        <div className="flex flex-col items-center lg:items-start gap-10">
          <h1 className="text-[1.75rem] lg:text-[2.5rem]">
            Selamat datang di{" "}
            <span className="block text-primary">MySkill Residence</span>
          </h1>
          <p className="text-center lg:text-start lg:text-[1.1rem]">
            Hunian Bergaya Modern untuk Kehidupan Berkualitas. Rumah menjadi
            tempat untuk melanjutkan mimpi. Mulailah cerita serta harapan baru
            keluarga tercinta Anda di MySkill Residence
          </p>
          <div className="flex gap-5">
            <Button label="Kontak Kami" link="#" icon={FiPhone} />
            <Button
              label="Info Detail"
              link="#"
              className="bg-light hover:bg-dark text-content border-content border "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIndex;
