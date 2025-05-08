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
    logo: "https://i.ibb.co/KTm87D7/deepseekappiconontransparentbackgroundfreepng.png",
    link: "https://chat.deepseek.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["deepseek", "coding", "ai code", "developer", "debug", "write code", "programming"]
  },
  {
    name: "Grok Beta",
    logo: "https://i.ibb.co/20TFJWZs/1746517106294.png",
    link: "https://grok.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["grok", "xai", "elon ai", "beta ai", "twitter ai", "chat", "assistant", "grok beta"]
  },
  {
    name: "Gemini (Bard)",
    logo: "https://i.ibb.co/N2cWXzQm/1746597687106.png",
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
    name: "RecCloud",
    logo: "https://i.ibb.co/zW8mkcZZ/1746597795581.png",
    link: "https://reccloud.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["reccloud", "screen record", "video editing", "record online", "clip", "video tools"]
  },
  {
    name: "Replit",
    logo: "https://i.ibb.co/2YntKP15/2048px-New-Replit-Logosvg.png",
    link: "https://replit.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["replit", "code online", "developer", "collaborate code", "programming", "run code"]
  },
  {
    name: "Synthesia",
    logo: "https://i.ibb.co/B2WpZ6TV/1746518444450.png",
    link: "https://www.synthesia.io/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["synthesia", "avatar", "ai video", "talking avatar", "text to video", "presentation ai"]
  },
  {
    name: "Soundraw",
    logo: "https://i.ibb.co/Mkh2ZcNZ/1746518617540.jpg",
    link: "https://soundraw.io/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["soundraw", "music", "ai music", "generate music", "background music", "ai song", "composer"]
  },
  {
    name: "Fliki",
    logo: "https://i.ibb.co/MwMct6S/1746518755619.png",
    link: "https://fliki.ai/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["fliki", "text to video", "voice over", "script to video", "ai video", "narration"]
  },
  {
    name: "StarryAI",
    logo: "https://i.ibb.co/277J0Cjs/1746518879014.png",
    link: "https://starryai.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["starry", "ai art", "generate images", "text to art", "image creator", "painting", "visuals"]
  },
  {
    name: "SlidesAI",
    logo: "https://i.ibb.co/Z1X5W9tD/slidesaiio.png",
    link: "https://www.slidesai.io/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["slidesai", "presentation", "ai slides", "make slides", "powerpoint ai", "slide creator"]
  },
  {
    name: "PicWish AI Photo Editor",
    logo: "https://i.ibb.co/hFwgS7rV/1746519141007.png",
    link: "https://picwish.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["picwish", "image editing", "remove background", "photo enhancer", "ai photo", "edit image"]
  },
  {
    name: "KodeKloud",
    logo: "https://i.ibb.co/DD2j28LJ/Pp-MXn-Ff9400x400.jpg",
    link: "https://kodekloud.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["kodekloud", "devops", "docker", "kubernetes", "linux", "cloud", "terraform", "ansible", "cicd", "certification", "labs", "practice", "sysadmin", "learning", "it automation"]
  },
  {
    name: "Codeium",
    logo: "https://i.ibb.co/sfd7H3J/1746527503878.jpg",
    link: "https://codeium.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["codeium", "ai coding", "autocomplete", "code assistant", "programming", "intellisense", "developer tools", "ide extension", "code generation", "code suggestions", "productivity", "coding ai"]
  },
  {
    name: "CodeSignal",
    logo: "https://i.ibb.co/rKS8v1PX/1746527758264.png",
    link: "https://codesignal.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["codesignal", "coding test", "interview prep", "technical assessment", "developer skills", "online test", "hiring platform", "coding challenge", "test automation", "skill evaluation", "tech hiring", "programming test"]
  },
  {
    name: "Vespa.ai",
    logo: "https://i.ibb.co/cKHhCVdw/Screenshot-20250506-160942.jpg",
    link: "https://vespa.ai/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["vespa.ai", "vespa", "search engine", "big data", "real-time search", "vector search", "AI-powered search", "scalable search", "document ranking", "AI model serving", "search platform", "recommendation engine"]
  },
  {
    name: "Tonkean",
    logo: "https://i.ibb.co/CKX2gzS3/1746528162260.jpg",
    link: "https://www.tonkean.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["tonkean", "workflow automation", "process automation", "no-code automation", "enterprise automation", "operations automation", "business automation", "AI operations", "automation builder", "internal tools"]
  },
  {
    name: "Zapier",
    logo: "https://i.ibb.co/9Hp3wqrS/1746528352698.png",
    link: "https://zapier.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["zapier", "automation", "workflow", "connect apps", "task automation", "app integration", "zap", "automate tasks", "no-code", "productivity", "time-saving", "workflow builder"]
  },
  {
    name: "Adobe Firefly",
    logo: "https://i.ibb.co/0yXJzZZK/1746528535092.jpg",
    link: "https://www.adobe.com/products/firefly.html",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["adobe firefly", "AI art", "generative art", "image generation", "text-to-image", "creative AI", "design tool", "AI creativity", "graphic design", "digital art", "adobe creative cloud"]
  },
  {
    name: "FreePik",
    logo: "https://i.ibb.co/dsWkDn0V/1746528663507.jpg",
    link: "https://www.freepik.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["freepik", "stock images", "vectors", "illustrations", "design resources", "graphics", "creative assets", "free images", "stock vectors", "design inspiration", "online resources"]
  },
  {
    name: "Notion",
    logo: "https://i.ibb.co/nsRKDqXd/1746528763004.png",
    link: "https://www.notion.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["notion", "productivity", "note-taking", "project management", "team collaboration", "task management", "knowledge base", "document organization", "workspace", "all-in-one workspace", "organization tool"]
  },
  {
    name: "Grammarly",
    logo: "https://i.ibb.co/VWrMPgqb/1746613491424.webp",
    link: "https://www.grammarly.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["grammarly", "grammar checker", "writing assistant", "spell check", "punctuation", "proofreading", "AI writing", "sentence correction", "email writing", "english writing", "text improvement"]
  },
  {
    name: "Microsoft Copilot",
    logo: "https://i.ibb.co/xt1H5wmk/1746613828563.jpg",
    link: "https://copilot.microsoft.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["microsoft copilot", "copilot", "AI assistant", "office 365", "word ai", "excel ai", "powerpoint automation", "microsoft ai", "writing support", "document ai", "microsoft productivity"]
  },
  {
    name: "Sora.com",
    logo: "https://i.ibb.co/tpkDvFVK/1746614113197.jpg",
    link: "https://sora.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["sora", "video AI", "text to video", "ai storytelling", "video generation", "educational videos", "sora video", "ai animation", "content creation", "visual storytelling"]
  },
  {
    name: "Easy With AI(Capcut)",
    logo: "https://i.ibb.co/PZ0LkGvW/1746614284308.jpg",
    link: "https://easywithai.com/ai-video-tools/capcut/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["easy with ai", "capcut", "video editing", "capcut templates", "ai tools", "ai video", "edit with ai", "content editing", "capcut effects", "easy video making"]
  },
  {
    name: "HubSpot",
    logo: "https://i.ibb.co/1GP3b50S/1746614455407.jpg",
    link: "https://www.hubspot.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["hubspot", "crm", "sales automation", "marketing automation", "customer support", "hubspot ai", "email campaigns", "lead generation", "analytics", "workflow automation", "hubspot tools"]
  },
  {
    name: "Gong.io",
    logo: "https://i.ibb.co/kVXZHWDh/gonglogo.png",
    link: "https://www.gong.io/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["gong", "gong.io", "sales ai", "conversation intelligence", "sales analytics", "call tracking", "ai insights", "revenue intelligence", "sales enablement", "meeting analysis"]
  },
  {
    name: "Salesforce",
    logo: "https://i.ibb.co/93ChtMYh/1746614736083.jpg",
    link: "https://www.salesforce.com/in/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["salesforce", "crm", "salesforce ai", "customer management", "marketing cloud", "sales tools", "business automation", "lead tracking", "workflow", "client relationship", "einstein ai"]
  },
  {
    name: "Gamma",
    logo: "https://i.ibb.co/VYJF5bqV/1746614868411.png",
    link: "https://gamma.app/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["gamma", "presentation tool", "ai presentation", "slides ai", "deck creator", "pitch deck", "slide generator", "ai visuals", "presentation design", "auto slides", "professional decks"]
  },
  {
    name: "Slidebean",
    logo: "https://i.ibb.co/jZhxskGC/1746614990780.jpg",
    link: "https://slidebean.com/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["slidebean", "pitch deck", "presentation tool", "startup slides", "slide design", "ai pitch", "fundraising decks", "automated presentations", "slide generator", "startup presentation"]
  },
  {
    name: "Beautiful.ai",
    logo: "https://i.ibb.co/nMbwHYHZ/1746615150102.png",
    link: "https://www.beautiful.ai/",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["beautiful.ai", "presentation maker", "slides ai", "design tool", "professional slides", "visual storytelling", "business presentation", "deck designer", "ai slides", "automatic layout"]
  },
  {
    name: "Two AI",
    logo: "https://i.ibb.co/FL5tbpSx/1746615374659.png",
    link: "https://chat.two.ai",
    description: "Powerful AI for conversations, writing, coding.",
    keywords: ["two ai", "conversation ai", "collaboration ai", "assistant tool", "team productivity", "virtual coworker", "creative brainstorming", "ai chatbot", "two chat", "productivity ai"]
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
// Load all tools and include addToRecent on click
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
    card.onclick = () => {
      window.open(tool.link, "_blank");
      addToRecent(tool); // Track recently used tool
    };
    container.appendChild(card);
  });
}

