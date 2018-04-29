import React, { Component } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import TabMenu from "./Components/TabMenu/TabMenu";
import Tab from "./Components/Tab/Tab";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header leftIcon="menu" rightIcon="search" title="Open day" />
        <TabMenu>
          <Tab title="Events" isSelected>
            <img src="http://via.placeholder.com/350x150" />
          </Tab>
          <Tab title="Vacancies">
            <div> Tab 2 </div>
          </Tab>
        </TabMenu>
      </div>
    );
  }
}

export default App;
