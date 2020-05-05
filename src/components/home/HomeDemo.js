import React, { Component } from "react"
import { Div, Text, Button, Image, Anchor } from "atomize"
import CustomContainer from "../common/CustomContainer"
import WebsiteContainer from "../common/WebsiteContainer"

export default class HomeDemo extends Component {
  state = { plan: "individual" }

  changePlan = e => {
    this.setState({ plan: e.target.id })
  }

  render() {
    const { plan } = this.state
    const { content, activeToggle } = this.props

    return (
      <WebsiteContainer>
        <CustomContainer p={{ x: { xs: ".75rem", md: "1.5rem", xl: "7rem" } }}>
          <Div
            className="home-demo"
            p={{ t: { xs: "4rem", md: "3.125rem" } }}
            border={{ t: "1px solid" }}
            borderColor="lightGray"
            id="home-demo"
          >
            <Text
              textAlign="center"
              textSize={{ xs: "subheader1", xl: "subheader2" }}
              textWeight="bold"
              opacity=".56"
              maxW="43rem"
              m="auto"
            >
              {content.heading}
            </Text>
            <Div
              m={{ t: { xs: "3rem", md: "5.5rem", xl: "4.5rem" } }}
              bg="gradient"
              p={{
                t: { xs: "3rem", md: "3.5rem", xl: "4.5rem" },
                b: { xs: "1.75rem", md: "1.25rem" },
                // x: { xs: "1.75rem", md: "5rem" },
              }}
              rounded="32px"
              shadow="1"
              pos="relative"
            >
              <Image
                src={content.logo}
                h="40px"
                w="auto"
                pos="absolute"
                right={{ xs: "24px", md: "40px" }}
                top="40px"
              />
              <Div
                p={{ x: { xs: "1.75rem", md: "4rem", xl: "5rem" } }}
                d="flex"
                justify="space-between"
                flexDir={{ xs: "column", xl: "row" }}
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
                        textColor={plan === "individual" && content.color}
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
                        textColor={plan === "team" && content.color}
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
                      <Anchor href={content.purchaseLink} target="_blank">
                        <Button
                          p={{ y: "10px" }}
                          minW={{ xs: "100%", md: "14.5rem" }}
                          bg={content.color}
                          rounded="12px"
                          textSize="paragraph"
                          textColor={content.textColor}
                          textWeight="bold"
                          m={{
                            r: { xs: "0", md: "1rem" },
                            t: { xs: "1rem", md: "0" },
                          }}
                          h="auto"
                        >
                          Purchase Now
                        </Button>
                      </Anchor>
                      <Anchor href={content.demoLink} target="_blank">
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
                      </Anchor>
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
                  m={{
                    t: { xs: "3.25rem", md: "1.75rem", xl: "0" },
                    x: { xs: "-1.75rem", md: "-4rem", xl: "0" },
                  }}
                  p={{
                    t: { xs: "1.5rem", md: "2.5rem", xl: "0" },
                    x: { xs: "1.75rem", md: "4rem", xl: "0" },
                  }}
                  border={{ t: { xs: "1px solid", xl: "none" } }}
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
                    {content.points.map((point, id) => (
                      <Div
                        key={id}
                        d="flex"
                        m={{ b: { xs: ".75rem", md: ".5rem" } }}
                        align="start"
                        className="demo-points"
                      >
                        <Image
                          src={point.image}
                          className={activeToggle === "Figma" && "check"}
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
                  t: { xs: "2.25rem", md: "1.5rem", xl: "4rem" },
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
