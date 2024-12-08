import './Home.css'
import "@fontsource/poppins";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import human from './../../assets/human.png'
import calendar from './../../assets/calendar.png'
import checklist from './../../assets/checklist.png'
import list from './../../assets/list.png'
import votebox from './../../assets/votebox.png'
import inc from './../../assets/2020INC.png'
import arisehealth from './../../assets/AriseHealth.png'
import ephicient from './../../assets/Ephicient.png'
import pipelinxco from './../../assets/Pipelinxco.png'
import thepark from './../../assets/THEPARK.png'
import toogether from './../../assets/TOOGETHER.png'
import gallery from './../../assets/Gallery Scroll.png'
import imgone from './../../assets/Image1.jpg'
import imgtwo from './../../assets/Image2.jpg'
import imgthree from './../../assets/Image3.png'
import vector1 from './../../assets/Vector 1.png'
import crowd from './../../assets/Crowd.png'
import arrow from './../../assets/arrow.png'
import screen from './../../assets/Screen.png'
import flowers from './../../assets/Flowers.png'
import Footer from '../../components/footer/Footer';
import { BsCalendarEvent } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { MdHowToVote } from "react-icons/md";
import { HiClipboardList } from "react-icons/hi";
import { IoIosPerson } from "react-icons/io";
import { Block } from '@mui/icons-material';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Home = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (  
        <div>
          <div className="home-overlay">
          <div className="back">
               <div className='h1'>
                   <h1 className="impact"> Impacting <br /> Lives of Young <br />People in Africa.</h1>
                   <p className="make">
                       Making youngsters leverage their <br />
                       skills, abilities and talents stand <br />
                       out as a goal getter
                   </p>
                </div>

                <div className="together">  
                   <button className='join'>Join Us</button>
                   <div className="play">
                   <p><PlayCircleIcon/></p>
                    <p className="work"> How it works</p>
                    </div>
                </div>
             </div>
          </div>
          <div className="empty">
            <div className="lor">
              <h1>How it works</h1>
              <p>
                 Lorem ipsum dolor sit amet consectetur. Sit
                 curabitur nulla justo <br /> tellus amet. Ut placerat
                 dolor massa metus quisque sodales semper.<br />
                 Hac donec vulputate pharetra augue eu congue.
              </p>
            </div>
            <div className="tab">
            <Box
               sx={{ flexGrow: 1, bgcolor: '#F3F3F5', display: 'flex', height: 643.18,}}
            >
              
            <Tabs 
              orientation="vertical"
               // variant="scrollable"
               value={value}
               onChange={handleChange}
               aria-label="Vertical tabs example"
               TabIndicatorProps={{ style: { backgroundColor: "#000" } }}
               sx={{ borderRight: 1, borderColor: 'none' }}
            >
               <Tab className='human' icon={<IoIosPerson style={{width: 40, height: 53.33, color: value === 0 ? "#000" : '#71767D'}}/> } label="Create an Account" iconPosition='start' sx={{textTransform: 'none', textAlign: 'center', justifyContent: 'flex-start',width: 300, height: 35, gap: '12px',fontSize: 20, color: value === 0 ? "#000" : '#71767D'}} {...a11yProps(0)} />
               <Tab className='human' icon={<BsCalendarEvent style={{width: 35, height: 53.33, color: '#71767D'}}/> } label="Join an Event" iconPosition='start' sx={{textTransform: 'none', textAlign: 'center', justifyContent: 'flex-start',width: 300, height: 35, gap: '15px',fontSize: 20}} {...a11yProps(1)} />
               <Tab className='human' icon={<GoChecklist style={{width: 40, height: 53.33, color: '#71767D'}}/> }  label="Submit Requirements" iconPosition='start' sx={{textTransform: 'none', textAlign: 'center', justifyContent: 'flex-start',width: 300, height: 35, gap: '10px',fontSize: 18}} {...a11yProps(2)} />
               <Tab className='human' icon={<HiClipboardList style={{width: 40, height: 53.33, color: '#71767D'}}/> } label="Get Shortlisted" iconPosition='start' sx={{textTransform: 'none', textAlign: 'center', justifyContent: 'flex-start',width: 300, height: 35, gap: '10px',fontSize: 20}} {...a11yProps(3)} />
               <Tab className='human' icon={<MdHowToVote style={{width: 40, height: 53.33, color: '#71767D'}}/> } label="Get the Highest Votes" iconPosition='start' sx={{textTransform: 'none', textAlign: 'center', justifyContent: 'flex-start',width: 300, height: 35, gap: '10px',fontSize: 18}} {...a11yProps(4)} />
             </Tabs>
             
               <TabPanel value={value} index={0}>
                  <div className="span">
                    <IoIosPerson className='person'/>
                     <div className="spanwords">
                    <h2>Create an Account</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Sit <br />
                       curabitur nulla justo tellus amet. Ut placerat <br />
                       dolor massa metus quisque sodales semper. <br />
                       Hac donec vulputate pharetra augue eu congue.
                    </p>
                    </div>
                  </div>
               </TabPanel>
               <TabPanel value={value} index={1}>
               <div className="span">
                    <BsCalendarEvent className='person' />
                     <div className="spanwords">
                    <h2>Join an Event</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Sit <br />
                       curabitur nulla justo tellus amet. Ut placerat <br />
                       dolor massa metus quisque sodales semper. <br />
                       Hac donec vulputate pharetra augue eu congue.
                    </p>
                    </div>
                  </div>
               </TabPanel>
               <TabPanel value={value} index={2}>
               <div className="span">
                    <GoChecklist className='person' />
                     <div className="spanwords">
                    <h2>Submit Requirements</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Sit <br />
                       curabitur nulla justo tellus amet. Ut placerat <br />
                       dolor massa metus quisque sodales semper. <br />
                       Hac donec vulputate pharetra augue eu congue.
                    </p>
                    </div>
                  </div>
                 </TabPanel>
               <TabPanel value={value} index={3}>
               <div className="span">
                    <HiClipboardList className='person' />
                     <div className="spanwords">
                    <h2>Get Shortlisted</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Sit <br />
                       curabitur nulla justo tellus amet. Ut placerat <br />
                       dolor massa metus quisque sodales semper. <br />
                       Hac donec vulputate pharetra augue eu congue.
                    </p>
                    </div>
                  </div>
               </TabPanel>
               <TabPanel value={value} index={4}>
               <div className="span">
                    <MdHowToVote className='person'/>
                     <div className="spanwords">
                    <h2>Get the Highest Votes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Sit <br />
                       curabitur nulla justo tellus amet. Ut placerat <br />
                       dolor massa metus quisque sodales semper. <br />
                       Hac donec vulputate pharetra augue eu congue.
                    </p>
                    </div>
                  </div>
               </TabPanel>
          </Box>
          </div>
        </div>
        <div className="partners">
          <div className="partwords">
            <h1>Our Partners</h1>
            <p>People who have trust in us</p>
          </div>
          <div className="f1stpart">
            <img src={arisehealth} alt="" />
            <img src={ephicient} alt="" />
            <img src={inc} alt="" />
            <img src={thepark} alt="" />
          </div>
          <div className="s2ndpart">
          <img src={pipelinxco} alt="" />
          <img src={toogether} alt="" />
          </div>
        </div>
        <img className='gallery' src={gallery} alt="" />
        <div className="people">
          <h1 className='whatpeople'>What people say about Us</h1>
          <div className="aco">
          <div className="peoplewords">
            <p>
              “Amet minim mollit non deserunt <br />
              ullamco est sit aliqua dolor do <br />
              amet sint. Velit officia consequat <br />
              duis enim velit mollit. Exercitation <br />
              veniam consequat.”
            </p>
            <div className="pcw">
            <img src={imgone} alt="" />
            <div className="pccw">
              <h1>Emmanuel J</h1>
              <p>Photographer</p>
            </div>
            </div>
          </div>
          <div className="peoplewords">
            <p>
              “Amet minim mollit non deserunt <br />
              ullamco est sit aliqua dolor do <br />
              amet sint. Velit officia consequat <br />
              duis enim velit mollit. Exercitation <br />
              veniam consequat.”
            </p>
            <div className="pcw">
            <img src={imgtwo} alt="" />
            <div className="pccw">
              <h1>John Woods</h1>
              <p>Software Engineer</p>
            </div>
            </div>
          </div>
          <div className="peoplewords">
            <p>
              “Amet minim mollit non deserunt <br />
              ullamco est sit aliqua dolor do <br />
              amet sint. Velit officia consequat <br />
              duis enim velit mollit. Exercitation <br />
              veniam consequat.”
            </p>
            <div className="pcw">
            <img src={imgthree} alt="" />
            <div className="pccw">
              <h1>Sidwell Mako</h1>
              <p>Artist</p>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div className="ourblog">
          <div className="our">
          <h1 className="blog">Our Blog</h1>
           <div className="para">
          <p className="lorem">
            Lorem ipsum dolor sit amet consectetur. <br />
            Sit curabitur nulla justo tellus amet.
           </p>
           <img className='vec' src={vector1} alt="" />
           </div>
           </div>
            <div className="cardgroup">
           <Card className='cardcont' sx={{ maxWidth: 300, borderRadius: 5, height: 400, backgroundColor: '#F3F3F5' }}>
           <CardMedia
             sx={{ height: 250 }}
             image={crowd}
             title="green iguana"
            />
           <CardContent className='cards'>
           <Typography variant="body2" sx={{ color: 'black' }} className='arrow'>
           <img src={arrow} alt="" />
            </Typography>
            <div className="lorp">
              <p className='date'>
                26th June
              </p>
             <h5 className="lo">
               Lorem Ipsum
             </h5>
            </div>
            </CardContent>
            </Card>

            <Card className='cardcont' sx={{ maxWidth: 500, borderRadius: 5, height: 400, backgroundColor: '#F3F3F5' }}>
           <CardMedia
             sx={{ height: 250 }}
             image={screen}
             title="green iguana"
            />
           <CardContent className='cards'>
           <Typography variant="body2" sx={{ color: 'black' }} className='arrow'>
           <img src={arrow} alt="" />
            </Typography>
            <div className="lorp">
              <p className='date'>
                26th June
              </p>
             <h5 className="lo">
               Lorem Ipsum
             </h5>
            </div>
            </CardContent>
            </Card>

            <Card className='cardcont' sx={{ maxWidth: 500, borderRadius: 5, height: 400, backgroundColor: '#F3F3F5' }}>
           <CardMedia
             sx={{ height: 250 }}
             image={flowers}
             title="green iguana"
            />
           <CardContent className='cards'>
           <Typography variant="body2" sx={{ color: 'black' }} className='arrow'>
           <img src={arrow} alt="" />
            </Typography>
            <div className="lorp">
              <p className='date'>
                26th June
              </p>
             <h5 className="lo">
               Lorem Ipsum
             </h5>
            </div>
            </CardContent>
            </Card>
            </div>
        </div>
        <div className="footer">
        <Footer/>
        </div>
        </div>
    );
}

export default Home;