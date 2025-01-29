document.getElementById("disg-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let results = { D: 0, I: 0, S: 0, G: 0 };
    let allQuestionsValid = true;

    // Loop durch jede Frage und überprüfe die Antworten
    for (let i = 1; i <= 5; i++) {
        let selectedOptions = document.querySelectorAll(`input[name="q${i}"]:checked`);
        
        // Sicherstellen, dass genau 2 Antworten ausgewählt wurden
        if (selectedOptions.length !== 2) {
            allQuestionsValid = false;
            break;
        }

        // Eine Antwort wird mit +2 (am meisten) und eine mit +1 (am wenigsten) gewichtet
        results[selectedOptions[0].value] += 2;
        results[selectedOptions[1].value] += 1;
    }

    if (!allQuestionsValid) {
        alert("Bitte wählen Sie für jede Frage genau eine Antwort, die am meisten, und eine, die am wenigsten zutrifft.");
        return;
    }

    // Berechnung des höchsten Typs
    let dominantType = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);

    let typeNames = { D: "Dominant", I: "Initiativ", S: "Stetig", G: "Gewissenhaft" };

    document.getElementById("result").innerHTML = `Dein dominanter Typ ist: <strong>${typeNames[dominantType]}</strong>`;
});
