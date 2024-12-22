import React from 'react'
import consoleBackground from "../videos/console-background.mp4"
import "./Console.css"
import { useNavigate } from 'react-router-dom'

const Console = () => {
    const navigate = useNavigate();

    const handleMembers =()=>{
        navigate('/members')
    }
    const handleMemories =()=>{
        navigate('/memories')
    }
    const handleProjects =()=>{
        navigate('/projects')
    }
    const handleBlogs =()=>{
        navigate('/blogs')
    }
  return (
    <div className="console-container">
        {/**Console container background*/}
        <div className="console-background">
            <video autoPlay loop muted>
                <source src={consoleBackground} />
            </video>
        </div>
        {/**Console content*/}
        <div className="console-content">
            {/**Logo Component */}
            <div className="squadLogo">
                <h1>S76</h1>
            </div>
            {/**Object buttons*/}
            <div className="buttons">
                {/**Switch to navigate members */}
                <div className="button" onClick={handleMembers}>
                    <p>Members</p>
                </div>
                {/**Switch to navigate memories */}
                <div className="button" onClick={handleMemories}>
                    <p>Memories</p>
                </div>
                {/**Switch to navigate projects */}
                <div className="button" onClick={handleProjects}>
                    <p>Projects</p>
                </div>
                {/**Switch to navigate blogs */}
                <div className="button" onClick={handleBlogs}>
                    <p>Blogs</p>
                </div>
                {/**Switch to navigate events */}
                <div className="button">
                    <p>Events</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Console
