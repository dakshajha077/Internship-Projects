const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const videoGrid = document.getElementById('videoGrid');
const searchInput = document.getElementById('search');
const videoList = [
  {
    title: "Introduction to JavaScript",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    date: "2023-01-10",
    views: "1.5M"
  },
  {
    title: "React Crash Course",
    src: "https://www.w3schools.com/html/movie.mp4",
    date: "2023-02-05",
    views: "980K"
  },
  {
    title: "Node.js Basics",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    date: "2023-03-20",
    views: "870K"
  },
  {
    title: "How to build WeTube",
    src: "https://www.w3schools.com/html/movie.mp4",
    date: "2023-04-02",
    views: "420K"
  },
  {
    title: "Learn HTML in 10 Minutes",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    date: "2023-04-18",
    views: "650K"
  },
  {
    title: "CSS Animation Tips",
    src: "https://www.w3schools.com/html/movie.mp4",
    date: "2023-05-01",
    views: "1.2M"
  },
  {
    title: "Git & GitHub Tutorial",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    date: "2023-06-11",
    views: "490K"
  },
  {
    title: "Top 10 Programming Languages",
    src: "https://www.w3schools.com/html/movie.mp4",
    date: "2023-07-15",
    views: "2.3M"
  },
  {
    title: "What is an API?",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    date: "2023-08-10",
    views: "870K"
  },
  {
    title: "JavaScript DOM Tutorial",
    src: "https://www.w3schools.com/html/movie.mp4",
    date: "2023-09-21",
    views: "920K"
  },
  {
    title: "Responsive Design Guide",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    date: "2023-10-05",
    views: "800K"
  },
  {
    title: "Deploy React App",
    src: "https://www.w3schools.com/html/movie.mp4",
    date: "2023-11-01",
    views: "310K"
  },
  {
    title: "Build Portfolio Website",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    date: "2023-11-28",
    views: "440K"
  },
  {
    title: "Interview Prep Tips",
    src: "https://www.w3schools.com/html/movie.mp4",
    date: "2023-12-15",
    views: "1.7M"
  },
  {
    title: "AI vs Web Dev",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    date: "2024-01-03",
    views: "600K"
  }
];
function renderVideos(videos) {
  videoGrid.innerHTML = '';
  videos.forEach((video, index) => {
    const box = document.createElement('div');
    box.className = 'video-box';
    box.innerHTML = `
      <video src="${video.src}" muted></video>
      <div class="video-info">
        <h4>${video.title}</h4>
        <p>${video.date} • ${video.views} views</p>
      </div>
    `;
    box.addEventListener('click', () => {
      window.location.href = `video.html?id=${index}`;
    });
    videoGrid.appendChild(box);
  });
}
renderVideos(videoList);
searchInput?.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  const filtered = videoList.filter(video =>
    video.title.toLowerCase().includes(term)
  );
  renderVideos(filtered);
});
hamburger?.addEventListener('click', () => {
  sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
});
function openPopup(id) {
  document.getElementById(id).style.display = "block";
}
function closePopup(id) {
  document.getElementById(id).style.display = "none";
}
document.getElementById('openSettings')?.addEventListener('click', () => openPopup('settingsPopup'));
document.getElementById('openHelp')?.addEventListener('click', () => openPopup('helpPopup'));
document.getElementById('loginBtn')?.addEventListener('click', () => openPopup('loginPopup'));
document.querySelectorAll('.setting-option').forEach(option => {
  option.addEventListener('click', () => {
    option.classList.toggle('active');
    if (option.textContent.includes(':')) {
      let parts = option.textContent.split(':');
      let setting = parts[0].trim();
      let value = parts[1].trim();
      let newValue = value === 'On' ? 'Off' : value === 'Off' ? 'On' :
                     value === 'Enabled' ? 'Disabled' : value === 'Disabled' ? 'Enabled' :
                     value === 'Auto' ? 'High' : value === 'High' ? 'Auto' : value;
      option.textContent = `${setting}: ${newValue}`;
    }
  });
});
