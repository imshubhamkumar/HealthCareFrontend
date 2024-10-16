"use client";
import { useState } from "react";
import logoImg from "@/app/assets/logo.svg";
import Image from "next/image";
import { CustomText } from "@/app/components/Text";
import './style.css';
import { ButtonComponent } from "@/app/components/Button";

const Login = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isPassShow, setIsPassShow] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleLogin = () => {
    if (!username || !password) {
      setErrorMsg("All fields must be filled");
      setError(true);
      return;
    }
  };

  const closeError = () => {
    setError(false);
    setErrorMsg("");
  };

  return (
    <>
      <div className="login-container p-4 h-screen">
        <div className="login-card flex flex-col shadow-lg rounded-md p-10">
          <div className="logo-container mb-4">
            <Image src={logoImg} width={80} alt="Zing Logo" />
          </div>
          <CustomText text="Login" color={'#0099d7'} bold={true} size={2} />
          <form className="flex flex-col gap-3 mt-4 w-full">
            <input type="email" className="w-full p-1 border rounded" placeholder="Email" required={true} />
            <input type="text" className="w-full p-1 border rounded" placeholder="password" required={true} />
            <ButtonComponent label="Login" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;