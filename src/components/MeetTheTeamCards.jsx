export default function MeetTheTeamCards({ name, role, description, image }) {
  return (
    <div className="bg-white border border-black/10 rounded-2xl p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow text-left h-full">
      {/* Avatar Image */}
      <img
        src={image}
        alt={name}
        className="w-14 h-14 object-cover rounded-full mb-6 shrink-0 bg-[#D9D9D9]"
      />

      {/* Content Wrapper with Uniform Gap */}
      <div className="flex flex-col items-start gap-4 w-full">
        <div>
          {/* Member Name */}
          <h3 className="text-lg font-semibold font-mono tracking-tight text-black mb-1">
            {name}
          </h3>

          {/* Role */}
          <p className="text-xs font-mono font-medium text-black/50 tracking-wider">
            {role}
          </p>
        </div>

        {/* Description */}
        <p className="text-black/60 text-xs md:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
