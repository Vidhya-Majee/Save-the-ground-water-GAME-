// Check unlocked levels in localStorage
document.addEventListener("DOMContentLoaded", function () {
    let unlockedLevels = JSON.parse(localStorage.getItem("unlockedLevels")) || ["rainwater"]; // First level unlocked

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let option = card.getAttribute("onclick")?.match(/'([^']+)'/)?.[1]; // Extract level name
        let button = card.querySelector(".choose-btn");

        if (!unlockedLevels.includes(option)) {
            card.classList.add("locked"); // Apply locked style
            button.innerText = "LOCKED";
            button.disabled = true;
        }
    });
});

// Function to redirect & unlock the next level
function chooseOption(option) {
    let gamePages = {
        "rainwater": "../WaterConservationGame/index.html",
        "extract_groundwater": "../surplus.html",
        "more_groundwater": "filter_water.html",
        "do_nothing": "micro_irrigation.html"
    };

    if (gamePages[option]) {
        window.location.href = gamePages[option];

        // Unlock the next level
        let unlockedLevels = JSON.parse(localStorage.getItem("unlockedLevels")) || ["rainwater"];
        let levelOrder = ["rainwater", "extract_groundwater", "more_groundwater", "do_nothing"];
        let currentIndex = levelOrder.indexOf(option);

        if (currentIndex !== -1 && currentIndex < levelOrder.length - 1) {
            let nextLevel = levelOrder[currentIndex + 1];
            if (!unlockedLevels.includes(nextLevel)) {
                unlockedLevels.push(nextLevel);
                localStorage.setItem("unlockedLevels", JSON.stringify(unlockedLevels));
            }
        }
    }
}

function gotodrought() {
    chooseOption('rainwater'); 
    // Ensure the first level starts properly
}

function gotodrought() {
    chooseOption('extract_groundwater'); 
     // Ensure the first level starts properly
 }