import React from 'react'

const Footer = () => {
    return (
        <div  >
     <footer className="text-light  p-3 " style={{backgroundColor:"#000000"}} >
        <div className="row" >
            <div className="col-footer-1 col-10 col-lg-2 col-md-3 offset-md-1  offset-lg-1 col-sm-12 " >
              
                    <div className="list-heading fs-5 ">Get to Know Us</div>
                    <div className="know-us"><a href="#" className="nav-link">Careers</a></div>
                    <div className="know-us nav-item"><a href="#" className="nav-link">About Us</a></div>
                    <div className="know-us"><a href="#" className="nav-link">Press Realeases</a></div>
                    <div className="know-us"><a href="#" className="nav-link">PrCart Care</a></div>
                    <div className="know-us"><a href="#" className="nav-link">Gift A Smile</a></div>
             
            </div>
            <div className="col-footer-2 col-10 col-lg-2 col-md-3 offset-md-1  offset-lg-2 col-sm-12 " >
                
                    <div className="list-heading fs-5">Connect with Us</div>
                    <div className="know-us"><a href="#" className="nav-link">Facebook</a></div>
                    <div className="know-us"><a href="#" className="nav-link">Twitter</a></div>
                    <div className="know-us"><a href="#" className="nav-link">Instagram</a></div>
                    <div className="know-us">  <a className='nav-link'  href='#'>My Account</a></div>
               
            </div>
            <div className="col-footer-3 col-10 col-lg-2 col-md-3 offset-md-1  offset-lg-2 col-sm-12 " >
                
                    <div className="list-heading fs-5">Make money with </div>
                    <div className="know-us"><a href="#" className="nav-link">Sell on PrCart</a></div>
                    <div className="know-us"><a href="#" className="nav-link">LogIn seller</a></div>
                    <div className="know-us"><a href="#" className="nav-link">Seller Account</a></div>
            
            </div>
        </div>
    </footer>
   
    <div className="credit text-center" >2021 © PrCart. Developed by <a href="https://www.prdeveloper.tech" target="_blank" > Purushottam Rede</a></div>
        </div>
    )
}

export default Footer
