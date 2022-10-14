import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { listItemsState } from "../../recoil/items";
import Image from "next/image";
import Counter from "./Counter";
import currency from "../../utils/currency";

function Item(props) {
  const [listItems, setListItem] = useRecoilState(listItemsState);
  const { item } = props;
  const { name, img, price, value } = item;
  const [itemValue, setItemValue] = useState(0);

  const onItemChange = (itemChange) => {
    const newArray = listItems.map((item) => {
      if (item.id === itemChange.id) {
        return itemChange;
      } else {
        return item;
      }
    });
    setListItem(newArray);
  };

  const onAddItem = () => {
    setItemValue(itemValue + 1);
    onValueChange(itemValue + 1);
  };
  const onRemoveItem = () => {
    setItemValue(0);
  };

  const onValueChange = (valueChange) => {
    const newItem = { ...item };
    newItem.value = valueChange;
    onItemChange(newItem);
  };

  useEffect(() => {
    setItemValue(value);
  }, [value]);
  return (
    <>
      <div className="w-full  px-4 lg:px-24">
        <div className="flex flex-col my-4 lg:my-6 items-center justify-center shadow-xl bg-gray-100  px-6 lg:px-10">
          <div className="w-full gap-0 lg:gap-4 grid grid-cols-1 lg:grid-cols-2 items-center justify-center ">
            <Image
              src={img}
              alt="item-1"
              width={100}
              height={100}
              layout="responsive"
              objectFit="contain"
              objectPosition="center"
              priority
            />
            <div className="text-center w-full -mt-10 lg:mt-0 pb-6 lg:pb-0">
              <p className="text-xl lg:text-2xl font-bold">{name}</p>
              <p className="text-xl lg:text-2xl py-2">{currency(price)}</p>
              {itemValue > 0 ? (
                <Counter
                  defaultValue={itemValue}
                  onRemoveItem={onRemoveItem}
                  onValueChange={onValueChange}
                />
              ) : (
                <button
                  onClick={onAddItem}
                  className="px-6 py-1 rounded-md my-6 text-white bg-indigo-400"
                >
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
