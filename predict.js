document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = new FormData(this);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send data to Flask backend (replace '/predict' with your actual endpoint)
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(prediction => {
        // Handle the prediction response here
        displayPredictionResults(prediction);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function displayPredictionResults(prediction) {
    // Get a reference to the results div or create it if it doesn't exist
    let resultsDiv = document.getElementById('results');
    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.id = 'results';
        document.body.appendChild(resultsDiv); // Append results div to the body or main section
    }

    // Clear previous results
    resultsDiv.innerHTML = '';

    // Create messages based on predictions
    let message = '';

    // Assuming the prediction object contains a key indicating the prediction
    const predictionValue = Object.values(prediction)[0]; // Get the prediction from the first model

    if (predictionValue === 1) {
        message = "You have heart disease.";
    } else if (predictionValue === 0) {
        message = "You do not have heart disease.";
    } else {
        message = "There are chances of having heart disease.";
    }

    // Display the message
    resultsDiv.innerHTML = `<h2>Prediction Result:</h2><p>${message}</p>`;
}
