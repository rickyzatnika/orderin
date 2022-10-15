import { useState, useEffect } from "react";

function Counter({ defaultValue, onRemoveItem, onValueChange }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onMinItem = () => {
    if (value > 0) {
      if (value == 1) {
        onRemoveItem();
      }
      setValue(value - 1);
      onValueChange(value - 1);
    } else {
      setValue(value);
      onValueChange(value);
    }
  };

  const onPlusItem = () => {
    setValue(value + 1);
    onValueChange(value + 1);
  };

  return (
    <>
      <div className="pt-5 flex  items-center justify-center text-center">
        <button
          onClick={onMinItem}
          className="px-3 py-1 text-md border-2 border-gray-400 hover:border-indigo-400 rounded-md"
        >
          -
        </button>
        <input
          type="number"
          value={value}
          readOnly
          className="text-center font-semibold w-3/6 outline-none bg-slate-100 border-none focus:ring-0 py-1 border-2 rounded-lg"
        />
        <button
          onClick={onPlusItem}
          className="px-3 py-1 text-md border-2 border-gray-400 hover:border-indigo-400 rounded-md"
        >
          +
        </button>
      </div>
    </>
  );
}

export default Counter;
