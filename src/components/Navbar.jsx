import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { deleteUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    await fetch(BASE_URL + "/logout", {
      method: "POST",
      credentials: "include",
    });

    dispatch(deleteUser());
    return navigate("/");
  };

  return (
    <div
      className="navbar 
      bg-base-300/60 
      backdrop-blur-md 
      border-b border-white/10 
      px-6 
      sticky top-0 z-50"
    >
      {/* Logo */}
      <div className="flex-1">
        <Link
          to={user ? "/feed" : "/"}
          className="text-2xl font-extrabold tracking-wide hover:opacity-80 transition"
        >
          Dev<span className="text-primary">Connect</span>
        </Link>
      </div>

      {/* Right Side */}
      {user && (
        <div className="flex items-center gap-4">
          {/* Welcome text */}
          <div className="text-sm opacity-80 hidden sm:block">
            Welcome{" "}
            <span className="font-medium capitalize">{user.firstName}</span>
          </div>

          {/* Avatar Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="w-10 h-10 rounded-full overflow-hidden 
              border border-white/10 
              hover:scale-105 transition cursor-pointer"
            >
              <img
                alt="profile"
                src={user.PhotoURL}
                className="w-full h-full object-cover"
              />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content 
              mt-3 w-52 p-2 
              bg-base-200/90 
              backdrop-blur-md 
              rounded-2xl 
              border border-white/10 
              shadow-2xl"
            >
              <li>
                <Link to="/profile" className="rounded-xl">
                  Profile
                </Link>
              </li>

              <li>
                <Link to="/connections" className="rounded-xl">
                  Connections
                </Link>
              </li>

              <li>
                <Link to="/requests" className="rounded-xl">
                  Requests
                </Link>
              </li>

              <li>
                <button onClick={logout} className="text-error rounded-xl">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
