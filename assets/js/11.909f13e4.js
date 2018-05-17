(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{60:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"serve-dashboard-through-ingress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serve-dashboard-through-ingress","aria-hidden":"true"}},[t._v("#")]),t._v(" Serve dashboard through Ingress")]),a("p",[t._v("If you want to server HTTPS version of Dashboard, which is recommended, you need to create secret with "),a("code",[t._v("tls.crt")]),t._v(" and "),a("code",[t._v("tls.key")]),t._v(" data.")]),a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Secret\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" certs"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dashboard\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Opaque\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("data")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("tls.crt")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <base64_cert_here"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("tls.key")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <base64_private_key_here"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n")])]),a("p",[t._v("If you want to secure your dashboard with Nginx basic auth you need to create secret:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("sh -c "),a("span",{attrs:{class:"token string"}},[t._v("\"echo -n '<username>:' >> basic_auth\"")]),t._v("\nsh -c "),a("span",{attrs:{class:"token string"}},[t._v('"openssl passwd -apr1 >> basic_auth"')]),t._v("\nkubectl create secret generic basic-auth-dashboard --from-file"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("basic_auth --namespace"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("kube-system\n")])]),a("p",[t._v("After that you could create an "),a("code",[t._v("Ingress")]),t._v(" object:")]),a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" extensions/v1beta1\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ingress\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dashboard"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("annotations")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/secure-backends")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/auth-type")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" basic\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/auth-secret")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" basic"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("auth"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dashboard\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/auth-realm")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Authentication Required"')]),t._v("\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("tls")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token key atrule"}},[t._v("hosts")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" <subdomain_for_dashboard"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v("secretName")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" certs"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dashboard\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("rules")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <subdomain_for_dashboard"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v("http")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /\n          "),a("span",{attrs:{class:"token key atrule"}},[t._v("backend")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{attrs:{class:"token key atrule"}},[t._v("serviceName")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kubernetes"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dashboard\n            "),a("span",{attrs:{class:"token key atrule"}},[t._v("servicePort")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("443")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);