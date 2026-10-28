// Tiny pre-paint theme choice: stored language first, otherwise the browser's.
(() => {
  try {
    const stored = localStorage.getItem("silverhalide-lang");
    const lang = stored === "en" || stored === "zh"
      ? stored
      : (navigator.language || "").toLowerCase().startsWith("en") ? "en" : "zh";
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.documentElement.dataset.lang = lang;
  } catch {
    document.documentElement.lang = "zh-CN";
    document.documentElement.dataset.lang = "zh";
  }

  // The darkroom must open even if a theme or script request is interrupted.
  // Do not hide a healthy page early: the app fades the curtain itself once
  // its first frame is ready, and this only rescues a stalled load.
  const rescue = () => {
    if (window.__silverHomeReady) return;
    document.body?.classList.remove("booting");
    document.getElementById("bootVeil")?.classList.add("is-gone");
  };
  window.setTimeout(rescue, 5000);
  window.addEventListener("load", () => window.setTimeout(rescue, 3500));

  // Keep the home page recoverable if storage is locked down by the browser.
  window.addEventListener("error", (event) => {
    if (!document.body?.classList.contains("booting")) return;
    const source = String(event.filename || "");
    if (source.includes("app.js")) {
      document.body.classList.remove("booting");
      document.getElementById("bootVeil")?.classList.add("is-gone");
    }
  });
})();
