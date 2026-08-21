/* ================= XVPEDITION SYSTEM (GLOSARIUM & STRUKTUR VIRUS) ================= */

// Glosarium Data
const xvpeditionData = [
    {
        term: "Virus",
        cat: "struktur",
        catLabel: "Struktur & Ciri",
        desc: "Mikroorganisme mikroskopis (berukuran 0,02 - 200 µm) yang bersifat parasit obligat intraseluler. Virus hanya dapat berkembang biak di dalam sel hidup dan tersusun atas asam nukleat (DNA atau RNA) yang dibungkus selubung protein (kapsid)."
    },
    {
        term: "Virion",
        cat: "struktur",
        catLabel: "Struktur & Ciri",
        desc: "Partikel virus yang utuh, lengkap, dan matang di luar sel inang serta siap untuk menginfeksi sel target."
    },
    {
        term: "Kapsid",
        cat: "struktur",
        catLabel: "Struktur & Ciri",
        desc: "Selubung protein pelindung yang membungkus materi genetik virus. Terdiri dari sub-unit protein yang disebut kapsomer."
    },
    {
        term: "Asam Nukleat",
        cat: "struktur",
        catLabel: "Struktur & Ciri",
        desc: "Bahan inti penyusun virus yang hanya terdiri dari salah satu jenis materi genetik, yaitu DNA saja atau RNA saja."
    },
    {
        term: "Bakteriofag",
        cat: "struktur",
        catLabel: "Struktur & Ciri",
        desc: "Jenis virus berbentuk huruf T (kompleks) yang khusus menyerang dan menginfeksi sel bakteri. Memiliki kepala, selubung ekor, dan serabut ekor."
    },
    {
        term: "TMV (Tobacco Mosaic Virus)",
        cat: "struktur",
        catLabel: "Struktur & Ciri",
        desc: "Virus berbentuk batang yang menyerang tanaman tembakau. Merupakan virus pertama yang berhasil dikristalkan oleh Wendell Stanley pada tahun 1935."
    },
    {
        term: "Daur Litik",
        cat: "replikasi",
        catLabel: "Replikasi",
        desc: "Daur reproduksi virus di mana virus virulen mengambil alih sel inang, mereplikasi partikel baru, lalu menghancurkan (lisis) sel inang dalam waktu singkat."
    },
    {
        term: "Daur Lisogenik",
        cat: "replikasi",
        catLabel: "Replikasi",
        desc: "Daur reproduksi virus di mana materi genetik virus menyisip ke kromosom sel inang membentuk profag tanpa merusak atau membunuh sel inang secara langsung."
    },
    {
        term: "Profag",
        cat: "replikasi",
        catLabel: "Replikasi",
        desc: "Sisipan DNA virus bakteriofag yang telah menyatu dengan kromosom sel bakteri pada daur lisogenik dan diwariskan ke sel anakan."
    },
    {
        term: "Adsorpsi",
        cat: "replikasi",
        catLabel: "Replikasi",
        desc: "Tahap awal replikasi virus berupa penempelan serabut/ujung ekor virus pada reseptor spesifik di permukaan membran sel inang."
    },
    {
        term: "Penetrasi",
        cat: "replikasi",
        catLabel: "Replikasi",
        desc: "Tahap penginjeksian atau penyuntikan asam nukleat (DNA/RNA) virus ke dalam sitoplasma sel inang melalui saluran ekor."
    },
    {
        term: "Sintesis & Replikasi",
        cat: "replikasi",
        catLabel: "Replikasi",
        desc: "Tahap pembentukan komponen-komponen tubuh virus baru dan penggandaan materi genetik di dalam sel inang."
    },
    {
        term: "Lisis",
        cat: "replikasi",
        catLabel: "Replikasi",
        desc: "Tahap pecah dan hancurnya dinding sel inang oleh enzim lizozim untuk melepaskan ratusan virion baru ke lingkungan."
    },
    {
        term: "Influenza Virus",
        cat: "penyakit",
        catLabel: "Penyakit",
        desc: "Virus RNA dari famili Orthomyxoviridae yang menyerang saluran pernapasan manusia. Ditularkan melalui udara dan percikan lendir."
    },
    {
        term: "SARS",
        cat: "penyakit",
        catLabel: "Penyakit",
        desc: "Severe Acute Respiratory Syndrome; penyakit infeksi saluran pernapasan akut berat (pneumonia) yang disebabkan oleh Coronavirus."
    },
    {
        term: "HIV / AIDS",
        cat: "penyakit",
        catLabel: "Penyakit",
        desc: "Human Immunodeficiency Virus; virus yang merusak sistem kekebalan tubuh (sel limfosit T CD4+), menyebabkan sindrom hilangnya kekebalan tubuh (AIDS)."
    },
    {
        term: "Hepatitis",
        cat: "penyakit",
        catLabel: "Penyakit",
        desc: "Gangguan peradangan fungsi hati dan saluran empedu akibat infeksi virus Hepatitis A, B, C, D, atau E."
    },
    {
        term: "Ebola Virus",
        cat: "penyakit",
        catLabel: "Penyakit",
        desc: "Virus sangat mematikan yang menyerang sel darah putih makrofag dan jaringan fibroblas, menyebabkan demam berdarah tinggi dan pendarahan hebat."
    },
    {
        term: "Rabies (Rhabdovirus)",
        cat: "penyakit",
        catLabel: "Penyakit",
        desc: "Penyakit infeksi zoonotik yang menyerang sistem saraf pusat hewan dan manusia melalui gigitan hewan terinfeksi seperti anjing atau kera."
    },
    {
        term: "Tetelo (NCD)",
        cat: "penyakit",
        catLabel: "Penyakit",
        desc: "New Castle Disease; penyakit virus mematikan yang menyerang sistem pernapasan dan saraf unggas (ayam/itik) dengan gejala diare dan kepala tertekuk."
    },
    {
        term: "PMK (Penyakit Kuku & Mulut)",
        cat: "penyakit",
        catLabel: "Penyakit",
        desc: "Penyakit yang menyerang hewan ternak berkuku belah (sapi, kambing, babi) akibat Aphthovirus, menimbulkan lepuh di mulut dan kaki."
    },
    {
        term: "Tungro",
        cat: "penyakit",
        catLabel: "Penyakit",
        desc: "Penyakit yang menyerang tanaman padi hingga menyebabkan kekerdilan. Disebabkan virus tungro (Caulimoviridae) dan ditularkan oleh wereng."
    },
    {
        term: "TYLCV",
        cat: "penyakit",
        catLabel: "Penyakit",
        desc: "Tomato Yellow Leaf Curl Virus; virus yang menyebabkan daun tanaman tomat menguning dan menggulung sehingga menurunkan hasil panen."
    },
    {
        term: "TYMV",
        cat: "penyakit",
        catLabel: "Penyakit",
        desc: "Turnip Yellow Mosaic Virus; virus yang menyebabkan daun tanaman tembakau, kapas, dan lobak menjadi menggulung dan menguning."
    },
    {
        term: "BGM (Bean Golden Mosaic)",
        cat: "penyakit",
        catLabel: "Penyakit",
        desc: "Penyakit akibat Begomovirus yang menyebabkan timbulnya warna bercak kuning emas pada daun tanaman tomat dan cabai."
    },
    {
        term: "Vaksin",
        cat: "pencegahan",
        catLabel: "Manfaat & Pencegahan",
        desc: "Suspensi mikroorganisme patogen yang dimatikan/dilemahkan untuk merangsang pembentukan antibodi dan kekebalan imun tubuh."
    },
    {
        term: "Interferon",
        cat: "pencegahan",
        catLabel: "Manfaat & Pencegahan",
        desc: "Senyawa protein alami yang diproduksi sel tubuh untuk mencegah dan merintangi replikasi virus di dalam sel inang."
    },
    {
        term: "Biopestisida",
        cat: "pencegahan",
        catLabel: "Manfaat & Pencegahan",
        desc: "Penggunaan agen biologis seperti Baculovirus untuk memberantas hama tanaman tanpa mencemari lingkungan sekitar."
    },
    {
        term: "Zoonotik",
        cat: "pencegahan",
        catLabel: "Manfaat & Pencegahan",
        desc: "Sifat penyakit infeksi yang dapat ditularkan secara alami dari hewan vertebrata ke manusia."
    }
];

