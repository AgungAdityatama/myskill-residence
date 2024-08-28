import data from "../../../../data.json";
import Image from "next/image";

const Fasilitas = () => {
  return (
    <div className="flex flex-col gap-10">
      {data.fasilitas.map((data, index) => {
        const flexDirection =
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";
        return (
          <div
            key={index}
            className={`flex flex-col gap-3 md:gap-5 items-start justify-between ${flexDirection}`}
          >
            <div className="flex flex-col gap-3 md:w-1/2">
              <h1 className="text-[1.15rem] font-semibold">{data.judul}</h1>
              <p>{data.penjelasan}</p>
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

export default Fasilitas;
