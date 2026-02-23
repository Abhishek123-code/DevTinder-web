import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, useNavigate } from "react-router";

const Login = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    // If user exists in Redux, kick them to Feed
    if (user) {
      navigate("/feed");
    }
  }, [navigate, user]);

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <Form method="post" className=" ">
            <fieldset className="fieldset pl-1.5">
              <legend className="fieldset-legend">Email</legend>
              <input type="email" name="email" className="input" />
              <legend className="fieldset-legend">Password</legend>
              <input type="password" name="password" className="input" />
            </fieldset>
            <div className="card-actions justify-center mt-3">
              <button className="btn btn-primary">Login</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
