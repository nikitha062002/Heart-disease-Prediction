document.addEventListener('DOMContentLoaded', () => {
    const predictButton = document.querySelector('.predict-btn');
    
    predictButton.addEventListener('click', () => {
        // Redirect to the predict.html page
        window.location.href = 'predict.html';
    });
});
