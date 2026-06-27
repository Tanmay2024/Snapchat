const STORAGE_KEY = "snapchatLoggedInUser";
const LOGIN_KEYS = [
  STORAGE_KEY,
  "loggedInUser",
  "currentUser",
  "snapchatUser",
  "loggedInUsername",
  "loginName",
  "displayName",
  "activeUser",
  "username",
  "userName",
  "name"
];

function formatDisplayName(value) {
  const cleaned = value.trim();

  if (!cleaned) {
    return "";
  }

  return cleaned
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function makeUsername(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/@.*$/, "")
    .replace(/[^a-z0-9]+/g, "")
    || "snapuser";
}

function readSavedLogin() {
  const params = new URLSearchParams(window.location.search);
  const urlUser = params.get("username") || params.get("user") || params.get("name");

  if (urlUser) {
    return urlUser;
  }

  for (const key of LOGIN_KEYS) {
    const savedValue = localStorage.getItem(key) || sessionStorage.getItem(key);

    if (!savedValue) {
      continue;
    }

    try {
      const parsedValue = JSON.parse(savedValue);

      if (typeof parsedValue === "string") {
        return parsedValue;
      }

      if (parsedValue?.displayName || parsedValue?.name || parsedValue?.username || parsedValue?.email) {
        return parsedValue;
      }
    } catch {
      return savedValue;
    }
  }

  return null;
}

function getCurrentUser() {
  const savedLogin = readSavedLogin();

  if (typeof savedLogin === "string") {
    return {
      displayName: formatDisplayName(savedLogin),
      username: makeUsername(savedLogin)
    };
  }

  if (savedLogin) {
    const rawName = savedLogin.displayName || savedLogin.name || savedLogin.username || savedLogin.email;
    const rawUsername = savedLogin.username || savedLogin.email || rawName;

    return {
      displayName: formatDisplayName(rawName),
      username: makeUsername(rawUsername)
    };
  }

  return {
    displayName: "user",
    username: "user"
  };
}

function setupSettingsPage() {
  const profileName = document.getElementById("profile-name");
  const profileUsername = document.getElementById("profile-username");
  const messageBox = document.getElementById("message-box");

  if (!profileName || !profileUsername || !messageBox) {
    return;
  }

  const user = {
    displayName: "user",
    username: "user"
  };

  profileName.textContent = user.displayName;
  profileUsername.textContent = user.username;

  document.querySelector(".chat-button")?.addEventListener("click", () => {
    messageBox.textContent = `Chat opened for ${user.displayName}.`;
  });

  document.querySelectorAll("[data-setting]").forEach((row) => {
    row.addEventListener("click", () => {
      messageBox.textContent = `${row.dataset.setting} opened for ${user.displayName}.`;
    });
  });

  document.getElementById("logout-button")?.addEventListener("click", () => {
    LOGIN_KEYS.forEach((key) => {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    });
    messageBox.textContent = "You have logged out.";
    profileName.textContent = "user";
    profileUsername.textContent = "user";
  });
}

setupSettingsPage();
