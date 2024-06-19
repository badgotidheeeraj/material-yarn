import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToolbarComponent from "./Component/Toolbar/Toolbar";
import DrawerComponent from "./Component/Drawer/Drawer";

import Ant from './Component/Ant';
import Sing from './Component/Sing';

class App extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = () => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }

    this.setState({ left: false });
  };

  openDrawer = () => {
    this.setState({
      left: true
    });
  };

  render() {
    return (
      <>
        <DrawerComponent
          left={this.state.left}
          toggleDrawerHandler={this.toggleDrawer}
        />
        <Router>
          <Routes>
            <Route path="/" element={<Ant />} />
            <Route path="/Sing-up" element={<Sing />} />
            <Route path="/Nav" element={<ToolbarComponent openDrawerHandler={this.openDrawer} />} />
          </Routes>
        </Router>
      </>
    );
  }
}
export default App;
