import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Div, Text, Image, Button } from "atomize"
import WebsiteContainer from "./WebsiteContainer"
import CustomContainer from "./CustomContainer"

const Header = () => (
  <Div
    h="4rem"
    className="header"
    pos="fixed"
    w="100%"
    top="0"
    zIndex="4"
    border={{ b: "1px solid" }}
    borderColor="lightGray"
  >
    <WebsiteContainer>
      <CustomContainer>
        <Div
          p={{ y: ".75rem" }}
          d={{ xs: "none", md: "flex" }}
          align="center"
          justify="space-between"
        >
          <Div>
            <Image src="./images/Atomize-logo.svg" h="20px" w="109px" />
          </Div>
          <Div d="flex" align="center">
            <Text
              textDecor="underline"
              textWeight="bold"
              textSize="caption"
              opacity=".56"
              cursor="pointer"
              m={{ r: "3rem" }}
            >
              Atomize React <Text tag="span">↗️</Text>
            </Text>
            <Text
              textDecor="underline"
              textWeight="bold"
              textSize="caption"
              textColor="violet200"
              cursor="pointer"
              m={{ r: "3rem" }}
            >
              TRY DEMO
            </Text>
            <Button
              textColor="white"
              textWeight="bold"
              rounded="8px"
              bg="violet100"
            >
              Buy Now
            </Button>
          </Div>
        </Div>
      </CustomContainer>
    </WebsiteContainer>
  </Div>
)
export default Header
