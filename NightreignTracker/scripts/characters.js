let selectedCharacter = null;
class Nightfarer {
    constructor(name, iconUrl, backgroundUrl) {
        this.name = name;
        this.iconUrl = iconUrl;
        this.backgroundUrl = backgroundUrl;
    }

    createElement() {

        const li = document.createElement("li");
        li.className = "sidebar__item";

        const a = document.createElement("a");
        a.className = "sidebar__link";
        a.href = "#";
        a.setAttribute("data-tooltip", this.name);

        const spanIcon = document.createElement("span");
        spanIcon.className = "icon";

        const img = document.createElement("img");
        img.src = this.iconUrl;
        img.alt = this.name;

        const spanText = document.createElement("span");
        spanText.className = "text";
        spanText.textContent = this.name;

        spanIcon.appendChild(img);
        a.appendChild(spanIcon);
        a.appendChild(spanText);
        li.appendChild(a);


        a.addEventListener("click", (e) => {
            e.preventDefault();
            selectCharacter(this.name, li);
        });

        return li;
    }

}

const characters = [
    new Nightfarer("Wylder", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/wylder-class-icon-elden-ring-nightreign-wiki-guide.png", "https://p325k7wa.twic.pics/high/elden-ring/elden-ring-nightreign/04-character-gallery/02-Wide/NEW/WYLDER-render.png?twic=v1/resize=950/step=10/quality=80"),
    new Nightfarer("Guardian", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/guardian-class-icon-elden-ring-nightreign-wiki-guide.png", "https://p325k7wa.twic.pics/high/elden-ring/elden-ring-nightreign/04-character-gallery/02-Wide/NEW/GUARDIAN-render.png?twic=v1/resize=950/step=10/quality=80"),
    new Nightfarer("Ironeye", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/ironeye-class-icon-elden-ring-nightreign-wiki-guide.png", "https://p325k7wa.twic.pics/high/elden-ring/elden-ring-nightreign/04-character-gallery/02-Wide/ironeye-wide.png?twic=v1/resize=950/step=10/quality=80"),
    new Nightfarer("Duchess", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/duchess-class-icon-elden-ring-nightreign-wiki-guide.png", "https://p325k7wa.twic.pics/high/elden-ring/elden-ring-nightreign/04-character-gallery/02-Wide/NEW/DUCHESS-render.png?twic=v1/resize=950/step=10/quality=80"),
    new Nightfarer("Raider", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/raider-class-icon-elden-ring-nightreign-wiki-guide.png", "https://p325k7wa.twic.pics/high/elden-ring/elden-ring-nightreign/04-character-gallery/02-Wide/raider-wide.png?twic=v1/resize=950/step=10/quality=80"),
    new Nightfarer("Revenant", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/revenant-class-icon-elden-ring-nightreign-wiki-guide.png", "https://p325k7wa.twic.pics/high/elden-ring/elden-ring-nightreign/04-character-gallery/02-Wide/revenant-wide.png?twic=v1/resize=950/step=10/quality=80"),
    new Nightfarer("Recluse", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/recluse-class-icon-elden-ring-nightreign-wiki-guide.png", "https://p325k7wa.twic.pics/high/elden-ring/elden-ring-nightreign/04-character-gallery/02-Wide/NEW/DUCHESS-render-1.png?twic=v1/resize=950/step=10/quality=80"),
    new Nightfarer("Executor", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/executor-class-icon-elden-ring-nightreign-wiki-guide.png", "https://p325k7wa.twic.pics/high/elden-ring/elden-ring-nightreign/04-character-gallery/02-Wide/executor-wide.png?twic=v1/resize=950/step=10/quality=80"),
];

const list = document.querySelector(".sidebar__list.list--primary");

function updateBackgroundForCharacter(characterName) {
    const backgroundDiv = document.querySelector(".background-character-portrait");
    const character = characters.find(c => c.name === characterName);

    if (character && backgroundDiv) {
        backgroundDiv.innerHTML = "";
    }
    const bgImg = document.createElement("img");
    bgImg.src = character.backgroundUrl;
    bgImg.alt = `${character.name} Background`;
    bgImg.className = `${character.name}-background`;
    backgroundDiv.appendChild(bgImg);
}

function updateBossesForCharacter(characterName) {

    const Blist = document.querySelector("#bossList");
    Blist.innerHTML = "";



    bosses.forEach(boss => {
        Blist.appendChild(boss.createElement(characterName));
    });
}
function updateRelicsForCharacter(characterName) {

    const Rlist = document.querySelector("#relicList");
    Rlist.innerHTML = "";

    relics.forEach(relic => {
        if (relic.owner === selectedCharacter) {
            const relicElement = relic.createElement(selectedCharacter);
            Rlist.appendChild(relicElement);
        }
    });



}
function updateSkinsForCharacter(characterName) {

    const Rlist = document.querySelector("#skinList");
    Rlist.innerHTML = "";

    skins.forEach(skin => {
        if (skin.owner === selectedCharacter) {
            const skinElement = skin.createElement(selectedCharacter);
            Slist.appendChild(skinElement);
        }
    });



}
function selectCharacter(name, liElement) {

    document.querySelectorAll(".sidebar__link.selected").forEach(el => {
        el.classList.remove("selected");
    });


    liElement.querySelector(".sidebar__link").classList.add("selected");

    selectedCharacter = name;
    localStorage.setItem("selectedNightfarer", selectedCharacter);

    updateSkinsForCharacter(selectedCharacter)
    updateBackgroundForCharacter(selectedCharacter);
    updateBossesForCharacter(selectedCharacter);
    updateRelicsForCharacter(selectedCharacter);
}


characters.forEach(char => {
    list.appendChild(char.createElement());
});



const savedCharacter = localStorage.getItem("selectedNightfarer");
if (savedCharacter && characters.find(c => c.name === savedCharacter)) {
    const characterLi = [...list.children].find(li => {
        const textSpan = li.querySelector(".text");
        return textSpan && textSpan.textContent === savedCharacter;
    });
    if (characterLi) {
        selectCharacter(savedCharacter, characterLi);
    }
} else {

    if (list.children.length > 0) {
        selectCharacter(characters[0].name, list.children[0]);
    }
}

console.log(selectedCharacter);
