'use strict';

/* Everything runs locally. Add real links only after confirming their URLs. */
const CONTACT = {email: 'nyanlinzaw56@gmail.com', linkedin: 'https://www.linkedin.com/in/nyan-lin-zaw', github: 'https://github.com/MImran2002', resume: 'https://drive.google.com/file/d/1g3EVp5DMoEf6GJpw3-hD3dyco3iwB46j/view?usp=sharing'};

const cases = {
  berea: {title:'Berea College',kind:'EDUCATION / CLASS OF 2026',image:'assets/church.png',bluematte:true,summary:'Computer & Information Science and Communication. Studied software development, data structures, computer organization, theory of computation, human-computer interaction and AI full-stack engineering.',timeline:['Berea College — Class of 2026','Computer & Information Science and Communication','Full Scholarship · departmental awards'],stack:'SOFTWARE · RESEARCH · DESIGN'},
  aspire: {title:'Aspire Institute',kind:'LEADERSHIP EDUCATION',image:'assets/campus.png',bluematte:true,summary:'Leadership coursework in business and organizations. The source Figma reference also describes pursuing an extended leadership program in research.',timeline:['Leadership in Business and Organizations','Extended leadership learning / research focus'],stack:'LEADERSHIP · ORGANIZATIONS · RESEARCH'},
  santa: {title:'Innovate & Elevate',kind:'SANTA CLARA UNIVERSITY',image:'assets/city.png',bluematte:true,summary:'An entrepreneurship and product-development accelerator experience emphasizing early-stage product ideation, business models, pitching, and communicating value.',timeline:['Product and business-model development','Entrepreneurial learning and pitching','MAMAGURT project pitch'],stack:'ENTREPRENEURSHIP · PRODUCT · PITCHING'},
  labor: {title:'Labor Status Form',kind:'BEREA COLLEGE / INSTITUTIONAL SOFTWARE',image:'assets/labor.png',summary:'An institutional application for the student labor program. Work includes maintaining workflows, testing new functionality, improving reliability and supporting users.',timeline:['Maintain and test department and supervisor workflows','Improve forms, administration, and internal search interfaces','Collaborate with stakeholders on functionality'],stack:'PYTHON · FLASK · MYSQL · WEB APPLICATIONS'},
  celts: {title:'CELTS Application',kind:'BEREA COLLEGE / COMMUNITY ENGAGEMENT',image:'assets/celts.png',summary:'The Center for Excellence in Learning through Service platform supports events, volunteer programs, rosters, training, and student participation workflows. Work includes feature development, testing and issue resolution.',timeline:['Refine roster, training and event participation logic','Improve student search and profile workflows','Test and maintain features with team and stakeholders'],stack:'PYTHON · FLASK · DATABASES · QA'},
  aauw: {title:'Association of American University Women',kind:'WEB DESIGN / COMMUNITY',image:'assets/aauw.png',summary:'A responsive website experience for the Berea chapter of the American Association of University Women, presenting its mission, opportunities, events and community programs.',timeline:['Community-focused web experience','Accessible, responsive content presentation','Mission and program pages'],stack:'RESPONSIVE WEB · INFORMATION ARCHITECTURE'},
  nextgen: {title:'NextGen Justice',kind:'RESPONSIVE WEBSITE / DESIGN',image:'assets/nextgen.png',summary:'An editorial responsive web interface demonstrated across desktop, tablet and mobile layouts.',timeline:['Layout and typography design','Desktop, tablet and phone mockups','Responsive presentation'],stack:'WEB DESIGN · RESPONSIVE UI'},
  aicollective: {title:'The AI Collective',kind:'COMMUNITY / DESIGN & EVENTS',image:'assets/ai.png',summary:'Visual communications for technical gatherings and workshops, including the Vibe Coding Workshop and Inter-Club Hackathon shown in the supplied assets.',timeline:['Visual communications and event materials','Community workshops','Design assets for presentations and outreach'],stack:'EVENT DESIGN · COMMUNITY · COMMUNICATION'},
  snapchat: {
    title:'Berea College',
    kind:'WORK EXPERIENCE / BEREA COLLEGE POP OUT',
    image:'assets/snapchat.jpeg',
    customLayout:'bereaCollegePopout',
    link:'#',
    summary:'AR Development: Created Snapchat AR stickers, filters, and interactive campus maps, generating 10,000+ views. Administrative Operations: Led student teams, coordinated 2,700+ participants, streamlined workflows, and managed cross-departmental communication.',
    badges:['Operation Manager','Augmented Reality','Data Security','Inter-dept Communication'],
    timeline:[
      'AR Development — Created Snapchat AR stickers, filters, and interactive campus maps.',
      'Engagement — Generated 10,000+ views through the AR experience.',
      'Administrative Operations — Led student teams and coordinated 2,700+ participants.',
      'Process Improvement — Streamlined workflows and managed cross-departmental communication.'
    ],
    stack:'AUGMENTED REALITY · OPERATIONS · COMMUNICATION · CAMPUS EXPERIENCE'
  },
  mindroute: {title:'MindRoute',kind:'HUMAN-CENTERED AI / WAYFINDING',image:'assets/mr.png',bluematte:true,summary:'A cognitive-load-aware walking route planner investigating how environmental and navigational features can help people compare routes for comfort and complexity. The reference demonstrates alternative routes and a locally designed interface, not a live portfolio routing service.',timeline:['June 2026 — Ideation & Research','June 2026 — Design & Prototyping','August 2026 — AI Development','August 2026 — Testing','October 2026 — Presentation'],award:'Second Prize ·  Best Use of AI Award  ',stack:'MAPBOX · XGBOOST · HCI · ROUTE PLANNING'},
  instagram: {title:'Instagram Redesign',kind:'ACCESSIBILITY / UX RESEARCH',image:'assets/insta.png',summary:'A design study about Instagram accessibility challenges using anonymized user research, comparative analysis, affinity mapping, iterative prototyping and testing.',timeline:['November 2024 — User Research','December 2024 — Prototyping','December 2024 — High-Fidelity','December 2024 — User Testing','February 2025 — Presentation'],award:'Fourth Place Award  ',stack:'UX RESEARCH · AFFINITY MAPPING · PROTOTYPING'},
  mam: {title:'MAMAGURT Pitch',kind:'PRODUCT STRATEGY / BRANDING',image:'assets/mam.png',bluematte:true,summary:'A proposed probiotic yogurt drink and snack brand for expectant mothers. Developed product and packaging concepts, entrepreneurial positioning, a business model and a competition pitch. This is a proposed concept, not a validated health product.',timeline:['June 2025 — Ideation to Execution','June 2025 — Entrepreneur Mindset','July 2025 — Funding & Scaling','July 2025 — Networking','July 2025 — Pitch Competition'],award:'First Place · Santa Clara University Project Pitch  ',stack:'BRANDING · PACKAGING · PRODUCT PITCH'},
  trove: {title:'Trove',kind:'INTERACTIVE OBJECT STORYTELLING',image:'assets/trove.png',bluematte:true,summary:'Inspired by tangible reminiscence experiences, Trove invites visitors to scan familiar items and learn the cultural or personal stories they can carry. The supplied original HTML simulation supports touch and mouse interactions using predefined responses.',timeline:['Research — Tangible objects and reminiscence','Design — Blueprint object-scanning prototype','Implementation — Frontend scanning and responses'],stack:'HTML · CSS · JAVASCRIPT · POINTER EVENTS',demo:'demos/trove.html'},
  nand: {title:'NAND Lab',kind:'INTERACTIVE COMPUTER ORGANIZATION',image:'assets/nand.png',bluematte:true,summary:'A two-NAND logic exercise: drag gates, connect pins, and verify an AND output by toggling two inputs and reviewing the complete truth table. This is a frontend educational logic model, not an electrical breadboard simulator.',timeline:['Learning objective — AND via NAND','Prototype — Interactive gates and connections','Validation — Four test combinations'],stack:'HTML · CSS · JAVASCRIPT · DIGITAL LOGIC',demo:'demos/nand.html'},
  bacnet: {title:'BACnet Lab',kind:'BUILDING AUTOMATION / SIMULATOR',image:null,summary:'An interactive, local-only BACnet teaching tool. Simulate Who-Is/I-Am discovery, select controllers and BACnet objects, inspect ReadProperty responses and issue a simulated WriteProperty change. No real network devices or BACnet/IP packets are involved.',timeline:['Learn BACnet device/object concepts','Simulate discovery and device selection','Read and modify simulated object properties'],stack:'HTML · CSS · JAVASCRIPT · BACnet CONCEPTS',demo:'demos/bacnet.html'},
  observatory: {title:'BACnet Observatory',kind:'SEPARATE DIGITAL-TWIN CONCEPT',image:null,summary:'BACnet Observatory explores a building-automation digital-twin concept for visualizing devices and object states. This portfolio shows the project concept only; no live BACnet devices or deployed Python backend are connected.',timeline:['Concept — Building automation digital twin','Possible future — Python-hosted test environment','Frontend portfolio — Static project overview only'],stack:'PROJECT CONCEPT · NOT A LIVE SERVICE'}
};