// Struktur Virus Anatomical Parts Data
const virusPartsData = [
    {
        name: "1. Kepala (Kapsid)",
        desc: "Bagian atas virus berbentuk ikosahedral (polihedral) yang tersusun atas lapisan kapsomer protein. Berfungsi melindungi materi genetik dari pengaruh lingkungan eksternal."
    },
    {
        name: "2. Materi Genetik (DNA/RNA)",
        desc: "Asam nukleat yang tersimpan di dalam kapsid kepala virus. Mengandung instruksi genetik untuk mereplikasi dan mengambil alih metabolisme sel inang."
    },
    {
        name: "3. Leher & Kerah (Collar)",
        desc: "Bagian penyambung antara kapsid kepala dan selubung ekor. Berfungsi sebagai saluran penghubung saat materi genetik ditransmisikan menuju ekor."
    },
    {
        name: "4. Selubung Ekor (Sheath)",
        desc: "Tabung protein heliks kontraktil yang dapat berkontraksi saat infeksi untuk memompa dan menyuntikkan DNA virus menembus dinding sel inang."
    },
    {
        name: "5. Lempeng Dasar (Baseplate & Pins)",
        desc: "Lempeng heksagonal di ujung selubung ekor yang dilengkapi jarum penusuk (pins). Berfungsi menstabilkan penempelan virus dan melubangi membran sel inang."
    },
    {
        name: "6. Serabut Ekor (Tail Fibers)",
        desc: "Struktur memanjang seperti kaki yang berfungsi mengenali dan menempel secara spesifik pada protein reseptor di permukaan membran inang (fase adsorpsi)."
    }
];

