const Loader = {

    show() {

        let loader = document.getElementById("globalLoader");

        if (!loader) {

            loader = document.createElement("div");

            loader.id = "globalLoader";

            loader.innerHTML = `

                <div class="loader-overlay">

                    <div class="spinner-border text-primary"></div>

                </div>

            `;

            document.body.appendChild(loader);

        }

    },

    hide() {

        const loader = document.getElementById("globalLoader");

        if (loader) {

            loader.remove();

        }

    }

};