const featured = [
 {id:'mindroute',tag:'HUMAN-CENTERED AI',description:'Cognitive-load-aware route planning.'},
 {id:'instagram',tag:'UX / REDESIGN',description:'Research-led accessibility exploration.'},
 {id:'mam',tag:'PRODUCT / BRAND',description:'Yogurt product concept and pitch.'}
];

const safe = value => String(value ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const exhibition = document.getElementById('portfolio');
const desktopQuery = window.matchMedia('(min-width: 1024px)');
const sheets = [...exhibition.querySelectorAll(':scope > .sheet')];
const detailDialog = document.getElementById('detail-dialog');
const contactDialog = document.getElementById('contact-dialog');
const detailContent = document.getElementById('detail-content');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const gallery = document.getElementById('project-gallery');

for (const project of featured) {
 const entry = cases[project.id];
 const card = document.createElement('button');
 card.type = 'button'; card.className='project-card'; card.dataset.detail=project.id;
 card.innerHTML=`<div class="project-preview"><span>${safe(project.tag)}</span>${entry.image?`<img loading="lazy" src="${entry.image}" alt="${safe(entry.title)} reference">`:`<div class="preview-placeholder"><b>INSTAGRAM</b><small>RESEARCH / ACCESSIBILITY</small><span class="preview-cross">✳</span></div>`}</div><div class="project-summary"><strong>${safe(entry.title)}</strong><p>${safe(project.description)}</p><small>EXPAND CASE STUDY ↗</small></div>`;
 gallery.append(card);
}

/* Continuous scrolling is the PRIMARY desktop navigation mechanism.
   Capture at WINDOW so scrolling works while cursor is over any panel or the header.
   Never steal scroll gestures from modals, form controls, or scrollable demo content. */
function scrollableAncestor(target) {
 let element = target instanceof Element ? target : null;
 while (element && element !== document.documentElement) {
  if (element.closest('dialog[open]')) return true;
  const style = window.getComputedStyle(element);
  if (/(auto|scroll)/.test(style.overflowY) && element.scrollHeight > element.clientHeight + 3) return true;
  if (element.matches('textarea,select,input,[contenteditable="true"],[role="slider"],iframe')) return true;
  element = element.parentElement;
 }
 return false;
}
window.addEventListener('wheel', event => {
 if (!desktopQuery.matches || detailDialog.open || contactDialog.open || event.ctrlKey || event.metaKey || scrollableAncestor(event.target)) return;
 let distance = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
 if (event.deltaMode === 1) distance *= 18;
 if (event.deltaMode === 2) distance *= Math.min(window.innerWidth,800);
 if (!Number.isFinite(distance) || Math.abs(distance) < 0.05) return;
 const limit = exhibition.scrollWidth - exhibition.clientWidth;
 const next = Math.max(0,Math.min(limit,exhibition.scrollLeft + distance));
 if (Math.abs(next-exhibition.scrollLeft) < .3) return;
 event.preventDefault();
 exhibition.scrollLeft=next; // deliberately no snap: smooth natural granular movement
 updateProgress();
}, {passive:false, capture:true});

function targetScrollLeft(element) {
 const viewport = exhibition.getBoundingClientRect();
 return exhibition.scrollLeft + element.getBoundingClientRect().left - viewport.left;
}
function navigateTo(id) {
 const section = document.getElementById(id);
 if (!section) return;
 if (desktopQuery.matches) exhibition.scrollTo({left:targetScrollLeft(section),behavior:reducedMotion.matches?'auto':'smooth'});
 else section.scrollIntoView({block:'start',behavior:reducedMotion.matches?'auto':'smooth'});
}
function moveRelative(direction) {
 if (desktopQuery.matches) exhibition.scrollBy({left:direction*Math.min(exhibition.clientWidth*.8,760),behavior:reducedMotion.matches?'auto':'smooth'});
 else window.scrollBy({top:direction*window.innerHeight*.68,behavior:reducedMotion.matches?'auto':'smooth'});
}
document.querySelectorAll('[data-to]').forEach(btn=>btn.addEventListener('click',event=>{
 event.preventDefault(); navigateTo(btn.dataset.to);
}));
document.getElementById('prev').addEventListener('click',()=>moveRelative(-1));
document.getElementById('next').addEventListener('click',()=>moveRelative(1));
window.addEventListener('keydown',event=>{
 if (!desktopQuery.matches || detailDialog.open || contactDialog.open || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
 if (event.target instanceof Element && event.target.closest('button,a,input,textarea,select,[contenteditable],iframe')) return;
 if (event.key==='ArrowRight' || event.key==='PageDown') { event.preventDefault(); moveRelative(1); }
 if (event.key==='ArrowLeft' || event.key==='PageUp') { event.preventDefault(); moveRelative(-1); }
});

/* Optional click-drag on empty desktop panels; does not interfere with controls. */
let pan = null;
exhibition.addEventListener('pointerdown',event=>{
 if (!desktopQuery.matches || event.pointerType!=='mouse' || event.button!==0 || event.target.closest('button,a,input,textarea,select,iframe,[data-no-pan]')) return;
 pan={x:event.clientX,initial:exhibition.scrollLeft,dragged:false};
});
window.addEventListener('pointermove',event=>{
 if (!pan || (event.buttons&1)===0) return;
 const delta=event.clientX-pan.x;
 if (Math.abs(delta)>8) { pan.dragged=true;exhibition.scrollLeft=pan.initial-delta; }
});
window.addEventListener('pointerup',()=>{pan=null});
window.addEventListener('blur',()=>{pan=null});

function currentSheetIndex() {
 const left = exhibition.getBoundingClientRect().left;
 let best=0,bestDistance=Infinity;
 sheets.forEach((sheet,index)=>{
  const delta=Math.abs(sheet.getBoundingClientRect().left-left);
  if (delta<bestDistance) {bestDistance=delta;best=index;}
 });
 return best;
}
function updateProgress() {
 const percent=desktopQuery.matches?
  (100*exhibition.scrollLeft/Math.max(1,exhibition.scrollWidth-exhibition.clientWidth)):
  (100*window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight));
 document.getElementById('scroll-progress').style.width=`${Math.min(100,Math.max(0,percent))}%`;
 if (desktopQuery.matches) {
  document.getElementById('panel-status').innerHTML=`${String(currentSheetIndex()+1).padStart(2,'0')} <i>/</i> ${String(sheets.length).padStart(2,'0')}`;
 } else {
  const visible = sheets.filter(s=>s.getBoundingClientRect().top<window.innerHeight*.45).at(-1);
  const idx = visible ? sheets.indexOf(visible) : 0;
  document.getElementById('panel-status').innerHTML=`${String(idx+1).padStart(2,'0')} <i>/</i> ${String(sheets.length).padStart(2,'0')}`;
 }
}
exhibition.addEventListener('scroll',updateProgress,{passive:true});
window.addEventListener('scroll',updateProgress,{passive:true});
window.addEventListener('resize',updateProgress);
window.addEventListener('load',updateProgress);
updateProgress();

/* Project detail and immersive experience MODALS (as requested in latest brief).
   The supplied self-contained HTML apps remain intact and isolated in an iframe,
   and are unloaded on close to stop animations and reset timers. */
function aauwPopoutHtml(entry) {
 const linkMarkup = entry.link
  ? `<a class="aauw-action-btn" href="${safe(entry.link)}" target="_blank" rel="noopener noreferrer">Link</a>`
  : `<button type="button" class="aauw-action-btn is-disabled" aria-disabled="true">Link</button>`;

 return `
  <div class="aauw-popout">
    <div class="aauw-popout-head">
      <div class="aauw-popout-titlewrap">
        <h3 class="aauw-popout-title">
          <span class="aauw-title-solid">Association of</span>
          <span class="aauw-title-outline">American University Women</span>
        </h3>
      </div>

      <div class="aauw-popout-actions">
        ${linkMarkup}
        <button type="button" class="aauw-action-btn" data-close-modal>Close</button>
      </div>
    </div>

    <div class="aauw-popout-chips">
      <span class="aauw-chip orange">Led a team of 3 developers</span>
      <span class="aauw-chip blue">HTML</span>
      <span class="aauw-chip orange">JS</span>
      <span class="aauw-chip blue">Demo on Figma</span>
      <span class="aauw-chip orange">Hosted 4 client meetings</span>
    </div>

    <div class="aauw-popout-hero">
      <img src="assets/aauw-hero.png" alt="AAUW Berea website hero preview">
    </div>

    <div class="aauw-popout-showcase">
      <article class="aauw-showcase-card">
        <div class="aauw-showcase-label">Book Sale</div>
        <h4>Annual Book Sales</h4>
        <div class="aauw-showcase-body">
          <img src="assets/book-sale.png" alt="AAUW book sale event">
          <div class="aauw-showcase-copy">
            <p>Each year, we host a used book sale for students at Berea College and community members as one of our main fundraising events. The event is hosted in the Berea College CPO, located on the ground floor of the Woods-Penniman building on the college’s campus.</p>
            <p>The sale occurs only for a couple of days for a few hours each day, so it is a limited-time-only annual event. Gently used books are sold for prices that range from 1 to 5 dollars, making the event affordable while supporting scholarships and community programming.</p>
          </div>
        </div>
      </article>

      <article class="aauw-showcase-card mission-card">
        <div class="aauw-showcase-label">Our Mission</div>
        <div class="aauw-mission-imagewrap">
          <img src="assets/aauw-mission.png" alt="Historic AAUW mission photo">
          <div class="aauw-mission-overlay">Curious About Us ?</div>
        </div>
      </article>
    </div>
  </div>
 `;
}


/* AAUW SIMPLE GALLERY V4 */

function aauwSimpleGallery(entry) {
 return `
  <section class="aauw-simple-gallery">

    <h3 class="aauw-simple-title">
      <span>Association of</span>
      <span class="outlined">
        American University Women
      </span>
    </h3>

    <div class="aauw-simple-pills">
      <span>Led a team of 3 developers</span>
      <span>HTML</span>
      <span>JS</span>
      <span>Demo on Figma</span>
      <span>Hosted 4 client meetings</span>
    </div>

    <div class="aauw-simple-hero">
      <img
        src="assets/aauw-hero.png"
        alt="AAUW Berea website laptop mockup"
      >
    </div>

    <div class="aauw-simple-pair">

      <figure>
        <img
          src="assets/book-sale.png"
          alt="AAUW Berea Annual Book Sales webpage"
          loading="lazy"
        >
      </figure>

      <figure>
        <img
          src="assets/aauw1.png"
          alt="AAUW Berea Our Mission webpage"
          loading="lazy"
        >
      </figure>

    </div>

  </section>
 `;
}


function aiCollectiveFigmaHtml(entry) {
 return `
 <section class="ai-custom-gallery">

  <h3 class="ai-custom-title">
   The AI <span>Collective</span>
  </h3>

  <div class="ai-custom-pills">
   <span>Host Workshops</span>
   <span>Berea Chapter president</span>
   <span>Sponsorship from Vercel</span>
   <span>Host Hackathons</span>
   <span>Host Demos</span>
   <span>Sponsorship from Lovable</span>
  </div>

  <div class="ai-custom-hero">

   <svg viewBox="0 0 1100 210"
        preserveAspectRatio="none"
        aria-hidden="true">
    <path d="M-30 40 C250 38 350 135 540 106 S860 34 1130 55"/>
    <path d="M-30 65 C245 65 355 137 540 114 S870 65 1130 78"/>
    <path d="M-30 100 C245 105 360 135 540 124 S860 105 1130 122"/>
    <path d="M-30 159 C245 139 360 151 540 135 S870 145 1130 167"/>
   </svg>

   <img src="assets/ai.png"
        alt="Hack for Humanity desktop mockup">

  </div>

  <div class="ai-custom-posters">

   <img src="assets/workshop.jpg"
        alt="Vibe Coding Workshop poster"
        loading="lazy">

   <img src="assets/hackathon.jpg"
        alt="Berea College Inter-Club Hackathon poster"
        loading="lazy">

  </div>

 </section>`;
}


/* NEXTGEN POPOUT START */
function nextgenCustomHtml() {
 return `
 <section class="ng2-case">

  <div class="ng2-pills">
   <span>Retrieval Augmented Generation</span>
   <span>AI</span>
   <span>React.js</span>
   <span>Nest.js</span>
   <span>LangChain</span>
   <span>TypeScript</span>
   <span>Data Pipeline</span>
   <span>OCR</span>
   <span>Modularity</span>
  </div>

  <div class="ng2-diagram"
       role="img"
       aria-label="Three input sources merging into a database pipeline">

   <svg viewBox="0 0 900 265"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">

    <defs>
     <linearGradient id="ng2Flow" x2="1" y2=".1">
      <stop stop-color="#c8d9fc"/>
      <stop offset=".6" stop-color="#7dacff"/>
      <stop offset="1" stop-color="#4283e9"/>
     </linearGradient>
    </defs>

    <g fill="none"
       stroke="url(#ng2Flow)"
       stroke-width="23"
       stroke-linecap="round">

     <path d="M113 44 H210 C275 44 265 132 345 132 H615"/>
     <path d="M113 132 H615"/>
     <path d="M113 220 H210 C275 220 265 132 345 132 H615"/>
    </g>

    <g fill="#f7fbff"
       stroke="#c7dafa"
       stroke-width="4">
     <circle cx="92" cy="44" r="31"/>
     <circle cx="92" cy="132" r="31"/>
     <circle cx="92" cy="220" r="31"/>
     <circle cx="435" cy="132" r="32"/>
    </g>

    <g stroke="#6b98e2"
       fill="none"
       stroke-width="4"
       stroke-linecap="round">
     <rect x="78" y="33" width="28" height="22" rx="3"/>
     <path d="M83 41h18M83 48h13"/>
     <path d="M81 119l22 26M103 119l-22 26M92 116v32"/>
     <rect x="79" y="208" width="26" height="23" rx="4"/>
     <path d="M85 216h14M85 223h14"/>
     <ellipse cx="435" cy="125" rx="16" ry="8"/>
     <path d="M419 125v16c0 12 32 12 32 0v-16M420 133c9 7 23 7 30 0"/>
    </g>

    <g transform="translate(677 28)">
     <path d="M0 27v161c0 45 157 45 157 0V27"
           fill="#488ce9"/>
     <ellipse cx="78.5" cy="27"
              rx="78.5" ry="27"
              fill="#91bdff"/>
     <path d="M0 81c20 30 136 30 157 0
              M0 135c20 30 136 30 157 0
              M0 185c20 30 136 30 157 0"
           fill="none"
           stroke="#80b4f8"
           stroke-width="6"/>
    </g>

   </svg>
  </div>

  <div class="ng2-impact">

   <article class="ng2-saving">
    <p>Built an OCR that reduces cloud costs by</p>
    <strong>~80%</strong>
    <small>(~$1,200 per 50K pages)</small>
   </article>

   <article class="ng2-shift">
    <p>Reduced cumulative layout shift by</p>
    <strong>96%</strong>
   </article>

   <article class="ng2-apis">
    Deployed OCR services via two NestJS REST APIs
   </article>

   <article class="ng2-speed">
    <span>
     Implemented modular, lazy-loaded components,
     improving Lighthouse performance from
    </span>
    <strong>34 → 83</strong>
   </article>

  </div>
 </section>`;
}
/* NEXTGEN POPOUT END */


/* WORK CASE STUDIES START */

function institutionalWorkHtml(id) {
 const labor = id === 'labor';

 const tags = labor
  ? [
      'Python', 'Flask', 'MySQL',
      'Supervisor Portal', 'Department Portal',
      'Forms & Search'
    ]
  : [
      'Python', 'Flask', 'Databases',
      'Event Rosters', 'Student Profiles',
      'Training & Events'
    ];

 const cells = labor ? [
  ['STUDENT LABOR', 'Supervisor Portal'],
  ['DEPARTMENT PORTAL', 'Management & Search'],
  ['FORM WORKFLOWS', 'Requests & Approvals'],
  ['ENGINEERING', 'Maintenance, QA & reliability']
 ] : [
  ['COMMUNITY SERVICE', 'CELTS Platform'],
  ['ROSTERS', 'Attendance & RSVP'],
  ['PARTICIPATION', 'Events & Training'],
  ['ENGINEERING', 'Profiles, reporting & QA']
 ];

 const img = labor
  ? 'assets/labor.png'
  : 'assets/celts.png';

 const desc = labor
  ? 'Improving student labor administration, form workflows and supervisor tools.'
  : 'Maintaining event, volunteer, training and student participation workflows.';

 return `
 <section class="iw-case">

  <div class="iw-tags">
   ${tags.map((t,i) =>
    `<span class="${i%2?'orange':'blue'}">${safe(t)}</span>`
   ).join('')}
  </div>

  <div class="iw-visual">
   <img src="${img}" alt="${labor
    ? 'Labor Status Form Supervisor Portal'
    : 'CELTS Application'} screenshot">
  </div>

  <p class="iw-summary">${safe(desc)}</p>

  <div class="iw-bento">
   ${cells.map(([label,value],i) => `
    <div class="iw-tile iw-tile-${i}">
     <small>${safe(label)}</small>
     <strong>${safe(value)}</strong>
    </div>
   `).join('')}
  </div>

 </section>`;
}

/* WORK CASE STUDIES END */

function overviewHtml(entry) {
 if (entry === cases.labor || entry === cases.celts) return institutionalWorkHtml(entry === cases.labor ? 'labor' : 'celts');
 if (entry === cases.nextgen) return nextgenCustomHtml();
 if (entry === cases.aicollective) return aiCollectiveFigmaHtml(entry);
 if (entry === cases.aauw) return aauwSimpleGallery(entry);
 if (entry.title === 'AAUW') return aauwPopoutHtml(entry);
 if (entry.customLayout === 'bereaCollegePopout') {
  const chips = (entry.badges || [])
   .map((badge, index) => {
    const tone = index % 2 === 0 ? 'navy' : 'orange';
    return `<span class="berea-chip ${tone}">${safe(badge)}</span>`;
   })
   .join('');

  const timelineText = (entry.timeline || [])
   .map(item => `<li>${safe(item)}</li>`)
   .join('');

  return `
   <div class="berea-popout">
    <div class="berea-popout-topbar">
      <div class="berea-popout-title-wrap">
        <h3 class="berea-popout-title">Berea <span>College</span></h3>
      </div>
      <div class="berea-popout-actions">
        <a class="berea-popout-btn" href="${safe(entry.link || '#')}" target="_blank" rel="noopener noreferrer">Link</a>
        <button type="button" class="berea-popout-btn" data-inline-close>Close</button>
      </div>
    </div>

    <div class="berea-popout-chips">
      ${chips}
    </div>

    <div class="berea-popout-media">
      <img class="berea-popout-phone" src="${safe(entry.image)}" alt="${safe(entry.title)} preview">
    </div>

    <div class="berea-popout-copy">
      <p><strong>AR Development:</strong> Created Snapchat AR stickers, filters, and interactive campus maps, generating 10,000+ views.</p>
      <p><strong>Administrative Operations:</strong> Led student teams, coordinated 2,700+ participants, streamlined workflows, and managed cross-departmental communication.</p>
    </div>

    <div class="berea-popout-notes">
      <h4>Project details</h4>
      <ul>${timelineText}</ul>
      <p class="berea-popout-stack">TOOLS / ${safe(entry.stack)}</p>
    </div>
   </div>`;
 }

 const image=entry.image ? `<img class="dialog-image ${entry.bluematte?'on-blue':''}" src="${safe(entry.image)}" alt="${safe(entry.title)} project visual">` : `<div class="dialog-placeholder"><strong>${safe(entry.title)}</strong><small>PROJECT CONCEPT / REFERENCE</small></div>`;
 return `<div class="dialog-layout"><div>${image}<p class="dialog-narrative">${safe(entry.summary)}</p><p class="dialog-tech">TOOLS / ${safe(entry.stack)}</p></div><div><div class="dialog-timeline"><h3>PROJECT JOURNEY / DETAILS</h3><ol>${entry.timeline.map(item=>`<li>${safe(item)}</li>`).join('')}</ol></div>${entry.award?`<p class="dialog-award">✳ ${safe(entry.award)}</p>`:''}${entry.demo?'<div class="dialog-controls"><button type="button" class="btn btn-primary" data-show-demo>Immerse in experience ↗</button></div>':''}</div></div>`;
}
function demoHtml(entry) {
 return `<div class="dialog-demo"><div class="dialog-demo-toolbar"><span>LIVE FRONTEND DEMO / ORIGINAL SOURCE</span><a href="${safe(entry.demo)}" target="_blank" rel="noopener noreferrer">OPEN STANDALONE ↗</a></div><iframe class="demo-iframe" title="${safe(entry.title)} interactive frontend experience" src="${safe(entry.demo)}" loading="eager"></iframe><p class="demo-disclaimer">This is the locally hosted HTML/CSS/JS prototype supplied with the portfolio. Simulated interactions only; no backend, live devices, or external service required.</p></div>`;
}
function selectTab(entry, view) {
 if (!detailDialog.open) return;
 /* COMPACT LAB VIEW */
 detailDialog.classList.toggle(
   'lab-demo-view',
   detailDialog.classList.contains('compact-lab-dialog')
   && view === 'demo'
 );
 
 detailContent.innerHTML= view==='demo' && entry.demo ? demoHtml(entry):overviewHtml(entry);
 detailContent.scrollTop=0;
 const launch=detailContent.querySelector('[data-show-demo]');
 if (launch) launch.addEventListener('click',()=>selectTab(entry,'demo'));

 detailContent.querySelectorAll('[data-close-modal]').forEach(button=>{
  button.addEventListener('click', closeDetail);
 });

 const inlineClose = detailContent.querySelector('[data-inline-close]');
 if (inlineClose) inlineClose.addEventListener('click', closeDetail);

 if (entry.demo) {
  const toolbar=document.createElement('div'); toolbar.className='dialog-tabbar';
  toolbar.innerHTML=`<button type="button" class="${view==='overview'?'selected':''}" data-tab="overview" aria-pressed="${view==='overview'}">01 / PROJECT STORY</button><button type="button" class="${view==='demo'?'selected':''}" data-tab="demo" aria-pressed="${view==='demo'}">02 / INTERACTIVE DEMO</button>`;
  detailContent.prepend(toolbar);
  toolbar.querySelectorAll('[data-tab]').forEach(button=>button.addEventListener('click',()=>selectTab(entry,button.dataset.tab)));
 }
}
function openDetail(id,showDemo=false) {
 const entry=cases[id]; if (!entry) return;

 /* AAUW TOP LINK V4 */
 detailDialog.classList.toggle(
   'aauw-simple-dialog',
   id === 'aauw'
 );

 let siteLink = detailDialog.querySelector(
   '[data-aauw-website]'
 );

 if (!siteLink) {
   siteLink = document.createElement('a');

   siteLink.href = 'https://aauwberea.wordpress.com/';
   siteLink.textContent = 'LINK ↗';
   siteLink.target = '_blank';
   siteLink.rel = 'noopener noreferrer';
   siteLink.dataset.aauwWebsite = 'true';

   const closeButton = document.getElementById('detail-close');

   closeButton.parentElement.insertBefore(
     siteLink,
     closeButton
   );
 }

 siteLink.hidden = id !== 'aauw';

 document.getElementById('detail-label').textContent=entry.kind;
 document.getElementById('detail-title').textContent=entry.title;
 /* NEXTGEN TOP HEADER START */
 detailDialog.classList.toggle('ng2-dialog', id === 'nextgen');

 if (id === 'nextgen') {
   document.getElementById('detail-title').innerHTML =
     'NextGen <span class="ng2-outline">Justice</span>';
 }
 /* NEXTGEN TOP HEADER END */
 

 detailDialog.classList.toggle(
  'work-experience-dialog',
  ['labor','celts','aauw','nextgen','aicollective','snapchat'].includes(id)
 );

 detailDialog.classList.toggle(
  'berea-work-dialog',
  id === 'snapchat'
 );

 detailDialog.classList.toggle('ai-custom-dialog', id === 'aicollective');
 

/* WORK DIALOG CONTROLS START */

 const workCase = id === 'labor' || id === 'celts';

 detailDialog.classList.toggle(
  'iw-dialog', workCase
 );

 if (workCase) {
  document.getElementById('detail-title').innerHTML =
   id === 'labor'
    ? 'Labor Status <span class="iw-outline">Form</span>'
    : 'CELTS <span class="iw-outline">Application</span>';
 }

 let repoLink = detailDialog.querySelector(
  '[data-work-repo]'
 );

 if (!repoLink) {
  repoLink = document.createElement('a');
  repoLink.dataset.workRepo = 'true';
  repoLink.className = 'iw-repo';
  repoLink.target = '_blank';
  repoLink.rel = 'noopener noreferrer';
  repoLink.textContent = 'LINK ↗';

  document.getElementById('detail-close').before(repoLink);
 }

 repoLink.hidden = !workCase;

 if (workCase) {
  repoLink.href =
   'https://github.com/BCStudentSoftwareDevTeam/' +
   (id === 'labor' ? 'lsf' : 'celts');

  repoLink.setAttribute(
   'aria-label',
   'Open ' + (id === 'labor' ? 'LSF' : 'CELTS') +
   ' GitHub repository'
  );
 }

/* WORK DIALOG CONTROLS END */

/* INSTAGRAM NAVY DESIGN SWITCH */
 detailDialog.classList.toggle('ig-focus', id === 'instagram');
 /* COMPACT AWARD DIALOG CLASS */
 const compactAward = id === 'mindroute' || id === 'mam';
 detailDialog.classList.toggle(
   'compact-award-dialog',
   compactAward
 );

 if (compactAward) {
   detailDialog.style.removeProperty('height');
 }
 
 /* COMPACT LAB CLASS */
 detailDialog.classList.toggle(
   'compact-lab-dialog',
   ['trove','nand','bacnet','observatory'].includes(id)
 );
 detailDialog.classList.remove('lab-demo-view');
 detailDialog.showModal();
 document.body.classList.add('modal-open');
 selectTab(entry,showDemo && entry.demo?'demo':'overview');
 document.getElementById('detail-close').focus({preventScroll:true});
}
function closeDetail() {if(detailDialog.open)detailDialog.close()}
function closeContact() {if(contactDialog.open)contactDialog.close()}
document.getElementById('detail-close').addEventListener('click',closeDetail);
document.getElementById('contact-close').addEventListener('click',closeContact);
detailDialog.addEventListener('close',()=>{detailContent.replaceChildren();document.body.classList.remove('modal-open')});
contactDialog.addEventListener('close',()=>{document.body.classList.remove('modal-open')});
for (const dialog of [detailDialog,contactDialog]) dialog.addEventListener('click',event=>{
 if(event.target===dialog)dialog.close();
});
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-detail]');
 if(button){openDetail(button.dataset.detail,button.dataset.demoFirst==='true');return;}
});

