import React, { Component, FormEvent } from "react";
import Robot from "./Robot";
import "./stylesheets/style.css";
import "./stylesheets/robotSelectOptions.css";
import "./stylesheets/error.css"

interface RobotProps {
    getRobotFromForm: (robot: Robot) => void;
}

interface RobotState {
    name: string;
    type: any;
    color: string;
    phrase: string;
    options: string[];

    checked: boolean;

    labelNameTxt: string;
    labelNameClass: string;

    labelTypeTxt: string;
    labelTypeClass: string;

    labelPhraseTxt: string;
    labelPhraseClass: string;

}

class RobotForm extends Component<RobotProps, RobotState> {
    constructor(props: RobotProps) {
        super(props);
        this.state = {
            name: "", type: "", color: "", phrase: "", options: [], checked: true,
            labelNameTxt: "Name", labelNameClass: "",
            labelTypeTxt: "Type", labelTypeClass: "",
            labelPhraseTxt: "Phrase", labelPhraseClass: ""
        };
    };

    private onSubmit(event: FormEvent): void {
        event.preventDefault();
        const target: any = event.target;
        const { name, type, color, phrase, options, checked } = this.state;
        if (name === "" || type === "" || !checked && phrase === "") {
            if (name === "") {
                this.setState({ labelNameTxt: "Please write a name" });
                this.setState({ labelNameClass: "error" });
            } else {
                this.resetName();
            }
            if (type === "") {
                this.setState({ labelTypeTxt: "Please select type" });
                this.setState({ labelTypeClass: "error" });
            } else {
                this.resetType();
            }
            if (!checked && phrase === "") {
                this.setState({ labelPhraseTxt: "Please write a phrase" });
                this.setState({ labelPhraseClass: "error" });
            } else {
                this.resetPhrase();
            }
        return;
        };

        let jump: string;
        let talk: string;
        let blink: string;

        if (target.canJump.checked) {
            jump = "can jump";
            this.setState({ options: [...this.state.options, jump] });
        };
        if (target.canTalk.checked) {
            talk = "can talk";
            this.setState({ options: [...this.state.options, talk] });
        };
        if (target.canBlink.checked) {
            blink = "can blink";
            this.setState({ options: [...this.state.options, blink] });
        };

        const robot: Robot = new Robot(
            name,
            type,
            color,
            phrase,
            options
        );
        this.props.getRobotFromForm(robot);

        target.reset();
        this.resetName();
        this.resetType();
        this.resetPhrase();

        this.setState({ name: "" });
        this.setState({ type: "" });
        this.setState({ phrase: "" });
    }

    private resetName = () => {
        this.setState({ labelNameTxt: "Name" });
        this.setState({ labelNameClass: "" });
    };
    private resetType = () => {
        this.setState({ labelTypeTxt: "Type" });
        this.setState({ labelTypeClass: "" });
    };
    private resetPhrase = () => {
        this.setState({ labelPhraseTxt: "Phrase" });
        this.setState({ labelPhraseClass: "" });
    }

    render() {
        const {
            checked, name, type, phrase, labelNameTxt, labelNameClass,
            labelTypeTxt, labelTypeClass, labelPhraseTxt, labelPhraseClass
        } = this.state;
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
                                    <label className={ labelNameClass } htmlFor="robotName">{ labelNameTxt }</label>
                                    <input type="text" name="robotName" id="robot_name" placeholder="Robot name" value={name} onChange={(e) => this.setState({name: e.target.value})}/>
                                </div>
                                <div className="formOptions">
                                    <label className={labelTypeClass} htmlFor="selectType">{ labelTypeTxt }</label>
                                    <select defaultValue="M/F" name="selectType" id="selectType" onChange={e => this.setState({type: e.target.value})}>
                                        <option disabled selected hidden>M/F</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="formOptions">
                                    <span className="error errorColor"></span>
                                    <label htmlFor="selectColor">Select Color</label>
                                    <input type="color" name="selectColor" id="selectColor" onChange={e => this.setState({ color: e.target.value })}/>
                                </div>
                                <div className="formOptions">
                                    <label>Select Options</label>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="canJump"
                                            name="canJump"
                                            value={"can jump"}
                                        />
                                        <label htmlFor="canJump">can jump</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            name="canTalk" id="canTalk"
                                            value={"can talk"}
                                            onChange={() => {
                                                checked ? this.setState({ checked: false }) : this.setState({ checked: true });
                                                this.setState({ phrase: "" });
                                            }}
                                        />
                                        <label htmlFor="canTalk">can talk</label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            name="canBlink"
                                            id="canBlink"
                                            value={"can blink"}
                                        />
                                        <label htmlFor="canBlink">can blink</label>
                                    </div>
                                </div>
                                <div className="formOptions">
                                    <label className={ labelPhraseClass } htmlFor="phrase">{ labelPhraseTxt }</label>
                                    <input
                                        placeholder="Phrase"
                                        type="text"
                                        name="phrase"
                                        id="phrase"
                                        value={phrase}
                                        disabled={checked}
                                        onChange={(e) => {
                                            this.setState({ phrase: e.target.value });
                                        }}
                                    />
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