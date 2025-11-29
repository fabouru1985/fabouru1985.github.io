"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["3330"], {
55935: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kb_activities_how_can_i_link_my_activities_with_multiple_contact_persons_md_b83_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kb-activities-how-can-i-link-my-activities-with-multiple-contact-persons-md-b83.json
var site_docs_kb_activities_how_can_i_link_my_activities_with_multiple_contact_persons_md_b83_namespaceObject = JSON.parse('{"id":"kb/activities/how-can-i-link-my-activities-with-multiple-contact-persons","title":"How can I link my activities with multiple contact persons?","description":"You can link multiple person contacts to an activity by adding them in the person section of the activity detail view.","source":"@site/docs/kb/activities/how-can-i-link-my-activities-with-multiple-contact-persons.md","sourceDirName":"kb/activities","slug":"/kb/activities/how-can-i-link-my-activities-with-multiple-contact-persons","permalink":"/kb/activities/how-can-i-link-my-activities-with-multiple-contact-persons","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Organizing your data","permalink":"/tags/organizing-your-data"},{"inline":true,"label":"Activities","permalink":"/tags/activities"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1719100800000,"sidebarPosition":3,"frontMatter":{"id":"how-can-i-link-my-activities-with-multiple-contact-persons","title":"How can I link my activities with multiple contact persons?","sidebar_position":3,"tags":["Organizing your data","Activities"],"last_update":{"date":"2024-06-23T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"How can I create activities in bulk?","permalink":"/kb/activities/how-can-i-create-activities-in-bulk"},"next":{"title":"How can I see done activities?","permalink":"/kb/activities/how-can-i-see-done-activities"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/kb/activities/how-can-i-link-my-activities-with-multiple-contact-persons.md


const frontMatter = {
	id: 'how-can-i-link-my-activities-with-multiple-contact-persons',
	title: 'How can I link my activities with multiple contact persons?',
	sidebar_position: 3,
	tags: [
		'Organizing your data',
		'Activities'
	],
	last_update: {
		date: new Date('2024-06-23T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can link multiple person contacts to an activity by adding them in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "person"
      }), " section of the activity detail view."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " An activity can only have one linked deal or organization. However, there is no limit to the number of linked person an activity can have."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "01",
        src: (__webpack_require__(56342)/* ["default"] */.A) + "",
        width: "2538",
        height: "1536"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " If a Fintesk contact is added, the activity will be linked to them and appear in their person detail view."]
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
56342: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/01-ee57827ca080c8134778d94af36659be.jpg");

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