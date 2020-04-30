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
    image: Modular,
    heading: "Modular",
    text: "Combine symbols to create multiple UI components",
  },
  {
    image: Customizable,
    heading: "Customizable",
    text: "Shared styles and Symbols can be customized easily.",
  },
  {
    image: Scalable,
    heading: "Scalable",
    text: "Quickly scale your design while maintaining consistency",
  },
]

export default class HomeHero extends Component {
  render() {
    const { activeToggle } = this.props
    return (
      <WebsiteContainer>
        <CustomContainer>
          <Div textAlign="center">
            <Div>
              <Text
                textWeight="bold"
                textSize={{ xs: "subheader4", md: "display4" }}
                m={{ b: { xs: "1.5rem", md: ".5rem" } }}
              >
                {activeToggle === "Figma"
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
                m={{
                  t: { xs: "2.5rem", md: "3.5rem" },
                  b: { xs: "4.375rem", md: "5.75rem" },
                }}
                bgImg="./images/hero-image.png"
                p={{ b: "52%" }}
                bgSize="cover"
                bgPos="center"
              ></Div>

              <Div
                d="flex"
                justify="space-between"
                flexDir={{ xs: "column", md: "row" }}
                textAlign="left"
                p={{
                  y: { xs: "0", md: "2.5rem" },
                  l: { xs: "1rem", md: "2rem" },
                }}
                border={{ t: "1px solid", b: { xs: "none", md: "1px solid" } }}
                borderColor="#E1E4E8"
                m={{ x: { xs: "-.5rem", md: "-1rem" } }}
              >
                {heroPoints.map((data, id) => {
                  return (
                    <Div
                      d="flex"
                      key={id}
                      maxW={{ xs: "auto", md: "18rem" }}
                      align={{ xs: "start", md: "center" }}
                      p={{
                        t: { xs: "2rem", md: "0" },
                        b: { xs: "1.75rem", md: "0" },
                      }}
                      border={{
                        b: { xs: "1px solid", md: "none" },
                      }}
                      borderColor="#E1E4E8"
                    >
                      <Image
                        src={data.image}
                        h="1.5rem"
                        w="auto"
                        m={{ t: { xs: ".375rem", md: "0" } }}
                      />
                      <Div
                        m={{ l: "2rem" }}
                        textSize={{ xs: "caption3", md: "caption" }}
                      >
                        <Text tag="span" textWeight="bold" textColor="#000">
                          {data.heading} -{" "}
                        </Text>
                        <Text tag="span" opacity=".4" textWeight="bold">
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
