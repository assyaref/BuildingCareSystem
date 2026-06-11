checkLogin();

const user=getSession();

document.getElementById("welcome").innerHTML=

`Selamat datang, <b>${user.nama}</b>`;

init();

async function init(){

    await loadDashboard();

}

async function loadDashboard(){

    const result=

    await DashboardService.summary();

    if(!result.success){

        alert(result.message);

        return;

    }

    const data=result.summary;

    document.getElementById("total").textContent=data.total;

    document.getElementById("ac").textContent=data.ac;

    document.getElementById("listrik").textContent=data.listrik;

    document.getElementById("air").textContent=data.air;

    document.getElementById("open").textContent=data.pending;

    document.getElementById("progress").textContent=data.progress;

    document.getElementById("done").textContent=data.selesai;

}
