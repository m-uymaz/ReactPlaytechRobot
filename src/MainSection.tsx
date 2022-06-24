import React, { Component } from 'react';
import Robot from './Robot';
import RobotSection from './RobotSection';
import MessageSection from './MessageSection';
import './stylesheets/style.css';

interface MainSectionProps {
    robots: Robot[];
};
 
interface MainSectionState {
    
};

class MainSection extends Component<MainSectionProps, MainSectionState> {

    render() {
        const { robots } = this.props;
        return (
            robots.length ?
                robots.map((robot: Robot, index: number) =>
                    <div className="ct carousel-container" style={{ border: "3px solid rgb(0, 108, 190)" }}>
                        <div className="carousel" style={{ transform: "translateX(0px)" }}>
                            <section className="factory-section">
                                <div className="content-wrapper" style={{ maxHeight: "438.5px" }}>
                                    <div className="robotAndNameSection">
                                        <div id="basicRobot">
                                            <h3>{robot.type === "male" ? "Male Robot" : "Female Robot"}</h3>
                                        </div>
                                        <RobotSection robot={ robot } index={ index } />
                                    </div>
                                    <MessageSection />
                                </div>
                            </section>
                        </div>
                    </div>
                )
                :
                <></>
         );
    };
};
 
export default MainSection;