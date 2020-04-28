import React, { Component } from "react"
import { Div, Text, Image } from "atomize"
import WebsiteContainer from "../common/WebsiteContainer"
import CustomContainer from "../common/CustomContainer"

import heroImage from "../../images/homeHero.png"
import Modular from "../../images/icons/Modular.svg"
import Customizable from "../../images/icons/Customizable.svg"
import Scalable from "../../images/icons/Scalable.svg"

const heroPoints = [
  {
    image: { Modular },
    heading: "Modular",
    text: "Combine symbols to create multiple UI components",
  },
  {
    image: { Customizable },
    heading: "Customizable",
    text: "Shared styles and Symbols can be customized easily.",
  },
  {
    image: { Scalable },
    heading: "Scalable",
    text: "Quickly scale your design while maintaining consistency",
  },
]

export default class HomeHero extends Component {
  render() {
    const { activeToggle } = this.props
    console.log(activeToggle)
    return (
      <WebsiteContainer>
        <CustomContainer>
          <Div textAlign="center">
            <Div>
              <Text textWeight="bold" textSize="display4" m={{ b: ".5rem" }}>
                {activeToggle === "figma"
                  ? "Design interfaces at Scale"
                  : "Design for Sketch"}
              </Text>
              <Text
                textSize="paragraph"
                textWeight="600"
                opacity=".56"
                maxW="39rem"
                m="auto"
              >
                Atomize Design System is the most advanced UI design framework
                that helps designers create beautiful and consistent user
                interfaces for the web.
              </Text>
              <Div
                m={{ t: "3.5rem", b: "5.75rem" }}
                bgImg={heroImage}
                p={{ b: "52%" }}
                bgSize="cover"
                bgPos="center"
              ></Div>

              <Div
                d="flex"
                justify="space-between"
                textAlign="left"
                p={{ y: "2.5rem", x: "2rem" }}
                border={{ t: "1px solid", b: "1px solid" }}
                borderColor="#E1E4E8"
                m={{ b: "10rem", x: "-1rem" }}
              >
                {heroPoints.map((data, id) => {
                  return (
                    <Div d="flex" key={id} maxW="18rem">
                      <Image src={data.image} h="1.5rem" w="auto" />
                      <Div m={{ l: "2rem" }}>
                        <Text
                          tag="span"
                          textSize="caption"
                          textWeight="bold"
                          textColor="#000"
                        >
                          {data.heading} -{" "}
                        </Text>
                        <Text
                          tag="span"
                          opacity=".4"
                          textSize="caption"
                          textWeight="bold"
                        >
                          {data.text}
                        </Text>
                      </Div>
                    </Div>
                  )
                })}
              </Div>
            </Div>
          </Div>
        </CustomContainer>
      </WebsiteContainer>
    )
  }
}
