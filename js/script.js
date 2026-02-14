WelcomeMessage();

function WelcomeMessage(){
    // Show Popup
    let name = prompt("Welcome to Rama Company Website! what is your name?");

    // validate input
    if (name == null || name.trim() === "") {
        // if user cancel the prompt or enter empty name, set default name to "Guest"
        name = "Guest";
    }

    // Display welcome message
    document.getElementById("welcome-speech").textContent = "Hello, " + name + "! Welcome to Rama Company Website!";
}

const messageForm = document.getElementById("messageForm");
const resultContainer = document.getElementById("result-container");

messageForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const currentTime = new Date().toLocaleString();

    // validasi kolom kosong
    if (name === "" || email === "" || message === ""){
        alert("Semua kolom harus diisi!");
        return;
    }

    // Validasi Format Email (Regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Format email salah! Pastikan ada '@' dan titik (contoh: nama@mail.com)");
        return;
    }

    document.getElementById("res-name").textContent= name;
    document.getElementById("res-email").textContent = email;
    document.getElementById("res-message").textContent = message;
    document.getElementById("res-time").textContent = currentTime;

    resultContainer.style.display = "block";

    messageForm.reset();
});

const modal = document.getElementById("portfolioModal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-modal");

// Fungsi untuk membuka modal dengan konten projek
function openProject(projectId) {
    let content = "";

    if (projectId === 'dufan') {
        content = `
            <h2>E-Ticketing Dufan - Project Detail</h2>
            <p>Berikut adalah beberapa tampilan utama dari sistem e-ticketing:</p>
            <div class="modal-image-list">
                <img src="img/Home-page-e-ticket-dufan.png" alt="Home page">
                <img src="img/dufan-login-user-page.png" alt="login">
                <img src="img/form-pemesanan-ticket-dufan.png" alt="form pemesanan">
                <img src="img/detail-tiket-dufan.png" alt="tiket saya">
                <img src="img/riwayat-pemesanan-tiket.png" alt="riwayat pesan">
                <img src="img/notif-dufan.png" alt="notifikasi">
            </div>
        `;
    } else if (projectId === 'rama') {
        content = `
            <h2>Rama Company Profile</h2>
            <p>Project landing page yang sedang kita kerjakan saat ini.</p>
            <div class="modal-image-list">
                <img src="img/home-page-company2.png" alt="Home Page Rama company">
                <img src="img/profile-company.png" alt="profile company">
                <img src="img/portofolio-page.png" alt="portofolio company">
                <img src="img/message-us.png" alt="contact form company">
            </div>
        `;
    }

    modalBody.innerHTML = content;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// Tutup modal saat tombol X diklik
closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Tutup modal jika user klik di luar kotak putih
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}