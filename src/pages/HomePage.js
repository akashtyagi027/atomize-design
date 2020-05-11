import React, { Component } from "react"
import HomeHero from "../components/home/HomeHero"
import { Div } from "atomize"
import ToggleComponent from "../components/common/ToggleComponent"
import HomeAccelerate from "../components/home/HomeAccelerate"
import HomeInside from "../components/home/HomeInside"
import HomeDemo from "../components/home/HomeDemo"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
// import luxy from "luxy.js"

const toggleData = {
  Sketch: {
    image: "./images/icons/Sketch.svg",
    text: "Sketch",
  },
  Figma: {
    image: "./images/icons/Figma.svg",
    text: "Figma",
  },
}

const data = {
  Sketch: {
    header: {
      logo: "./images/Atomize-sketch.svg",
      textColor: "#F07300",
      buttonColor: "#FF8F00",
      demoLink: "https://gumroad.com/l/atomize-demo",
    },
    heroSection: {
      heading: "Design interfaces at Scale",
      subHeading:
        "Atomize Design System is the most advanced UI design framework that helps designers create beautiful and consistent user interfaces for the web.",
      image: "./images/Sketch/Sketch.png",
      heroPoints: [
        {
          image: "./images/icons/Modular.svg",
          heading: "Modular",
          text: "Combine symbols to create multiple UI components",
        },
        {
          image: "./images/icons/Customizable.svg",
          heading: "Customizable",
          text: "Shared styles and Symbols can be customized easily.",
        },
        {
          image: "./images/icons/Scalable.svg",
          heading: "Scalable",
          text: "Quickly scale your design while maintaining consistency",
        },
      ],
    },

    homeAccelerate: {
      heading: "Accelerate",
      previewLink:
        "https://www.sketch.com/s/a0879546-808a-49bd-94d3-29c09216b60c",
      text:
        "your design workflow with ready to use interface elements and file setup.",
      className: "sketch-arrow",
      buttonColor: "#F07300",
      borderColor: "#FFECC7",
      frameImage: "./images/Sketch/Sketch.svg",
      chatBubble: "./images/Sketch/Point-Up-Left.svg",
      toggleImage: "./images/Sketch/Switch-On.svg",
      input: "./images/Sketch/Right-Icon.svg",
    },

    homeInside: {
      heading: "What’s inside 👀",
      text:
        "Starting your next design project? No need to start from scratch. A huge set of base elements and pre-designed components are already set up for you. Just get started!",
      cards: [
        {
          heading: "Style Guide",
          text: "2 Styleguide layout options.",
          image: "./images/Sketch/W2.png",
        },
        {
          heading: "UI components",
          text: "Buttons, Avatars, Inputs, Lists and more.",
          image: "./images/Sketch/W1.png",
        },
        {
          heading: "Theme Setup",
          text: "Colors, Shadows and Type system.",
          image: "./images/Sketch/W3.png",
        },
      ],
    },

    homeDemo: {
      heading:
        "Trusted by 5000+ designers from companies like Blurb, Thoughtworks, Latch and more",
      color: "#FFAD0D",
      textColor: "black",
      logo: "./images/logo-sketch.svg",
      demoLink: "https://gumroad.com/l/atomize-demo",
      purchaseLink: "https://gumroad.com/l/atomize",
      points: [
        {
          image: "./images/Success-2.svg",
          text: "FREE future updates",
        },
        {
          image: "./images/Success-2.svg",
          text: "Themes: Light/Dark/Combo",
        },
        {
          image: "./images/Success-2.svg",
          text: "Auto-updating Style Guide",
        },
        {
          image: "./images/Success-2.svg",
          text: "UI components",
        },
        {
          image: "./images/Success-2.svg",
          text: "Theme Setup and Type system",
        },
      ],
    },
  },

  Figma: {
    header: {
      logo: "./images/Atomize-figma.svg",
      textColor: "violet200",
      buttonColor: "violet100",
      demoLink: "https://gumroad.com/l/atomizefigmademo",
    },

    heroSection: {
      heading: "Design interfaces at Scale",
      subHeading:
        "Atomize Design System is the most advanced UI design framework that helps designers create beautiful and consistent user interfaces for the web.",
      image: "./images/Figma/Figma.png",
      heroPoints: [
        {
          image: "./images/icons/Modular.svg",
          heading: "Modular",
          text: "Combine symbols to create multiple UI components",
        },
        {
          image: "./images/icons/Customizable.svg",
          heading: "Customizable",
          text: "Shared styles and Symbols can be customized easily.",
        },
        {
          image: "./images/icons/Scalable.svg",
          heading: "Scalable",
          text: "Quickly scale your design while maintaining consistency",
        },
      ],
    },

    homeAccelerate: {
      heading: "Accelerate",
      previewLink: "https://bit.ly/2XTIXoL",
      text:
        "your design workflow with ready to use interface elements and file setup.",
      className: "figma-arrow",
      buttonColor: "violet200",
      borderColor: "#ECECFF",
      frameImage: "./images/Figma/Frame.svg",
      chatBubble: "./images/Figma/Point-Up-Left.svg",
      toggleImage: "./images/Figma/Switch-On.svg",
      input: "./images/Figma/Right-Icon.svg",
    },

    homeInside: {
      heading: "What’s inside 👀",
      text:
        "Starting your next design project? No need to start from scratch. A huge set of base elements and pre-designed components are already set up for you. Just get started!",
      cards: [
        {
          heading: "Style Guide",
          text: "2 Styleguide layout options.",
          image: "./images/Figma/W1.png",
        },
        {
          heading: "UI components",
          text: "Buttons, Avatars, Inputs, Lists and more.",
          image: "./images/Figma/W2.png",
        },
        {
          heading: "Theme Setup",
          text: "Colors, Shadows and Type system.",
          image: "./images/Figma/W3.png",
        },
      ],
    },

    homeDemo: {
      heading:
        "Trusted by 5000+ designers from companies like Blurb, Thoughtworks, Latch and more",
      color: "violet100",
      textColor: "white",
      logo: "./images/logo-figma.svg",
      demoLink: "https://gumroad.com/l/atomizefigmademo",
      purchaseLink: "https://gumroad.com/l/atomizefigma",
      points: [
        {
          image: "./images/Success.svg",
          text: "FREE future updates",
        },
        {
          image: "./images/Success.svg",
          text: "Auto-updating Style Guide",
        },
        {
          image: "./images/Success.svg",
          text: "UI components",
        },
        {
          image: "./images/Success.svg",
          text: "Theme Setup and Type system",
        },
        {
          image: "./images/Success.svg",
          text: "Example screens (Coming soon)",
        },
      ],
    },
  },
}

