import React from 'react'
import Header from './Header'
import '../Styles/MainContainer.css';
import Kanban from './Kanban';

const MainContainer = () => {
  return (
    <>
    <div className='MainContainer'>
  <Header/>
  <div className="projectDetail">
<div className="aboutProject">
    <div className="firstHalf">
    <div className="projectName">
        Mobile App
    </div>
    <div className='icons'>
        <img src="/arrow-square-up.png" alt="" />
        <img src="/Group 626.png" alt="" />
    </div>
    </div>
    <div className="secondHalf">
        <div className="inviteSection">
            <img src="/addsquare.png" alt="" />
            <div className="invite">Invite</div>
        </div>
        <div className="members">
            <img src="/Ellipse.png" alt="" className='first'/>
            <img src="/lady.png" alt="" className='second'/>
            <img src="/Ellipse 15.png" alt="" className='third'/>
            <img src="/Ellipse 14.png" alt="" className='fourth'/>
            <div className='activeNumber'>+2</div>
        </div>
    </div>
</div>
<div className="projectOptions">
    <div className="firstHalf">
        <div className="dropDown">
            <img src="/filter.png" alt="" className='ddFirst'/>
            <div className="dropDownText">Filter</div>
            <img src="/arrowdown.png" alt="" className='ddSecond'/>
        </div>
        <div className="dropDown dropDownSecond">
        <img src="/calendar.png" alt="" className='ddFirst'/>
        <div className="dropDownText">Today</div>
            <img src="/arrowdown.png" alt="" className='ddSecond'/>
        </div>
    </div>
    <div className="secondHalf">
        <div className="share">
            <img src="/profile-2user.png" alt="" />
            <div className="shareText">Share</div>
        </div>
        <div className="pipe"></div>
        <div className="blueMenu">
            <div className="line"></div>
            <div className="line secondLine"></div>
        </div>
        <div className="circles">
            <img src="/Group 611.png" alt="" />
        </div>
    </div>
</div>
  </div>
<Kanban/>
    </div>
    </>
  )
}

export default MainContainer