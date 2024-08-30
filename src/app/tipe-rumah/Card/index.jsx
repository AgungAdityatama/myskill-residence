import React from "react";

const Card = ({ icon: Icon, value, label }) => {
  return (
    <div className="w-full rounded-lg shadow-xl flex flex-col gap-5 p-5 border-2">
      <Icon className="text-3xl" />
      <div>
        <p className="text-3xl font-semibold">{value}</p>
        <p className="text-lg">{label}</p>
      </div>
    </div>
  );
};

export default Card;
