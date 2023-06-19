import React from 'react'
import '../Styles/Header.css';

const Header = () => {
  const openSidebar = ()=>{
    document.querySelector(".sidebar").style.transform = "translateX(0)"
  }
  return (
    <div className='header'>
          <div className="hamMenu" onClick={openSidebar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        <div className="firstHalf">
            <input type="text" placeholder='Search for anything...' />
            <img src="/search-normal.png" alt="" />
        </div>
        <div className='secondHalf'>
        <div className="options">
            <img src="/calendar-2.png" alt="" />
            <img src="/message-question.png" alt="" />
            <img src="/notification.png" alt="" />
        </div>
        <div className="user">
            <div className="aboutUser">
            <div className="name">Anima Agrawal</div>
            <div className="location">U.P, India</div>
            </div>
            <div className="profileImg">
            <img src="/image 1.png" alt="" />
            </div>
            <div className='arrowDown'>
            <img src="/arrow-down.png" alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header