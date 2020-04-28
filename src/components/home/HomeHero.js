import React, { Component } from "react"
import { Div, Text } from "atomize"
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

              <Div>
                <Div></Div>
              </Div>
            </Div>
          </Div>
        </CustomContainer>
      </WebsiteContainer>
    )
  }
}
