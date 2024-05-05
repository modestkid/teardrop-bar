(function(opts_) {
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  'use strict';
  var f = this || self;

  function g(a) {
    return a;
  };
  var h;

  function k(a, b) {
    this.h = a === l && b || "";
    this.g = m
  }

  function n(a) {
    return a instanceof k && a.constructor === k && a.g === m ? a.h : "type_error:Const"
  }
  var m = {},
    l = {};

  function p(a, b) {
    this.h = b === q ? a : ""
  }
  p.prototype.toString = function() {
    return this.h + ""
  };

  function r(a) {
    return a instanceof p && a.constructor === p ? a.h : "type_error:TrustedResourceUrl"
  }

  function u(a, b) {
    var c = n(a);
    if (!v.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
    a = c.replace(w, function(d, e) {
      if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
      d = b[e];
      return d instanceof k ? n(d) : encodeURIComponent(String(d))
    });
    return x(a)
  }
  var w = /%{(\w+)}/g,
    v = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
    y = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;

  function z(a) {
    var b = A;
    a = u(B, a);
    a = y.exec(r(a).toString());
    var c = a[3] || "";
    return x(a[1] + C("?", a[2] || "", b) + C("#", c)); // Removed the part that appends `/#gsc.tab=0`
  }
  var q = {};

  function x(a) {
    if (void 0 === h) {
      var b = null;
      var c = f.trustedTypes;
      if (c && c.createPolicy) {
        try {
          b = c.createPolicy("goog#html", {
            createHTML: g,
            createScript: g,
            createScriptURL: g
          })
        } catch (d) {
          f.console && f.console.error(d.message)
        }
        h = b
      } else h = b
    }
    a = (b = h) ? b.createScriptURL(a) : a;
    return new p(a, q)
  }

  function C(a, b, c) {
    if (null == c) return b;
    if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
    for (var d in c)
      if (Object.prototype.hasOwnProperty.call(c, d)) {
        var e = c[d];
        e = Array.isArray(e) ? e : [e];
        for (var t = 0; t < e.length; t++) {
          var D = e[t];
          null != D && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(D)))
        }
      }
    return b
  };
  /* ... Rest of the code remains unchanged ... */
})({
  "cx": "700b07b000b9a460c",
  "language": "en",
  "theme": "V2_DEFAULT",
  "uiOptions": {
    "resultsUrl": "",
    "enableAutoComplete": true,
    "enableImageSearch": true,
    "imageSearchLayout": "popup",
    "resultSetSize": "filtered_cse",
    "enableOrderBy": true,
    "orderByOptions": [{
      "label": "Relevance",
      "key": ""
    }, {
      "label": "Date",
      "key": "date"
    }],
    "overlayResults": false,
    "webSearchResultSetSize": 0,
    "webSearchExtendedRestricts": {
      "lr": "",
      "cr": "",
      "gl": "",
      "filter": 0,
      "sort": "",
      "as_oq": "",
      "as_sitesearch": ""
    },
    "queryParameterName": "q",
    "enableHistory": true,
    "numTopRefinements": -1,
    "enableRichSnippets": false,
    "hideElementBranding": true,
    "cssThemeVersion": 4,
    "isSafeSearchActive": false,
    "numTopAds": 3
  },
  "protocol": "https",
  "rawCss": ".gsc-control-cse{font-family:arial, sans-serif}.gsc-control-cse .gsc-table-result{font-family:arial, sans-serif}.gsc-refinementsGradient{background:linear-gradient(to left,rgba(255,255,255,1),rgba(255,255,255,0))}.gsc-control-cse{border-color:#FFFFFF;background-color:#FFFFFF}input.gsc-input,.gsc-input-box,.gsc-input-box-hover,.gsc-input-box-focus{border-color:#DFE1E5}.gsc-search-button-v2,.gsc-search-button-v2:hover,.gsc-search-button-v2:focus{border-color:#3079ED;background-color:#4D90FE;background-image:none;filter:none}.gsc-search-button-v2 svg{fill:#FFFFFF}.gsc-tabHeader.gsc-tabhActive,.gsc-refinementHeader.gsc-refinementhActive{color:#1A73E8;border-color:#1A73E8;background-color:#FFFFFF}.gsc-tabHeader.gsc-tabhInactive,.gsc-refinementHeader.gsc-refinementhInactive{color:#666666;border-color:#666666;background-color:#FFFFFF}.gsc-webResult.gsc-result,.gsc-results .gsc-imageResult{border-color:#FFFFFF;background-color:#FFFFFF}.gsc-webResult.gsc-result:hover{border-color:#FFFFFF;background-color:#FFFFFF}.gs-webResult.gs-result a.gs-title:link,.gs-webResult.gs-result a.gs-title:link b,.gs-imageResult a.gs-title:link,.gs-imageResult a.gs-title:link b{color:#1155CC}.gs-webResult.gs-result a.gs-title:visited,.gs-webResult.gs-result a.gs-title:visited b,.gs-imageResult a.gs-title:visited,.gs-imageResult a.gs-title:visited b{color:#1155CC}.gs-webResult.gs-result a.gs-title:hover,.gs-webResult.gs-result a.gs-title:hover b,.gs-imageResult a.gs-title:hover,.gs-imageResult a.gs-title:hover b{color:#1155CC}.gs-webResult.gs-result a.gs-title:active,.gs-webResult.gs-result a.gs-title:active b,.gs-imageResult a.gs-title:active,.gs-imageResult a.gs-title:active b{color:#1155CC}.gsc-cursor-page{color:#1155CC}a.gsc-trailing-more-results:link{color:#1155CC}.gs-webResult:not(.gs-no-results-result):not(.gs-error-result) .gs-snippet,.gs-fileFormatType{color:#333333}.gs-webResult div.gs-visibleUrl{color:#009933}.gs-webResult div.gs-visibleUrl-short{color:#009933}.gs-webResult div.gs-visibleUrl-short{display:none}.gs-webResult div.gs-visibleUrl-long{display:none}.gs-webResult div.gs-visibleUrl-breadcrumb{display:block}.gs-promotion div.gs-visibleUrl-short{display:none}.gs-promotion div.gs-visibleUrl-long{display:block}.gs-promotion div.gs-visibleUrl-breadcrumb{display:none}.gsc-cursor-box{border-color:#FFFFFF}.gsc-results .gsc-cursor-box .gsc-cursor-page{border-color:#666666;background-color:#FFFFFF;color:#666666}.gsc-results .gsc-cursor-box .gsc-cursor-current-page{border-color:#1A73E8;background-color:#FFFFFF;color:#1A73E8}.gsc-webResult.gsc-result.gsc-promotion{border-color:#FFFFFF;background-color:#F6F6F6}.gsc-completion-title{color:#1155CC}.gsc-completion-snippet{color:#333333}.gs-promotion a.gs-title:link,.gs-promotion a.gs-title:link *,.gs-promotion .gs-snippet a:link{color:#1155CC}.gs-promotion a.gs-title:visited,.gs-promotion a.gs-title:visited *,.gs-promotion .gs-snippet a:visited{color:#1155CC}.gs-promotion a.gs-title:hover,.gs-promotion a.gs-title:hover *,.gs-promotion .gs-snippet a:hover{color:#1155CC}.gs-promotion a.gs-title:active,.gs-promotion a.gs-title:active *,.gs-promotion .gs-snippet a:active{color:#1155CC}.gs-promotion .gs-snippet,.gs-promotion .gs-title .gs-promotion-title-right,.gs-promotion .gs-title .gs-promotion-title-right *{color:#333333}.gs-promotion .gs-visibleUrl,.gs-promotion .gs-visibleUrl-short{color:#009933}.gcsc-find-more-on-google{color:#1155CC}.gcsc-find-more-on-google-magnifier{fill:#1155CC}",
  "cse_token": "AB-tC_5A0ZGX_1nCm1BRpsGyIX6R:1714879413776",
  "isHostedPage": false,
  "exp": ["cc"],
  "cselibVersion": "8435450f13508ca1",
  "usqp": "CAI\u003d",
  "fexp": [72519171, 72519168]
});
