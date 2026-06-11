async function api(action, data = {}) {

    try {

        const response = await fetch(CONFIG.API_URL, {

            method: "POST",

            headers: {

                "Content-Type": "text/plain;charset=UTF-8"

            },

            body: JSON.stringify({

                action,

                ...data

            })

        });

        return await response.json();

    }

    catch (err) {

        return {

            success: false,

            message: err.message

        };

    }

}
