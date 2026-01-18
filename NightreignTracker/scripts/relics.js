class Relic {
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

        checkbox.checked = Relic.loadCollectedState(characterName, this.name);

        checkbox.addEventListener("change", () => {
            Relic.saveCollectedState(characterName, this.name, checkbox.checked);
        });

        const spanIcon = document.createElement("span");
        spanIcon.className = "icon";

        const img = document.createElement("img");
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


    static loadCollectedState(characterName, relicName) {
        const saved = localStorage.getItem(`collectedRelics_${characterName}`);
        if (!saved) return false;
        const collectedRelics = JSON.parse(saved);
        return collectedRelics.includes(relicName);
    }

    static saveCollectedState(characterName, relicName, isCollected) {
        let collectedRelics = JSON.parse(localStorage.getItem(`collectedRelics_${characterName}`)) || [];
        if (isCollected) {
            if (!collectedRelics.includes(relicName)) {
                collectedRelics.push(relicName);
            }
        } else {
            collectedRelics = collectedRelics.filter(name => name !== relicName);
        }
        localStorage.setItem(`collectedRelics_${characterName}`, JSON.stringify(collectedRelics));
    }
}

const relics = [
    new Relic("Slate Whetstone", "Wylder", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/slate-whetstone1-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Silver Tear", "Wylder", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/silver-tear-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("The Wylder's Earring", "Wylder", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/the-wylders-earring-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Cracked Witch's Brooch", "Guardian", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/cracked-witchs-brooch-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Stone Stake", "Guardian", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/stone-stake-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Third Volume", "Guardian", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/third-volume-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Witch's Brooch", "Guardian", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/witchs-brooch-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Cracked Sealing Wax", "Ironeye", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/cracked-sealing-wax-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Edge of Order", "Ironeye", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/edge-of-order-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Blessed Iron Coin", "Duchess", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/blessed-iron-coin-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Crown Medal", "Duchess", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/crown-medal-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Golden Dew", "Duchess", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/golden-dew-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Black Claw Necklace", "Raider", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/black-claw-necklace-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Torn Braided Cord", "Raider", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/torn-braided-cord-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Besmirched Frame", "Revenant", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/besmirched-framerelic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Old Portrait", "Revenant", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/old-portrait-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Small Makeup Brush", "Revenant", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/small-makeup-brush-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Bone-Like Stone", "Recluse", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/bone-like-stone-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Vestige of Night", "Recluse", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/vestige-of-night-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Blessed Flowers", "Executor", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/blessed-flowers-relic-elden-ring-nightreign-wiki-guide.png"),
    new Relic("Golden Sprout", "Executor", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/golden-sprout-relic-elden-ring-nightreign-wiki-guide.png"),
];

const Rlist = document.querySelector("#relicList");

