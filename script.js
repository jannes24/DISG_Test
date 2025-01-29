document.getElementById("disg-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let results = { D: 0, I: 0, S: 0, G: 0 };

    // Loop over each question and collect selected values
    for (let i = 1; i <= 5; i++) {
        let selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            let value = selectedOption.value;
            if (value.includes("max")) {
                results[value.charAt(0)] += 2;
            } else if (value.includes("min")) {
                results[value.charAt(0)] += 1;
            }
        }
    }

    // Display the results
    let resultText = `Dein Dominanter Typ ist: ${
        Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b)
    }`;

    document.getElementById("result").innerHTML = resultText;
});
