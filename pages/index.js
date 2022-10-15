import items from "../dummy/items.json";
import { ListItem, TotalPrice, Header } from "../components";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { listItemsState } from "../recoil/items";

export default function Home() {
  const [listItems, setListItem] = useRecoilState(listItemsState);

  useEffect(() => {
    setListItem(items);
  }, [setListItem]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 justify-between w-full pt-16 ">
        <div className="col-span-1 md:col-span-8 relative">
          <ListItem items={listItems} />
        </div>
        <div className="col-span-1 md:col-span-4  w-full top-0 right-0">
          <div className="relative top-0 md:top-20 lg:sticky">
            <TotalPrice />
          </div>
        </div>
      </div>
    </>
  );
}
