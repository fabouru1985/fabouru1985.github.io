"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["2019"], {
17150: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_getting_started_how_is_fintesk_data_organized_md_ca7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-getting-started-how-is-fintesk-data-organized-md-ca7.json
var site_docs_kb_getting_started_how_is_fintesk_data_organized_md_ca7_namespaceObject = JSON.parse('{"id":"kb/getting-started/how-is-fintesk-data-organized","title":"How is Fintesk data organized?","description":"Organizing your deals, contact persons, organizations, activities, products is essential to your sales process. Fintesk helps you organize all your items and link them together for better visibility.","source":"@site/docs/kb/getting-started/how-is-fintesk-data-organized.md","sourceDirName":"kb/getting-started","slug":"/","permalink":"/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/tags/getting-started"},{"inline":true,"label":"Basic concepts","permalink":"/tags/basic-concepts"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741046400000,"sidebarPosition":2,"frontMatter":{"id":"how-is-fintesk-data-organized","slug":"/","title":"How is Fintesk data organized?","sidebar_position":2,"tags":["Getting started","Basic concepts"],"last_update":{"date":"2025-03-04T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Fintesk glossary","permalink":"/kb/getting-started/fintesk-glossary"},"next":{"title":"Fintesk interface","permalink":"/kb/getting-started/interface-in-fintesk"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/getting-started/how-is-fintesk-data-organized.md


const frontMatter = {
	id: 'how-is-fintesk-data-organized',
	slug: '/',
	title: 'How is Fintesk data organized?',
	sidebar_position: 2,
	tags: [
		'Getting started',
		'Basic concepts'
	],
	last_update: {
		date: new Date('2025-03-04T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Deals",
  "id": "deals",
  "level": 2
}, {
  "value": "Persons (contacts)",
  "id": "persons-contacts",
  "level": 2
}, {
  "value": "Organizations (contacts)",
  "id": "organizations-contacts",
  "level": 2
}, {
  "value": "Activities",
  "id": "activities",
  "level": 2
}, {
  "value": "Products",
  "id": "products",
  "level": 2
}, {
  "value": "Data relationships",
  "id": "data-relationships",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Organizing your deals, contact persons, organizations, activities, products is essential to your sales process. Fintesk helps you organize all your items and link them together for better visibility."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Some features require a specific subscription to access. You can find a breakdown of our features by plan in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "billing/your-fintesk-subscription-plan/what-features-do-the-fintesk-plans-have",
          children: "this article"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deals",
      children: "Deals"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "hfd01",
        src: (__webpack_require__(52282)/* ["default"] */.A) + "",
        width: "1398",
        height: "472"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ongoing transactions you’re pursuing with persons or organizations in Fintesk are tracked as deals, which are processed through the stages of your ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/pipeline-view",
        children: "pipeline"
      }), " until they’re either ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "won"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lost"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deals contain all of the actions taken while closing a sale. Deals will also pull all the information from the person or organization they’re associated with, which you can find in the detail view of that deal. In this ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/deals/deals-what-they-are-and-how-to-add-them",
        children: "article"
      }), ", you can read more about deals in Fintesk."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deals can be linked to a person and organizations. They can also have products added to them."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deals track all events and movements that take place throughout your sales process."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Since a deal is connected to a contact, any actions you perform on the deal will also be reflected in the person/organization linked to it."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deals can be ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
          children: "imported from a CSV or XLS file"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "persons-contacts",
      children: "Persons (contacts)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "hfd02",
        src: (__webpack_require__(95639)/* ["default"] */.A) + "",
        width: "1308",
        height: "485"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/contacts/contacts-persons-and-organizations",
        children: "Persons contacts"
      }), " are the specific customers you’re selling to, and any information relating to each contact such as scheduled activities or emails will be tracked in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/detail-view",
        children: "detail view"
      }), " of that person."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Persons contacts can be linked to one organization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "They can have multiple deals open for them at the same time."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["They can be ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
          children: "imported from a CSV or XLS file"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "organizations-contacts",
      children: "Organizations (contacts)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "hfd03",
        src: (__webpack_require__(54720)/* ["default"] */.A) + "",
        width: "1392",
        height: "694"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/contacts/contacts-persons-and-organizations",
        children: "Organizations"
      }), " are the companies where contacts work. All persons related to an organization will be listed in its detail view, along with any ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/detail-view/how-can-i-add-notes-to-a-deal-or-contact",
        children: "notes"
      }), " or ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/activities",
        children: "activities"
      }), " linked to any person, deals related to the organization."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Organizations contain information like a mailing address or industry information."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You can link multiple persons, deals to your organizations."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Organizations can be ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
          children: "imported from a CSV or XLS file"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "activities",
      children: "Activities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "hfd04",
        src: (__webpack_require__(7861)/* ["default"] */.A) + "",
        width: "1329",
        height: "572"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An activity represents any action taken toward closing a sale. It can be a phone call, a lunch meeting, or any other event you schedule with a contact. You can schedule activities in relation to a person, organization, or deal. You can read ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/activities",
        children: "this article"
      }), " for more information on activities in Fintesk."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Activities can be linked to a person, organization, o deal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Associating an activity with a deal will also associate the activity with the linked person and/or organization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Activities can be ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/importing-data/importing-data-into-fintesk-with-spreadsheets",
          children: "imported from a CSV or XLS file"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "products",
      children: "Products"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " For more information about price variations, check out ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/products/can-i-have-one-product-in-different.-price-variations",
          children: "this article"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "hfd05",
        src: (__webpack_require__(9582)/* ["default"] */.A) + "",
        width: "1401",
        height: "556"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/products",
        children: "Products"
      }), " are items or services you sell or trade, and are often linked to ongoing deals. Products have specific fields like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "product code"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "price"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tax"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "data-relationships",
      children: "Data relationships"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here’s a basic rundown of how the different data types relate."
    }), "\n", (0,jsx_runtime.jsxs)("table", {
      children: [(0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("td", {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Contacts"
          })
        }), (0,jsx_runtime.jsx)("td", {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "negocios/actividades"
          })
        }), (0,jsx_runtime.jsx)("td", {
          children: "Contacts are those you conduct deals and schedule activities with, as well as send emails to. They can be represented as individual contact (i.e Bombo Fica) or collective organizations (i.e The Not Co)"
        })]
      }), (0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("td", {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Activities"
          })
        }), (0,jsx_runtime.jsx)("td", {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "negocios/contactos"
          })
        }), (0,jsx_runtime.jsx)("td", {
          children: "Activities can be linked to a lead, deal, or contact, but it’s not required as they can also be created without being linked to other data."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "|"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Learn more about Fintesk terms and relationships in our ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/getting-started/fintesk-glossary",
          children: "glossary"
        }), "."]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
52282: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/hfd01-ca7ec1b3ba716883fc559da145d9573c.jpeg");

}),
95639: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/hfd02-e9a1fad6ab5c86646dc99bf540cb079c.jpeg");

}),
54720: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/hfd03-fb3230ea0435f41db76a802712fbdba2.jpeg");

}),
7861: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/hfd04-5de6f39045fb6a3733ce095d8b9c9af6.jpeg");

}),
9582: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/hfd05-a1bdbf31b2b30f590cdfb626231e6438.jpeg");

}),
28453: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


}),

}]);