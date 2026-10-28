(() => {
  "use strict";

  const BRANDS = {
    hasselblad: { name: "哈苏", en: "HASSELBLAD", letter: "H" },
    leica: { name: "徕卡", en: "LEICA", letter: "L" },
    ricoh: { name: "理光", en: "RICOH", letter: "R" },
    fujifilm: { name: "富士", en: "FUJIFILM", letter: "F" },
    dji: { name: "大疆哈苏", en: "DJI × HASSELBLAD", letter: "D" },
    xiaomi: { name: "小米徕卡", en: "XIAOMI × LEICA", letter: "X" },
    oppo: { name: "OPPO哈苏", en: "OPPO × HASSELBLAD", letter: "O" },
    software: { name: "专业软件", en: "PRO SOFTWARE", letter: "S" },
  };

  const BASE_PARAMS = {
    contrast: 1,
    saturation: 1,
    exposure: 0,
    temperature: 0,
    tint: 0,
    fade: 0,
    blackPoint: 0,
    whitePoint: 1,
    contrastPivot: 0.48,
    sCurve: 0.12,
    shadowLift: 0,
    shadowTint: [0.5, 0.5, 0.5],
    shadowTintAmount: 0,
    highlightTint: [0.5, 0.5, 0.5],
    highlightTintAmount: 0,
    highlightRolloff: 0.12,
    shoulderStart: 0.7,
    highlightDesat: 0.08,
    vignette: 0.1,
    grain: 0.025,
    clarity: 0.045,
    halation: 0,
    mono: 0,
    monoWeights: [0.299, 0.587, 0.114],
    channelMix: [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
  };

  // Preserve the source-oriented presets while making 100% read as a complete look.
  const makePreset = (preset) => ({
    ...preset,
    impact:
      preset.impact ??
      (preset.params?.mono > 0.5
        ? 1.06
        : preset.basis === "民间取向"
          ? 1.9
          : 1.7),
    params: {
      ...BASE_PARAMS,
      ...preset.params,
    },
  });

  const PRESETS = [
    makePreset({
      id: "hasselblad-hncs",
      brand: "hasselblad",
      name: "HNCS 自然",
      tagline: "平直肤色 · 奶油高光",
      basis: "官方取向",
      sourceName: "Hasselblad Natural Colour Solution",
      notes:
        "按 HNCS 官方强调的自然色、平滑层次与肤色连续性做独立近似；不是官方 LUT。",
      signature: true,
      swatch: "linear-gradient(142deg, #9aa99a 0%, #d8c4a7 48%, #6f5545 100%)",
      params: {
        contrast: 0.97,
        saturation: 0.92,
        exposure: 0.015,
        temperature: 0.025,
        tint: 0.004,
        fade: 0.012,
        blackPoint: 0.008,
        whitePoint: 0.985,
        contrastPivot: 0.46,
        sCurve: 0.1,
        shadowLift: 0.01,
        shadowTint: [0.57, 0.66, 0.69],
        shadowTintAmount: 0.022,
        highlightTint: [0.98, 0.85, 0.7],
        highlightTintAmount: 0.03,
        highlightRolloff: 0.2,
        shoulderStart: 0.68,
        highlightDesat: 0.11,
        vignette: 0.06,
        grain: 0.012,
        clarity: 0.035,
        halation: 0.015,
        channelMix: [
          [1.015, 0.006, -0.006],
          [0.002, 1.006, 0.003],
          [-0.004, 0.01, 1.005],
        ],
      },
    }),
    makePreset({
      id: "hasselblad-warm",
      brand: "hasselblad",
      name: "暖光编辑",
      tagline: "琥珀高光 · 青灰暗部",
      basis: "民间取向",
      sourceName: "中画幅暖调编辑共识",
      notes: "保留低饱和底子，用社区常见的杂志暖高光与冷暗部拉开空间。",
      swatch: "linear-gradient(142deg, #77908b 0%, #d9a970 54%, #764127 100%)",
      params: {
        contrast: 1.02,
        saturation: 0.91,
        exposure: 0.018,
        temperature: 0.085,
        tint: 0.01,
        fade: 0.035,
        blackPoint: 0.015,
        whitePoint: 0.97,
        contrastPivot: 0.47,
        sCurve: 0.16,
        shadowLift: 0.018,
        shadowTint: [0.32, 0.5, 0.55],
        shadowTintAmount: 0.06,
        highlightTint: [1, 0.76, 0.51],
        highlightTintAmount: 0.085,
        highlightRolloff: 0.24,
        shoulderStart: 0.64,
        highlightDesat: 0.18,
        vignette: 0.11,
        grain: 0.022,
        clarity: 0.03,
        halation: 0.045,
      },
    }),
    makePreset({
      id: "hasselblad-portrait",
      brand: "hasselblad",
      name: "中画幅肤色",
      tagline: "柔过渡 · 低调色偏",
      basis: "官方取向",
      sourceName: "HNCS 肤色与层次取向",
      notes: "压低高饱和色，优先保护肤色和高光之间的连续过渡。",
      swatch: "linear-gradient(142deg, #b8a89e 0%, #e4c5aa 50%, #856757 100%)",
      params: {
        contrast: 0.95,
        saturation: 0.88,
        exposure: 0.02,
        temperature: 0.025,
        tint: 0.006,
        fade: 0.02,
        blackPoint: 0.012,
        whitePoint: 0.98,
        contrastPivot: 0.49,
        sCurve: 0.06,
        shadowLift: 0.015,
        shadowTint: [0.58, 0.63, 0.62],
        shadowTintAmount: 0.014,
        highlightTint: [1, 0.86, 0.72],
        highlightTintAmount: 0.032,
        highlightRolloff: 0.26,
        shoulderStart: 0.62,
        highlightDesat: 0.14,
        vignette: 0.035,
        grain: 0.011,
        clarity: 0.018,
        halation: 0.025,
      },
    }),
    makePreset({
      id: "leica-m11",
      brand: "leica",
      name: "M11 自然",
      tagline: "细层次 · 深而不闷",
      basis: "官方取向",
      sourceName: "Leica M11 · Maestro III",
      notes:
        "以官方强调的细层次、自然观感和低噪暗部为方向，不做夸张焦外或德味染色。",
      swatch: "linear-gradient(142deg, #4e5a5a 0%, #b7a58e 51%, #4b3b34 100%)",
      params: {
        contrast: 1.08,
        saturation: 0.94,
        exposure: -0.005,
        temperature: -0.005,
        tint: 0.002,
        fade: 0.007,
        blackPoint: 0.004,
        whitePoint: 1,
        contrastPivot: 0.47,
        sCurve: 0.14,
        shadowLift: 0.004,
        shadowTint: [0.24, 0.36, 0.42],
        shadowTintAmount: 0.026,
        highlightTint: [1, 0.88, 0.73],
        highlightTintAmount: 0.025,
        highlightRolloff: 0.15,
        shoulderStart: 0.71,
        highlightDesat: 0.08,
        vignette: 0.12,
        grain: 0.018,
        clarity: 0.064,
        halation: 0.012,
        channelMix: [
          [1.03, -0.008, 0.004],
          [0.002, 1.004, 0.002],
          [-0.002, -0.008, 1.018],
        ],
      },
    }),
    makePreset({
      id: "leica-classic",
      brand: "leica",
      name: "经典德味",
      tagline: "深黑 · 冷影 · 克制红",
      basis: "民间取向",
      sourceName: "徕卡社区“德味”共识",
      notes: "强化微反差与冷暗部，保留厚实但不过熟的红，不再一味压黑。",
      signature: true,
      swatch: "linear-gradient(142deg, #263d4f 0%, #8e5344 47%, #a87852 100%)",
      params: {
        contrast: 1.18,
        saturation: 0.91,
        exposure: -0.01,
        temperature: -0.012,
        tint: 0,
        fade: 0.006,
        blackPoint: 0.004,
        whitePoint: 0.995,
        contrastPivot: 0.46,
        sCurve: 0.22,
        shadowLift: 0.002,
        shadowTint: [0.15, 0.3, 0.44],
        shadowTintAmount: 0.07,
        highlightTint: [1, 0.83, 0.62],
        highlightTintAmount: 0.038,
        highlightRolloff: 0.12,
        shoulderStart: 0.7,
        highlightDesat: 0.06,
        vignette: 0.18,
        grain: 0.028,
        clarity: 0.095,
        halation: 0.018,
        channelMix: [
          [1.035, -0.01, 0.004],
          [-0.006, 1.006, 0.002],
          [0.004, -0.012, 1.018],
        ],
      },
    }),
    makePreset({
      id: "leica-m9",
      brand: "leica",
      name: "M9 CCD",
      tagline: "青绿暗部 · 厚实红",
      basis: "民间取向",
      sourceName: "M9 / CCD 时代社区色感",
      notes: "用青绿阴影、较厚红和中低对比模拟老 CCD 印象，不是传感器仿真。",
      swatch: "linear-gradient(142deg, #2f5a52 0%, #b37c57 51%, #963b33 100%)",
      params: {
        contrast: 1.06,
        saturation: 1.06,
        exposure: 0.005,
        temperature: -0.03,
        tint: -0.025,
        fade: 0.028,
        blackPoint: 0.006,
        whitePoint: 0.98,
        contrastPivot: 0.5,
        sCurve: 0.11,
        shadowLift: 0.012,
        shadowTint: [0.16, 0.42, 0.36],
        shadowTintAmount: 0.105,
        highlightTint: [1, 0.84, 0.62],
        highlightTintAmount: 0.045,
        highlightRolloff: 0.19,
        shoulderStart: 0.68,
        highlightDesat: 0.1,
        vignette: 0.1,
        grain: 0.035,
        clarity: 0.05,
        halation: 0.035,
        channelMix: [
          [1.06, -0.012, 0.002],
          [0.004, 1.04, -0.01],
          [0.002, 0.012, 1.018],
        ],
      },
    }),
    makePreset({
      id: "leica-night",
      brand: "leica",
      name: "夜神",
      tagline: "蓝黑夜 · 暖灯点",
      basis: "民间取向",
      sourceName: "Noctilux 夜景社区配方",
      notes: "蓝黑底、暖高光与轻微辉光，让夜景保留灯色而不是被洗成灰。",
      swatch: "linear-gradient(142deg, #101a31 0%, #2b5b86 50%, #d88945 100%)",
      params: {
        contrast: 1.12,
        saturation: 0.96,
        exposure: 0.01,
        temperature: -0.055,
        tint: 0.014,
        fade: 0.025,
        blackPoint: 0.012,
        whitePoint: 0.98,
        contrastPivot: 0.42,
        sCurve: 0.2,
        shadowLift: 0.02,
        shadowTint: [0.08, 0.18, 0.34],
        shadowTintAmount: 0.14,
        highlightTint: [1, 0.68, 0.4],
        highlightTintAmount: 0.075,
        highlightRolloff: 0.29,
        shoulderStart: 0.58,
        highlightDesat: 0.18,
        vignette: 0.24,
        grain: 0.045,
        clarity: 0.055,
        halation: 0.19,
      },
    }),
    makePreset({
      id: "leica-mono",
      brand: "leica",
      name: "Monochrom",
      tagline: "纯光黑白 · 深部细节",
      basis: "官方取向",
      sourceName: "Leica M11 Monochrom",
      notes: "取官方黑白层次与高光细节方向，侧重深黑、纯净灰阶和细颗粒。",
      swatch: "linear-gradient(145deg, #e1dbcf 0%, #77756e 46%, #1b1b19 100%)",
      params: {
        contrast: 1.26,
        saturation: 0,
        exposure: 0,
        fade: 0.005,
        blackPoint: 0,
        whitePoint: 0.995,
        contrastPivot: 0.48,
        sCurve: 0.18,
        shadowLift: 0.002,
        shadowTint: [0.42, 0.43, 0.4],
        shadowTintAmount: 0.008,
        highlightTint: [1, 0.95, 0.85],
        highlightTintAmount: 0.012,
        highlightRolloff: 0.24,
        shoulderStart: 0.68,
        highlightDesat: 0,
        vignette: 0.22,
        grain: 0.052,
        clarity: 0.12,
        mono: 1,
        monoWeights: [0.31, 0.56, 0.13],
      },
    }),
    makePreset({
      id: "ricoh-positive",
      brand: "ricoh",
      name: "正片",
      tagline: "高反差 · 饱和街色",
      basis: "民间取向",
      sourceName: "GR Image Control · Positive Film",
      notes:
        "官方提供档位名称，视觉按 GR 社区常见的高反差、浓郁正片街拍印象独立实现。",
      signature: true,
      swatch: "linear-gradient(142deg, #245d53 0%, #d2a64c 50%, #b4432c 100%)",
      params: {
        contrast: 1.2,
        saturation: 1.18,
        exposure: 0.012,
        temperature: 0.04,
        tint: -0.014,
        fade: 0.018,
        blackPoint: 0.004,
        whitePoint: 0.99,
        contrastPivot: 0.48,
        sCurve: 0.23,
        shadowLift: 0.006,
        shadowTint: [0.15, 0.3, 0.24],
        shadowTintAmount: 0.038,
        highlightTint: [1, 0.84, 0.62],
        highlightTintAmount: 0.034,
        highlightRolloff: 0.19,
        shoulderStart: 0.67,
        highlightDesat: 0.12,
        vignette: 0.16,
        grain: 0.05,
        clarity: 0.082,
        halation: 0.025,
      },
    }),
    makePreset({
      id: "ricoh-negative",
      brand: "ricoh",
      name: "负片",
      tagline: "绿灰暗部 · 柔和肤色",
      basis: "民间取向",
      sourceName: "GR Image Control · Negative Film",
      notes: "取 GR 社区偏爱的绿灰阴影、柔肤色和轻颗粒街拍印象。",
      swatch: "linear-gradient(142deg, #405a4b 0%, #ad8c62 50%, #69341f 100%)",
      params: {
        contrast: 1.04,
        saturation: 0.82,
        exposure: 0.012,
        temperature: 0.05,
        tint: -0.035,
        fade: 0.05,
        blackPoint: 0.012,
        whitePoint: 0.97,
        contrastPivot: 0.46,
        sCurve: 0.12,
        shadowLift: 0.018,
        shadowTint: [0.18, 0.38, 0.31],
        shadowTintAmount: 0.105,
        highlightTint: [1, 0.78, 0.52],
        highlightTintAmount: 0.065,
        highlightRolloff: 0.26,
        shoulderStart: 0.64,
        highlightDesat: 0.18,
        vignette: 0.14,
        grain: 0.06,
        clarity: 0.065,
        halation: 0.03,
      },
    }),
    makePreset({
      id: "ricoh-hi-bw",
      brand: "ricoh",
      name: "高反差黑白",
      tagline: "硬光 · 粗颗粒",
      basis: "民间取向",
      sourceName: "GR Image Control · Hi-Contrast B&W",
      notes: "按档位名的强硬反差做粗颗粒、压黑和硬光街拍观感。",
      swatch: "linear-gradient(145deg, #d3cec1 0%, #56574f 38%, #161715 100%)",
      params: {
        contrast: 1.42,
        saturation: 0,
        fade: 0.006,
        blackPoint: 0.005,
        whitePoint: 0.995,
        contrastPivot: 0.46,
        sCurve: 0.2,
        shadowTint: [0.35, 0.37, 0.34],
        shadowTintAmount: 0.005,
        highlightTint: [0.96, 0.94, 0.87],
        highlightTintAmount: 0.008,
        highlightRolloff: 0.1,
        shoulderStart: 0.77,
        highlightDesat: 0,
        vignette: 0.27,
        grain: 0.085,
        clarity: 0.15,
        mono: 1,
        monoWeights: [0.29, 0.58, 0.13],
      },
    }),
    makePreset({
      id: "ricoh-retro",
      brand: "ricoh",
      name: "怀旧",
      tagline: "褪色暖黄 · 印刷灰",
      basis: "民间取向",
      sourceName: "GR Image Control · Retro",
      notes: "暖黄高光、抬黑和轻颗粒，模拟旧杂志印刷的松弛感。",
      swatch: "linear-gradient(142deg, #756451 0%, #c8a56d 50%, #824d36 100%)",
      params: {
        contrast: 0.93,
        saturation: 0.78,
        exposure: 0.01,
        temperature: 0.08,
        tint: 0.008,
        fade: 0.08,
        blackPoint: 0.03,
        whitePoint: 0.96,
        contrastPivot: 0.48,
        sCurve: 0.06,
        shadowLift: 0.022,
        shadowTint: [0.33, 0.34, 0.28],
        shadowTintAmount: 0.065,
        highlightTint: [1, 0.78, 0.51],
        highlightTintAmount: 0.1,
        highlightRolloff: 0.3,
        shoulderStart: 0.6,
        highlightDesat: 0.26,
        vignette: 0.14,
        grain: 0.058,
        clarity: 0.035,
        halation: 0.035,
      },
    }),
    makePreset({
      id: "ricoh-bleach",
      brand: "ricoh",
      name: "漂白",
      tagline: "银灰 · 低饱和高反差",
      basis: "民间取向",
      sourceName: "GR Image Control · Bleach Bypass",
      notes: "按漂白旁路的经典印象压低饱和、抬高反差，保留银灰高光。",
      swatch: "linear-gradient(142deg, #56605d 0%, #b5b1a4 49%, #302f2d 100%)",
      params: {
        contrast: 1.32,
        saturation: 0.42,
        exposure: 0.005,
        temperature: -0.018,
        fade: 0.012,
        blackPoint: 0.012,
        whitePoint: 0.985,
        contrastPivot: 0.47,
        sCurve: 0.25,
        shadowLift: 0.006,
        shadowTint: [0.28, 0.31, 0.3],
        shadowTintAmount: 0.018,
        highlightTint: [0.95, 0.94, 0.87],
        highlightTintAmount: 0.022,
        highlightRolloff: 0.1,
        shoulderStart: 0.74,
        highlightDesat: 0.08,
        vignette: 0.2,
        grain: 0.045,
        clarity: 0.12,
        halation: 0.015,
      },
    }),
    makePreset({
      id: "fujifilm-provia",
      brand: "fujifilm",
      name: "PROVIA",
      tagline: "通用 · 自然直出",
      basis: "官方取向",
      sourceName: "FUJIFILM 官方说明书 · PROVIA/STANDARD",
      notes: "对应官方“适合广泛题材”的定位，以均衡色彩和稳定层次为主。",
      swatch: "linear-gradient(142deg, #426c62 0%, #c5b58a 49%, #7b5b49 100%)",
      params: {
        contrast: 1.04,
        saturation: 1,
        exposure: 0.005,
        temperature: 0.008,
        fade: 0.012,
        blackPoint: 0.006,
        whitePoint: 0.99,
        contrastPivot: 0.48,
        sCurve: 0.1,
        shadowLift: 0.008,
        shadowTint: [0.43, 0.51, 0.56],
        shadowTintAmount: 0.014,
        highlightTint: [0.98, 0.89, 0.77],
        highlightTintAmount: 0.014,
        highlightRolloff: 0.17,
        shoulderStart: 0.69,
        highlightDesat: 0.07,
        vignette: 0.08,
        grain: 0.02,
        clarity: 0.04,
        halation: 0.01,
      },
    }),
    makePreset({
      id: "fujifilm-velvia",
      brand: "fujifilm",
      name: "VELVIA",
      tagline: "浓郁风光 · 红绿更烈",
      basis: "官方取向",
      sourceName: "FUJIFILM 官方说明书 · Velvia/VIVID",
      notes: "对应官方“鲜艳、适合风光与自然”的定位，强化红绿与清澈阴影。",
      swatch: "linear-gradient(142deg, #2d6452 0%, #bf5f38 48%, #d2a143 100%)",
      params: {
        contrast: 1.18,
        saturation: 1.35,
        exposure: -0.005,
        temperature: 0.015,
        tint: 0.005,
        fade: 0.003,
        blackPoint: 0.005,
        whitePoint: 1,
        contrastPivot: 0.47,
        sCurve: 0.22,
        shadowLift: 0.002,
        shadowTint: [0.08, 0.28, 0.23],
        shadowTintAmount: 0.022,
        highlightTint: [1, 0.82, 0.52],
        highlightTintAmount: 0.038,
        highlightRolloff: 0.1,
        shoulderStart: 0.72,
        highlightDesat: 0.03,
        vignette: 0.16,
        grain: 0.015,
        clarity: 0.08,
        halation: 0.005,
        channelMix: [
          [1.06, -0.012, 0.002],
          [0.004, 1.058, -0.012],
          [0.002, 0.014, 1.03],
        ],
      },
    }),
    makePreset({
      id: "fujifilm-astia",
      brand: "fujifilm",
      name: "ASTIA",
      tagline: "柔肤色 · 低反差",
      basis: "官方取向",
      sourceName: "FUJIFILM 官方说明书 · ASTIA/SOFT",
      notes: "对应官方“更柔和的色彩与反差、低调观感”的定位，适合人像和日常。",
      swatch: "linear-gradient(142deg, #6e8a82 0%, #d9bea7 49%, #a27067 100%)",
      params: {
        contrast: 0.92,
        saturation: 0.98,
        exposure: 0.005,
        temperature: 0.01,
        tint: 0.004,
        fade: 0.012,
        blackPoint: 0.006,
        whitePoint: 0.99,
        contrastPivot: 0.49,
        sCurve: 0.04,
        shadowLift: 0.012,
        shadowTint: [0.45, 0.53, 0.55],
        shadowTintAmount: 0.014,
        highlightTint: [1, 0.88, 0.75],
        highlightTintAmount: 0.022,
        highlightRolloff: 0.23,
        shoulderStart: 0.65,
        highlightDesat: 0.08,
        vignette: 0.06,
        grain: 0.012,
        clarity: 0.02,
        halation: 0.01,
      },
    }),
    makePreset({
      id: "fujifilm-classic-chrome",
      brand: "fujifilm",
      name: "Classic Chrome",
      tagline: "柔色 · 深阴影",
      basis: "官方取向",
      sourceName: "FUJIFILM 官方说明书 · CLASSIC CHROME",
      notes: "对应官方“柔和色彩、增强阴影反差、平静观感”的定位。",
      swatch: "linear-gradient(142deg, #456c6d 0%, #aeb0a0 53%, #9a6848 100%)",
      params: {
        contrast: 1.09,
        saturation: 0.72,
        exposure: -0.005,
        temperature: -0.02,
        tint: -0.012,
        fade: 0.02,
        blackPoint: 0.007,
        whitePoint: 0.985,
        contrastPivot: 0.46,
        sCurve: 0.18,
        shadowLift: 0.006,
        shadowTint: [0.23, 0.42, 0.46],
        shadowTintAmount: 0.08,
        highlightTint: [0.96, 0.83, 0.67],
        highlightTintAmount: 0.038,
        highlightRolloff: 0.15,
        shoulderStart: 0.7,
        highlightDesat: 0.1,
        vignette: 0.1,
        grain: 0.03,
        clarity: 0.05,
        halation: 0.008,
      },
    }),
    makePreset({
      id: "fujifilm-classic-neg",
      brand: "fujifilm",
      name: "Classic Neg.",
      tagline: "硬调 · 琥珀记忆",
      basis: "官方取向",
      sourceName: "FUJIFILM 官方说明书 · CLASSIC Neg.",
      notes: "对应官方“增强色彩、硬调层次、增加画面纵深”的定位。",
      signature: true,
      swatch: "linear-gradient(142deg, #34584a 0%, #c59d68 49%, #8a452d 100%)",
      params: {
        contrast: 1.12,
        saturation: 0.93,
        exposure: 0.01,
        temperature: 0.07,
        tint: -0.025,
        fade: 0.032,
        blackPoint: 0.014,
        whitePoint: 0.975,
        contrastPivot: 0.46,
        sCurve: 0.2,
        shadowLift: 0.012,
        shadowTint: [0.16, 0.41, 0.33],
        shadowTintAmount: 0.095,
        highlightTint: [1, 0.72, 0.42],
        highlightTintAmount: 0.078,
        highlightRolloff: 0.18,
        shoulderStart: 0.68,
        highlightDesat: 0.18,
        vignette: 0.12,
        grain: 0.04,
        clarity: 0.05,
        halation: 0.025,
      },
    }),
    makePreset({
      id: "fujifilm-pro-neg-hi",
      brand: "fujifilm",
      name: "PRO Neg. Hi",
      tagline: "人像 · 微增反差",
      basis: "官方取向",
      sourceName: "FUJIFILM 官方说明书 · PRO Neg. Hi",
      notes: "对应官方“适合人像、略微增强反差”的定位，肤色保持柔软。",
      swatch: "linear-gradient(142deg, #54706e 0%, #c2a98d 50%, #8f6557 100%)",
      params: {
        contrast: 1.07,
        saturation: 0.9,
        exposure: 0.005,
        temperature: 0.012,
        tint: 0.002,
        fade: 0.015,
        blackPoint: 0.005,
        whitePoint: 0.99,
        contrastPivot: 0.48,
        sCurve: 0.12,
        shadowLift: 0.006,
        shadowTint: [0.37, 0.46, 0.48],
        shadowTintAmount: 0.018,
        highlightTint: [1, 0.85, 0.7],
        highlightTintAmount: 0.024,
        highlightRolloff: 0.19,
        shoulderStart: 0.69,
        highlightDesat: 0.1,
        vignette: 0.08,
        grain: 0.02,
        clarity: 0.04,
        halation: 0.01,
      },
    }),
    makePreset({
      id: "fujifilm-nostalgic-neg",
      brand: "fujifilm",
      name: "Nostalgic Neg.",
      tagline: "琥珀高光 · 印刷感",
      basis: "官方取向",
      sourceName: "FUJIFILM 官方说明书 · NOSTALGIC Neg.",
      notes: "对应官方“琥珀高光、厚实阴影、像印刷照片”的描述。",
      swatch: "linear-gradient(142deg, #5a4e2d 0%, #d6a050 50%, #7d3424 100%)",
      params: {
        contrast: 1.06,
        saturation: 1.06,
        exposure: 0.012,
        temperature: 0.095,
        tint: -0.015,
        fade: 0.025,
        blackPoint: 0.02,
        whitePoint: 0.96,
        contrastPivot: 0.45,
        sCurve: 0.18,
        shadowLift: 0.016,
        shadowTint: [0.28, 0.38, 0.3],
        shadowTintAmount: 0.08,
        highlightTint: [1, 0.68, 0.37],
        highlightTintAmount: 0.14,
        highlightRolloff: 0.24,
        shoulderStart: 0.64,
        highlightDesat: 0.2,
        vignette: 0.11,
        grain: 0.035,
        clarity: 0.035,
        halation: 0.04,
      },
    }),
    makePreset({
      id: "fujifilm-acros",
      brand: "fujifilm",
      name: "ACROS",
      tagline: "丰富灰阶 · 细颗粒",
      basis: "官方取向",
      sourceName: "FUJIFILM 官方说明书 · ACROS",
      notes: "对应官方“丰富细节、锐利黑白”的定位；仅做视觉近似，不模拟像素结构。",
      swatch: "linear-gradient(145deg, #ddd7cc 0%, #6d6d68 44%, #171816 100%)",
      params: {
        contrast: 1.18,
        saturation: 0,
        fade: 0.008,
        blackPoint: 0.002,
        whitePoint: 0.995,
        contrastPivot: 0.47,
        sCurve: 0.18,
        shadowLift: 0.003,
        shadowTint: [0.4, 0.42, 0.4],
        shadowTintAmount: 0.004,
        highlightTint: [1, 0.95, 0.88],
        highlightTintAmount: 0.01,
        highlightRolloff: 0.22,
        shoulderStart: 0.68,
        highlightDesat: 0,
        vignette: 0.18,
        grain: 0.04,
        clarity: 0.1,
        mono: 1,
        monoWeights: [0.31, 0.55, 0.14],
      },
    }),
    makePreset({
      id: "fujifilm-eterna",
      brand: "fujifilm",
      name: "ETERNA",
      tagline: "柔色 · 厚阴影",
      basis: "官方取向",
      sourceName: "FUJIFILM 官方说明书 · ETERNA/CINEMA",
      notes: "对应官方“柔和色彩、厚实阴影、电影感”的定位，适合安静叙事。",
      swatch: "linear-gradient(142deg, #2b4244 0%, #8fa09a 49%, #4a3832 100%)",
      params: {
        contrast: 0.95,
        saturation: 0.64,
        exposure: 0.005,
        temperature: -0.015,
        tint: -0.01,
        fade: 0.03,
        blackPoint: 0.012,
        whitePoint: 0.975,
        contrastPivot: 0.48,
        sCurve: 0.06,
        shadowLift: 0.018,
        shadowTint: [0.25, 0.4, 0.4],
        shadowTintAmount: 0.065,
        highlightTint: [0.96, 0.88, 0.78],
        highlightTintAmount: 0.035,
        highlightRolloff: 0.27,
        shoulderStart: 0.64,
        highlightDesat: 0.16,
        vignette: 0.13,
        grain: 0.025,
        clarity: 0.03,
        halation: 0.015,
      },
    }),
    makePreset({
      id: "dji-hncs-natural",
      brand: "dji",
      name: "HNCS 自然",
      tagline: "直出自然 · 航拍真色",
      basis: "官方取向",
      sourceName: "DJI Mavic 3 Pro × Hasselblad HNCS",
      notes:
        "依据 DJI 官方对 HNCS“准确还原人眼所见、减少复杂色彩预设”的描述做独立近似；不包含 DJI 或哈苏官方 LUT。",
      swatch: "linear-gradient(142deg, #839990 0%, #d7c3a4 51%, #4f625b 100%)",
      params: {
        contrast: 0.99,
        saturation: 0.93,
        exposure: 0.008,
        temperature: 0.01,
        tint: 0.002,
        fade: 0.008,
        blackPoint: 0.007,
        whitePoint: 0.99,
        contrastPivot: 0.465,
        sCurve: 0.115,
        shadowLift: 0.008,
        shadowTint: [0.35, 0.44, 0.46],
        shadowTintAmount: 0.022,
        highlightTint: [1, 0.89, 0.76],
        highlightTintAmount: 0.025,
        highlightRolloff: 0.2,
        shoulderStart: 0.68,
        highlightDesat: 0.09,
        vignette: 0.06,
        grain: 0.009,
        clarity: 0.046,
        halation: 0.012,
        channelMix: [
          [1.012, 0.003, -0.003],
          [0.001, 1.008, 0.001],
          [-0.002, 0.007, 1.008],
        ],
      },
    }),
    makePreset({
      id: "dji-aerial-landscape",
      brand: "dji",
      name: "航拍风光",
      tagline: "通透天空 · 清晰远景",
      basis: "民间取向",
      sourceName: "DJI 航拍社区风光取向",
      notes:
        "以官方 HNCS 自然色为底，结合航拍社区常见的通透天空、清晰远景与不闷阴影；不是 DJI 官方 LUT 或官方同名模式。",
      swatch: "linear-gradient(142deg, #245e66 0%, #c9b27e 47%, #3d593d 100%)",
      params: {
        contrast: 1.1,
        saturation: 1.02,
        exposure: 0.004,
        temperature: -0.01,
        tint: -0.004,
        fade: 0.004,
        blackPoint: 0.005,
        whitePoint: 0.995,
        contrastPivot: 0.46,
        sCurve: 0.17,
        shadowLift: 0.006,
        shadowTint: [0.2, 0.36, 0.43],
        shadowTintAmount: 0.04,
        highlightTint: [1, 0.87, 0.7],
        highlightTintAmount: 0.026,
        highlightRolloff: 0.14,
        shoulderStart: 0.71,
        highlightDesat: 0.05,
        vignette: 0.12,
        grain: 0.012,
        clarity: 0.09,
        halation: 0.016,
        channelMix: [
          [1.02, -0.006, 0.001],
          [-0.003, 1.012, -0.006],
          [0.002, -0.008, 1.025],
        ],
      },
    }),
    makePreset({
      id: "xiaomi-leica-authentic",
      brand: "xiaomi",
      name: "徕卡经典",
      tagline: "厚实暗部 · 克制红",
      basis: "官方取向",
      sourceName: "小米 × 徕卡 · Leica Authentic Look",
      notes:
        "按小米官方对 Leica Authentic 影调的描述做独立近似：自然、不过度提亮，暗部厚实，红色克制。",
      swatch: "linear-gradient(142deg, #25343b 0%, #8c5b49 51%, #bd8b62 100%)",
      params: {
        contrast: 1.15,
        saturation: 0.9,
        exposure: -0.008,
        temperature: -0.012,
        tint: -0.004,
        fade: 0.004,
        blackPoint: 0.004,
        whitePoint: 0.992,
        contrastPivot: 0.455,
        sCurve: 0.21,
        shadowLift: 0.002,
        shadowTint: [0.2, 0.33, 0.43],
        shadowTintAmount: 0.058,
        highlightTint: [1, 0.84, 0.64],
        highlightTintAmount: 0.034,
        highlightRolloff: 0.13,
        shoulderStart: 0.7,
        highlightDesat: 0.055,
        vignette: 0.16,
        grain: 0.024,
        clarity: 0.088,
        halation: 0.018,
        channelMix: [
          [1.028, -0.008, 0.002],
          [-0.005, 1.006, 0.001],
          [0.003, -0.01, 1.016],
        ],
      },
    }),
    makePreset({
      id: "xiaomi-leica-vibrant",
      brand: "xiaomi",
      name: "徕卡生动",
      tagline: "清晰色彩 · 明快层次",
      basis: "官方取向",
      sourceName: "小米 × 徕卡 · Leica Vibrant Look",
      notes:
        "对应官方 Leica Vibrant 的鲜明取向：色彩更饱满、亮部更通透，同时保留可用的肤色与暗部细节。",
      swatch: "linear-gradient(142deg, #315e61 0%, #c07c53 48%, #e0b97d 100%)",
      params: {
        contrast: 1.1,
        saturation: 1.08,
        exposure: 0.015,
        temperature: 0.018,
        tint: 0.006,
        fade: 0.002,
        blackPoint: 0.002,
        whitePoint: 1,
        contrastPivot: 0.47,
        sCurve: 0.16,
        shadowLift: 0,
        shadowTint: [0.19, 0.34, 0.39],
        shadowTintAmount: 0.03,
        highlightTint: [1, 0.88, 0.72],
        highlightTintAmount: 0.028,
        highlightRolloff: 0.11,
        shoulderStart: 0.73,
        highlightDesat: 0.035,
        vignette: 0.105,
        grain: 0.014,
        clarity: 0.073,
        halation: 0.01,
        channelMix: [
          [1.04, -0.01, 0.002],
          [-0.002, 1.013, -0.004],
          [0.004, -0.014, 1.024],
        ],
      },
    }),
    makePreset({
      id: "xiaomi-leica-moment",
      brand: "xiaomi",
      name: "一瞬街拍",
      tagline: "快速反应 · 人物先行",
      basis: "民间取向",
      sourceName: "小米街拍模式 + 人文街拍共识",
      notes:
        "结合小米官方街拍功能与社区对“决定性瞬间”的理解，做低延迟观感的独立街拍色；并非官方同名滤镜。",
      swatch: "linear-gradient(142deg, #243d4b 0%, #9d6852 46%, #d2a36c 100%)",
      params: {
        contrast: 1.12,
        saturation: 0.94,
        exposure: 0.002,
        temperature: 0.006,
        tint: -0.008,
        fade: 0.014,
        blackPoint: 0.007,
        whitePoint: 0.988,
        contrastPivot: 0.455,
        sCurve: 0.18,
        shadowLift: 0.008,
        shadowTint: [0.22, 0.37, 0.46],
        shadowTintAmount: 0.045,
        highlightTint: [1, 0.82, 0.61],
        highlightTintAmount: 0.045,
        highlightRolloff: 0.17,
        shoulderStart: 0.69,
        highlightDesat: 0.09,
        vignette: 0.17,
        grain: 0.037,
        clarity: 0.082,
        halation: 0.026,
        channelMix: [
          [1.02, -0.006, 0.001],
          [-0.003, 1.002, 0.003],
          [0.002, -0.012, 1.018],
        ],
      },
    }),
    makePreset({
      id: "xiaomi-master-portrait",
      brand: "xiaomi",
      name: "大师人像",
      tagline: "肤色优先 · 柔和高光",
      basis: "官方取向",
      sourceName: "Xiaomi 15 Ultra · Master Portrait",
      notes:
        "按官方大师人像与肤色、影调引擎方向做近似：肤色不过黄，高光柔和，背景不过度抢眼。",
      swatch: "linear-gradient(142deg, #ac9588 0%, #e4c3a4 51%, #7a5e50 100%)",
      params: {
        contrast: 0.99,
        saturation: 0.92,
        exposure: 0.012,
        temperature: 0.022,
        tint: 0.01,
        fade: 0.018,
        blackPoint: 0.01,
        whitePoint: 0.982,
        contrastPivot: 0.49,
        sCurve: 0.09,
        shadowLift: 0.012,
        shadowTint: [0.45, 0.5, 0.52],
        shadowTintAmount: 0.02,
        highlightTint: [1, 0.87, 0.75],
        highlightTintAmount: 0.038,
        highlightRolloff: 0.26,
        shoulderStart: 0.64,
        highlightDesat: 0.13,
        vignette: 0.055,
        grain: 0.012,
        clarity: 0.025,
        halation: 0.025,
      },
    }),
    makePreset({
      id: "oppo-hasselblad-natural",
      brand: "oppo",
      name: "哈苏自然",
      tagline: "自然色彩 · 经典影调",
      basis: "官方取向",
      sourceName: "OPPO × 哈苏 · 自然色彩 / 经典影调",
      notes:
        "依据 OPPO 官方对哈苏自然色彩与经典影调的描述做独立近似，重点保留肤色、绿植和天空的连续性。",
      swatch: "linear-gradient(142deg, #7e9489 0%, #d7c4a3 49%, #56685d 100%)",
      params: {
        contrast: 0.99,
        saturation: 0.94,
        exposure: 0.012,
        temperature: 0.018,
        tint: 0.003,
        fade: 0.012,
        blackPoint: 0.008,
        whitePoint: 0.987,
        contrastPivot: 0.47,
        sCurve: 0.11,
        shadowLift: 0.009,
        shadowTint: [0.38, 0.5, 0.5],
        shadowTintAmount: 0.03,
        highlightTint: [1, 0.87, 0.73],
        highlightTintAmount: 0.034,
        highlightRolloff: 0.22,
        shoulderStart: 0.67,
        highlightDesat: 0.11,
        vignette: 0.07,
        grain: 0.013,
        clarity: 0.04,
        halation: 0.02,
        channelMix: [
          [1.012, 0.004, -0.004],
          [0.002, 1.006, 0.002],
          [-0.003, 0.008, 1.006],
        ],
      },
    }),
    makePreset({
      id: "oppo-hasselblad-master",
      brand: "oppo",
      name: "哈苏大师",
      tagline: "专业层次 · 安静饱和",
      basis: "官方取向",
      sourceName: "OPPO × 哈苏 · 大师模式",
      notes:
        "按官方“自然色彩和经典哈苏影调”方向收紧高光、稳住中间调，适合建筑、静物与纪实。",
      swatch: "linear-gradient(142deg, #465d56 0%, #b3a587 52%, #6f4f3d 100%)",
      params: {
        contrast: 1.04,
        saturation: 0.9,
        exposure: 0.003,
        temperature: 0.008,
        tint: 0.002,
        fade: 0.006,
        blackPoint: 0.004,
        whitePoint: 0.995,
        contrastPivot: 0.46,
        sCurve: 0.15,
        shadowLift: 0.004,
        shadowTint: [0.25, 0.38, 0.38],
        shadowTintAmount: 0.034,
        highlightTint: [1, 0.86, 0.7],
        highlightTintAmount: 0.03,
        highlightRolloff: 0.17,
        shoulderStart: 0.7,
        highlightDesat: 0.07,
        vignette: 0.11,
        grain: 0.017,
        clarity: 0.068,
        halation: 0.012,
      },
    }),
    makePreset({
      id: "oppo-hasselblad-portrait",
      brand: "oppo",
      name: "大师人像",
      tagline: "细腻肤色 · 立体光感",
      basis: "官方取向",
      sourceName: "OPPO × 哈苏 · 全焦段大师人像",
      notes:
        "参考官方人像肤色引擎与自然过渡描述；更重视脸部中间调和背景高光的分离，不做重度磨皮。",
      swatch: "linear-gradient(142deg, #927e74 0%, #dfbda0 50%, #765a50 100%)",
      params: {
        contrast: 0.98,
        saturation: 0.9,
        exposure: 0.01,
        temperature: 0.025,
        tint: 0.012,
        fade: 0.017,
        blackPoint: 0.009,
        whitePoint: 0.983,
        contrastPivot: 0.49,
        sCurve: 0.085,
        shadowLift: 0.011,
        shadowTint: [0.42, 0.46, 0.49],
        shadowTintAmount: 0.022,
        highlightTint: [1, 0.85, 0.72],
        highlightTintAmount: 0.042,
        highlightRolloff: 0.25,
        shoulderStart: 0.65,
        highlightDesat: 0.15,
        vignette: 0.06,
        grain: 0.011,
        clarity: 0.02,
        halation: 0.028,
      },
    }),
    makePreset({
      id: "capture-one-nordic",
      brand: "software",
      name: "Nordic Edit",
      tagline: "冷静留白 · 编辑感",
      basis: "官方取向",
      sourceName: "Capture One · Nordic Editorial 风格类别",
      notes:
        "参考 Capture One 官方 Nordic Editorial 的当代北欧编辑方向：低饱和、清冷空气感、暗部保留层次。",
      swatch: "linear-gradient(142deg, #82979b 0%, #d7d0c0 50%, #6e746c 100%)",
      params: {
        contrast: 0.97,
        saturation: 0.79,
        exposure: 0.008,
        temperature: -0.035,
        tint: -0.004,
        fade: 0.027,
        blackPoint: 0.012,
        whitePoint: 0.978,
        contrastPivot: 0.49,
        sCurve: 0.08,
        shadowLift: 0.018,
        shadowTint: [0.35, 0.45, 0.49],
        shadowTintAmount: 0.06,
        highlightTint: [0.93, 0.94, 0.9],
        highlightTintAmount: 0.025,
        highlightRolloff: 0.28,
        shoulderStart: 0.62,
        highlightDesat: 0.18,
        vignette: 0.035,
        grain: 0.017,
        clarity: 0.028,
        halation: 0.008,
      },
    }),
    makePreset({
      id: "capture-one-latitude",
      brand: "software",
      name: "Latitude",
      tagline: "浓色 · 深调 · 高反差",
      basis: "官方取向",
      sourceName: "Capture One · Latitude 风格类别",
      notes:
        "对应官方 Latitude 的“丰富色彩、深沉影调、高反差”方向；加强色彩分离，同时给高光留肩。",
      swatch: "linear-gradient(142deg, #1e3943 0%, #9b593b 50%, #d2a86c 100%)",
      params: {
        contrast: 1.19,
        saturation: 1.08,
        exposure: -0.008,
        temperature: 0.008,
        tint: 0.008,
        fade: 0.003,
        blackPoint: 0.003,
        whitePoint: 0.995,
        contrastPivot: 0.45,
        sCurve: 0.22,
        shadowLift: 0,
        shadowTint: [0.12, 0.29, 0.38],
        shadowTintAmount: 0.058,
        highlightTint: [1, 0.82, 0.59],
        highlightTintAmount: 0.04,
        highlightRolloff: 0.14,
        shoulderStart: 0.69,
        highlightDesat: 0.045,
        vignette: 0.19,
        grain: 0.021,
        clarity: 0.098,
        halation: 0.016,
        channelMix: [
          [1.04, -0.012, 0.002],
          [-0.004, 1.012, -0.004],
          [0.004, -0.016, 1.026],
        ],
      },
    }),
    makePreset({
      id: "phocus-hncs-editorial",
      brand: "software",
      name: "Phocus HNCS",
      tagline: "中画幅 · 软过渡 · 真色",
      basis: "官方取向",
      sourceName: "Hasselblad Phocus / HNCS 工作流",
      notes:
        "依据哈苏官方 Phocus 与 HNCS 的真实色彩、平滑层次和肤色连续性方向做编辑型近似，不包含官方 LUT 数据。",
      swatch: "linear-gradient(142deg, #8f9c8d 0%, #dcc9b0 50%, #6f5747 100%)",
      params: {
        contrast: 0.96,
        saturation: 0.87,
        exposure: 0.017,
        temperature: 0.02,
        tint: 0.005,
        fade: 0.018,
        blackPoint: 0.01,
        whitePoint: 0.982,
        contrastPivot: 0.475,
        sCurve: 0.075,
        shadowLift: 0.014,
        shadowTint: [0.47, 0.53, 0.54],
        shadowTintAmount: 0.026,
        highlightTint: [1, 0.88, 0.75],
        highlightTintAmount: 0.036,
        highlightRolloff: 0.29,
        shoulderStart: 0.61,
        highlightDesat: 0.16,
        vignette: 0.045,
        grain: 0.009,
        clarity: 0.022,
        halation: 0.02,
      },
    }),
  ];

  const SIGNATURE_PRESETS = [
    "hasselblad-hncs",
    "leica-classic",
    "ricoh-positive",
    "fujifilm-classic-neg",
  ];

  const RECOMMENDED_LOOK = { strength: 1, grain: 1 };
  const GUIDE_SEEN_KEY = "silverhalide-guide-seen-v1";
  const GUIDE_WELCOMED_KEY = "silverhalide-guide-welcomed";

  const MAX_FILES = 40;
  const PREVIEW_EDGE = 1600;
  const THUMB_EDGE = 380;
  const MAX_EXPORT_PIXELS = 72_000_000;
  const DEFAULT_PRESET = PRESETS[0].id;
  const PRESET_MAP = new Map(PRESETS.map((preset) => [preset.id, preset]));
  const SETTINGS_KEY = "silverhalide-lab-settings-v2";
  // A desktop without a working drag looks like a dead shelf; always show it.
  const FORCE_MOUSE_DRAG = true;

  const PRESET_ORDER = [
    "hasselblad-hncs",
    "hasselblad-warm",
    "hasselblad-portrait",
    "leica-m11",
    "leica-classic",
    "leica-m9",
    "leica-night",
    "leica-mono",
    "ricoh-positive",
    "ricoh-negative",
    "ricoh-hi-bw",
    "ricoh-retro",
    "ricoh-bleach",
    "fujifilm-provia",
    "fujifilm-velvia",
    "fujifilm-astia",
    "fujifilm-classic-chrome",
    "fujifilm-classic-neg",
    "fujifilm-pro-neg-hi",
    "fujifilm-nostalgic-neg",
    "fujifilm-acros",
    "fujifilm-eterna",
    "dji-hncs-natural",
    "dji-aerial-landscape",
    "xiaomi-leica-authentic",
    "xiaomi-leica-vibrant",
    "xiaomi-leica-moment",
    "xiaomi-master-portrait",
    "oppo-hasselblad-natural",
    "oppo-hasselblad-master",
    "oppo-hasselblad-portrait",
    "capture-one-nordic",
    "capture-one-latitude",
    "phocus-hncs-editorial",
  ];

  // Keyed by preset id, so duplicate Chinese names (e.g. 大师人像) keep distinct English copy.
  const PRESET_COPY_EN = {
    "hasselblad-hncs": {
      name: "HNCS Natural",
      tagline: "Straight skin · creamy highlights",
      notes: "An independent approximation of HNCS natural colour, smooth tonality and continuous skin rendering. Not an official LUT.",
    },
    "hasselblad-warm": {
      name: "Warm Editorial",
      tagline: "Amber light · cool slate shadows",
      notes: "Keeps the low-saturation medium-format base, then lifts amber highlights and cool shadows for an editorial sense of space.",
    },
    "hasselblad-portrait": {
      name: "Medium-Format Skin",
      tagline: "Soft transitions · quiet tint",
      notes: "Restrains saturated colour and protects the continuous transition between skin and highlights.",
    },
    "leica-m11": {
      name: "M11 Natural",
      tagline: "Fine detail · deep, not dull",
      notes: "Aim is fine tonal separation, natural rendering and clean shadows. No exaggerated bokeh or colour cast.",
    },
    "leica-classic": {
      name: "Classic Leica",
      tagline: "Deep black · cool shadow · restrained red",
      notes: "Lifts micro-contrast and cools the shadows while keeping reds rich but not overripe.",
    },
    "leica-m9": {
      name: "M9 CCD",
      tagline: "Teal shadows · dense red",
      notes: "Teal-green shadows, thicker reds and moderate contrast evoke the CCD era. Not a sensor simulation.",
    },
    "leica-night": {
      name: "Noctilux",
      tagline: "Blue night · warm lamps",
      notes: "Built for low light: a deep blue night and warm points of lamplight with lifted shadows.",
    },
    "leica-mono": {
      name: "Monochrom",
      tagline: "Pure light · shadow detail",
      notes: "Follows the Monochrom idea of fine grey graduation, a clean midtone and detail held deep in the blacks.",
    },
    "ricoh-positive": {
      name: "Positive Film",
      tagline: "High contrast · vivid street colour",
      notes: "A punchy positive-film street look with dense colour, brighter reds and crisp mids.",
    },
    "ricoh-negative": {
      name: "Negative Film",
      tagline: "Green-grey shadows · soft skin",
      notes: "A softer negative-film look with green-grey shadows and gentle skin tones.",
    },
    "ricoh-hi-bw": {
      name: "Hi-Contrast B&W",
      tagline: "Hard light · coarse grain",
      notes: "Hard mono contrast and visible grain for documentary and flash-lit street work.",
    },
    "ricoh-retro": {
      name: "Nostalgic",
      tagline: "Faded amber · print grey",
      notes: "Faded amber highlights and print-like grey shadows give a gently aged snapshot feel.",
    },
    "ricoh-bleach": {
      name: "Bleach Bypass",
      tagline: "Silver grey · low saturation, high contrast",
      notes: "A bleach-bypass mood: low saturation, raised contrast and a cool silver sheen.",
    },
    "fujifilm-provia": {
      name: "PROVIA",
      tagline: "Everyday · natural",
      notes: "Approximates PROVIA's balanced, natural standard colour for general use.",
    },
    "fujifilm-velvia": {
      name: "VELVIA",
      tagline: "Rich landscapes · stronger red and green",
      notes: "Approximates VELVIA's saturated landscape palette with deeper reds, greens and shadows.",
    },
    "fujifilm-astia": {
      name: "ASTIA",
      tagline: "Soft skin · lower contrast",
      notes: "Approximates ASTIA's softer skin rendering, lower contrast and gentle highlights.",
    },
    "fujifilm-classic-chrome": {
      name: "Classic Chrome",
      tagline: "Muted colour · deep shadows",
      notes: "Approximates Classic Chrome's documentary palette: muted colour and deeper shadows.",
    },
    "fujifilm-classic-neg": {
      name: "Classic Neg.",
      tagline: "Hard tone · amber memory",
      notes: "Approximates Classic Negative's amber highlights, hard greens and nostalgic print feel.",
    },
    "fujifilm-pro-neg-hi": {
      name: "PRO Neg. Hi",
      tagline: "Portrait · a touch more contrast",
      notes: "Approximates PRO Neg. Hi's portrait-friendly skin and a small lift in contrast.",
    },
    "fujifilm-nostalgic-neg": {
      name: "Nostalgic Neg.",
      tagline: "Amber highlights · print feel",
      notes: "Approximates Nostalgic Negative: amber highlights, deep shadows and a print-like feel.",
    },
    "fujifilm-acros": {
      name: "ACROS",
      tagline: "Rich greys · fine grain",
      notes: "Approximates ACROS's deep blacks, wide grey range and smooth fine grain.",
    },
    "fujifilm-eterna": {
      name: "ETERNA",
      tagline: "Muted colour · thick shadows",
      notes: "Approximates ETERNA's cinema look: muted colour, clean mids and thick shadows.",
    },
    "dji-hncs-natural": {
      name: "HNCS Natural",
      tagline: "Natural · true aerial colour",
      notes: "An independent approximation of DJI and Hasselblad HNCS natural colour. Not an official LUT.",
    },
    "dji-aerial-landscape": {
      name: "Aerial Landscape",
      tagline: "Open sky · crisp distance",
      notes: "Builds a clean aerial look with open sky and crisp distant detail.",
    },
    "xiaomi-leica-authentic": {
      name: "Leica Classic",
      tagline: "Dense shadows · restrained red",
      notes: "Follows the Xiaomi Leica Classic direction: dense shadows and restrained reds.",
    },
    "xiaomi-leica-vibrant": {
      name: "Leica Vibrant",
      tagline: "Clear colour · bright tonality",
      notes: "Follows the Xiaomi Leica Vibrant direction with clear colour and bright tonal steps.",
    },
    "xiaomi-leica-moment": {
      name: "Street Moment",
      tagline: "Fast response · people first",
      notes: "A street-first look with quick, assertive midtones and people leading the frame.",
    },
    "xiaomi-master-portrait": {
      name: "Master Portrait",
      tagline: "Skin first · soft highlights",
      notes: "Portrait-first: skin is protected before contrast, with soft highlight transitions.",
    },
    "oppo-hasselblad-natural": {
      name: "Hasselblad Natural",
      tagline: "Natural colour · classic tonality",
      notes: "An independent approximation of OPPO × Hasselblad natural colour and classic tonality.",
    },
    "oppo-hasselblad-master": {
      name: "Hasselblad Master",
      tagline: "Pro depth · quiet saturation",
      notes: "Follows the OPPO × Hasselblad Master direction with professional tonal depth and quiet colour.",
    },
    "oppo-hasselblad-portrait": {
      name: "Master Portrait",
      tagline: "Fine skin · sculpted light",
      notes: "Portrait emphasis on natural skin and separation between face and background light.",
    },
    "capture-one-nordic": {
      name: "Nordic Edit",
      tagline: "Cool space · editorial calm",
      notes: "Inspired by Capture One's Nordic Editorial category: low saturation, cool air and held shadow detail.",
    },
    "capture-one-latitude": {
      name: "Latitude",
      tagline: "Rich colour · deep tone · high contrast",
      notes: "A Capture One Latitude-style edit with rich colour, deep tonality and strong contrast.",
    },
    "phocus-hncs-editorial": {
      name: "Phocus HNCS",
      tagline: "Medium format · soft transition · true colour",
      notes: "An editorial approximation of the Hasselblad Phocus / HNCS true-colour and soft-transition workflow.",
    },
  };

  const SOURCE_COPY_EN = {
    "中画幅暖调编辑共识": "Medium-format warm editorial consensus",
    "HNCS 肤色与层次取向": "HNCS skin and tonal direction",
    "徕卡社区“德味”共识": "Leica community 'Deutsch' consensus",
    "M9 / CCD 时代社区色感": "M9 / CCD-era community colour",
    "Noctilux 夜景社区配方": "Noctilux night community recipe",
    "FUJIFILM 官方说明书 · PROVIA/STANDARD": "FUJIFILM manual · PROVIA/STANDARD",
    "FUJIFILM 官方说明书 · Velvia/VIVID": "FUJIFILM manual · Velvia/VIVID",
    "FUJIFILM 官方说明书 · ASTIA/SOFT": "FUJIFILM manual · ASTIA/SOFT",
    "FUJIFILM 官方说明书 · CLASSIC CHROME": "FUJIFILM manual · CLASSIC CHROME",
    "FUJIFILM 官方说明书 · CLASSIC Neg.": "FUJIFILM manual · CLASSIC Neg.",
    "FUJIFILM 官方说明书 · PRO Neg. Hi": "FUJIFILM manual · PRO Neg. Hi",
    "FUJIFILM 官方说明书 · NOSTALGIC Neg.": "FUJIFILM manual · NOSTALGIC Neg.",
    "FUJIFILM 官方说明书 · ACROS": "FUJIFILM manual · ACROS",
    "FUJIFILM 官方说明书 · ETERNA/CINEMA": "FUJIFILM manual · ETERNA/CINEMA",
    "DJI 航拍社区风光取向": "DJI aerial landscape community look",
    "小米 × 徕卡 · Leica Authentic Look": "Xiaomi × Leica · Leica Authentic Look",
    "小米 × 徕卡 · Leica Vibrant Look": "Xiaomi × Leica · Leica Vibrant Look",
    "小米街拍模式 + 人文街拍共识": "Xiaomi street mode + documentary consensus",
    "OPPO × 哈苏 · 自然色彩 / 经典影调": "OPPO × Hasselblad · natural colour / classic tonality",
    "OPPO × 哈苏 · 大师模式": "OPPO × Hasselblad · Master mode",
    "OPPO × 哈苏 · 全焦段大师人像": "OPPO × Hasselblad · Master Portrait",
    "Capture One · Nordic Editorial 风格类别": "Capture One · Nordic Editorial category",
    "Capture One · Latitude 风格类别": "Capture One · Latitude category",
    "Hasselblad Phocus / HNCS 工作流": "Hasselblad Phocus / HNCS workflow",
  };

  const state = {
    items: [],
    activeId: null,
    selectedPresetId: DEFAULT_PRESET,
    lastPresetId: DEFAULT_PRESET,
    brandFilter: "all",
    strength: 1,
    grain: 1,
    split: 68,
    zoom: 1,
    zoomPan: { x: 0, y: 0 },
    previewBase: { width: 0, height: 0 },
    size: "4096",
    format: "jpeg",
    quality: 94,
    exporting: false,
    cancelRequested: false,
    lastDownload: null,
    nextId: 1,
  };

  const dom = {};
  dom.root = document.documentElement;
  let previewRenderer;
  let thumbRenderer;
  let exportRenderer;

  // One shared mobile check: zoom, pan and the rail all ask the same question.
  const mobileQuery = window.matchMedia("(max-width: 790px)");
  let fileSequence = 0;
  let toastSequence = 0;
  let previewFitFrame = 0;
  let lastPreviewLookId = "";
  let lastFilmstripSignature = "";

  const i18n = window.SilverI18n;
  const t = (key, params) => i18n.t(key, params);
  const isEnglish = () => i18n.language === "en";
  const presetName = (preset) =>
    (isEnglish() ? PRESET_COPY_EN[preset.id]?.name : "") || preset.name;
  const presetTagline = (preset) =>
    (isEnglish() ? PRESET_COPY_EN[preset.id]?.tagline : "") || preset.tagline;
  const presetNotes = (preset) =>
    (isEnglish() ? PRESET_COPY_EN[preset.id]?.notes : "") || preset.notes;
  const presetSource = (preset) =>
    (isEnglish() ? SOURCE_COPY_EN[preset.sourceName] : "") || preset.sourceName;
  const presetBasis = (preset) =>
    t(preset.basis === "官方取向" ? "basis.official" : "basis.community");

  const VERTEX_SHADER = `
    attribute vec2 aPosition;
    varying vec2 vUv;

    void main() {
      vUv = aPosition * 0.5 + 0.5;
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  const FRAGMENT_SHADER = `
    precision highp float;

    varying vec2 vUv;
    uniform sampler2D uImage;
    uniform vec2 uTexel;
    uniform vec2 uSize;
    uniform float uIntensity;
    uniform float uStyleGain;
    uniform float uContrast;
    uniform float uSaturation;
    uniform float uExposure;
    uniform float uTemperature;
    uniform float uTint;
    uniform float uFade;
    uniform float uBlackPoint;
    uniform float uWhitePoint;
    uniform float uContrastPivot;
    uniform float uSCurve;
    uniform float uShadowLift;
    uniform vec3 uShadowTint;
    uniform float uShadowTintAmount;
    uniform vec3 uHighlightTint;
    uniform float uHighlightTintAmount;
    uniform float uHighlightRolloff;
    uniform float uShoulderStart;
    uniform float uHighlightDesat;
    uniform float uVignette;
    uniform float uGrain;
    uniform float uClarity;
    uniform float uHalation;
    uniform float uMono;
    uniform vec3 uMonoWeights;
    uniform vec3 uChannelMixR;
    uniform vec3 uChannelMixG;
    uniform vec3 uChannelMixB;
    uniform float uSeed;

    const vec3 LUM = vec3(0.2126, 0.7152, 0.0722);

    float hash21(vec2 point) {
      return fract(sin(dot(point, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    vec3 srgbToLinear(vec3 color) {
      vec3 low = color / 12.92;
      vec3 high = pow((color + 0.055) / 1.055, vec3(2.4));
      return mix(low, high, step(vec3(0.04045), color));
    }

    vec3 linearToSrgb(vec3 color) {
      vec3 safe = max(color, vec3(0.0));
      vec3 low = safe * 12.92;
      vec3 high = 1.055 * pow(safe, vec3(1.0 / 2.4)) - 0.055;
      return mix(low, high, step(vec3(0.0031308), safe));
    }

    float filmCurve(float value) {
      float x = clamp((value - uContrastPivot) * uContrast + uContrastPivot, 0.0, 1.0);
      float smoothCurve = x * x * (3.0 - 2.0 * x);
      x = mix(x, smoothCurve, uSCurve);

      float tonalRange = max(0.2, uWhitePoint - uBlackPoint);
      x = clamp((x - uBlackPoint) / tonalRange, 0.0, 1.0);
      x += uShadowLift * pow(1.0 - x, 2.3);
      x += uFade * 0.22 * (1.0 - x);
      x = min(x, 1.0);

      float shoulderRange = max(0.05, 1.0 - uShoulderStart);
      float above = clamp((x - uShoulderStart) / shoulderRange, 0.0, 1.0);
      float compressed = 1.0 - pow(1.0 - above, 1.0 / (1.0 + uHighlightRolloff));
      if (x > uShoulderStart) {
        x = uShoulderStart + shoulderRange * compressed;
      }

      return clamp(x, 0.0, 1.0);
    }

    void main() {
      vec3 source = texture2D(uImage, vUv).rgb;
      vec3 color = srgbToLinear(source);

      color *= exp2(uExposure);
      float warmBalance = uTemperature * 0.18;
      color.r *= max(0.45, 1.0 + warmBalance);
      color.b *= max(0.45, 1.0 - warmBalance);
      color.g *= 1.0 - uTint * 0.08;
      color.r *= 1.0 + uTint * 0.025;
      color.b *= 1.0 + uTint * 0.025;
      color = vec3(
        dot(color, uChannelMixR),
        dot(color, uChannelMixG),
        dot(color, uChannelMixB)
      );
      color = linearToSrgb(max(color, vec3(0.0)));

      vec2 offset = uTexel * 1.35;
      vec3 blurred = (
        texture2D(uImage, vUv + vec2(offset.x, 0.0)).rgb +
        texture2D(uImage, vUv - vec2(offset.x, 0.0)).rgb +
        texture2D(uImage, vUv + vec2(0.0, offset.y)).rgb +
        texture2D(uImage, vUv - vec2(0.0, offset.y)).rgb
      ) * 0.25;
      float detail = dot(color, LUM) - dot(blurred, LUM);
      color += detail * uClarity;

      float sourceLuma = dot(clamp(color, 0.0, 1.0), LUM);
      float curvedLuma = filmCurve(sourceLuma);
      color += vec3(curvedLuma - sourceLuma);
      color = max(color, vec3(0.0));

      float tonalLuma = dot(clamp(color, 0.0, 1.0), LUM);
      float highlightMask = smoothstep(0.56, 1.0, tonalLuma);
      float effectiveSaturation = uSaturation * mix(1.0, 1.0 - uHighlightDesat, highlightMask);
      color = mix(vec3(tonalLuma), color, effectiveSaturation);

      if (uMono > 0.5) {
        float mono = dot(color, uMonoWeights) / max(dot(uMonoWeights, vec3(1.0)), 0.001);
        color = mix(color, vec3(mono), uMono);
      }

      float splitLuma = clamp(dot(color, LUM), 0.0, 1.0);
      float shadowMask = 1.0 - smoothstep(0.0, 0.58, splitLuma);
      float warmMask = smoothstep(0.48, 0.96, splitLuma);
      color += (uShadowTint - vec3(0.5)) * 2.0 * uShadowTintAmount * shadowMask;
      color += (uHighlightTint - vec3(0.5)) * 2.0 * uHighlightTintAmount * warmMask;

      if (uHalation > 0.0001) {
        vec2 haloStep = uTexel * 6.0;
        vec3 glow = vec3(0.0);
        vec2 haloOffsets[8];
        haloOffsets[0] = vec2(haloStep.x, 0.0);
        haloOffsets[1] = vec2(-haloStep.x, 0.0);
        haloOffsets[2] = vec2(0.0, haloStep.y);
        haloOffsets[3] = vec2(0.0, -haloStep.y);
        haloOffsets[4] = haloStep;
        haloOffsets[5] = -haloStep;
        haloOffsets[6] = vec2(haloStep.x, -haloStep.y);
        haloOffsets[7] = vec2(-haloStep.x, haloStep.y);
        for (int index = 0; index < 8; index++) {
          vec3 sampleColor = texture2D(uImage, clamp(vUv + haloOffsets[index], 0.0, 1.0)).rgb;
          float sampleEnergy = smoothstep(0.58, 1.0, dot(sampleColor, LUM));
          glow += sampleColor * sampleEnergy;
        }
        color += glow * (uHalation * 0.075) * vec3(1.0, 0.58, 0.3);
      }

      vec3 styled = clamp(color, 0.0, 1.0);
      float styleAmount = clamp(uIntensity, 0.0, 1.6) * uStyleGain;
      color = clamp(source + (styled - source) * styleAmount, 0.0, 1.0);

      vec2 point = (vUv - 0.5) * 2.0;
      point *= uSize / max(uSize.x, uSize.y);
      float vignette = smoothstep(0.7, 1.42, length(point));
      color *= 1.0 - vignette * uVignette * uIntensity;

      float noise = hash21(gl_FragCoord.xy + uSeed) - 0.5;
      float grainBand = 0.45 + 0.55 * (1.0 - abs(splitLuma - 0.5) * 1.7);
      color += noise * uGrain * uIntensity * grainBand;

      float alpha = texture2D(uImage, vUv).a;
      gl_FragColor = vec4(clamp(color, 0.0, 1.0), alpha);
    }
  `;

  class FilmRenderer {
    constructor(canvas) {
      this.canvas = canvas;
      this.gl = null;
      this.context2d = null;
      this.maxTextureSize = 4096;
      this.locations = {};

      try {
        this.gl = canvas.getContext("webgl", {
          alpha: false,
          antialias: false,
          depth: false,
          preserveDrawingBuffer: true,
          premultipliedAlpha: false,
        });
        if (this.gl) {
          this.initializeGL();
        }
      } catch (error) {
        console.warn("WebGL unavailable, using fallback renderer.", error);
        this.gl = null;
      }

      if (!this.gl) {
        this.context2d = canvas.getContext("2d");
      }
    }

    initializeGL() {
      const gl = this.gl;
      const vertexShader = this.compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
      const fragmentShader = this.compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program) || "Unable to link color program.");
      }

      gl.useProgram(program);
      this.program = program;

      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
        gl.STATIC_DRAW,
      );

      const position = gl.getAttribLocation(program, "aPosition");
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      this.texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

      const names = [
        "uImage",
        "uTexel",
        "uSize",
        "uIntensity",
        "uStyleGain",
        "uContrast",
        "uSaturation",
        "uExposure",
        "uTemperature",
        "uTint",
        "uFade",
        "uBlackPoint",
        "uWhitePoint",
        "uContrastPivot",
        "uSCurve",
        "uShadowLift",
        "uShadowTint",
        "uShadowTintAmount",
        "uHighlightTint",
        "uHighlightTintAmount",
        "uHighlightRolloff",
        "uShoulderStart",
        "uHighlightDesat",
        "uVignette",
        "uGrain",
        "uClarity",
        "uHalation",
        "uMono",
        "uMonoWeights",
        "uChannelMixR",
        "uChannelMixG",
        "uChannelMixB",
        "uSeed",
      ];

      for (const name of names) {
        this.locations[name] = gl.getUniformLocation(program, name);
      }

      this.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE) || 4096;
    }

    compileShader(type, source) {
      const gl = this.gl;
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) || "Unable to compile color shader.");
      }
      return shader;
    }

    render(source, preset, settings, size) {
      const width = Math.max(1, Math.round(size.width));
      const height = Math.max(1, Math.round(size.height));

      if (this.canvas.width !== width) this.canvas.width = width;
      if (this.canvas.height !== height) this.canvas.height = height;

      if (this.gl) {
        this.renderGL(source, preset, settings, width, height);
      } else {
        this.render2D(source, preset, settings, width, height);
      }
    }

    renderGL(source, preset, settings, width, height) {
      const gl = this.gl;
      const params = preset.params;
      const uniform = this.locations;

      gl.viewport(0, 0, width, height);
      gl.useProgram(this.program);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      gl.uniform1i(uniform.uImage, 0);
      gl.uniform2f(uniform.uTexel, 1 / width, 1 / height);
      gl.uniform2f(uniform.uSize, width, height);
      gl.uniform1f(uniform.uIntensity, settings.strength);
      gl.uniform1f(uniform.uStyleGain, preset.impact);
      gl.uniform1f(uniform.uContrast, params.contrast);
      gl.uniform1f(uniform.uSaturation, params.saturation);
      gl.uniform1f(uniform.uExposure, params.exposure);
      gl.uniform1f(uniform.uTemperature, params.temperature);
      gl.uniform1f(uniform.uTint, params.tint);
      gl.uniform1f(uniform.uFade, params.fade);
      gl.uniform1f(uniform.uBlackPoint, params.blackPoint);
      gl.uniform1f(uniform.uWhitePoint, params.whitePoint);
      gl.uniform1f(uniform.uContrastPivot, params.contrastPivot);
      gl.uniform1f(uniform.uSCurve, params.sCurve);
      gl.uniform1f(uniform.uShadowLift, params.shadowLift);
      gl.uniform3fv(uniform.uShadowTint, params.shadowTint);
      gl.uniform1f(uniform.uShadowTintAmount, params.shadowTintAmount);
      gl.uniform3fv(uniform.uHighlightTint, params.highlightTint);
      gl.uniform1f(uniform.uHighlightTintAmount, params.highlightTintAmount);
      gl.uniform1f(uniform.uHighlightRolloff, params.highlightRolloff);
      gl.uniform1f(uniform.uShoulderStart, params.shoulderStart);
      gl.uniform1f(uniform.uHighlightDesat, params.highlightDesat);
      gl.uniform1f(uniform.uVignette, params.vignette);
      gl.uniform1f(uniform.uGrain, params.grain * settings.grain);
      gl.uniform1f(uniform.uClarity, params.clarity);
      gl.uniform1f(uniform.uHalation, params.halation);
      gl.uniform1f(uniform.uMono, params.mono);
      gl.uniform3fv(uniform.uMonoWeights, params.monoWeights);
      gl.uniform3fv(uniform.uChannelMixR, params.channelMix[0]);
      gl.uniform3fv(uniform.uChannelMixG, params.channelMix[1]);
      gl.uniform3fv(uniform.uChannelMixB, params.channelMix[2]);
      gl.uniform1f(uniform.uSeed, settings.seed || 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    render2D(source, preset, settings, width, height) {
      const ctx = this.context2d;
      if (!ctx) return;

      const params = preset.params;
      const filter = [
        `brightness(${Math.max(0.1, 2 ** params.exposure)})`,
        `contrast(${params.contrast})`,
        `saturate(${params.saturation})`,
        params.mono > 0.5 ? "grayscale(1)" : "grayscale(0)",
      ].join(" ");

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.filter = "none";
      ctx.drawImage(source, 0, 0, width, height);
      ctx.globalAlpha = clamp(settings.strength * preset.impact, 0, 1);
      ctx.filter = filter;
      ctx.drawImage(source, 0, 0, width, height);
      ctx.restore();

      const shadowTint = params.shadowTint
        .map((value) => Math.round(clamp(value, 0, 1) * 255))
        .join(", ");
      const highlightTint = params.highlightTint
        .map((value) => Math.round(clamp(value, 0, 1) * 255))
        .join(", ");
      const tint = ctx.createLinearGradient(0, 0, 0, height);
      tint.addColorStop(
        0,
        `rgba(${highlightTint},${clamp(params.highlightTintAmount * 0.9, 0, 0.32)})`,
      );
      tint.addColorStop(0.52, "rgba(128,128,128,0)");
      tint.addColorStop(
        1,
        `rgba(${shadowTint},${clamp(params.shadowTintAmount * 0.9, 0, 0.32)})`,
      );
      ctx.save();
      ctx.globalCompositeOperation = "soft-light";
      ctx.globalAlpha = settings.strength;
      ctx.fillStyle = tint;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      const shade = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.2,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.7,
      );
      shade.addColorStop(0, "rgba(0,0,0,0)");
      shade.addColorStop(1, `rgba(8,8,6,${params.vignette * settings.strength})`);
      ctx.fillStyle = shade;
      ctx.fillRect(0, 0, width, height);
    }
  }

  function cacheDom() {
    const ids = [
      "addPhotosTop",
      "exportTop",
      "lookTotal",
      "brandTabs",
      "presetGrid",
      "mobileLookDock",
      "mobileBrandTabs",
      "mobileLookRail",
      "mobileDockCount",
      "dropZone",
      "currentFilename",
      "currentDimension",
      "prevPhoto",
      "nextPhoto",
      "photoCounter",
      "stage",
      "emptyState",
      "emptyAdd",
      "previewWrap",
      "previewZoom",
      "previewZoomLayer",
      "zoomDock",
      "stageStrip",
      "zoomOut",
      "zoomFit",
      "zoomIn",
      "zoomValue",
      "beforeCanvas",
      "afterCanvas",
      "previewLookLabel",
      "splitLine",
      "splitRange",
      "dropCue",
      "readoutSeal",
      "readoutBrand",
      "readoutName",
      "filmstrip",
      "filmstripEmpty",
      "filmstripCount",
      "filmstripAdd",
      "controlCount",
      "lookSwatch",
      "lookCardBrand",
      "lookCardName",
      "lookCardTagline",
      "lookCardIndex",
      "lookBasisBadge",
      "lookSourceName",
      "lookNotes",
      "strengthSlider",
      "strengthValue",
      "stageStrength",
      "stageStrengthValue",
      "stageGrain",
      "stageGrainValue",
      "readoutApplyState",
      "grainSlider",
      "grainValue",
      "recommendNote",
      "recommendReset",
      "applyAll",
      "applyAllCount",
      "fourLookCount",
      "fourLookExport",
      "outputEstimate",
      "sizeSelect",
      "formatSelect",
      "qualityRow",
      "qualitySlider",
      "qualityValue",
      "exportAll",
      "exportButtonCount",
      "exportOne",
      "downloadReady",
      "downloadReadyTitle",
      "downloadReadyDetail",
      "downloadAgain",
      "fileInput",
      "toastStack",
      "processingLayer",
      "processingTitle",
      "processingDetail",
      "progressBar",
      "progressPercent",
      "cancelExport",
      "guideReplay",
      "stageHeadAdd",
      "stageReplace",
      "stageRemove",
      "mobileSheetAdd",
    ];

    for (const id of ids) {
      dom[id] = document.getElementById(id);
    }

    dom.qualityValue = document.getElementById("qualityValue");
  }

  // Add/Replace/Remove have to exist even if 34 look cards fail to paint.
  function setupHomeGuardrails() {
    const add = () => {
      dom.fileInput.value = "";
      dom.fileInput.click();
    };
    for (const id of ["stageHeadAdd", "mobileSheetAdd"]) {
      document.getElementById(id)?.addEventListener("click", add);
    }
    document.getElementById("stageReplace")?.addEventListener("click", () => pickSinglePhoto(replaceActiveFile));
    document.getElementById("stageRemove")?.addEventListener("click", () => {
      if (state.activeId) removeItem(state.activeId);
    });
    window.__silverHomeReady = true;
  }

  function boot() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
      init();
    }
  }

  function init() {
    cacheDom();
    restoreSettings();
    previewRenderer = new FilmRenderer(dom.afterCanvas);
    thumbRenderer = new FilmRenderer(document.createElement("canvas"));
    exportRenderer = new FilmRenderer(document.createElement("canvas"));

    bindEvents();
    setupDragAndDrop();
    setupHomeGuardrails();
    applyLanguage(i18n.language);
    updateInterface();
    if (window.matchMedia("(max-width: 790px)").matches) {
      // Phones start on "choose a photo" rather than a dimmed interface
      // whose one useful button is buried further down the darkroom.
      setStageDepth(0);
    } else {
      // The tweak panel ships open so its controls exist in the markup; a
      // desktop darkroom keeps it closed until Advanced is asked for.
      const tweak = document.querySelector(".stage-tweak");
      if (tweak) tweak.open = false;
    }
    // Lift the first-paint curtain once the real interface is ready.
    window.setTimeout(() => {
      document.body.classList.remove("booting");
      document.getElementById("bootVeil")?.classList.add("is-gone");
    }, 30);
    // A language switch reloads the page. If the welcome card was already
    // shown in that session, resume at the tour instead of showing it again.
    let welcomedThisSession = false;
    try {
      welcomedThisSession = sessionStorage.getItem(GUIDE_WELCOMED_KEY) === "1";
    } catch {
      // Private browsers without session storage simply see the welcome again.
    }
    requestAnimationFrame(() => prepareGuide({ quiet: welcomedThisSession }));
  }

  function restoreSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
      if (typeof saved.strength === "number") state.strength = clamp(saved.strength, 0, 1.6);
      if (typeof saved.grain === "number") state.grain = clamp(saved.grain, 0, 1.5);
      if (PRESET_MAP.has(saved.lastPresetId)) {
        state.lastPresetId = saved.lastPresetId;
        state.selectedPresetId = saved.lastPresetId;
      }
      if (["4096", "6000", "2560", "original"].includes(saved.size)) state.size = saved.size;
      if (["jpeg", "png"].includes(saved.format)) state.format = saved.format;
      if (typeof saved.quality === "number") state.quality = clamp(saved.quality, 70, 100);
    } catch {
      // Ignore malformed settings from older versions.
    }
  }

  function persistSettings() {
    try {
      localStorage.setItem(
        SETTINGS_KEY,
        JSON.stringify({
          strength: state.strength,
          grain: state.grain,
          lastPresetId: state.lastPresetId,
          size: state.size,
          format: state.format,
          quality: state.quality,
        }),
      );
    } catch {
      // Settings persistence is optional.
    }
  }

  function readGuideSeen() {
    try {
      return localStorage.getItem(GUIDE_SEEN_KEY) === "1";
    } catch {
      return false;
    }
  }

  function markGuideSeen() {
    try {
      localStorage.setItem(GUIDE_SEEN_KEY, "1");
    } catch {
      // A browser with storage disabled simply sees the guide again next time.
    }
  }

  function applyLanguage(language, options = {}) {
    if (language !== "en" && language !== "zh") return;
    if (i18n.language !== language) i18n.setLanguage(language);
    const en = language === "en";

    document.documentElement.lang = en ? "en" : "zh-CN";
    document.documentElement.dataset.lang = language;
    document.title = en ? "Silver Lab · Film mood, on demand" : "银盐调色台 · 胶片气质实验室";

    for (const node of document.querySelectorAll("[data-i18n]")) {
      node.textContent = t(node.dataset.i18n);
    }
    for (const node of document.querySelectorAll("[data-i18n-aria]")) {
      node.setAttribute("aria-label", t(node.dataset.i18nAria));
    }
    for (const button of document.querySelectorAll(".lang-option")) {
      const active = button.dataset.lang === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    }
    const chip = document.querySelector(".lang-switch");
    if (chip) {
      chip.dataset.active = language;
      chip.classList.remove("is-flipping");
      void chip.offsetWidth;
      chip.classList.add("is-flipping");
    }

    dom.lookTotal.textContent = String(PRESETS.length).padStart(2, "0");
    dom.mobileDockCount.textContent = t("count.looks", { count: PRESETS.length });
    renderPresets();
    renderMobileLooks();
    updateInterface();

    document.documentElement.classList.remove("lang-swapping");
    if (!options.silent) {
      void document.documentElement.offsetWidth;
      document.documentElement.classList.add("lang-swapping");
      window.setTimeout(() => document.documentElement.classList.remove("lang-swapping"), 420);
    }

    if (guide.active) refreshGuideCopy();
    if (guide.welcome) refreshWelcomeCopy();
    if (!options.silent && options.savedHint) {
      showToast(en ? "Interface switched to English." : "界面已切换为中文。", "good", 2200);
    }
  }

  function setLanguage(language) {
    if (i18n.language === language) return;
    applyLanguage(language, { savedHint: true });
  }

  function bindEvents() {
    const openPicker = () => {
      dom.fileInput.value = "";
      dom.fileInput.click();
    };

    for (const button of [
      dom.addPhotosTop,
      dom.emptyAdd,
      dom.filmstripAdd,
      dom.filmstripEmpty,
      dom.stageHeadAdd,
      dom.mobileSheetAdd,
    ]) {
      if (!button) continue;
      button.addEventListener("click", openPicker);
    }

    dom.stageReplace?.addEventListener("click", () => pickSinglePhoto(replaceActiveFile));
    dom.stageRemove?.addEventListener("click", () => {
      if (!state.activeId) return;
      if (state.items.length === 1) {
        removeItem(state.activeId);
        setStageDepth(0);
        return;
      }
      removeItem(state.activeId);
    });

    dom.fileInput.addEventListener("change", (event) => {
      addFiles(Array.from(event.target.files || []));
    });

    for (const button of document.querySelectorAll(".lang-option")) {
      button.addEventListener("click", () => setLanguage(button.dataset.lang));
    }

    dom.brandTabs.addEventListener("click", handleBrandClick);
    dom.mobileBrandTabs.addEventListener("click", handleBrandClick);
    bindPresetShelfDrag();
    bindBrandStripDrag();

    // On a phone, swiping the category strip means browsing: a real tap (little
    // movement) still switches the brand.
    function bindBrandStripDrag() {
      const strip = dom.mobileBrandTabs;
      let drag = null;
      let suppressClick = false;

      const finish = (event, cancelled = false) => {
        if (!drag || event.pointerId !== drag.pointerId) return;
        const moved = Math.hypot(event.clientX - drag.x, event.clientY - drag.y);
        if (!cancelled) strip.scrollLeft = drag.scrollLeft - (event.clientX - drag.x);
        if (moved > 6) suppressClick = true;
        drag = null;
        strip.classList.remove("is-dragging");
      };

      strip.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;
        if (strip.scrollWidth <= strip.clientWidth + 2) return;
        drag = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, scrollLeft: strip.scrollLeft, captured: false };
      });
      strip.addEventListener("pointermove", (event) => {
        if (!drag || event.pointerId !== drag.pointerId) return;
        const dx = event.clientX - drag.x;
        const dy = event.clientY - drag.y;
        if (!strip.classList.contains("is-dragging") && Math.abs(dx) < 6) return;
        if (Math.abs(dx) <= Math.abs(dy) && !strip.classList.contains("is-dragging")) return;
        if (!drag.captured) {
          drag.captured = true;
          try {
            strip.setPointerCapture(event.pointerId);
          } catch {
            // Synthetic pointers cannot be captured.
          }
        }
        strip.classList.add("is-dragging");
        event.preventDefault();
        strip.scrollLeft = drag.scrollLeft - dx;
      });
      strip.addEventListener("pointerup", (event) => finish(event));
      strip.addEventListener("pointercancel", (event) => finish(event, true));
      window.addEventListener("pointerup", (event) => finish(event));
      strip.addEventListener(
        "click",
        (event) => {
          if (!suppressClick) return;
          suppressClick = false;
          event.preventDefault();
          event.stopImmediatePropagation();
        },
        true,
      );
    }

    // On a phone, swiping the look rail means browsing: the cards only show a
    // photo preview while scrolling. A real tap (little movement) still picks.
    let railPress = null;
    dom.mobileLookRail.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" || dom.mobileLookRail.scrollWidth <= dom.mobileLookRail.clientWidth) return;
      railPress = { x: event.clientX, y: event.clientY, card: event.target.closest(".mobile-look-card") };
      dom.mobileLookRail.classList.add("is-scrolling");
    });
    dom.mobileLookRail.addEventListener("pointerup", () => {
      window.setTimeout(() => {
        dom.mobileLookRail.classList.remove("is-scrolling");
        railPress = null;
      }, 150);
    });
    dom.mobileLookRail.addEventListener("pointercancel", () => {
      dom.mobileLookRail.classList.remove("is-scrolling");
      railPress = null;
    });
    dom.mobileLookRail.addEventListener("click", (event) => {
      const card = event.target.closest(".mobile-look-card");
      if (!card || !railPress || railPress.card !== card) return;
      const moved = Math.hypot(event.clientX - railPress.x, event.clientY - railPress.y);
      if (moved > 7) event.stopImmediatePropagation();
    }, true);

    dom.prevPhoto.addEventListener("click", () => moveSelection(-1));
    dom.nextPhoto.addEventListener("click", () => moveSelection(1));

    dom.splitRange.addEventListener("input", (event) => {
      setSplit(Number(event.target.value));
    });

    // The invisible split slider covers the whole print, so it swallows the
    // wheel before the zoom layer can see it. Forward it, or the hint on the
    // rail promises something the page never does.
    dom.splitRange.addEventListener(
      "wheel",
      (event) => {
        if (mobileQuery.matches) return;
        event.preventDefault();
        zoomStep(event.deltaY < 0 ? 1 : -1, event.clientX, event.clientY);
      },
      { passive: false },
    );

    // Same story for gestures. The invisible split slider covers the whole
    // print, so it swallows every pointer event: without this relay the
    // desktop drag-to-pan and the phone pinch-to-zoom never fire at all.
    // The slider keeps its own job of moving the split line with one finger.
    const relayToZoomLayer = (event) => {
      // Two fingers mean zoom. A single finger still belongs to the split
      // line unless the print is already magnified and being panned.
      if (event.pointerType === "touch" && event.isPrimary === false) {
        event.preventDefault();
      }
      dom.previewZoomLayer.dispatchEvent(
        new PointerEvent(event.type, {
          bubbles: true,
          cancelable: true,
          pointerId: event.pointerId,
          pointerType: event.pointerType,
          clientX: event.clientX,
          clientY: event.clientY,
          button: event.button,
          buttons: event.buttons,
          isPrimary: event.isPrimary,
        }),
      );
    };
    for (const type of ["pointerdown", "pointermove", "pointerup", "pointercancel"]) {
      dom.splitRange.addEventListener(type, relayToZoomLayer);
    }

    bindZoomControls();

    dom.previewWrap.addEventListener("click", (event) => {
      if (!window.matchMedia("(max-width: 790px)").matches) return;
      if (event.target.closest(".split-range, .split-handle, .zoom-dock")) return;
      setStageDepth(0);
      dom.mobileLookRail?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    dom.strengthSlider.addEventListener("input", (event) => {
      state.strength = Number(event.target.value) / 100;
      dom.strengthValue.textContent = `${event.target.value}%`;
      dom.stageStrength.value = event.target.value;
      dom.stageStrengthValue.textContent = `${event.target.value}%`;
      syncRecommendation();
      paintRange(dom.strengthSlider);
      paintRange(dom.stageStrength);
      renderPreview();
    });

    dom.strengthSlider.addEventListener("change", () => {
      persistSettings();
      refreshAllThumbnails();
    });

    dom.grainSlider.addEventListener("input", (event) => {
      state.grain = Number(event.target.value) / 100;
      dom.grainValue.textContent = grainLabel(event.target.value);
      dom.stageGrain.value = event.target.value;
      dom.stageGrainValue.textContent = grainLabel(event.target.value);
      syncRecommendation();
      paintRange(dom.grainSlider);
      paintRange(dom.stageGrain);
      renderPreview();
    });

    dom.grainSlider.addEventListener("change", () => {
      persistSettings();
      refreshAllThumbnails();
    });

    dom.stageStrength.addEventListener("input", (event) => {
      dom.strengthSlider.value = event.target.value;
      dom.strengthSlider.dispatchEvent(new Event("input", { bubbles: true }));
    });
    dom.stageStrength.addEventListener("change", () => {
      dom.strengthSlider.dispatchEvent(new Event("change", { bubbles: true }));
    });
    dom.stageGrain.addEventListener("input", (event) => {
      dom.grainSlider.value = event.target.value;
      dom.grainSlider.dispatchEvent(new Event("input", { bubbles: true }));
    });
    dom.stageGrain.addEventListener("change", () => {
      dom.grainSlider.dispatchEvent(new Event("change", { bubbles: true }));
    });

    dom.recommendReset.addEventListener("click", () => {
      const atRecommended =
        Math.abs(state.strength - RECOMMENDED_LOOK.strength) < 0.005 &&
        Math.abs(state.grain - RECOMMENDED_LOOK.grain) < 0.005;
      if (atRecommended) {
        showToast(t("toast.alreadyRecommended"));
        return;
      }
      animateRecommendation(() => {
        state.strength = RECOMMENDED_LOOK.strength;
        state.grain = RECOMMENDED_LOOK.grain;
        syncControls();
        renderPreview();
        refreshAllThumbnails();
        persistSettings();
      });
      showToast(t("toast.returnedRecommended"), "good");
    });

    dom.applyAll.addEventListener("click", () => {
      if (activeLookAppliesToAll()) return;
      applyCurrentLookToAll();
    });
    dom.guideReplay.addEventListener("click", announceGuide);
    dom.fourLookExport.addEventListener("click", () => runExport("four"));
    dom.exportAll.addEventListener("click", () => runExport("all"));
    dom.exportOne.addEventListener("click", () => runExport("one"));

    dom.exportTop.addEventListener("click", () => {
      if (state.items.length === 0) {
        openPicker();
      } else {
        const print = document.getElementById("depthPrint");
        if (window.matchMedia("(max-width: 790px)").matches && print) {
          setStageDepth(2);
          print.closest(".stage-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
          cueExportCard();
        } else {
          runExport("all");
        }
      }
    });

    document.getElementById("mobileApplyAll")?.addEventListener("click", () => {
      if (!activeLookAppliesToAll()) applyCurrentLookToAll();
    });
    document.getElementById("mobileExportOne")?.addEventListener("click", () => runExport("one"));
    document.getElementById("mobileExportAll")?.addEventListener("click", () => runExport("all"));
    document.getElementById("mobileSheetSettings")?.addEventListener("click", (event) => {
      event.stopPropagation();
      // "Advanced" opens the tweak drawer inside the darkroom; the export
      // options live there too, so the phone never has to hunt for them.
      setTweakOpen(!document.querySelector(".stage-tweak")?.open);
    });
    // One UI sync serves both the native <summary> toggle and the Advanced
    // button, so a tap can never open and immediately close the panel.
    document.querySelector(".stage-tweak")?.addEventListener("toggle", syncTweakUI);
    document.getElementById("mobileSheetRoll")?.addEventListener("click", () => {
      const sheet = document.querySelector(".filmstrip-card");
      sheet?.classList.add("is-open");
      sheet?.scrollTo({ top: 0 });
    });
    document.getElementById("mobileQuickRoll")?.addEventListener("click", () => {
      const sheet = document.querySelector(".filmstrip-card");
      sheet?.classList.add("is-open");
      sheet?.scrollTo({ top: 0 });
    });
    document.getElementById("mobileQuickReplace")?.addEventListener("click", () => pickSinglePhoto(replaceActiveFile));
    document.getElementById("mobileQuickRemove")?.addEventListener("click", () => {
      if (!state.activeId) {
        setStageDepth(0);
        return;
      }
      removeItem(state.activeId);
    });
    document.querySelector(".controls-heading-row")?.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 790px)").matches) {
        document.querySelector(".controls-panel")?.classList.remove("is-open");
      }
    });
    document.querySelector(".filmstrip-head h2")?.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 790px)").matches) {
        document.querySelector(".filmstrip-card")?.classList.remove("is-open");
      }
    });

    dom.sizeSelect.addEventListener("change", (event) => {
      state.size = event.target.value;
      persistSettings();
      updateInterface();
    });

    dom.formatSelect.addEventListener("change", (event) => {
      state.format = event.target.value;
      dom.qualityRow.hidden = state.format !== "jpeg";
      persistSettings();
      updateInterface();
    });

    dom.qualitySlider.addEventListener("input", (event) => {
      state.quality = Number(event.target.value);
      dom.qualityValue.textContent = String(state.quality);
      paintRange(dom.qualitySlider);
    });

    dom.qualitySlider.addEventListener("change", persistSettings);

    dom.downloadAgain.addEventListener("click", () => {
      if (state.lastDownload) {
        triggerDownload(state.lastDownload.url, state.lastDownload.name);
      }
    });

    dom.cancelExport.addEventListener("click", () => {
      state.cancelRequested = true;
      dom.cancelExport.disabled = true;
      dom.processingDetail.textContent = t("processing.cancelling");
    });

    document.addEventListener("keydown", (event) => {
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLSelectElement ||
        target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveSelection(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        moveSelection(1);
      } else if (event.key.toLowerCase() === "b" && state.activeId) {
        setSplit(state.split > 5 ? 0 : 68);
      } else if (event.key.toLowerCase() === "a" && state.activeId && state.items.length > 0) {
        applyCurrentLookToAll();
      } else if (event.key.toLowerCase() === "e" && state.items.length > 0 && !state.exporting) {
        runExport("all");
      } else if (
        ["+", "=", "-", "_", "0"].includes(event.key) &&
        state.activeId &&
        !dom.previewWrap.hidden
      ) {
        event.preventDefault();
        if (event.key === "0") resetPreviewZoom();
        else zoomStep(["-", "_"].includes(event.key) ? -1 : 1);
      }
    });

  window.addEventListener("resize", () => {
      requestAnimationFrame(() => {
        const zoomed = state.zoom > 1.01;
        if (!zoomed) {
          state.zoom = 1;
          state.zoomPan = { x: 0, y: 0 };
        }
        fitPreviewFrame();
        applyPreviewZoom();
        placeGuide();
      });
    });

    window.addEventListener("beforeunload", () => {
      if (state.lastDownload) URL.revokeObjectURL(state.lastDownload.url);
    });
  }

  function schedulePreviewFit() {
    window.cancelAnimationFrame(previewFitFrame);
    previewFitFrame = window.requestAnimationFrame(fitPreviewFrame);
    window.setTimeout(fitPreviewFrame, 60);
    window.setTimeout(fitPreviewFrame, 280);
  }

  function handleBrandClick(event) {
    const tab = event.target.closest("[data-brand]");
    if (!tab) return;
    state.brandFilter = tab.dataset.brand;
    // On a phone the dock is a sticky bar above the cards; align the new rail
    // without a smooth scroll so switching brands lands on the first card.
    const isPhone = window.matchMedia("(max-width: 790px)").matches;
    for (const button of document.querySelectorAll("[data-brand]")) {
      const active = button.dataset.brand === state.brandFilter;
      const isMobileTab = button.classList.contains("mobile-brand-tab");
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
      if (active && isMobileTab) {
        button.scrollIntoView({
          behavior: isPhone ? "auto" : "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
    renderPresets();
    renderMobileLooks();
    dom.presetGrid.scrollTop = 0;
    dom.mobileLookRail.scrollTo({ left: 0, behavior: "auto" });
    syncDockPinned();
  }

  function animateRecommendation(callback) {
    dom.recommendReset.classList.add("is-pressed");
    window.setTimeout(() => dom.recommendReset.classList.remove("is-pressed"), 220);
    callback();
  }

  function setupDragAndDrop() {
    let dragDepth = 0;

    const hasFiles = (event) =>
      Boolean(event.dataTransfer && Array.from(event.dataTransfer.types || []).includes("Files"));

    window.addEventListener("dragenter", (event) => {
      if (!hasFiles(event)) return;
      event.preventDefault();
      dragDepth += 1;
      dom.dropZone.classList.add("is-dragging");
    });

    window.addEventListener("dragover", (event) => {
      if (!hasFiles(event)) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "copy";
    });

    window.addEventListener("dragleave", (event) => {
      if (!hasFiles(event)) return;
      dragDepth = Math.max(0, dragDepth - 1);
      if (dragDepth === 0) dom.dropZone.classList.remove("is-dragging");
    });

    window.addEventListener("drop", (event) => {
      if (!hasFiles(event)) return;
      event.preventDefault();
      dragDepth = 0;
      dom.dropZone.classList.remove("is-dragging");
      addFiles(Array.from(event.dataTransfer.files || []));
    });
  }

  // Replace puts the new photo where the old one sat, so a batch is not
  // reshuffled just because one frame was swapped.
  async function replaceActiveFile(file) {
    const active = getActiveItem();
    if (!active || !file) return;
    if (state.exporting) {
      showToast(t("toast.exporting"));
      return;
    }
    showToast(t("toast.reading", { count: 1 }));
    try {
      const original = await decodeImage(file);
      const width = original.width;
      const height = original.height;
      const previewSource = resizeToCanvas(original, PREVIEW_EDGE);
      const thumbSource = resizeToCanvas(original, THUMB_EDGE);
      closeImageSource(original);
      const replacement = {
        ...active,
        file,
        name: file.name,
        width,
        height,
        previewSource,
        thumbSource,
        thumbUrl: "",
      };
      replacement.thumbUrl = renderThumbnail(replacement);
      const index = state.items.findIndex((item) => item.id === active.id);
      state.items[index] = replacement;
      state.activeId = replacement.id;
      state.selectedPresetId = replacement.presetId;
      lastFilmstripSignature = "";
      updateInterface();
      renderPreview();
      showToast(t("toast.replaced", { name: file.name }), "good");
    } catch (error) {
      console.warn("Unable to replace photo", file.name, error);
      showToast(t("toast.skipped", { count: 1, names: file.name }), "error");
    }
  }

  function pickSinglePhoto(handler) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg,image/png,image/webp,image/heic,image/heif,image/*";
    input.hidden = true;
    document.body.append(input);
    const cleanup = () => input.remove();
    input.addEventListener("change", () => {
      const file = input.files?.[0];
      cleanup();
      if (file) handler(file);
    });
    input.addEventListener("cancel", cleanup);
    input.click();
  }

  async function addFiles(files) {
    if (state.exporting) {
      showToast(t("toast.exporting"));
      return;
    }

    const room = MAX_FILES - state.items.length;
    if (room <= 0) {
      showToast(t("toast.maxFiles", { max: MAX_FILES }), "error");
      return;
    }

    const supported = files.filter((file) => file && (file.type.startsWith("image/") || /\.(jpe?g|png|webp|heic|heif)$/i.test(file.name)));
    if (supported.length === 0) {
      showToast(t("toast.noSupported"), "error");
      return;
    }

    const batch = supported.slice(0, room);
    if (supported.length > room) {
      showToast(t("toast.roomLeft", { room }));
    }

    showToast(t("toast.reading", { count: batch.length }));
    const skipped = [];

    for (const file of batch) {
      try {
        const original = await decodeImage(file);
        const width = original.width;
        const height = original.height;
        const previewSource = resizeToCanvas(original, PREVIEW_EDGE);
        const thumbSource = resizeToCanvas(original, THUMB_EDGE);
        closeImageSource(original);

        const item = {
          id: `photo-${state.nextId++}`,
          file,
          name: file.name,
          width,
          height,
          previewSource,
          thumbSource,
          thumbUrl: "",
          presetId: state.lastPresetId,
          seed: 1.7 + state.items.length * 1.37,
        };

        item.thumbUrl = renderThumbnail(item);
        state.items.push(item);

        if (!state.activeId) {
          state.activeId = item.id;
          state.selectedPresetId = state.lastPresetId;
        }
      } catch (error) {
        console.warn("Unable to read photo", file.name, error);
        skipped.push(file.name);
      }
    }

    if (state.items.length > 0) {
      if (!state.activeId) {
        state.activeId = state.items[0].id;
        state.selectedPresetId = state.lastPresetId;
      }
      dom.emptyState.hidden = true;
      dom.previewWrap.hidden = false;
    }

    updateInterface();
    renderPreview();
    if (window.matchMedia("(max-width: 790px)").matches) setStageDepth(batch ? 1 : 0);

    if (skipped.length) {
      showToast(
        t("toast.skipped", {
          count: skipped.length,
          names: `${skipped.slice(0, 3).join("、")}${skipped.length > 3 ? "…" : ""}`,
        }),
        "error",
        6500,
      );
    } else {
      showToast(t("toast.added", { count: batch.length }), "good");
    }
  }

  async function decodeImage(file, allowHeicFallback = true) {
    if ("createImageBitmap" in window) {
      try {
        return await createImageBitmap(file, { imageOrientation: "from-image" });
      } catch {
        try {
          return await createImageBitmap(file);
        } catch {
          // Fall through to an image element before trying the HEIC decoder.
        }
      }
    }

    try {
      return await decodeImageElement(file);
    } catch (error) {
      if (allowHeicFallback && isHeicFile(file)) {
        const heic2any = await loadHeicDecoder();
        if (!heic2any) throw error;

        const converted = await heic2any({
          blob: file,
          toType: "image/jpeg",
          quality: 0.94,
          multiple: false,
        });
        const blob = Array.isArray(converted) ? converted[0] : converted;
        const jpegFile = new File(
          [blob],
          file.name.replace(/\.(heic|heif)$/i, ".jpg"),
          { type: "image/jpeg" },
        );
        return decodeImage(jpegFile, false);
      }
      throw error;
    }
  }

  let heicDecoderPromise = null;

  // Load the 1.3 MB HEIC decoder only when an actual HEIC photo shows up.
  async function loadHeicDecoder() {
    if (typeof window.heic2any === "function") return window.heic2any;
    if (!heicDecoderPromise) {
      heicDecoderPromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "heic2any.min.js";
        script.async = true;
        script.onload = () =>
          typeof window.heic2any === "function"
            ? resolve(window.heic2any)
            : reject(new Error("HEIC decoder loaded without exposing heic2any"));
        script.onerror = () => reject(new Error("Unable to load the HEIC decoder"));
        document.head.append(script);
      }).catch((error) => {
        heicDecoderPromise = null;
        throw error;
      });
    }
    return heicDecoderPromise;
  }

  function decodeImageElement(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const image = new Image();
      image.onload = () => {
        URL.revokeObjectURL(url);
        resolve(image);
      };
      image.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error(`Unable to decode ${file.name}`));
      };
      image.src = url;
    });
  }

  async function decodeImageToCanvas(file, width, height) {
    const targetWidth = Math.max(1, Math.round(width));
    const targetHeight = Math.max(1, Math.round(height));
    let source = null;

    if ("createImageBitmap" in window) {
      try {
        source = await createImageBitmap(file, {
          imageOrientation: "from-image",
          resizeWidth: targetWidth,
          resizeHeight: targetHeight,
          resizeQuality: "high",
        });
      } catch {
        try {
          source = await createImageBitmap(file, { imageOrientation: "from-image" });
        } catch {
          source = null;
        }
      }
    }

    if (!source) {
      source = await decodeImage(file);
    }

    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext("2d", { alpha: false });
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.fillStyle = "#11120f";
    ctx.fillRect(0, 0, targetWidth, targetHeight);
    ctx.drawImage(source, 0, 0, targetWidth, targetHeight);
    closeImageSource(source);
    return canvas;
  }

  function resizeToCanvas(source, maxEdge) {
    const sourceWidth = source.width || source.naturalWidth;
    const sourceHeight = source.height || source.naturalHeight;
    const scale = Math.min(1, maxEdge / Math.max(sourceWidth, sourceHeight));
    const width = Math.max(1, Math.round(sourceWidth * scale));
    const height = Math.max(1, Math.round(sourceHeight * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d", { alpha: false });
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(source, 0, 0, width, height);
    return canvas;
  }

  function closeImageSource(source) {
    if (source && typeof source.close === "function") {
      try {
        source.close();
      } catch {
        // A closed ImageBitmap does not need further cleanup.
      }
    }
  }

  function renderThumbnail(item) {
    const preset = getPreset(item.presetId);
    thumbRenderer.render(
      item.thumbSource,
      preset,
      getRenderSettings(item.seed),
      { width: item.thumbSource.width, height: item.thumbSource.height },
    );
    return thumbRenderer.canvas.toDataURL("image/jpeg", 0.82);
  }

  function refreshThumbnail(item) {
    if (!item) return;
    item.thumbUrl = renderThumbnail(item);
    const image = dom.filmstrip.querySelector(`[data-film-id="${item.id}"] img`);
    if (image) image.src = item.thumbUrl;
    if (item.id === state.activeId) paintMobileLookPreviews();
  }

  function paintMobileLookPreviews() {
    for (const card of dom.mobileLookRail?.querySelectorAll(".mobile-look-card") || []) {
      const thumb = card.querySelector(".mobile-look-thumb");
      if (!thumb) continue;
      thumb.style.backgroundImage = "";
      thumb.style.backgroundColor = "";
      thumb.classList.remove("is-photo");
    }
  }

  function refreshAllThumbnails() {
    for (const item of state.items) {
      item.thumbUrl = renderThumbnail(item);
    }
    renderFilmstrip();
  }

  function renderPresets() {
    const visible = filteredPresets();

    dom.presetGrid.replaceChildren();
    updatePresetShelfRail();

    visible.forEach((preset, index) => {
      const brand = BRANDS[preset.brand];
      const name = presetName(preset);
      const card = document.createElement("button");
      card.type = "button";
      card.className = "preset-card";
      card.dataset.presetId = preset.id;
      card.style.setProperty("--swatch", preset.swatch);
      card.setAttribute("role", "listitem");
      card.setAttribute(
        "aria-label",
        `${i18n.brandName(preset.brand)} ${name}, ${presetBasis(preset)}`,
      );
      card.title = `${i18n.brandName(preset.brand, true)} · ${brand.en} / ${name} / ${presetBasis(preset)}`;

      const swatch = document.createElement("span");
      swatch.className = "preset-swatch";
      swatch.innerHTML = `
        <span class="swatch-letter">${brand.letter}</span>
        <span class="swatch-number">${String(PRESETS.indexOf(preset) + 1).padStart(2, "0")}</span>
      `;

      const copy = document.createElement("span");
      copy.className = "preset-copy";
      copy.innerHTML = `
        <span class="preset-meta">
          <span class="preset-brand">${i18n.brandName(preset.brand)}</span>
          <span class="preset-basis ${preset.basis === "官方取向" ? "is-official" : "is-community"}">${presetBasis(preset)}</span>
        </span>
        <span class="preset-name">${escapeHtml(name)}</span>
      `;

      const check = document.createElement("span");
      check.className = "preset-check";
      check.textContent = "✓";

      card.append(swatch, copy, check);
      card.classList.toggle("active", preset.id === state.selectedPresetId);
      card.addEventListener("click", () => selectPreset(preset.id));
      dom.presetGrid.append(card);

      card.style.animationDelay = `${index * 18}ms`;
    });
  }

  function filteredPresets() {
    return PRESETS.filter(
      (preset) => state.brandFilter === "all" || preset.brand === state.brandFilter,
    );
  }

  function renderMobileLooks() {
    if (!dom.mobileBrandTabs || !dom.mobileLookRail) return;
    dom.mobileBrandTabs.replaceChildren();
    for (const brandId of ["all", ...Object.keys(BRANDS)]) {
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "mobile-brand-tab";
      tab.dataset.brand = brandId;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", String(state.brandFilter === brandId));
      tab.classList.toggle("active", state.brandFilter === brandId);
      tab.textContent = brandId === "all" ? t("brand.all") : i18n.brandName(brandId);
      dom.mobileBrandTabs.append(tab);
    }

    dom.mobileLookRail.replaceChildren();
    const presetsInRail = filteredPresets();
    const wideRail = presetsInRail.length > 4;
    dom.mobileLookRail.classList.toggle("is-wide", wideRail);
    if (dom.mobileDockCount) {
      dom.mobileDockCount.replaceChildren();
      if (wideRail) {
        dom.mobileDockCount.append(String(presetsInRail.length));
        const unit = document.createElement("span");
        unit.textContent = t("looks.count");
        dom.mobileDockCount.append(unit);
      } else {
        dom.mobileDockCount.textContent = t("looks.swipe");
      }
    }
    presetsInRail.forEach((preset, index) => {
      const brand = BRANDS[preset.brand];
      const name = presetName(preset);
      const card = document.createElement("button");
      card.type = "button";
      card.className = "mobile-look-card";
      card.dataset.presetId = preset.id;
      card.style.setProperty("--swatch", preset.swatch);
      card.setAttribute("role", "listitem");
      card.setAttribute("aria-label", `${i18n.brandName(preset.brand)} ${name}`);
      card.innerHTML = `
        <span class="mobile-look-thumb">
          <span class="swatch-letter">${brand.letter}</span>
          <span class="mobile-look-no">${String(index + 1).padStart(2, "0")}</span>
        </span>
        <span class="mobile-look-name">${escapeHtml(name)}</span>
        <span class="mobile-look-brand">${escapeHtml(i18n.brandName(preset.brand))}</span>
        <span class="mobile-look-pick" aria-hidden="true">
          <svg viewBox="0 0 12 12"><path d="M2.5 6.4l2.2 2.2 4.8-5" /></svg>
        </span>
      `;
      if (window.matchMedia("(max-width: 790px)").matches) {
        const thumb = card.querySelector(".mobile-look-thumb");
        thumb.style.backgroundImage = `linear-gradient(165deg, rgba(255,255,255,0.34), rgba(255,255,255,0.05) 54%, rgba(0,0,0,0.08)), ${preset.swatch}`;
        thumb.querySelector(".swatch-letter")?.setAttribute("hidden", "");
      }
      card.classList.toggle("active", preset.id === state.selectedPresetId);
      card.addEventListener("click", () => {
        selectPreset(preset.id);
        const mobile = window.matchMedia("(max-width: 790px)").matches;
        if (!mobile) {
          card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
          return;
        }
        // On a phone, one tap picks a look. Touching the photo opens the full rail again.
        setStageDepth(1);
        card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        dom.dropZone.classList.remove("is-look-swapped");
        void dom.dropZone.offsetWidth;
        dom.dropZone.classList.add("is-look-swapped");
        window.setTimeout(() => dom.dropZone.classList.remove("is-look-swapped"), 700);
      });
      dom.mobileLookRail.append(card);
    });
  }

  function selectPreset(presetId) {
    if (!PRESET_MAP.has(presetId)) return;
    const preset = getPreset(presetId);
    state.selectedPresetId = presetId;
    state.lastPresetId = presetId;
    persistSettings();
    // On a phone the rail only shows one brand, so tapping a look never strands the active one.
    if (window.matchMedia("(max-width: 790px)").matches) state.brandFilter = preset.brand;
    const active = getActiveItem();

    if (active) {
      active.presetId = presetId;
      refreshThumbnail(active);
    }

    updatePresetSelection();
    updateLookReadout();
    paintMobileLookPreviews();
    renderPreview({ lookChanged: true });
  }

  function updatePresetSelection() {
    for (const card of dom.presetGrid.querySelectorAll(".preset-card")) {
      card.classList.toggle("active", card.dataset.presetId === state.selectedPresetId);
    }
    for (const card of dom.mobileLookRail?.querySelectorAll(".mobile-look-card") || []) {
      card.classList.toggle("active", card.dataset.presetId === state.selectedPresetId);
    }
  }

  function getActiveItem() {
    return state.items.find((item) => item.id === state.activeId) || null;
  }

  function getPreset(presetId) {
    return PRESET_MAP.get(presetId) || PRESETS[0];
  }

  function getRenderSettings(seed = 1.7) {
    return {
      strength: state.strength,
      grain: state.grain,
      seed,
    };
  }

  function selectItem(id, options = {}) {
    const item = state.items.find((candidate) => candidate.id === id);
    if (!item) return;

    state.activeId = id;
    state.selectedPresetId = item.presetId;
    state.lastPresetId = item.presetId;
    updateInterface();
    paintMobileLookPreviews();
    renderPreview();

    if (options.scroll !== false) {
      requestAnimationFrame(() => {
        const active = dom.filmstrip.querySelector(".film-item.active");
        active?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
      });
    }
  }

  function moveSelection(direction) {
    if (state.items.length < 2) return;
    const index = state.items.findIndex((item) => item.id === state.activeId);
    const next = (index + direction + state.items.length) % state.items.length;
    selectItem(state.items[next].id);
  }

  function removeItem(id) {
    const index = state.items.findIndex((item) => item.id === id);
    if (index < 0) return;
    const [removed] = state.items.splice(index, 1);

    if (removed.id === state.activeId) {
      const fallback = state.items[Math.min(index, state.items.length - 1)] || null;
      state.activeId = fallback?.id || null;
      state.selectedPresetId = fallback?.presetId || state.selectedPresetId;
    }

    updateInterface();
    renderPreview();
    showToast(t("toast.removed", { name: removed.name }));
  }

  function applyCurrentLookToAll() {
    if (state.items.length === 0) return;
    for (const item of state.items) {
      item.presetId = state.selectedPresetId;
      item.thumbUrl = renderThumbnail(item);
    }
    renderFilmstrip();
    const preset = getPreset(state.selectedPresetId);
    paintMobileLookPreviews();
    updateInterface();
    setStageDepth(1);
    if (window.matchMedia("(max-width: 790px)").matches) {
      dom.dropZone.classList.add("is-applied");
      window.setTimeout(() => dom.dropZone.classList.remove("is-applied"), 900);
    }
    showToast(
      t("toast.applied", {
        preset: presetName(preset),
        count: state.items.length,
      }),
      "good",
    );
  }

  // The markup keeps the drawer open on purpose: its sliders then survive even
  // when a phone browser may not expose the contents of a closed <details> to
  // automation or assistive tools. The class, not [open], is the visible state.
  function syncTweakUI() {
    const tweak = document.querySelector(".stage-tweak");
    if (!tweak) return;
    const visible = tweak.open && !tweak.classList.contains("is-pending");
    tweak.classList.toggle("is-visible", visible);
    dom.dropZone.classList.toggle("is-tweak-open", visible);
    document.getElementById("mobileSheetSettings")?.classList.toggle("is-open", visible);
    if (window.matchMedia("(max-width: 790px)").matches) {
      tweak.style.display = visible ? "block" : "";
    }
    if (visible && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.requestAnimationFrame(() => tweak.scrollIntoView({ behavior: "smooth", block: "nearest" }));
    }
  }

  function setTweakOpen(opening) {
    const tweak = document.querySelector(".stage-tweak");
    if (!tweak) return;
    const visible = tweak.open && !tweak.classList.contains("is-pending");
    if (opening && !visible) {
      // Hide it for one instant and reveal it again so the entrance motion
      // reads even though the markup stays open.
      tweak.classList.add("is-pending");
      syncTweakUI();
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          tweak.classList.remove("is-pending");
          const title = tweak.querySelector(".stage-tweak-title");
          if (title) {
            title.style.animation = "none";
            void title.offsetWidth;
            title.style.animation = "";
          }
          syncTweakUI();
        });
      });
      return;
    }
    tweak.classList.remove("is-pending");
    tweak.open = true;
    syncTweakUI();
  }

  function setStageDepth(depth) {
    dom.dropZone.classList.remove("stage-depth-0", "stage-depth-1", "stage-depth-2");
    dom.dropZone.classList.add(`stage-depth-${depth}`);
    // Returning to the plain photo view closes the tweak drawer; otherwise it
    // would quietly occupy the bottom of the next look-at-the-photo state.
    if (window.matchMedia("(max-width: 790px)").matches) {
      const tweak = document.querySelector(".stage-tweak");
      if (!tweak?.open) setTweakOpen(false);
    }
    if (dom.previewWrap && !dom.previewWrap.hidden) {
      schedulePreviewFit();
    }
  }

  // On a phone the look dock sticks to the top of the window. Once its label
  // row has scrolled past, the categories alone stay up so they keep fitting
  // one line while the print is being examined.
  function syncDockPinned() {
    if (!dom.mobileLookDock) return;
    const onPhone = window.matchMedia("(max-width: 790px)").matches;
    const depthOne = dom.dropZone.classList.contains("stage-depth-1");
    dom.dropZone.classList.toggle("is-dock-pinned", onPhone && depthOne);
  }

  function cueExportCard() {
    const exportCard = document.querySelector(".export-card");
    if (!exportCard) return;
    if (window.matchMedia("(max-width: 790px)").matches) {
      exportCard.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      dom.controlsPanel?.scrollTo({ top: exportCard.offsetTop - 20, behavior: "smooth" });
    }
    exportCard.classList.add("is-cued");
    window.setTimeout(() => exportCard.classList.remove("is-cued"), 1700);
  }

  function activeLookAppliesToAll() {
    const preset = getPreset(state.selectedPresetId);
    return state.items.length > 0 && state.items.every((item) => item.presetId === preset.id);
  }

  function renderPreview(options = {}) {
    const item = getActiveItem();
    const preset = getPreset(state.selectedPresetId);
    paintMobileLookPreviews();

    if (!item) {
      dom.emptyState.hidden = false;
      dom.previewWrap.hidden = true;
      updateLookReadout();
      return;
    }

    dom.emptyState.hidden = true;
    dom.previewWrap.hidden = false;

    const width = item.previewSource.width;
    const height = item.previewSource.height;

    if (dom.beforeCanvas.width !== width) dom.beforeCanvas.width = width;
    if (dom.beforeCanvas.height !== height) dom.beforeCanvas.height = height;

    const before = dom.beforeCanvas.getContext("2d", { alpha: false });
    before.drawImage(item.previewSource, 0, 0);

    previewRenderer.render(
      item.previewSource,
      preset,
      getRenderSettings(item.seed),
      { width, height },
    );

    dom.previewLookLabel.textContent = `${t("preview.afterLabel")} · ${presetName(preset)}`;
    if (options.lookChanged) {
      dom.stage.classList.remove("is-new-look");
      void dom.stage.offsetWidth;
      dom.stage.classList.add("is-new-look");
    }
    lastPreviewLookId = preset.id;
    updateLookReadout();
    resetPreviewZoom();
    fitPreviewFrame();
  }

  function fitPreviewFrame() {
    if (dom.previewWrap.hidden) return;

    // The print must not size itself. While its old width is still on the
    // element, a phone's flex column can report a collapsed darkroom and hand
    // the brand-new photo a 2x2 box. Park the photo first, then measure.
    const savedInline = {
      width: dom.previewWrap.style.width,
      height: dom.previewWrap.style.height,
      visibility: dom.previewWrap.style.visibility,
    };
    dom.previewWrap.style.width = "0px";
    dom.previewWrap.style.height = "0px";

    // The new print must not decide its own room. If the photo is visible while
    // the stage is measured, flex grows the stage to the photo's min-content
    // width and the height budget turns into a bogus, tiny number.
    const photoWasHidden = savedInline.visibility;
    
    // visibility keeps the layout, so the rail's place and the padding stay
    // measurable; display:none would collapse the stage to its empty state.
    dom.previewWrap.style.visibility = "hidden";
    try {
      if (!dom.previewWrap.hidden) void dom.previewWrap.offsetWidth;

      // Reading the photo's own box on every pass made it shrink its way down
      // to the 80px floor. The darkroom box is the truth.
      const mobile = window.matchMedia("(max-width: 790px)").matches;
      if (mobile) {
        // A phone letterboxes any photo in a box of the same shape as the
        // darkroom. A 3:1 panorama was collapsing to a two-pixel-tall strip,
        // so the print gets the shape of the stage and the photo is contained.
        const stageNow = dom.stage.getBoundingClientRect();
        const boxW = Math.max(120, Math.round(stageNow.width * 0.94));
        const boxH = Math.max(120, Math.round(stageNow.height - 8));
        dom.previewWrap.style.width = `${boxW}px`;
        dom.previewWrap.style.height = `${boxH}px`;
        state.previewBase = { width: boxW, height: boxH };
        return;
      }
      const desk = dom.zoomDock;
      const wideDesk = desk && !mobile && window.matchMedia("(min-width: 1000px)").matches;
      const deskInFlow = desk && (!wideDesk || dom.root.classList.contains("is-zoomed"));
      const stageBox = dom.stage.getBoundingClientRect();
      const stageStyle = window.getComputedStyle(dom.stage);
      const padX = (parseFloat(stageStyle.paddingLeft) || 0) + (parseFloat(stageStyle.paddingRight) || 0);
      const padY = (parseFloat(stageStyle.paddingTop) || 0) + (parseFloat(stageStyle.paddingBottom) || 0);
      const railHeight = deskInFlow && desk ? desk.offsetHeight : 0;
      const gap = parseFloat(stageStyle.rowGap) || 0;
      const availableWidth = Math.max(80, stageBox.width - padX - (mobile ? 24 : 0));
      // On a phone the darkroom is as tall as it needs to be for the print; it
      // does not hand down a spare height the way the desktop column does.
      if (mobile && stageBox.height < 120) {
        // A collapsed darkroom gives no honest reading; keep the previous box.
        dom.previewWrap.style.width = savedInline.width || `${Math.floor(availableWidth)}px`;
        dom.previewWrap.style.height = savedInline.height || `${Math.floor(availableWidth / 1.4)}px`;
        return;
      }
      const availableHeight = mobile
        ? Math.max(120, Math.round(availableWidth))
        : Math.max(80, stageBox.height - padY - railHeight - gap);
      if (!dom.stage.clientWidth || !dom.stage.clientHeight) return;
      const frameRatio = dom.beforeCanvas.width / Math.max(1, dom.beforeCanvas.height);
      const ratio = Number.isFinite(frameRatio) && frameRatio > 0 ? frameRatio : 1;
      // On a phone, reserve a slim gutter beside very tall photos so the zoom
      // controls always land on the controls themselves, not on the photo.
      const narrowMobile =
        mobile && dom.dropZone.classList.contains("stage-depth-1") && ratio < 0.66;
      dom.previewWrap.classList.toggle("is-narrow", narrowMobile);
      const widthBudget = narrowMobile ? availableWidth - 39 : availableWidth;
      // Wide photos still need room for the segmented zoom dock. Reserve the
      // gutter only when the dock would otherwise sit over the image.
      const shortMobile =
        mobile && dom.dropZone.classList.contains("stage-depth-1") && ratio > 2.2;
      dom.previewWrap.classList.toggle("is-very-wide", shortMobile);
      let width;
      let height;

      if (shortMobile) {
        width = widthBudget;
        height = width / ratio;
      } else if (widthBudget / availableHeight > ratio) {
        height = availableHeight;
        width = height * ratio;
      } else {
        width = widthBudget;
        height = width / ratio;
      }

      dom.previewWrap.style.width = `${Math.floor(width)}px`;
      dom.previewWrap.style.height = `${Math.floor(height)}px`;
      state.previewBase = { width: Math.floor(width), height: Math.floor(height) };
    } finally {
      dom.previewWrap.style.visibility = photoWasHidden;
      // A guard exit leaves 0px in place; restore something visible.
      if (dom.previewWrap.style.width === "0px") dom.previewWrap.style.width = savedInline.width;
      if (dom.previewWrap.style.height === "0px") dom.previewWrap.style.height = savedInline.height;
    }
    applyPreviewZoom();
  }

  const ZOOM_STEPS = [1, 1.25, 1.5, 2, 2.5, 3];

  function pinchMidpoint(touches) {
    return {
      x: (touches[0].x + touches[1].x) / 2,
      y: (touches[0].y + touches[1].y) / 2,
    };
  }

  function setZoomAt(nextZoom, anchor) {
    const next = clamp(nextZoom, 1, 3);
    const bounds = dom.previewWrap.getBoundingClientRect();
    const originX = anchor ? anchor.x : bounds.left + bounds.width / 2;
    const originY = anchor ? anchor.y : bounds.top + bounds.height / 2;
    const contentX =
      (originX - bounds.left - bounds.width / 2 - state.zoomPan.x) / state.zoom + state.previewBase.width / 2;
    const contentY =
      (originY - bounds.top - bounds.height / 2 - state.zoomPan.y) / state.zoom + state.previewBase.height / 2;
    state.zoom = next;
    state.zoomPan = {
      x: originX - bounds.left - bounds.width / 2 - (contentX - state.previewBase.width / 2) * next,
      y: originY - bounds.top - bounds.height / 2 - (contentY - state.previewBase.height / 2) * next,
    };
    if (next === 1) state.zoomPan = { x: 0, y: 0 };
    applyPreviewZoom();
  }

  /* The desktop shelf drags like a contact sheet: press a card and slide,
     or drag the thin print-margin rule under it. A tap still picks the look. */
  function bindPresetShelfDrag() {
    const shelf = dom.presetGrid;
    const rail = document.getElementById("shelfScroll");
    const thumb = document.getElementById("shelfScrollThumb");
    if (!rail || !thumb) return;
    let drag = null;
    let suppressClick = false;
    let dragTapCard = null;
    let dragOrigin = null;
    let tapTimer = 0;
    let mouseCapture = false;

    const releaseMouseCapture = () => {
      if (!mouseCapture) return;
      mouseCapture = false;
      try {
        shelf.releasePointerCapture?.(drag?.pointerId ?? -1);
      } catch {
        // The pointer may already be gone.
      }
    };

    const metrics = () => {
      const trackEl = rail.querySelector(".shelf-scroll-track");
      const track = Math.max(26, Math.round(trackEl?.clientWidth || rail.clientWidth - 9));
      const ratio = shelf.scrollHeight > 0 ? shelf.clientHeight / shelf.scrollHeight : 1;
      return {
        track,
        width: Math.max(26, Math.round(track * Math.min(1, ratio))),
        range: Math.max(0, shelf.scrollHeight - shelf.clientHeight),
      };
    };

    const paintRail = () => {
      const { track, width, range } = metrics();
      const offset = range > 0 ? (shelf.scrollTop / range) * (track - width) : 0;
      // Never wider than the track: a packed rule can otherwise stretch the
      // absolute thumb across the page and create a stray horizontal scroll.
      thumb.style.width = `${Math.min(width, track)}px`;
      thumb.style.transform = `translateX(${offset}px)`;
    };
    // Recalculate as soon as the browser paints the real page, not only on a
    // later resize, so the rail can never start at its provisional width.
    requestAnimationFrame(paintRail);
    window.addEventListener("load", paintRail, { once: true });

    const moveDrag = (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      if (event.pointerType === "mouse" && !(event.buttons & 1)) {
        finishDrag(event, true);
        return;
      }
      if (drag.source === "rail") {
        const { width, range } = drag.metrics;
        shelf.scrollTop = drag.scrollTop + ((event.clientX - drag.x) * range) / Math.max(1, drag.metrics.track - width);
        return;
      }
      // A held mouse drag follows the pointer exactly; CSS smooth scrolling
      // would only chase it and make the shelf feel like it is lagging.
      shelf.style.scrollBehavior = "auto";
      const dy = event.clientY - drag.y;
      const dx = event.clientX - drag.x;
      if (Math.abs(dy) < 2 && Math.abs(dx) < 2) return;
      event.preventDefault();
      shelf.scrollTop = drag.scrollTop - dy;
    };

    const finishDrag = (event, cancelled = false) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const fromShelf = drag.source === "shelf";
      const moved = Math.hypot(event.clientX - drag.x, event.clientY - drag.y);
      // scrollTop is authoritative: the clamping at either end is already
      // reflected there, so re-deriving it from the start would jump back.
      if (!cancelled && fromShelf && Math.abs(moved) <= 5) {
        shelf.scrollTop = drag.scrollTop;
      }
      if (fromShelf && moved > 5) {
        dragOrigin = dragTapCard;
        suppressClick = true;
      }
      drag = null;
      // Always drop the grab cursor: a document-level release can arrive
      // without matching pointermove, and a stuck "grabbing" hand makes the
      // shelf feel unresponsive.
      shelf.classList.remove("is-grabbing");
      rail.classList.remove("is-grabbing");
      shelf.style.scrollBehavior = "";
      releaseMouseCapture();
      paintRail();
    };

    const startDrag = (event, source) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (source === "shelf" && metrics().range <= 2) return;
      // Mouse only: while the button is held the shelf must keep receiving
      // moves even outside its box, while its own click target stays intact.
      if (event.pointerType === "mouse" && source === "shelf") {
        mouseCapture = true;
        try {
          shelf.setPointerCapture(event.pointerId);
        } catch {
          // Synthetic pointers cannot be captured; plain dragging still works.
        }
      }
      drag = {
        pointerId: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        scrollTop: shelf.scrollTop,
        source,
        metrics: metrics(),
      };
      shelf.classList.add("is-grabbing");
      rail.classList.add("is-grabbing");
      if (source === "rail") moveDrag(event);
    };

    shelf.addEventListener("pointerdown", (event) => startDrag(event, "shelf"));
    rail.addEventListener("pointerdown", (event) => startDrag(event, "rail"));
    for (const source of [shelf, rail]) {
      source.addEventListener("pointermove", moveDrag);
    }
    // No pointer capture here: Chromium retargets the click to the captured
    // shelf, and some phones report a capture that then swallows card taps.
    // Window listeners see the whole drag and the cards still get their click.
    window.addEventListener("pointerup", (event) => {
      const wasDrag = drag?.source === "shelf";
      // A mouse drag can still land outside the shelf; the window listener is
      // the only place that reliably sees the release.
      if (wasDrag && drag.scrollTop !== shelf.scrollTop) suppressClick = true;
      if (!wasDrag) {
        finishDrag(event);
        dragTapCard = null;
        return;
      }
      finishDrag(event);
      // If no click follows (a browser that suppresses it), the tap can still
      // be honoured after the click window has passed.
      window.clearTimeout(tapTimer);
      tapTimer = window.setTimeout(() => {
        if (suppressClick && dragOrigin && shelf.contains(dragOrigin)) {
          const tapped = dragOrigin;
          suppressClick = false;
          dragOrigin = null;
          dragTapCard = null;
          tapped.click();
        }
        dragOrigin = null;
        dragTapCard = null;
      }, 120);
    }, true);
    window.addEventListener("pointercancel", (event) => finishDrag(event, true));

    shelf.addEventListener("scroll", paintRail, { passive: true });
    window.addEventListener("resize", paintRail);
    window.addEventListener("blur", () => {
      drag = null;
      shelf.classList.remove("is-grabbing");
      rail.classList.remove("is-grabbing");
      shelf.style.scrollBehavior = "";
      releaseMouseCapture();
    });

    shelf.addEventListener(
      "click",
      (event) => {
        const card = event.target.closest?.(".preset-card");
        if (event.detail === 0) return;
        if (suppressClick && event.detail > 0) {
          // A click after a drag is not a choice; never let a short drag land
          // on whichever card happens to sit under the pointer.
          suppressClick = false;
          dragOrigin = null;
          dragTapCard = null;
          event.preventDefault();
          event.stopImmediatePropagation();
          return;
        }
        // Browsers without pointer capture can retarget the click to the
        // shelf itself; a plain tap still picks the card that was pressed.
        if (!card && dragTapCard && shelf.contains(dragTapCard)) {
          const tapped = dragTapCard;
          dragTapCard = null;
          tapped.click();
        }
        dragTapCard = null;
      },
      true,
    );
    shelf.addEventListener("pointerdown", (event) => {
      dragTapCard = event.target.closest?.(".preset-card") || null;
    });

    // Desktop wheel: the shelf is short on small laptops, so a plain wheel
    // turns into a fast, smooth vertical browse without touching the page.
    shelf.addEventListener(
      "wheel",
      (event) => {
        if (event.ctrlKey || Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
        if (Math.abs(event.deltaY) < 1) return;
        event.preventDefault();
        shelf.style.scrollBehavior = "auto";
        shelf.scrollTop += event.deltaY;
        window.clearTimeout(tapTimer);
        tapTimer = window.setTimeout(() => {
          shelf.style.scrollBehavior = "";
        }, 220);
        paintRail();
      },
      { passive: false },
    );
    // The rail itself is also a scrollbar: click or drag its track to jump.
    rail.addEventListener("pointerdown", (event) => {
      if (event.target !== rail && event.target !== thumb) return;
      const box = rail.getBoundingClientRect();
      const { width, range } = metrics();
      const ratio = (event.clientX - box.left - width / 2) / Math.max(1, box.width - width);
      shelf.scrollTop = Math.max(0, Math.min(range, ratio * range));
      paintRail();
    });

    updatePresetShelfRail = paintRail;
    paintRail();
  }

  let updatePresetShelfRail = () => {};

  // Desktop: explicit buttons, wheel and double-click. Touch screens never
  // receive taps on the photo itself, so open-look, scroll and pan gestures
  // cannot be mistaken for a zoom.
  function bindZoomControls() {
    const touchPoints = new Map();
    let pinch = null;
    let lastTap = 0;
    let lastTapAt = { x: 0, y: 0 };
    let touchPan = null;
    let releaseTimer = null;
    let resizePending = false;
    const release = (delay = 0) => {
      window.clearTimeout(releaseTimer);
      releaseTimer = window.setTimeout(() => dom.root.classList.remove("is-zoomed"), delay);
    };

    let press = null;
    const begin = (event) => {
      event.preventDefault();
      event.stopPropagation();
      // A relayed gesture from the split slider carries an id that has no live
      // pointer behind it, and setPointerCapture would throw and abort the pan.
      try {
        dom.previewZoomLayer.setPointerCapture?.(event.pointerId);
      } catch {
        /* no live pointer to capture: plain dragging still works */
      }
      window.clearTimeout(releaseTimer);
      dom.root.classList.add("is-zoomed");
      press = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        panStart: { ...state.zoomPan },
        dragged: false,
      };
      dom.previewZoom.classList.add("is-pressing");
    };
    const finish = (event, cancelled) => {
      if (!press || press.id !== event.pointerId) return;
      event.preventDefault();
      event.stopPropagation();
      const current = press;
      press = null;
      dom.previewZoom.classList.remove("is-pressing", "is-panning");
      // A tap on the print only steps back out. Zooming in stays an explicit
      // act (rail, wheel, pinch), so lining up or nudging a compare drag can
      // never be mistaken for a request to magnify the photo.
      if (!cancelled && !current.dragged && state.zoom > 1) resetPreviewZoom();
      // Keep the control desk open while the pointer rests on it.
      const overDesk = dom.zoomDock.contains(event.target) || dom.zoomDock.matches(":hover");
      release(overDesk || state.zoom > 1 ? 0 : 1500);
    };
    const move = (event) => {
      if (!press || press.id !== event.pointerId) return;
      const dx = event.clientX - press.x;
      const dy = event.clientY - press.y;
      if (!press.dragged && Math.hypot(dx, dy) < (event.pointerType === "mouse" ? 4 : 9)) return;
      if (state.zoom <= 1) return;
      press.dragged = true;
      dom.previewZoom.classList.add("is-panning");
      state.zoomPan = {
        x: press.panStart.x + dx,
        y: press.panStart.y + dy,
      };
      applyPreviewZoom();
    };
    dom.previewZoomLayer.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      begin(event);
    });
    dom.previewZoomLayer.addEventListener("pointermove", move);
    dom.previewZoomLayer.addEventListener("pointerup", (event) => finish(event, false));
    dom.previewZoomLayer.addEventListener("pointercancel", (event) => finish(event, true));
    dom.previewZoomLayer.addEventListener("dblclick", (event) => {
      event.preventDefault();
      resetPreviewZoom();
    });
    dom.previewZoom.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "mouse") return;
      window.clearTimeout(releaseTimer);
      dom.root.classList.add("is-zoomed");
    });
    dom.previewZoom.addEventListener("pointerleave", () => {
      if (press || state.zoom > 1) return;
      release(650);
    });
    dom.zoomDock.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "mouse") return;
      window.clearTimeout(releaseTimer);
      dom.root.classList.add("is-zoomed");
    });
    dom.zoomDock.addEventListener("pointerleave", (event) => {
      if (event.pointerType !== "mouse" || state.zoom > 1) return;
      release(650);
    });
    dom.zoomDock.addEventListener("focusin", () => {
      window.clearTimeout(releaseTimer);
      dom.root.classList.add("is-zoomed");
    });
    dom.zoomDock.addEventListener("focusout", () => {
      if (state.zoom <= 1) release(650);
    });

    // Touch: free pinching (1x-3x), finger pan once enlarged, and a slow
    // double-tap to fit. A moved finger is always a pan/scroll, never a tap.
    dom.previewZoom.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" || event.button !== 0) return;
      event.preventDefault();
      event.stopPropagation();
      touchPoints.set(event.pointerId, { x: event.clientX, y: event.clientY, startX: event.clientX, startY: event.clientY });
      try {
        dom.previewZoom.setPointerCapture?.(event.pointerId);
      } catch {
        /* a relayed gesture has no live pointer to capture */
      }
      if (touchPoints.size === 2) {
        const points = [...touchPoints.values()];
        pinch = {
          distance: Math.hypot(points[0].startX - points[1].startX, points[0].startY - points[1].startY),
          zoom: state.zoom,
          pan: { ...state.zoomPan },
          center: pinchMidpoint(points),
          ids: [...touchPoints.keys()],
        };
        touchPan = null;
      } else if (touchPoints.size === 1) {
        touchPan = {
          id: event.pointerId,
          x: event.clientX,
          y: event.clientY,
          pan: { ...state.zoomPan },
          moved: false,
        };
      }
    });
    dom.previewZoom.addEventListener("pointermove", (event) => {
      const point = touchPoints.get(event.pointerId);
      if (!point) return;
      event.preventDefault();
      point.x = event.clientX;
      point.y = event.clientY;
      if (pinch && touchPoints.size >= 2) {
        const points = [...touchPoints.values()];
        const distance = Math.max(1, Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y));
        const center = pinchMidpoint(points);
        if (!resizePending) {
          resizePending = true;
          requestAnimationFrame(() => {
            resizePending = false;
            fitPreviewFrame();
          });
        }
        setZoomAt(pinch.zoom * (distance / pinch.distance), center);
        state.zoomPan = {
          x: pinch.pan.x + center.x - pinch.center.x,
          y: pinch.pan.y + center.y - pinch.center.y,
        };
        applyPreviewZoom();
        return;
      }
      if (!touchPan || touchPan.id !== event.pointerId) return;
      const dx = event.clientX - touchPan.x;
      const dy = event.clientY - touchPan.y;
      if (!touchPan.moved && Math.hypot(dx, dy) > 8) {
        if (state.zoom <= 1) return;
        touchPan.moved = true;
        dom.previewZoom.classList.add("is-panning");
      }
      if (!touchPan.moved) return;
      state.zoomPan = { x: touchPan.pan.x + dx, y: touchPan.pan.y + dy };
      applyPreviewZoom();
    });
    const endTouch = (event) => {
      const point = touchPoints.get(event.pointerId);
      if (!point) return;
      touchPoints.delete(event.pointerId);
      dom.previewZoom.classList.remove("is-panning");
      if (pinch) {
        if (touchPoints.size < 2) pinch = null;
        if (touchPoints.size === 1) {
          const [remainingId, remaining] = [...touchPoints.entries()][0];
          touchPan = {
            id: remainingId,
            x: remaining.x,
            y: remaining.y,
            pan: { ...state.zoomPan },
            moved: true,
          };
        }
      }
      if (touchPan && touchPan.id === event.pointerId) {
        const moved = touchPan.moved;
        touchPan = null;
        if (!moved && event.type === "pointerup") {
          const now = performance.now();
          const quick = now - lastTap < 340;
          const near = Math.hypot(event.clientX - lastTapAt.x, event.clientY - lastTapAt.y) < 32;
          if (quick && near) {
            resetPreviewZoom();
            lastTap = 0;
          } else {
            lastTap = now;
            lastTapAt = { x: event.clientX, y: event.clientY };
          }
        }
      }
    };
    dom.previewZoom.addEventListener("pointerup", endTouch);
    dom.previewZoom.addEventListener("pointercancel", endTouch);

    dom.previewZoom.addEventListener("wheel", (event) => {
      if (mobileQuery.matches) return;
      event.preventDefault();
      zoomStep(event.deltaY < 0 ? 1 : -1, event.clientX, event.clientY);
    }, { passive: false });

    // Control desk: desktop only; hidden on phones where gestures rule.
    dom.zoomDock.addEventListener("pointerdown", (event) => event.stopPropagation());
    dom.zoomDock.addEventListener("click", (event) => event.stopPropagation());
    dom.zoomOut.addEventListener("click", () => zoomStep(-1));
    dom.zoomIn.addEventListener("click", () => zoomStep(1));
    dom.zoomFit.addEventListener("click", (event) => {
      event.stopPropagation();
      resetPreviewZoom();
    });
  }

  function resetPreviewZoom() {
    state.zoom = 1;
    state.zoomPan = { x: 0, y: 0 };
    dom.root.classList.remove("is-zoomed");
    dom.previewZoomLayer.style.transform = "";
    applyPreviewZoom();
  }

  function zoomStep(direction, clientX, clientY) {
    const next =
      direction > 0
        ? ZOOM_STEPS.find((step) => step > state.zoom + 0.01) ?? state.zoom
        : [...ZOOM_STEPS].reverse().find((step) => step < state.zoom - 0.01) ?? state.zoom;
    if (next === state.zoom) return;
    const bounds = dom.previewWrap.getBoundingClientRect();
    const focusX = clientX == null ? bounds.left + bounds.width / 2 : clientX;
    const focusY = clientY == null ? bounds.top + bounds.height / 2 : clientY;
    const baseX = state.previewBase.width / 2;
    const baseY = state.previewBase.height / 2;
    const contentX = (focusX - bounds.left - bounds.width / 2 - state.zoomPan.x) / state.zoom + baseX;
    const contentY = (focusY - bounds.top - bounds.height / 2 - state.zoomPan.y) / state.zoom + baseY;
    state.zoom = next;
    state.zoomPan = {
      x: focusX - bounds.left - bounds.width / 2 - (contentX - baseX) * next,
      y: focusY - bounds.top - bounds.height / 2 - (contentY - baseY) * next,
    };
    applyPreviewZoom();
  }

  function togglePreviewZoom(clientX, clientY) {
    if (state.zoom > 1) {
      resetPreviewZoom();
    } else {
      zoomStep(1, clientX, clientY);
    }
  }

  function applyPreviewZoom() {
    if (!dom.previewZoom || !dom.previewWrap || dom.previewWrap.hidden) return;
    const zoomed = state.zoom > 1.01;
    dom.root.classList.toggle("is-zoomed", zoomed);
    dom.previewWrap.classList.toggle("is-zoomed", zoomed);
    const baseWidth = state.previewBase.width || dom.previewWrap.clientWidth;
    const baseHeight = state.previewBase.height || dom.previewWrap.clientHeight;
    const zoom = state.zoom;
    const maxX = Math.max(0, (baseWidth * zoom - dom.previewWrap.clientWidth) / 2);
    const maxY = Math.max(0, (baseHeight * zoom - dom.previewWrap.clientHeight) / 2);
    // A gesture can hand us a NaN anchor; keep it out of the stylesheet, where
    // an invalid transform silently cancels the whole zoom.
    if (!Number.isFinite(state.zoomPan.x)) state.zoomPan.x = 0;
    if (!Number.isFinite(state.zoomPan.y)) state.zoomPan.y = 0;
    state.zoomPan.x = clamp(state.zoomPan.x, -maxX, maxX);
    state.zoomPan.y = clamp(state.zoomPan.y, -maxY, maxY);
    dom.previewZoomLayer.style.transform =
      zoom === 1 && !state.zoomPan.x && !state.zoomPan.y
        ? ""
        : `translate(${state.zoomPan.x.toFixed(2)}px, ${state.zoomPan.y.toFixed(2)}px) scale(${zoom})`;
    if (dom.zoomValue) dom.zoomValue.textContent = `${Math.round(zoom * 100)}%`;
    if (dom.zoomOut) dom.zoomOut.disabled = zoom <= 1.01;
    if (dom.zoomIn) dom.zoomIn.disabled = zoom >= 2.99;
    if (dom.zoomFit) {
      dom.zoomFit.classList.toggle("is-active", zoomed);
      dom.zoomFit.setAttribute("aria-pressed", String(zoomed));
    }
  }

  function setSplit(value) {
    state.split = clamp(value, 0, 100);
    dom.previewWrap.style.setProperty("--split", `${state.split}%`);
    dom.splitRange.value = String(state.split);
  }

  function renderFilmstrip() {
    const signature = [
      i18n.language,
      state.activeId,
      state.items.length,
      ...state.items.map((item) => `${item.id}:${item.presetId}`),
    ].join("|");
    if (signature === lastFilmstripSignature && dom.filmstrip.children.length > 0) {
      updateFilmstripSelection();
      return;
    }
    lastFilmstripSignature = signature;
    dom.filmstrip.replaceChildren();
    if (dom.stageStrip) dom.stageStrip.replaceChildren();
    dom.dropZone.classList.toggle("has-photos", state.items.length > 0);

    if (state.items.length === 0) {
      const empty = document.createElement("button");
      empty.type = "button";
      empty.className = "filmstrip-empty";
      empty.innerHTML = `
        <span class="filmstrip-sprocket" aria-hidden="true"></span>
        <span>${escapeHtml(t("film.empty"))}</span>
        <strong>${escapeHtml(t("film.emptyCta"))}</strong>
      `;
      empty.addEventListener("click", () => {
        dom.fileInput.value = "";
        dom.fileInput.click();
      });
      dom.filmstrip.append(empty);
      return;
    }

    state.items.forEach((item, index) => {
      const preset = getPreset(item.presetId);
      const brand = BRANDS[preset.brand];
      const frame = document.createElement("div");
      frame.className = "film-item";
      frame.dataset.filmId = item.id;
      frame.tabIndex = 0;
      frame.setAttribute("role", "button");
      frame.setAttribute(
        "aria-label",
        t("film.select", {
          name: item.name,
          brand: i18n.brandName(preset.brand),
          preset: presetName(preset),
        }),
      );
      frame.classList.toggle("active", item.id === state.activeId);

      const thumbWrap = document.createElement("div");
      thumbWrap.className = "film-thumb-wrap";

      const image = document.createElement("img");
      image.className = "film-thumb";
      image.src = item.thumbUrl;
      image.alt = "";
      image.draggable = false;

      const indexLabel = document.createElement("span");
      indexLabel.className = "film-index";
      indexLabel.textContent = String(index + 1).padStart(2, "0");

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "film-remove";
      remove.setAttribute("aria-label", t("film.remove", { name: item.name }));
      remove.textContent = "×";
      remove.addEventListener("click", (event) => {
        event.stopPropagation();
        removeItem(item.id);
      });

      const meta = document.createElement("div");
      meta.className = "film-meta";
      meta.innerHTML = `<strong>${escapeHtml(shortName(item.name))}</strong><span>${escapeHtml(i18n.brandName(preset.brand))} · ${escapeHtml(presetName(preset))}</span>`;

      thumbWrap.append(image, indexLabel, remove);
      frame.append(thumbWrap, meta);
      frame.addEventListener("click", () => selectItem(item.id));
      frame.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectItem(item.id);
        }
      });

      dom.filmstrip.append(frame);

      if (dom.stageStrip && dom.stageStrip.children.length === 0) {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "strip-chip";
        chip.dataset.filmId = item.id;
        chip.setAttribute("role", "listitem");
        chip.setAttribute("aria-label", item.name);
        chip.classList.toggle("active", item.id === state.activeId);
        const thumb = document.createElement("img");
        thumb.src = item.thumbUrl;
        thumb.alt = "";
        thumb.draggable = false;
        const number = document.createElement("span");
        number.textContent = String(index + 1).padStart(2, "0");
        chip.append(thumb, number);
        chip.addEventListener("click", () => selectItem(item.id));
        dom.stageStrip.append(chip);
      }
    });

    if (dom.stageStrip) {
      const add = document.createElement("button");
      add.type = "button";
      add.className = "strip-add";
      add.setAttribute("aria-label", t("film.add"));
      add.innerHTML = `<span aria-hidden="true">+</span><small>${escapeHtml(t("mobile.addPhoto"))}</small>`;
      add.addEventListener("click", () => {
        dom.fileInput.value = "";
        dom.fileInput.click();
      });
      dom.stageStrip.append(add);
    }
  }

  function updateFilmstripSelection() {
    for (const frame of dom.filmstrip.querySelectorAll(".film-item")) {
      frame.classList.toggle("active", frame.dataset.filmId === state.activeId);
    }
    for (const chip of dom.stageStrip?.querySelectorAll(".strip-chip") || []) {
      chip.classList.toggle("active", chip.dataset.filmId === state.activeId);
    }
  }

  function updateLookReadout() {
    const preset = getPreset(state.selectedPresetId);
    const index = String(PRESETS.indexOf(preset) + 1).padStart(2, "0");
    const name = presetName(preset);
    const brandFull = i18n.brandName(preset.brand, true);

    dom.readoutSeal.textContent = BRANDS[preset.brand].letter;
    dom.readoutBrand.textContent = `${brandFull} · ${BRANDS[preset.brand].en}`;
    dom.readoutName.textContent = name;
    dom.lookCardBrand.textContent = `${brandFull} · ${BRANDS[preset.brand].en}`;
    dom.lookCardName.textContent = name;
    dom.lookCardTagline.textContent = presetTagline(preset);
    dom.lookCardIndex.textContent = index;
    dom.lookSwatch.textContent = BRANDS[preset.brand].letter;
    dom.lookSwatch.style.setProperty("--swatch", preset.swatch);
    dom.lookBasisBadge.textContent = presetBasis(preset);
    dom.lookBasisBadge.classList.toggle("is-official", preset.basis === "官方取向");
    dom.lookBasisBadge.classList.toggle("is-community", preset.basis === "民间取向");
    dom.lookSourceName.textContent = presetSource(preset);
    dom.lookNotes.textContent = presetNotes(preset);
    dom.previewLookLabel.textContent = `${t("preview.afterLabel")} · ${name}`;
  }

  function updateInterface() {
    const count = state.items.length;
    const active = getActiveItem();
    const activeIndex = active ? state.items.indexOf(active) + 1 : 0;

    dom.dropZone.classList.toggle("has-photos", count > 0);
    if (active) {
      dom.currentFilename.textContent = active.name;
      dom.currentDimension.textContent = `${active.width} × ${active.height} · ${fileExtension(active.name)}`;
      dom.photoCounter.textContent = `${String(activeIndex).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;
      dom.emptyState.hidden = true;
      dom.previewWrap.hidden = false;
    } else {
      dom.currentFilename.textContent = t("stage.waiting");
      dom.currentDimension.textContent = "JPG · PNG · WebP";
      dom.photoCounter.textContent = `00 / ${String(count).padStart(2, "0")}`;
      dom.emptyState.hidden = false;
      dom.previewWrap.hidden = true;
    }

    dom.prevPhoto.disabled = count < 2;
    dom.nextPhoto.disabled = count < 2;
    const preset = getPreset(active?.presetId || state.selectedPresetId);
    const appliedToAll = count > 0 && state.items.every((item) => item.presetId === preset.id);
    dom.applyAll?.classList.toggle("is-applied", appliedToAll);
    if (dom.readoutApplyState) {
      dom.readoutApplyState.textContent = t(appliedToAll ? "sync.allSet" : "sync.thisOne");
      dom.readoutApplyState.classList.toggle("is-all", appliedToAll);
    }
    if (dom.applyAll) {
      const label = dom.applyAll.querySelector("[data-i18n='sync.apply']");
      if (label) label.textContent = t(appliedToAll ? "sync.alreadyAll" : "sync.apply");
    }
    const mobileApply = document.getElementById("mobileApplyAll");
    const mobileApplyLabel = document.getElementById("mobileApplyAllLabel");
    const mobileApplyCount = document.getElementById("mobileApplyAllCount");
    const mobileScope = document.getElementById("mobileScope");
    if (mobileApply) {
      mobileApply.disabled = count === 0 || state.exporting || appliedToAll;
      mobileApply.classList.toggle("is-applied", appliedToAll);
    }
    if (mobileApplyLabel) mobileApplyLabel.textContent = t(appliedToAll ? "sync.alreadyAll" : "sync.apply");
    if (mobileApplyCount) mobileApplyCount.textContent = String(count);
    if (mobileScope) {
      mobileScope.textContent = t(appliedToAll ? "sync.allSet" : "sync.thisOne");
      mobileScope.classList.toggle("is-all", appliedToAll);
    }
    const exportOneButton = document.getElementById("mobileExportOne");
    const exportAllButton = document.getElementById("mobileExportAll");
    const exportCount = document.getElementById("mobileExportCount");
    if (exportOneButton) exportOneButton.disabled = count === 0 || state.exporting;
    if (exportAllButton) exportAllButton.disabled = count === 0 || state.exporting;
    if (exportCount) exportCount.textContent = String(count);
    const rollCount = document.getElementById("mobileRollCount");
    if (rollCount) rollCount.textContent = String(count);
    dom.controlCount.textContent = t("count.photos", { count });
    dom.filmstripCount.textContent = String(count).padStart(2, "0");
    dom.applyAll.disabled = count === 0 || state.exporting;
    dom.applyAllCount.textContent = `${count}`;
    dom.exportAll.disabled = count === 0 || state.exporting;
    dom.exportTop.disabled = state.exporting;
    dom.exportOne.disabled = count === 0 || state.exporting;
    dom.exportButtonCount.textContent = t("count.sheet", { count });
    dom.fourLookExport.disabled = count === 0 || state.exporting;
    dom.fourLookCount.textContent = t("four.count", { photos: count, versions: count * 4 });

    dom.outputEstimate.textContent =
      count === 0
        ? t("output.none")
        : state.size === "original"
          ? t("output.estimateOriginal", { count })
          : t("output.estimate", { count, size: state.size });

    dom.sizeSelect.value = state.size;
    dom.formatSelect.value = state.format;
    dom.qualityRow.hidden = state.format !== "jpeg";
    dom.qualitySlider.value = String(state.quality);
    dom.qualityValue.textContent = String(state.quality);

    updatePresetSelection();
    updateLookReadout();
    renderFilmstrip();
    syncControls();
    setSplit(state.split);
  }

  function syncControls() {
    dom.strengthSlider.value = String(Math.round(state.strength * 100));
    dom.strengthValue.textContent = `${Math.round(state.strength * 100)}%`;
    dom.stageStrength.value = dom.strengthSlider.value;
    dom.stageStrengthValue.textContent = dom.strengthValue.textContent;
    dom.grainSlider.value = String(Math.round(state.grain * 100));
    dom.grainValue.textContent = grainLabel(Math.round(state.grain * 100));
    dom.stageGrain.value = dom.grainSlider.value;
    dom.stageGrainValue.textContent = dom.grainValue.textContent;
    syncRecommendation();
    dom.qualitySlider.value = String(state.quality);
    dom.qualityValue.textContent = String(state.quality);
    dom.sizeSelect.value = state.size;
    dom.formatSelect.value = state.format;
    dom.qualityRow.hidden = state.format !== "jpeg";
    paintRange(dom.strengthSlider);
    paintRange(dom.grainSlider);
    paintRange(dom.stageStrength);
    paintRange(dom.stageGrain);
    paintRange(dom.qualitySlider);
    setSplit(state.split);
  }

  function syncRecommendation() {
    const recommended =
      Math.abs(state.strength - RECOMMENDED_LOOK.strength) < 0.005 &&
      Math.abs(state.grain - RECOMMENDED_LOOK.grain) < 0.005;
    dom.recommendNote.textContent = recommended ? t("slider.recommendedNote") : t("slider.tunedNote");
    dom.recommendReset.textContent = recommended ? t("slider.atRecommended") : t("slider.reset");
    dom.recommendReset.disabled = recommended;
    dom.recommendReset.classList.toggle("is-recommended", recommended);
    const atStrength = Math.abs(state.strength - RECOMMENDED_LOOK.strength) < 0.005;
    const atGrain = Math.abs(state.grain - RECOMMENDED_LOOK.grain) < 0.005;
    document.querySelector("#strengthValue + .slider-star")?.classList.toggle("is-off", !atStrength);
    document.querySelector("#grainValue + .slider-star")?.classList.toggle("is-off", !atGrain);
  }

  function paintRange(input) {
    const min = Number(input.min || 0);
    const max = Number(input.max || 100);
    const value = Number(input.value);
    const percent = ((value - min) / (max - min)) * 100;
    input.style.setProperty("--range-fill", `${percent}%`);
  }

  async function runExport(mode) {
    if (state.exporting || state.items.length === 0) return;

    if (mode === "one" && !getActiveItem()) return;

    state.exporting = true;
    state.cancelRequested = false;
    dom.cancelExport.disabled = false;
    updateInterface();

    const sourceItems = mode === "one" ? [getActiveItem()] : [...state.items];
    const tasks =
      mode === "four"
        ? sourceItems.flatMap((item) =>
            SIGNATURE_PRESETS.map((presetId) => ({ item, presetId })),
          )
        : sourceItems.map((item) => ({ item, presetId: item.presetId }));

    const isArchive = mode !== "one";
    const extension = state.format === "png" ? "png" : "jpg";
    const mime = state.format === "png" ? "image/png" : "image/jpeg";
    const zipEntries = [];
    const failures = [];
    const usedNames = new Set();

    showProcessing(
      t(mode === "four" ? "processing.fourTitle" : isArchive ? "processing.archiveTitle" : "processing.oneTitle"),
      t("processing.detail", { count: tasks.length }),
    );

    for (let index = 0; index < tasks.length; index += 1) {
      if (state.cancelRequested) break;

      const task = tasks[index];
      const preset = getPreset(task.presetId);
      const percent = Math.round((index / tasks.length) * 100);
      updateProgress(
        percent,
        t("processing.progress", { index: index + 1, total: tasks.length, preset: presetName(preset) }),
      );

      try {
        const outputSize = calculateOutputSize(task.item, exportRenderer.maxTextureSize);
        const exportSource = await decodeImageToCanvas(
          task.item.file,
          outputSize.width,
          outputSize.height,
        );

        exportRenderer.render(
          exportSource,
          preset,
          getRenderSettings(task.item.seed),
          outputSize,
        );

        const blob = await canvasToBlob(
          exportRenderer.canvas,
          mime,
          state.quality / 100,
        );

        if (!blob) throw new Error(`Unable to encode ${task.item.name}`);

        const filename = uniqueFilename(
          buildExportName(task.item.name, preset, extension),
          usedNames,
        );

        if (isArchive) {
          zipEntries.push({
            name: filename,
            blob,
            size: blob.size,
            crc: await blobCrc32(blob),
          });
        } else {
          const url = URL.createObjectURL(blob);
          const download = {
            url,
            name: filename,
            size: blob.size,
            createdAt: Date.now(),
          };
          replaceLastDownload(download);
          triggerDownload(url, filename);
        }
      } catch (error) {
        console.error("Export failed", task.item.name, error);
        failures.push(task.item.name);
      }

      updateProgress(
        Math.round(((index + 1) / tasks.length) * 100),
        t("processing.progress", { index: index + 1, total: tasks.length, preset: presetName(preset) }),
      );

      if (index % 2 === 1) await nextFrame();
    }

    let completed = false;

    if (isArchive && zipEntries.length > 0) {
      updateProgress(100, t("processing.zip"));
      const zipBlob = createZip(zipEntries);
      const date = formatDateStamp(new Date());
      const zipName = isEnglish()
        ? `silver-lab_${date}_${zipEntries.length}photos${state.cancelRequested ? "_partial" : ""}.zip`
        : `银盐调色台_${date}_${zipEntries.length}张${state.cancelRequested ? "_已完成部分" : ""}.zip`;
      const url = URL.createObjectURL(zipBlob);
      const download = {
        url,
        name: zipName,
        size: zipBlob.size,
        createdAt: Date.now(),
      };
      replaceLastDownload(download);
      if (!state.cancelRequested) triggerDownload(url, zipName);
      dom.downloadReady.hidden = false;
      dom.downloadReadyTitle.textContent = t(state.cancelRequested ? "download.partial" : "download.done");
      dom.downloadReadyDetail.textContent = t("download.count", { count: zipEntries.length, size: formatBytes(zipBlob.size) });
      completed = !state.cancelRequested;
    } else if (!state.cancelRequested && !isArchive && failures.length === 0) {
      dom.downloadReady.hidden = false;
      dom.downloadReadyTitle.textContent = t("download.one");
      dom.downloadReadyDetail.textContent =
        state.lastDownload ? formatBytes(state.lastDownload.size) : t("download.file");
      completed = true;
    }

    state.exporting = false;
    hideProcessing();
    updateInterface();

    if (state.cancelRequested) {
      showToast(
        zipEntries.length > 0
          ? t("toast.partial", { count: zipEntries.length })
          : t("toast.cancelled"),
      );
    } else if (failures.length > 0) {
      showToast(
        t("toast.failures", {
          count: failures.length,
          names: `${failures.slice(0, 2).join("、")}${failures.length > 2 ? "…" : ""}`,
        }),
        "error",
        7000,
      );
    } else if (completed) {
      showToast(
        isArchive ? t("toast.packed", { count: zipEntries.length }) : t("toast.exportedOne"),
        "good",
      );
    }
  }

  // A one-time walkthrough anchored to the real controls. No permanent layout is added.
  function getGuideSteps() {
    const targets = {
      stage: () => {
        const dock = dom.mobileLookDock?.getClientRects().length ? dom.mobileLookDock : null;
        const stageCard = dom.dropZone;
        if (!dock || window.innerWidth > 790) return [stageCard];
        return [stageCard, dock];
      },
      presetGrid: () =>
        dom.mobileLookDock?.getClientRects().length ? dom.mobileLookDock : dom.presetGrid,
      sliders: () => [dom.strengthSlider, dom.grainSlider],
      applyAll: () => dom.applyAll,
      fourLook: () => dom.fourLookExport.closest(".four-look-card") || dom.fourLookExport,
    };
    return t("guide.steps").map((step, index) => ({
      ...step,
      target: () => (typeof step.target === "string" ? targets[step.target]() : targets.stage()),
      index,
    }));
  }

  const guide = {
    root: null,
    marker: null,
    popover: null,
    step: 0,
    active: false,
    welcome: null,
  };

  function prepareGuide({ quiet = false } = {}) {
    buildGuideLayer();
    document.body.classList.add("guide-ready");
    if (!readGuideSeen() && !quiet) openWelcome();
  }

  function buildGuideLayer() {
    const root = document.createElement("div");
    root.className = "guide-layer";
    root.hidden = true;

    const marker = document.createElement("div");
    marker.className = "ui-guide-marker";

    const popover = document.createElement("div");
    popover.className = "ui-guide-popover";
    popover.setAttribute("role", "dialog");
    popover.setAttribute("aria-live", "polite");
    popover.innerHTML = `
      <header>
        <span class="ui-guide-index"></span>
        <button class="ui-guide-skip" type="button"></button>
      </header>
      <h3></h3>
      <p></p>
      <footer>
        <span class="ui-guide-dots" aria-hidden="true"></span>
        <button class="ui-guide-next" type="button"></button>
      </footer>
    `;
    popover.addEventListener("click", (event) => {
      if (event.target.closest(".ui-guide-skip")) {
        finishGuide();
      } else if (event.target.closest(".ui-guide-next")) {
        nextGuideStep();
      }
    });
    root.append(marker, popover);
    document.body.append(root);
    guide.root = root;
    guide.marker = marker;
    guide.popover = popover;
  }

  function renderWelcomeCopy() {
    if (!guide.welcome) return;
    const section = guide.welcome.querySelector(".guide-welcome");
    const list = guide.welcome.querySelector("ol");
    section.querySelector(".eyebrow").textContent = t("guide.welcomeEyebrow");
    section.querySelector("h2").innerHTML = t("guide.welcomeTitleHtml");
    section.querySelector("p").textContent = t("guide.welcomeCopy");
    list.innerHTML = [1, 2, 3]
      .map(
        (n) => `<li><b>${n}</b><div><strong>${t(`guide.step${n}Title`)}</strong><span>${t(`guide.step${n}Body`)}</span></div></li>`,
      )
      .join("");
    section.querySelector("#guideStart").textContent = t("guide.start");
    section.querySelector("#guideSkip").textContent = t("guide.done");
  }

  function openWelcome() {
    closeWelcome();
    const backdrop = document.createElement("div");
    backdrop.className = "guide-welcome-backdrop";
    backdrop.innerHTML = `
      <section class="guide-welcome" role="dialog" aria-modal="true" aria-labelledby="guideWelcomeTitle">
        <div class="welcome-rail" aria-hidden="true">
          <div class="welcome-rail-top">
            <span class="welcome-rail-mark">
              <svg viewBox="0 0 44 44">
                <rect x="3.5" y="11" width="37" height="24" fill="none" stroke="currentColor" />
                <path d="M10 11v24M15 11v3.5M20 11v3.5M25 11v3.5M30 11v3.5M35 11v24" fill="none" stroke="currentColor" />
                <circle cx="23" cy="23" r="6.2" fill="none" stroke="currentColor" />
                <circle cx="23" cy="23" r="2.2" fill="currentColor" />
              </svg>
            </span>
            <span class="welcome-rail-caption">Silver Lab<br />Grain · Light · Time</span>
          </div>
          <div class="welcome-rail-bottom">
            <span>No. 01</span>
            <i></i>
            <span class="welcome-rail-seal"><span>银</span></span>
          </div>
        </div>
        <div class="guide-welcome-body">
          <span class="eyebrow"></span>
          <h2 id="guideWelcomeTitle"></h2>
          <p></p>
          <ol></ol>
          <div class="guide-welcome-actions">
            <button class="button button-ink" id="guideStart" type="button"></button>
            <button class="text-button" id="guideSkip" type="button"></button>
          </div>
        </div>
      </section>
    `;
    document.body.append(backdrop);
    guide.welcome = backdrop;
    try {
      sessionStorage.setItem(GUIDE_WELCOMED_KEY, "1");
    } catch {
      // The welcome still works for this page view without session storage.
    }
    renderWelcomeCopy();
    backdrop.querySelector("#guideStart").addEventListener("click", () => {
      closeWelcome();
      setTimeout(() => openGuideStep(0), 120);
    });
    backdrop.querySelector("#guideSkip").addEventListener("click", () => {
      closeWelcome();
      finishGuide();
    });
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) closeWelcome();
    });
    document.addEventListener("keydown", handleGuideKeydown);
    backdrop.querySelector("#guideStart").focus({ preventScroll: true });
  }

  function refreshWelcomeCopy() {
    renderWelcomeCopy();
  }

  function refreshGuideCopy() {
    if (!guide.active) return;
    paintGuideCopy();
    placeGuide();
  }

  function closeWelcome() {
    document.removeEventListener("keydown", handleGuideKeydown);
    guide.welcome?.remove();
    guide.welcome = null;
  }

  function handleGuideKeydown(event) {
    if (event.key !== "Escape") return;
    event.preventDefault();
    if (guide.welcome) {
      closeWelcome();
      finishGuide();
    } else if (guide.active) {
      finishGuide();
    }
  }

  function openGuideStep(index) {
    guide.step = clamp(index, 0, getGuideSteps().length - 1);
    guide.active = true;
    guide.root.hidden = false;
    closeWelcome();
    document.addEventListener("keydown", handleGuideKeydown);
    placeGuide();
    requestAnimationFrame(placeGuide);
    guide.popover.querySelector(".ui-guide-next").focus({ preventScroll: true });
  }

  function nextGuideStep() {
    if (!guide.active) return;
    if (guide.step >= getGuideSteps().length - 1) {
      finishGuide();
      return;
    }
    openGuideStep(guide.step + 1);
  }

  function finishGuide() {
    guide.active = false;
    if (guide.root) guide.root.hidden = true;
    document.querySelector(".controls-panel")?.classList.remove("is-open");
    closeWelcome();
    document.removeEventListener("keydown", handleGuideKeydown);
    markGuideSeen();
    refreshAllThumbnails();
  }

  function paintGuideCopy() {
    const steps = getGuideSteps();
    const current = steps[guide.step];
    guide.popover.querySelector(".ui-guide-index").textContent = `${String(guide.step + 1).padStart(2, "0")} / ${String(steps.length).padStart(2, "0")}`;
    guide.popover.querySelector(".ui-guide-skip").textContent = t("guide.skip");
    guide.popover.querySelector("h3").textContent = current.title;
    guide.popover.querySelector("p").textContent = current.body;
    guide.popover.querySelector(".ui-guide-dots").innerHTML = steps
      .map((_, index) => `<i class="${index === guide.step ? "on" : ""}"></i>`)
      .join("");
    guide.popover.querySelector(".ui-guide-next").textContent = current.next || t("guide.next");
  }

  function guideAnchor() {
    const steps = getGuideSteps();
    const raw = steps[guide.step].target();
    return (Array.isArray(raw) ? raw : [raw]).filter(
      (target) => target && target.getClientRects().length,
    );
  }

  function revealGuideTarget(targets) {
    const controls = targets[0].closest?.(".controls-panel");
    if (controls && window.matchMedia("(max-width: 790px)").matches) {
      controls.classList.add("is-open");
      controls.scrollTo({ top: 0 });
      const row = targets[0].closest?.(".slider-row");
      if (row) {
        const intro = controls.querySelector(".controls-intro");
        const offset = intro ? intro.getBoundingClientRect().height : 0;
        const rowTop = row.getBoundingClientRect().top - controls.getBoundingClientRect().top;
        controls.scrollTop = Math.max(0, rowTop - offset - 12);
      }
      return;
    }
    const row = targets[0].closest?.(".slider-row");
    if (!row) return;
    const scroller = row.closest(".preset-grid, .controls-panel");
    if (!scroller) return;
    const rowBox = row.getBoundingClientRect();
    const scrollBox = scroller.getBoundingClientRect();
    if (rowBox.top < scrollBox.top || rowBox.bottom > scrollBox.bottom) {
      scroller.scrollTop += rowBox.top - scrollBox.top - 10;
    }
  }

  function placeGuide() {
    if (!guide.active || !guide.root || guide.root.hidden) return;
    const targets = guideAnchor();
    if (targets.length === 0) {
      finishGuide();
      return;
    }

    revealGuideTarget(targets);
    const rects = targets.map((target) => target.getBoundingClientRect());
    const left = Math.min(...rects.map((rect) => rect.left));
    const top = Math.min(...rects.map((rect) => rect.top));
    const right = Math.max(...rects.map((rect) => rect.right));
    const bottom = Math.max(...rects.map((rect) => rect.bottom));
    const marker = guide.marker;
    marker.style.left = `${left - 5}px`;
    marker.style.top = `${top - 5}px`;
    marker.style.width = `${right - left + 10}px`;
    marker.style.height = `${bottom - top + 10}px`;

    paintGuideCopy();

    const width = guide.popover.offsetWidth;
    const height = guide.popover.offsetHeight;
    const margin = 12;
    const anchorRect = { left, top, right, bottom };
    const isCompact = window.innerWidth <= 790;
    let popLeft;
    let popTop;
    if (isCompact) {
      popLeft = margin;
      popTop = anchorRect.bottom + 10;
      if (popTop + height > window.innerHeight - margin) {
        popTop = Math.max(margin, anchorRect.top - height - 10);
      }
    } else {
      popLeft = anchorRect.right + 16;
      popTop = anchorRect.top;
      if (popLeft + width > window.innerWidth - margin) {
        popLeft = anchorRect.left - width - 16;
      }
      if (popLeft < margin) {
        popLeft = clamp(anchorRect.left, margin, window.innerWidth - width - margin);
      }
      popTop = clamp(popTop, margin, window.innerHeight - height - margin);
    }
    guide.popover.style.left = `${popLeft}px`;
    guide.popover.style.top = `${popTop}px`;
  }

  function announceGuide() {
    guide.active = false;
    if (guide.root) guide.root.hidden = true;
    closeWelcome();
    try {
      localStorage.removeItem(GUIDE_SEEN_KEY);
    } catch {
      // Ignore storage failures; the guide can still be replayed from this session.
    }
    openWelcome();
  }

  function calculateOutputSize(item, maxTextureSize) {
    let width = item.width;
    let height = item.height;

    if (state.size !== "original") {
      const edge = Number(state.size);
      const scale = Math.min(1, edge / Math.max(width, height));
      width *= scale;
      height *= scale;
    }

    const textureLimit = Math.max(1024, maxTextureSize || 4096);
    const edgeLimit = Math.min(12000, textureLimit);
    const textureScale = Math.min(1, edgeLimit / Math.max(width, height));
    width *= textureScale;
    height *= textureScale;

    const pixelScale = Math.min(1, Math.sqrt(MAX_EXPORT_PIXELS / (width * height)));
    width *= pixelScale;
    height *= pixelScale;

    return {
      width: Math.max(1, Math.round(width)),
      height: Math.max(1, Math.round(height)),
    };
  }

  function buildExportName(originalName, preset, extension) {
    const brand = BRANDS[preset.brand];
    const base = stripExtension(originalName)
      .replace(/[\\/:*?"<>|]/g, "-")
      .replace(/\s+/g, "-")
      .slice(0, 80);
    return `${base}_${i18n.brandName(preset.brand, isEnglish())}-${presetName(preset)}.${extension}`;
  }

  function uniqueFilename(filename, used) {
    if (!used.has(filename)) {
      used.add(filename);
      return filename;
    }

    const dot = filename.lastIndexOf(".");
    const base = dot > 0 ? filename.slice(0, dot) : filename;
    const extension = dot > 0 ? filename.slice(dot) : "";
    let counter = 2;
    let candidate = `${base}-${counter}${extension}`;
    while (used.has(candidate)) {
      counter += 1;
      candidate = `${base}-${counter}${extension}`;
    }
    used.add(candidate);
    return candidate;
  }

  function canonicalExtension(format) {
    return format === "png" ? "png" : "jpg";
  }

  function canvasToBlob(canvas, type, quality) {
    return new Promise((resolve, reject) => {
      try {
        canvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else reject(new Error("Canvas encoding returned no data."));
          },
          type,
          quality,
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  function showProcessing(title, detail) {
    dom.processingTitle.textContent = title;
    dom.processingDetail.textContent = detail;
    dom.progressBar.style.width = "0%";
    dom.progressPercent.textContent = "0%";
    dom.processingLayer.hidden = false;
  }

  function updateProgress(percent, detail) {
    const safe = clamp(percent, 0, 100);
    dom.progressBar.style.width = `${safe}%`;
    dom.progressPercent.textContent = `${safe}%`;
    if (detail) dom.processingDetail.textContent = detail;
  }

  function hideProcessing() {
    dom.processingLayer.hidden = true;
    dom.cancelExport.disabled = false;
  }

  function replaceLastDownload(download) {
    if (state.lastDownload?.url) URL.revokeObjectURL(state.lastDownload.url);
    state.lastDownload = download;
  }

  function triggerDownload(url, name) {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = name;
    anchor.rel = "noopener";
    anchor.style.display = "none";
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
  }

  function createZip(entries) {
    const encoder = new TextEncoder();
    const localParts = [];
    const centralParts = [];
    let localOffset = 0;
    let centralSize = 0;
    const now = new Date();
    const dosTime =
      (now.getHours() << 11) | (now.getMinutes() << 5) | Math.floor(now.getSeconds() / 2);
    const dosDate =
      ((Math.max(1980, now.getFullYear()) - 1980) << 9) |
      ((now.getMonth() + 1) << 5) |
      now.getDate();

    for (const entry of entries) {
      const nameBytes = encoder.encode(entry.name);
      const local = new Uint8Array(30 + nameBytes.length);
      const localView = new DataView(local.buffer);
      localView.setUint32(0, 0x04034b50, true);
      localView.setUint16(4, 20, true);
      localView.setUint16(6, 0x0800, true);
      localView.setUint16(8, 0, true);
      localView.setUint16(10, dosTime, true);
      localView.setUint16(12, dosDate, true);
      localView.setUint32(14, entry.crc >>> 0, true);
      localView.setUint32(18, entry.size, true);
      localView.setUint32(22, entry.size, true);
      localView.setUint16(26, nameBytes.length, true);
      localView.setUint16(28, 0, true);
      local.set(nameBytes, 30);
      localParts.push(local, entry.blob);

      const central = new Uint8Array(46 + nameBytes.length);
      const centralView = new DataView(central.buffer);
      centralView.setUint32(0, 0x02014b50, true);
      centralView.setUint16(4, 20, true);
      centralView.setUint16(6, 20, true);
      centralView.setUint16(8, 0x0800, true);
      centralView.setUint16(10, 0, true);
      centralView.setUint16(12, dosTime, true);
      centralView.setUint16(14, dosDate, true);
      centralView.setUint32(16, entry.crc >>> 0, true);
      centralView.setUint32(20, entry.size, true);
      centralView.setUint32(24, entry.size, true);
      centralView.setUint16(28, nameBytes.length, true);
      centralView.setUint16(30, 0, true);
      centralView.setUint16(32, 0, true);
      centralView.setUint16(34, 0, true);
      centralView.setUint16(36, 0, true);
      centralView.setUint32(38, 0, true);
      centralView.setUint32(42, localOffset, true);
      central.set(nameBytes, 46);
      centralParts.push(central);
      centralSize += central.length;
      localOffset += local.length + entry.blob.size;
    }

    const end = new Uint8Array(22);
    const endView = new DataView(end.buffer);
    endView.setUint32(0, 0x06054b50, true);
    endView.setUint16(4, 0, true);
    endView.setUint16(6, 0, true);
    endView.setUint16(8, entries.length, true);
    endView.setUint16(10, entries.length, true);
    endView.setUint32(12, centralSize, true);
    endView.setUint32(16, localOffset, true);
    endView.setUint16(20, 0, true);

    return new Blob([...localParts, ...centralParts, end], { type: "application/zip" });
  }

  let crcTable = null;

  async function blobCrc32(blob) {
    const bytes = new Uint8Array(await blob.arrayBuffer());
    if (!crcTable) {
      crcTable = new Uint32Array(256);
      for (let index = 0; index < 256; index += 1) {
        let value = index;
        for (let bit = 0; bit < 8; bit += 1) {
          value = (value & 1) !== 0 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
        }
        crcTable[index] = value >>> 0;
      }
    }

    let crc = 0xffffffff;
    for (let index = 0; index < bytes.length; index += 1) {
      crc = crcTable[(crc ^ bytes[index]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function showToast(message, tone = "", duration = 3600) {
    const toast = document.createElement("div");
    toast.className = `toast ${tone}`.trim();
    toast.dataset.toastId = String(++toastSequence);
    toast.textContent = message;
    dom.toastStack.append(toast);

    while (dom.toastStack.children.length > 3) {
      dom.toastStack.firstElementChild?.remove();
    }

    window.setTimeout(() => {
      toast.classList.add("is-out");
      window.setTimeout(() => toast.remove(), 260);
    }, duration);
  }

  function grainLabel(value) {
    const number = Number(value);
    if (number === 0) return t("grain.none");
    if (number <= 35) return t("grain.light");
    if (number <= 80) return t("grain.fine");
    if (number <= 115) return t("grain.standard");
    if (number <= 140) return t("grain.visible");
    return t("grain.oldFilm");
  }

  function shortName(name) {
    return stripExtension(name).slice(0, 18);
  }

  function stripExtension(name) {
    return name.replace(/\.[^.]+$/, "");
  }

  function fileExtension(name) {
    const match = name.match(/\.([^.]+)$/);
    return match ? match[1].toUpperCase() : "IMAGE";
  }

  function isHeicFile(file) {
    return /\.(heic|heif)$/i.test(file.name) || /image\/hei[cf]/i.test(file.type);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  function formatDateStamp(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function nextFrame() {
    return new Promise((resolve) => requestAnimationFrame(resolve));
  }

  boot();
})();
