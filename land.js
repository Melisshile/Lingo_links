const words = [
    { text: "Welcome", color: "blue" },
    { text: "Hello", color: "green" },
    { text: "Bonjour", color: "purple" },
    { text: "Dumela", color: "orange" },
    { text: "Thobela", color: "red" },
    { text: "Heita", color: "brown" },
    { text: "Ciao", color: "pink" },
    { text: "Exe", color: "cyan" },
    { text: "Ola", color: "magenta" },
];

const wordDisplay = document.getElementById("word-display");
const loading = document.getElementById("loading");
const buttons = document.getElementById("Ready");

let index = 0;

function showWords() {
    // Ensure buttons and loading elements are hidden initially
    buttons.classList.add("hidden");
    loading.classList.add("hidden");

    if (index < words.length) {
        wordDisplay.textContent = words[index].text;
        wordDisplay.style.color = words[index].color;
        index++;
        setTimeout(showWords, 4000);
    } else {
        wordDisplay.parentElement.classList.add("hidden");
        loading.classList.remove("hidden");
        setTimeout(() => {
            loading.classList.add("hidden");
            buttons.classList.remove("hidden");
        }, 4000);
    }
}

// Start the word display sequence
showWords();


////////////////////////////////////////////////////////////////////////////////////////////

