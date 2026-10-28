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
  window.setTimeout(() => {
    document.body?.classList.remove("booting");
    document.getElementById("bootVeil")?.classList.add("is-gone");
  }, 6000);
})();
