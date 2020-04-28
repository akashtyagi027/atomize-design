import React, { Component } from "react"
import { Div, Text } from "atomize"
import WebsiteContainer from "../common/WebsiteContainer"
import CustomContainer from "../common/CustomContainer"

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
                  ? "Design for figma"
                  : "Design interfaces at Scale"}
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
            </Div>
          </Div>
        </CustomContainer>
      </WebsiteContainer>
    )
  }
}
