// WhatsApp links open with a ready-made first message
(function () {
  var msg = "Hi Kane, I saw your page and would like to grab a coffee chat!";
  document.querySelectorAll(".js-wa").forEach(function (a) {
    a.href = "https://wa.me/6589033973?text=" + encodeURIComponent(msg);
  });

  // Nav border once the page scrolls
  var nav = document.getElementById("nav");
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 8);
    // Mobile sticky button appears once the hero's own buttons are out of view
    document.body.classList.toggle("past-hero", window.scrollY > window.innerHeight * 0.8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Footer year
  document.querySelectorAll(".js-yr").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Opening a link to #important expands the disclosures
  function openImportant() {
    if (location.hash === "#important") {
      var d = document.getElementById("important");
      if (d) d.open = true;
    }
  }
  openImportant();
  window.addEventListener("hashchange", openImportant);
  // ---------- motion ----------
  window.__siteReady = true;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var sel = ".sec-head,.goal,.goals-foot,.about-img,.about-body > *,.service,.free,.more-link,.step,.steps-cta,.faq details,.contact > div > *,.contact-img,.case,.sly-card,.cta-band";
  var items = Array.prototype.slice.call(document.querySelectorAll(sel));

  // Stagger siblings that share a parent (cards in a grid rise one after another)
  items.forEach(function (el) {
    var sibs = Array.prototype.filter.call(el.parentNode.children, function (c) { return items.indexOf(c) > -1; });
    var i = sibs.indexOf(el);
    if (i > 0) el.style.setProperty("--d", Math.min(i * 90, 450) + "ms");
  });

  function countUp(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    if (!target || reduce) return;
    var start = null, dur = 1400;
    function fmt(n) { return "+$" + Math.round(n).toLocaleString("en-US"); }
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    el.textContent = fmt(0);
    requestAnimationFrame(step);
  }

  function show(el) {
    el.classList.add("in");
    setTimeout(function () { el.style.removeProperty("--d"); }, 1300);
    var nums = el.querySelectorAll("[data-count]");
    for (var k = 0; k < nums.length; k++) countUp(nums[k]);
  }

  if (!("IntersectionObserver" in window) || reduce) {
    items.forEach(show);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }
})();
