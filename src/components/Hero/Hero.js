import Header from './Header/Header';
import hero_image_back from "../../assets/hero_image_back.png";
import hero_image from "../../assets/hero_image.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import CountUp from 'react-countup';
import './Hero.css';
const Hero = () => {
    const transition = {type: 'spring', duration: 2};
    const mobile = window.innerWidth<=768 ? true: false;
    return ( 
        <div className='hero'>
            <div className="blur blur-h"></div>
            <div className="hero__left">
                <Header/>

                <div className="hero_add">
                    <motion.div
                    initial={{left: mobile? '180px':'180'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type:'tween'}}
                    ></motion.div>
                    
                    <span style={{zIndex: 1000,}}> The best fitness club in the town</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape</span>
                        <span> Your</span>
                    </div>
                    <div><span>Ideal body</span></div>
                    <div>
                        <span>
                        In here we will help you to shape and build your ideal body to
                        live u your life to the fullest
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>
                         <CountUp start={100}  end={140}  duration={3}prefix='+'></CountUp>
                         </span>
                    <span>expert coach</span></div>
                    <div><span><CountUp start={800}  end={978}  duration={3}prefix='+'></CountUp></span>
                    <span>members joined</span>
                    </div>
                    <div><span><CountUp start={0}  end={50}  duration={3}prefix='+'></CountUp></span>
                    <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-button">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className="hero__right">
                <button className="btn">Join Now </button>
                <motion.div
                initial={{right:'-1rem'}}
                whileInView={{right:'4rem'}}
                transition={transition}
                className="heart-rate">
                   <img src={Heart} alt="heart" /> 
                   <span>Heart Rate</span><span> 116 bpm</span>
                </motion.div>
                <img src={hero_image} alt="hero" className='hero-image' />
                <motion.img
                initial={{right:'11rem'}}
                whileInView={{right:'20rem'}}
                transition={transition}
                 src={hero_image_back} alt="hero" className='hero-image-back' />

                <motion.div
                 initial={{right:'37remrem'}}
                 whileInView={{right:'28rem'}}
                 transition={transition}
                  className="calories">
                    <img src={Calories} alt="hero" />
                    <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>

                    </div>

                </motion.div>
            </div>
        </div>
     );
}
 
export default Hero;