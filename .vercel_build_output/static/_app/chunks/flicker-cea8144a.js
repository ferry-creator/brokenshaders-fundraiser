const y=(n,e,{stops:d=[],font_size:m=20}={})=>{const L=n.getContext("2d"),i=e.getContext("2d"),x=700,C=I();let l=Math.round(C/m/(C>x?4:1));const g=25;let t=l*g;n.width=l,n.height=1,e.width=t*2,e.height=1;let o=i.createLinearGradient(0,0,t,0);for(let h=0;h<d.length;h++){const w=h/d.length;o.addColorStop(w,d[h])}i.fillStyle=o,i.fillRect(0,0,t,1),i.drawImage(e,t,0,e.width,1);let r=0,a=1;const S=()=>{requestAnimationFrame(S),L.drawImage(e,r,0,t/g,1,0,0,n.width,1),r>=t&&(a=-1),r<=0&&(a=1),r+=a};S(),window.addEventListener("resize",h=>{const w=I();l=Math.round(w/m/(w>x?4:2)),t=l*g,n.width=l,e.width=t*2,o=i.createLinearGradient(0,0,t,0);for(let c=0;c<d.length;c++){const k=c/d.length;o.addColorStop(k,d[c])}i.fillStyle=o,i.fillRect(0,0,t,1),i.drawImage(e,t,0,e.width,1),r=0,a=1})},I=()=>window.innerWidth;export{y as default};