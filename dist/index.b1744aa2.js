let t;const e=[];for(let t=0;t<50;t++){let t=document.createElement("div"),o=10+40*Math.random(),s=Math.random()*(innerWidth-o),a=Math.random()*(innerHeight-o),f=(5+10*Math.random())*(.5>Math.random()?-1:1),d=(5+10*Math.random())*(.5>Math.random()?-1:1);t.style.position="absolute",t.style.left=`${s}px`,t.style.top=`${a}px`,t.style.width=`${o}px`,t.style.height=`${o}px`,t.style.borderRadius=`${50*Math.random()}%`,t.style.transform=`rotate(${360*Math.random()}deg)`;let n=256*Math.random(),l=256*Math.random(),r=256*Math.random();t.style.backgroundColor=`rgba(${n},${l},${r}, ${.5+Math.random()})`,document.body.append(t),e.push({particle:t,size:o,dx:f,dy:d})}setInterval(()=>{for(let t of e){let{dx:e,dy:s,size:a,particle:f}=t;if(f.style.left=`${f.offsetLeft+e}px`,f.style.top=`${f.offsetTop+s}px`,(f.offsetTop+a>=innerHeight||f.offsetTop<=0)&&(t.dy=-s),(f.offsetLeft+a>=innerWidth||f.offsetLeft<=0)&&(t.dx=-e),"0"===o.style.opacity)continue;let d=a/2,n=o.offsetWidth/2,l=f.offsetLeft+d,r=f.offsetTop+d,i=o.offsetLeft+n,p=Math.hypot(i-l,o.offsetTop+n-r);p<=d+n&&(t.dx=-e,t.dy=-s,f.style.left=`${f.offsetLeft+(d+n-p)*(t.dx<0?-1:1)}px`,f.style.top=`${f.offsetTop+(d+n-p)*(t.dy<0?-1:1)}px`)}},50);const o=document.createElement("div");o.classList.add("cursor"),document.body.append(o),addEventListener("mousemove",e=>{t&&clearTimeout(t),o.style.opacity="1",o.style.left=`${e.clientX-o.offsetWidth/2}px`,o.style.top=`${e.clientY-o.offsetHeight/2}px`,t=setTimeout(()=>{o.style.opacity=0},5e3)}),addEventListener("mouseout",()=>{o.style.opacity="0"});
//# sourceMappingURL=index.b1744aa2.js.map
