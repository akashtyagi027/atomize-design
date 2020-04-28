import React, { Component } from "react"
import { Div, Text, Image, Button } from "atomize"
import Sketch from "../../images/icons/Sketch.svg"
import Figma from "../../images/icons/Figma.svg"

const btnContainer = document.querySelector(".toggle-buttons")
const buttons = document.getElementsByClassName("btn-toggle")

// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     let current = document.getElementsByClassName("active")
//     current[0].className = current[0].className.replace(" active", "")
//     this.className += " active"
//   })
// }
export default class ToggleComponent extends Component {
  toggle = e => {
    this.props.toggleId(e.target.id)
  }

  color = () => {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active")
        current[0].className = current[0].className.replace(" active", "")
        this.className += " active"
      })
    }
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
        className="toggle-buttons"
      >
        <Button
          d="flex"
          p={{ l: ".625rem", r: ".8rem", y: ".375rem" }}
          cursor="pointer"
          id="sketch"
          onClick={this.toggle}
          onMouseDown={this.color}
          onTouchStart={this.color}
          bg="white"
          textSize="caption"
          textWeight="bold"
          className="btn-toggle active"
          prefix={<Image m={{ r: ".5rem" }} src={Sketch} h="20px" w="auto" />}
        >
          Sketch
        </Button>
        <Button
          d="flex"
          p={{ l: ".9rem", r: "1rem", y: ".375rem" }}
          cursor="pointer"
          id="figma"
          onClick={this.toggle}
          onMouseDown={this.color}
          onTouchStart={this.color}
          textSize="caption"
          textWeight="bold"
          className="btn-toggle"
          prefix={<Image m={{ r: ".5rem" }} src={Figma} h="20px" w="auto" />}
        >
          Figma
        </Button>
      </Div>
    )
  }
}