let currentCategory = 'all';
let currentTab = 'glosarium';

// Function to open the VXpedition Popup
function openXVpedition(initialTab = 'glosarium') {
    switchXVTab(initialTab);
    
    currentCategory = 'all';
    const searchInput = document.getElementById("xvSearchInput");
    if (searchInput) searchInput.value = '';
    
    const catBtns = document.querySelectorAll("#xvCategories .cat-btn");
    catBtns.forEach(btn => btn.classList.remove("active"));
    if (catBtns.length > 0) catBtns[0].classList.add("active");

    renderXVpedition();
    renderVirusParts();

    const popup = document.getElementById("xvpeditionPopup");
    if (popup) {
        popup.style.setProperty("display", "flex", "important");
    }
}

// Function to close the VXpedition Popup
function closeXVpedition() {
    const popup = document.getElementById("xvpeditionPopup");
    if (popup) {
        popup.style.setProperty("display", "none", "important");
    }
}

// Function to switch between Glossarium and Struktur Virus tabs
function switchXVTab(tabName) {
    currentTab = tabName;
    
    const tabGlosarium = document.getElementById("xvTabGlosarium");
    const tabStruktur = document.getElementById("xvTabStruktur");
    const viewGlosarium = document.getElementById("xvViewGlosarium");
    const viewStruktur = document.getElementById("xvViewStruktur");

    if (tabName === 'glosarium') {
        if (tabGlosarium) tabGlosarium.classList.add("active");
        if (tabStruktur) tabStruktur.classList.remove("active");
        if (viewGlosarium) viewGlosarium.style.display = "flex";
        if (viewStruktur) viewStruktur.style.display = "none";
    } else {
        if (tabGlosarium) tabGlosarium.classList.remove("active");
        if (tabStruktur) tabStruktur.classList.add("active");
        if (viewGlosarium) viewGlosarium.style.display = "none";
        if (viewStruktur) viewStruktur.style.display = "grid";
        
        // Trigger model viewer render if needed
        const mv = document.getElementById("virusModelViewer");
        if (mv && typeof mv.dismissPoster === 'function') {
            mv.dismissPoster();
        }
    }
}

// Function to filter glossary categories
function setXVCategory(cat, btn) {
    currentCategory = cat;
    const catBtns = document.querySelectorAll("#xvCategories .cat-btn");
    catBtns.forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
    renderXVpedition();
}

