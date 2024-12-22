import React from 'react'
import "./Memories.css"
import imgbg1 from "../images/Backgrounds/membersbg.png"
const Memories = ({MemoryData}) => {
  return (
    <div className="memory-container">
        <div className="bg">
                <img src={imgbg1} alt="" />
              </div>
        <div className="title">
            <h1>NOSTALGIA</h1>
        </div>
        <div className="memory-content">
            {MemoryData.map((memory)=>(
                <section className='memo'>
                        <div className="memorydata">
                            <div className="image">
                                <img src={memory.image} alt="" />
                            </div>
                            <div className="text">
                                <h1>{memory.topic}</h1>
                                <p>{memory.description}</p>
                            </div>
                        </div>
                </section>
            ))}
        </div>

    </div>
  )
}

export default Memories
