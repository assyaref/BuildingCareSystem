const API = CONFIG.API_URL;

async function api(action,data={}){

    const response = await fetch(API,{

        method:"POST",

        headers:{

            "Content-Type":"text/plain;charset=utf-8"

        },

        body:JSON.stringify({

            action,

            ...data

        })

    });

    return await response.json();

}
