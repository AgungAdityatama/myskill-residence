import Image from "next/image";
import data from "../../../../data.json";
import { FaBath, FaBed, FaHouse, FaMicrosoft } from "react-icons/fa6";
import Button from "@/components/General/Button";
import Card from "../Card";

const Tipe = () => {
  return (
    <div className="flex flex-col gap-20">
      {data.tipe.map((data, index) => {
        const flexDirection =
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";
        return (
          <div
            key={index}
            className={`flex flex-col-reverse gap-3 md:gap-5 items-start justify-between ${flexDirection}`}
          >
            <div className="flex flex-col gap-5 md:w-1/2">
              <h1 className="text-[1.5rem] lg:text-[1.7rem] font-semibold">
                {data.nama}
              </h1>
              <p>{data.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Card
                  icon={FaHouse}
                  value={data.luasBangunan.value}
                  label={data.luasBangunan.label}
                />
                <Card
                  icon={FaMicrosoft}
                  value={data.luasTanah.value}
                  label={data.luasTanah.label}
                />
                <Card
                  icon={FaBath}
                  value={data.kamarMandi.value}
                  label={data.kamarMandi.label}
                />
                <Card
                  icon={FaBed}
                  value={data.kamarTidur.value}
                  label={data.kamarTidur.label}
                />
              </div>
              <Button
                label="Selengkapnya"
                link={`/tipe-rumah/${data.slug}`}
                className="w-fit"
              />
            </div>
            <Image
              src={data.gambar}
              alt="fasilitas"
              width={1000}
              height={1000}
              className="w-full md:w-1/2"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tipe;
