import './Resources/404/404.css'
import { Link } from 'react-router-dom'
import Lottie from "lottie-react";
import animation from "../assets/404.json";

const NotFoundPage = () => {
  return (
    <>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 offset-sm-1 text-center mx-auto">
                <div className="four_zero_four_bg">
                  <Lottie
                    animationData={animation}
                    loop
                    autoplay
                    style={{ width: 500, height: 500, margin: "0 auto" }}
                  />
                </div>
                <div className="contant_box_404">
                  <h3 className="h2" style={{color:"#48483A"}}>
                    Whoops! Looks like this page doesn't exist...
                  </h3>
                  <p style={{marginBottom:"2px", fontSize:"20px", color:"#48483A"}}>Maybe try going back?</p>
                  <Link to="/" className='link_404' >Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage