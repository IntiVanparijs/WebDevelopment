const COMMANDS = {
    g: {
        title: "Google",
        buildUrl: (query) => `https://www.google.com/search?q=${encodeQuery(query)}`,
        cssClass: "bg-google",
        btnClass: "btn-primary",
    },
    y: {
        title: "Youtube",
        buildUrl: (query) => `https://www.youtube.com/results?search_query=${encodeQuery(query)}`,
        cssClass: "bg-youtube",
        btnClass: "btn-danger",
    },
    x: {
        title: "X",
        buildUrl: (query) => `https://x.com/hashtag/${query.replace(/\s+/g, "")}`,
        cssClass: "bg-twitter",
        btnClass: "btn-info",
    },
    i: {
        title: "Instagram",
        buildUrl: (query) => `https://www.instagram.com/explore/tags/${query.replace(/\s+/g, "")}/`,
        cssClass: "bg-instagram",
        btnClass: "btn-warning",
    },
};

function encodeQuery(query) {
    return encodeURIComponent(query).replace(/%20/g, "+");
}

function parseCommand(input) {
    const trimmed = input.trim();
    const regex = /^\/([a-z])\s+(.+)$/;
    const match = trimmed.match(regex);

    if (!match) {
        return null;
    }

    return {
        prefix: match[1],
        query: match[2],
    };
}

function addCard(historyItem) {
    const historyRow = document.getElementById("historyRow");

    const col = document.createElement("div");
    col.className = "col";

    col.innerHTML = `
    <div class="card h-100">
      <div class="card-header ${historyItem.cssClass}">
        ${historyItem.title}
      </div>
      <div class="card-body">
        <p class="card-text">${historyItem.text}</p>
        <a href="${historyItem.url}"
           target="_blank"
           class="btn btn-sm ${historyItem.btnClass}">
          Go!
        </a>
      </div>
    </div>
  `;

    historyRow.appendChild(col);
}


function loadHistory() {
    const saved = localStorage.getItem("startpageHistory");
    return saved ? JSON.parse(saved) : [];
}

function saveHistory(history) {
    localStorage.setItem("startpageHistory", JSON.stringify(history));
}

function handleGo() {
    const input = document.getElementById("commandInput").value;

    const parsed = parseCommand(input);
    if (!parsed) {
        alert("Invalid command");
        return; // stop de verwerking
    }

    const command = COMMANDS[parsed.prefix];
    if (!command) {
        alert("Unknown command prefix");
        return; // stop de verwerking
    }

    const url = command.buildUrl(parsed.query);

    window.open(url, "_blank");

    const historyItem = {
        title:    command.title,
        text:     parsed.query,
        url:      url,
        cssClass: command.cssClass,
        btnClass: command.btnClass,
    };

    addCard(historyItem);

    const history = loadHistory();
    history.push(historyItem);
    saveHistory(history);

    document.getElementById("commandInput").value = "";
}

(function initPage() {
    const history = loadHistory();
    history.forEach(function(item) {
        addCard(item);
    });
})();


// vo enter toets te drukken alsje een zoekopdracht intypt
document.getElementById("commandInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        handleGo();
    }
});