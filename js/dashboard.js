checkLogin();

const user = getSession();

document.getElementById("welcome").innerHTML =
`Selamat datang, <b>${user.nama}</b>`;

loadDashboard();

async function loadDashboard() {

    const result = await api("dashboard");

    console.log(result);

    if (!result.success) {

        alert(result.message);

        return;

    }

    const summary = result.summary;

    document.getElementById("total").textContent = summary.total;
    document.getElementById("ac").textContent = summary.ac;
    document.getElementById("listrik").textContent = summary.listrik;
    document.getElementById("air").textContent = summary.air;

    const open = document.getElementById("open");
    const progress = document.getElementById("progress");
    const done = document.getElementById("done");

    if (open) open.textContent = summary.pending;
    if (progress) progress.textContent = summary.progress;
    if (done) done.textContent = summary.selesai;

}
