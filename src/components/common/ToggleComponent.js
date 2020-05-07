import React, { Component } from "react"
import { Div, Text, Image, Button } from "atomize"

export default class ToggleComponent extends Component {
  //state = { active: "Sketch" }

  toggle = name => {
    this.props.toggleId(name)
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
            <Div key={id} onClick={() => this.toggle(data[info].text)}>
              <Button
                // onClick={() => this.toggle(data[info].tex)}
                d="flex"
                p={{ l: "11px", r: id % 2 ? "15px" : "13px", y: ".375rem" }}
                cursor="pointer"
                m="0"
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
      </Div>
    )
  }
}
