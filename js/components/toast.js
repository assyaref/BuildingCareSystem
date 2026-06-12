const Toast = {

    show(message,type="success"){

        const toast=document.createElement("div");

        toast.className=`toast-custom ${type}`;

        toast.innerHTML=message;

        document.body.appendChild(toast);

        setTimeout(()=>{

            toast.classList.add("show");

        },100);

        setTimeout(()=>{

            toast.remove();

        },3000);

    }

};
