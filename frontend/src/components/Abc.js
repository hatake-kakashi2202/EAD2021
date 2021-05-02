import React ,{Component}from 'react'
import './style2.css';
import img1 from './images/pic1.jpg'
import img2 from './images/pic2.jpg'
import img3 from './images/pic3.jpg'
import img4 from './images/pic4.jpg'
import img5 from './images/pic5.jpg'
import img6 from './images/pic6.jpg'
import img7 from './images/pic7.jpg'
import logo1 from './images/logo1.png'
import logo2 from './images/logo2.png'
import logo3 from './images/logo3.png'
import imgg1 from './images/picc1.jpg'
import imgg2 from './images/picc2.jpg'
import imgg3 from './images/picc3.jpg'
import imgg4 from './images/picc4.jpg'
import imgg5 from './images/picc5.jpg'
import imgg6 from './images/picc6.jpg'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


class Abc extends Component {
 render(){
  return (
    <div style={{overflowX:"hidden"}}>
   
    {/* Masthead*/}
    <header className="masthead" >
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h1 className="text-uppercase text-whitecream font-weight-bold">Your Favorite Source of Free Bootstrap Themes</h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-whitecream-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
          </div>
        </div>
      </div>
    </header>
    {/* About*/}
    <section className="page-section bg-primary" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-whitecream mt-0">We've got what you need!</h2>
            <hr className="divider dark my-4" />
            <p className="text-whitecream-75 mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
            <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
          </div>
        </div>
      </div>
    </section>
    {/* Services*/}
    <section className="page-section" id="services">
      <div className="container">
        <h2 className="text-center text-greendark mt-0">At Your Service</h2>
        <hr className="divider grey my-4" />
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <img src={logo2} alt="" />
              <h3 className="h4 mb-2">Sturdy Themes</h3>
              <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <img src={logo1} alt="" />
              <h3 className="h4 mb-2">Up to Date</h3>
              <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
            <img src={logo2} alt="" />
              <h3 className="h4 mb-2">Ready to Publish</h3>
              <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
            <img src={logo1} alt="" />
              <h3 className="h4 mb-2">Made with Love</h3>
              <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Portfolio*/}
    <div style={{backgroundColor:"#BFC0C0"}}>
    <div className="page-sectiongrey py-5">
    <h2 className="text-center text-dark mt-0">Find Your Style Of House</h2>
        <hr className="divider my-4" />
    <div className="row py-5">
    <div className="col-lg-4">
          {/* Item */}
          <figure className="caption-3 ">
            <img src={imgg1} alt="" className="w-100" />
            <figcaption className="px-5 py-3 bg-white shadow-sm">
              <h2 className="h5 mb-1 font-weight-bold font-italic">Image Caption</h2>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-4">
          {/* Item */}
          <figure className="caption-3">
            <img src={imgg2} alt="" className="w-100" />
            <figcaption className="px-5 py-3 bg-white shadow-sm">
              <h2 className="h5 mb-1 font-weight-bold font-italic">Image Caption</h2>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-4">
          {/* Item */}
          <figure className="caption-3">
            <img src={imgg3} alt="" className="w-100" />
            <figcaption className="px-5 py-3 bg-white shadow-sm">
              <h2 className="h5 mb-1 font-weight-bold font-italic">Image Caption</h2>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-4">
          {/* Item */}
          <figure className="caption-3 ">
            <img src={imgg4} alt="" className="w-100" />
            <figcaption className="px-5 py-3 bg-white shadow-sm">
              <h2 className="h5 mb-1 font-weight-bold font-italic">Image Caption</h2>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-4">
          {/* Item */}
          <figure className="caption-3">
            <img src={imgg5} alt="" className="w-100" />
            <figcaption className="px-5 py-3 bg-white shadow-sm">
              <h2 className="h5 mb-1 font-weight-bold font-italic">Image Caption</h2>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-4">
          {/* Item */}
          <figure className="caption-3">
            <img src={imgg6} alt="" className="w-100" />
            <figcaption className="px-5 py-3 bg-white shadow-sm">
              <h2 className="h5 mb-1 font-weight-bold font-italic">Image Caption</h2>
            </figcaption>
          </figure>
        </div>
      </div>
          </div>
          </div>
      
    {/*Roomates*/}
    <section className="page-section bg-dark text-white"> 
    <h2 className="text-center text-greenlight mt-0">Find Roomates</h2>
    <hr className="divider light my-4" />
    <div className="row">
        {/* Gallery item */}
        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294929/matthew-hamilton-351641-unsplash_zmvozs.jpg" alt="" className="img-fluid card-img-top" />
            <div className="p-4">
              <h5> <a href="#" className="text-dark">Red paint cup</a></h5>
              <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                <p className="small mb-0"><i className="fa fa-picture-o mr-2" /><span className="font-weight-bold">JPG</span></p>
                <div className="badge badge-danger px-3 rounded-pill font-weight-normal">New</div>
              </div>
            </div>
          </div>
        </div>
        {/* End */}
        {/* Gallery item */}
        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg" alt="" className="img-fluid card-img-top" />
            <div className="p-4">
              <h5> <a href="#" className="text-dark">Blorange</a></h5>
              <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                <p className="small mb-0"><i className="fa fa-picture-o mr-2" /><span className="font-weight-bold">PNG</span></p>
                <div className="badge badge-primary px-3 rounded-pill font-weight-normal">Trend</div>
              </div>
            </div>
          </div>
        </div>
        {/* End */}
        {/* Gallery item */}
        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg" alt="" className="img-fluid card-img-top" />
            <div className="p-4">
              <h5> <a href="#" className="text-dark">And She Realized</a></h5>
              <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                <p className="small mb-0"><i className="fa fa-picture-o mr-2" /><span className="font-weight-bold">JPG</span></p>
                <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
              </div>
            </div>
          </div>
        </div>
        {/* End */}
        {/* Gallery item */}
        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/dose-juice-1184444-unsplash_bmbutn.jpg" alt="" className="img-fluid card-img-top" />
            <div className="p-4">
              <h5> <a href="#" className="text-dark">DOSE Juice</a></h5>
              <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                <p className="small mb-0"><i className="fa fa-picture-o mr-2" /><span className="font-weight-bold">JPEG</span></p>
                <div className="badge badge-success px-3 rounded-pill font-weight-normal">Hot</div>
              </div>
            </div>
          </div>a
        </div>
        {/* End */}
        </div>
    </section> 
    {/* Footer*/}
    <footer className="bg-light py-5">
      <div className="container"><div className="small text-center text-muted">Copyright © 2020 - Start Bootstrap</div></div>
    </footer>
  </div>
  );
}
}
export default Abc;