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
})();
