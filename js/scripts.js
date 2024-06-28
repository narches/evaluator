// (c) 2024 Nnachi, Joseph Otu


document.getElementById('evaluateMentor').addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve input values
    let contactedStudents = document.getElementById("contacted-students").value;
    let selfEvaluation = document.getElementById("self-evaluation").value;
    let mentorDevelopment = document.getElementById("mentor-development").value;
    let contactedTickets = document.getElementById("contacted-tickets").value;
    let rosterManagement = document.getElementById("roster-management").value;
    let documentedConversations = document.getElementById("documented-conversations").value;

    // Evaluate the result
    let result = "";

    if (selfEvaluation === "no" || documentedConversations === "no") {
        result = "Red Category: Major issues identified.";
    } else if (contactedStudents === "no" || contactedTickets === "no") {
        result = "Orange Category: Needs improvement.";
    } else if (mentorDevelopment === "no" || rosterManagement === "no") {
        result = "Yellow Category: Some training required.";
    } else if (
        selfEvaluation === "yes" &&
        contactedStudents === "yes" &&
        mentorDevelopment === "yes" &&
        contactedTickets === "yes" &&
        rosterManagement === "yes" &&
        documentedConversations === "yes"
    ) {
        result = "Blue Category: Perfect job!";
    } else if (
        selfEvaluation === "select" &&
        contactedStudents === "select" &&
        mentorDevelopment === "select" &&
        contactedTickets === "select" &&
        rosterManagement === "select" &&
        documentedConversations === "select"
    ) {
            result = "Please select an option"
    } else {
        result = "Green Category: All criteria met.";
    }

    // Display the result permanently
    document.getElementById("result").innerText = result; // Sets the text of an element with id="result"

    // Optionally, you can store the result in localStorage or sessionStorage to persist it across page refreshes
    localStorage.setItem("mentorEvaluationResult", result);
});

