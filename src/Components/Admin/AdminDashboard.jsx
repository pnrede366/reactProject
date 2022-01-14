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
  const [category, setcategory] = useState("Mobile")
  const [stock, setstock] = useState(0)
  const quanity=1;
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
      .get("https://prcartnew.herokuapp.com/products")
      .then((Response) => setgetData(Response.data.data));

    
  }, [getData]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(getData);

    axios
      .post("https://prcartnew.herokuapp.com/products", {
        name: PName,
        descr: PDescr,
        price: PPrice,
        img: PPath,
        stock:stock,
        category:category,
        quantity:quanity
      })
      .then((Response) => console.log("added"));
      alert("Data Added Successfully")
            setPName('');
            setPDescr('')
            setPPrice(0) 
  };

  const deleteTask = (id) => {
    // console.log(i);
    // console.log(`http://localhost:3000/product/${i}`);
    // console.log(i);
    axios
      .delete(`https://prcartnew.herokuapp.com/products/${id}`).then(()=>console.log("deleyed"))

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
    setcategory(getData[j].category);
    setstock(getData[j].stock);

    // axios.get("http://localhost:3000/posts").then(Response=>setData(Response.data))

    // data.map((dd)=>{
    //     console.log(dd.name);
    // })
  };

  const update = (id) => {
    // console.log(i);
    axios.put(`https://prcartnew.herokuapp.com/products/${id}`, {
      name: PName,
      descr: PDescr,
      price: PPrice,
      path: PPath,
      stock:stock,
      category:category  

    });
    setPName("");
    setPDescr("");
    setPPrice(0);
    setShow(false)
  };
  const formStyle={
    /* From https://css.glass */
"background":" rgba(255, 255, 255, 0)",
"borderRadius": "16px",
"boxShadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
"backdropFilter": "blur(18.2px)",
}
  return (
    <div>

      <Route>
        <Switch>
          {
            lsItem?<Redirect to="/AdminDashboard"></Redirect>:<Redirect to="/AdminPanel"></Redirect>
          }     
          </Switch>   
      </Route>
      <div className=" col-lg-5 col-md-8 col-sm-10 col-10 mx-auto my-5 " style={formStyle}>
      <h2 className="text-center text-primary">Add Product</h2>
        <form onSubmit={submitHandler} className="m-5"  >
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
          <input required
            onChange={(e) => {
              setstock(e.target.value);
            }}
            value={stock}
            className="form-control"
            type="number"
            placeholder="Stock Quantity"
          />{" "}
          <br />
          <label htmlFor="">Category:</label>
          <br />
          <select name="category" onChange={(e)=>{
            setcategory(e.target.value)
          }} className="form-control" id="">
            
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="TV">Smart TV</option>
            <option value="Watches">Watches</option>
            <option value="Cloth">Cloth</option>
          </select>
          <br />
          <button type="submit" className="btn btn-primary">
            Add Product
            
          </button>
          {show?<button className="btn btn-success " onClick={()=>{
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

      <div className="d-flex flex-wrap  px-2 ">
        {getData.map((dd, j) => {
          return (
            // <div key={j} className="products" style={{backgroundColor:"#0084FF"}}>
            //   <div className="m-2 p-2" style={productStyle}>
            //     <div className="">
            //       <img
            //         style={{ width: "100%",height:'15rem' }}
            //         src={dd.img}
            //         alt=""
            //       />
            //     </div>
            //     <div>
            //       {" "}
            //       <h2>Name: {dd.name}</h2>{" "}
            //     </div>
            //     <div>
            //       {" "}
            //       <h6>Descr: {dd.descr}</h6>
            //     </div>
            //     <div>
            //       <h3>Price: {dd.price}</h3>
            //     </div>
            //     <div>
            //       <h3>Stock: {dd.stock}</h3>
            //     </div>
            //     <div>
            //       <h3>Category: {dd.category}</h3>
            //     </div>
               
            //     <div className="d-flex justify-content-between">
                  
                  
            //         <button
            //           className="btn"
            //           onClick={() => {
            //             edit(dd._id, j);
            //             setId(dd._id)
            //           }}
            //         >
            //           <i
            //             className="fa fa-pencil-square-o fa-2x text-light"
            //             aria-hidden="true"
            //           ></i>
            //         </button>
            //         <button
            //           className="btn"
            //           onClick={() => {
            //             deleteTask(dd._id);
            //           }}
            //         >
            //           <i
            //             className="fa fa-trash fa-2x text-light "
            //             aria-hidden="true"
            //           ></i>
            //         </button>
                
            //     </div>
            //   </div>
            // </div>
            <div  className="card text-center p-1 bg-light" id="cardId">
                
                    <div className="py-2">
                      <img src={dd.img} 
                      alt="" style={{width:"10vw",height:"20vh"}} />
                  </div>
                  <div className="uppercase">
                      {dd.name}
                  </div>
                  <div className="descr mx-auto my-1 "  >
                     Description: {dd.descr}
                  </div>
                  <div className="descr mx-auto my-1">
                     Category: {dd.category}
                  </div>
                  <div className="descr mx-auto my-1">
                   Stock:   {dd.stock}
                  </div>
                  <div className="d-flex mx-auto">
                      <h2 className="productPrice">{dd.price}</h2> <h2>₹</h2>
                  </div>
                  
                  <div>
                      
                     
               <div className="d-flex  justify-content-between">
             
                  
                  
                       <div className=""></div>
                       <div className="w-75">
                       <button
                            className="btn"
                            onClick={() => {
                              edit(dd._id, j);
                              setId(dd._id)
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
                              deleteTask(dd._id);
                            }}
                          >
                            <i
                              className="fa fa-trash fa-2x text-danger "
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
