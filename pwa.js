// Convierte Libro DROPS en app instalable (PWA).
// Se activa con una sola línea en index.html: <script src="pwa.js"></script>
(function () {
  var head = document.head;
  function add(tag, attrs) {
    var el = document.createElement(tag);
    for (var k in attrs) el.setAttribute(k, attrs[k]);
    head.appendChild(el);
  }
  add("link", { rel: "manifest", href: "manifest.webmanifest" });
  add("link", { rel: "apple-touch-icon", href: "icons/apple-touch-icon.png" });
  add("meta", { name: "theme-color", content: "#1F2B31" });
  add("meta", { name: "apple-mobile-web-app-capable", content: "yes" });
  add("meta", { name: "mobile-web-app-capable", content: "yes" });
  add("meta", { name: "apple-mobile-web-app-title", content: "Libro DROPS" });
  add("meta", { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" });
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function (e) {
        console.warn("Service worker no registrado:", e);
      });
    });
  }
})();
