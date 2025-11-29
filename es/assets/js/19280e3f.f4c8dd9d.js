"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["2186"], {
2972: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_getting_started_fintesk_user_vs_company_account_md_192_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-kb-getting-started-fintesk-user-vs-company-account-md-192.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_getting_started_fintesk_user_vs_company_account_md_192_namespaceObject = JSON.parse('{"id":"kb/getting-started/fintesk-user-vs-company-account","title":"Usuario de Fintesk vs. Cuenta de la empresa","description":"Cuando se crea una cuenta de Fintesk, se crean una cuenta de usuario y una cuenta de la empresa.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/kb/getting-started/fintesk-user-vs-company-account.md","sourceDirName":"kb/getting-started","slug":"/kb/getting-started/fintesk-user-vs-company-account","permalink":"/es/kb/getting-started/fintesk-user-vs-company-account","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/es/tags/getting-started"},{"inline":true,"label":"Basic concepts","permalink":"/es/tags/basic-concepts"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741910400000,"sidebarPosition":8,"frontMatter":{"id":"fintesk-user-vs-company-account","title":"Usuario de Fintesk vs. Cuenta de la empresa","sidebar_position":8,"tags":["Getting started","Basic concepts"],"last_update":{"date":"2025-03-14T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"¿Cómo puedo eliminar los elementos en Fintesk?","permalink":"/es/kb/getting-started/how-can-i-delete-items-in-fintesk"},"next":{"title":"Exporting Data","permalink":"/es/category/exporting-data"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/kb/getting-started/fintesk-user-vs-company-account.md


const frontMatter = {
	id: 'fintesk-user-vs-company-account',
	title: 'Usuario de Fintesk vs. Cuenta de la empresa',
	sidebar_position: '08',
	tags: [
		'Getting started',
		'Basic concepts'
	],
	last_update: {
		date: new Date('2025-03-14T00:00:00.000Z'),
		author: 'Fabrizzio Andrioli'
	}
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Cuando se crea una cuenta de Fintesk, se crean una cuenta de usuario y una cuenta de la empresa."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La cuenta de usuario es un usuario específico, por ejemplo, Bombo Fica, que accede a Fintesk utilizando sus credenciales de inicio de sesión."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La cuenta de la compañía, por ejemplo, Cocoleruz.- Es la base de datos de información a la que los usuarios acceden dentro de Fintesk, y pueden contener muchos usuarios diferentes."
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