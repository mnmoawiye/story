// Story structure with paths and endings
const story = {
    scene1: {
        text: `You are born into a world where magic and futuristic technology shape civilization. However, peace is a distant dream—two mighty empires are locked in a relentless war, each vying for supremacy. The land is fractured, with cities teetering on the edge of destruction. 

        As you come of age, your heart beats with ambition, but your future is uncertain. The empire that controls the magic of the arcane or the power of technology will shape the world. 

        You must choose your path: Will you embrace the arcane arts and wield magic as a Mage, bending reality to your will? Or will you pursue knowledge and innovation as an Engineer, using science to forge powerful weapons and machines that could turn the tide of war?

        The choice is yours, but remember, each decision comes with its own destiny. Your actions will have consequences. What will you become in this world of magic and machines?`,
        choices: ["Become a Mage", "Become an Engineer"],
        next: ["magePath", "engineerPath"],
        image: "start.jpg"
    },
    magePath: {
        text: "You have chosen the path of the Mage. Do you wish to refine your abilities at a prestigious mage academy, where the brightest minds in the empire are trained in ancient and forbidden spells? Or will you decide to find your own way, seeking knowledge through hidden paths and ancient tomes?",
        choices: ["Yes, I will attend mage school.", "No, I will forge my own path."],
        next: ["mageSchool", "mageNoSchool"],
        image: "mage.jpg"
    },
    mageSchool: {
        text: "At the mage academy, you are surrounded by powerful mages, each mastering their unique discipline. The teachings are harsh but enlightening. How long will you dedicate yourself to this journey? Will you take the time to refine your skills or seek quicker power?",
        choices: ["2 years", "4 years"],
        next: ["mageEnding1", "mageEnding2"],
        image: "mage-school.jpg"
    },
    mageNoSchool: {
        text: "Without the formal training of a school, you wander the world, looking for secrets hidden in ancient ruins and forgotten libraries. Some might see you as a rogue, others as a prodigy. Will you choose to enlist in the war as a battle mage, wielding powerful spells to aid your empire? Or will you seek another path?",
        choices: ["Yes, I will join the war.", "No, I will seek another fate."],
        next: ["mageEnding3", "mageEnding4"],
        image: "mage-war.jpg"
    },
    engineerPath: {
        text: "You have chosen the path of the Engineer, where logic and invention are your weapons. The academy is renowned for producing brilliant minds who revolutionize warfare with advanced machines and technology. Do you wish to attend a prestigious school to become one of these engineers, or do you prefer to explore the world and learn at your own pace?",
        choices: ["Yes, I will go to school.", "No, I will take a different path."],
        next: ["engineerSchool", "engineerNoSchool"],
        image: "engineer.jpg"
    },
    engineerSchool: {
        text: "The academy teaches you how to engineer advanced weapons, machines, and devices. The education is rigorous, but you find yourself growing faster than you ever imagined. Will you choose to study for two years and gain a solid foundation, or will you push yourself for four years to master the most cutting-edge technologies?",
        choices: ["2 years", "4 years"],
        next: ["engineerEnding1", "engineerEnding2"],
        image: "engineer-school.jpg"
    },
    engineerNoSchool: {
        text: "With your natural ingenuity, you begin to forge your own way, creating machines and weapons with salvaged parts. Your inventions catch the eye of warlords seeking powerful technology. Will you join the war, aiding your empire with devastating weaponry? Or will you find another way to survive in a world of chaos?",
        choices: ["Yes, I will enlist.", "No, I will find another way to survive."],
        next: ["engineerEnding3", "engineerEnding4"],
        image: "engineer-war.jpg"
    },
    mageEnding1: { text: "{name}, after two years of study, you are a competent mage, but nothing truly remarkable. Your magic is useful, yet you remain a small figure in the world of powerful mages.", choices: [], image: "ending1.jpg" },
    mageEnding2: { text: "{name}, your mastery of magic over the course of four years earns you fame, making you one of the most renowned mages in the empire. Your power is unparalleled, and your name echoes in the halls of magic.", choices: [], image: "ending2.jpg" },
    mageEnding3: { text: "{name}, war tempers your skills, and you rise to become the most powerful mage in the battlefield. Your spells reshape the world, and you are feared by all.", choices: [], image: "ending3.jpg" },
    mageEnding4: { text: "{name}, with no formal training, you fade into obscurity, your talents left untapped as the world moves on without you.", choices: [], image: "ending4.jpg" },
    engineerEnding1: { text: "{name}, after two years of study, you secure a stable job with decent pay. It's not glamorous, but you live a comfortable life.", choices: [], image: "ending5.jpg" },
    engineerEnding2: { text: "{name}, after four years of rigorous study, you become one of the leading scientists of your age. Your inventions are groundbreaking, and you reshape the future of warfare and technology.", choices: [], image: "ending6.jpg" },
    engineerEnding3: { text: "{name}, you become a legendary warrior, wielding advanced technology with deadly precision. Your creations are feared by your enemies, and you become a hero to your people.", choices: [], image: "ending7.jpg" },
    engineerEnding4: { text: "{name}, without education or military service, you spend your life working miserably in a factory. Your dreams fade as you toil away in obscurity.", choices: [], image: "ending8.jpg" }
};

// DOM elements
const storyText = document.getElementById("story-text");
const storyImage = document.getElementById("story-image");
const choice1Button = document.getElementById("choice1");
const choice2Button = document.getElementById("choice2");
const nameContainer = document.getElementById("name-container");
const storyContainer = document.getElementById("story-container");

// Variable to store user's name
let userName = "";

// Function to start the game when the user enters their name
document.getElementById("start-button").onclick = function () {
    userName = document.getElementById("name-input").value;
    if (userName.trim() !== "") {
        nameContainer.style.display = "none";
        storyContainer.style.display = "block";
        updateStory("scene1"); // Starts the story once the name is provided
    } else {
        alert("Please enter your name to start the story.");
    }
};

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
