import React, { useState } from "react";
function Convert() {
  const [inputFrom, setInputFrom] = useState(0);
  const [inputTo, setInputTo] = useState(0);
  const [itemFrom, setitemFrom] = useState("USD");
  const [itemTo, setitemTo] = useState("TRY");
  const [rates, setRates] = useState([
    {
      id: 1,
      name: "USD",
      rate: "13",
      fixrate: "14",
    },
    {
      id: 2,
      name: "TRY",
      rate: "1",
    },
  ]);

  const handleChangeFrom = (event) => {
    const { value } = event.target;
    setInputFrom(value);
    setInputTo(value * 13.2);
  };

  const handleChangeTo = (event) => {
    const { value } = event.target;
    setInputTo(value);
    setInputFrom(value / 13.2);
  };

  const handleSelectFrom = (event) => {
    const { value } = event.target;
    setitemFrom(value);
  };

  const handleSelectTo = (event) => {
    const { value } = event.target;
    setitemTo(value);
  };

  const handleSwap = () => {
    setitemFrom(itemTo);
    setitemTo(itemFrom);
    setInputFrom(inputTo);
    setInputTo(inputFrom);
  };

  return (
    <div>
      <input type="number" value={inputFrom} onChange={handleChangeFrom} />

      <div>
        <select onChange={handleSelectFrom} value={itemFrom}>
          {rates &&
            rates.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>

        <button size="2x" onClick={handleSwap}>
          swap
        </button>

        <select onChange={handleSelectTo} value={itemTo}>
          {rates &&
            rates.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>
      </div>

      <input type="number" value={inputTo} onChange={handleChangeTo} />
    </div>
  );
}

export default Convert;
