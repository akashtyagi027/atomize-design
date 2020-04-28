import React, { Component } from "react"
import { Div, Text, Image, Button } from "atomize"

const btnContainer = document.querySelector(".toggle-buttons")
const buttons = document.getElementsByClassName("btn")

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace(" active", "")
    this.className += " active"
  })
}
export default class ToggleComponent extends Component {
  toggle = e => {
    this.props.toggleId(e.target.id)
  }

  render() {
    return (
      <Div
        m={{ t: "9.5rem", x: "auto" }}
        d="flex"
        justify="center"
        maxW="12rem"
        textAlign="center"
        p="4px"
        bg="light"
        rounded="xl"
        maxH="40px"
        className="toggle-buttons"
      >
        <Button
          d="flex"
          p={{ x: "1rem", y: ".375rem" }}
          cursor="pointer"
          id="sketch"
          onClick={this.toggle}
          bg="white"
          h="2rem"
          textColor="#d3d3d3"
          textSize="caption"
          textWeight="bold"
          className="btn active"
          prefix={
            <Image
              m={{ r: ".5rem" }}
              src="../images/Sketch.svg"
              h="20px"
              w="auto"
            />
          }
        >
          Sketch
        </Button>
        <Button
          d="flex"
          p={{ x: "1rem", y: ".375rem" }}
          cursor="pointer"
          id="figma"
          h="2rem"
          onClick={this.toggle}
          textSize="caption"
          textWeight="bold"
          className="btn"
          prefix={
            <Image
              m={{ r: ".5rem" }}
              src="../images/Figms.svg"
              h="20px"
              w="auto"
            />
          }
        >
          Figma
        </Button>
      </Div>
    )
  }
}