export default class HomePage extends Component {
  state = { activeToggle: "Sketch" }

  componentDidMount() {
    const luxy = require("luxy.js")
    luxy.init({
      wrapperSpeed: "1",
    })
  }

  toggle = id => {
    this.setState({ activeToggle: id })
  }

  render() {
    const { activeToggle } = this.state
    return (
      <Div>
        <Header content={data[activeToggle].header} />
        <Div id="luxy">
          <ToggleComponent
            toggleId={this.toggle}
            data={toggleData}
            activeToggle={activeToggle}
          />
          <Div m={{ t: { xs: "2rem", md: "3rem" } }}>
            <HomeHero content={data[activeToggle].heroSection} />
          </Div>
          <Div
            m={{
              t: { xs: "5.5rem", md: "5rem", xl: "10.5rem" },
            }}
          >
            <HomeAccelerate content={data[activeToggle].homeAccelerate} />
          </Div>
          <Div
            m={{
              t: { xs: "4.5rem", md: "5rem", xl: "10.5rem" },
            }}
          >
            <HomeInside content={data[activeToggle].homeInside} />
          </Div>
          <Div
            m={{
              t: { xs: "4rem", md: "5rem", xl: "10.5rem" },
              b: "5.5rem",
            }}
          >
            <HomeDemo
              content={data[activeToggle].homeDemo}
              activeToggle={activeToggle}
            />
          </Div>

          <Footer />
        </Div>
      </Div>
    )
  }
}
