import React, { Component } from "react"
import HomeHero from "../components/home/HomeHero"
import { Div, Text, Image } from "atomize"
import ToggleComponent from "../components/common/ToggleComponent"

export default class HomePage extends Component {
  state = { toggle: "" }

  toggle = id => {
    this.setState({ toggle: id })
  }

  render() {
    return (
      <Div>
        <ToggleComponent toggleId={this.toggle} />
        <Div m={{ t: "2rem" }}>
          <HomeHero activeToggle={this.state.toggle} />
        </Div>
      </Div>
    )
  }
}
