 // 1. Create an array containing your strings
        const textOptions = [
            "Frog enjoyer",
            "OLD TECH RULEz",
            "Win95 Coffee table",
            "He just might beFauxghi!",
            "Horrible monsters",
            "Coilguns are cool",
            "Bones! Bones! Bones!",
            "Pretty Flyyy",
            "Play Lunacid, its good",
            "Play Abiotic Factor"
        ];

        // 2. Wrap the logic in a function
        function displayRandomText() {
            // Generate a random index based on the array length
            const randomIndex = Math.floor(Math.random() * textOptions.length);
            
            // Select the target HTML element
            const textElement = document.getElementById("RandomText");
            
            // Update its text content
            textElement.textContent = textOptions[randomIndex];
        }

        // 3. Run the function automatically as soon as the page loads
        document.addEventListener("DOMContentLoaded", displayRandomText);