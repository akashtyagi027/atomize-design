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
    link2: "mailto:contact@atomizedesign.com",
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
        <CustomContainer p={{ x: { xs: "16px", md: "0", xl: "112px" } }}>
          <Div>
            <Div border={{ y: "1px solid" }} borderColor="#E1E4E8">
              <Row m="0">
                <Col
                  size={{ xs: "12", xl: "6" }}
                  p={{
                    t: { xs: "40px", md: "58px" },
                    b: { xs: "56px", md: "50px" },
                    l: { md: "64px", xl: "0" },
                    r: { md: "92px", xl: "0" },
                  }}
                  border={{ r: { xs: "none", xl: "1px solid" } }}
                  borderColor="#E1E4E8"
                >
                  <Div
                    d="flex"
                    justify="space-between"
                    flexDir={{ xs: "column", md: "row" }}
                    p={{ x: { xs: "8px", md: "0" } }}
                  >
                    <Image
                      src="./images/footer-logo.svg"
                      h="20px"
                      w="108px"
                      m={{ b: { xs: "28px", md: "0" } }}
                    />
                    <Text
                      maxW={{ md: "492px", xl: "320px" }}
                      textSize={{ xs: "caption2", md: "paragraph" }}
                      textWeight="600"
                      opacity=".8"
                      m={{ r: { xs: "0", xl: "48px" } }}
                    >
                      Atomize Design System aims to help designers become better
                      and more productive at design.
                    </Text>
                  </Div>
                </Col>
                <Col
                  size={{ xs: "12", xl: "6" }}
                  p={{
                    t: { xs: "24px", md: "40px", xl: "56px" },
                    b: "50px",
                    l: { md: "64px", xl: "0" },
                    r: { md: "92px", xl: "0" },
                  }}
                  border={{ t: { xs: "1px solid", xl: "none" } }}
                  borderColor="lightGray"
                >
                  <Div
                    d="flex"
                    justify="space-between"
                    flexWrap="wrap"
                    p={{
                      l: { xs: "8px", md: "0", xl: "72px" },
                    }}
                    maxW={{ md: "492px", xl: "100%" }}
                    m={{ md: "0 0 0  auto", xl: "0" }}
                  >
                    {footerLinks.map((links, id) => (
                      <Div
                        key={id}
                        m={{
                          r: { xs: "40px", md: "0" },
                          b: { xs: "58px", md: "0" },
                        }}
                      >
                        <Text
                          textSize="caption2"
                          textWeight="bold"
                          m={{ b: "18px" }}
                        >
                          {links.heading}
                        </Text>
                        <Anchor
                          href={links.link1}
                          target="_blank"
                          textSize="caption2"
                          textWeight="600"
                          opacity=".4"
                          textColor="black"
                          hoverTextColor="black"
                          m={{ b: "10px" }}
                          d="block"
                          textDecor="none"
                        >
                          {links.text1 ? links.text1 : ""}
                        </Anchor>
                        <Anchor
                          href={links.link2}
                          target="_blank"
                          textSize="caption2"
                          opacity=".4"
                          cursor="pointer"
                          textWeight="600"
                          hoverTextColor="black"
                          d="block"
                          textColor="black"
                          textDecor="none"
                        >
                          {links.text2 ? links.text2 : ""}
                        </Anchor>
                        <Div
                          d={links.icon1 ? "flex" : "none"}
                          justify="space-between"
                        >
                          <Anchor href={links.iconLink1} target="_blank">
                            <Image
                              src={links.icon1 ? links.icon1 : ""}
                              h="24ps"
                              //m={{ r: ".625rem" }}
                              cursor="pointer"
                            />
                          </Anchor>
                          <Anchor href={links.iconLink2} target="_blank">
                            <Image
                              src={links.icon2 ? links.icon2 : ""}
                              h="24px"
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
                t: { xs: "16px", md: "42px" },
                b: { xs: "28px", md: "42px" },
              }}
              textAlign={{ xs: "left", md: "center" }}
            >
              <Text
                p={{ l: { xs: "8px", md: "0" } }}
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
