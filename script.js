// Global variables
var hasKey = false;
var hasResume = false;
var hasDiary = false;
var diaryRead = false;

// Function to pick up the key
function pickupKey() {
    hasKey = true;
    document.getElementById("game-container").innerHTML = "<p>You picked up the key.</p><p>What do you want to do?</p><button onclick='openDoor()'>Open the door</button>";
}

// Function to open the door
function openDoor() {
    if (hasKey) {
        document.getElementById("game-container").innerHTML = "<p>You unlocked the door and entered the next room.</p><p>What do you want to do?</p><button onclick='checkDesk()'>Check the desk</button><button onclick='checkComputer()'>Check the computer</button>";
    } else {
        document.getElementById("game-container").innerHTML = "<p>You need the key to unlock the door.</p><p>What do you want to do?</p><button onclick='pickupKey()'>Pick up the key</button>";
    }
}

// Function to check the desk
function checkDesk() {
    if (hasResume && hasDiary) {
        document.getElementById("game-container").innerHTML = "<p>You've already checked the desk and found a resume and a diary.</p><p>What do you want to do?</p><button onclick='checkComputer()'>Check the computer</button>";
    } else if (hasResume && !hasDiary) {
        hasDiary = true;
        document.getElementById("game-container").innerHTML = "<p>You found a diary in the desk drawer.</p><p>What do you want to do?</p><button onclick='readDiary()'>Read the diary</button><button onclick='checkComputer()'>Check the computer</button>";
    } else {
        hasResume = true;
        document.getElementById("game-container").innerHTML = "<p>You found a resume on the desk.</p><p>What do you want to do?</p><button onclick='checkDesk()'>Check the desk again</button><button onclick='checkComputer()'>Check the computer</button>";
    }
}

// Function to read the diary
function readDiary() {
    diaryRead = true;
    document.getElementById("game-container").innerHTML = "<p>You read the diary and learned some interesting facts about the author.</p><p>What do you want to do?</p><button onclick='checkDesk()'>Check the desk</button><button onclick='checkComputer()'>Check the computer</button>";
}

// Function to check the computer
function checkComputer()
