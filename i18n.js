/**
 * Interface copy for 银盐调色台 / Silver Lab.
 * Loaded before app.js; the app calls SilverI18n on every language change.
 */
(() => {
  "use strict";

  const STORAGE_KEY = "silverhalide-lang";
  const listeners = new Set();
  const supported = ["zh", "en"];

  const MESSAGES = {
    zh: {
      "brand.name": "银盐",
      "brand.subtitle": "胶片气质调色台",
      "privacy": "全本地处理 · 原片不上传",
      "top.add": "添加照片",
      "top.export": "导出成片",
      "library.eyebrow": "LOOK LIBRARY / 01",
      "library.desc": "相机、无人机、联名手机与专业软件，换一套看世界的方式。",
      "library.disclaimer": "依据公开官方描述、联名工作流与民间经典取向独立调色，并非品牌官方 LUT 或认证。",
      "library.basis": "查看调色依据",
      "library.replay": "再看一遍用法",
      "brand.all": "全部",
      "brand.hasselblad": "哈苏",
      "brand.leica": "徕卡",
      "brand.ricoh": "理光",
      "brand.fujifilm": "富士",
      "brand.dji": "大疆",
      "brand.xiaomi": "小米",
      "brand.oppo": "OPPO",
      "brand.software": "软件",
      "brand.hasselbladFull": "哈苏",
      "brand.leicaFull": "徕卡",
      "brand.ricohFull": "理光",
      "brand.fujifilmFull": "富士",
      "brand.djiFull": "大疆哈苏",
      "brand.xiaomiFull": "小米徕卡",
      "brand.oppoFull": "OPPO哈苏",
      "brand.softwareFull": "专业软件",
      "stage.eyebrow": "DARKROOM / 02",
      "stage.waiting": "等待照片",
      "stage.prev": "上一张照片",
      "stage.next": "下一张照片",
      "stage.hint": "拖动中线看原片 · ← → 换照片 · B 看原片",
      "dock.eyebrow": "LOOKS / 随手换一套",
      "looks.swipe": "滑看风格",
      "looks.count": "种风格",
      "depth.looks": "选气质",
      "depth.photograph": "看照片",
      "depth.print": "冲印出片",
      "mobile.exportOne": "只出这张",
      "mobile.exportAll": "导出整条片卷",
      "mobile.roll": "片卷",
      "mobile.advanced": "进阶",
      "mobile.back": "返回暗房",
      "empty.eyebrow": "DROP YOUR MOMENTS HERE",
      "empty.title": "把照片放进暗房",
      "empty.copy": "可以一次选多张。选好后，挑一种气质，再按“套到全部”。",
      "empty.choose": "选择照片",
      "empty.local": "本地读取",
      "empty.batch": "批量处理",
      "empty.original": "不损原片",
      "preview.before": "原片预览",
      "preview.after": "调色后预览",
      "preview.afterLabel": "调色后",
      "preview.beforeLabel": "原片",
      "preview.split": "拖动查看调色前后对比",
      "zoom.fit": "适应",
      "zoom.group": "照片缩放",
      "zoom.out": "缩小照片",
      "zoom.in": "放大照片",
      "zoom.reset": "完整显示，恢复原始比例",
      "zoom.hint": "点按收起 · 拖动对比",
      "drop.title": "松手，开始冲印",
      "drop.copy": "支持一次拖入多张照片",
      "film.eyebrow": "CONTACT SHEET / 03",
      "film.title": "片卷",
      "film.add": "继续添加",
      "film.empty": "这里会排好你的整条片卷",
      "film.emptyCta": "先放几张照片进来",
      "film.select": "选择 {name}，当前风格 {brand} {preset}",
      "film.remove": "移除 {name}",
      "controls.eyebrow": "DEVELOP / 04",
      "controls.title": "冲印控制",
      "controls.current": "当前风格",
      "basis.label": "调色依据",
      "basis.official": "官方取向",
      "basis.community": "民间取向",
      "slider.recommended": "推荐值",
      "slider.strength": "风格强度",
      "slider.strengthHint": "哈苏、徕卡、理光、富士的官方或经典取向",
      "slider.grain": "颗粒感",
      "slider.grainHint": "按相机底片气质减弱",
      "slider.reset": "回到推荐值",
      "slider.atRecommended": "已在推荐值",
      "slider.recommendedNote": "推荐值：强度 100%、颗粒 100%。先按推荐值看一遍，再微调。",
      "slider.tunedNote": "已微调。强度一般 100–115% 足够；颗粒 80–115% 最自然，太高会像加了噪点。",
      "slider.initialNote": "建议先用推荐值：强度 100%，品牌味已完整；颗粒 100%，细腻可见。",
      "sync.apply": "把当前风格套到全部",
      "sync.alreadyAll": "全部照片已用这套",
      "sync.allSet": "全部已套用",
      "sync.thisOne": "仅这张已套用",
      "tweak.eyebrow": "TWEAK / 微调",
      "tweak.copy": "推荐值 100 / 100，一般不用动。",
      "sync.or": "或者只导出这一张，两种出片互不影响。",
      "four.title": "一张照片，四种气质",
      "four.copy": "每张照片同时冲出哈苏、徕卡、理光、富士四个版本，打包下载。",
      "four.export": "四风格批量导出",
      "four.count": "{photos} 张照片 → {versions} 个版本",
      "output.title": "出片",
      "output.size": "尺寸",
      "output.size4096": "长边 4096px · 推荐",
      "output.size6000": "长边 6000px · 精细",
      "output.size2560": "长边 2560px · 轻量",
      "output.sizeOriginal": "保持原始尺寸",
      "output.format": "格式",
      "output.jpeg": "JPG · 体积小",
      "output.png": "PNG · 无损",
      "output.quality": "JPG 画质",
      "output.exportAll": "导出整条片卷",
      "output.exportOne": "只导出当前这一张",
      "output.saveZip": "保存 ZIP",
      "output.none": "尚未选片",
      "output.estimate": "{count} 张 · 长边 {size}px",
      "output.estimateOriginal": "{count} 张 · 原始尺寸",
      "processing.cancel": "取消",
      "count.photos": "{count} 张",
      "count.sheet": "{count} 张",
      "count.looks": "{count} looks",
      "toast.alreadyRecommended": "你现在用的就是推荐值：强度 100%，颗粒 100%。",
      "toast.returnedRecommended": "已回到推荐值：强度 100%，颗粒 100%。",
      "toast.exporting": "正在冲印，请等这一批完成后再添加照片。",
      "toast.maxFiles": "一次最多放 {max} 张照片，方便保持流畅。",
      "toast.noSupported": "没有找到可读的照片。请选择 JPG、PNG 或 WebP。",
      "toast.roomLeft": "这次先放 {room} 张，余下的可以下一批再加。",
      "toast.reading": "正在读入 {count} 张照片…",
      "toast.skipped": "{count} 张照片格式暂不支持：{names}",
      "toast.added": "已放入 {count} 张照片。",
      "toast.removed": "已从片卷移除《{name}》。",
      "toast.applied": "已把「{preset}」套到 {count} 张照片。",
      "toast.partial": "已停下，已经完成的 {count} 个版本已打好包，可从右侧保存。",
      "toast.cancelled": "已取消这次冲印。",
      "toast.failures": "{count} 张未能导出：{names}",
      "toast.packed": "已打包 {count} 个版本。",
      "toast.exportedOne": "这一张已经出片。",
      "grain.none": "无",
      "grain.light": "轻",
      "grain.fine": "细腻",
      "grain.standard": "标准",
      "grain.visible": "明显",
      "grain.oldFilm": "老胶片",
      "grain.en.none": "None",
      "grain.en.light": "Light",
      "grain.en.fine": "Fine",
      "grain.en.standard": "Standard",
      "grain.en.visible": "Visible",
      "grain.en.oldFilm": "Vintage",
      "processing.cancelling": "正在收好已经冲印的底片…",
      "processing.fourTitle": "四种气质，一起冲印",
      "processing.archiveTitle": "整条片卷，一起冲印",
      "processing.oneTitle": "正在冲印这一张",
      "processing.detail": "共 {count} 个版本 · 照片只在你的设备上处理",
      "processing.progress": "第 {index} / {total} 张 · {preset}",
      "processing.zip": "正在封装 ZIP…",
      "download.partial": "已完成部分可保存",
      "download.done": "冲印完成",
      "download.one": "这一张已出片",
      "download.ready": "文件已准备好",
      "download.count": "{count} 张 · {size}",
      "download.file": "文件已下载",
      "guide.seenKey": "silverhalide-guide-seen-v1",
      "guide.skip": "跳过引导",
      "guide.next": "下一步",
      "guide.start": "看一遍页面指引",
      "guide.done": "我已会了，直接开始",
      "guide.welcomeEyebrow": "FIRST LOOK / 第一次用",
      "guide.welcomeTitleHtml": "三步，给照片<br />换一套光。",
      "guide.welcomeCopy": "不用学软件，只要选照片、点气质、导出。颜色只在这台设备上处理。",
      "guide.step1Title": "选照片",
      "guide.step1Body": "一次多选也没关系，缩略图会在下方排成片卷。",
      "guide.step2Title": "挑气质",
      "guide.step2Body": "点左侧任意一张，当前照片立刻换色，随时可改。",
      "guide.step3Title": "先用推荐值",
      "guide.step3Body": "强度、颗粒都用 100%；「套到全部」后才整卷导出。",
      "guide.steps": [
        {
          target: "stage",
          title: "照片先进暗房",
          body: "把照片拖进来，或点「选择照片」。一次可以选多张；处理全程只在这台设备上，原片不会被改动。",
          next: "选好照片"
        },
        {
          target: "presetGrid",
          title: "向下点一张气质",
          body: "在左侧按哈苏、徕卡、理光、富士筛选，再点一张。它会立刻套到当前照片，下面片卷里的缩略图也会同步更新。",
          next: "知道了"
        },
        {
          target: "sliders",
          title: "先用推荐值",
          body: "强度 100% / 颗粒 100% 是设计好的标准，不需要每次重新调。想更浓可以加到 115% 左右；颗粒一般不超过 115%。",
          next: "知道了"
        },
        {
          target: "applyAll",
          title: "满意了，再套到全部",
          body: "点「把当前风格套到全部」把当前风格同步到整条片卷，右侧小数字就是张数。只改单张时，直接点下方片卷切换即可。",
          next: "知道了"
        },
        {
          target: "fourLook",
          title: "两种出片，说清楚再选",
          body: "「四风格批量导出」：每张照片同时冲出哈苏、徕卡、理光、富士共 4 版；再往下的深色「出片」区，则按每张当前选的风格打包。",
          next: "开始用"
        }
      ]
    },
    en: {
      "brand.name": "SILVER",
      "brand.subtitle": "A small darkroom for colour mood",
      "privacy": "100% on-device · Originals stay untouched",
      "top.add": "Add photos",
      "top.export": "Export",
      "library.eyebrow": "LOOK LIBRARY / 01",
      "library.desc": "Cameras, drones, co-branded phones and pro software. A new way to see the world.",
      "library.disclaimer": "Independent colour grades inspired by public notes, co-branded workflows and well-known community looks — not official brand LUTs or certifications.",
      "library.basis": "How these looks were built",
      "library.replay": "Replay the tour",
      "brand.all": "All",
      "brand.hasselblad": "Hassel",
      "brand.leica": "Leica",
      "brand.ricoh": "Ricoh",
      "brand.fujifilm": "Fuji",
      "brand.dji": "DJI",
      "brand.xiaomi": "Mi",
      "brand.oppo": "OPPO",
      "brand.software": "Software",
      "brand.hasselbladFull": "Hasselblad",
      "brand.leicaFull": "Leica",
      "brand.ricohFull": "Ricoh",
      "brand.fujifilmFull": "Fujifilm",
      "brand.djiFull": "DJI × Hasselblad",
      "brand.xiaomiFull": "Xiaomi × Leica",
      "brand.oppoFull": "OPPO × Hasselblad",
      "brand.softwareFull": "Pro software",
      "stage.eyebrow": "DARKROOM / 02",
      "stage.waiting": "Waiting for a frame",
      "stage.prev": "Previous photo",
      "stage.next": "Next photo",
      "stage.hint": "Drag the line to compare · ← → to browse · B for the original",
      "dock.eyebrow": "LOOKS / swipe to change the mood",
      "looks.swipe": "swipe looks",
      "looks.count": "looks",
      "depth.looks": "Choose",
      "depth.photograph": "View",
      "depth.print": "Print",
      "mobile.exportOne": "This one",
      "mobile.exportAll": "Export roll",
      "mobile.roll": "Roll",
      "mobile.advanced": "Advanced",
      "mobile.back": "Back",
      "empty.eyebrow": "DROP YOUR MOMENTS HERE",
      "empty.title": "Put a photo in the darkroom",
      "empty.copy": "Pick one or many. Then choose a look, and apply it to the whole roll.",
      "empty.choose": "Choose photos",
      "empty.local": "On-device",
      "empty.batch": "Batch-ready",
      "empty.original": "Originals kept",
      "preview.before": "Original preview",
      "preview.after": "Graded preview",
      "preview.afterLabel": "Graded",
      "preview.beforeLabel": "Original",
      "preview.split": "Drag to compare before and after",
      "zoom.fit": "Fit",
      "zoom.group": "Photo zoom",
      "zoom.out": "Zoom out",
      "zoom.in": "Zoom in",
      "zoom.reset": "Show the whole photo at its original size",
      "zoom.hint": "Tap to fit · drag to compare",
      "drop.title": "Drop to start developing",
      "drop.copy": "Add several photos at once",
      "film.eyebrow": "CONTACT SHEET / 03",
      "film.title": "Roll",
      "film.add": "Add more",
      "film.empty": "Your whole roll will line up here",
      "film.emptyCta": "Start with a few photos",
      "film.select": "Select {name}, current look {brand} {preset}",
      "film.remove": "Remove {name}",
      "controls.eyebrow": "DEVELOP / 04",
      "controls.title": "Develop",
      "controls.current": "Current look",
      "basis.label": "LOOK BASIS",
      "basis.official": "Official",
      "basis.community": "Community",
      "slider.recommended": "Sweet spot",
      "slider.strength": "Look strength",
      "slider.strengthHint": "Reference",
      "slider.grain": "Grain",
      "slider.grainHint": "Reference",
      "slider.reset": "Reset",
      "slider.atRecommended": "At the sweet spot",
      "slider.recommendedNote": "Start here: strength 100%, grain 100%. Then tune to taste.",
      "slider.tunedNote": "Tuned by hand. 100–115% strength is plenty; 80–115% grain usually feels natural.",
      "slider.initialNote": "Start with 100% strength and 100% grain. The look is complete and the texture stays fine.",
      "sync.apply": "Apply this look to the roll",
      "sync.alreadyAll": "Already on the whole roll",
      "sync.allSet": "On the whole roll",
      "sync.thisOne": "Only this frame",
      "tweak.eyebrow": "TWEAK",
      "tweak.copy": "100 / 100 is the sweet spot.",
      "sync.or": "Or export just this frame. The two paths never conflict.",
      "four.title": "One photo, four moods",
      "four.copy": "Hasselblad, Leica, Ricoh and Fujifilm versions, developed together and packed as one download.",
      "four.export": "Export the four-look set",
      "four.count": "{photos} photos → {versions} versions",
      "output.title": "Output",
      "output.size": "Size",
      "output.size4096": "4096px long edge · recommended",
      "output.size6000": "6000px long edge · fine",
      "output.size2560": "2560px long edge · light",
      "output.sizeOriginal": "Original size",
      "output.format": "Format",
      "output.jpeg": "JPG · smaller files",
      "output.png": "PNG · lossless",
      "output.quality": "JPG quality",
      "output.exportAll": "Export the whole roll",
      "output.exportOne": "Export only this photo",
      "output.saveZip": "Save ZIP",
      "output.none": "No photos yet",
      "output.estimate": "{count} photos · {size}px long edge",
      "output.estimateOriginal": "{count} photos · original size",
      "processing.cancel": "Cancel",
      "count.photos": "{count} photos",
      "count.sheet": "{count} photos",
      "count.looks": "{count} looks",
      "toast.alreadyRecommended": "You're already at the sweet spot: 100% strength, 100% grain.",
      "toast.returnedRecommended": "Back to the sweet spot: 100% strength, 100% grain.",
      "toast.exporting": "Still developing. Add more photos when this batch finishes.",
      "toast.maxFiles": "{max} photos at a time keeps everything smooth.",
      "toast.noSupported": "No readable photos found. Choose JPG, PNG or WebP.",
      "toast.roomLeft": "Adding {room} for now. The rest can go in the next batch.",
      "toast.reading": "Reading {count} photos…",
      "toast.skipped": "{count} unsupported files: {names}",
      "toast.added": "{count} photos added.",
      "toast.removed": "Removed 《{name}》 from the roll.",
      "toast.applied": "Applied 「{preset}」 to {count} photos.",
      "toast.partial": "Stopped. The {count} finished versions are packed and ready on the right.",
      "toast.cancelled": "Development cancelled.",
      "toast.failures": "{count} photos could not be exported: {names}",
      "toast.packed": "Packed {count} versions.",
      "toast.exportedOne": "This photo is ready.",
      "grain.none": "None",
      "grain.light": "Light",
      "grain.fine": "Fine",
      "grain.standard": "Standard",
      "grain.visible": "Visible",
      "grain.oldFilm": "Vintage",
      "processing.cancelling": "Packing the frames already developed…",
      "processing.fourTitle": "Four moods, one batch",
      "processing.archiveTitle": "Developing the whole roll",
      "processing.oneTitle": "Developing this photo",
      "processing.detail": "{count} versions · Your photos stay on this device",
      "processing.progress": "{index} / {total} · {preset}",
      "processing.zip": "Packing the ZIP…",
      "download.partial": "Partial batch ready",
      "download.done": "Development complete",
      "download.one": "Photo ready",
      "download.ready": "Files are ready",
      "download.count": "{count} photos · {size}",
      "download.file": "File downloaded",
      "guide.skip": "Skip tour",
      "guide.next": "Next",
      "guide.start": "Show me around",
      "guide.done": "I've got this",
      "guide.welcomeEyebrow": "FIRST LOOK / A QUICK TOUR",
      "guide.welcomeTitleHtml": "Three steps,<br />a whole new light.",
      "guide.welcomeCopy": "No manual needed. Pick photos, choose a mood, export. Every pixel stays on your device.",
      "guide.step1Title": "Choose photos",
      "guide.step1Body": "Pick several if you like. They line up on the roll below.",
      "guide.step2Title": "Pick a mood",
      "guide.step2Body": "Tap any look. The current photo changes instantly — and you can change your mind.",
      "guide.step3Title": "Start at the sweet spot",
      "guide.step3Body": "Keep strength and grain at 100%. Apply to the roll, then export.",
      "guide.steps": [
        {
          target: "stage",
          title: "Photos enter the darkroom",
          body: "Drop photos in, or choose them. You can add a whole batch. Everything is processed on this device and your originals are untouched.",
          next: "Choose photos"
        },
        {
          target: "presetGrid",
          title: "Tap a mood below",
          body: "Filter by Hasselblad, Leica, Ricoh or Fujifilm on the left, then tap a card. It lands on the current photo instantly and the roll thumbnails follow.",
          next: "Got it"
        },
        {
          target: "sliders",
          title: "Start with the sweet spot",
          body: "100% strength and 100% grain are the reference. Around 115% is plenty extra; keep grain below about 115%.",
          next: "Got it"
        },
        {
          target: "applyAll",
          title: "Then apply it to the roll",
          body: "This sends the current look to every photo on the roll. The little number is your photo count. To change just one, pick it in the roll.",
          next: "Got it"
        },
        {
          target: "fourLook",
          title: "Two ways to walk away",
          body: "The four-look set develops a Hasselblad, Leica, Ricoh and Fujifilm version of every photo. The darker Output card packs each photo with its own chosen look.",
          next: "Let's begin"
        }
      ]
    }
  };

  function normalize(value) {
    return supported.includes(value) ? value : "zh";
  }

  let current = "zh";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    current = normalize(
      stored === "en" || stored === "zh"
        ? stored
        : (navigator.language || "").toLowerCase().startsWith("en")
          ? "en"
          : "zh",
    );
  } catch {
    current = "zh";
  }

  function t(key, params = {}) {
    const table = MESSAGES[current] || MESSAGES.zh;
    let text = table[key] ?? MESSAGES.zh[key] ?? key;
    for (const [name, value] of Object.entries(params)) {
      text = String(text).replaceAll(`{${name}}`, String(value));
    }
    return text;
  }

  function brandName(brandId, full = false) {
    return t(`brand.${brandId}${full ? "Full" : ""}`);
  }

  function setLanguage(language) {
    const next = normalize(language);
    if (next === current) return;
    current = next;
    try {
      localStorage.setItem(STORAGE_KEY, current);
    } catch {
      // Language can still work for this session without storage.
    }
    document.documentElement.lang = current === "en" ? "en" : "zh-CN";
    document.documentElement.dataset.lang = current;
    for (const listener of listeners) listener(current);
  }

  function onChange(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  window.SilverI18n = {
    t,
    brandName,
    setLanguage,
    onChange,
    get language() {
      return current;
    },
  };
  document.documentElement.lang = current === "en" ? "en" : "zh-CN";
  document.documentElement.dataset.lang = current;
})();
