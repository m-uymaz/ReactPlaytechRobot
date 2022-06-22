class Robot {
    private _name: string;
    private _type: RobotType;
    private _color: string;
    private _phrase: string;
    private _options: string[];

    constructor(name: string, type: RobotType, color: string, phrase: string, options: string[]) {
        this._name = name;
        this._type = type;
        this._color = color;
        this._phrase = phrase;
        this._options = options
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    get color() {
        return this._color;
    }
    get phrase() {
        return this._phrase;
    }
    get options() {
        return this._options;
    }
    
    saveToLocalstorage(robotModels: Robot[]) {
        localStorage.setItem("robots", JSON.stringify(robotModels));
    };
};
 
export const enum RobotType {
    male = "male",
    female = "female"
};

export default Robot;