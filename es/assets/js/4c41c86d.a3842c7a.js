"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["775"], {
73426: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_getting_started_organization_vs_company_account_md_4c4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-kb-getting-started-organization-vs-company-account-md-4c4.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_getting_started_organization_vs_company_account_md_4c4_namespaceObject = JSON.parse('{"id":"kb/getting-started/organization-vs-company-account","title":"Organización vs. cuenta de la empresa","description":"Cuando se crea una cuenta de Fintesk, se crean una cuenta de usuario y la propia cuenta de la empresa.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/kb/getting-started/organization-vs-company-account.md","sourceDirName":"kb/getting-started","slug":"/kb/getting-started/organization-vs-company-account","permalink":"/es/kb/getting-started/organization-vs-company-account","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Getting started","permalink":"/es/tags/getting-started"},{"inline":true,"label":"Basic concepts","permalink":"/es/tags/basic-concepts"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741046400000,"sidebarPosition":4,"frontMatter":{"id":"organization-vs-company-account","title":"Organización vs. cuenta de la empresa","sidebar_position":4,"tags":["Getting started","Basic concepts"],"last_update":{"date":"2025-03-04T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"Interfaz Fintesk","permalink":"/es/kb/getting-started/interface-in-fintesk"},"next":{"title":"¿Cuál es la diferencia entre un usuario y un asiento?","permalink":"/es/kb/getting-started/what-is-the-difference-between-a-user-and-a-seat"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/kb/getting-started/organization-vs-company-account.md


const frontMatter = {
	id: 'organization-vs-company-account',
	title: 'Organización vs. cuenta de la empresa',
	sidebar_position: 4,
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



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Cuando se crea una cuenta de Fintesk, se crean una cuenta de usuario y la propia cuenta de la empresa."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Esa cuenta de la compañía es ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "su"
      }), " empresa, y puede invitar a sus colegas de trabajo a unirse a usted como ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../kb/users-and-permissions/users",
        children: "usuarios"
      }), " para acceder a la misma base de datos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sin embargo, no tiene que crear una cuenta de compañía nueva para usar Fintesk. Si conoce a alguien que ya tiene una cuenta, puede invitarlo a unirse a su empresa."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si está invitado, el propietario de la compañía u otros usuarios decidirá el tipo de acceso al que y los privilegios de datos y de cuenta."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota"
        }), ": Si no tiene acceso a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Administración de usuarios"
        }), ", o no sabe qué tipo de usuario es, comuníquese con el administrador de su cuenta."]
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