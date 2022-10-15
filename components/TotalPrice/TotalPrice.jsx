import { useRecoilValue } from "recoil";
import { sumItemState } from "../../recoil/items";
import currency from "../../utils/currency";

function TotalPrice() {
  const { totalPrice } = useRecoilValue(sumItemState);
  return (
    <>
      <div className=" w-full lg:shadow-lg shadow-slate-400 bg-indigo-400 p-6 text-white rounded-none lg:rounded-3xl">
        <div className="flex items-center justify-center gap-2">
          <p className="text-2xl">Total Harga :</p>
          <p className="text-2xl">{currency(totalPrice)}</p>
        </div>
        <div className="text-center pt-10">
          <button className="px-6 py-2 shadow-lg rounded-md bg-white hover:bg-gray-200 transition-all duration-200 text-black/90 font-semibold antialiased">
            Pesan Sekarang
          </button>
        </div>
      </div>
    </>
  );
}

export default TotalPrice;
