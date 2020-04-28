import React from "react"
import { Div } from "atomize"

const CustomContainer = props => (
  <Div p={{ x: { xs: "1.5rem", sm: "7rem" } }} {...props} />
)

export default CustomContainer
