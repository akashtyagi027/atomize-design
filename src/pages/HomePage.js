import React, { Component } from "react"
import HomeHero from "../components/home/HomeHero"
import { Div, Text, Image } from "atomize"
import ToggleComponent from "../components/common/ToggleComponent"
import HomeAccelerate from "../components/home/HomeAccelerate"

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
        <Div m={{ t: "10.5rem", b: "10.5rem" }}>
          <HomeAccelerate />
        </Div>
      </Div>
    )
  }
}
