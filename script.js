function darkMode() {
    
    //const navLinks = document.querySelectorAll("nav a");
    
    
    document.body.classList.toggle("darkMode");
    /*
    navLinks.forEach(link => {
        if (document.body.classList.contains("darkMode")) {
            link.style.color = "pink";
        } else {
            link.style.color = "rgb(155, 255, 200)";
        }
    });
    */
     
}

const translations = {
    en: {
        headerText: "Aidan Miller",
        mainText: "Computer Science Student, Web Developer, Researcher",
        contactText: "Contact: aidanm1002@gmail.com",
        projTitleText: "My Projects",
        jnavText1: "日本語",
        jnavText2: "日本語",
        proj1HText: "Music Recommendation System",
        proj1PText: "Uses data from other users in the system to give artist recommendations",
        homeText: "Home",
        contactNavText: "Contact"

    },
    ja: {
        headerText: "ミラー　栄典",
        mainText: "情報工学学生、Web開発者、研究員",
        contactText: "連絡先: aidanm1002@gmail.com",
        projTitleText: "プロジェクト",
        jnavText1: "English",
        jnavText2: "English",
        proj1HText: "音楽推薦システム",
        proj1PText: "システム内の他のユーザーのデータをベースにアーティストを推薦",
        homeText: "ホーム",
        contactNavText: "連絡先"
    }
};

let currentLanguage = "en";  

function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "ja" : "en";  

    document.getElementById("headerText").textContent = translations[currentLanguage].headerText;
    document.getElementById("mainText").textContent = translations[currentLanguage].mainText;
    document.getElementById("contactText").textContent = translations[currentLanguage].contactText;
    document.getElementById("projTitleText").textContent = translations[currentLanguage].projTitleText;
    document.getElementById("jnavText1").textContent = translations[currentLanguage].jnavText1;
    document.getElementById("jnavText2").textContent = translations[currentLanguage].jnavText2;
    document.getElementById("proj1HText").textContent = translations[currentLanguage].proj1HText;
    document.getElementById("proj1PText").textContent = translations[currentLanguage].proj1PText;
    document.getElementById("homeText").textContent = translations[currentLanguage].homeText;
    document.getElementById("contactNavText").textContent = translations[currentLanguage].contactNavText;
}

function redirectToMusicRecommeder() {
    window.location.href = "https://github.com/aidanm20/music-recommender";
}

function redirectToGithub() {
    window.location.href = "https://github.com/aidanm20";
}

function redirectToLink() {
    window.location.href = "https://www.linkedin.com/in/aidan-miller-2b29a5335/";
}

function redirectToResume() {
    window.location.href = "https://docs.google.com/document/d/1FYDb-63gfBENl-tSKAZ3qcyTEexIh_Y0D_L8erFzZP0/edit?usp=sharing";
}
