import React from 'react'
import '../Styles/Sidebar.css';

const Sidebar = () => {
  const closeSidebar = ()=>{
    if(window.innerWidth<=768){
      document.querySelector(".sidebar").style.transform = "translateX(-250px)";
    }
  }
  return (
    <>
   <div className="sidebar">
    <div className="heading">
      <img src="/Group 7.png" alt="" className='first'/>
      <div className="projectName">Project M.</div>
      <img src="/Group 639.png" alt="" onClick={closeSidebar}/>
    </div>
    <div className="menuContainer">
<div className="menu">
  <div className="menuItems">
    <img src="/category.png" alt="" />
    <div className="menuName">Home</div>
  </div>
  <div className="menuItems">
    <img src="/message-question.png" alt="" />
    <div className="menuName">Messages</div>
  </div>
  <div className="menuItems">
    <img src="/task-square.png" alt="" />
    <div className="menuName">Tasks</div>
  </div>
  <div className="menuItems">
    <img src="/profile-2user.png" alt="" />
    <div className="menuName">Members</div>
  </div>
  <div className="menuItems">
    <img src="/setting-2.png" alt="" />
    <div className="menuName">Settings</div>
  </div>
</div>
    </div>
    <div className="projects">
       <div className="projectHead">
        <div className="myProject">MY PROJECTS</div>
        <img src="/add-square.png" alt="" />
       </div>
       <div className="projectType grey">
        <div className="dot green"></div> <div className="projectName bold600">Mobile</div>
       </div>
       <div className="projectType">
        <div className="dot orange"></div> <div className="projectName">Website Redesign</div>
       </div>
       <div className="projectType">
        <div className="dot pink"></div> <div className="projectName">Design Systems</div>
       </div>
       <div className="projectType">
        <div className="dot blue"></div> <div className="projectName">Wireframes</div>
       </div>
    </div>
    <div className="thoughtsContainer">
      <div className="circle">
        <img src="/lamp-on.png" alt="" />
        <div className='lampContainer'>
        </div>
      </div>
<div className="thought">
  <div className="thoughtsTime">Thoughts Time</div>
<div className="thoughtText">
We don’t have any notice for you, till then you can share your thoughts with your peers.
</div>
<input type="text" placeholder='Write a message'/>
</div>
    </div>
   </div>
    </>
  )
}

export default Sidebar