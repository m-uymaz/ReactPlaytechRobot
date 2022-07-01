import React, { FunctionComponent } from "react";
import Robot from "./Robot";
import './stylesheets/robot.css';

interface RobotSectionProps {
    robot: Robot;
}

const RobotSection: FunctionComponent<RobotSectionProps> = ({ robot }) => {
    return (
        <div id="robotContainer">
            <div className={robot.options.includes("can jump") ? "robotFriend wholeRobotJump" : "robotFriend" }>
                <div id="head"><div id="eyes">
                    <div className="eye">
                    </div>
                    <div className={ robot.options.includes("can blink") ? "eye blink" : "eye"} />
                </div>
                    <div className={ robot.options.includes("can talk") ? "mouth talk" : "mouth" } />
                </div>
                <div id="body">
                    <div className={robot.type === "male" ? "hand leftHand leftHand-male" : "hand leftHand leftHand-female"} />
                    <div
                        className={robot.type === "male" ? "torso-male" : "torso-female"}
                        style={robot.type === "male" ? { borderTop: `100px solid ${robot.color}` } : { borderBottom: `100px solid ${robot.color}` }}
                    />
                    <div className={robot.type === "male" ? "hand rightHand rightHand-male" : "hand rightHand rightHand-female"}>
                    </div><div className={ robot.options.includes("can jump") ? "leg leftLeg legsJump" : "leg leftLeg" }>
                    </div><div className={robot.options.includes("can jump") ? "leg rightLeg legsJump" : "leg rightLeg" }>
                    </div>
                </div>
            </div>
            <div className="robotNameContainer">{robot.name}</div>
            {
                robot.phrase != '' ?
                    <div className="bubble bubble-bottom-left">
                        <span className="spanBubble">{ robot.phrase }</span>
                    </div>
                    :
                    <></>
            }
        </div>
    );
};

export default RobotSection;