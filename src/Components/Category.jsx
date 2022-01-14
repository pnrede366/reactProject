import react, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { findByCat, getProducts } from "../Action/CatAction"
import "./All.css"
import {useHistory} from "react-router-dom"
import laptop from '../Assets/images/download.png'
const Category =()=>{
    const [category, setcategory] = useState("")
    
    const dispatch = useDispatch()
    const history= useHistory()

    
  
    return (
        <div className="d-flex justify-content-around text-center w-md-75 py-4 aos-init mx-auto w-xs-100 " data-aos="fade-up">
   
            <div>
                <span >
                    <img  className="catIcon" onClick={()=>{
                        dispatch(getProducts("Mobile"))
                    }}  src="https://clipart.info/images/ccovers/1503496383Apple-IPhone-Png-mobile.png" alt="" />
                </span>
                <div className="catTitle" >
                    Mobile
                </div>
            </div>
            <div>
                <span >
                    <img  className="catIcon"  onClick={()=>{
                          dispatch(getProducts("Laptop"))
                    }}  src={laptop} alt="" />
                </span>
                <div className="catTitle">
                    Laptop
                </div>
            </div>
            <div>
                <span >
                    <img className="catIcon" onClick={()=>{
                          dispatch(getProducts("TV"))
                    }} src="https://www.cebuappliancecenter.com/wp-content/uploads/2014/01/p-2713-32SX100-Right.png" alt="" />
                </span>
                <div className="catTitle">
                    Smart TV
                </div>
            </div>
            <div>
                <span >
                    <img  onClick={()=>{
                           dispatch(getProducts("Watches"))
                    }} className="catIcon" src="https://pngimg.com/uploads/watches/watches_PNG9884.png" alt="" />
                </span>
                <div className="catTitle"> 
                    Watches
                </div>
            </div>
            <div>
                <span >
                    <img onClick={()=>{
                           dispatch(getProducts("Cloth"))
                    }} className="catIcon" src="https://cdn2.iconfinder.com/data/icons/app-types-in-grey/512/clothes_512pxGREY.png" alt="" />
                </span>
                <div className="catTitle">
                    Cloths
                </div>
            </div>
 
        </div>
    )


}

export default Category;