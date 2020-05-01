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
    const { plan } = this.state
    return (
      <WebsiteContainer>
        <CustomContainer p={{ x: { xs: ".75rem", md: "7rem" } }}>
          <Div
            className="home-demo"
            p={{ t: { xs: "4rem", md: "3.125rem" } }}
            border={{ t: "1px solid" }}
            borderColor="lightGray"
          >
            <Text
              textAlign="center"
              textSize={{ xs: "subheader1", md: "subheader2" }}
              textWeight="bold"
              opacity=".56"
              maxW="43rem"
              m="auto"
            >
              Trusted by 5000+ designers from companies like Blurb,
              Thoughtworks, Latch and more
            </Text>
            <Div
              m={{ t: { xs: "3rem", md: "4.5rem" } }}
              bg="gradient"
              p={{
                t: { xs: "3rem", md: "4.5rem" },
                b: { xs: "1.75rem", md: "1.25rem" },
                // x: { xs: "1.75rem", md: "5rem" },
              }}
              rounded="32px"
              shadow="1"
            >
              <Div
                p={{ x: { xs: "1.75rem", md: "5rem" } }}
                d="flex"
                justify="space-between"
                flexDir={{ xs: "column", md: "row" }}
              >
                <Div
                  d="flex"
                  flexDir="column"
                  textColor="white"
                  flexGrow="1 1 50%"
                  m={{ r: { xs: "0", md: "7.5rem" } }}
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
                        className={plan === "individual" ? "active" : ""}
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
                        className={plan === "team" ? "active" : ""}
                        cursor="pointer"
                      >
                        Team
                      </Text>
                    </Div>
                    <Div m={{ t: "1rem", b: { xs: "2.5rem", md: "2rem" } }}>
                      <Text
                        tag="span"
                        textSize="display4"
                        textWeight="bold"
                        style={{ lineHeight: "64px" }}
                      >
                        {plan === "individual" ? "$39" : "$59"}
                      </Text>
                      <Text
                        d={plan === "individual" ? "none" : "inline-block"}
                        tag="span"
                        m={{ l: ".625rem" }}
                        //transform="translateX(-50%)"
                        opacity=".4"
                        textSize="paragraph"
                        textWeight="bold"
                      >
                        Onwards
                      </Text>
                    </Div>

                    <Div
                      d="flex"
                      flexDir={{ xs: "column-reverse", md: "row" }}
                      m={{ b: "1rem" }}
                    >
                      <Button
                        p={{ y: "10px" }}
                        minW={{ xs: "100%", md: "14.5rem" }}
                        bg="violet100"
                        rounded="12px"
                        textSize="paragraph"
                        textWeight="bold"
                        m={{
                          r: { xs: "0", md: "1rem" },
                          t: { xs: "1rem", md: "0" },
                        }}
                        h="auto"
                      >
                        Purchase Now
                      </Button>
                      <Button
                        p={{ y: "10px" }}
                        minW={{ xs: "100%", md: "11rem" }}
                        bg="dark"
                        textSize="paragraph"
                        textWeight="bold"
                        rounded="12px"
                        h="auto"
                      >
                        Try FREE Demo
                      </Button>
                    </Div>
                    <Text
                      textWeight="600"
                      textAlign={{ xs: "center", md: "left" }}
                      textSize="caption"
                      textColor="medium"
                    >
                      🔒 Secured payment through Gumroad.
                    </Text>
                  </Div>
                </Div>

                <Div
                  flexGrow="1 1 50%"
                  m={{ t: { xs: "3.25rem", md: "0" }, x: { xs: "-1.75rem" } }}
                  p={{ t: { xs: "1.5rem", md: "0" }, x: { xs: "1.75rem" } }}
                  border={{ t: { xs: "1px solid", md: "none" } }}
                  borderColor="dark"
                >
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
                        m={{ b: { xs: ".75rem", md: ".5rem" } }}
                        align="start"
                        className="demo-points"
                      >
                        <Image
                          src={point.image}
                          className="check"
                          h="1.5rem"
                          w="auto"
                          m={{
                            r: { xs: "1.125rem", md: "1.625rem" },
                            t: { xs: "3px", md: "5px" },
                          }}
                        />
                        <Text
                          textColor="white"
                          textSize={{ xs: "paragraph", md: "paragraph2" }}
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
                m={{
                  t: { xs: "2.25rem", md: "4rem" },
                  //x: { xs: "-1.75rem", md: "-5rem" },
                }}
                border={{ t: "1px solid" }}
                borderColor="rgba(255,255,255, .16)"
              >
                <Text
                  textColor="white"
                  textWeight="600"
                  textSize="caption"
                  opacity=".4"
                  maxW={{ xs: "296px", md: "100%" }}
                  m={{ xs: "auto", md: "0" }}
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
