import React from "react";

const team = [
  {
    name: "Soumya Ranjan Patnaik - Director",
    background: "Graduate in Commerce & MBA Finance",
    experience:
      "Over 20 years in high voltage transmission lines and grid substations. Managing Director of S.R. Associates Infrastructure Pvt. Ltd. (SRAIPL), with a turnover of around INR 50 crore. Known for his dynamic approach and extensive political and bureaucratic contacts.",
  },
  {
    name: "NP Gopalakrishnan - Director",
    background: "BSc, BTech IIT Bombay, MS Stanford University",
    experience:
      "Over 40 years in the chemical industry, with a global footprint in setting up factories in Nigeria, Malaysia, and India. Expertise in manufacturing bulk drugs and industrial chemicals.",
  },
  {
    name: "Suraj Kumar Tripathy - Executive Director",
    background: "MSc (Chemistry), PhD (Materials Science & Engineering)",
    experience:
      "Associate Dean at KIIT, with a focus on waste valorization and resource recycling. Extensive research and industry experience in catalysis, water treatment, and biomedical systems.",
  },
  {
    name: "Dipti Ranjan Patnaik - Director",
    background: "Graduate in Commerce",
    experience:
      "Expertise in executing civil and electrical projects. Manages finance and day-to-day operations of ongoing projects and proposed factories.",
  },
];

const TeamCard = ({ member }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-6 bg-white">
      <div className="font-bold text-xl mb-2">{member.name}</div>
      <p className="text-gray-700 text-base">
        <strong>Background:</strong> {member.background}
      </p>
      <p className="text-gray-700 text-base mt-2">
        <strong>Experience:</strong> {member.experience}
      </p>
    </div>
  );
};

const Team = () => {
  return (
    <>
      <h1 className="text-4xl text-center font-bold my-4 text-green-400 relative z-10">
        Team
      </h1>
      <div className="flex flex-wrap justify-center relative z-10">
        {team.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </>
  );
};

export default Team;
