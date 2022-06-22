import React, { Component, FormEvent } from "react";
import Robot from "./Robot";
import "./stylesheets/style.css";
import "./stylesheets/robotSelectOptions.css";

interface RobotProps {
    getRobotFromForm: (robot: Robot) => void;
}

interface RobotState {
    color: string;
}
 
class RobotForm extends Component<RobotProps, RobotState> {
    constructor(props: RobotProps) {
        super(props);
        this.state = {color: "" };
    };

    private onSubmit(event: FormEvent): void {
        event.preventDefault();
        const target: any = event.target;
        const options: string[] = [];
        let jump: string;
        let talk: string;
        let blink: string;

        if (target.canJump.checked) {
            jump = "can jump";
            options.push(jump);
        };
        if (target.canTalk.checked) {
            talk = "can talk";
            options.push(talk);
        };
        if (target.canBlink.checked) {
            blink = "can blink";
            options.push(blink);
        };

        const robot: Robot = new Robot(
            target.robot_name.value,
            target.selectType.value,
            this.state.color,
            target.phrase.value,
            options
        );
        console.log(robot);
        this.props.getRobotFromForm(robot);
        target.reset();
    }

    private setColor(stateColor: string): void {
        this.setState({ color: stateColor });
        console.log(stateColor);
    }

    // private onCheckboxChange(event: FormEvent): void {
    //     const target = event.target;
    // }

    render() { 
        return ( 
            <div className="container">
                <div className="ct">
                    <div className="carousel">
                    </div>
                </div>
                <div className="slide-buttons">
                    <button id="prev">Previous</button>
                    <button id="next">Next</button>
                </div>
                <section id="slide-2">
                    <div>
                        <h3 id="formH3">Create Robot</h3>
                        <form id="robot-form" onSubmit={(e: FormEvent<HTMLFormElement>) => this.onSubmit(e)}>
                            <div id="mainForm">
                                <div className="formOptions">
                                    <span className="error errorName"></span>
                                    <label htmlFor="robotName">Name</label>
                                    <input type="text" name="robotName" id="robot_name" placeholder="Robot name"/>
                                </div>
                                <div className="formOptions">
                                    <span className="error errorType"></span>
                                    <label htmlFor="selectType">Select type</label>
                                    <select name="selectType" id="selectType">
                                        <option value="default" disabled selected hidden>M/F</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="formOptions">
                                    <span className="error errorColor"></span>
                                    <label htmlFor="selectColor">Select Color</label>
                                    <input type="color" name="selectColor" id="selectColor" onChange={e => this.setColor(e.target.value)}/>
                                </div>
                                <div className="formOptions">
                                    <label>Select Options</label>
                                    <div>
                                        <input type="checkbox" id="canJump" name="canJump" defaultValue={"can jump"} />
                                        <label htmlFor="canJump">can jump</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="canTalk" id="canTalk" value={"can talk"} />
                                        {/* onchange="onCheckboxChange()" */}
                                        <label htmlFor="canTalk">can talk</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="canBlink" id="canBlink" value={"can blink"} />
                                        <label htmlFor="canBlink">can blink</label>
                                    </div>
                                </div>
                                <div className="formOptions">
                                    <span className="error errorPhrase"></span>
                                    <label htmlFor="phrase">Phrase</label>
                                    <input placeholder="Phrase" type="text" name="phrase" id="phrase"/>
                                </div>
                            </div>
                            <div id="form-btns">
                                <button type="submit" className="create">Create</button>
                                <button type="button" className="showCreatedRobots" value="false">Show Created Robots</button>
                                <button type="button" className="deleteRobots" disabled>No Robots To Delete</button>
                            </div>
                        </form>
                    </div>
                    <div id="after-form"></div>
                </section>
            </div>
         );
    };
};
 
export default RobotForm;