// Contact links are deliberately disabled unless configured with real destinations.
function linkOrDisabled(button, label, url) {
 if(!url)return;
 const a=document.createElement('a');a.href=url;a.textContent=label+' ↗';a.target='_blank';a.rel='noopener noreferrer';a.className='verified-contact-link';button.replaceWith(a);
}
const contactButtons=contactDialog.querySelectorAll('.contact-links button');
linkOrDisabled(contactButtons[0],'Email',CONTACT.email?`mailto:${CONTACT.email}`:null);
linkOrDisabled(contactButtons[1],'LinkedIn',CONTACT.linkedin);
linkOrDisabled(contactButtons[2],'GitHub',CONTACT.github);
document.querySelectorAll('[data-contact]').forEach(btn=>btn.addEventListener('click',()=>{contactDialog.showModal();document.body.classList.add('modal-open')}));
document.getElementById('resume').addEventListener('click',()=>{
 if(CONTACT.resume){window.open(CONTACT.resume,'_blank','noopener,noreferrer');return;}
 document.getElementById('resume-msg').hidden=false;
});

/* Education cards: hover desktop, click/tap/keyboard to flip. Awards stay static. */
document.querySelectorAll('.edu-flip-card').forEach(card => {
  card.addEventListener('click', () => {
    const flipped = !card.classList.contains('is-flipped');
    card.classList.toggle('is-flipped', flipped);
    card.setAttribute('aria-pressed', String(flipped));
  });
});

