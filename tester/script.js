const questions = [
    {
        question: "Why is it essential for companies to implement robust data protection measures?",
        answers: {
            a: "To increase social media engagement",
            b: "To improve user interface design",
            c: "To safeguard user privacy and foster trust",
            d: "To speed up website performance"
        },
        correct: "c"
    },
    {
        question: "Which of the following best describes ethical hacking?",
        answers: {
            a: "Hacking into systems without permission",
            b: "Testing systems for vulnerabilities with authorization",
            c: "Hacking for personal gain",
            d: "Hacking to steal data"
        },
        correct: "b"
    },
    {
        question: "What does GDPR stand for?",
        answers: {
            a: "Global Data Protection Regulation",
            b: "General Data Protection Regulation",
            c: "Government Data Privacy Regulation",
            d: "General Digital Protection Rights"
        },
        correct: "b"
    },
    {
        question: "Which of the following is NOT a type of malware?",
        answers: {
            a: "Virus",
            b: "Trojan",
            c: "Firewall",
            d: "Spyware"
        },
        correct: "c"
    },
    {
        question: "What is the primary goal of a firewall?",
        answers: {
            a: "To speed up internet connection",
            b: "To prevent unauthorized access to or from a private network",
            c: "To block all internet traffic",
            d: "To enhance user interface design"
        },
        correct: "b"
    },
    {
        question: "Which of the following is a common form of phishing attack?",
        answers: {
            a: "Sending fake emails to trick users into providing personal information",
            b: "Installing antivirus software",
            c: "Updating system software",
            d: "Encrypting data"
        },
        correct: "a"
    },
    {
        question: "What is the purpose of encryption in cybersecurity?",
        answers: {
            a: "To speed up internet browsing",
            b: "To protect data by converting it into a secure format",
            c: "To enhance graphic design",
            d: "To reduce file sizes"
        },
        correct: "b"
    },
    {
        question: "Which of the following is an example of social engineering?",
        answers: {
            a: "Installing a software update",
            b: "Tricking someone into revealing their password",
            c: "Backing up data to the cloud",
            d: "Running a virus scan"
        },
        correct: "b"
    },
    {
        question: "Why is continuous professional development important in IT?",
        answers: {
            a: "To stay current with evolving technologies",
            b: "To reduce working hours",
            c: "To avoid cybersecurity threats",
            d: "To increase social media followers"
        },
        correct: "a"
    },
    {
        question: "What is a VPN used for?",
        answers: {
            a: "To create a secure connection to another network over the internet",
            b: "To increase computer speed",
            c: "To block pop-up ads",
            d: "To share files between computers"
        },
        correct: "a"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("quiz");
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = ""; // Clear previous question

    questionContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <div>
            ${Object.entries(currentQuestion.answers).map(([key, value]) =>
                `<label>
                    <input type="radio" name="answer" value="${key}"> ${value}
                </label><br>`
            ).join('')}
        </div>
    `;
}

document.getElementById("submit").addEventListener("click", function () {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedbackElement = document.getElementById("result");
    feedbackElement.innerHTML = ""; // Clear previous feedback

    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestionIndex].correct) {
            score++;
            feedbackElement.innerHTML = `<span style="color: green;">Correct!</span> You answered correctly.`;
        } else {
            feedbackElement.innerHTML = `<span style="color: red;">Incorrect!</span> The correct answer was ${questions[currentQuestionIndex].correct}.`;
        }
    } else {
        alert("Please select an answer before submitting.");
        return;
    }

    currentQuestionIndex++;
    setTimeout(() => {
        feedbackElement.innerHTML = ""; // Clear feedback
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            document.getElementById("quiz").style.display = "none";
            document.getElementById("result").innerHTML += `<br>Your final score: ${score} out of ${questions.length}`;
            document.getElementById("submit").style.display = "none";
        }
    }, 2000); // Feedback lasts for 2 seconds
});

// Load the first question
loadQuestion();
