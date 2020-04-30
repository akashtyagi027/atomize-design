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
        <CustomContainer p={{ x: { xs: "1rem", md: "7rem" } }}>
          <Div>
            <Div border={{ y: "1px solid" }} borderColor="#E1E4E8">
              <Row m="0">
                <Col
                  size={{ xs: "12", md: "6" }}
                  p={{
                    t: { xs: "2.5rem", md: "3.6rem" },
                    b: { xs: "3.5rem", md: "3.125rem" },
                  }}
                  border={{ r: { xs: "none", md: "1px solid" } }}
                  borderColor="#E1E4E8"
                >
                  <Div
                    d="flex"
                    justify="space-between"
                    flexDir={{ xs: "column", md: "row" }}
                  >
                    <Image
                      src="./images/footer-logo.svg"
                      h="20px"
                      w="108px"
                      m={{ b: { xs: "1.75rem", md: "0" } }}
                    />
                    <Text
                      maxW="20rem"
                      textSize={{ xs: "caption2", md: "paragraph" }}
                      textWeight="600"
                      opacity=".8"
                      m={{ r: { xs: "0", md: "3rem" } }}
                    >
                      Atomize Design System aims to help designers become better
                      and more productive at design.
                    </Text>
                  </Div>
                </Col>
                <Col
                  size={{ xs: "12", md: "6" }}
                  p={{ t: { xs: "1.5rem", md: "3.6rem" }, b: "3.125rem" }}
                  border={{ t: { xs: "1px solid", md: "none" } }}
                  borderColor="light"
                >
                  <Div
                    d="flex"
                    justify="space-between"
                    p={{ l: { xs: "0", md: "4.5rem" } }}
                  >
                    {footerLinks.map((links, id) => (
                      <Div
                        key={id}
                        m={{
                          r: { xs: "2.5rem", md: "0" },
                          b: { xs: "3.6rem", md: "0" },
                        }}
                      >
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
                          cursor="pointer"
                        >
                          {links.text1 ? links.text1 : ""}
                        </Text>
                        <Text
                          textSize="caption2"
                          opacity=".4"
                          cursor="pointer"
                          textWeight="600"
                        >
                          {links.text2 ? links.text2 : ""}
                        </Text>
                        <Div d={links.icon1 ? "flex" : "none"}>
                          <Image
                            src={links.icon1 ? links.icon1 : ""}
                            h="1.5rem"
                            m={{ r: ".625rem" }}
                            cursor="pointer"
                          />
                          <Image
                            src={links.icon2 ? links.icon2 : ""}
                            h="1.5rem"
                            cursor="pointer"
                          />
                        </Div>
                      </Div>
                    ))}
                  </Div>
                </Col>
              </Row>
            </Div>
            <Div
              p={{
                t: { xs: "1rem", md: "2.625rem" },
                b: { xs: "1.75rem", md: "2.625rem" },
              }}
              textAlign={{ xs: "left", md: "center" }}
            >
              <Text
                p={{ l: { xs: ".5rem", md: "0" } }}
                textSize="caption"
                textWeight="600"
                opacity=".4"
              >
                Copyright © Atomize Design 2017-2020
              </Text>
            </Div>
          </Div>
        </CustomContainer>
      </WebsiteContainer>
    )
  }
}
