// Story structure with paths and endings
const story = {
    scene1: {
        text: "You are born into a world where magic and futuristic technology shape civilization...",
        choices: ["Become a Mage", "Become an Engineer"],
        next: ["magePath", "engineerPath"],
        image: "start.jpg"
    },
    magePath: {
        text: "You have chosen the path of the Mage. Do you wish to refine your abilities at a prestigious mage academy?",
        choices: ["Yes, I will attend mage school.", "No, I will forge my own path."],
        next: ["mageSchool", "mageNoSchool"],
        image: "mage.jpg"
    },
    mageSchool: {
        text: "How long will you train?",
        choices: ["2 years", "4 years"],
        next: ["mageEnding1", "mageEnding2"],
        image: "mage-school.jpg"
    },
    mageNoSchool: {
        text: "Will you enlist in the war as a battle mage?",
        choices: ["Yes, I will join the war.", "No, I will seek another fate."],
        next: ["mageEnding3", "mageEnding4"],
        image: "mage-war.jpg"
    },
    engineerPath: {
        text: "You have chosen the path of the Engineer. Do you wish to attend a prestigious school?",
        choices: ["Yes, I will go to school.", "No, I will take a different path."],
        next: ["engineerSchool", "engineerNoSchool"],
        image: "engineer.jpg"
    },
    engineerSchool: {
        text: "How long will you study?",
        choices: ["2 years", "4 years"],
        next: ["engineerEnding1", "engineerEnding2"],
        image: "engineer-school.jpg"
    },
    engineerNoSchool: {
        text: "Will you join the war, using advanced weaponry to aid your empire?",
        choices: ["Yes, I will enlist.", "No, I will find another way to survive."],
        next: ["engineerEnding3", "engineerEnding4"],
        image: "engineer-war.jpg"
    },
    mageEnding1: { text: "{name}, you become a competent mage, but nothing remarkable.", choices: [], image: "ending1.jpg" },
    mageEnding2: { text: "{name}, your mastery of magic earns you fame, making you one of the most renowned mages.", choices: [], image: "ending2.jpg" },
    mageEnding3: { text: "{name}, war tempers your skills, and you rise to become the most powerful mage.", choices: [], image: "ending3.jpg" },
    mageEnding4: { text: "{name}, with no formal training, you fade into obscurity.", choices: [], image: "ending4.jpg" },
    engineerEnding1: { text: "{name}, you secure a stable job with decent pay.", choices: [], image: "ending5.jpg" },
    engineerEnding2: { text: "{name}, your knowledge propels you to the top, becoming a leading scientist.", choices: [], image: "ending6.jpg" },
    engineerEnding3: { text: "{name}, you become a legendary warrior, wielding advanced technology with deadly precision.", choices: [], image: "ending7.jpg" },
    engineerEnding4: { text: "{name}, without education or military service, you spend life working miserably in a factory.", choices: [], image: "ending8.jpg" }
};

// DOM elements
const storyText = document.getElementById("story-text");
const storyImage = document.getElementById("story-image");
const choice1Button = document.getElementById("choice1");
const choice2Button = document.getElementById("choice2");

// Variable to store user's name
let userName = "";

// Function to start the game and ask for the player's name
function startGame() {
    userName = prompt("What is your name?");
    if (userName) {
        updateStory("scene1"); // Starts the story once the name is provided
    } else {
        alert("You need to provide a name to continue!");
        startGame(); // Ask again if no name is provided
    }
}

// Function to update the story scene
function updateStory(scene) {
    let sceneText = story[scene].text;
    // Replace placeholder {name} with the user's name
    sceneText = sceneText.replace("{name}", userName);

    storyText.textContent = sceneText;
    storyImage.src = story[scene].image;
    
    if (story[scene].choices.length > 0) {
        choice1Button.textContent = story[scene].choices[0];
        choice2Button.textContent = story[scene].choices[1];
        choice1Button.onclick = () => updateStory(story[scene].next[0]);
        choice2Button.onclick = () => updateStory(story[scene].next[1]);
        choice1Button.style.display = "inline-block";
        choice2Button.style.display = "inline-block";
    } else {
        choice1Button.style.display = "none";
        choice2Button.style.display = "none";
    }
}

// Start game by directly asking for the name
startGame();
