import React, { Component } from "react"
import { Div, Text, Row, Col, Button } from "atomize"
import WebsiteContainer from "../common/WebsiteContainer"
import Accelerate from "../../images/Accelerate.png"

export default class HomeAccelerate extends Component {
  render() {
    return (
      <WebsiteContainer p={{ x: ".75rem" }}>
        <Div
          rounded="32px"
          bg="white"
          p={{ x: { xs: "1rem", md: "7rem" }, y: { xs: "4rem", md: "5.5rem" } }}
          shadow="1"
        >
          <Row>
            <Col size={{ xs: "12", md: "6" }} style={{ margin: "auto" }}>
              <Div>
                <Div
                  textSize={{ xs: "subheader2", md: "display2" }}
                  textWeight="bold"
                  textAlign={{ xs: "center", md: "left" }}
                >
                  <Text tag="span">Accelerate</Text>{" "}
                  <Text tag="span" opacity=".4">
                    your design workflow with ready to use interface elements
                    and file setup.
                  </Text>
                </Div>
                <Button
                  m={{ t: "3.5rem", x: { xs: "auto", md: "0" } }}
                  rounded="12px"
                  p={{ y: ".875rem", x: "1.75rem" }}
                  h="3.5rem"
                  textColor="violet200"
                  bg="white"
                  border="1px solid"
                  borderColor="#ECECFF"
                  textSize="paragraph"
                  textWeight="bold"
                  hoverBg="#fafbfb"
                >
                  See full preview ↗️
                </Button>
              </Div>
            </Col>
            <Col
              size={{ xs: "12", md: "6" }}
              p={{ l: { xs: "0", md: "8rem" }, b: { xs: ".5rem", md: "0" } }}
            >
              <Div
                bgImg={Accelerate}
                p={{ b: "100%" }}
                m={{ t: { xs: "4.5rem", md: "0" } }}
                bgSize="cover"
                bgPos="center"
              ></Div>
            </Col>
          </Row>
        </Div>
      </WebsiteContainer>
    )
  }
}
