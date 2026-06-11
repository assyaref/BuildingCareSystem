function saveSession(user) {

    sessionStorage.setItem(

        CONFIG.SESSION_KEY,

        JSON.stringify(user)

    );

}

function getSession() {

    return JSON.parse(

        sessionStorage.getItem(CONFIG.SESSION_KEY)

    );

}

function logout() {

    sessionStorage.removeItem(CONFIG.SESSION_KEY);

    window.location.href = "index.html";

}

function checkLogin() {

    if (!getSession()) {

        window.location.href = "index.html";

    }

}
