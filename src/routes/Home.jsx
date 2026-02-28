import { Link } from "react-router";
import { backgroundCards } from "../utils/constants";

const Home = () => {
  // Repeat array to fill the entire background
  const cards = [
    ...backgroundCards,
    ...backgroundCards,
    ...backgroundCards,
    ...backgroundCards,
  ];

  return (
    <div className="relative min-h-screen bg-base-300 overflow-hidden flex items-center justify-center">
      {/* 1. Background Grid Pattern */}
      {/* PERFECTED MIDDLE GROUND: Added opacity-50 to dim the cards at the base level */}
      <div className="absolute inset-[-60%] z-0 flex flex-wrap justify-center items-center gap-6 p-4 transform -rotate-12 pointer-events-none opacity-50">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card bg-base-200 w-64 shadow-2xl border border-base-300 overflow-hidden shrink-0"
          >
            {/* Image Section */}
            <figure className="h-44 w-full bg-base-300">
              <img
                src={card.img}
                alt={card.name}
                className="w-full h-full object-cover"
              />
            </figure>

            {/* Card Body */}
            <div className="card-body p-4 gap-2">
              {/* Header */}
              <div>
                <h2 className="card-title text-lg font-extrabold capitalize mb-0">
                  {card.name}
                  <div className="badge badge-neutral badge-sm ml-1">
                    {card.age}
                  </div>
                </h2>
                <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
                  {card.gender}
                </span>
              </div>

              {/* Bio */}
              <p className="text-[11px] text-base-content/80 line-clamp-2 leading-tight">
                {card.description}
              </p>

              {/* Skills Container */}
              <div className="flex flex-wrap gap-1 mt-1">
                {card.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="badge badge-primary badge-outline text-[9px] py-0 px-1.5 h-4 min-h-4 shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              {/* Action Buttons (Circles) */}
              <div className="flex justify-center gap-4 mt-2 pt-2 border-t border-base-300">
                <div className="btn btn-circle btn-sm btn-outline btn-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div className="btn btn-circle btn-sm btn-success text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Global Overlays */}
      {/* PERFECTED MIDDLE GROUND: bg-black/60 perfectly balances the darkness with the backdrop blur */}
      <div className="absolute inset-0 bg-black/60 z-10 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-linear-to-b from-base-300 via-transparent to-base-300 z-10"></div>

      {/* 3. Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="mb-6 text-6xl md:text-[5.5rem] font-black text-white drop-shadow-2xl tracking-tighter leading-tight">
          Start something epic.
        </h1>
        <p className="mb-10 text-xl md:text-2xl font-medium text-white drop-shadow-lg">
          Swipe right on your next co-founder, find a pair-programming partner,
          or just talk code.
        </p>

        <Link
          to="/login"
          className="btn border-none bg-linear-to-r from-pink-500 to-orange-500 text-white font-bold text-xl rounded-full px-12 py-4 h-auto hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(236,72,153,0.4)]"
        >
          Create account
        </Link>
      </div>
    </div>
  );
};

export default Home;
