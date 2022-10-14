import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { sumItemState } from "../../recoil/items";

const Header = () => {
  const { totalItem } = useRecoilValue(sumItemState);
  return (
    <>
      <header className="w-full fixed z-50 bg-white/60 backdrop-blur-md flex items-center justify-between px-10 lg:px-24 py-4 shadow-xl">
        <h1 className="text-3xl font-semibold">
          Order.<span className="text-indigo-600 font-extrabold">in</span>{" "}
        </h1>
        <div className="relative">
          <AiOutlineShoppingCart size={34} />
          {totalItem > 0 && (
            <p className="absolute -bottom-1 -left-1 text-xs text-white bg-red-600 px-2 py-1 rounded-full  w-fit">
              {totalItem}
            </p>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
