import React, { Component } from "react";

import "./TabMenu.css";

class tabMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  handleClick(index) {
    return () => {
      this.setState(state => {return {...state, selected: index}})
    }
  }

  render() {
    return (
    <div class="Tabs">
      <nav className="TabMenu default-primary-color">
        {this.props.children.map((child, index) => {
          return <button onClick={this.handleClick(index)}>{child.props.title}</button>;
        })}
      </nav>
      <div className="TabMenuHighlight">
        {this.props.children.map((child, index) => (
          <div
            className={this.state.selected === index ? "accent-color" : ""}
            style={{}}
          />
        ))}
      </div>
      {this.props.children[this.state.selected]}
      </div>);
  }
}

export default tabMenu;
