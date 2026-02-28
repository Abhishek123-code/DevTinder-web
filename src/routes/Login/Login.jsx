import { useState } from "react";
import { Form, useActionData } from "react-router";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const errorData = useActionData();

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isSignup ? "Sign Up" : "Login"}
          </h2>
          <Form method="post" className=" ">
            <input type="hidden" name="isSignup" value={isSignup} />
            <fieldset className="fieldset pl-1.5">
              {isSignup && (
                <>
                  <legend className="fieldset-legend">First Name</legend>
                  <input type="text" name="firstName" className="input" />
                  <legend className="fieldset-legend">Last Name</legend>
                  <input type="text" name="lastName" className="input" />
                </>
              )}
              <legend className="fieldset-legend">Email</legend>
              <input type="email" name="email" className="input" />
              <legend className="fieldset-legend">Password</legend>
              <input type="password" name="password" className="input" />
            </fieldset>
            <p className="text-red-500 text-sm pt-1 pl-1.5">
              {errorData?.error}
            </p>
            <div className="card-actions justify-center mt-3">
              <button className="btn btn-primary">
                {isSignup ? "Sign Up" : "Login"}
              </button>
            </div>
            <p
              className="text-center mt-4 cursor-pointer hover:underline"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup
                ? "Already have an account? Login"
                : "New here? Sign Up"}
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
