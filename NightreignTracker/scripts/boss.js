class Boss {
    constructor(name, iconUrl) {
        this.name = name;
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
        checkbox.setAttribute("aria-label", `Mark ${this.name} as defeated`);

        checkbox.checked = Boss.loadDefeatedState(characterName, this.name);

        checkbox.addEventListener("change", () => {
            Boss.saveDefeatedState(characterName, this.name, checkbox.checked);
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


    static loadDefeatedState(characterName, bossName) {
        const saved = localStorage.getItem(`defeatedBosses_${characterName}`);
        if (!saved) return false;
        const defeatedBosses = JSON.parse(saved);
        return defeatedBosses.includes(bossName);
    }

    static saveDefeatedState(characterName, bossName, isDefeated) {
        let defeatedBosses = JSON.parse(localStorage.getItem(`defeatedBosses_${characterName}`)) || [];
        if (isDefeated) {
            if (!defeatedBosses.includes(bossName)) {
                defeatedBosses.push(bossName);
            }
        } else {
            defeatedBosses = defeatedBosses.filter(name => name !== bossName);
        }
        localStorage.setItem(`defeatedBosses_${characterName}`, JSON.stringify(defeatedBosses));
    }
}

const bosses = [
    new Boss("Gladius Beast of Night", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/tricephalos-expedition-elden-ring-nightreign-wiki-guide-min.png"),
    new Boss("Adel Baron of Night", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/gaping-jaw-expedition-elden-ring-nightreign-wiki-guide-min.png"),
    new Boss("Gnoster Wisdom of Night", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/sentient-pest-expedition-elden-ring-nightreign-wiki-guide-min.png"),
    new Boss("Maris Fathom of Night", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/augur-expedition-elden-ring-nightreign-wiki-guide-min.png"),
    new Boss("Libra Creature of Night", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/equilibrious-beast-expedition-elden-ring-nightreign-wiki-guide-min.png"),
    new Boss("Fulghor Champion of Nightglow", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/darkdrift-knight-expedition-elden-ring-nightreign-wiki-guide-min.png"),
    new Boss("Caligo Miasma of Night", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/fissure-in-the-fog-expedition-elden-ring-nightreign-wiki-guide-min.png"),
    new Boss("Heolstor the Nightlord", "https://eldenringnightreign.wiki.fextralife.com/file/Elden-Ring-Nightreign/night-aspect-expedition-elden-ring-nightreign-wiki-guide-min.png"),];

const Blist = document.querySelector("#bossList");




 
