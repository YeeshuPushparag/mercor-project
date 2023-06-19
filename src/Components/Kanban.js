import React,{useEffect} from "react";
import "../Styles/Kanban.css";


const Kanban = () => {
    const insertAboveTask = (zone, mouseY) => {
        const els = zone.querySelectorAll(".work:not(.isDragging)");
      
        let closestTask = null;
        let closestOffset = Number.NEGATIVE_INFINITY;
      
        els.forEach((task) => {
          const { top } = task.getBoundingClientRect();
      
          const offset = mouseY - top;
      
          if (offset < 0 && offset > closestOffset) {
            closestOffset = offset;
            closestTask = task;
          }
        });
      
        return closestTask;
      };
    useEffect(() => {
        const draggables = document.querySelectorAll(".work");
        const droppables = document.querySelectorAll(".workContainer");
        
        draggables.forEach((task) => {
          task.addEventListener("dragstart", () => {
            task.classList.add("isDragging");
          });
          task.addEventListener("dragend", () => {
            task.classList.remove("isDragging");
          });
        });
        
        droppables.forEach((zone) => {
          zone.addEventListener("dragover", (e) => {
            e.preventDefault();
        
            const bottomTask = insertAboveTask(zone, e.clientY);
            const curTask = document.querySelector(".isDragging");
        
            if (!bottomTask) {
              zone.appendChild(curTask);
            } else {
              zone.insertBefore(curTask, bottomTask);
            }
          });
          });
    }, [])
    
  return (
    <div className="kanbanContainer">
      <div className="kanbanList">
        <div className="kanbanHead blueHead">
          <div className="kanbandot bluedot"></div>
          <div className="kanbanHeading">To Do</div>
          <div className="kanbanNumber">4</div>
        <div className="addKanban">
                <img src="/addsquare.png" alt="" />
            </div>
        </div>
        <div className="workContainer">

        <div className="work" draggable="true">
            <div className="workHead">
                <div className="progress low">Low</div>
                <div className="menu">. . .</div>
            </div>
            <div className="aboutWork">
                <div className="workName">Brainstorming</div>
                <p>Brainstorming brings team members' diverse experience into play. </p>
            </div>
            <div className="workOptions">
                <div className="commenter">
                    <img src="Ellipse.png" alt="" />
                    <img src="Ellipse 14.png" alt="" className="second"/>
                    <img src="Ellipse 15.png" alt="" className="third"/>
                </div>
                <div className="comment">
                    <img src="/Group 627.png" alt="" />
                    <div className="noOfComments">12 comments</div>
                </div>
                <div className="file">
                    <img src="/Group 628.png" alt="" />
                    <div className="noOfFiles">0 files</div>
                </div>
            </div>
        </div>
        <div className="work" draggable="true">
            <div className="workHead">
                <div className="progress high">High</div>
                <div className="menu">. . .</div>
            </div>
            <div className="aboutWork">
                <div className="workName">Research</div>
                <p>User research helps you to create an optimal product for users. </p>
            </div>
            <div className="workOptions">
                <div className="commenter">
                    <img src="lady.png" alt="" />
                    <img src="Ellipse 13.png" alt="" className="second"/>
                </div>
                <div className="comment">
                    <img src="/Group 627.png" alt="" />
                    <div className="noOfComments">10 comments</div>
                </div>
                <div className="file">
                    <img src="/Group 628.png" alt="" />
                    <div className="noOfFiles">3 files</div>
                </div>
            </div>
        </div>
        <div className="work" draggable="true">
            <div className="workHead">
                <div className="progress high">High</div>
                <div className="menu">. . .</div>
            </div>
            <div className="aboutWork">
                <div className="workName">Wireframes</div>
                <p>Low fidelity wireframes include the most basic content and visuals. </p>
            </div>
            <div className="workOptions">
                <div className="commenter">
                    <img src="Ellipse.png" alt="" />
                    <img src="Ellipse 14.png" alt="" className="second"/>
                    <img src="Ellipse 15.png" alt="" className="third"/>
                </div>
                <div className="comment">
                    <img src="/Group 627.png" alt="" />
                    <div className="noOfComments">9 comments</div>
                </div>
                <div className="file">
                    <img src="/Group 628.png" alt="" />
                    <div className="noOfFiles">4 files</div>
                </div>
            </div>
        </div>
        <div className="work" draggable="true">
            <div className="workHead">
                <div className="progress high">High</div>
                <div className="menu">. . .</div>
            </div>
            <div className="aboutWork">
                <div className="workName">Development</div>
                <p>We have the best developement team.</p>
            </div>
            <div className="workOptions">
                <div className="commenter">
                    <img src="Ellipse 14.png" alt=""/>
                    <img src="Ellipse 15.png" alt="" className="second"/>
                </div>
                <div className="comment">
                    <img src="/Group 627.png" alt="" />
                    <div className="noOfComments">7 comments</div>
                </div>
                <div className="file">
                    <img src="/Group 628.png" alt="" />
                    <div className="noOfFiles">1 files</div>
                </div>
            </div>
        </div>
      </div>
      </div>
      <div className="kanbanList">
        <div className="kanbanHead orangeHead">
          <div className="kanbandot orangedot"></div>
          <div className="kanbanHeading">On Progress</div>
          <div className="kanbanNumber">3</div>
        </div>
        <div className="workContainer">
        <div className="work" draggable="true">
            <div className="workHead">
                <div className="progress low">Low</div>
                <div className="menu">. . .</div>
            </div>
            <div className="aboutWork">
                <div className="workName">Onboarding Illustrations </div>
               <img src="/unsplash_MicqqGyDQ6w.png" alt="" />
            </div>
            <div className="workOptions">
                <div className="commenter">
                <img src="Ellipse 15.png" alt="" />
                    <img src="Ellipse 14.png" alt="" className="second"/>
                    <img src="Ellipse.png" alt="" className="third"/>
                </div>
                <div className="comment">
                    <img src="/Group 627.png" alt="" />
                    <div className="noOfComments">14 comments</div>
                </div>
                <div className="file">
                    <img src="/Group 628.png" alt="" />
                    <div className="noOfFiles">15 files</div>
                </div>
            </div>
        </div>
        <div className="work" draggable="true">
            <div className="workHead">
                <div className="progress low">Low</div>
                <div className="menu">. . .</div>
            </div>
            <div className="aboutWork">
                <div className="workName">Moodboard</div>
                <div className="workImg">
               <img src="/unsplash_BS_1XGRkIH4.png" alt="" />
               <img src="/unsplash_KIqJfzbII9w.png" alt="" />
                </div>
            </div>
            <div className="workOptions">
                <div className="commenter">
                <img src="Ellipse 15.png" alt="" />
                </div>
                <div className="comment">
                    <img src="/Group 627.png" alt="" />
                    <div className="noOfComments">9 comments</div>
                </div>
                <div className="file">
                    <img src="/Group 628.png" alt="" />
                    <div className="noOfFiles">10 files</div>
                </div>
            </div>
        </div>
        <div className="work" draggable="true">
            <div className="workHead">
                <div className="progress low">Low</div>
                <div className="menu">. . .</div>
            </div>
            <div className="aboutWork">
                <div className="workName">Website Redesign</div>
              <p>We redesign your old website.</p>
            </div>
            <div className="workOptions">
                <div className="commenter">
                <img src="Ellipse 15.png" alt="" />
                <img src="Ellipse 14.png" alt="" className="second"/>
                <img src="Ellipse 13.png" alt="" className="third"/>
                </div>
                <div className="comment">
                    <img src="/Group 627.png" alt="" />
                    <div className="noOfComments">19 comments</div>
                </div>
                <div className="file">
                    <img src="/Group 628.png" alt="" />
                    <div className="noOfFiles">13 files</div>
                </div>
            </div>
        </div>
      </div>
      </div>
      <div className="kanbanList">
        <div className="kanbanHead lightBlueHead">
          <div className="kanbandot lightBluedot"></div>
          <div className="kanbanHeading">Done</div>
          <div className="kanbanNumber">2</div>
        </div>
        <div className="workContainer">
        <div className="work" draggable="true">
            <div className="workHead">
                <div className="progress completed">Completed</div>
                <div className="menu">. . .</div>
            </div>
            <div className="aboutWork">
                <div className="workName">Mobile App Design</div>
               <img src="/Plant Care App (Dribbble shot) 1.png" alt="" />
            </div>
            <div className="workOptions">
                <div className="commenter">
                <img src="Ellipse 13.png" alt="" />
                    <img src="Ellipse 14.png" alt="" className="second"/>
                </div>
                <div className="comment">
                    <img src="/Group 627.png" alt="" />
                    <div className="noOfComments">12 comments</div>
                </div>
                <div className="file">
                    <img src="/Group 628.png" alt="" />
                    <div className="noOfFiles">15 files</div>
                </div>
            </div>
        </div>
        <div className="work" draggable="true">
            <div className="workHead">
                <div className="progress completed">Completed</div>
                <div className="menu">. . .</div>
            </div>
            <div className="aboutWork">
                <div className="workName">Design System</div>
                <p>It just needs to adapt the UI from what you did before </p>
            </div>
            <div className="workOptions">
                <div className="commenter">
                <img src="Ellipse.png" alt="" />
                    <img src="Ellipse 15.png" alt="" className="second"/>
                    <img src="Ellipse 14.png" alt="" className="third"/>
                </div>
                <div className="comment">
                    <img src="/Group 627.png" alt="" />
                    <div className="noOfComments">12 comments</div>
                </div>
                <div className="file">
                    <img src="/Group 628.png" alt="" />
                    <div className="noOfFiles">15 files</div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Kanban;
