"use strict";
(self["webpackChunkdocs_fintesk_com"] = self["webpackChunkdocs_fintesk_com"] || []).push([["1649"], {
14276: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_users_and_permissions_who_is_the_admin_user_of_my_account_md_e50_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-kb-users-and-permissions-who-is-the-admin-user-of-my-account-md-e50.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_kb_users_and_permissions_who_is_the_admin_user_of_my_account_md_e50_namespaceObject = JSON.parse('{"id":"kb/users-and-permissions/who-is-the-admin-user-of-my-account","title":"¿Quién es el usuario administrador de mi cuenta?","description":"El usuario administrador con acceso \\"Configuración de la cuenta\\" es el primer usuario que configuró la cuenta y los usuarios que asignaron con el rol de administrador desde entonces.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/kb/users-and-permissions/who-is-the-admin-user-of-my-account.md","sourceDirName":"kb/users-and-permissions","slug":"/kb/users-and-permissions/who-is-the-admin-user-of-my-account","permalink":"/es/kb/users-and-permissions/who-is-the-admin-user-of-my-account","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Account settings","permalink":"/es/tags/account-settings"},{"inline":true,"label":"Users and permissions","permalink":"/es/tags/users-and-permissions"}],"version":"current","lastUpdatedBy":"Fabrizzio Andrioli","lastUpdatedAt":1741824000000,"sidebarPosition":8,"frontMatter":{"id":"who-is-the-admin-user-of-my-account","title":"¿Quién es el usuario administrador de mi cuenta?","sidebar_position":8,"tags":["Account settings","Users and permissions"],"last_update":{"date":"2025-03-13T00:00:00.000Z","author":"Fabrizzio Andrioli"}},"sidebar":"tutorialSidebar","previous":{"title":"¿Cómo puedo agregar un usuario?","permalink":"/es/kb/users-and-permissions/how-can-i-add-a-user"},"next":{"title":"Gestión global de usuarios","permalink":"/es/kb/users-and-permissions/global-user-management"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/kb/users-and-permissions/who-is-the-admin-user-of-my-account.md


const frontMatter = {
	id: 'who-is-the-admin-user-of-my-account',
	title: '¿Quién es el usuario administrador de mi cuenta?',
	sidebar_position: '08',
	tags: [
		'Account settings',
		'Users and permissions'
	],
	last_update: {
		date: new Date('2025-03-13T00:00:00.000Z'),
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
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "El usuario administrador con acceso \"Configuración de la cuenta\" es el primer usuario que configuró la cuenta y los usuarios que asignaron con el rol de administrador desde entonces."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si no está seguro de quién es el usuario administrador en su cuenta, por razones de seguridad y para mantener la privacidad del usuario, nuestros agentes de soporte no pueden responder esta pregunta por usted. Desafortunadamente, no hay posibilidad de que nuestro equipo de soporte comparta esta información con usted."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En este caso, una posibilidad sería que revise desde que usuario fue que llegó el correo electrónico de invitación a Fintesk. En muchos casos, este usuario seguirá siendo el usuario administrador."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "De lo contrario, deberá comunicarse con su gerente, supervisor, administrador de TI o colegas para averiguar quién es el usuario administrador en la cuenta."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nota"
        }), ": El creador original de la cuenta se le dará al acceso a la cuenta en forma de administrador, sin embargo, este estado se puede eliminar u otorgarse a otros usuarios."]
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