"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8496],{13149:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var t=n(24246),o=n(71670);const a={sidebar_position:4},s="Static methods",d={id:"api/plugin-methods/static-methods",title:"Static methods",description:"Static methods are not part of the plugin instance\u2014they are attached to the constructor function. These methods are used to validate and normalize the plugin options and theme config, which are then used as constructor parameters to initialize the plugin instance.",source:"@site/docs/api/plugin-methods/static-methods.mdx",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/static-methods",permalink:"/docs/api/plugin-methods/static-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugin-methods/static-methods.mdx",tags:[],version:"current",lastUpdatedBy:"Dhaya",lastUpdatedAt:1718898027e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"api",previous:{title:"I18n lifecycles",permalink:"/docs/api/plugin-methods/i18n-lifecycles"},next:{title:"Plugins overview",permalink:"/docs/api/plugins"}},l={},c=[{value:"<code>validateOptions({options, validate})</code>",id:"validateOptions",level:2},{value:"<code>options</code>",id:"options",level:3},{value:"<code>validate</code>",id:"validate",level:3},{value:"<code>validateThemeConfig({themeConfig, validate})</code>",id:"validateThemeConfig",level:2},{value:"<code>themeConfig</code>",id:"themeConfig",level:3},{value:"<code>validate</code>",id:"validate-1",level:3}];function r(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"static-methods",children:"Static methods"}),"\n",(0,t.jsx)(i.p,{children:"Static methods are not part of the plugin instance\u2014they are attached to the constructor function. These methods are used to validate and normalize the plugin options and theme config, which are then used as constructor parameters to initialize the plugin instance."}),"\n",(0,t.jsx)(i.h2,{id:"validateOptions",children:(0,t.jsx)(i.code,{children:"validateOptions({options, validate})"})}),"\n",(0,t.jsx)(i.p,{children:"Returns validated and normalized options for the plugin. This method is called before the plugin is initialized. You must return the options since they will be passed to the plugin during initialization."}),"\n",(0,t.jsx)(i.h3,{id:"options",children:(0,t.jsx)(i.code,{children:"options"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"validateOptions"})," is called with ",(0,t.jsx)(i.code,{children:"options"})," passed to plugin for validation and normalization."]}),"\n",(0,t.jsx)(i.h3,{id:"validate",children:(0,t.jsx)(i.code,{children:"validate"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"validateOptions"})," is called with ",(0,t.jsx)(i.code,{children:"validate"})," function which takes a ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"https://www.npmjs.com/package/joi",children:"Joi"})})," schema and options as the arguments, returns validated and normalized options. ",(0,t.jsx)(i.code,{children:"validate"})," will automatically handle error and validation config."]}),"\n",(0,t.jsxs)(i.admonition,{type:"tip",children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://www.npmjs.com/package/joi",children:"Joi"})," is recommended for validation and normalization of options."]}),(0,t.jsxs)(i.p,{children:["To avoid mixing Joi versions, use ",(0,t.jsx)(i.code,{children:"import {Joi} from '@docusaurus/utils-validation'"})]})]}),"\n",(0,t.jsxs)(i.p,{children:["If you don't use ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"https://www.npmjs.com/package/joi",children:"Joi"})})," for validation you can throw an Error in case of invalid options and return options in case of success."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",metastring:'title="my-plugin/src/index.js"',children:"export default function myPlugin(context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\n// highlight-start\nexport function validateOptions({options, validate}) {\n  const validatedOptions = validate(myValidationSchema, options);\n  return validatedOptions;\n}\n// highlight-end\n"})}),"\n",(0,t.jsx)(i.h2,{id:"validateThemeConfig",children:(0,t.jsx)(i.code,{children:"validateThemeConfig({themeConfig, validate})"})}),"\n",(0,t.jsx)(i.p,{children:"Return validated and normalized configuration for the theme."}),"\n",(0,t.jsx)(i.h3,{id:"themeConfig",children:(0,t.jsx)(i.code,{children:"themeConfig"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"validateThemeConfig"})," is called with ",(0,t.jsx)(i.code,{children:"themeConfig"})," provided in ",(0,t.jsx)(i.code,{children:"docusaurus.config.js"})," for validation and normalization."]}),"\n",(0,t.jsx)(i.h3,{id:"validate-1",children:(0,t.jsx)(i.code,{children:"validate"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"validateThemeConfig"})," is called with ",(0,t.jsx)(i.code,{children:"validate"})," function which takes a ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"https://www.npmjs.com/package/joi",children:"Joi"})})," schema and ",(0,t.jsx)(i.code,{children:"themeConfig"})," as the arguments, returns validated and normalized options. ",(0,t.jsx)(i.code,{children:"validate"})," will automatically handle error and validation config."]}),"\n",(0,t.jsxs)(i.admonition,{type:"tip",children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://www.npmjs.com/package/joi",children:"Joi"})," is recommended for validation and normalization of theme config."]}),(0,t.jsxs)(i.p,{children:["To avoid mixing Joi versions, use ",(0,t.jsx)(i.code,{children:"import {Joi} from '@docusaurus/utils-validation'"})]})]}),"\n",(0,t.jsxs)(i.p,{children:["If you don't use ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"https://www.npmjs.com/package/joi",children:"Joi"})})," for validation you can throw an Error in case of invalid options."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",metastring:'title="my-theme/src/index.js"',children:"export default function myPlugin(context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // rest of methods\n  };\n}\n\n// highlight-start\nexport function validateThemeConfig({themeConfig, validate}) {\n  const validatedThemeConfig = validate(myValidationSchema, options);\n  return validatedThemeConfig;\n}\n// highlight-end\n"})})]})}function h(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},71670:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>s});var t=n(27378);const o={},a=t.createContext(o);function s(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);