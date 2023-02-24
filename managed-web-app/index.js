console.log("index.js loaded");

// Procedural rendering from Friday class - refactored to components below:
// const h1 = document.createElement("h1");
// h1.innerText = "My Managed Web App with Fix";

// const p = document.createElement("p");
// p.innerText =
//   "You really think you can fly that thing? Just my luck, no ice. We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! Hey, you know how I'm, like, always trying to save the planet? Here's my chance.";

//Tailwind styles below HERE
// h1.setAttribute("class", "text-3xl text-red-900 animate-pulse");

// document.body.appendChild(h1);
// document.body.appendChild(p);

// TODO (where we left off on Friday)
// componentise our elements and call functions from index.js

/**
 * too much procedural code in index.js makes for a rigid inflexible design
 * instead, call functions from individual JS modules to return HTML
 * make pure functions to accept props, passed by copy:
 * each time we call them from index.js we can supply the values we need
 * going forwards we may conditionally render different views of our app, data-driven
 * for now let\'s make a header, a paragraph, and an image in this way:
 */

import H1 from "./components/H1";
import Paragraph from "./components/Paragraph";
import Image from "./components/Image.js";

document.body.appendChild(
  H1({
    innerHTML: "Managed Web App",
    attributes: [
      { name: "id", value: "header" },
      { name: "class", value: "text-3xl text-red-900 animate-pulse" },
    ],
  })
);
document.body.appendChild(
  Paragraph({
    innerHTML:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatem sint saepe ex praesentium tempore. Optio tempora et ipsa officia exercitationem temporibus velit reprehenderit consequatur. Iusto minus id odio nesciunt?",
    attributes: [{ name: "class", value: "indent-4 capitalize " }],
  })
);
document.body.appendChild(
  Image({
    attributes: [
      {
        name: "src",
        value: "./assets/Ballys-foundation-website-assets-02.png",
      },
      // image path must be relative to the calling index.js,
      // not the component js where the path is referenced as ../
      { name: "alt", value: "It's not cool to be kind logo" },
      { name: "class", value: "" },
    ],
  })
);

/**
 * for further self-study:
 * Develop a component(s) for an unordered list.
 * Do you include list items as props, or make a separate component for them?
 * Style the list as a menu using Tailwind classes
 * (hint: you will need to change the CSS display property to inline-block for a horizontal menu)
 * Plumb in Tailwind as a dependency - see the Parcel CLI PDF and Tailwindcss.com web site
 * You will need postcss and autoprefixer as Tailwind dependencies
 * You will need the Tailwind directives at the top level of your css
 * So you will need to create and index.css file and link to it from index.html
 * The way you reference Tailwind classes on the element does not change from using the CDN
 * Add some custom css of your own to the list, at component level
 * Add some custom css at the top level of your project to index.css
 * This could be, for instance, some padding on the body, and a zero pixel margin
 * See that Parcel handles all this:
 * Framework css (Tailwind)
 * Global css (index.css)
 * Component-level css (Your list styles)
 */
