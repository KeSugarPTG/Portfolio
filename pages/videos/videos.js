// ✅ Fade-in
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ✅ Chặn chuột phải + F12
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.key === "F12") e.preventDefault();
  if (e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key)) e.preventDefault();
  if (e.ctrlKey && ["U","S"].includes(e.key)) e.preventDefault();
});

// ✅ Ẩn/hiện Coming Soon
function updateComingSoon() {
  const topArea = document.getElementById("top-video-area");
  const topComing = document.getElementById("top-coming");

  const highlightArea = document.getElementById("highlight-grid");
  const highlightComing = document.getElementById("highlight-coming");

  topComing.style.display = topArea.children.length > 0 ? "none" : "block";
  highlightComing.style.display = highlightArea.children.length > 0 ? "none" : "block";
}

// ✅ Thêm video phần trên (link trực tiếp)
function addTopVideo(link) {
  const topArea = document.getElementById("top-video-area");

  const video = document.createElement("video");
  video.src = link;
  video.controls = true;

  const wrapper = document.createElement("div");
  wrapper.classList.add("video-upload-box");

  video.addEventListener("loadedmetadata", () => {
    const ratio = video.videoWidth / video.videoHeight;

    if (ratio > 1.2) wrapper.classList.add("video-landscape");
    else wrapper.classList.add("video-portrait");

    updateComingSoon();
  });

  wrapper.appendChild(video);
  topArea.appendChild(wrapper);
}

// ✅ Thêm video phần dưới (YouTube embed)
function addHighlightVideo(youtubeID) {
  const highlightArea = document.getElementById("highlight-grid");

  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${youtubeID}`;
  iframe.allowFullscreen = true;

  const wrapper = document.createElement("div");
  wrapper.classList.add("video-item");

  // YouTube mặc định 16:9 → landscape
  wrapper.classList.add("video-landscape");

  wrapper.appendChild(iframe);
  highlightArea.appendChild(wrapper);

  updateComingSoon();
}

// ✅ Mày thêm video ở đây
// --------------------------------------------------

// addTopVideo("LINK_VIDEO_1");
// addTopVideo("LINK_VIDEO_2");

// addHighlightVideo("YOUTUBE_ID_1");
// addHighlightVideo("YOUTUBE_ID_2");

// --------------------------------------------------

updateComingSoon();
