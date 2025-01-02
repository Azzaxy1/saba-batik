import React from "react";
import { FaUserTie } from "react-icons/fa6";

const OURTEAM = [
  {
    name: "Abdurrohman Azis",
    icon: FaUserTie,
  },
  {
    name: "Sahrul Rosadi",
    icon: FaUserTie,
  },
  {
    name: "Fadila Pristisia Afiani",
    icon: FaUserTie,
  },
  {
    name: "Anggi Gunawan",
    icon: FaUserTie,
  },
  {
    name: "Samsul Aimah",
    icon: FaUserTie,
  },
];

const OurTeam = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Tim Kami</h2>
      <div className="grid grid-cols-1 justify-center md:grid-cols-3 gap-6">
        {OURTEAM.map((team, index) => (
          <div key={index} className="flex flex-col items-center">
            <team.icon className="w-[60px] h-[60px] text-primary" />
            <h3 className="mt-4 text-xl font-semibold">{team.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
