// ==========================================
// HAPPY BIRTHDAY MAS AKY ❤️
// SCRIPT.JS PART 1
// ==========================================

// ================= Element =================

const opening = document.getElementById("opening");
const splash = document.getElementById("splash");
const login = document.getElementById("login");
const popup = document.getElementById("popup");
const loading = document.getElementById("loading");
const home = document.getElementById("home");

const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");

const passwordDots = document.getElementById("passwordDots");
const error = document.getElementById("error");

const progressBar = document.getElementById("progressBar");
const loadingText = document.getElementById("loadingText");

// ================= Question & Quiz =================

const questionScreen = document.getElementById("questionScreen");
const quizScreen = document.getElementById("quizScreen");

const rememberBtn = document.getElementById("rememberBtn");

const quizTitle = document.getElementById("quizTitle");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizMessage = document.getElementById("quizMessage");
const quizNext = document.getElementById("quizNext");

let currentQuiz = 1;

let round3Answered = {
    A: false,
    B: false,
    C: false
};

// ================= Password =================

let password = "";
const correctPassword = "140226";

// ================= Start =================

startBtn.addEventListener("click",()=>{

    music.volume = 0;

    music.play().catch(()=>{});

    let volume = 0;

    const fadeMusic = setInterval(()=>{

        volume += 0.05;

        if(volume >= 1){

            volume = 1;

            clearInterval(fadeMusic);

        }

        music.volume = volume;

    },150);

    opening.classList.add("hidden");

splash.classList.remove("hidden");
splash.classList.add("fade");

setTimeout(()=>{

    splash.classList.add("hidden");

    questionScreen.classList.remove("hidden");
    questionScreen.classList.add("fade");

},3000);
});

// ================= Keypad =================

const nums = document.querySelectorAll(".num");

nums.forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(password.length >= 6) return;

        password += btn.innerText;

        updateDots();

    });

});


document.getElementById("deleteBtn").addEventListener("click",()=>{

    password = password.slice(0,-1);

    updateDots();

});

document.getElementById("enterBtn").addEventListener("click",checkPassword);

// ================= Update Password =================

function updateDots(){

    let dots = "";

    for(let i=0;i<6;i++){

        dots += i < password.length ? "● " : "○ ";

    }

    passwordDots.innerHTML = dots;

}

// ================= Check Password =================

function checkPassword(){

    if(password === correctPassword){

        error.innerHTML = "Yippie pinter sekali cowo aku🌷";

        setTimeout(()=>{

            login.classList.add("hidden");

            popup.classList.remove("hidden");

            popup.classList.add("fade");

        },800);

        setTimeout(()=>{

            popup.classList.add("hidden");

            loading.classList.remove("hidden");

            loading.classList.add("fade");

            startLoading();

        },3500);

    }else{

        error.innerHTML = "😤 Ih dasar makin tua udah lupa😠";

        password = "";

        updateDots();

        document.querySelector("#login .glass").style.animation="shake .35s";

        setTimeout(()=>{

            document.querySelector("#login .glass").style.animation="";

        },350);

    }

}


// ==========================================
// SCRIPT.JS PART 2
// ==========================================

// ================= Loading =================

function startLoading(){

    let width = 0;

    const loading = setInterval(()=>{

        width++;

        progressBar.style.width = width + "%";

        if(width < 100){

            loadingText.innerHTML = width + "%";

        }

        if(width >= 100){

            clearInterval(loading);

            loadingText.innerHTML = "💖 Yayyy 100% 💖";

            setTimeout(loveLoading,1000);

        }

    },35);

}

// ================= Love Loading =================

function loveLoading(){

    const text=[

        "🤍 1%",
        "🤍 10%",
        "🤍 30%",
        "🤍 50%",
        "🤍 75%",
        "🤍 99%",
        "Eh...",
        "100% ternyata cintaku ke kamu 😛💖",
        "Semoga kamu suka yaa ❤️"

    ];

    let i=0;

    const anim=setInterval(()=>{

        loadingText.innerHTML=text[i];

        i++;

        if(i>=text.length){

            clearInterval(anim);

            setTimeout(()=>{

                document.getElementById("loading").classList.add("hidden");

                home.classList.remove("hidden");

                home.classList.add("fade");

            },1900);

        }

    },1500);

}

// ================= Gift =================

const giftBtn=document.getElementById("giftBtn");
const giftContent=document.getElementById("giftContent");

giftBtn.addEventListener("click",()=>{

    giftBtn.style.display="none";

    giftContent.classList.remove("hidden");

    giftContent.classList.add("fade");

});

// ================= Amplop =================

const envelope=document.getElementById("envelope");
const openEnvelope=document.getElementById("openEnvelope");

const envelopeSection=document.getElementById("envelopeSection");
const letterSection=document.getElementById("letterSection");

