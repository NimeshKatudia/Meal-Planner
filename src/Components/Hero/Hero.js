import react from 'react'
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import diet_image from '../Assets/diet.jpeg'
const Hero = () =>{
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>Hello,</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>Your personal</p>
                        <img src={hand_icon} alt=""/>
                    </div>
                    <p>Diet Planner</p>
                </div>

                <div className='hero-latest-btn'>
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt=''/>
                </div>
            </div>
            <div className='hero-right'>
                <img src={diet_image} alt=""/>
            </div>
        </div>
    )
}

export default Hero;