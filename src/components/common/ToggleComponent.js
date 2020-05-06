import React, { Component } from "react"
import { Div, Text, Image, Button } from "atomize"

export default class ToggleComponent extends Component {
  //state = { active: "Sketch" }

  toggle = e => {
    this.props.toggleId(e.target.id)
    // this.setState({ active: button })
  }

  render() {
    const { data, activeToggle } = this.props
    return (
      <Div
        m={{ t: { xs: "8.125rem", md: "9.5rem" }, x: "auto" }}
        d="flex"
        justify="space-between"
        maxW="12rem"
        textAlign="center"
        p="4px"
        bg="light"
        rounded="xl"
        className="toggle-buttons"
      >
        {Object.keys(data).map((info, id) => {
          return (
            <Div key={id}>
              <Button
                onClick={this.toggle}
                d="flex"
                p={{ l: "11px", r: id % 2 ? "15px" : "13px", y: ".375rem" }}
                cursor="pointer"
                m="0"
                id={data[info].text}
                h="2rem"
                bg="white"
                textSize="caption"
                textWeight="bold"
                rounded="8px"
                className={
                  activeToggle === data[info].text ? "active" : "btn-toggle"
                }
                prefix={
                  <Image
                    m={{ r: ".5rem" }}
                    id={data[info].text}
                    src={data[info].image}
                    h="20px"
                    w="auto"
                  />
                }
              >
                {data[info].text}
              </Button>
            </Div>
          )
        })}
        {/* {info.map((button, id) => {
          return (
            // <Button
            //   key={id}
            //   d="flex"
            //   p={{ l: ".625rem", r: ".8rem", y: ".375rem" }}
            //   cursor="pointer"
            //   id={button.text}
            //   h="2rem"
            //   onClick={e => this.toggle(e, button.text)}
            //   bg="white"
            //   textSize="caption"
            //   textWeight="bold"
            //   className={active === button.text ? "active" : "btn-toggle"}
            //   prefix={
            //     <Image
            //       m={{ r: ".5rem" }}
            //       src={button.image}
            //       h="20px"
            //       w="auto"
            //     />
            //   }
            // >
            //   {button.text}
            // </Button>
          )
        })} */}
      </Div>
    )
  }
}
