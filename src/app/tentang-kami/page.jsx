import Button from "@/components/General/Button";
import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa6";

const TentangKami = () => {
  return (
    <div className="flex flex-col items-center gap-32">
      <div className="bg-[url('/img/content-title.png')] w-full h-[10rem] text-white text-[2rem] font-semibold flex flex-col items-center justify-center">
        Tentang Kami
      </div>
      <div className="p-12 bg-cyan-100 mx-3 sm:mx-12 rounded-lg flex max-lg:flex-col gap-10 max-w-7xl">
        <Image
          src="/img/logo.png"
          alt="logo"
          width={1000}
          height={1000}
          className="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 h-1/2 m-auto"
        />
        <div className="flex flex-col gap-10 lg:w-1/2">
          <div className="flex flex-col gap-3">
            <h1 className="text-[1.5rem] font-semibold">MySkill Residence</h1>
            <p>
              Selamat datang di MySkill Residence, suatu persembahan hunian
              modern yang menggabungkan kenyamanan, keamanan, dan gaya hidup
              unggul. Kami bangga menjadi pilihan utama bagi mereka yang mencari
              tempat tinggal yang mewah dan memenuhi standar tinggi.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.15rem] font-bold">Visi dan Misi Kami</h2>
            <p>
              Di MySkill Residence, kami memiliki visi untuk menciptakan
              komunitas yang harmonis, di mana setiap penghuni merasa
              diberdayakan untuk mencapai potensi terbaik mereka. Misi kami
              adalah memberikan hunian yang tidak hanya memenuhi kebutuhan
              praktis, tetapi juga merangkul kehidupan modern dengan segala
              fasilitasnya.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.15rem] font-bold">
              Filosofi MySkill Residence
            </h2>
            <p>
              1. Inovasi Tanpa Batas : Kami percaya bahwa inovasi adalah kunci
              keunggulan. Oleh karena itu, setiap aspek desain dan fasilitas di
              MySkill Residence dirancang dengan tekad untuk terus berinovasi
              dan memenuhi tuntutan gaya hidup modern.
              <br />
              2. Kenyamanan Sepenuhnya: Kami memahami bahwa rumah adalah tempat
              yang seharusnya memberikan kenyamanan tak terbatas. MySkill
              Residence memberikan perhatian khusus terhadap detail dan
              memberikan fasilitas terbaik untuk menciptakan pengalaman tinggal
              yang tak terlupakan.
            </p>
          </div>
          <p>
            Bergabunglah dengan MySkill Residence, MySkill Residence bukan hanya
            tempat tinggal, ini adalah gaya hidup. Kami mengundang Anda untuk
            bergabung dengan eksklusif yang memberikan nilai lebih dari sekadar
            tempat tinggal. Selamat datang di rumah Anda yang baru ! Kontak kami
          </p>
          <Button label="Kontak Kami" icon={FaPhone} className="w-fit" />
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
