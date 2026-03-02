import { useSelector } from "react-redux";
import { Form } from "react-router";

const Premium = () => {
  const user = useSelector((store) => store.user);

  if (user?.isPremium) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-primary">
          You are a Premium Member! 🚀
        </h1>
        <p className="text-lg text-base-content/70 mb-8">
          Enjoy your unlimited connection requests and verified blue tick on
          DevConnect.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4">
      {/* --- Page Header --- */}
      <div className="text-center mb-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Upgrade your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
            Experience
          </span>
        </h1>
        <p className="text-lg text-base-content/70">
          Unlock more connections, stand out from the crowd, and find your
          perfect pair-programming partner faster.
        </p>
      </div>

      {/* --- Pricing Cards Container --- */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 w-full max-w-5xl">
        {/* --- SILVER TIER --- */}
        <div className="card w-full lg:w-96 bg-base-200 shadow-xl border border-base-300 hover:border-primary/30 transition-colors">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-base-content/80">
              Silver Membership
            </h2>
            <div className="my-4">
              <span className="text-4xl font-black">₹299</span>
              <span className="text-base-content/50"> / 3 months</span>
            </div>
            <p className="text-sm text-base-content/70 mb-6 border-b border-base-300 pb-4">
              Perfect for developers looking to expand their network steadily.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckIcon className="text-primary w-5 h-5" />
                <span>100 Connection requests / day</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon className="text-primary w-5 h-5" />
                <span>Chat with matched developers</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon className="text-primary w-5 h-5" />
                <span>Verified Blue Tick profile</span>
              </li>
              <li className="flex items-center gap-3 text-base-content/50">
                <CrossIcon className="w-5 h-5" />
                <span className="line-through">
                  Priority profile visibility
                </span>
              </li>
            </ul>

            <Form method="post">
              <div className="card-actions mt-auto">
                <button
                  name="type"
                  value="silver"
                  className="btn btn-outline btn-primary w-full rounded-full"
                >
                  Buy Silver
                </button>
              </div>
            </Form>
          </div>
        </div>

        {/* --- GOLD TIER (Highlighted) --- */}
        <div className="card w-full lg:w-96 bg-base-200 shadow-2xl border-2 border-primary relative lg:-mt-4 lg:mb-4">
          {/* Most Popular Badge */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="badge badge-primary font-bold py-3 px-4 shadow-lg uppercase tracking-widest text-xs">
              Most Popular
            </span>
          </div>

          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-primary">
              Gold Membership
            </h2>
            <div className="my-4">
              <span className="text-4xl font-black text-white">₹499</span>
              <span className="text-base-content/50"> / 6 months</span>
            </div>
            <p className="text-sm text-base-content/70 mb-6 border-b border-base-300 pb-4">
              The ultimate toolkit for serious founders and hardcore coders.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckIcon className="text-primary w-5 h-5" />
                <span className="font-bold">Unlimited connection requests</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon className="text-primary w-5 h-5" />
                <span>Chat with matched developers</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon className="text-primary w-5 h-5" />
                <span>Verified Blue Tick profile</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckIcon className="text-primary w-5 h-5" />
                <span className="font-bold text-secondary">
                  Priority profile visibility
                </span>
              </li>
            </ul>
            <Form method="post">
              <div className="card-actions mt-auto">
                <button
                  name="type"
                  value="gold"
                  className="btn border-none bg-linear-to-r from-primary to-secondary text-white w-full rounded-full shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform"
                >
                  Buy Gold
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Components for Icons ---
// You can keep these in the same file at the bottom, or move them to a separate icons folder later.

const CheckIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
);

const CrossIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
      clipRule="evenodd"
    />
  </svg>
);

export default Premium;
