"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["3146"], {
52382: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_deals_how_can_i_restore_deleted_deals_md_9dd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-deals-how-can-i-restore-deleted-deals-md-9dd.json
var site_docs_kb_deals_how_can_i_restore_deleted_deals_md_9dd_namespaceObject = JSON.parse('{"id":"kb/deals/how-can-i-restore-deleted-deals","title":"How can I restore deleted deals?","description":"To restore a deleted deal, go into the detail view of that deal and click on the \\"Reopen\\" button found toward the upper-right corner.","source":"@site/docs/kb/deals/how-can-i-restore-deleted-deals.md","sourceDirName":"kb/deals","slug":"/kb/deals/how-can-i-restore-deleted-deals","permalink":"/kb/deals/how-can-i-restore-deleted-deals","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Organizing your data","permalink":"/tags/organizing-your-data"},{"inline":true,"label":"Deals","permalink":"/tags/deals"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1739750400000,"sidebarPosition":6,"frontMatter":{"id":"how-can-i-restore-deleted-deals","title":"How can I restore deleted deals?","sidebar_position":6,"tags":["Organizing your data","Deals"],"last_update":{"date":"2025-02-17T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"How can I move a deal to another pipeline?","permalink":"/kb/deals/how-can-i-move-a-deal-to-another-pipeline"},"next":{"title":"Editing the contact linked to a deal","permalink":"/kb/deals/editing-the-contact-linked-to-a-deal"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/deals/how-can-i-restore-deleted-deals.md


const frontMatter = {
	id: 'how-can-i-restore-deleted-deals',
	title: 'How can I restore deleted deals?',
	sidebar_position: 6,
	tags: [
		'Organizing your data',
		'Deals'
	],
	last_update: {
		date: new Date('2025-02-17T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["To restore a deleted deal, go into the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "detail view"
      }), " of that deal and click on the \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reopen"
      }), "\" button found toward the upper-right corner."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " This action is only available to admin users. The number of open deals you can have depends on which plan you are on."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You can learn more about usage limits in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kb/personal-settings/usage-limits-in-fintesk",
          children: "this article"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This will reopen the deal in the same stage it was in when marked as \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deleted"
      }), "\".\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "mo01",
        src: (__webpack_require__(95390)/* ["default"] */.A) + "",
        width: "1440",
        height: "813"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Deleted deals can be reopened up to 30 days after deletion. After 30 days the deals are permanently deleted and cannot be accessed or reopened."]
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
95390: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/mo01-1119746b8c8e467ac6ba8d5cdccd6182.jpeg");

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