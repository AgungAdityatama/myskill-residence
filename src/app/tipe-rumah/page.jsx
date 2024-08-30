import Tipe from "./Tipe";

const TipeRumah = () => {
  return (
    <div className="flex flex-col items-center gap-32">
      <div className="bg-[url('/img/content-title.png')] w-full h-[10rem] text-white text-[2rem] font-semibold flex flex-col items-center justify-center">
        Tipe Rumah
      </div>
      <div className="flex flex-col items-center gap-12 xl:px-20 2xl:px-72">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[1.3rem] lg:text-[2rem]">
            Hunian Bergaya Modern
          </h1>
          <div className="w-1/2 h-[5px] rounded-md bg-primary"></div>
        </div>
        <Tipe />
      </div>
    </div>
  );
};

export default TipeRumah;
