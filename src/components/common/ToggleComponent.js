import React, { Component } from "react"
import { Div, Text, Image, Button } from "atomize"
import Sketch from "../../images/icons/Sketch.svg"
import Figma from "../../images/icons/Figma.svg"

const btnContainer = document.querySelector(".toggle-buttons")
const buttons = document.getElementsByClassName("btn-toggle")

const data = [
  {
    image: Sketch,
    text: "Sketch",
  },
  {
    image: Figma,
    text: "Figma",
  },
]
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     let current = document.getElementsByClassName("active")
//     current[0].className = current[0].className.replace(" active", "")
//     this.className += " active"
//   })
// }
export default class ToggleComponent extends Component {
  state = { active: "Sketch" }

  toggle = (e, button) => {
    this.props.toggleId(e.target.id)
    this.setState({ active: button })
  }

  // color = () => {
  //   for (var i = 0; i < buttons.length; i++) {
  //     buttons[i].addEventListener("click", function () {
  //       let current = document.getElementsByClassName("active")
  //       current[0].className = current[0].className.replace(" active", "")
  //       this.className += " active"
  //     })
  //   }
  // }

  render() {
    const { active } = this.state
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
        {data.map((button, id) => {
          return (
            <Button
              key={id}
              d="flex"
              p={{ l: ".625rem", r: ".8rem", y: ".375rem" }}
              cursor="pointer"
              id={button.text}
              h="2rem"
              onClick={e => this.toggle(e, button.text)}
              bg="white"
              textSize="caption"
              textWeight="bold"
              className={active === button.text ? "active" : "btn-toggle"}
              prefix={
                <Image
                  m={{ r: ".5rem" }}
                  src={button.image}
                  h="20px"
                  w="auto"
                />
              }
            >
              {button.text}
            </Button>
          )
        })}
      </Div>
    )
  }
}
