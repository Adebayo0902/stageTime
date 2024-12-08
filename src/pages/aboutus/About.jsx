import Footer from '../../components/footer/Footer'
import inc from './../../assets/2020INC.png'
import arisehealth from './../../assets/AriseHealth.png'
import ephicient from './../../assets/Ephicient.png'
import pipelinxco from './../../assets/Pipelinxco.png'
import thepark from './../../assets/THEPARK.png'
import toogether from './../../assets/TOOGETHER.png'
import './About.css'

const About = () => {
    return ( 
        <div> 
            <div className="con">
            <h1 className="about">About Us</h1>
            </div>
            <div className="partners2">
          <div className="partwords2">
            <h1>Meet Our Partners</h1>
          </div>
          <div className="f1stpart2">
            <img src={arisehealth} alt="" />
            <img src={ephicient} alt="" />
            <img src={inc} alt="" />
            <img src={thepark} alt="" />
          </div>
          <div className="s2ndpart2">
          <img src={pipelinxco} alt="" />
          <img src={toogether} alt="" />
          </div>
        </div>
         <div className="footer2">
            <Footer/>
         </div>
         <div className="allnotes">
          <div className="allintro">
            <h3>Introduction</h3>
            <p>
                Then Next Gen Talent Show is a Social Enterprise that uses talents and <br />
                abilities as a tool to facilitate opportunities for youth employment and <br />
                engagement
            </p>

            <p>
              It caters to young people from more than 20 countries in Africa that are <br />
              passionate about any form of talent they've got. 
            </p>
            <p>
              This initiative is just coming to an inception not to show that we are new but <br />
              for the fact that we understand the concept of nation building and the <br />
              impact the youths are able to lay, we are creating a platform for African Youth <br /> 
              to leverage on so that they become what they are ambitious of no matter <br />
              what their background is.
            </p>
            </div>

            <div className="allintro">
            <h3>Our Vision</h3>
            <p>
             To raise transformational youth Ambassadors for Africa who can break the <br />
             box and stand out in all continents.
            </p>
            </div>

            <div className="allintro">
            <h3>Our Mission</h3>
            <p>
             We believe that young people can make a sustainable living doing what they<br />
              love.<br />
              Furthermore, we do not want a continent that does not sustain new talents <br /> 
              we are tired of that. We want to create a platform of support to make the <br />
              African youth reach their potentials and never settling for the less which is <br />
              part of the reason why we make it a talent show-competitive!
            </p>
            </div>
         </div>
        </div>
     );
}
 
export default About;