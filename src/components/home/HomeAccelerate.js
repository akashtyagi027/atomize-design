import React, { Component } from "react"
import { Div, Text, Row, Col, Button } from "atomize"
import WebsiteContainer from "../common/WebsiteContainer"
import Accelerate from "../../images/Accelerate.png"

export default class HomeAccelerate extends Component {
  render() {
    return (
      <WebsiteContainer>
        <Div
          rounded="32px"
          bg="white"
          p={{ x: "7rem", y: "5.5rem" }}
          shadow="1"
        >
          <Row>
            <Col size="6" style={{ margin: "auto" }}>
              <Div>
                <Div textSize="display2" textWeight="bold">
                  <Text tag="span">Accelerate</Text>{" "}
                  <Text tag="span" opacity=".4">
                    your design workflow with ready to use interface elements
                    and file setup.
                  </Text>
                </Div>
                <Button
                  m={{ t: "3.5rem" }}
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
            <Col size="6" p={{ l: "8rem" }}>
              <Div
                bgImg={Accelerate}
                p={{ b: "100%" }}
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
