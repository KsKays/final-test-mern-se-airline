import React, { useContext } from "react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router";
import UserService from "../services/user.server";

const SocialLogin = () => {
  const { signUpWithGoogle, signUpWithFacebook, signUpWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation(); // รับข้อมูล location
  const from = location?.state?.from?.pathname || "/"; // ใช้งาน location เพื่อระบุเส้นทางกลับ

  const GithubSignUp = () => {
    signUpWithGithub()
      .then(async (result) => {
        const user = result.user;
        console.log("User logged in:", user);
        await UserService.addUser(user.email);
        Swal.fire({
          icon: "success",
          title: "Github Singup Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        document.getElementById("login").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
      });
  };

  const googleSignUp = () => {
    signUpWithGoogle()
      .then(async (result) => {
        const user = result.user;
        console.log("User logged in:", user);
        await UserService.addUser(user.email);
        Swal.fire({
          icon: "success",
          title: "Google Singup Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        document.getElementById("login").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
      });
  };

  const FaceBookSignUp = () => {
    signUpWithFacebook()
      .then(async (result) => {
        const user = result.user;
        console.log("User logged in:", user);
        await UserService.addUser(user.email);
        Swal.fire({
          icon: "success",
          title: "Facebook Singup Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        document.getElementById("login").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
      });
  };
  return (
    <div className="text-center space-x-3 mt-6">
      <button className="btn btn-ghost btn-circle hover:bg-red hover:text-white">
        <FaGoogle onClick={googleSignUp} />
      </button>
      <button className="btn btn-ghost btn-circle hover:bg-red hover:text-white">
        <FaGithub onClick={GithubSignUp} />
      </button>
      <button className="btn btn-ghost btn-circle hover:bg-red hover:text-white">
        <FaFacebook onClick={FaceBookSignUp} />
      </button>
    </div>
  );
};

export default SocialLogin;
