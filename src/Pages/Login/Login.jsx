import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { createUser, signIn, googleLogin, githubLogin, myTheme } =
    useContext(AuthContext);
  // login with email and password
  const handleLogin = (e) => {
    // console.log("calling");
    e.preventDefault();
    const form = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    signIn(email, password)
      .then((res) => {
        console.log("Logged in user : ", res.user);
        Swal.fire("Login Successful");
        form.reset();
      })
      .catch((err) => {
        console.log("Error in logging in : ", err.message);
        Swal.fire("Login failed. Recheck yout email and password");
      });
  };

  // login with google:
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log("Google Login Done, User", res.user);
        Swal.fire("Google Login Completed");
      })
      .catch((err) => {
        console.log("Google login error: ", err.message);
        Swal.fire("Google Login Failed");
        return;
      });
  };
  // login with github:
  const handleGithubLogin = () => {
    githubLogin()
      .then((res) => {
        console.log("Google Login Done, User", res.user);
        Swal.fire("Google Login Completed");
      })
      .catch((err) => {
        console.log("Google login error: ", err.message);
        Swal.fire("Google Login Failed");
        return;
      });
  };

  return (
    <div className="">
      <div className="hero  min-h-screen ">
        <div className="flex rounded-2xl flex-col lg:flex-row  shadow-lg shadow-blue-900">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none rounded-r-2xl">
            <form
              onSubmit={handleLogin}
              className="card-body bg-gradient-to-tl from-red to-[#830202e4] w-full"
            >
              <div className="form-control mb-6">
                <p className="text-xl text-gray-200 font-semibold mb-2 px-4">
                  Sign In To StudySync
                </p>
                <p className="text-sm text-gray-500 mb-8 px-4">
                  Dont have an account?{" "}
                  <Link to="/register">
                    <span className="font-semibold">Register</span>
                  </Link>
                </p>

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-success text-white"
                />
              </div>
              <p className="text-center my-2 rob text-lg font-semibold text-gray-400">
                -OR-
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleGoogleLogin}
                  className="btn border-none w-52 btn-info"
                >
                  <FaGoogle /> <span className="">Google</span>
                </button>
                <button
                  onClick={handleGithubLogin}
                  className="btn border-none btn-square bg-gray-300"
                >
                  <FaGithub />
                </button>
                <button className="btn border-none btn-square btn-secondary">
                  <FaFacebookSquare />
                </button>

                <p className="mt-24"></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
