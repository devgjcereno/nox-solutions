import MeetTheTeamCards from "../components/MeetTheTeamCards";
import keanPic from "../assets/kean.jpg";
import glennPic from "../assets/glenn.jpg";

export default function MeetTheTeam() {
  const teamMembers = [
    {
      name: "Kean Joshua T.",
      role: "Front-End Developer",
      description: "Full-stack Developer focused on UI/UX.",
      image: keanPic, // Pass the imported variable reference
    },
    {
      name: "Glenn C.",
      role: "Back-End Developer",
      description: "Full-stack Developer focused on Functionality.",
      image: glennPic, // Pass the imported variable reference
    },
  ];

  return (
    <section className="bg-[#FAFAFA] text-black min-h-196.25 py-20 px-8 md:px-24 flex flex-col justify-center border-b border-black/15">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-black/40 mb-2 block">
            THE PEOPLE
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight font-mono">
              MEET THE TEAM
            </h2>
            <p className="text-black/60 max-w-sm text-sm md:text-base">
              A small, focused group. Each person owns their craft - no
              passengers.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <MeetTheTeamCards
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
