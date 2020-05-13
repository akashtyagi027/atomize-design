/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./common/Header"
import { Div, StyleReset, ThemeProvider } from "atomize"
import theme from "./common/theme"

import "../styles/scss/style.scss"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyleReset />
        <Helmet defer={false}>
          <title>Atomize Design System</title>
          <meta name="title" content="Atomize Design System" />
          <meta
            name="description"
            content="The most advanced UI design framework for Sketch and Figma"
          />

          {/* <!-- Open Graph / Facebook -- /> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://atomizedesign.com/" />
          <meta property="og:title" content="Atomize Design System" />
          <meta
            property="og:description"
            content="The most advanced UI design framework for Sketch and Figma"
          />
          <meta property="og:image" content="/images/meta.png" />

          {/* <!-- Twitter -- /> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://atomizedesign.com/" />
          <meta property="twitter:title" content="Atomize Design System" />
          <meta
            property="twitter:description"
            content="The most advanced UI design framework for Sketch and Figma"
          />
          <meta property="twitter:image" content="/images/meta.png"></meta>

          {/* Robots */}
          <meta name="robots" content="noimageindex" />

          {/* Google Analytics */}
          <script
            type="text/javascript"
            async=""
            src="https://www.google-analytics.com/analytics.js"
          ></script>
          <script
            type="text/javascript"
            async=""
            src="https://js.driftt.com/include/1580735400000/vb4hrvsd8kfv.js"
          ></script>
          <script
            async=""
            src="https://www.googletagmanager.com/gtag/js?id=UA-119531355-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-119531355-1');`,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `"use strict";
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:1808029,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              ;`,
            }}
          />

          {/* Drift Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `"use strict";

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('vb4hrvsd8kfv');`,
            }}
          />

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `window.huntr = {
		    slug: 'atomize',
		    reviewShow: false
		  };
		  a = document.createElement('script');
		  a.src = '//huntr.in/x.js';
		  document.body.appendChild(a);`,
            }}
          />
        </Helmet>
        <div>
          <main>{children}</main>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Layout
