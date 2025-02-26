// Story structure following the branching nodes
const storyNodes = {
    start: {
        text: "You wake up in a dark forest. Two paths lie ahead...",
        image: "start.jpg",
        choices: { 
            choice1: "scene2A", 
            choice2: "scene2B" 
        }
    },
    scene2A: {
        text: "You find an old bridge. Do you cross it or go around?",
        image: "bridge.jpg",
        choices: { 
            choice1: "scene3AA", 
            choice2: "scene3AB" 
        }
    },
    scene2B: {
        text: "A cave entrance appears. Do you enter or walk past?",
        image: "cave.jpg",
        choices: { 
            choice1: "scene3BA", 
            choice2: "scene3BB" 
        }
    },
    scene3AA: {
        text: "The bridge is weak. Do you run across or turn back?",
        image: "bridge-collapse.jpg",
        choices: { 
            choice1: "ending1", 
            choice2: "scene4AAA" 
        }
    },
    scene3AB: {
        text: "You find a hidden map. Do you follow it or ignore it?",
        image: "map.jpg",
        choices: { 
            choice1: "scene4AAB", 
            choice2: "ending2" 
        }
    },
    scene3BA: {
        text: "Inside the cave, you see glowing eyes. Fight or flee?",
        image: "cave-monster.jpg",
        choices: { 
            choice1: "scene4BAA", 
            choice2: "scene4BAB" 
        }
    },
    scene3BB: {
        text: "You find a treasure chest. Do you open it or leave it?",
        image: "treasure.jpg",
        choices: { 
            choice1: "scene4BBA", 
            choice2: "ending3" 
        }
    },
    // Endings
    ending1: { text: "The bridge collapses, and you fall... The End.", image: "fall.jpg", choices: {} },
    ending2: { text: "You ignore the map and get lost forever... The End.", image: "lost.jpg", choices: {} },
    ending3: { text: "The chest is cursed! You vanish into darkness... The End.", image: "curse.jpg", choices: {} },
    scene4AAA: { text: "You barely make it across. Do you rest or keep going?", image: "forest-path.jpg", choices: { choice1: "ending4", choice2: "ending5" } },
    scene4AAB: { text: "The map leads to a door. Do you enter?", image: "door.jpg", choices: { choice1: "ending6", choice2: "ending7" } },
    scene4BAA: { text: "You fight bravely! Do you continue deeper?", image: "battle.jpg", choices: { choice1: "ending8", choice2: "ending9" } },
    scene4BAB: { text: "You run but hear footsteps behind you...", image: "chase.jpg", choices: { choice1: "ending10", choice2: "ending11" } },
    scene4BBA: { text: "Inside the chest is a golden key. Do you take it?", image: "key.jpg", choices: { choice1: "ending12", choice2: "ending13" } },
    // More endings
    ending4: { text: "You rest safely. The journey continues... The End.", image: "safe.jpg", choices: {} },
    ending5: { text: "You push forward, reaching a village... The End.", image: "village.jpg", choices: {} },
    ending6: { text: "The door hides a secret passage... The End.", image: "passage.jpg", choices: {} },
    ending7: { text: "The door is a trap! You fall into darkness... The End.", image: "trap.jpg", choices: {} },
    ending8: { text: "You become the cave's protector... The End.", image: "warrior.jpg", choices: {} },
    ending9: { text: "The cave reveals a hidden kingdom... The End.", image: "kingdom.jpg", choices: {} },
    ending10: { text: "You escape safely into the night... The End.", image: "escape.jpg", choices: {} },
    ending11: { text: "You are caught and imprisoned... The End.", image: "prison.jpg", choices: {} },
    ending12: { text: "The key unlocks an ancient power... The End.", image: "power.jpg", choices: {} },
    ending13: { text: "The key triggers a deadly trap... The End.", image: "trap2.jpg", choices: {} }
};

// Update Story
function updateStory(scene) {
    const story = storyNodes[scene];
    document.getElementById("story-text").textContent = story.text;
    document.getElementById("story-image").src = story.image;

    const choice1 = document.getElementById("choice1");
    const choice2 = document.getElementById("choice2");

    if (story.choices.choice1) {
        choice1.textContent = "Choice 1";
        choice1.onclick = () => updateStory(story.choices.choice1);
        choice2.textContent = "Choice 2";
        choice2.onclick = () => updateStory(story.choices.choice2);
    } else {
        choice1.style.display = "none";
        choice2.style.display = "none";
    }
}

// Start story
updateStory("start");
