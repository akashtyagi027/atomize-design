import React from "react"
import { Div } from "atomize"

export default function WebsiteContainer({ children, ...rest }) {
  return (
    <Div maxW="1328px" m={{ x: "auto" }} {...rest}>
      {children}
    </Div>
  )
}
