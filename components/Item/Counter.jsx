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
      <div className="flex gap-2 my-4 items-center justify-center text-center">
        <button onClick={onMinItem} className="px-2 border-2 border-indigo-600">
          -
        </button>
        <input
          type="number"
          value={value}
          className="text-center border-2 border-indigo-600"
        />
        <button
          onClick={onPlusItem}
          className="px-2 border-2 border-indigo-600"
        >
          +
        </button>
      </div>
    </>
  );
}

export default Counter;
