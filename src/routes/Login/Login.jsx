import { useState } from "react";
import { Form, useActionData } from "react-router";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const errorData = useActionData();

  return (
    //   <div className="flex justify-center my-10">
    //     <div className="card bg-base-300 w-96 shadow-xl">
    //       <div className="card-body">
    //         <h2 className="card-title justify-center">
    //           {isSignup ? "Sign Up" : "Login"}
    //         </h2>
    //         <Form method="post" className=" ">
    //           <input type="hidden" name="isSignup" value={isSignup} />
    //           <fieldset className="fieldset pl-1.5">
    //             {isSignup && (
    //               <>
    //                 <legend className="fieldset-legend">First Name</legend>
    //                 <input type="text" name="firstName" className="input" />
    //                 <legend className="fieldset-legend">Last Name</legend>
    //                 <input type="text" name="lastName" className="input" />
    //               </>
    //             )}
    //             <legend className="fieldset-legend">Email</legend>
    //             <input type="email" name="email" className="input" />
    //             <legend className="fieldset-legend">Password</legend>
    //             <input type="password" name="password" className="input" />
    //           </fieldset>
    //           <p className="text-red-500 text-sm pt-1 pl-1.5">
    //             {errorData?.error}
    //           </p>
    //           <div className="card-actions justify-center mt-3">
    //             <button className="btn btn-primary">
    //               {isSignup ? "Sign Up" : "Login"}
    //             </button>
    //           </div>
    //           <p
    //             className="text-center mt-4 cursor-pointer hover:underline"
    //             onClick={() => setIsSignup(!isSignup)}
    //           >
    //             {isSignup
    //               ? "Already have an account? Login"
    //               : "New here? Sign Up"}
    //           </p>
    //         </Form>
    //       </div>
    //     </div>
    //   </div>
    // );
    <div className="flex justify-center items-center min-h-[75vh] px-4 my-10">
      {/* Matched the exact card styling from ProfileEdit */}
      <div className="card bg-base-200 shadow-2xl w-full max-w-md border border-base-300">
        <div className="card-body p-8">
          <h2 className="card-title text-3xl font-bold justify-center mb-6">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>

          <Form method="post" className="flex flex-col gap-4">
            <input type="hidden" name="isSignup" value={isSignup} />

            {/* Split First & Last name into a row for a tighter layout */}
            {isSignup && (
              <div className="flex gap-4">
                <label className="form-control w-full">
                  <div className="label pb-1">
                    <span className="label-text font-semibold opacity-80">
                      First Name
                    </span>
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    className="input input-bordered focus:input-primary w-full"
                    required
                  />
                </label>
                <label className="form-control w-full">
                  <div className="label pb-1">
                    <span className="label-text font-semibold opacity-80">
                      Last Name
                    </span>
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    className="input input-bordered focus:input-primary w-full"
                  />
                </label>
              </div>
            )}

            <label className="form-control w-full">
              <div className="label pb-1">
                <span className="label-text font-semibold opacity-80">
                  Email
                </span>
              </div>
              <input
                type="email"
                name="email"
                className="input input-bordered focus:input-primary w-full"
                required
              />
            </label>

            <label className="form-control w-full">
              <div className="label pb-1">
                <span className="label-text font-semibold opacity-80">
                  Password
                </span>
              </div>
              <input
                type="password"
                name="password"
                className="input input-bordered focus:input-primary w-full"
                required
              />
            </label>

            {/* Error Message */}
            {errorData?.error && (
              <p className="text-error text-sm font-medium px-1 mt-1">
                {errorData.error}
              </p>
            )}

            {/* Action Button */}
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-primary w-full text-lg shadow-lg shadow-primary/20">
                {isSignup ? "Sign Up" : "Login"}
              </button>
            </div>

            {/* Polished Toggle Link */}
            <p className="text-center mt-4 text-sm opacity-80">
              {isSignup ? "Already have an account? " : "New to DevConnect? "}
              <span
                className="text-primary font-bold cursor-pointer hover:underline"
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup ? "Login here" : "Create an account"}
              </span>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
