import React, { Component } from "react"
import { Div, Text, Button, Image } from "atomize"
import CustomContainer from "../common/CustomContainer"
import WebsiteContainer from "../common/WebsiteContainer"

const points = [
  {
    image: "./images/Success.svg",
    text: "FREE future updates",
  },
  {
    image: "./images/Success.svg",
    text: "Auto-updating Style Guide",
  },
  {
    image: "./images/Success.svg",
    text: "UI components",
  },
  {
    image: "./images/Success.svg",
    text: "Theme Setup and Type system",
  },
  {
    image: "./images/Success.svg",
    text: "Example screens (Coming soon)",
  },
]

export default class HomeDemo extends Component {
  state = { plan: "individual" }

  changePlan = e => {
    this.setState({ plan: e.target.id })
  }

  render() {
    return (
      <WebsiteContainer>
        <CustomContainer>
          <Div className="home-demo">
            <Text
              textAlign="center"
              textSize="subheader2"
              textWeight="bold"
              opacity=".56"
              maxW="43rem"
              m="auto"
            >
              Trusted by 5000+ designers from companies like Blurb,
              Thoughtworks, Latch and more
            </Text>
            <Div
              m={{ t: "4.5rem" }}
              bg="gradient"
              p={{ t: "4.5rem", b: "1.25rem", x: "5rem" }}
              rounded="32px"
            >
              <Div d="flex" justify="space-between">
                <Div
                  d="flex"
                  flexDir="column"
                  textColor="white"
                  flexGrow="1 1 50%"
                  m={{ r: "7.5rem" }}
                >
                  <Div textSize="caption2" textWeight="bold">
                    <Div
                      border={{ b: "1px solid" }}
                      borderColor="rgba(255,255,255, .16)"
                      p={{ b: ".5rem" }}
                      d="inline"
                      textColor="medium"
                    >
                      <Text
                        tag="span"
                        id="individual"
                        onClick={this.changePlan}
                        cursor="pointer"
                        onClick={this.changePlan}
                        className={
                          this.state.plan === "individual" ? "active" : ""
                        }
                      >
                        Individual
                      </Text>
                      <Text tag="span" p={{ x: "12px" }}>
                        /
                      </Text>
                      <Text
                        tag="span"
                        id="team"
                        onClick={this.changePlan}
                        className={this.state.plan === "team" ? "active" : ""}
                        cursor="pointer"
                      >
                        Team
                      </Text>
                    </Div>
                    <Div m={{ t: "1rem", b: "2rem" }}>
                      <Text
                        tag="span"
                        textSize="display4"
                        textWeight="bold"
                        style={{ lineHeight: "64px" }}
                      >
                        {this.state.plan === "individual" ? "$39" : "$59"}
                      </Text>
                      <Text
                        tag="span"
                        m={{ l: ".625rem" }}
                        transform="translateX(-50%)"
                        opacity=".4"
                        textSize="paragraph"
                        textWeight="bold"
                      >
                        Onwards
                      </Text>
                    </Div>

                    <Div d="flex" m={{ b: "1rem" }}>
                      <Button
                        p={{ x: "3.75rem" }}
                        bg="violet100"
                        rounded="12px"
                        textSize="paragraph"
                        textWeight="bold"
                        m={{ r: "1rem" }}
                        h="3rem"
                      >
                        Purchase Now
                      </Button>
                      <Button
                        p={{ x: "1.75rem" }}
                        bg="dark"
                        textSize="paragraph"
                        textWeight="bold"
                        rounded="12px"
                        h="3rem"
                      >
                        Try FREE Demo
                      </Button>
                    </Div>
                    <Text
                      textWeight="600"
                      textSize="caption"
                      textColor="medium"
                    >
                      🔒 Secured payment through Gumroad.
                    </Text>
                  </Div>
                </Div>

                <Div flexGrow="1 1 50%">
                  <Text
                    textColor="white"
                    textSize="caption2"
                    textWeight="bold"
                    opacity=".4"
                  >
                    Full version includes:
                  </Text>
                  <Div m={{ t: "1rem" }}>
                    {points.map((point, id) => (
                      <Div
                        key={id}
                        d="flex"
                        m={{ b: ".5rem" }}
                        align="center"
                        className="demo-points"
                      >
                        <Image
                          src={point.image}
                          className="check"
                          h="1.5rem"
                          w="auto"
                          m={{ r: "1.625rem" }}
                        />
                        <Text
                          textColor="white"
                          textSize="paragraph2"
                          opacity=".56"
                          textWeight="bold"
                        >
                          {point.text}
                        </Text>
                      </Div>
                    ))}
                  </Div>
                </Div>
              </Div>

              <Div
                textAlign="center"
                p={{ t: "1.5rem" }}
                m={{ t: "4rem", x: "-100%" }}
                border={{ t: "1px solid" }}
                borderColor="rgba(255,255,255, .16)"
              >
                <Text
                  textColor="white"
                  textWeight="600"
                  textSize="caption"
                  opacity=".4"
                >
                  50% OFF for Students. Please email contact@atomizedesign.com
                  with valid proof of your school/college enrollment
                </Text>
              </Div>
            </Div>
          </Div>
        </CustomContainer>
      </WebsiteContainer>
    )
  }
}
