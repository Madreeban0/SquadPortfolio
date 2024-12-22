import React from 'react'
import "./Blogs.css"
import BlogsBackGround from "../videos/Blogsbg.mp4"
const Blogs = () => {
  return (
    <div className='Blogs-container'>
      <div className="console-background">
            <video autoPlay loop muted>
                <source src={BlogsBackGround} />
            </video>
        </div>
        <div className="Blogs-Content">
            <div className="tittle">
                <h1>Blogs</h1>
            </div>
            <div className="blog">
                <p>Our First Hackathon Experience as First-Year Students

Participating in our first hackathon as first-year students was nothing short of exhilarating! It was a unique opportunity to step out of our comfort zones and dive headfirst into a world of innovation, collaboration, and problem-solving.

The hackathon started with an inspiring keynote session where experienced mentors shared their insights and strategies. As beginners, we were initially overwhelmed by the scale of the event, but the enthusiasm and support from the organizers and peers kept us motivated.

Our team brainstormed ideas and settled on a project we were passionate about. Even though we had limited technical knowledge, we divided tasks according to our strengths and relied heavily on online resources and mentor guidance. It was incredible to see how quickly we learned and implemented new skills under pressure.

There were definitely challenges—debugging errors at 3 AM, struggling to meet deadlines, and moments of self-doubt. But these struggles taught us resilience and the importance of teamwork. Every small milestone, like getting a feature to work or presenting our demo to the judges, felt like a huge victory.

The best part was the connections we made. Meeting like-minded peers and networking with industry professionals gave us a fresh perspective on technology and innovation. The feedback we received helped us grow and sparked ideas for future projects.</p>
            </div>
        </div>
    </div>
  )
}

export default Blogs
