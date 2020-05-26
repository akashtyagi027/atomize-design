import React, { Component } from "react"
import HomeHero from "../components/home/HomeHero"
import { Div } from "atomize"
import ToggleComponent from "../components/common/ToggleComponent"
import HomeAccelerate from "../components/home/HomeAccelerate"
import HomeInside from "../components/home/HomeInside"
import HomeDemo from "../components/home/HomeDemo"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import Layout from "../components/layout"
// import luxy from "luxy.js"

export default class IndexPage extends Component {
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
      <Layout>
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
      </Layout>
    )
  }
}

const toggleData = {
  Sketch: {
    image: "./images/icons/Sketch.svg",
    text: "Sketch",
  },
  Figma: {
    image: "./images/icons/figma.svg",
    text: "Figma",
  },
}

const data = {
  Sketch: {
    header: {
      logo: "./images/atomize-sketch.svg",
      textColor: "#F07300",
      buttonColor: "#FF8F00",
      demoLink: "https://gumroad.com/l/atomize-demo",
    },
    heroSection: {
      heading: "Design interfaces at Scale",
      subHeading:
        "Atomize Design System is the most advanced UI design framework that helps designers create beautiful and consistent user interfaces for the web.",
      image: "./images/sketch/sketch-1.png",
      heroPoints: [
        {
          image: "./images/icons/modular.svg",
          heading: "Modular",
          text: "Combine symbols to create multiple UI components",
        },
        {
          image: "./images/icons/customizable.svg",
          heading: "Customizable",
          text: "Shared styles and Symbols can be customized easily.",
        },
        {
          image: "./images/icons/scalable.svg",
          heading: "Scalable",
          text: "Quickly scale your design while maintaining consistency",
        },
      ],
    },

    homeAccelerate: {
      heading: "Accelerate",
      previewLink:
        "https://www.sketch.com/s/d998aa01-2d96-4e80-93fb-598de671a400",
      text:
        "your design workflow with ready to use interface elements and file setup.",
      className: "sketch-arrow",
      buttonColor: "#F07300",
      borderColor: "#FFECC7",
      frameImage: "./images/sketch/sketch.svg",
      chatBubble: "./images/sketch/point-up-left.svg",
      toggleImage: "./images/sketch/switch-on.svg",
      input: "./images/sketch/right-icon.svg",
    },

    homeInside: {
      heading: "What’s inside 👀",
      text:
        "Starting your next design project? No need to start from scratch. A huge set of base elements and pre-designed components are already set up for you. Just get started!",
      cards: [
        {
          heading: "Style Guide",
          text: "2 Styleguide layout options.",
          image: "./images/sketch/w2.png",
        },
        {
          heading: "UI components",
          text: "Buttons, Avatars, Inputs, Lists and more.",
          image: "./images/sketch/w1.png",
        },
        {
          heading: "Theme Setup",
          text: "Colors, Shadows and Type system.",
          image: "./images/sketch/w3.png",
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
          image: "./images/success-2.svg",
          text: "FREE future updates",
        },
        {
          image: "./images/success-2.svg",
          text: "Themes: Light/Dark/Combo",
        },
        {
          image: "./images/success-2.svg",
          text: "Auto-updating Style Guide",
        },
        {
          image: "./images/success-2.svg",
          text: "UI components",
        },
        {
          image: "./images/success-2.svg",
          text: "Theme Setup and Type system",
        },
      ],
    },
  },

  Figma: {
    header: {
      logo: "./images/atomize-figma.svg",
      textColor: "violet200",
      buttonColor: "violet100",
      demoLink: "https://gumroad.com/l/atomizefigmademo",
    },

    heroSection: {
      heading: "Design interfaces at Scale",
      subHeading:
        "Atomize Design System is the most advanced UI design framework that helps designers create beautiful and consistent user interfaces for the web.",
      image: "./images/figma/figma-1.png",
      heroPoints: [
        {
          image: "./images/icons/modular.svg",
          heading: "Modular",
          text: "Combine symbols to create multiple UI components",
        },
        {
          image: "./images/icons/customizable.svg",
          heading: "Customizable",
          text: "Shared styles and Symbols can be customized easily.",
        },
        {
          image: "./images/icons/scalable.svg",
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
      frameImage: "./images/figma/frame.svg",
      chatBubble: "./images/figma/point-up-left.svg",
      toggleImage: "./images/figma/switch-on.svg",
      input: "./images/figma/right-icon.svg",
    },

    homeInside: {
      heading: "What’s inside 👀",
      text:
        "Starting your next design project? No need to start from scratch. A huge set of base elements and pre-designed components are already set up for you. Just get started!",
      cards: [
        {
          heading: "Style Guide",
          text: "2 Styleguide layout options.",
          image: "./images/figma/w1.png",
        },
        {
          heading: "UI components",
          text: "Buttons, Avatars, Inputs, Lists and more.",
          image: "./images/figma/w2.png",
        },
        {
          heading: "Theme Setup",
          text: "Colors, Shadows and Type system.",
          image: "./images/figma/w3.png",
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
          image: "./images/success.svg",
          text: "FREE future updates",
        },
        {
          image: "./images/success.svg",
          text: "Auto-updating Style Guide",
        },
        {
          image: "./images/success.svg",
          text: "UI components",
        },
        {
          image: "./images/success.svg",
          text: "Theme Setup and Type system",
        },
        {
          image: "./images/success.svg",
          text: "Example screens (Coming soon)",
        },
      ],
    },
  },
}
