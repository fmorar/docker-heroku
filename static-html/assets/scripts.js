const axiosGetData=async e=>{return(await axios.get(e)).data},doc=window.document,hh=e=>""===e?"/":`/${e}/`,searchClient=algoliasearch("M53HHHS0ZW","0cfd8f1c1a0e3cb7b2abd77b831614dc"),searchIndex=searchClient.initIndex("docs"),currentPage={folder:null,bookPath:void 0,hasOtp:!1};function debounce(t,o=250){let a;return(...e)=>{clearTimeout(a),a=setTimeout(()=>{t.apply(this,e)},o)}}const getWinWidthStr=()=>{var e=window.innerWidth;return 1200<=e?"xl":992<=e?"lg":768<=e?"md":576<=e?"sm":"xs"},maxColWidth="280px";let winWidth=getWinWidthStr();const establishDisplay=()=>{const e=document.querySelector(".navbar-nav .nav-link");var{bookPath:t,hasOtp:o}=currentPage;establishDisplayFor("book-col","div.show-book-col",t),establishDisplayFor("otp-col","button.show-otp-col",o),"sm"==winWidth||"xs"==winWidth?e.innerHTML='<i class="fas fa-search fa-lg" id="search-icon"></i>':e.innerHTML='<img src="/assets/img/search-light.svg" id="search-icon" alt="search bar">'},establishDisplayFor=(e,t,o)=>{if(void 0!==o&&!1!==o){const l=doc.getElementById(e),c=doc.querySelector(t);switch("xl"==winWidth||"lg"==winWidth||"md"==winWidth?(l.style.maxWidth=maxColWidth,l.style.display="none",c.style.display="none"):"sm"!=winWidth&&"xs"!=winWidth||(l.style.maxWidth="none",l.style.display="none",c.style.display="block"),localStorage.getItem(e)){case"block":"sm"==winWidth||"xs"==winWidth?(doc.querySelector(".overlay").style.display="block",doc.querySelector("#otp-col section").style.display="none"):doc.querySelector("#otp-col section").style.display="block",l.style.display="block",c.style.display="none";break;case"none":l.style.display="none",c.style.display="block";break;default:var a=l.style["display"];localStorage.setItem(e,a)}}};window.addEventListener("resize",()=>{var e=getWinWidthStr();winWidth!=e&&(winWidth=e,establishDisplay())});const scrollHandler=e=>{if(0==doc.querySelectorAll("#otp-col li.dynamic").length)e.target.onscroll=null;else{const l=doc.createElement("a");var o=doc.querySelectorAll("#otp-col a");let t="on-this-page";for(let e=o.length-1;0<=e;e--){l.href=o[e].href;const c=l.hash;var a=c&&c.substring(1);const s=a&&doc.getElementById(a);a=s&&s.getBoundingClientRect();if(a&&a.y<=80){t=s.id;break}}gotoTarget(!1,t,!1)}},scrollPage=e=>{if("on-this-page"==e)doc.getElementById("page-col").scrollTo(0,0);else{const t=doc.getElementById(e);t&&t.scrollIntoView()}},updateHistory=e=>{var t=`${window.location.origin}${currentPage.folder}`;window.history.pushState(null,"","on-this-page"==e?t:`${t}#${e}`)},gotoTarget=async(e,t,o=!0)=>{o&&scrollPage(t),e&&updateHistory(t),setOtpItemToActive(t)},setOtpItemToActive=e=>{const t=doc.querySelector("#otp-col a.active");t&&t.classList.remove("active");const o="on-this-page"===e?doc.querySelector('#otp-col a[href="#on-this-page"]'):doc.querySelector('#otp-col a[href="#'+e+'"]');o&&o.classList&&!1===o.classList.contains("active")&&o.classList.add("active")},getWebpage=async(e,t,o)=>{e=e.replace(/index\.html$/,"");var a=`${window.location.origin}${e}`;if(!e||!a)throw Error("getWebpage on undefined");var l,c,[s,i,a]=await axiosGetData(`${a}index.md`);void 0!==s.bookPath&&s.bookPath!==currentPage.bookPath&&(r=doc.createRange().createContextualFragment(await axiosGetData(`${window.location.origin}${hh(s.bookPath)}book.html`)),doc.querySelectorAll("#book-col div.dynamic").forEach(e=>e.remove()),l=r,(c=document.getElementById("toggle-icon")).parentNode.insertBefore(l,c.nextSibling),doc.querySelectorAll("#book-col .chapter-title").forEach((e,t)=>{"sm"!=winWidth&&"xs"!=winWidth||e.addEventListener("click",()=>{doc.querySelector(".overlay").style.display="none",doc.querySelector("#book-col").style.display="none"},!1),24<=t&&t<=27&&(24===t&&e.parentNode.classList.add("first-bottom-chapter"),e.classList.add("bottom-chapter"))}),doc.querySelectorAll("#book-col i.chapter-icon").forEach(e=>{e.addEventListener("click",e=>{const t=e.target,o=t.closest("div.chapter").querySelector("div.pages"),a=t.nextSibling;t.classList.contains("fa-diamond")?(t.classList.remove("fa-diamond"),t.classList.add("fa-caret-down"),a.classList.remove("closed"),a.classList.add("opened"),o.style.display="block"):(t.classList.remove("fa-caret-down"),t.classList.add("fa-diamond"),a.classList.remove("opened"),a.classList.add("closed"),o.style.display="none")})})),currentPage.bookPath=s.bookPath;var r=s.title;const n=doc.querySelector("div#hh-viewer-wrapper span.title");n.id=s.titleId,n.textContent=r,doc.title=`Reach > ${r}`;doc.getElementById("edit-btn").href=`https://github.com/reach-sh/reach-lang/tree/master/docs/src${e}index.md`;i=doc.createRange().createContextualFragment(i);doc.querySelector("div#hh-viewer-wrapper div#hh-viewer").textContent="",doc.querySelector("div#hh-viewer-wrapper div#hh-viewer").append(i);const d=doc.querySelector("h1");i=d.querySelector("a");d.remove(),n.appendChild(i),n.class+=" refHeader";const h=doc.getElementById("reach-search-input"),p=window.location["href"];i=p.split("search/#search")[1];const y=new URLSearchParams(i);i=y.get("q");if(h){h.focus();const w=doc.getElementById("search-results-list");h.addEventListener("keyup",debounce(async e=>{var c,t=(await searchIndex.search(h.value))["hits"],c=(c=e=>e.pt,t.reduce((e,t,o,a,l=c(t))=>((e[l]||(e[l]=[])).push(t),e),{}));t.length&&(w.innerHTML="",Object.entries(c).forEach(([e,t])=>{const o=doc.createElement("p"),a=doc.createElement("div");o.innerHTML=e,o.classList.add("search-title"),a.classList.add("results-list"),w.append(o),w.append(a),t.forEach(e=>{var t=["sdRef","sdTerm","sdHeader","sdPara","sdGHDis"][e.t];const o=doc.createElement("div"),a=doc.createElement("div");o.classList.add(t,"result-item");var l=(e,t)=>{const o=doc.createElement("span");o.classList.add(e),o.innerText=t,a.appendChild(o)};const c=doc.createElement("a");c.classList.add("pt"),c.href=e.objectID,"sdRef"===t?(l("symbol",e.c),l("scope",e.s)):"sdTerm"===t?l("term",e.c):"sdHeader"===t?l("h",e.c):"sdPara"!==t&&"sdGHDis"!==t||l("p",e.c),o.appendChild(a),o.innerHTML+=`
          <div class="search-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
              <path d="M7 4V0L0 7L7 14V9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z" fill="currentColor" />
            </svg>
          </div>
          `,c.appendChild(o),w.append(c)})}),updateHistory(`search?q=${h.value}`),setClickFollowLink())})),i&&(h.value=i,h.dispatchEvent(new KeyboardEvent("keyup")))}if(s.hasOtp){doc.querySelectorAll("#otp-col ul ul.dynamic, #otp-col ul li.dynamic").forEach(e=>{e.remove()});const b=doc.querySelector("#otp-col ul"),f=doc.createRange().createContextualFragment(a),S=f.querySelector("ul");S&&S.querySelectorAll(":scope > li").forEach((e,t)=>{0==t?(t=e.querySelector("ul"))&&b.querySelector("li").append(t):b.append(e)})}currentPage.hasOtp=s.hasOtp,doc.querySelectorAll("a").forEach(e=>{e.classList.remove("active")}),doc.querySelectorAll(`a[href="${e}"]`).forEach(e=>{e.classList.add("active")});const g=doc.querySelector(`#book-col a[href="${e}"]`);if(g){const L=g.closest("div.chapter"),k=L&&L.querySelector("div.pages");if(k&&k.hasChildNodes()){const x=L.querySelector("i.chapter-icon"),q=x.nextSibling;x.classList.remove("fa-diamond"),x.classList.add("fa-caret-down"),q.classList.add("opened"),k.style.display="block"}}establishDisplay();const u=doc.createElement("div");u.classList.add("next-chapter-container");i=Array.from(doc.querySelectorAll(".chapter-title")).indexOf(doc.querySelector(".active")),a=await axiosGetData(`${doc.querySelectorAll(".chapter-title")[i+1].href}index.md`);const v=doc.createRange().createContextualFragment(a[1]),m=v.querySelector("p")?.textContent;a=m?200<m.length?m.substring(0,200)+"...":m.substring(0,m.length-2):"";["reach-top","tuts"].includes(s.titleId)||i+1===Array.from(doc.querySelectorAll(".chapter-title")).length||(u.innerHTML+=`
  <section class="p-2 next-chapter-card">
    <a href="${doc.querySelectorAll(".chapter-title")[i+1].href}">
      <div class="first-row-chapter">
        <div>
          <p>Next DOC</p>
          <p class="mt-2 next-chapter-title">
              ${doc.querySelectorAll(".chapter-title")[i+1].textContent}
          </p>
          <div class="next-chapter-content">
          <div>
          ${a?`<p class="mt-2">
          ${a}
          </p>`:""}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
            <path d="M22.8638 0.727051L18.9118 4.67899L34.5514 20.3466L0.441406 20.3466L0.441406 25.9522L34.5514 25.9522L18.9118 41.6198L22.8638 45.5718L45.2861 23.1494L22.8638 0.727051Z" fill="currentColor"/>
          </svg>
          </div>
        </div>
      </div>
    </a>
</section>
          `,doc.querySelector("div#hh-viewer-wrapper div#hh-viewer").append(u)),doc.querySelector("div#hh-page-header .col").style.display=s.hasPageHeader&&"Getting Started"!==s.title?"block":"none",doc.querySelector("div#hh-page-header").style.cssText=s.hasPageHeader&&"Getting Started"!==s.title?"":"margin: 0;float:left;border:none",doc.querySelector("div.show-book-col").style.cssText=s.hasPageHeader&&"Getting Started"!==s.title?"":"background-color:white;display:block",doc.querySelector("#page-col").style.padding=s.hasPageHeader&&"Getting Started"!==s.title?"16px 24px":"16px 0 0 0",doc.querySelector("#page-col").style.backgroundColor=!s.hasPageHeader||"Getting Started"!==s.title?"var(--page-col)":"var(--light-mode-white)",doc.querySelector("#page-col .footer").style.margin=!s.hasPageHeader||"Getting Started"!==s.title?"0 -24px -16px -24px":"0",doc.getElementById("page-col").style.display="block",s.hasOtp?(doc.getElementById("otp-col").classList.remove("banish"),doc.querySelector("button.show-otp-col").classList.remove("banish")):(doc.getElementById("otp-col").classList.add("banish"),doc.querySelector("button.show-otp-col").classList.add("banish")),currentPage.folder=e,setClickFollowLink(),await gotoTarget(o,t?t.substring(1):"on-this-page")},clickFollowLink=async e=>{if(!(e.shiftKey||e.ctrlKey||e.metaKey)){const o=e.target.closest("a");if(null!==o)if(o.classList&&o.classList.contains("copyBtn")){e.preventDefault(),await navigator.clipboard.writeText(o.getAttribute("data-clipboard-text"));const a=o.getAttribute("id");$(`#${a}`).attr("title","Copied!").tooltip("enable").tooltip("show");setTimeout(()=>{$(`#${a}`).tooltip("disable").attr("title","Copy to clipboard")},1e3)}else{var t=o.href;const l=doc.createElement("a");if(l.href=t,l.hostname===window.location.hostname)if(e.preventDefault(),currentPage.folder==l.pathname&&l.hash){const o="#on-this-page"===l.hash?"on-this-page":l.hash.substring(1);await gotoTarget(!0,o)}else await getWebpage(l.pathname,l.hash,!0)}}},setClickFollowLink=()=>{doc.querySelectorAll("a").forEach(e=>{e.addEventListener("click",clickFollowLink)})};window.onpopstate=function(e){const t=doc.createElement("a");t.href=doc.location.href,getWebpage(t.pathname,t.hash,!1)};const makeShowHide=(c,s,i)=>{var e=e=>{var t=e=>e?"block":"none";const o=t(e),a=t(!e),l=e?"none":"block";e=e?c:s;doc.querySelector(e).addEventListener("click",e=>{"sm"!=winWidth&&"xs"!=winWidth||(doc.querySelector(".overlay").style.display=l),console.log(i,a),console.log(s,o),doc.getElementById(i).style.display=a,doc.querySelector(s).style.display=o})};e(!0),e(!1)};makeShowHide("button.hide-book-icon","div.show-book-col","book-col"),makeShowHide("button.hide-otp-icon","button.show-otp-col","otp-col"),doc.getElementById("page-col").addEventListener("scroll",scrollHandler),getWebpage(window.location.pathname,window.location.hash,!0);