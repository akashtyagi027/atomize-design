import React, { Component } from "react"
import { Div, Text, Row, Col, Image } from "atomize"

import CustomContainer from "./CustomContainer"
import WebsiteContainer from "../common/WebsiteContainer"

const footerLinks = [
  {
    heading: "Product",
    text1: "Need support?",
    text2: "Request discount",
  },
  {
    heading: "Atomize React",
    text1: "Github ↗️ ",
    text2: "Documentation ↗️ ",
  },
  {
    heading: "Follow us",
    icon1: "./images/Twitter.svg",
    icon2: "./images/Fb.svg",
  },
]

export default class Footer extends Component {
  render() {
    return (
      <WebsiteContainer>
        <CustomContainer>
          <Div>
            <Div border={{ y: "1px solid" }} borderColor="#E1E4E8">
              <Row>
                <Col
                  p={{ t: "3.6rem", b: "3.125rem" }}
                  border={{ r: "1px solid" }}
                  borderColor="#E1E4E8"
                >
                  <Div d="flex" justify="space-between">
                    <Image src="./images/footer-logo.svg" h="20px" w="auto" />
                    <Text
                      maxW="20rem"
                      textSize="paragraph"
                      textWeight="600"
                      opacity=".8"
                      m={{ r: "3rem" }}
                    >
                      Atomize Design System aims to help designers become better
                      and more productive at design.
                    </Text>
                  </Div>
                </Col>
                <Col p={{ t: "3.6rem", b: "3.125rem" }}>
                  <Div d="flex" justify="space-between" p={{ l: "4.5rem" }}>
                    {footerLinks.map((links, id) => (
                      <Div key={id}>
                        <Text
                          textSize="caption2"
                          textWeight="bold"
                          m={{ b: "1.125rem" }}
                        >
                          {links.heading}
                        </Text>
                        <Text
                          m={{ b: ".625rem" }}
                          textSize="caption2"
                          textWeight="600"
                          opacity=".4"
                        >
                          {links.text1 ? links.text1 : ""}
                        </Text>
                        <Text textSize="caption2" opacity=".4" textWeight="600">
                          {links.text2 ? links.text2 : ""}
                        </Text>
                        <Div d={links.icon1 ? "flex" : "none"}>
                          <Image
                            src={links.icon1 ? links.icon1 : ""}
                            h="1.5rem"
                            m={{ r: ".625rem" }}
                          />
                          <Image
                            src={links.icon2 ? links.icon2 : ""}
                            h="1.5rem"
                          />
                        </Div>
                      </Div>
                    ))}
                  </Div>
                </Col>
              </Row>
            </Div>
            <Div p={{ y: "2.625rem" }} textAlign="center">
              <Text textSize="caption" textWeight="600" opacity=".4">
                Copyright © Atomize Design 2017-2020
              </Text>
            </Div>
          </Div>
        </CustomContainer>
      </WebsiteContainer>
    )
  }
}
