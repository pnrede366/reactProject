import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Route, useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Action from "../Redux/Action/Action";
import { Link } from "react-router-dom";
import { UserContext } from "./ContextData";

const CartItem = (props) => {
  const myContext = useContext(UserContext);
  const reduxItem = useSelector((state) => state.Reducers);
  const dispatch = useDispatch();
  const userLoginId = localStorage.getItem("userLogin");
  const [product, setproduct] = useState([]);
  const [myCart, setmyCart] = useState([]);
  const history = useHistory();
  const [Counter, setCounter] = useState(0);
  const [ProductPrice, setProductPrice] = useState(0);
  const [ProdArray, setProdArray] = useState([]);
  let productStyle = {
    border: "none",
    boxShadow: "0px 0px 5px 5px rgb(234, 251, 255)",
    width: "20vw",
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/product`).then((response) => {
      setproduct(response.data);
    });
    axios.get(`http://localhost:3000/user/${userLoginId}`).then((response) => {
      setmyCart(response.data.cart);
      console.log(response.data.cart);
    });
  }, []);
  // console.log(product[1].id);
  console.log(myCart);

  if (!userLoginId) {
    history.push("/login");
  }

  return (
    <div>
      <h3 className="text-center">
        Cart
        <i class="fa text-dark fa-cart-plus" aria-hidden="true"></i>
      </h3>

      <div className="">
        {product.map((dd, i) => {
          if (dd.id == myCart[i])
          {
            return (
              <div className="d-flex justify-content-around align-items-center mb-5">
                <div className="" style={{ width: "15%" }} key={i}>
                  <div className="card pCard">
                    <img
                      className="pImg"
                      src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-m127gzkhins/gallery/in-galaxy-m-sm-m127gzkhins-front-black-405435102?$684_547_PNG$"
                      alt=""
                    />
                    <div className="pTitle">{dd.name}</div>
                    <div className="pPrice">{dd.price} ₹</div>
                  </div>
                </div>
                <div className="">
                  <div className="d-flex ">
                    <button
                      className="btn btn-danger"
                      onClick={(e) => {
                        if (dd.quantity > 0) {
                          // console.log(dd.quantity-=1)
                          setCounter((dd.quantity -= 1));
                          setProductPrice(dd.price * dd.quantity);
                        }
                      }}
                    >
                      -
                    </button>
                    <button className="btn ">{dd.quantity}</button>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        // console.log(dd.quantity+=1)
                        setCounter((dd.quantity += 1));
                        setProductPrice(dd.price * dd.quantity);
                        localStorage.setItem(
                          `quantity  ${dd.id}`,
                          JSON.stringify({
                            id: dd.id,
                            quantity: dd.quantity,
                          })
                        );
                        console.log(localStorage.getItem(`quantity ${dd.id}`));
                        setProdArray((old) => {
                          return [
                            ...old,
                            JSON.parse(
                              localStorage.getItem(`quantity ${dd.id}`)
                            ),
                          ];
                        });
                        // setFinalPrice(localStorage.getItem(`quantity ${dd.id}`))
                        // setProductPrice(

                        // )
                        // console.log(ProductPrice);
                        // console.log(dd.price);
                      }}
                    >
                      +
                    </button>
                  </div>

                  <div className="my-5">
                    <h6>Total Price: {dd.price * dd.quantity}</h6>

                    {}
                  </div>
                  <div>
                    {" "}
                    <button
                      className=" btn btn-outline-primary"
                      onClick={() => {
                        history.push("/productDetails", {'id': dd.id,'quantity':dd.quantity});
                      }}
                    >
                      View Product
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    class="btn btn-warning"
                    onClick={() => {
                      history.push("/placeorder",{'id': dd.id,'quantity':dd.quantity});
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
    // </UserContext.provider>
  );
};

export default CartItem;
