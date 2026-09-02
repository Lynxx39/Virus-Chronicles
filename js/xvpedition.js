/* ================= GLOSARIUM SYSTEM ================= */

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

let currentCategory = 'all';
let currentSection = 'hub'; // 'hub', 'glosarium', 'referensi'

// Open Glosarium Modal directly
function openGlosarium() {
    openXVSection('glosarium');
    const popup = document.getElementById("xvpeditionPopup");
    if (popup) {
        popup.style.setProperty("display", "flex", "important");
    }
}

// Open Referensi Modal directly
function openReferensi() {
    openXVSection('referensi');
    const popup = document.getElementById("xvpeditionPopup");
    if (popup) {
        popup.style.setProperty("display", "flex", "important");
    }
}

// Backward compatibility alias
function openXVpedition() {
    openGlosarium();
}

// Close the Modal
function closeXVpedition() {
    const popup = document.getElementById("xvpeditionPopup");
    if (popup) {
        popup.style.setProperty("display", "none", "important");
    }
}

// Switch between Glosarium and Referensi Web
function openXVSection(section) {
    currentSection = section;

    const viewGlosarium = document.getElementById("xvViewGlosarium");
    const viewReferensi = document.getElementById("xvViewReferensi");
    const backBtn = document.getElementById("xvBackBtn");
    const mainTitle = document.getElementById("xvMainTitle");

    if (backBtn) backBtn.style.display = "none";

    if (section === 'glosarium') {
        if (viewGlosarium) viewGlosarium.style.display = "flex";
        if (viewReferensi) viewReferensi.style.display = "none";
        if (mainTitle) mainTitle.innerText = "📖 Glosarium Virus";

        currentCategory = 'all';
        const searchInput = document.getElementById("xvSearchInput");
        if (searchInput) searchInput.value = '';
        const catBtns = document.querySelectorAll("#xvCategories .cat-btn");
        catBtns.forEach(btn => btn.classList.remove("active"));
        if (catBtns.length > 0) catBtns[0].classList.add("active");

        renderXVpedition();
    } else if (section === 'referensi') {
        if (viewGlosarium) viewGlosarium.style.display = "none";
        if (viewReferensi) viewReferensi.style.display = "flex";
        if (mainTitle) mainTitle.innerText = "🌐 Referensi Web & Edukasi";
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

// Check if player is actively in gameplay (ONLY in Scene_Map, NOT during Boot, Title, Name Input, or Message)
function shouldShowXVpeditionBtn() {
    if (typeof SceneManager === "undefined" || !SceneManager._scene) {
        return false;
    }

    const scene = SceneManager._scene;
    const sceneName = scene.constructor ? scene.constructor.name : "";

    // ONLY show during map exploration (Scene_Map)
    if (sceneName === "Scene_Map") {
        // Hide while dialogue message box is active
        if (typeof $gameMessage !== "undefined" && $gameMessage && $gameMessage.isBusy()) {
            return false;
        }
        return true;
    }

    return false;
}

// Function to update position & visibility of Glosarium floating button BELOW the Top-Right Menu Button
function updateXVpeditionBtnPosition() {
    const btn = document.getElementById("xvpeditionGameBtn");
    if (!btn) return;

    if (!shouldShowXVpeditionBtn()) {
        btn.style.display = "none";
        return;
    }

    btn.style.display = "inline-flex";

    if (typeof Graphics !== "undefined" && Graphics._canvas) {
        const rect = Graphics._canvas.getBoundingClientRect();
        if (rect && rect.width > 0) {
            const scale = Graphics._realScale || 1.0;
            const btnHeight = Math.max(30, Math.min(38, Math.floor(34 * scale)));
            
            // Positioned directly below RPG Maker's top-right Touch UI menu button (y ~ 58px)
            const topMargin = Math.floor(58 * scale);
            const rightMargin = Math.floor(10 * scale);

            btn.style.height = btnHeight + "px";
            btn.style.position = "fixed";
            btn.style.left = "auto";
            btn.style.right = Math.floor((window.innerWidth - rect.right) + rightMargin) + "px";
            btn.style.top = Math.floor(rect.top + topMargin) + "px";
            return;
        }
    }

    // Default fallback position below top-right menu
    btn.style.position = "fixed";
    btn.style.top = "58px";
    btn.style.right = "12px";
    btn.style.left = "auto";
}

// Hook into Scene_Map lifecycle for guaranteed in-game update
if (typeof Scene_Map !== "undefined") {
    const _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);
        updateXVpeditionBtnPosition();
    };
}

// Mount and keep button position updated
window.addEventListener("DOMContentLoaded", () => {
    // Only create floating in-game button if popup container exists and not already created
    if (!document.getElementById("xvpeditionGameBtn") && document.getElementById("xvpeditionPopup")) {
        const btn = document.createElement("div");
        btn.id = "xvpeditionGameBtn";
        btn.className = "xvpedition-game-btn";
        btn.title = "Buka Glosarium";
        btn.style.display = "none"; // Always hidden initially until active in Scene_Map
        btn.onclick = openXVpedition;
        btn.innerHTML = `
            <img src="icon/xvpedition.png" alt="Glosarium Icon" class="xvpedition-btn-img">
            <span class="xvpedition-btn-text">GLOSARIUM</span>
        `;
        document.body.appendChild(btn);

        // Initial check
        updateXVpeditionBtnPosition();

        // Continually check scene state and resize
        window.addEventListener("resize", updateXVpeditionBtnPosition);
        setInterval(updateXVpeditionBtnPosition, 200);
    }
});

