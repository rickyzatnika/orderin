import Link from "next/link";
import React from "react";
import { useSession, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import Image from "next/image";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col justify-center h-screen relative overflow-x-hidden pt-4 px-0 md:px-0">
        <div className="fixed -z-10 top-40 left-20 blur-xl bg-gradient-to-b from-purple-200 to-blue-100 w-[250px] h-[250px] rounded-full"></div>
        <div className="fixed -z-10 bottom-0 left-48 blur-xl bg-gradient-to-t from-pink-100 to-pink-300 w-[350px] h-[350px] rounded-full"></div>
        <div className="fixed -z-10 top-10 right-60 blur-md bg-gradient-to-t from-indigo-200 to-pink-100 w-[380px] h-[380px] rounded-full"></div>
        <div className="fixed -z-10 top-65 right-10 blur-2xl bg-gradient-to-tr from-purple-400 to-transparent w-[150px] h-[150px] rounded-full"></div>
        <div className="w-full px-4 md:px-8">
          <div className="w-full sm:w-[75%] md:w-[65%] lg:w-[40%] border-2 shadow-lg shadow-blue-300/50 border-indigo-500 py-6 md:py-12 px-6 md:px-10 rounded-lg m-auto">
            <div>
              <h1 className="text-xl lg:text-3xl font-bold -tracking-wide">
                Log<span className="text-indigo-500 font-extrabold">in</span>{" "}
              </h1>
            </div>
            <div className="my-3">
              <label className="block text-md mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="px-4 w-full border-2  py-2 focus:border-indigo-400  rounded-md text-sm  outline-none"
                type="email"
                name="password"
                placeholder="email"
              />
            </div>
            <div className="mt-5">
              <label className="block text-md mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="px-4 w-full border-2 py-2 focus:border-indigo-400  rounded-md text-sm outline-none"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>

            <div className="flex justify-between pt-2">
              <div>
                <input
                  className="cursor-pointer outline-none"
                  type="radio"
                  name="rememberme"
                />
                <span className="text-sm">Ingat saya</span>
              </div>
              <span className="text-sm text-blue-700 hover:underline cursor-pointer">
                Lupa password?
              </span>
            </div>
            <div className="">
              <button className="mt-4 mb-3 w-full text-black border-2 border-indigo-400 hover:bg-indigo-500  hover:text-white py-2 rounded-md transition duration-100">
                Masuk
              </button>
              <div className="text-center pb-2">
                <p className="text-sm"> masuk dengan google</p>
              </div>
              <div
                onClick={() => signIn()}
                className="flex space-x-2 cursor-pointer justify-center items-end bg-black/20 hover:bg-black/40  text-white py-2 rounded-md transition duration-100"
              >
                <span className="text-center  flex items-center justify-center">
                  <FcGoogle size={34} />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between px-1">
              <p className="text-sm pt-4">belum punya akun?</p>
              <Link href="/register">
                <a className="text-sm pt-4 hover:underline">Register</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
