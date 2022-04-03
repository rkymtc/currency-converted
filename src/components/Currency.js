import React, { useState } from "react";
import "./style.css";

const Currency = () => {
  const selectlist = ["USD", "EUR", "TRY"];
  const [currency1, setCurrency1] = useState("USD");
  const [inputAmount, setInputAmount] = useState("");
  const [currency2, setCurrency2] = useState("TRY");
  const [outputAmount, setOutputAmount] = useState("");
  const [selected, setSelected] = useState("sell");

  const handleSellChange = (event) => {
    setSelected(event.target.value);
    sell();
  };
  const handleBuyChange = (event) => {
    setSelected(event.target.value);
    buy();
  };
  const resetInput = () => {
    setInputAmount(" ");
    setOutputAmount(" ");
  };

  const sell = () => {
    if (inputAmount === "") {
      return;
    }
    const amount = parseInt(inputAmount);
    if (currency1 === "TRY") {
      if (currency2 === "USD") {
        setOutputAmount((amount * 0.07).toFixed(3));
      } else if (currency2 === "EUR") {
        setOutputAmount((amount * 0.06).toFixed(3));
      }
    } else if (currency1 === "EUR") {
      if (currency2 === "USD") {
        setOutputAmount((amount * 1.1).toFixed(3));
      } else if (currency2 === "TRY") {
        setOutputAmount((amount * 15).toFixed(3));
      }
    } else if (currency1 === "USD") {
      if (currency2 === "EUR") {
        setOutputAmount((amount * 0.8).toFixed(3));
      } else if (currency2 === "TRY") {
        setOutputAmount((amount * 13).toFixed(3));
      }
    }
  };

  const buy = () => {
    if (inputAmount === "") {
      return;
    }



    
    const amount = parseInt(inputAmount);
    if (currency1 === "TRY") {
      if (currency2 === "USD") {
        setOutputAmount((amount * 0.077).toFixed(3));
      } else if (currency2 === "EUR") {
        setOutputAmount((amount * 0.068).toFixed(3));
      }
    } else if (currency1 === "EUR") {
      if (currency2 === "USD") {
        setOutputAmount((amount * 1.16).toFixed(3));
      } else if (currency2 === "TRY") {
        setOutputAmount((amount * 15.22).toFixed(3));
      }
    } else if (currency1 === "USD") {
      if (currency2 === "EUR") {
        setOutputAmount((amount * 0.9).toFixed(3));
      } else if (currency2 === "TRY") {
        setOutputAmount((amount * 13.22).toFixed(3));
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className="leftselect">
          <img
            className="image"
            src={
              "https://usfirstexchange.com/theme/Public3/images/graphic_1.svg"
            }
            alt="coder"
          />
        </div>
        <div className="rightselect">
          <div className="radiobox">
            <div className="radioselect">
              <input
                type="radio"
                value="sell"
                checked={selected === "sell"}
                onChange={handleSellChange}
              />
              sell
            </div>
            <div className="radioselect">
              <input
                type="radio"
                value="buy"
                checked={selected === "buy"}
                onChange={handleBuyChange}
              />{" "}
              buy
            </div>
          </div>
          <h1>Currency Converter</h1>
          <span>Currency From</span>
          <div className="currencybox">
            <select
              value={currency1}
              onChange={(e) => setCurrency1(e.target.value)}
            >
              {selectlist.map((list) => (
                <option key={list} value={list}>
                  {list}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
              className="inputNum"
            />
          </div>

          <span>Currency To</span>
          <div className="currencybox">
            <select
              value={currency2}
              onChange={(e) => setCurrency2(e.target.value)}
            >
              {selectlist
                .map((list) => (
                  <option key={list} value={list}>
                    {list}
                  </option>
                ))
                .reverse()}
            </select>
            <input value={outputAmount} disabled className="inputNum" />
          </div>
          {selected === "sell" ? (
            <button primary={true} onClick={sell}>
              Currency Converter
            </button>
          ) : (
            <button primary={true} onClick={buy}>
              Currency Converter
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Currency;
