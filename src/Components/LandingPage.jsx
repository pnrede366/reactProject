import React from 'react'
import '../Assets/Product.css'

const LandingPage = () => {
    return (
<div>
    <div className="main_wrapper">
                <div className="home-wrapper">
                <h1 className="title_main p-2">Shop With PrCart</h1>
                <div className="text_main">Get Flat 10% Cashback On Credit Card </div>
                <br/>
                <div className="btn_group ">
                <a href="#shop" className="btn_main_1 col-12" style={{textDecoration:'none'}}> Shop </a>
                <a href="./sellersignup.php" className="btn_main_2 col-6" style={{textDecoration:'none'}}>Join Us</a>
                </div>
                </div>
               
    </div>   
</div>
    )
}

export default LandingPage
