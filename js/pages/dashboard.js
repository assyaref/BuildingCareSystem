checkLogin();

const user=getSession();

document.getElementById("welcome").innerHTML=

`Selamat datang, <b>${user.nama}</b>`;

loadDashboard();

async function loadDashboard(){

    Loader.show();

    const result=

    await DashboardService.summary();

    Loader.hide();

    if(!result.success){

        Toast.show(result.message,"danger");

        return;

    }

    const s=result.summary;

    document.getElementById("total").textContent=s.total;
    document.getElementById("ac").textContent=s.ac;
    document.getElementById("listrik").textContent=s.listrik;
    document.getElementById("air").textContent=s.air;

    document.getElementById("open").textContent=s.pending;
    document.getElementById("progress").textContent=s.progress;
    document.getElementById("done").textContent=s.selesai;

}
