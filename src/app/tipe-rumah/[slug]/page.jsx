import Image from "next/image";
import data from "../../../../data.json";
import {
  FaBath,
  FaBed,
  FaCar,
  FaDollarSign,
  FaDroplet,
  FaFaucetDrip,
  FaHouse,
  FaMailchimp,
  FaMicrosoft,
  FaPersonShelter,
  FaPhone,
  FaRegPaperPlane,
  FaTelegram,
} from "react-icons/fa6";
import Card from "../Card";
import Link from "next/link";
import Button from "@/components/General/Button";

const detailTipeRumah = ({ params }) => {
  const newData = data.tipe.find((item) => item.slug === params.slug);
  return (
    <div className="flex flex-col items-center gap-32">
      <div className="bg-[url('/img/content-title.png')] w-full h-[10rem] text-white text-[2rem] font-semibold flex flex-col items-center justify-center">
        Rumah {newData.nama}
      </div>
      <div className="p-3 flex flex-col-reverse md:flex-row-reverse gap-3 md:gap-5 items-start justify-between">
        <div className="flex flex-col gap-5 md:w-1/2">
          <h1 className="text-[1.5rem] lg:text-[1.7rem] font-semibold">
            {newData.nama}
          </h1>
          <p>{newData.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card
              icon={FaDollarSign}
              value={newData.harga.value}
              label={newData.harga.label}
            />
            <Card
              icon={FaHouse}
              value={newData.luasBangunan.value}
              label={newData.luasBangunan.label}
            />
            <Card
              icon={FaMicrosoft}
              value={newData.luasTanah.value}
              label={newData.luasTanah.label}
            />
            <Card
              icon={FaBath}
              value={newData.kamarMandi.value}
              label={newData.kamarMandi.label}
            />
            <Card
              icon={FaBed}
              value={newData.kamarTidur.value}
              label={newData.kamarTidur.label}
            />
            <Card
              icon={FaCar}
              value={newData.carport.value}
              label={newData.carport.label}
            />
            <Card
              icon={FaPersonShelter}
              value={newData.kanopi.value}
              label={newData.kanopi.label}
            />
            <Card
              icon={FaFaucetDrip}
              value={newData.pompaAir.value}
              label={newData.pompaAir.label}
            />
            <Card
              icon={FaDroplet}
              value={newData.toren.value}
              label={newData.toren.label}
            />
          </div>
        </div>
        <Image
          src={newData.gambar}
          alt="fasilitas"
          width={1000}
          height={1000}
          className="w-full md:w-1/2"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-5">
        <Image
          src={newData.denah}
          alt="denah rumah"
          width={1000}
          height={1000}
          className="w-full md:w-1/2"
        />
        <div className="w-full md:w-1/2 flex flex-col gap-5 p-5">
          <h1 className="text-[2rem] font-semibold">KONTAK</h1>
          <p>Hubungi kami untuk informasi selanjutnya.</p>
          <div className="flex gap-3 items-center text-[1.15rem] text-blue-600 underline">
            <FaPhone />
            <Link href="#">+62 811 2222 3333</Link>
          </div>
          <div className="flex gap-3 items-center text-[1.15rem] text-blue-600 underline">
            <FaRegPaperPlane />
            <Link href="#">info@myskill.co.id</Link>
          </div>
          <Button
            label="Klik Disini"
            icon={FaPhone}
            className="flex-row-reverse w-fit"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-20">
        <h1 className="text-[2rem] font-semibold">Lihat Tipe Lain</h1>
        <div className="p-3 w-full lg:w-1/2 flex flex-col gap-10">
          {data.tipe
            .filter((item) => item.slug !== params.slug) // Filter data selain yang saat ini terbuka
            .map((item, index) => {
              return (
                <Link key={index} href={`/tipe-rumah/${item.slug}`}>
                  <div className="bg-[url('/img/content-title.png')] w-full h-[10rem] text-white hover:text-blue-600 hover:opacity-70 text-[1.35rem] md:text-[1.75rem] lg:text-[2rem] font-semibold flex flex-col items-center justify-center">
                    Rumah {item.nama}
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default detailTipeRumah;