envelope.addEventListener("click",()=>{

    envelope.querySelector(".flap").style.transform="rotateX(180deg)";

    envelope.style.transform="scale(1.05)";

    openEnvelope.innerHTML="Hehe... makasih ya udah dibuka🤍";

    setTimeout(()=>{

        envelopeSection.classList.add("hidden");

        letterSection.classList.remove("hidden");

        letterSection.classList.add("fade");

        typeLetter();

    },1700);

});

// ================= Letter Animation =================

const paragraphs = document.querySelectorAll("#letter p");

const afterLetter = document.getElementById("afterLetter");

const galleryBtn = document.getElementById("galleryBtn");

function typeLetter(){

    paragraphs.forEach(p=>{

        p.classList.add("show");

    });

    afterLetter.classList.remove("hidden");

    galleryBtn.classList.remove("hidden");

}

// ==========================================
// SCRIPT.JS PART 3
// ==========================================

// ================= Gallery =================

document.getElementById("galleryBtn").addEventListener("click",()=>{

    const gallerySection = document.getElementById("gallerySection");

    gallerySection.classList.remove("hidden");
    gallerySection.classList.add("fade");

    gallerySection.scrollIntoView({
        behavior:"smooth"
    });

    setTimeout(()=>{

        voiceSection.classList.add("fade");

    },1500);

});

// ================= Sakura =================

setInterval(()=>{

    const sakura=document.createElement("div");

    sakura.className="petal";

    sakura.innerHTML="🌸";

    sakura.style.left=Math.random()*100+"vw";

    sakura.style.fontSize=(18+Math.random()*12)+"px";

    document.body.appendChild(sakura);

    let top=-40;

    const fall=setInterval(()=>{

        top+=3;

        sakura.style.top=top+"px";

        sakura.style.transform="rotate("+top+"deg)";

        if(top>window.innerHeight){

            clearInterval(fall);

            sakura.remove();

        }

    },25);

},5000);

// ================= Love =================

setInterval(()=>{

    const love=document.createElement("div");

    love.className="love";

    love.innerHTML="❤️";

    love.style.left=Math.random()*100+"vw";

    love.style.fontSize=(18+Math.random()*8)+"px";

    document.body.appendChild(love);

    let bottom=-40;

    const fly=setInterval(()=>{

        bottom+=3;

        love.style.bottom=bottom+"px";

        love.style.opacity=1-bottom/window.innerHeight;

        if(bottom>window.innerHeight){

            clearInterval(fly);

            love.remove();

        }

    },25);

},3000);

// ================= Auto Slider =================

const gallery=document.querySelector(".gallery");

if(gallery){

    setInterval(()=>{

        gallery.scrollBy({

            left:235,

            behavior:"smooth"

        });

        if(gallery.scrollLeft+gallery.clientWidth>=gallery.scrollWidth-10){

            gallery.scrollTo({

                left:0,

                behavior:"smooth"

            });

        }

    },4000);

}

// ================= Music Button =================

const musicBtn=document.createElement("button");

musicBtn.id="musicBtn";

musicBtn.innerHTML="🔊";

document.body.appendChild(musicBtn);

let playing=true;

musicBtn.addEventListener("click",()=>{

    if(playing){

        music.pause();

        musicBtn.innerHTML="🔇";

    }else{

        music.play().catch(()=>{});

        musicBtn.innerHTML="🔊";

    }

    playing=!playing;

});

// ================= Console =================

console.log("%cHappy Birthday Mas Aky ❤️","font-size:20px;color:pink;font-weight:bold;");

console.log("%cWebsite ini dibuat khusus oleh Anyaa 🤍","font-size:14px;color:white;");

// ================= Voice Note Volume =================

const voiceNote = document.querySelector("#voiceSection audio");

if(voiceNote){

    voiceNote.addEventListener("play",()=>{

        voiceNote.volume = 1;

        // Musik turun perlahan ke 15%
        const startVolume = music.volume;
        const targetVolume = 0.05;
        const duration = 800;
        const steps = 20;
        const stepTime = duration / steps;

        let step = 0;

        const fadeDown = setInterval(()=>{

            step++;

            music.volume =
                startVolume +
                (targetVolume - startVolume) * (step / steps);

            if(step >= steps){

                clearInterval(fadeDown);
                music.volume = targetVolume;

            }

        },stepTime);

    });


    voiceNote.addEventListener("ended",()=>{

        // Musik naik perlahan dari 15% ke 100%
        const startVolume = music.volume;
        const targetVolume = 1;
        const duration = 4000;
        const steps = 40;
        const stepTime = duration / steps;

        let step = 0;

        const fadeUp = setInterval(()=>{

            step++;

            music.volume =
                startVolume +
                (targetVolume - startVolume) * (step / steps);

            if(step >= steps){

                clearInterval(fadeUp);
                music.volume = targetVolume;

            }

        },stepTime);

    });

}
    
// ==========================================
// QUESTION & QUIZ SYSTEM
// ==========================================