/* CURRENT WORK — ANIMATED IMPACT COUNTERS */

(function () {

  function initializeCounters() {

    const counters = document.querySelectorAll(
      '.sheet-work .work-impact-block strong'
    );

    if (!counters.length) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    counters.forEach(counter => {

      const original = counter.textContent.trim();

      // Extract number and preserve surrounding text.
      const match = original.match(/^(.*?)(\d[\d,]*)(.*)$/);

      if (!match) return;

      counter.dataset.prefix = match[1];
      counter.dataset.target = match[2].replace(/,/g, '');
      counter.dataset.suffix = match[3];
      counter.dataset.original = original;

    });

    function animateCounter(counter) {

      const target = Number(counter.dataset.target);

      if (!Number.isFinite(target)) return;

      const prefix = counter.dataset.prefix;
      const suffix = counter.dataset.suffix;

      const duration = 1700; // 1.1 seconds
      const start = performance.now();

      function update(now) {

        const progress = Math.min(
          (now - start) / duration,
          1
        );

        // Fast, smooth count-up animation
        const eased = 1 - Math.pow(1 - progress, 4);

        const value = Math.round(target * eased);

        counter.textContent =
          prefix + value.toLocaleString('en-US') + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = counter.dataset.original;
        }
      }

      requestAnimationFrame(update);
    }

    const section = document.querySelector(
      '.sheet-work'
    );

    if (!section) return;

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;

          counters.forEach(counter => {
            if (!counter.dataset.target) return;

            if (!reduceMotion) {
              counter.textContent =
                counter.dataset.prefix +
                '0' +
                counter.dataset.suffix;

              animateCounter(counter);
            }
          });

          // Play once when the section first appears
          observer.unobserve(entry.target);
        });

      },
      {
        threshold: 0.90
      }
    );

    observer.observe(section);
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      initializeCounters
    );
  } else {
    initializeCounters();
  }

})();

