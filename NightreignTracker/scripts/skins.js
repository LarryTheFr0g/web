class Skin {
    constructor(name, owner, iconUrl) {
        this.name = name;
        this.owner = owner;
        this.iconUrl = iconUrl;
    }

    createElement(characterName) {
        const li = document.createElement("li");
        li.className = "list_item";

        const a = document.createElement("a");
        a.className = "item_entry";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "item_checkbox";
        checkbox.setAttribute("aria-label", `Mark ${this.name} as collected`);

        checkbox.checked = Skin.loadCollectedState(characterName, this.name);

        checkbox.addEventListener("change", () => {
            Skin.saveCollectedState(characterName, this.name, checkbox.checked);
        });

        const spanIcon = document.createElement("span");
        spanIcon.className = "SkinIcon";

        const img = document.createElement("img");
        img.className = "SkinImg"
        img.src = this.iconUrl;
        img.alt = this.name;

        const spanText = document.createElement("span");
        spanText.className = "text";
        spanText.textContent = this.name;

        a.appendChild(checkbox);
        a.appendChild(spanIcon);
        spanIcon.appendChild(img);
        a.appendChild(spanText);

        li.appendChild(a);

        return li;
    }


    static loadCollectedState(characterName, skinName) {
        const saved = localStorage.getItem(`collectedSkins_${characterName}`);
        if (!saved) return false;
        const collectedSkins = JSON.parse(saved);
        return collectedSkins.includes(skinName);
    }

    static saveCollectedState(characterName, skinName, isCollected) {
        let collectedSkins = JSON.parse(localStorage.getItem(`collectedSkins_${characterName}`)) || [];
        if (isCollected) {
            if (!collectedSkins.includes(skinName)) {
                collectedSkins.push(skinName);
            }
        } else {
            collectedSkins = collectedSkins.filter(name => name !== skinName);
        }
        localStorage.setItem(`collectedSkins_${characterName}`, JSON.stringify(collectedSkins));
    }
}

const skins = [
    new Skin("Dawn", "Wylder", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/wylder-dawn-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Darkness", "Wylder", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/wylder-darkness-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Remembrance", "Wylder", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/wylder-remembrance-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Abysswalker", "Wylder", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/wylder-abysswalker-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Lion Knight", "Wylder", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/wylder-lion-knight-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Dawn", "Guardian", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/guardian-dawn-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Darkness", "Guardian", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/guardian-darkness-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Remembrance", "Guardian", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/guardian-remembrance-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Sunlight Knight", "Guardian", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/guardian-sunlight-knight-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Wayfarer", "Guardian", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/guardian-wayfarer-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Dawn", "Ironeye", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/ironeye-dawn-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Darkness", "Ironeye", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/ironeye-darkness-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Remembrance", "Ironeye", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/ironeye-remembrance-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Ringfinger", "Ironeye", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/ironeye-ringfinger-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Sellsword", "Ironeye", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/ironeye-sellsword-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Dawn", "Duchess", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/duchess-dawn-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Darkness", "Duchess", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/duchess-darkness-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Remembrance", "Duchess", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/duchess-remembrance-garb2-200px-nightreign-wiki-guide.png"),
    new Skin("Black Leather", "Duchess", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/duchess-black-leather-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Wrath", "Duchess", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/duchess-wraith-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Dawn", "Raider", "https://eldenringnightreign.wiki.fextralife.com/file/XElden-Ring-Nightreign/raider-dawn-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Darkness", "Raider", "https://eldenringnightreign.wiki.fextralife.com/file/XElden-Ring-Nightreign/raider-darkness-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Remembrance", "Raider", "https://eldenringnightreign.wiki.fextralife.com/file/XElden-Ring-Nightreign/raider-remembrance-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Rock-like", "Raider", "https://eldenringnightreign.wiki.fextralife.com/file/XElden-Ring-Nightreign/raider-rock-like-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Catarina", "Raider", "https://eldenringnightreign.wiki.fextralife.com/file/XElden-Ring-Nightreign/raider-catarina-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Dawn", "Revenant", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/revenant-dawn-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Darkness", "Revenant", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/revenant-darkness-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Remembrance", "Revenant", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/revenant-remembrance-garb-200px-nightreign-wiki-guide.png"),
    new Skin("The Sister in the Painting", "Revenant", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/revenant-the-sister-in-the-painting-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Dragon School", "Revenant", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/revenant-dragon-school-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Dawn", "Recluse", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/recluse-dawn-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Darkness", "Recluse", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/recluse-darkness-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Remembrance", "Recluse", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/recluse-remembrance-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Heretic Sorcerer", "Recluse", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/recluse-heretic-sorcerer-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Emerald Fate", "Recluse", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/recluse-emerald-fate-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Dawn", "Executor", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/executor-dawn-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Darkness", "Executor", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/executor-darkness-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Remembrance", "Executor", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/executor-remembrance-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Thorns", "Executor", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/executor-thorns-garb-200px-nightreign-wiki-guide.png"),
    new Skin("Sable Church", "Executor", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/executor-sable-church-garb-200px-nightreign-wiki-guide.png"),
];

const Slist = document.querySelector("#skinList");

