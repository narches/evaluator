document.getElementById('calculateScore').addEventListener('click', function() {
    // Initialize score
    let score = 0;
  
    // Check the fields
    const madeContact = document.getElementById('madeContact').value;
    const professionalism = document.getElementById('professionalism').value;
    const accuracy = document.getElementById('accuracy').value;
    const methodology = document.getElementById('methodology').value;
    const documentation = document.getElementById('documentation').value;
  
    // Add points based on the criteria
    if (madeContact === 'yes') {
        score += 20;
    }
    if (professionalism === 'yes') {
        score += 20;
    }
    if (accuracy === 'yes') {
        score += 20;
    }
    if (methodology === 'yes') {
        score += 20;
    }
    if (documentation === 'yes') {
        score += 20;
    }
  
    // Display the score
    const scoreResult = document.getElementById('scoreResult');
    scoreResult.textContent = `Score: ${score}%`;
});