// Track recently used tools
function addToRecent(tool) {
  let recent = JSON.parse(localStorage.getItem("recentTools")) || [];
  recent = recent.filter(t => t.name !== tool.name);
  recent.unshift(tool);
  if (recent.length > 10) recent = recent.slice(0, 10);
  localStorage.setItem("recentTools", JSON.stringify(recent));
  renderRecent();
}

// Render the "Currently used..." section
function renderRecent() {
  const recentList = JSON.parse(localStorage.getItem("recentTools")) || [];
  const container = document.getElementById("recentTools");
  const section = document.getElementById("recentSection");

  container.innerHTML = "";

  if (recentList.length === 0) {
    section.classList.add("hidden");
    return;
  }

  section.classList.remove("hidden");

  recentList.forEach(tool => {
    const div = document.createElement("div");
    div.className = "recent-card";
    div.innerHTML = `
      <img src="${tool.logo}" alt="${tool.name}" />
      <h4>${tool.name}</h4>
    `;
    div.onclick = () => window.open(tool.link, "_blank");
    container.appendChild(div);
  });
}

// Initial render
renderTools(aiTools);
renderRecent(); // Load recent tools on page load

// Updated Search filter with Suggestive box
document.getElementById("searchInput").addEventListener("input", (e) => {
  const prompt = e.target.value.toLowerCase();
  const matches = aiTools.filter(tool =>
    tool.keywords.some(k => prompt.includes(k)) || tool.name.toLowerCase().includes(prompt)
  );

  const noMatch = matches.length === 0;
  document.getElementById("noMatchMsg").classList.toggle("hidden", !noMatch);
  document.getElementById("suggestiveBox").classList.toggle("hidden", !noMatch);

  if (noMatch) {
    const allKeywords = [...new Set(aiTools.flatMap(tool => tool.keywords))];
    const suggestions = allKeywords.filter(k => k.includes(prompt) || prompt.includes(k)).slice(0, 6);

    const suggestiveList = document.getElementById("suggestiveList");
    suggestiveList.innerHTML = "";

    if (suggestions.length) {
      suggestions.forEach(s => {
        const li = document.createElement("li");
        li.textContent = s;
        li.style.cursor = "pointer";
        li.onclick = () => {
          document.getElementById("searchInput").value = s;
          document.getElementById("searchInput").dispatchEvent(new Event("input"));
        };
        suggestiveList.appendChild(li);
      });
    } else {
      suggestiveList.innerHTML = "<li>No related keywords found</li>";
    }
  }

  renderTools(matches);
});