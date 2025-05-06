// Hide intro screen after animation
setTimeout(() => {
  document.getElementById("introScreen").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}, 3000);

// AI tools data
const aiTools = [
  {
    name: "ChatGPT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    link: "https://chat.openai.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["chat", "gpt", "talk", "write", "best ai", "openai"]
  },
  {
    name: "DeepSeek",
    logo: "",
    link: "https://chat.deepseek.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["Deep", "seek", "talk", "write", "best ai", "openai"]
  },
  {
    name: "Grok Beta",
    logo: "https://i.ibb.co/20TFJWZs/1746517106294.png",
    link: "https://grok.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["chat", "gpt", "talk", "write", "best ai", "openai"]
  },
  {
    name: "Gemini (Bard)",
    logo: "https://i.ibb.co/9kBL4FgM/1746513758487.png",
    link: "https://bard.google.com/",
    description: "Google’s smart assistant AI for research & creativity.",
    keywords: ["bard", "gemini", "google", "writing", "research", "assistant"]
  },
  {
    name: "Midjourney",
    logo: "https://i.ibb.co/S7K5YQWZ/Midjourney-Emblem.png",
    link: "https://www.midjourney.com/",
    description: "Top-rated AI for generating images from text.",
    keywords: ["image", "art", "visual", "design", "generator", "drawing"]
  },
  {
    name: "Runway ML",
    logo: "https://i.ibb.co/9HJtxyGn/1746515403349.jpg",
    link: "https://runwayml.com/",
    description: "Video editing and AI content creation tool.",
    keywords: ["video", "editing", "runway", "ai video", "generate video"]
  },
  {
    name: "Leonardo AI",
    logo: "https://app.leonardo.ai/favicon.ico",
    link: "https://leonardo.ai/",
    description: "Next-gen tool for creative image generation.",
    keywords: ["leonardo", "ai art", "image tool", "best", "generator"]
  },
  {
    name: "D-ID",
    logo: "https://i.ibb.co/jZr4Wnpt/1746515531513.png",
    link: "https://www.d-id.com/",
    description: "Create talking avatars and videos with text.",
    keywords: ["avatar", "video", "d-id", "face", "lip sync", "animation"]
  }
  // You can add more here...
];

// Load all tools
function renderTools(tools) {
  const container = document.getElementById("aiList");
  container.innerHTML = "";
  tools.forEach(tool => {
    const card = document.createElement("div");
    card.className = "ai-card";
    card.innerHTML = `
      <img src="${tool.logo}" alt="${tool.name}" />
      <h3>${tool.name}</h3>
      <span title="${tool.description}">★</span>
    `;
    card.onclick = () => window.open(tool.link, "_blank");
    container.appendChild(card);
  });
}

// Initial render
renderTools(aiTools);

// Search filter
document.getElementById("searchInput").addEventListener("input", (e) => {
  const prompt = e.target.value.toLowerCase();
  const matches = aiTools.filter(tool =>
    tool.keywords.some(k => prompt.includes(k)) || tool.name.toLowerCase().includes(prompt)
  );

  document.getElementById("noMatchMsg").classList.toggle("hidden", matches.length > 0);
  renderTools(matches);
});
