const NUM="252907000000"; // change to your WhatsApp number
const $=id=>document.getElementById(id);
const wa=t=>window.open("https://wa.me/"+NUM+"?text="+encodeURIComponent(t),"_blank");
// hero slider
const sl=[...document.querySelectorAll(".slide")],dots=document.querySelector(".dots");
let cur=0,timer;
sl.forEach((_,i)=>{const b=document.createElement("b");b.onclick=()=>go(i);dots.append(b)});
function go(n){cur=(n+sl.length)%sl.length;sl.forEach((s,i)=>s.classList.toggle("on",i===cur));[...dots.children].forEach((d,i)=>d.classList.toggle("on",i===cur));clearInterval(timer);timer=setInterval(()=>go(cur+1),6500)}
document.querySelector(".prev").onclick=()=>go(cur-1);document.querySelector(".next").onclick=()=>go(cur+1);
go(0);
// collections viewer
const st=$("stage");
document.querySelectorAll(".thumbs button").forEach(b=>b.onclick=()=>{
 document.querySelectorAll(".thumbs button").forEach(x=>x.classList.remove("on"));b.classList.add("on");
 st.classList.add("out");
 setTimeout(()=>{st.src="assets/"+b.dataset.r+".jpg";$("sn").textContent=b.dataset.n;$("sf").textContent=b.dataset.f+" · 60 × 60 cm";st.onload=()=>st.classList.remove("out")},350)});
// calculator
function calc(){
 const A=(+$("L").value||0)*(+$("W").value||0),tot=A*(1+ +$("X").value/100),box=Math.ceil(tot/ +$("T").value);
 $("a").innerHTML=A.toFixed(2)+" <span>m²</span>";$("t").innerHTML=tot.toFixed(2)+" <span>m²</span>";$("bx").innerHTML=box+" <span>Boxes</span>";
 $("bx").classList.remove("bump");void $("bx").offsetWidth;$("bx").classList.add("bump")}
["L","W","T","X"].forEach(i=>$(i).addEventListener("input",calc));
$("cw").onclick=()=>wa(`Tile calculation: room ${$("L").value}m x ${$("W").value}m, tile ${$("T").selectedOptions[0].text}, wastage ${$("X").value}% → ${$("bx").innerText}.`);
$("send").onclick=()=>wa(`Dealer inquiry\nName: ${$("fn").value}\nShop: ${$("fb").value}\nCity: ${$("fc").value}\nPhone: ${$("fp").value}\nNeeds: ${$("fr").value}`);
// reveal + counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
document.querySelectorAll(".cnt").forEach(el=>{let n=0;const t=+el.dataset.n,s=setInterval(()=>{n+=2;if(n>=t){n=t;clearInterval(s)}el.textContent=n+"%"},18)});
// floating buttons
$("waFloat").href="https://wa.me/"+NUM+"?text="+encodeURIComponent("Hello Somware, I would like to inquire about your tiles & sanitaryware.");
const tb=$("toTop");addEventListener("scroll",()=>tb.classList.toggle("show",scrollY>400),{passive:true});
tb.onclick=()=>scrollTo({top:0,behavior:"smooth"});
// mobile menu
const bg=$("burger"),menu=document.querySelector("header nav");
function setMenu(o){menu.classList.toggle("open",o);bg.setAttribute("aria-expanded",o);bg.innerHTML=o?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'}
bg.onclick=()=>setMenu(!menu.classList.contains("open"));
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
addEventListener("resize",()=>{if(innerWidth>900)setMenu(false)});