if (rememberBtn && questionScreen && quizScreen) {

    // ======================================
    // MULAI QUIZ + MUSIK
    // ======================================

    rememberBtn.addEventListener("click", () => {

        // Musik mulai saat "Aku ingat kok!" 🎵
        music.volume = 1;

        music.play().catch(() => {});


        // Pindah ke quiz
        questionScreen.classList.add("hidden");

        quizScreen.classList.remove("hidden");
        quizScreen.classList.add("fade");

    });


    // ======================================
    // PILIHAN JAWABAN
    // ======================================

    quizOptions.addEventListener("click", (event) => {

        const button = event.target.closest(".quizOption");

        if (!button) return;

        const answer = button.dataset.answer;


        // ==================================
        // RONDE 1
        // ==================================

        if (currentQuiz === 1) {

            if (answer === "B") {

                quizMessage.innerHTML =
                    "YAYYY BENER 😭🫶<br>" +
                    "ternyata kamu tau juga yaa 🤭";

                quizNext.innerHTML =
                    "Lanjut → 🫶";

                quizNext.classList.remove("hidden");

            }

            else if (answer === "A") {

                quizMessage.innerHTML =
                    "Ehh bukan aku dongg 😭<br>" +
                    "coba lagi yaa 🤭";

            }

            else if (answer === "C") {

                quizMessage.innerHTML =
                    "HAHAHA BUBUL LAGI 😭🐱<br>" +
                    "bukan diaa, coba lagi!";

            }

        }


        // ==================================
        // RONDE 2
        // ==================================

        else if (currentQuiz === 2) {

            if (answer === "C") {

                quizMessage.innerHTML =
                    "YASSS BENER 😭🍜<br>" +
                    "Mie Ayam emang penyelamat segala masalah 😭🫶";

                quizNext.innerHTML =
                    "Lanjut → 🫶";

                quizNext.classList.remove("hidden");

            }

            else if (answer === "A") {

                quizMessage.innerHTML =
                    "Bubul emang lucu sih... 😭🐱<br>" +
                    "tapi bukan diaa!";

            }

            else if (answer === "B") {

                quizMessage.innerHTML =
                    "Pede banget sih kamu 😭🫵<br>" +
                    "tapi salahhh!";

            }

        }


        // ==================================
        // RONDE 3
        // ==================================

        else if (currentQuiz === 3) {

            round3Answered[answer] = true;


            // Belum mencoba semua pilihan
            if (
                !round3Answered.A ||
                !round3Answered.B ||
                !round3Answered.C
            ) {

                quizMessage.innerHTML =
                    "Salahhh 😭 coba pilihan yang lain!";

            }


            // Semua pilihan sudah dicoba
            else {

                quizMessage.innerHTML =
                    "Salah semua wleee👅<br>" +
                    "mending aku bobo dikamar 😴";

                quizNext.innerHTML =
                    "Yaudah deh → 🔐";

                quizNext.classList.remove("hidden");

            }

        }

    });


    // ======================================
    // TOMBOL LANJUT
    // ======================================

    quizNext.addEventListener("click", () => {


        // ==================================
        // RONDE 1 → RONDE 2
        // ==================================

        if (currentQuiz === 1) {

            currentQuiz = 2;

            quizTitle.innerHTML =
                "Tebak-tebakan #2 👀";

            quizQuestion.innerHTML =
                "Kalau aku lagi ngambek, kira-kira siapa yang paling mungkin bikin aku nggak jadi ngambek? 😤👉👈";

            quizOptions.innerHTML = `

                <button class="quizOption" data-answer="A">
                    A. Bubul 🐱
                </button>

                <button class="quizOption" data-answer="B">
                    B. Kamu 🫵
                </button>

                <button class="quizOption" data-answer="C">
                    C. Mie Ayam 🍜
                </button>

            `;

            quizMessage.innerHTML = "";

            quizNext.innerHTML =
                "Lanjut → 🫶";

            quizNext.classList.add("hidden");

        }


        // ==================================
        // RONDE 2 → RONDE 3
        // ==================================

        else if (currentQuiz === 2) {

            currentQuiz = 3;

            quizTitle.innerHTML =
                "Tebak-tebakan #3 👀";

            quizQuestion.innerHTML =
                "Kalau aku ngajak kamu pergi, kira-kira aku paling pengen pergi ke mana? 👀";

            quizOptions.innerHTML = `

                <button class="quizOption" data-answer="A">
                    A. Jalan-jalan sama kamu 🫵
                </button>

                <button class="quizOption" data-answer="B">
                    B. Rumah Bubul 🐱
                </button>

                <button class="quizOption" data-answer="C">
                    C. Kedai Mie Ayam 🍜
                </button>

            `;

            quizMessage.innerHTML = "";

            quizNext.innerHTML =
                "Lanjut → 🫶";

            quizNext.classList.add("hidden");

        }


        // ==================================
        // RONDE 3 → PASSWORD
        // ==================================

        else if (currentQuiz === 3) {

            quizScreen.classList.add("hidden");

            splash.classList.add("hidden");

            questionScreen.classList.add("hidden");

            opening.classList.add("hidden");

            login.classList.remove("hidden");

            login.classList.add("fade");

        }

    });

  }
