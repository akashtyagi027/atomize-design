import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
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
        <meta
          property="og:image"
          content="https://atomizedesign.com/images/meta.png"
        />

        {/* <!-- Twitter -- /> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://atomizedesign.com/" />
        <meta property="twitter:title" content="Atomize Design System" />
        <meta
          property="twitter:description"
          content="The most advanced UI design framework for Sketch and Figma"
        />
        <meta
          property="twitter:image"
          content="https://atomizedesign.com/images/meta.png"
        ></meta>

        {/* Robots */}
        <meta name="robots" content="noimageindex" />

        {/* Hotjar code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (h, o, t, j, a, r) {
            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
            h._hjSettings = { hjid: 1808029, hjsv: 6 };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script'); r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
        `,
          }}
        />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

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
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
