import React, { Component } from "react"
import { Div, Text } from "atomize"
import CustomContainer from "../common/CustomContainer"
import WebsiteContainer from "../common/WebsiteContainer"

const cards = [
  {
    heading: "Style Guide",
    text: "2 Styleguide layout options.",
    image: "./images/guide.png",
  },
  {
    heading: "UI components",
    text: "Buttons, Avatars, Inputs, Lists and more.",
    image: "./images/components.png",
  },
  {
    heading: "Theme Setup",
    text: "Colors, Shadows and Type system.",
    image: "./images/theme.png",
  },
]

export default class HomeInside extends Component {
  render() {
    return (
      <WebsiteContainer>
        <CustomContainer>
          <Div>
            <Div
              d="flex"
              justify="space-between"
              flexDir={{ xs: "column", md: "row" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              <Text
                textSize={{ xs: "subheader2", md: "display2" }}
                textWeight="bold"
                m={{ b: "1.5rem" }}
              >
                What’s inside 👀
              </Text>
              <Text
                maxW="35rem"
                textSize={{ xs: "paragraph", md: "paragraph2" }}
                textWeight="bold"
                opacity=".56"
              >
                Starting your next design project? No need to start from
                scratch. A huge set of base elements and pre-designed components
                are already set up for you. Just get started!
              </Text>
            </Div>

            <Div
              d="flex"
              justify="space-between"
              flexDir={{ xs: "column", md: "row" }}
              m={{ t: { xs: "4.25rem", md: "6rem" } }}
            >
              {cards.map((card, id) => {
                return (
                  <Div
                    key={id}
                    bg="light"
                    rounded="24px"
                    flexGrow="1"
                    maxW="22rem"
                    m={{
                      x: { xs: "0", md: id % 2 && "1.5rem" },
                      y: { xs: id % 2 && "1.5rem", md: "0" },
                    }}
                    // minW="22rem"
                    shadow="1"
                    p={{
                      x: "2rem",
                      t: { xs: "2rem", md: "2.5rem" },
                      b: { xs: "3rem", md: "2.125rem" },
                    }}
                  >
                    <Text textSize="paragraph2" textWeight="bold">
                      {card.heading}
                    </Text>
                    <Text
                      textSize="caption2"
                      opacity=".4"
                      textWeight="bold"
                      m={{ t: ".5rem", b: { xs: "1.5rem", md: "2rem" } }}
                    >
                      {card.text}
                    </Text>
                    <Div
                      bgImg={card.image}
                      p={{ b: "67%" }}
                      //w="288px"
                      bgSize="contain"
                      bgRepeat="no-repeat"
                      bgPos="center"
                    ></Div>
                  </Div>
                )
              })}
            </Div>
          </Div>
        </CustomContainer>
      </WebsiteContainer>
    )
  }
}
