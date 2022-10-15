import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { RiLoginBoxLine } from "react-icons/ri";

const Acoount = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
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
    </>
  );
};

export default Acoount;
