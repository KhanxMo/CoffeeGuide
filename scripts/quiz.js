$(document).ready(function() {

    // When the submit quiz button is clicked. 
    $("#submit-quiz").on("click", function(event) {
        event.preventDefault();
        let score = 0; // Keeping track of score using int. 
        const correctAnswers = {
            q1: 'A',
            q2: 'C',
            q3: 'B',
            q4: 'B',
            q5: 'C',
            q6: 'C',
            q7: 'B',
            q8: 'B',
            q9: 'C',
            q10: 'D',
        };

        // Check the answers and calculate the score
        $.each(correctAnswers, function(question, answer) {
            let userAnswer = $(`input[name=${question}]:checked`).val();
            if (userAnswer === answer) {
                score++;
            }
        });

        // Display the score
        $("#quiz-result").html(`<h3>Your score: ${score} out of ${Object.keys(correctAnswers).length}</h3>`);
    });
});