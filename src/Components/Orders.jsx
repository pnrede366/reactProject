import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [Products, setProducts] = useState([]);
  const [Data, setData] = useState([]);

  const userLoginId = localStorage.getItem("userLogin");
  useEffect(() => {
    axios.get(`http://localhost:3000/orders`).then((response) => {
      setProducts(response.data);
      // console.log("prod", response.data);
    });
    axios
      .get("http://localhost:3000/product")
      .then((response) => setData(response.data));
  }, []);
  return (
    <div  style={{height:'80vh'}}>
        <h1 className="text-center"> Your Orders</h1>
        <br />
        <div className="d-flex justify-content-around flex-wrap">
      {Products.map((dd, i) => {
        return Data.map((cc, j) => {
          return dd.userID == userLoginId && dd.product == cc.id ? (
            // <h1 key={i}>{cc.name}</h1>
            <div>
              <div className="pMain" key={i}>
                <div className="card pCard">
                  <img
                    className="pImg"
                    style={{height:'15rem'}}
                    src={cc.path}
                    alt=""
                  />
                  <div className="pTitle">{cc.name}</div>
                  <div className="pPrice">{cc.price} ₹</div>
                </div>
              </div>
            </div>
          ) : (
            ""
          );
        });
      })}
    </div>
  </div>
  );
};

export default Orders;
