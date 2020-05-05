import React, { Component } from "react"
import { Div, Text, Row, Col, Image, Anchor } from "atomize"

import CustomContainer from "./CustomContainer"
import WebsiteContainer from "../common/WebsiteContainer"

const footerLinks = [
  {
    heading: "Product",
    text1: "Need support?",
    link1: "mailto:contact@atomizedesign.com",
    text2: "Request discount",
    link2: "",
  },
  {
    heading: "Atomize React",
    text1: "Github ↗️ ",
    link1: "https://github.com/proksh/atomize",
    text2: "Documentation ↗️ ",
    link2: "https://atomizecode.com/docs/react/intro/",
  },
  {
    heading: "Follow us",
    icon1: "./images/Twitter.svg",
    iconLink1: "https://twitter.com/atomize_design",
    icon2: "./images/Fb.svg",
    iconLink2: "https://www.facebook.com/atomizedesign/",
  },
]

export default class Footer extends Component {
  render() {
    return (
      <WebsiteContainer>
        <CustomContainer p={{ x: { xs: "1rem", md: "0", xl: "7rem" } }}>
          <Div>
            <Div border={{ y: "1px solid" }} borderColor="#E1E4E8">
              <Row m="0">
                <Col
                  size={{ xs: "12", xl: "6" }}
                  p={{
                    t: { xs: "2.5rem", md: "3.6rem" },
                    b: { xs: "3.5rem", md: "3.125rem" },
                    l: { md: "4rem", xl: "0" },
                    r: { md: "5.75rem", xl: "0" },
                  }}
                  border={{ r: { xs: "none", xl: "1px solid" } }}
                  borderColor="#E1E4E8"
                >
                  <Div
                    d="flex"
                    justify="space-between"
                    flexDir={{ xs: "column", md: "row" }}
                    p={{ x: { xs: ".5rem", md: "0" } }}
                  >
                    <Image
                      src="./images/footer-logo.svg"
                      h="20px"
                      w="108px"
                      m={{ b: { xs: "1.75rem", md: "0" } }}
                    />
                    <Text
                      maxW={{ md: "30.75rem", xl: "20rem" }}
                      textSize={{ xs: "caption2", md: "paragraph" }}
                      textWeight="600"
                      opacity=".8"
                      m={{ r: { xs: "0", xl: "3rem" } }}
                      //p={{ l: { md: "4rem", xl: "0" } }}
                    >
                      Atomize Design System aims to help designers become better
                      and more productive at design.
                    </Text>
                  </Div>
                </Col>
                <Col
                  size={{ xs: "12", xl: "6" }}
                  p={{
                    t: { xs: "1.5rem", md: "2.5rem", xl: "3.6rem" },
                    b: "3.125rem",
                    l: { md: "4rem", xl: "0" },
                    r: { md: "5.75rem", xl: "0" },
                  }}
                  border={{ t: { xs: "1px solid", xl: "none" } }}
                  borderColor="light"
                >
                  <Div
                    d="flex"
                    justify="space-between"
                    flexWrap="wrap"
                    p={{
                      l: { xs: "0.5rem", md: "0", xl: "4.5rem" },
                    }}
                    maxW={{ md: "30.75rem", xl: "100%" }}
                    m={{ md: "0 0 0  auto", xl: "0" }}
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
                        <Anchor
                          href={links.link1}
                          textSize="caption2"
                          textWeight="600"
                          opacity=".4"
                          textColor="black"
                          m={{ b: ".625rem" }}
                          d="block"
                          textDecor="none"
                        >
                          {links.text1 ? links.text1 : ""}
                        </Anchor>
                        <Anchor
                          href={links.link2}
                          textSize="caption2"
                          opacity=".4"
                          cursor="pointer"
                          textWeight="600"
                          d="block"
                          textColor="black"
                          textDecor="none"
                        >
                          {links.text2 ? links.text2 : ""}
                        </Anchor>
                        <Div d={links.icon1 ? "flex" : "none"}>
                          <Anchor href={links.iconLink1}>
                            <Image
                              src={links.icon1 ? links.icon1 : ""}
                              h="1.5rem"
                              m={{ r: ".625rem" }}
                              cursor="pointer"
                            />
                          </Anchor>
                          <Anchor href={links.iconLink2}>
                            <Image
                              src={links.icon2 ? links.icon2 : ""}
                              h="1.5rem"
                              cursor="pointer"
                            />
                          </Anchor>
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
