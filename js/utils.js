function loading(button,text){

    button.disabled=true;

    button.innerHTML=

    `<span class="spinner-border spinner-border-sm"></span> ${text}`;

}

function resetButton(button,text){

    button.disabled=false;

    button.innerHTML=text;

}

function formatDate(date){

    return new Date(date).toLocaleString("id-ID");

}

function badge(status){

    switch(status){

        case "OPEN":

            return

            '<span class="badge bg-danger">OPEN</span>';

        case "PROGRESS":

            return

            '<span class="badge bg-warning">PROGRESS</span>';

        case "DONE":

            return

            '<span class="badge bg-success">DONE</span>';

    }

}
