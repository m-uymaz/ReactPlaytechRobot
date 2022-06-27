import React, {Component} from 'react';
import Robot from './Robot';
import Header from './Header';
import RobotForm from './robotForm';
import MainSection from './MainSection';
import './stylesheets/robot.css'


interface Props {
  
};

interface State {
  robots: Robot[];
};

class RobotApp  extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { robots: [] };
  };

  private setRobot = (robot: Robot): void => {
    this.setState({ robots: [...this.state.robots, robot] })
  };

  render() {
    const { robots } = this.state;
    return (
      <div>
        <Header/>
        {
          robots.length > 0 && <MainSection robots={robots} />
        }
        <RobotForm getRobotFromForm={this.setRobot} />
      </div>
     );
  };
};

export default RobotApp;