

import './Footer.css'

const Footer = () => {
    return (  
        <div>
             <div className="sub">
             <div className="news">
              <h1>Subscribe to our Newsletter</h1>
              <p>Join our mailing list to get the latest news</p>
              <form>
               <div className="form">
                <input className='email' type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
                </div>
              </form>
              </div>

              <div className="footp">
            <div className="footcover">
            <div className="logo2">
                <h1 className='the2'>The</h1>
                <h1 className='next2'>Next Gen</h1>
                <h1 className="show2">SHOW</h1>
             </div>
             <div className="othernames">
              <div className="company">
                <h3 className="comp">COMPANY</h3>
                <p>How it works</p>
                <p>Talents</p>
                <p>Events</p>
              </div> 

              <div className="company">
                <h3 className="comp">RESOURCES</h3>
                <p>Blog post name goes here</p>
                <p>Blog post name goes here</p>
                <p>Blog post name goes here</p>
                <p>see all resources</p>
              </div> 

              <div className="company">
                <h3 className="comp">ABOUT</h3>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div> 
             </div>
            
            </div>
            <p className="copy">
              Copyright © 2023 The NextGen Show
              </p>
            </div>
            </div>
        </div>
    );
}
 
export default Footer;