import React from 'react';
import { useState } from 'react';

const InputForm = ({ order }) => {
  const handleFormSubmition = (event) => {
    event.preventDefault();
    //onFormSubmit()
  };

  let orders;

  const [noPackages, setNoPackages] = useState([]);
  const [orderInfo, setOrderInfo] = useState([]);

  function packages(orders) {
    let arr = [];
    for (let i = 0; i < orders; i++) {
      arr.push(i);
    }
    setNoPackages(arr);
  }

  return (
    <form onSubmit={handleFormSubmition}>
      <label htmlFor="no-packages">Insert the number of Packages</label>
      <input
        type="number"
        min={1}
        max={10}
        placeholder="number of packages"
        value={order}
        onChange={(event) => {
          orders = event.target.valueAsNumber;

          packages(orders);
        }}
      />

      {noPackages.map((x, index) => {
        return (
          <div>
            <label>Package no {x + 1}:</label>
            <div>
              <label>Weight:</label>
              <input
                type="number"
                min={1}
                placeholder="Package weight"
                onChange={(event) => {
                  console.log(orderInfo);
                  setOrderInfo({
                    ...orderInfo,
                    weight: event.target.valueAsNumber
                  });
                }}
              />
              <br />

              <label>Distance:</label>
              <input
                type="number"
                min={1}
                placeholder="Distance in km"
                onChange={(event) =>
                  setOrderInfo({
                    ...orderInfo,
                    distance: event.target.valueAsNumber
                  })
                }
              />
              <br />

              <label>Promo Code:</label>
              <input
                type="text"
                placeholder="Promo code"
                onChange={(event) =>
                  setOrderInfo({
                    ...orderInfo,
                    promo: event.target.value
                  })
                }
              />
            </div>
          </div>
        );
      })}
    </form>
  );
};

export default InputForm;
