import { atom, selector } from "recoil";

export const listItemsState = atom({
  key: "listItemsState",
  default: [],
});

export const sumItemState = selector({
  key: "sumItemState",
  get: ({ get }) => {
    const items = get(listItemsState);
    const totalItem = items.reduce((prev, current) => prev + current.value, 0);
    const totalPrice = items.reduce(
      (prev, current) => prev + current.value * current.price,
      0
    );
    return { totalItem, totalPrice };
  },
});
