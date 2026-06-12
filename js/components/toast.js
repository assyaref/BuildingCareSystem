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

// CSS
.toast-custom{

    position:fixed;

    right:20px;

    top:20px;

    background:#198754;

    color:white;

    padding:14px 22px;

    border-radius:10px;

    opacity:0;

    transition:.3s;

    z-index:99999;

}

.toast-custom.show{

    opacity:1;

}

.toast-custom.danger{

    background:#dc3545;

}

.toast-custom.warning{

    background:#ffc107;

    color:#000;

}
