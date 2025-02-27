// Story data structure
const story = {
    scene1: {
        text: "You are born into a world where magic and futuristic technology shape civilization. Two mighty empires are at war.\n\nDo you choose to be a Mage or an Engineer?",
        choices: ["Mage", "Engineer"],
        next: ["magePath", "engineerPath"]
    },
    magePath: {
        text: "You have chosen the path of the Mage. Do you wish to refine your abilities at a prestigious mage academy?",
        choices: ["Yes, attend mage school.", "No, forge my own path."],
        next: ["mageSchool", "mageNoSchool"]
    },
    mageSchool: {
        text: "How long will you train at the mage school?",
        choices: ["2 years", "4 years"],
        next: ["mage2Years", "mage4Years"]
    },
    mageNoSchool: {
        text: "Will you enlist in the war as a battle mage?",
        choices: ["Yes, join the war.", "No, seek another fate."],
        next: ["mageJoinsWar", "mageAvoidsWar"]
    },
    engineerPath: {
        text: "You have chosen the path of the Engineer. Do you wish to attend a prestigious engineering school?",
        choices: ["Yes, attend school.", "No, take a different path."],
        next: ["engineerSchool", "engineerNoSchool"]
    },
    engineerSchool: {
        text: "How long will you train at engineering school?",
        choices: ["2 years", "4 years"],
        next: ["engineer2Years", "engineer4Years"]
    },
    engineerNoSchool: {
        text: "War looms. Will you join the fight using advanced weaponry?",
        choices: ["Yes, enlist.", "No, find another way to survive."],
        next: ["engineerJoinsWar", "engineerAvoidsWar"]
    },

    // Endings
    mage2Years: { text: "You become a competent mage, but nothing remarkable.", choices: [], next: [] },
    mage4Years: { text: "Your mastery of magic earns you fame, making you a renowned mage.", choices: [], next: [] },
    mageJoinsWar: { text: "You rise to become the most powerful mage in the world.", choices: [], next: [] },
    mageAvoidsWar: { text: "Without training or purpose, you fade into obscurity.", choices: [], next: [] },
    engineer2Years: { text: "You secure a stable 9-to-5 job, living a comfortable life.", choices: [], next: [] },
    engineer4Years: { text: "You become one of the empire’s leading scientists.", choices: [], next: [] },
    engineerJoinsWar: { text: "You become a legendary warrior, wielding advanced technology.", choices: [], next: [] },
    engineerAvoidsWar: { text: "You spend life working miserably in a factory, with no escape.", choices: [], next: [] }
};

// Function to run the story
function playGame(scene) {
    let currentScene = scene;
    while (true) {
        // Display the current scene text
        let choiceText = story[currentScene].text;
        console.log(choiceText);

        // If no choices remain, end the game
        if (story[currentScene].choices.length === 0) {
            alert("The End. Refresh to play again.");
            console.log("The End.");
            break;
        }

        // Show choices and get user input
        let userChoice = prompt(
            choiceText + "\n\n" +
            "1: " + story[currentScene].choices[0] + "\n" +
            "2: " + story[currentScene].choices[1]
        );

        // Process user input
        if (userChoice === "1") {
            currentScene = story[currentScene].next[0];
        } else if (userChoice === "2") {
            currentScene = story[currentScene].next[1];
        } else {
            alert("Invalid choice. Please enter 1 or 2.");
            console.log("Invalid choice.");
        }
    }
}

// Start the game
playGame("scene1");
