 const START_TIME = 15 * 60;

    let totalSeconds = START_TIME;
    let interval = null;
    let running = false;

    const timerDisplay = document.getElementById("timer");
    const mainBtn = document.getElementById("LeyakButton");
    const alarmSound = document.getElementById("alarmSound");

    function updateDisplay() {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      timerDisplay.textContent =
        `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    function startAndReset() {
      clearInterval(interval);
      totalSeconds = START_TIME;
      updateDisplay();

      alarmSound.pause();
      alarmSound.currentTime = 0;

      running = true;
      mainBtn.classList.remove("paused");

      interval = setInterval(tick, 1000);
    }

    function togglePause() {
      if (!interval) return;

      if (running) {
        clearInterval(interval);
        running = false;
        mainBtn.classList.add("paused");
      } else {
        running = true;
        mainBtn.classList.remove("paused");
        interval = setInterval(tick, 1000);
      }
    }

    function tick() {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateDisplay();
      } else {
        clearInterval(interval);
        running = false;
        alarmSound.currentTime = 0;
        alarmSound.play();
      }
    }

    // Left click: reset + start
    mainBtn.addEventListener("click", (e) => {
      e.preventDefault();
      startAndReset();
    });

    // Right click: pause / unpause
    mainBtn.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      togglePause();
    });

    updateDisplay();