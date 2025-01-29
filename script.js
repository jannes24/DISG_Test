document.getElementById("testForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Initialisiere Zähler für jeden Typ
    let scores = { D: 0, I: 0, S: 0, G: 0 };

    // Funktion zur Auswertung jedes Items
    function evaluateItem(itemBestName, itemWorstName) {
        let itemBest = document.querySelector(`input[name="${itemBestName}"]:checked`);
        let itemWorst = document.querySelector(`input[name="${itemWorstName}"]:checked`);
        
        // Punktvergabe für die beste Antwort
        if (itemBest) {
            if (itemBest.value === "D") scores.D += 5;
            if (itemBest.value === "I") scores.I += 5;
            if (itemBest.value === "S") scores.S += 5;
            if (itemBest.value === "G") scores.G += 5;
        }

        // Punktvergabe für die schlechteste Antwort
        if (itemWorst) {
            if (itemWorst.value === "D") scores.D -= 5;
            if (itemWorst.value === "I") scores.I -= 5;
            if (itemWorst.value === "S") scores.S -= 5;
            if (itemWorst.value === "G") scores.G -= 5;
        }
    }

    // Bewertung der 5 Items
    evaluateItem("item1_best", "item1_worst");
    evaluateItem("item2_best", "item2_worst");
    evaluateItem("item3_best", "item3_worst");
    evaluateItem("item4_best", "item4_worst");
    evaluateItem("item5_best", "item5_worst");

    // Berechnung des höchsten Scores
    let maxScore = Math.max(scores.D, scores.I, scores.S, scores.G);
    let resultType = Object.keys(scores).find(key => scores[key] === maxScore);

    // Ausgabe des Ergebnisses
    alert("Dein DISG-Typ ist: " + resultType);
});
