const e=document.createElement("div");e.id="container",document.body.append(e);const t=document.createElement("h1");e.append(t);const n=["Welcome","to","Direct Entry Program 13","We are","born to code!"];let o=0,c=0,r=0,d=!1;setInterval(()=>{(d||r++%2==0)&&(t.innerText=n[o].substring(0,d?c--:c++),c===n[o].length+4?(d=!0,c=n[o].length):0===c&&(d=!1,r=0,++o===n.length&&(o=0)))},75);
//# sourceMappingURL=index.46418833.js.map
