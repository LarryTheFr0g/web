setTimeout(() => {
	
    let animationEnabled = true;

    const dvdicon = `
<span class="m_8d3afb97 mantine-ActionIcon-icon">
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <g transform="scale(0.85)" transform-origin="center">
        <circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-width="1.92" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="24" cy="24" r="4.9949" fill="none" stroke="currentColor" stroke-width="1.92" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 2.5V16.039m0 15.744V45.5" fill="none" stroke="currentColor" stroke-width="1.92"/>
        <path d="M11.35 6.6153l7.947 10.921m9.2959 12.775L36.65 41.3843" fill="none" stroke="currentColor" stroke-width="1.92"/>
        <path d="M6.6873 11.252L17.63 19.31m12.708 9.3575l10.975 8.0814" fill="none" stroke="currentColor" stroke-width="1.92"/>
        <circle cx="24" cy="24" r="7.9333" fill="none" stroke="currentColor" stroke-width="1.92"/>

        <line
            id="disc-slash"
            x1="10"
            y1="38"
            x2="38"
            y2="10"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            style="display:none"/>
    </g>
</svg>
</span>`;

    const button = document.createElement("button");
    button.type = "button";
    button.id = "disc-button";
    button.className =
        "mantine-focus-never mantine-active fs-action-icon-module-root m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root";

    button.style.cssText =
        "--ai-size: var(--ai-size-sm); --ai-bg: transparent; --ai-hover: var(--mantine-color-default-hover); --ai-color: inherit; color: inherit;";

    button.innerHTML = dvdicon;

    const slash = button.querySelector("#disc-slash");

    const controls = document.querySelector(
        '.mantine-Group-root[style*="--group-justify: flex-end"]'
    );

    if (controls) {
        controls.appendChild(button);
    }

    const circle = document.querySelector(".fs-player-image-module-container");

    if (!circle) return;

    let currentAngle = 0;
    let currentSpeed = 0;
    let baseSpeed = 0;
    let boostSpeed = 0;

    const forwardBtn = [...document.querySelectorAll(".mantine-Group-root button")]
        .find(btn => btn.querySelector('polygon[points="5 4 15 12 5 20 5 4"]'));

    const backBtn = [...document.querySelectorAll(".mantine-Group-root button")]
        .find(btn => btn.querySelector('polygon[points="19 20 9 12 19 4 19 20"]'));

    button.addEventListener("click", () => {
		currentAngle = 0;
        animationEnabled = !animationEnabled;
		

        document.body.classList.toggle(
            "disable-disc-mask",
            !animationEnabled
        );

        slash.style.display = animationEnabled ? "none" : "block";

        if (!animationEnabled) {
            currentSpeed = 0;
            boostSpeed = 0;
            circle.style.transform = "rotate(0deg)";
        }
    });

    function spin() {
        if (animationEnabled) {
            currentSpeed += ((baseSpeed + boostSpeed) - currentSpeed) * 0.05;

            currentAngle += currentSpeed;

            if (currentAngle >= 360) currentAngle -= 360;
            if (currentAngle < 0) currentAngle += 360;

            circle.style.transform = `rotate(${currentAngle}deg)`;
        }

        requestAnimationFrame(spin);
    }

    spin();

    document.addEventListener("click", e => {
        const btn = e.target.closest("button");

        if (btn === forwardBtn) {
            boostSpeed = 10;
            setTimeout(() => boostSpeed = 0, 300);
        }

        if (btn === backBtn) {
            boostSpeed = -15;
            setTimeout(() => boostSpeed = 0, 300);
        }
    });

    setInterval(() => {
        baseSpeed = document.querySelector(
            '.mantine-Group-root button path[d^="M6 5H8V19H6V5Z"]'
        ) ? 1 : 0;
    }, 100);
}, 10);