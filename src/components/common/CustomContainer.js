import React from "react"
import { Div } from "atomize"

const CustomContainer = props => (
  <Div p={{ x: { xs: "1.5rem", md: "2.25rem", xl: "7rem" } }} {...props} />
)

export default CustomContainer
