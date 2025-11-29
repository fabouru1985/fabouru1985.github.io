"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["4910"], {
13209: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_developers_core_api_concepts_core_api_concepts_about_fintesk_api_md_497_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-developers-core-api-concepts-core-api-concepts-about-fintesk-api-md-497.json
var site_docs_developers_core_api_concepts_core_api_concepts_about_fintesk_api_md_497_namespaceObject = JSON.parse('{"id":"developers/core-api-concepts/core-api-concepts-about-fintesk-api","title":"About the Fintesk API","description":"An application programming interface (API) is a set of functionalities that a service owner provides so team\'s member can use its features and/or build software applications. An API details how a user makes requests and the responses they receive in return.","source":"@site/docs/developers/core-api-concepts/core-api-concepts-about-fintesk-api.md","sourceDirName":"developers/core-api-concepts","slug":"/developers/core-api-concepts/core-api-concepts-about-fintesk-api","permalink":"/developers/core-api-concepts/core-api-concepts-about-fintesk-api","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Developers","permalink":"/tags/developers"},{"inline":true,"label":"Fintesk Api","permalink":"/tags/fintesk-api"},{"inline":true,"label":"Core Api Concepts","permalink":"/tags/core-api-concepts"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1740182400000,"sidebarPosition":1,"frontMatter":{"id":"core-api-concepts-about-fintesk-api","title":"About the Fintesk API","sidebar_position":1,"tags":["Developers","Fintesk Api","Core Api Concepts"],"last_update":{"date":"2025-02-22T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Core API concepts","permalink":"/category/core-api-concepts"},"next":{"title":"Changes to the API","permalink":"/developers/core-api-concepts/changes-to-the-api"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/developers/core-api-concepts/core-api-concepts-about-fintesk-api.md


const frontMatter = {
	id: 'core-api-concepts-about-fintesk-api',
	title: 'About the Fintesk API',
	sidebar_position: 1,
	tags: [
		'Developers',
		'Fintesk Api',
		'Core Api Concepts'
	],
	last_update: {
		date: new Date('2025-02-22T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = 'About the Fintesk API';

const assets = {

};



const toc = [{
  "value": "Fintesk RESTful API",
  "id": "fintesk-restful-api",
  "level": 2
}, {
  "value": "How Fintesk API works",
  "id": "how-fintesk-api-works",
  "level": 2
}, {
  "value": "Core entities",
  "id": "core-entities",
  "level": 3
}, {
  "value": "Deals",
  "id": "deals",
  "level": 3
}, {
  "value": "Persons &amp; organizations (contacts)",
  "id": "persons--organizations-contacts",
  "level": 3
}, {
  "value": "Activities",
  "id": "activities",
  "level": 3
}, {
  "value": "Products",
  "id": "products",
  "level": 3
}, {
  "value": "Users",
  "id": "users",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "about-the-fintesk-api",
        children: "About the Fintesk API"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "application programming interface"
        }), " (API) is a set of functionalities that a service owner provides so team's member can use its features and/or build software applications. An API details how a user makes requests and the responses they receive in return."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fintesk is a sales CRM with an intuitive ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fintesk/api-v1",
        children: "RESTful API"
      }), ", to help you build [an app]."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fintesk-restful-api",
      children: "Fintesk RESTful API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#fintesk-restful-api"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Our Fintesk ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RESTful API Reference"
      }), " can be accessed via ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/fintesk/api-v1",
        children: "our API"
      }), ", where you will find a list of endpoints and their descriptions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Our API supports UTF-8 for character encoding."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(60817)/* ["default"] */.A) + "",
        title: "Fintesk full ERD",
        width: "1330",
        height: "1132"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fintesk Entity Relationship Diagram (ERD)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-fintesk-api-works",
      children: "How Fintesk API works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#how-fintesk-api-works"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Do take note that entity/entities may be called “item/items” or “type of item/items” for the end user in the Fintesk web."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["At the base of your Fintesk account is a customer relationship management (CRM) database of your sales pipeline, processes and relationships. As organizing sales data is essential for sales activities, Fintesk helps to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/",
        children: "organize and link your data together"
      }), " for better visibility through the core and adjacent entities."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-entities",
      children: "Core entities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#core-entities"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Within the Fintesk API, we have core entities that consist of multiple endpoints. These core entities represent a larger area inside Fintesk and can be found in navbar menu in the Fintesk web app. Tied to them are adjacent entities that contain supplementary information relevant to the core entities."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(1556)/* ["default"] */.A) + "",
        title: "Core Entities w fields ERD",
        width: "818",
        height: "792"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Fintesk core entities ERD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The ERD above shows how core entities are connected within Fintesk."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For example, in the case of activities, an activity can be associated with a deal. This goes the same for products."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Persons and organizations are considered contacts and are often grouped together."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[Entity] Fields endpoints allow you to obtain the near-complete schema of the respective core entities. You can add, update and delete main and custom fields through these adjacent entities."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Read on to discover how deals, persons and organizations (contacts), activities, products and users are further connected to other core and adjacent entities."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deals",
      children: "Deals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#deals"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(1556)/* ["default"] */.A) + "",
        title: "Deals ERD",
        width: "818",
        height: "792"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deals ERD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[Deals] are ongoing transactions pursued with a person or an organization. It’s tracked and processed through the Stages of a pipeline until it’s won or lost. Deals can be converted from leads via the Fintesk web app."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Fintesk, deals contain all actions taken towards closing a sale, for example, activities, and notes, and have their own custom fields (DealFields). Products can also be attached to deals."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A deal can be linked with either a person or organization (contacts) but it must always have one contact linked with them. As a deal is associated with a contact, it will pull all information from the linked contact and, likewise, associate all actions performed on the deal with the linked contact."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "persons--organizations-contacts",
      children: "Persons & organizations (contacts)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#persons--organizations-contacts"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(24567)/* ["default"] */.A) + "",
        title: "Persons &amp; Organizations (Contacts) ERD",
        width: "942",
        height: "762"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Persons & organizations (contacts) ERD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Persons are the specific customers of the sales process, while [organizations] are the companies that the persons work at. Persons and organizations are considered contacts and they rest in one centralized hub in the Fintesk web app. The ERD above depicts how different core and adjacent entities can either relate to contacts as a whole or persons/organizations specifically."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both persons and organizations can have activities, notes and files attached to them and their respective main fields and custom fields (PersonFields and OrganizationFields)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OrganizationRelationships can only be linked to organizations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key aspects of Persons and organizations (contacts):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A person can only be linked to one organization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A deal must always have a person or an organization linked to it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both persons and organizations can have multiple deals open for them at the same time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "activities",
      children: "Activities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#activities"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(41850)/* ["default"] */.A) + "",
        title: "Activities ERD",
        width: "1013",
        height: "731"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Activities ERD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[Activities] are any actions a user does towards the closing of a sale. There are different types of activities (ActivityTypes) that can be performed, e.g. a phone call, a meeting or a task. You can have custom activity types and custom fields (ActivityFields) for activities. Users can schedule activities in relation to a person, an organization or a deal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key aspects of activities:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Associating an activity with a deal will also associate the activity with the person and/or organization linked to the deal"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "products",
      children: "Products"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#products"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(13349)/* ["default"] */.A) + "",
        title: "Products ERD",
        width: "941",
        height: "872"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Products ERD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[Products] are goods and/or services that your company deals with. Products can have their own custom fields (ProductFields) and be attached to deals. Persons (contacts) can be added as participants and users can be added as followers for a product."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "users",
      children: "Users"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#users"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "1598",
        src: (__webpack_require__(52248)/* ["default"] */.A) + "",
        title: "Users ERD",
        width: "861",
        height: "627"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Users ERD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Company within fintesk comprises Users who may be grouped into teams. The ERD above depicts how different core and adjacent entities can relate to a company as a whole or users/teams specifically."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users and teams can have their own specific PermissionSets and Roles, which are a part of the visibility groups’ feature. Users can also have their own UserSettings."
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
60817: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/afa01-a04d9d4f7eb006c23a3671c19590e947.webp");

}),
1556: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/afa02-4fcab3f050074a79f83e0a27aa418d9f.webp");

}),
24567: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/afa03-6011ffdbd9ae51f68ea8beab37dc19c0.webp");

}),
41850: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/afa04-10e5cdc6addf5a6df4c8a7ada61eb31f.webp");

}),
13349: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/afa05-e931eef3a7a8048166a0aea07155b402.webp");

}),
52248: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/afa06-cc82d104c5aa057d826aad5d93fb1a0f.webp");

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