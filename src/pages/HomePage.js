import React, { Component } from "react"
import HomeHero from "../components/home/HomeHero"
import { Div } from "atomize"
import ToggleComponent from "../components/common/ToggleComponent"
import HomeAccelerate from "../components/home/HomeAccelerate"
import HomeInside from "../components/home/HomeInside"
import HomeDemo from "../components/home/HomeDemo"

const toggleData = {
  Sketch: {
    image: "./images/icons/Sketch.svg",
    text: "Sketch",
  },
  Figma: {
    image: "./images/icons/Figma.svg",
    text: "Figma",
  },
}

export default class HomePage extends Component {
  state = { activeToggle: "" }

  componentDidMount() {
    this.setState({ activeToggle: "Sketch" })
  }

  toggle = id => {
    this.setState({ activeToggle: id })
  }

  render() {
    return (
      <Div>
        <ToggleComponent
          toggleId={this.toggle}
          data={toggleData}
          activeToggle={this.state.activeToggle}
        />
        <Div m={{ t: "2rem" }}>
          <HomeHero activeToggle={this.state.activeToggle} />
        </Div>
        <Div m={{ t: { xs: "5.5rem", md: "10.5rem" } }}>
          <HomeAccelerate />
        </Div>
        <Div m={{ t: { xs: "4.5rem", md: "10.5rem" } }}>
          <HomeInside />
        </Div>
        <Div m={{ t: { xs: "4rem", md: "9.75rem" }, b: "5.5rem" }}>
          <HomeDemo />
        </Div>
      </Div>
    )
  }
}
