import{_ as a,c as n,o as e,a as r}from"./app.07f874f7.js";const u=JSON.parse('{"title":"Trojan\u7684\u6784\u5EFA\u53CA\u5E94\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"V2Ray \u548C Trojan \u7684\u533A\u522B","slug":"v2ray-\u548C-trojan-\u7684\u533A\u522B","link":"#v2ray-\u548C-trojan-\u7684\u533A\u522B","children":[{"level":3,"title":"Trojan \u6BD4 V2Ray \u66F4\u5B89\u5168?","slug":"trojan-\u6BD4-v2ray-\u66F4\u5B89\u5168","link":"#trojan-\u6BD4-v2ray-\u66F4\u5B89\u5168","children":[]},{"level":3,"title":"Trojan \u6BD4 V2Ray \u66F4\u5FEB?","slug":"trojan-\u6BD4-v2ray-\u66F4\u5FEB","link":"#trojan-\u6BD4-v2ray-\u66F4\u5FEB","children":[]}]},{"level":2,"title":"Trojan \u7684\u90E8\u7F72","slug":"trojan-\u7684\u90E8\u7F72","link":"#trojan-\u7684\u90E8\u7F72","children":[{"level":3,"title":"\u90E8\u7F72 Nginx / SSL","slug":"\u90E8\u7F72-nginx-ssl","link":"#\u90E8\u7F72-nginx-ssl","children":[]},{"level":3,"title":"\u5B89\u88C5 Trojan","slug":"\u5B89\u88C5-trojan","link":"#\u5B89\u88C5-trojan","children":[]},{"level":3,"title":"\u542F\u52A8 Trojan","slug":"\u542F\u52A8-trojan","link":"#\u542F\u52A8-trojan","children":[]}]},{"level":2,"title":"Trojan \u548C Nginx \u5171\u7528 80 \u7AEF\u53E3","slug":"trojan-\u548C-nginx-\u5171\u7528-80-\u7AEF\u53E3","link":"#trojan-\u548C-nginx-\u5171\u7528-80-\u7AEF\u53E3","children":[]},{"level":2,"title":"Trojan \u548C Nginx \u5171\u7528 443 \u7AEF\u53E3","slug":"trojan-\u548C-nginx-\u5171\u7528-443-\u7AEF\u53E3","link":"#trojan-\u548C-nginx-\u5171\u7528-443-\u7AEF\u53E3","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"server/build-trojan.md"}'),l={name:"server/build-trojan.md"},o=r(`<h1 id="trojan\u7684\u6784\u5EFA\u53CA\u5E94\u7528" tabindex="-1">Trojan\u7684\u6784\u5EFA\u53CA\u5E94\u7528 <a class="header-anchor" href="#trojan\u7684\u6784\u5EFA\u53CA\u5E94\u7528" aria-hidden="true">#</a></h1><h2 id="v2ray-\u548C-trojan-\u7684\u533A\u522B" tabindex="-1">V2Ray \u548C Trojan \u7684\u533A\u522B <a class="header-anchor" href="#v2ray-\u548C-trojan-\u7684\u533A\u522B" aria-hidden="true">#</a></h2><h3 id="trojan-\u6BD4-v2ray-\u66F4\u5B89\u5168" tabindex="-1">Trojan \u6BD4 V2Ray \u66F4\u5B89\u5168? <a class="header-anchor" href="#trojan-\u6BD4-v2ray-\u66F4\u5B89\u5168" aria-hidden="true">#</a></h3><p>V2Ray \u7684 WS + TLS \u534F\u8BAE\u8DDF Trojan \u5DEE\u4E0D\u591A, \u5982\u679C\u4F7F\u7528\u7B2C\u4E09\u65B9\u76D1\u542C\u5DE5\u5177\u68C0\u6D4B, \u8FD9\u4E24\u8005\u7684\u6D41\u91CF\u548C\u666E\u901A\u6D41\u91CF\u8868\u73B0\u5747\u4E00\u81F4, \u8FD9\u662F\u4E24\u8005\u7684\u5171\u6027.</p><h3 id="trojan-\u6BD4-v2ray-\u66F4\u5FEB" tabindex="-1">Trojan \u6BD4 V2Ray \u66F4\u5FEB? <a class="header-anchor" href="#trojan-\u6BD4-v2ray-\u66F4\u5FEB" aria-hidden="true">#</a></h3><p>Trojan \u7684\u539F\u7406\u662F\u76F4\u63A5\u6A21\u4EFF\u4E92\u8054\u7F51\u6700\u5B89\u5168\u7684\u534F\u8BAE <code>https</code>\u6240\u4EE5\u5B83\u5728\u52A0\u89E3\u5BC6\u7684\u73AF\u8282\u66F4\u8FC5\u901F, \u8FD9\u662F\u7531\u534F\u8BAE\u672C\u8EAB\u51B3\u5B9A\u7684. V2Ray \u5728\u4F7F\u7528 WS + TLS \u4F20\u8F93\u7684\u8FC7\u7A0B\u4E2D\u8FDB\u884C\u4E86\u4E24\u6B21\u52A0\u5BC6. \u4EC5\u4ECE\u771F\u6B63\u7684\u6D41\u91CF\u7684\u4F20\u8F93\u901F\u5EA6\u6765\u770B, Trojan \u5728\u539F\u7406\u4E0A\u5FEB\u4E8E V2Ray, \u53EA\u56E0 Trojan \u66F4\u7B80\u5355.</p><h2 id="trojan-\u7684\u90E8\u7F72" tabindex="-1">Trojan \u7684\u90E8\u7F72 <a class="header-anchor" href="#trojan-\u7684\u90E8\u7F72" aria-hidden="true">#</a></h2><h3 id="\u90E8\u7F72-nginx-ssl" tabindex="-1">\u90E8\u7F72 Nginx / SSL <a class="header-anchor" href="#\u90E8\u7F72-nginx-ssl" aria-hidden="true">#</a></h3><p>\u8FD9\u91CC\u91C7\u7528\u7684\u662F <code>\u5B9D\u5854\u8FD0\u7EF4\u5DE5\u5177</code>:</p><ol><li>\u5C06\u57DF\u540D\u6307\u5411\u5230\u65B0\u521B\u5EFA\u7684\u7AD9\u70B9;</li><li>\u7533\u8BF7 <code>Let&#39;s encrtypt \u8BC1\u4E66</code>\u5E76\u8BBE\u7F6E\u4E3A\u5230\u671F\u81EA\u52A8\u7EED\u7EA6;</li><li>\u8BB0\u5F55 SSL \u8BC1\u4E66\u4F4D\u7F6E, \u9ED8\u8BA4\u5728 <code>/www/server/panel/vhost/cert/</code>\u76EE\u5F55\u5185;</li><li>SSL \u8BC1\u4E66\u66F4\u540D: fullchain.pem -&gt; fullchain.crt | privkey.pem -&gt; privkey.key</li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cp fullchain.pem fullchain.crt</span></span>
<span class="line"><span style="color:#A6ACCD;">cp privkey.pem privkey.key</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5B89\u88C5-trojan" tabindex="-1">\u5B89\u88C5 Trojan <a class="header-anchor" href="#\u5B89\u88C5-trojan" aria-hidden="true">#</a></h3><ol><li>\u4E0B\u8F7D\u5E76\u5B89\u88C5 Trojan, \u5982\u679C\u65E0\u6CD5\u8BBF\u95EE\u8282\u70B9, \u53EF\u7528\u8FC7\u62F7\u8D1D or wget \u7B49\u65B9\u5F0F\u81EA\u884C\u89E3\u51B3:</li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/trojan-gfw/trojan-quickstart/master/trojan-quickstart.sh)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 <code>/usr/local/etc/trojan/config.json</code>, \u91CD\u70B9\u5173\u6CE8\u4EE5\u4E0B\u5B57\u6BB5: <ol><li><code>local_port</code>: \u76D1\u542C\u7684\u7AEF\u53E3, \u9ED8\u8BA4\u662F 443, \u4E0D\u5EFA\u8BAE\u4FEE\u6539\u6210\u5176\u4ED6\u7AEF\u53E3</li><li><code>remote_addr</code>\u548C <code>remote_port</code>: \u975E trojan \u534F\u8BAE\u65F6, \u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230\u8FD9\u4E2A\u5730\u5740\u548C\u7AEF\u53E3, \u9ED8\u8BA4\u662F\u672C\u673A\u5730\u5740\u548C 80 \u7AEF\u53E3</li><li><code>password</code>: \u5BC6\u7801, \u9700\u8981\u51E0\u4E2A\u5BC6\u7801\u586B\u5199\u51E0\u884C, <strong>\u6700\u540E\u4E00\u884C\u7ED3\u5C3E\u4E0D\u53EF\u4EE5\u52A0\u9017\u53F7</strong></li><li><code>cert</code>\u548C <code>key</code>: \u57DF\u540D\u8BC1\u4E66\u548C\u5BC6\u94A5, \u6CE8\u610F\u5728\u8FD0\u7EF4\u5DE5\u5177\u4E2D\u67E5\u770B\u8BC1\u4E66\u5730\u5740</li><li><code>key_password</code>: \u8BC1\u4E66\u7684\u5BC6\u7801, \u9ED8\u8BA4\u662F\u6CA1\u6709\u7684, \u5982\u679C\u6709\u5C31\u586B\u4E0A</li><li><code>alpn</code>: \u5EFA\u8BAE\u586B\u4E24\u884C http/1.1 \u548C h2, \u4FDD\u6301\u9ED8\u8BA4\u4E5F\u6CA1\u95EE\u9898</li></ol></li></ol><h3 id="\u542F\u52A8-trojan" tabindex="-1">\u542F\u52A8 Trojan <a class="header-anchor" href="#\u542F\u52A8-trojan" aria-hidden="true">#</a></h3><ol><li>\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">systemctl enable trojan</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>\u542F\u52A8 trojan</li></ol><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">systemctl start trojan</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li>\u5982\u679C\u65E0\u6CD5\u542F\u52A8 Trojan \u8BF7\u68C0\u67E5\u4E00\u4E0B\u51E0\u70B9: <ol><li>\u914D\u7F6E\u4FE1\u606F, \u662F\u5426\u6709\u9519\u8BEF\u7684\u683C\u5F0F</li><li>nginx \u662F\u5426\u5360\u7528\u4E86 443 \u7AEF\u53E3</li></ol></li></ol><h2 id="trojan-\u548C-nginx-\u5171\u7528-80-\u7AEF\u53E3" tabindex="-1">Trojan \u548C Nginx \u5171\u7528 80 \u7AEF\u53E3 <a class="header-anchor" href="#trojan-\u548C-nginx-\u5171\u7528-80-\u7AEF\u53E3" aria-hidden="true">#</a></h2><h2 id="trojan-\u548C-nginx-\u5171\u7528-443-\u7AEF\u53E3" tabindex="-1">Trojan \u548C Nginx \u5171\u7528 443 \u7AEF\u53E3 <a class="header-anchor" href="#trojan-\u548C-nginx-\u5171\u7528-443-\u7AEF\u53E3" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 SNI \u5B83\u8981\u6C42\u5728\u4E00\u4E2A IP \u6709\u591A\u4E2A TLS \u670D\u52A1\u7AD9\u70B9\u7684\u60C5\u51B5\u4E0B, \u5BA2\u6237\u7AEF\u5728\u521D\u59CB TLS \u63E1\u624B\u671F\u95F4\u6307\u5B9A\u8981\u8FDE\u63A5\u7684\u7AD9\u70B9. Nginx \u652F\u6301\u57FA\u4E8E SNI \u7684 4 \u5C42\u8F6C\u53D1, \u8BC6\u522B SNI \u4FE1\u606F</p><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ol><li><a href="https://www.v2rayssr.com/trojanwordpress.html" target="_blank" rel="noreferrer">Trojan+Nginx+WordPress\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u5171\u7528443\u7AEF\u53E3\uFF01\u6240\u6709\u8BBF\u95EE\u5168\u90E8\u5F00\u542FHTTPS\uFF0CTrojan\u7EC8\u6781\u4F2A\u88C5\uFF01</a></li><li><a href="https://www.chengxiaobai.com/trouble-maker/trojan-shared-443-port-scheme" target="_blank" rel="noreferrer">Trojan \u5171\u7528 443 \u7AEF\u53E3\u65B9\u6848</a>(\u539F\u7406\u6E05\u6670 + \u5B9E\u8DF5)</li></ol>`,26),t=[o];function s(i,c,d,h,p,j){return e(),n("div",null,t)}const y=a(l,[["render",s]]);export{u as __pageData,y as default};
