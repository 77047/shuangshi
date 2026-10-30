/* 程蓓丽 · 双师型教师个人主页 */
(function () {
  "use strict";

  const CERTIFICATES = [
    {
      id: "image_1",
      src: "image/image_1.jpg",
      title: "毕业证书",
      tag: "学历学籍",
      category: "edu",
      desc: "河北工程大学园艺专业本科毕业证书（2010.09—2014.06），奠定农林专业学科基础。",
    },
    {
      id: "image_2",
      src: "image/image_2.jpg",
      title: "公式证明",
      tag: "学历学籍",
      category: "photo",
      desc: "双师型公式材料，具备基条件和相关要求。",
    },
    {
      id: "image_15",
      src: "image/image_15.jpg",
      title: "双师型教师认定申请表",
      tag: "学历学籍",
      category: "photo",
      desc: "双师型教师认定申请表，与公式证明一并查阅。",
    },
    {
      id: "image_3",
      src: "image/image_3.jpg",
      title: "教师资格证",
      tag: "教师资质",
      category: "teach",
      desc: "教师资格证书，证明具备合法从教资格，是双师型「教师侧」核心材料。",
    },
    {
      id: "image_4",
      src: "image/image_4.jpg",
      title: "身份证",
      tag: "身份核验",
      category: "id",
      desc: "身份证件扫描件，用于材料真实性与本人身份核验（展示页可按需脱敏）。",
    },
    {
      id: "image_5",
      src: "image/image_5.jpg",
      title: "邢台市职业院校技能大赛教学能力获奖证书",
      tag: "获奖成果",
      category: "award",
      desc: "2023年邢台市职业院校技能大赛教学能力比赛三等奖，由邢台市教育局颁发。",
    },
    {
      id: "image_6",
      src: "image/image_6.jpg",
      title: "职业技能等级证书",
      tag: "职业技能",
      category: "skill",
      desc: "职业技能等级证书原件，体现行业认可的专业技能水平，支撑双师「技师侧」。",
    },
    {
      id: "image_7",
      src: "image/image_7.jpg",
      title: "职业技能等级证书查询（1）",
      tag: "职业技能",
      category: "skill",
      desc: "职业技能等级证书官方查询记录截图之一，便于评审在线核验真伪。",
    },
    {
      id: "image_8",
      src: "image/image_8.jpg",
      title: "职业技能等级证书查询（2）",
      tag: "职业技能",
      category: "skill",
      desc: "职业技能等级证书官方查询记录截图之二，与证书信息交叉印证。",
    },
    // {
    //   id: "image_9",
    //   src: "image/image_9.jpg",
    //   title: "指导学生技能大赛获奖照片",
    //   tag: "获奖成果",
    //   category: "award",
    //   desc: "指导学生参加技能大赛并获奖的合影留念，体现育人实践与竞赛指导成效。",
    // },
    {
      id: "image_10",
      src: "image/image_10.jpg",
      title: "助理讲师资格",
      tag: "教师资质",
      category: "teach",
      desc: "中等职业学校教师系列助理讲师（植物保护），沙河市职改办评审，2021年12月授予。",
    },
    // {
    //   id: "image_11",
    //   src: "image/image_11.jpg",
    //   title: "证件照",
    //   tag: "证件照",
    //   category: "photo",
    //   desc: "程蓓丽老师证件照，用于双师型评价材料身份对照。",
    // },
    {
      id: "image_12",
      src: "image/image_12.jpg",
      title: "2024-2025 先进班集体",
      tag: "获奖成果",
      category: "award",
      desc: "2024—2025 学年先进班集体荣誉，体现班主任带班成效。",
    },
    {
      id: "image_13",
      src: "image/image_13.jpg",
      title: "2024 优秀考核证书",
      tag: "获奖成果",
      category: "award",
      desc: "2024 年度考核优秀证书。",
    },
    {
      id: "image_14",
      src: "image/image_14.jpg",
      title: "2025 考核优秀",
      tag: "获奖成果",
      category: "award",
      desc: "2025 年度考核优秀证书。",
    },
  ];

  /* ---------- 工具 ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- 年份 ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- 导航 ---------- */
  const nav = $("#nav");
  const navLinks = $("#navLinks");
  const navToggle = $("#navToggle");

  navToggle?.addEventListener("click", () => {
    navLinks?.classList.toggle("open");
  });

  $$(".nav-links a").forEach((a) => {
    a.addEventListener("click", () => navLinks?.classList.remove("open"));
  });

  /* ---------- 滚动：进度 / 导航 / 返回顶部 / 激活锚点 ---------- */
  const progress = $("#scrollProgress");
  const backTop = $("#backTop");
  const sections = $$("main section[id]");

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (scrollTop / docH) * 100 : 0;
    if (progress) progress.style.width = pct + "%";

    nav?.classList.toggle("scrolled", scrollTop > 24);
    backTop?.classList.toggle("show", scrollTop > 480);

    let current = "";
    sections.forEach((sec) => {
      if (scrollTop >= sec.offsetTop - 120) current = sec.id;
    });
    $$(".nav-links a").forEach((a) => {
      const href = a.getAttribute("href") || "";
      a.classList.toggle("active", href === "#" + current);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- 光标光晕 ---------- */
  const glow = $("#cursorGlow");
  if (glow && window.matchMedia("(pointer:fine)").matches) {
    let mx = 0;
    let my = 0;
    let gx = 0;
    let gy = 0;
    window.addEventListener(
      "mousemove",
      (e) => {
        mx = e.clientX;
        my = e.clientY;
      },
      { passive: true }
    );
    (function tick() {
      gx += (mx - gx) * 0.12;
      gy += (my - gy) * 0.12;
      glow.style.left = gx + "px";
      glow.style.top = gy + "px";
      requestAnimationFrame(tick);
    })();
  } else if (glow) {
    glow.style.display = "none";
  }

  /* ---------- 证件照 3D 倾斜 ---------- */
  const frame = $("#portraitFrame");
  if (frame && window.matchMedia("(pointer:fine)").matches) {
    frame.addEventListener("mousemove", (e) => {
      const r = frame.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      frame.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    });
    frame.addEventListener("mouseleave", () => {
      frame.style.transform = "";
    });
  }

  /* ---------- 数字滚动 ---------- */
  function animateCount(el, target, duration = 1400) {
    const isYear = target >= 1900;
    const start = performance.now();
    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.round(target * eased);
      el.textContent = String(val);
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = String(target);
    }
    requestAnimationFrame(step);
  }

  const countEls = $$("[data-count]");
  const countObs = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.getAttribute("data-count"));
        animateCount(el, target);
        obs.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  countEls.forEach((el) => countObs.observe(el));

  /* ---------- 滚动显现 ---------- */
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  $$(".reveal").forEach((el) => revealObs.observe(el));

  /* ---------- 画廊渲染 ---------- */
  const galleryGrid = $("#galleryGrid");
  let currentFilter = "all";
  let lightboxIndex = 0;

  function visibleList() {
    return CERTIFICATES.filter(
      (c) => currentFilter === "all" || c.category === currentFilter
    );
  }

  function renderGallery() {
    if (!galleryGrid) return;
    const list = visibleList();
    galleryGrid.innerHTML = list
      .map(
        (c, i) => `
      <article class="gallery-card reveal visible" data-index="${i}" data-id="${c.id}" data-category="${c.category}">
        <div class="gallery-thumb">
          <img src="${c.src}" alt="${c.title}" loading="lazy">
          <div class="gallery-overlay">点击放大预览</div>
        </div>
        <div class="gallery-body">
          <span class="tag">${c.tag}</span>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
        </div>
      </article>`
      )
      .join("");

    $$(".gallery-card", galleryGrid).forEach((card) => {
      card.addEventListener("click", () => {
        const idx = Number(card.getAttribute("data-index"));
        openLightbox(idx);
      });
    });
  }

  $$(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter") || "all";
      renderGallery();
    });
  });

  renderGallery();

  /* ---------- Lightbox ---------- */
  const lightbox = $("#lightbox");
  const lightboxImage = $("#lightboxImage");
  const lightboxTitle = $("#lightboxTitle");
  const lightboxDesc = $("#lightboxDesc");
  const lightboxTag = $("#lightboxTag");

  function openLightbox(index) {
    const list = visibleList();
    if (!list.length) return;
    lightboxIndex = (index + list.length) % list.length;
    const item = list[lightboxIndex];
    lightboxImage.src = item.src;
    lightboxImage.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.desc;
    lightboxTag.textContent = item.tag;
    lightbox?.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox?.classList.remove("open");
    document.body.style.overflow = "";
  }

  function navLightbox(delta) {
    openLightbox(lightboxIndex + delta);
  }

  $("#lightboxClose")?.addEventListener("click", closeLightbox);
  $("#lightboxPrev")?.addEventListener("click", () => navLightbox(-1));
  $("#lightboxNext")?.addEventListener("click", () => navLightbox(1));
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox?.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navLightbox(-1);
    if (e.key === "ArrowRight") navLightbox(1);
  });

  /* 时间线图片也可点开 */
  $$(".timeline-media img").forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      currentFilter = "all";
      $$(".filter-btn").forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-filter") === "all");
      });
      renderGallery();
      const src = img.getAttribute("src") || "";
      const idx = CERTIFICATES.findIndex((c) => src.includes(`${c.id}.jpg`));
      if (idx >= 0) openLightbox(idx);
    });
  });

  /* 暴露给证书展厅页复用（同域脚本可直接复制数据结构） */
  window.ShuangshiData = { CERTIFICATES };
})();
