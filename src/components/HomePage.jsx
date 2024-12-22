import React from 'react'
import "./HomePage.css"
import HomeBackground from "../videos/HomeBackground.mp4";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import animation from "../animation/Animation - 1734795772706.lottie";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    {/**To navigate Console from HomePage i am using useNavigate hook function*/}
    const navigate = useNavigate();
    const handleExplore=()=>{
        navigate('/console');
    }
  return (
    //To define Home Container
    <div className="home-Container">
        {/* To create the background. */}
        <div className="background">
            {/* The video Source */}
            <video autoPlay loop muted>
                <source src = {HomeBackground}/>
            </video>
            {/* Gradient Component */}
            <div className="background-gradient">

            </div>
        </div>
        {/**HomePage Compnent*/}
        <div className="homePage-content">
            {/**Logo Component */}
            <div className="squadLogo">
                <h1>S76</h1>
            </div>
            {/**Tittle And tagline */}
            <div className="tittle">
                <h1>Squad - 76</h1>
            </div>
            <div className="tagName">
                <p>One team, One Dream, Unstoppable Stream</p>
            </div>
            {/**Explaore button */}
            <div className="button" onClick={handleExplore}>
                <DotLottieReact
                    src={animation}
                    loop
                    autoplay
                />
            </div>
        </div>
    </div>
  )
}

export default HomePage
