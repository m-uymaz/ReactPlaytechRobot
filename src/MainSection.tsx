import React, { FunctionComponent } from 'react';
import Robot from './Robot';
import RobotSection from './RobotSection';
import MessageSection from './MessageSection';
import './stylesheets/style.css';

interface MainSectionProps {
    robots: Robot[];
};
 

const MainSection: FunctionComponent<MainSectionProps> = ({ robots }) => {
    
    let lastRobot = robots[robots.length - 1];

    return (
        <div className="ct carousel-container" style={{ border: "3px solid rgb(0, 108, 190)" }}>
            <section className="factory-section">
                {
                    robots.length ?
                            <div className="carousel" style={{ transform: "translateX(0px)" }}>  
                                <div className="content-wrapper" style={{ maxHeight: "438.5px" }}>
                                    <div className="robotAndNameSection">
                                        <div id="basicRobot">
                                            <h3>{lastRobot.type === "male" ? "Male Robot" : "Female Robot"}</h3>
                                        </div>
                                        <RobotSection robot={lastRobot} />
                                    </div>
                                    <MessageSection />
                                </div>   
                            </div>
                            : <></>
                }
            </section>
        </div>
    );
        
};
 
export default MainSection;