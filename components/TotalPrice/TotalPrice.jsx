import { useRecoilValue } from "recoil";
import { sumItemState } from "../../recoil/items";
import currency from "../../utils/currency";

function TotalPrice() {
  const { totalPrice } = useRecoilValue(sumItemState);
  return (
    <>
      <div className="w-full shadow-lg bg-indigo-400 p-6 text-white">
        <div className="flex items-center justify-center gap-2">
          <p className="text-2xl">Total Harga :</p>
          <p className="text-2xl">{currency(totalPrice)}</p>
        </div>
        <div className="text-center pt-10">
          <button className="px-6 py-1 rounded-xl bg-white text-indigo-500">
            Order
          </button>
        </div>
      </div>
    </>
  );
}

export default TotalPrice;
