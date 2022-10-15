import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiLoginBoxLine } from "react-icons/ri";
import { useRecoilValue } from "recoil";
import { sumItemState } from "../../recoil/items";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Router } from "next/router";

const Header = ({ data }) => {
  const { totalItem } = useRecoilValue(sumItemState);
  const { data: session } = useSession();

  return (
    <>
      <header className="w-full fixed z-50 bg-white/60 backdrop-blur-md flex items-center justify-between px-10 lg:px-24 py-4 shadow-xl">
        <Link href="/" passHref>
          <a>
            <h1 className="text-3xl font-semibold">
              Order.<span className="text-indigo-600 font-extrabold">in</span>{" "}
            </h1>
          </a>
        </Link>
        <div className="flex items-center gap-6">
          <div className="relative">
            <AiOutlineShoppingCart size={30} />
            {totalItem > 0 && (
              <p className="absolute -bottom-1 -left-1 text-[0.6rem] text-white bg-red-600 px-1  rounded-full  w-fit">
                {totalItem}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            {session && session.user.email ? (
              <>
                <div className="flex flex-col items-center">
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    width={35}
                    height={35}
                    objectFit="contain"
                    objectPosition="center"
                    priority
                    className="rounded-full"
                  />
                  <button className="capitalize" onClick={() => signOut()}>
                    Sign out
                  </button>
                </div>
              </>
            ) : (
              <Link href="/login">
                <a>
                  <RiLoginBoxLine size={30} />
                </a>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