/* === COMBINED RESEARCH BOARD SCRIPT START === */
document.addEventListener('DOMContentLoaded', () => {
  const research = document.getElementById('research');
  if (!research || research.dataset.comboBuilt === 'true') return;

  const projects = document.getElementById('projects');
  const labs = document.getElementById('labs');

  if (projects) projects.classList.add('combo-hidden-section');
  if (labs) labs.classList.add('combo-hidden-section');

  research.dataset.comboBuilt = 'true';
  research.dataset.name = 'Competition awards, publications and projects';
  research.classList.add('combo-board-section');

  const portfolioCases = (typeof cases !== 'undefined' && cases) ? cases : {};
  const getEntry = (id, fallback = {}) => Object.assign({}, fallback, portfolioCases[id] || {});

  const mindroute = getEntry('mindroute', { title: 'MindRoute', image: 'assets/mr.png' });
  const instagram = getEntry('instagram', { title: 'Instagram Redesign', image: 'assets/insta.png' });
  const mam = getEntry('mam', { title: 'MAMAGURT Pitch', image: 'assets/mam.png' });
  const trove = getEntry('trove', { title: 'Trove', image: 'assets/trove.png' });
  const nand = getEntry('nand', { title: 'NAND Lab', image: 'assets/nand.png' });

  const imageOrPlaceholder = (entry, placeholderHtml = '') => {
    if (entry.image) return `<img src="${entry.image}" alt="${entry.title}">`;
    return placeholderHtml || `<div class="combo-placeholder"><b>${entry.title}</b></div>`;
  };

  research.innerHTML = `
    <div class="combo-board">
      <div class="combo-side-label combo-side-left">Competition Awards &amp; Publication</div>

      <div class="combo-left-column">
        <section class="combo-panel combo-publications">
          <h3>Publications &amp; Presentations</h3>
          <ul>
            <li><span class="combo-doc">▣</span><span class="combo-title">Talks that Builds: Exploring Communication factors for the Success of Emerging Professional in Product Teams</span></li>
            <li><span class="combo-doc">▣</span><span class="combo-title">Optimization and pruning of building AI/ML only on the client side in the legal sector</span></li>
            <li><span class="combo-doc">▣</span><span class="combo-title">Co-Cultural Identities Impact on Appalachian College Student’s Health-Seeking Behaviors</span></li>
          </ul>
        </section>

        <section class="combo-panel combo-awards-wrap">
          <h3>Competition Awards</h3>

          <div class="combo-awards-grid">
            <button type="button" class="combo-award-card combo-wide" data-detail="mindroute">
              ${imageOrPlaceholder(mindroute)}
              <span class="combo-award-tag">↗</span>
            </button>

            <button type="button" class="combo-award-card combo-small" data-detail="instagram">
              ${imageOrPlaceholder(
                instagram,
                '<div class="combo-placeholder"><b>INSTAGRAM</b><small>REDESIGN / ACCESSIBILITY</small></div>'
              )}
              <span class="combo-award-tag">↗</span>
            </button>

            <button type="button" class="combo-award-card combo-small" data-detail="mam">
              ${imageOrPlaceholder(mam)}
              <span class="combo-award-tag">↗</span>
            </button>
          </div>
        </section>
      </div>

      <div class="combo-side-label combo-side-right">Projects</div>

      <div class="combo-right-column">
        <article class="combo-project-box">
          ${imageOrPlaceholder(trove)}
          <button type="button" class="combo-cta" data-detail="trove" data-demo-first="true">Immersive Experience</button>
        </article>

        <article class="combo-project-box">
          ${imageOrPlaceholder(nand)}
          <button type="button" class="combo-cta" data-detail="nand" data-demo-first="true">Immersive Experience</button>
        </article>
      </div>
    </div>
  `;
});
/* === COMBINED RESEARCH BOARD SCRIPT END === */


