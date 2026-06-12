checkLogin();

loadSidebar("history");

const user = getSession();

document.getElementById("welcome").innerHTML =
`Selamat datang, <b>${user.nama}</b>`;

let reports = [];

loadHistory();

async function loadHistory() {

    const result = await HistoryService.getAll();

    if (!result.success) {

        alert(result.message);

        return;

    }

    reports = result.reports;

    renderTable(reports);

}

function renderTable(data) {

    const tbody =
        document.getElementById("historyBody");

    tbody.innerHTML = "";

    data.forEach(item => {

        tbody.innerHTML += `

        <tr>

            <td>${item.id}</td>

            <td>${item.tanggal}</td>

            <td>${item.nama}</td>

            <td>${item.lokasi}</td>

            <td>${item.kategori}</td>

            <td>${badgeStatus(item.status)}</td>

            <td>

                <button

                    class="btn btn-sm btn-primary"

                    onclick='detailReport(${JSON.stringify(item)})'>

                    <i class="bi bi-eye"></i>

                </button>

            </td>

        </tr>

        `;

    });

}

function badgeStatus(status){

    if(status=="OPEN"){

        return `<span class="badge bg-danger">OPEN</span>`;

    }

    if(status=="PROGRESS"){

        return `<span class="badge bg-warning text-dark">PROGRESS</span>`;

    }

    return `<span class="badge bg-success">DONE</span>`;

}

function detailReport(item){

    alert(

`ID : ${item.id}

Pelapor : ${item.nama}

Lokasi : ${item.lokasi}

Kategori : ${item.kategori}

Status : ${item.status}

Deskripsi :

${item.deskripsi}`

    );

}
