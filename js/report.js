checkLogin();

const user = getSession();

document.getElementById("nama").value = user.nama;

document

.getElementById("photo")

.addEventListener(

"change",

previewImage

);

document

.getElementById("reportForm")

.addEventListener(

"submit",

saveReport

);

function previewImage(e){

const file = e.target.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload=function(ev){

const img = document.getElementById("preview");

img.src = ev.target.result;

img.style.display="block";

}

reader.readAsDataURL(file);

}

async function saveReport(e){

e.preventDefault();

const btn = document.getElementById("btnSave");

btn.disabled=true;

btn.innerHTML="Mengirim...";

const file = document.getElementById("photo").files[0];

let photo="";

let fileName="";

if(file){

const reader = new FileReader();

photo = await new Promise(resolve=>{

reader.onload=e=>resolve(e.target.result);

reader.readAsDataURL(file);

});

fileName=file.name;

}

const result = await ReportService.save({

nama:document.getElementById("nama").value,

departemen:document.getElementById("departemen").value,

lokasi:document.getElementById("lokasi").value,

kategori:document.getElementById("kategori").value,

deskripsi:document.getElementById("deskripsi").value,

photo,

fileName

});

btn.disabled=false;

btn.innerHTML="Kirim Laporan";

if(result.success){

alert("✅ Laporan berhasil dikirim");

location.href="history.html";

}

else{

alert(result.message);

}

}