/* === GLOBAL ALIGNED BLUEPRINT GRID SCRIPT START === */

(function () {

  function setupAlignedGrid() {
    const exhibition = document.querySelector('.exhibition');

    if (!exhibition ||
        exhibition.dataset.gridAligned === 'true') return;

    exhibition.dataset.gridAligned = 'true';

    const sheets = Array.from(
      exhibition.querySelectorAll(':scope > .sheet')
    );

    let scheduled = false;

    function update() {
      scheduled = false;

      const origin = exhibition.getBoundingClientRect();

      for (const sheet of sheets) {
        const rect = sheet.getBoundingClientRect();

        const x = -(
          rect.left - origin.left + exhibition.scrollLeft
        );

        const y = -(
          rect.top - origin.top + exhibition.scrollTop
        );

        const px = `${Math.round(x)}px`;
        const py = `${Math.round(y)}px`;

        if (sheet.style.getPropertyValue('--grid-phase-x') !== px) {
          sheet.style.setProperty('--grid-phase-x', px);
        }

        if (sheet.style.getPropertyValue('--grid-phase-y') !== py) {
          sheet.style.setProperty('--grid-phase-y', py);
        }
      }
    }

    function requestUpdate() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(update);
    }

    /* Re-align if sections change size */
    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(requestUpdate);

      observer.observe(exhibition);
      sheets.forEach(sheet => observer.observe(sheet));
    }

    window.addEventListener('resize', requestUpdate, {
      passive: true
    });

    requestUpdate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      setupAlignedGrid
    );
  } else {
    setupAlignedGrid();
  }

})();

