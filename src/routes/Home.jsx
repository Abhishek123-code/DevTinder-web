import { Link } from "react-router";

const Home = () => {
  // Dummy data tailored for DevConnect cards
  const backgroundCards = [
    {
      id: 1,
      name: "Rahul, 24",
      role: "MERN Stack Dev",
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      id: 2,
      name: "Sneha, 27",
      role: "Node.js Architect",
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      id: 3,
      name: "Amit, 22",
      role: "Codeforces Specialist",
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      id: 4,
      name: "Priya, 26",
      role: "MongoDB Expert",
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      id: 5,
      name: "Vikram, 25",
      role: "Backend Engineer",
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      id: 6,
      name: "Anjali, 23",
      role: "Competitive Programmer",
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      id: 7,
      name: "Karan, 28",
      role: "Express.js Guru",
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      id: 8,
      name: "Neha, 21",
      role: "Frontend Developer",
      img: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
  ];

  return (
    <div className="hero min-h-screen bg-neutral relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 flex flex-wrap justify-center gap-6 p-10 opacity-30 scale-125 transform -rotate-6 pointer-events-none">
        {backgroundCards.map((card) => (
          // Using DaisyUI's 'card' and 'image-full' for the background profiles
          <div
            key={card.id}
            className="card w-48 h-64 bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img src={card.img} alt={card.name} />
            </figure>
            <div className="card-body justify-end p-4">
              <h2 className="card-title text-white text-sm m-0">{card.name}</h2>
              <p className="text-gray-300 text-xs grow-0">{card.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DaisyUI Hero Overlay to darken the background cards */}
      <div className="hero-overlay bg-black bg-opacity-60 z-10"></div>

      {/* DaisyUI Hero Content */}
      <div className="hero-content text-center text-neutral-content z-20">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-6xl md:text-8xl font-extrabold tracking-tight text-white">
            Start building epic.
          </h1>
          <p className="mb-8 text-xl text-gray-200">
            Swipe right on your next co-founder, find a pair-programming
            partner, or just talk code.
          </p>

          <Link
            to="/login"
            // Mixing DaisyUI 'btn' with Tailwind gradients to match Tinder's brand colors
            className="btn border-none bg-linear-to-r from-pink-500 to-orange-500 text-white font-bold text-lg rounded-full px-10 hover:scale-105 transition-transform shadow-lg"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
