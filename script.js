
function chooseOption(choice) {
    let resultText = document.getElementById("result-text");

    switch (choice) {
        case 'rainwater':
            resultText.innerText = "✅ You implemented rainwater harvesting. The village's water supply improves!";
            resultText.style.color = "green";
            break;
        case 'extract_groundwater':
            resultText.innerText = "⚠️ You extracted groundwater. The village has water, but reserves are shrinking.";
            resultText.style.color = "blue";
            break;
        case 'more_groundwater':
            resultText.innerText = "⚠️ You extracted even more groundwater. The village is okay for now, but long-term sustainability is at risk!";
            resultText.style.color = "orange";
            break;
        case 'do_nothing':
            resultText.innerText = "❌ You did nothing. The drought worsens, and the villagers struggle!";
            resultText.style.color = "red";
            break;
        default:
            resultText.innerText = "";
    }
}
