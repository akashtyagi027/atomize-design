import React, { Component } from "react"
import HomeHero from "../components/home/HomeHero"
import { Div, Text, Image } from "atomize"
import ToggleComponent from "../components/common/ToggleComponent"
import HomeAccelerate from "../components/home/HomeAccelerate"
import HomeInside from "../components/home/HomeInside"
import HomeDemo from "../components/home/HomeDemo"

export default class HomePage extends Component {
  state = { toggle: "" }

  toggle = id => {
    console.log(id)
    this.setState({ toggle: id })
  }

  render() {
    return (
      <Div>
        <ToggleComponent toggleId={this.toggle} />
        <Div m={{ t: "2rem" }}>
          <HomeHero activeToggle={this.state.toggle} />
        </Div>
        <Div m={{ t: "10.5rem" }}>
          <HomeAccelerate />
        </Div>
        <Div m={{ t: "10.5rem", b: "10.5rem" }}>
          <HomeInside />
        </Div>
        <Div m={{ t: "10.5rem", b: "10.5rem" }}>
          <HomeDemo />
        </Div>
      </Div>
    )
  }
}
