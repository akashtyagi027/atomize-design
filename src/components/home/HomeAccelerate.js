import React, { Component } from "react"
import { Div, Text, Row, Col, Button, Anchor, Image } from "atomize"
import WebsiteContainer from "../common/WebsiteContainer"

export default class HomeAccelerate extends Component {
  render() {
    const { content } = this.props
    return (
      <WebsiteContainer p={{ x: { xs: ".75rem", md: "1.5rem", xl: "0" } }}>
        <Div
          rounded="32px"
          bg="white"
          p={{
            x: { xs: "1rem", md: "2.5rem", xl: "7rem" },
            y: { xs: "4rem", md: "3.5rem", xl: "5.5rem" },
          }}
          shadow="1"
          className="home-accelerate"
        >
          <Row>
            <Col size={{ xs: "12", md: "6" }} style={{ margin: "auto" }}>
              <Div>
                <Div
                  textSize={{ xs: "subheader2", xl: "display2" }}
                  textWeight="bold"
                  textAlign={{ xs: "center", md: "left" }}
                  maxW={{ md: "20rem", xl: "100%" }}
                >
                  <Text tag="span">{content.heading}</Text>{" "}
                  <Text tag="span" opacity=".4">
                    {content.text}
                  </Text>
                </Div>
                <Anchor href={content.previewLink} target="_blank">
                  <Button
                    m={{
                      t: { xs: "2rem", md: "3.5rem" },
                      x: { xs: "auto", md: "0" },
                    }}
                    rounded="12px"
                    p={{ y: ".875rem", x: "1.75rem" }}
                    h="3.5rem"
                    textColor={content.buttonColor}
                    bg="white"
                    border="1px solid"
                    borderColor={content.borderColor}
                    textSize="paragraph"
                    textWeight="bold"
                    hoverBg="#fafbfb"
                    shadow="1"
                  >
                    See full preview
                    <Image
                      src="./images/arrow.svg"
                      m={{ l: "5px" }}
                      h="10px"
                      w="8px"
                      className={content.className}
                    />
                  </Button>
                </Anchor>
              </Div>
            </Col>
            <Col size={{ xs: "0", md: "1" }}></Col>
            <Col
              size={{ xs: "12", md: "5" }}
              // p={{
              //   l: { xs: "0", md: "5rem", xl: "8rem" },
              //   b: { xs: ".5rem" },
              // }}
            >
              <Div
                bgImg="./images/Ellipse.png"
                p={{ b: "100%" }}
                m={{ t: { xs: "4.5rem", md: "0" } }}
                bgSize="cover"
                bgPos="center"
                pos="relative"
              >
                {/* <Div
                  pos="absolute"
                  bgImg={content.frameImage}
                  p={{ b: "60%" }}
                  w="80%"
                  top={{ xs: "35%", md: "10%", xl: "25%" }}
                  left="4%"
                  bgSize="contain"
                  bgRepeat="no-repeat"
                  bgPos="center"
                  className="luxy-el"
                  data-speed-y="-7"
                  data-offset="120"
                ></Div> */}
                <Image
                  pos="absolute"
                  src={content.frameImage}
                  //h="60%"
                  w="80%"
                  top={{ xs: "35%", md: "10%", xl: "25%" }}
                  left="4%"
                  // bgSize="contain"
                  // bgRepeat="no-repeat"
                  //bgPos="center"
                  className="luxy-el"
                  data-speed-y="-7"
                  data-offset="120"
                />
                <Div
                  pos="absolute"
                  bgImg={content.chatBubble}
                  p={{ b: "30%" }}
                  w="46%"
                  bottom={{ xs: "-5%", md: "24%", xl: "5%" }}
                  zIndex="1"
                  right="-2%"
                  bgSize="contain"
                  bgRepeat="no-repeat"
                  bgPos="center"
                  className="luxy-el"
                  data-speed-y="-8"
                  data-offset="130"
                ></Div>
                <Div
                  pos="absolute"
                  bgImg={content.toggleImage}
                  p={{ b: "10%" }}
                  w="10%"
                  top={{ xs: "42%", md: "11%", xl: "39%" }}
                  zIndex="1"
                  right="6%"
                  bgSize="contain"
                  bgRepeat="no-repeat"
                  bgPos="center"
                  className="luxy-el"
                  data-speed-y="-10"
                  data-offset="250"
                ></Div>
                <Div
                  pos="absolute"
                  bgImg={content.input}
                  p={{ b: "13%" }}
                  zIndex="1"
                  w="77%"
                  bottom={{ xs: "-1%", md: "20%", xl: "5%" }}
                  left="7%"
                  bgSize="contain"
                  bgRepeat="no-repeat"
                  bgPos="center"
                  className="luxy-el"
                  data-speed-y="-6"
                  data-offset="120"
                ></Div>
              </Div>
            </Col>
          </Row>
        </Div>
      </WebsiteContainer>
    )
  }
}