/* === GLOBAL ALIGNED BLUEPRINT GRID SCRIPT END === */


/* PUBLICATION LINKS START */

document.addEventListener('DOMContentLoaded', () => {

  const links = [
    'https://arxiv.org/abs/2601.02421',
    'https://docs.google.com/document/d/1XAQJyrKeq2FJy-h7KUQk97Hy_fAJvdQd9XcIty9dcFU/edit?usp=sharing',
    'https://comm.uky.edu/kchc/program/schedule/2024/paperposter/2197'
  ];

  const publications = document.querySelectorAll(
    '#research .combo-publications .combo-title'
  );

  publications.forEach((element, index) => {

    if (!links[index]) return;

    const anchor = document.createElement('a');

    anchor.className = 'combo-title';
    anchor.href = links[index];
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.textContent = element.textContent.trim();

    element.replaceWith(anchor);

  });

});

/* PUBLICATION LINKS END */



/* INSTAGRAM DYNAMIC HEIGHT START */
(function () {
  const dialog = document.getElementById("detail-dialog");
  if (!dialog) return;

  function fitInstagram() {
    if (!dialog.open ||
        !dialog.classList.contains("ig-focus")) return;

    const header = dialog.querySelector(".dialog-header");
    const content = dialog.querySelector(".dialog-content");
    const layout = content?.querySelector(".dialog-layout");

    if (!header || !content || !layout) return;

    dialog.style.setProperty("height", "auto", "important");

    const computed = getComputedStyle(content);

    const padding =
      parseFloat(computed.paddingTop) +
      parseFloat(computed.paddingBottom);

    const desiredHeight = Math.ceil(
      header.getBoundingClientRect().height +
      layout.getBoundingClientRect().height +
      padding + 4
    );

    const maxHeight = window.innerHeight - 32;

    dialog.style.setProperty(
      "height",
      Math.min(desiredHeight, maxHeight) + "px",
      "important"
    );
  }

  document.addEventListener("click", event => {
    const trigger = event.target.closest("[data-detail]");
    if (!trigger) return;

    if (trigger.dataset.detail === "instagram") {
      requestAnimationFrame(() => {
        requestAnimationFrame(fitInstagram);
      });
    } else {
      dialog.style.removeProperty("height");
    }
  });

  dialog.addEventListener("close", () => {
    dialog.style.removeProperty("height");
  });

  window.addEventListener("resize", () => {
    requestAnimationFrame(fitInstagram);
  });
})();
/* INSTAGRAM DYNAMIC HEIGHT END */
