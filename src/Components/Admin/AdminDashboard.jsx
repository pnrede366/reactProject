import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router,List,Switch,Route, Redirect } from "react-router-dom";
function AdminDashboard() {
  const [PName, setPName] = useState("");
  const [PDescr, setPDescr] = useState("");
  const [PPrice, setPPrice] = useState("");
  const [PPath, setPPath] = useState("");
  const [getData, setgetData] = useState([]);
  const [show, setShow] = useState(false)
  const [Id, setId] = useState(null)

  let lsItem = localStorage.getItem('admin');
  let newCol = {
    color: "red",
  };

  let productStyle = {
    border: "none",
    boxShadow: "0px 0px 5px 5px rgb(234, 251, 255)",
    width: "20vw",
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/product")
      .then((Response) => setgetData(Response.data));

    
  }, [getData]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(getData);

    axios
      .post("http://localhost:3000/product", {
        name: PName,
        descr: PDescr,
        price: PPrice,
        path: PPath,
        quantity:1
      })
      .then((Response) => console.log("added"));
      alert("Data Added Successfully")
            setPName('');
            setPDescr('')
            setPPrice(0) 
  };

  const deleteTask = (i) => {
    // console.log(i);
    // console.log(`http://localhost:3000/product/${i}`);
    axios
      .delete(`http://localhost:3000/product/${i}`)
      // .then((Response) => console.log("deleted"));
  };
  const edit = (i, j) => {
    // console.log(i);
    setShow(true)  
    // console.log("hihihi");
    // console.log(getData[j]);
    setPName(getData[j].name);
    setPDescr(getData[j].descr);
    setPPrice(getData[j].price);
    setPPath(getData[j].path);

    // axios.get("http://localhost:3000/posts").then(Response=>setData(Response.data))

    // data.map((dd)=>{
    //     console.log(dd.name);
    // })
  };

  const update = (i) => {
    // console.log(i);
    axios.put(`http://localhost:3000/product/${i}`, {
      name: PName,
      descr: PDescr,
      price: PPrice,
      quantity:1,
      path:PPath
    });
    setPName("");
    setPDescr("");
    setPPrice(0);
    setShow(false)
  };

  return (
    <div>

      <Route>
        <Switch>
          {
            lsItem?<Redirect to="/AdminDashboard"></Redirect>:<Redirect to="/AdminPanel"></Redirect>
          }     
          </Switch>   
      </Route>
      <div className="card w-25 mx-auto mt-5">
      <h2 className="text-center text-primary">Add Product</h2>
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => {
              setPPath(e.target.value);
            }}
            className="form-control"
            type="text" placeholder="Enter Link Of Product"
          />{" "}
          <br />
          <input required
            onChange={(e) => {
              setPName(e.target.value);
            }}
            value={PName}
            className="form-control"
            type="text"
            placeholder="Product Name"
          />{" "}
          <br />
          <textarea required
            onChange={(e) => {
              setPDescr(e.target.value);
            }}
            value={PDescr}

            className="form-control"
            type="text"
            placeholder="Product Description"
          />{" "}
          <br />
          <input required
            onChange={(e) => {
              setPPrice(e.target.value);
            }}
            value={PPrice}
            className="form-control"
            type="number"
            placeholder="Product Price"
          />{" "}
          <br />
          <button type="submit" className="btn btn-outline-primary">
            Add Product
          </button>
          {show?<button className="btn btn-primary " onClick={()=>{
                                update(Id)
                            }}>Update</button>:''}
        </form>
      </div>

      <hr />
      <div>
        <h3 className="text-center" style={newCol}>
          Your Products
        </h3>
      </div>

      <div className="d-flex flex-wrap justify-content-between px-2">
        {getData.map((dd, j) => {
          return (
            <div key={j} className="products">
              <div className="m-2 p-2" style={productStyle}>
                <div className="">
                  <img
                    style={{ width: "100%",height:'15rem' }}
                    src={dd.path}
                    alt=""
                  />
                </div>
                <div>
                  {" "}
                  <h2>{dd.name}</h2>{" "}
                </div>
                <div>
                  {" "}
                  <h6>{dd.descr}</h6>
                </div>
                <div>
                  <h3>{dd.price}</h3>
                </div>
                {/* <button style={{
              border:'1px solid white',
              backgroundColor:'blue',
              color:'white',
              width:'100%'
  
            }}>ADD TO CART </button> */}
                <div className="d-flex justify-content-between">
                  <div></div>
                  <div className="w-25 d-flex justify-content-around">
                    <button
                      className="btn"
                      onClick={() => {
                        edit(dd.id, j);
                        setId(dd.id)
                      }}
                    >
                      <i
                        className="fa fa-pencil-square-o fa-2x text-success"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <button
                      className="btn"
                      onClick={() => {
                        deleteTask(dd.id);
                      }}
                    >
                      <i
                        className="fa fa-trash fa-2x text-danger"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminDashboard;
