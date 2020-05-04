import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Div, Text, Image, Button } from "atomize"
import WebsiteContainer from "./WebsiteContainer"
import CustomContainer from "./CustomContainer"
import MobileHeaderMenu from "./MobileHeaderMenu"

class Header extends React.Component {
  state = { mobileHeaderOpen: false }

  toggleMobileHeader = () => {
    const { mobileHeaderOpen } = this.state

    this.setState({ mobileHeaderOpen: !mobileHeaderOpen })
  }

  render() {
    const { mobileHeaderOpen } = this.state
    const { content } = this.props
    return (
      <Div
        h="4rem"
        className="header"
        pos="fixed"
        w="100%"
        top="0"
        zIndex="999"
        border={{ b: !mobileHeaderOpen && "1px solid" }}
        borderColor="lightGray"
        bg={mobileHeaderOpen ? "light" : "rgba(241, 242, 244, 0.46)"}
      >
        <WebsiteContainer>
          <CustomContainer>
            <Div
              p={{ y: { xs: "22px", md: "12px" } }}
              d="flex"
              align="center"
              justify="space-between"
            >
              <Div>
                <Image src={content.logo} h="20px" w="109px" />
              </Div>
              <Div d={{ xs: "none", md: "flex" }} align="center">
                <Text
                  textDecor="underline"
                  textWeight="bold"
                  textSize="caption"
                  opacity=".56"
                  cursor="pointer"
                  m={{ r: "3rem" }}
                >
                  Atomize React↗️
                </Text>
                <Text
                  textDecor="underline"
                  textWeight="bold"
                  textSize="caption"
                  textColor={content.textColor}
                  cursor="pointer"
                  m={{ r: "3rem" }}
                >
                  TRY DEMO
                </Text>
                <Button
                  textColor="white"
                  textWeight="bold"
                  rounded="8px"
                  bg={content.buttonColor}
                >
                  Buy Now
                </Button>
              </Div>

              {/* Mobile Header */}
              <Div
                h="1.5rem"
                w="1.5rem"
                d={{ xs: "flex", md: "none" }}
                justify="center"
                flexDir="column"
                align="center"
                onClick={this.toggleMobileHeader}
              >
                <Div
                  w="20px"
                  h="2px"
                  m={{ b: "6px" }}
                  bg="black"
                  transition="all 0.3s ease-in-out"
                  transform={
                    mobileHeaderOpen && "translateY(4px) rotate(45deg)"
                  }
                ></Div>
                <Div
                  w="20px"
                  h="2px"
                  bg="black"
                  transition="all 0.3s ease-in-out"
                  transform={
                    mobileHeaderOpen && " translateY(-4px) rotate(135deg) "
                  }
                ></Div>
              </Div>
            </Div>

            {/* Mobile Header */}

            <MobileHeaderMenu
              mobileHeaderOpen={mobileHeaderOpen}
              content={content}
            />
          </CustomContainer>
        </WebsiteContainer>
      </Div>
    )
  }
}
export default Header
