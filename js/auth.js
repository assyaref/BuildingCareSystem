function saveSession(user){

    localStorage.setItem(

        CONFIG.STORAGE.USER,

        JSON.stringify(user)

    );

}

function getSession(){

    return JSON.parse(

        localStorage.getItem(CONFIG.STORAGE.USER)

    );

}

function logout(){

    localStorage.clear();

    location.href="index.html";

}

function checkLogin(){

    if(!getSession()){

        location.href="index.html";

    }

}
