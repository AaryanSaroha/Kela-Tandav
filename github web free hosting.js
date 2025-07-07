const videos = [
  {
    id: "0Xk9i5r7mJY",
    title: "सोने की बकरी 🐐💛 | देसी कार्टून में बड़ी सीख!",
  },
  {
    id: "z0Fq0v9Zz9s",
    title: "हाथी ने खा ली बंदर की आइसक्रीम... और फिर निकले झाग 😂🍦🐘",
  },
  {
    id: "U3sZ9xv7eJ4",
    title: "बंदर को चाहिए था केला बर्गर 🍌🍔… और पेट में मच गया तांडव 😂",
  }
];

const container = document.getElementById("videos");

videos.forEach(video => {
  const card = document.createElement("div");
  card.className = "video-card";
  card.innerHTML = `
    <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank">
      <img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}">
      <div class="video-title">${video.title}</div>
    </a>
  `;
  container.appendChild(card);
});