function filterXVpedition() {
    renderXVpedition();
}

// Render glossary terms list
function renderXVpedition() {
    const searchInput = document.getElementById("xvSearchInput");
    const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const listContainer = document.getElementById("xvpeditionList");
    if (!listContainer) return;
    
    const filtered = xvpeditionData.filter(item => {
        const matchesCat = (currentCategory === 'all') || (item.cat === currentCategory);
        const matchesSearch = item.term.toLowerCase().includes(searchVal) || 
                              item.desc.toLowerCase().includes(searchVal) || 
                              item.catLabel.toLowerCase().includes(searchVal);
        return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
        listContainer.innerHTML = `<div class="xv-empty">🔍 Tidak ada istilah yang cocok dengan pencarian "<strong>${searchVal}</strong>".</div>`;
        return;
    }

    listContainer.innerHTML = filtered.map(item => `
        <div class="term-card">
            <div class="term-header">
                <h3 class="term-title">${item.term}</h3>
                <span class="term-tag">${item.catLabel}</span>
            </div>
            <p class="term-desc">${item.desc}</p>
        </div>
    `).join('');
}

// Render virus anatomy parts in 3D tab
function renderVirusParts() {
    const container = document.getElementById("xvPartsList");
    if (!container) return;

    container.innerHTML = virusPartsData.map(part => `
        <div class="xv-part-card">
            <div class="xv-part-name">${part.name}</div>
            <p class="xv-part-desc">${part.desc}</p>
        </div>
    `).join('');
}

// 3D Model Helpers
function toggleModelAutoRotate() {
    const mv = document.getElementById("virusModelViewer");
    if (mv) {
        mv.autoRotate = !mv.autoRotate;
    }
}

function resetModelCamera() {
    const mv = document.getElementById("virusModelViewer");
    if (mv) {
        mv.cameraOrbit = "0deg 75deg 105%";
        mv.fieldOfView = "auto";
        mv.jumpCameraToGoal();
    }
}

// Function to update position of VXpedition floating button at TOP-LEFT (avoiding in-game menu icon)
function updateXVpeditionBtnPosition() {
    const btn = document.getElementById("xvpeditionGameBtn");
    if (!btn) return;

    if (typeof Graphics !== "undefined" && Graphics._canvas) {
        const rect = Graphics._canvas.getBoundingClientRect();
        if (rect && rect.width > 0) {
            const scale = Graphics._realScale || 1.0;
            const btnHeight = Math.max(32, Math.min(42, Math.floor(38 * scale)));
            const topMargin = Math.floor(10 * scale);
            const leftMargin = Math.floor(12 * scale);

            btn.style.height = btnHeight + "px";
            btn.style.position = "fixed";
            btn.style.left = Math.floor(rect.left + leftMargin) + "px";
            btn.style.top = Math.floor(rect.top + topMargin) + "px";
            btn.style.right = "auto";
            return;
        }
    }

    // Default fallback position on top-left
    btn.style.position = "fixed";
    btn.style.top = "12px";
    btn.style.left = "16px";
    btn.style.right = "auto";
}

// Mount and keep button position updated
window.addEventListener("DOMContentLoaded", () => {
    // Check if we should inject the floating game button
    if (!document.getElementById("xvpeditionGameBtn") && document.getElementById("xvpeditionPopup")) {
        const btn = document.createElement("div");
        btn.id = "xvpeditionGameBtn";
        btn.className = "xvpedition-game-btn";
        btn.title = "Buka VXpedition (Glosarium & Struktur Virus)";
        btn.onclick = () => openXVpedition('glosarium');
        btn.innerHTML = `
            <img src="icon/xvpedition.png" alt="VXpedition Icon" class="xvpedition-btn-img">
            <span class="xvpedition-btn-text">VXPEDITION</span>
        `;
        document.body.appendChild(btn);

        // Initial position update
        updateXVpeditionBtnPosition();

        // Periodically adjust position on resize & frame ticks
        window.addEventListener("resize", updateXVpeditionBtnPosition);
        setInterval(updateXVpeditionBtnPosition, 500);
    }
});
