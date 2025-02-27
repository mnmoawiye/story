<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Story</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }
        #story-container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            border: 2px solid black;
            border-radius: 10px;
        }
        .choice-btn {
            display: block;
            margin: 10px auto;
            padding: 10px;
            width: 80%;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <div id="story-container">
        <h1>Interactive Story</h1>
        <p id="story-text">Loading story...</p>
        <button id="choice1" class="choice-btn" style="display: none;"></button>
        <button id="choice2" class="choice-btn" style="display: none;"></button>
    </div>

    <script>
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

        const storyText = document.getElementById("story-text");
        const choice1Button = document.getElementById("choice1");
        const choice2Button = document.getElementById("choice2");

        function updateStory(scene) {
            let currentScene = story[scene];
            storyText.textContent = currentScene.text;

            if (currentScene.choices.length > 0) {
                choice1Button.textContent = currentScene.choices[0];
                choice2Button.textContent = currentScene.choices[1];
                choice1Button.onclick = () => updateStory(currentScene.next[0]);
                choice2Button.onclick = () => updateStory(currentScene.next[1]);

                choice1Button.style.display = "block";
                choice2Button.style.display = "block";
            } else {
                choice1Button.style.display = "none";
                choice2Button.style.display = "none";
            }
        }

        // Start the game
        updateStory("scene1");
    </script>

</body>
</html>
