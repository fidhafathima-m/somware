const NUM="252907000000";
const wa=t=>window.open("https://wa.me/"+NUM+"?text="+encodeURIComponent(t),"_blank");
const $=id=>document.getElementById(id);
function calc(){
 const A=(+$("L").value||0)*(+$("W").value||0), tot=A*(1+ +$("X").value/100), box=Math.ceil(tot/ +$("T").value);
 $("a").innerHTML=A.toFixed(2)+" <span>m²</span>";$("t").innerHTML=tot.toFixed(2)+" <span>m²</span>";
 $("bx").innerHTML=box+" <span>Boxes</span>";
 $("bx").classList.remove("bump");void $("bx").offsetWidth;$("bx").classList.add("bump");
}
["L","W","T","X"].forEach(i=>$(i).addEventListener("input",calc));
$("cw").onclick=()=>wa(`Tile calculation: room ${$("L").value}m x ${$("W").value}m, tile ${$("T").selectedOptions[0].text}, wastage ${$("X").value}% → ${$("bx").innerText}.`);
$("send").onclick=()=>wa(`Dealer inquiry\nName: ${$("fn").value}\nShop: ${$("fb").value}\nCity: ${$("fc").value}\nPhone: ${$("fp").value}\nNeeds: ${$("fr").value}`);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
document.querySelectorAll(".cnt").forEach(el=>{let n=0,t=+el.dataset.n;const s=setInterval(()=>{n+=2;if(n>=t){n=t;clearInterval(s)}el.textContent=n+"%"},18)});

// sticky WhatsApp + back-to-top buttons
$("waFloat").href="https://wa.me/"+NUM+"?text="+encodeURIComponent("Hello Somware, I would like to inquire about your tiles & sanitaryware.");
const topBtn=$("toTop");
addEventListener("scroll",()=>topBtn.classList.toggle("show",scrollY>400),{passive:true});
topBtn.onclick=()=>scrollTo({top:0,behavior:"smooth"});

// mobile menu
const burger=$("burger"),menu=document.querySelector("header nav");
function setMenu(o){menu.classList.toggle("open",o);burger.setAttribute("aria-expanded",o);burger.innerHTML=o?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'}
burger.onclick=()=>setMenu(!menu.classList.contains("open"));
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
addEventListener("resize",()=>{if(innerWidth>900)setMenu(false)});
