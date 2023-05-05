// Global variables
// var hasKey = false;
// var hasResume = false;
// var hasDiary = false;
// var diaryRead = false;

// Function to pick up the key
// function pickupKey() {
//     hasKey = true;
//     document.getElementById("game-container").innerHTML = "<p>You picked up the key.</p><p>What do you want to do?</p><button onclick='openDoor()'>Open the door</button>";
// }

// Function to open the door
// function openDoor() {
//     if (hasKey) {
//         document.getElementById("game-container").innerHTML = "<p>You unlocked the door and entered the next room.</p><p>What do you want to do?</p><button onclick='checkDesk()'>Check the desk</button><button onclick='checkComputer()'>Check the computer</button>";
//     } else {
//         document.getElementById("game-container").innerHTML = "<p>You need the key to unlock the door.</p><p>What do you want to do?</p><button onclick='pickupKey()'>Pick up the key</button>";
//     }
// }

// Function to check the desk
// function checkDesk() {
//     if (hasResume && hasDiary) {
//         document.getElementById("game-container").innerHTML = "<p>You've already checked the desk and found a resume and a diary.</p><p>What do you want to do?</p><button onclick='checkComputer()'>Check the computer</button>";
//     } else if (hasResume && !hasDiary) {
//         hasDiary = true;
//         document.getElementById("game-container").innerHTML = "<p>You found a diary in the desk drawer.</p><p>What do you want to do?</p><button onclick='readDiary()'>Read the diary</button><button onclick='checkComputer()'>Check the computer</button>";
//     } else {
//         hasResume = true;
//         document.getElementById("game-container").innerHTML = "<p>You found a resume on the desk.</p><p>What do you want to do?</p><button onclick='checkDesk()'>Check the desk again</button><button onclick='checkComputer()'>Check the computer</button>";
//     }
// }

// Function to read the diary
// function readDiary() {
//     diaryRead = true;
//     document.getElementById("game-container").innerHTML = "<p>You read the diary and learned some interesting facts about the author.</p><p>What do you want to do?</p><button onclick='checkDesk()'>Check the desk</button><button onclick='checkComputer()'>Check the computer</button>";
// }

// Function to check the computer
// function checkComputer()











$(document).ready(function(){
  
    $("#submit").on("click", function(){
    var input = $("#input").val(); 
     $("#story").html("You wake up in a daze and look up. The sky is dark purple and there are two moons. You had fallen asleep in your own bed... on Earth. Now you are not so sure you are on the same planet. You are still in your pjs. Looking around, you can't see any people. There aren't any trees or objects of any form either. You wonder if something happened to your ears because there are absolutely no sounds around you. What do you want to do?");
    $("#option1").html("Walk North <b>(north)</b>");
    $("#option2").html("Walk South <b>(south)</b>"); 
    $("#option3").html("Wait for something to happen <b>(wait)</b>");     
    //first options
     if (input == "north"){
        $("#story").html("You walk north until you arrive at a small square house with glass walls. No one can be seen inside the house. Some items are scattered beside the house. There is a hammer, a flare and a thermos.");
        $("#option1").html("Smash the house with hammer <b>(smash)</b>");
        $("#option2").html("Try to enter the house. <b>(enter)</b>");
        $("#option3").html("Grab the flare <b>(flare)</b>");
     }else if (input == "south"){
       $("#story").html("You walk south for hours without seeing anything of interest. You notice there are some thin cracks in the earth here. Aside from that, everything looks the same as when you began walking.");
       $("#option1").html("Rest your tired legs a while. <b>(rest)</b>");
       $("#option2").html("Keep walking south, you're bound to find something.<b>(continue south)</b>");
       $("#option3").html("Walk back toward where you awoke. <b>(walk back)</b>");
     }else if (input == "wait"){
       $("#story").html("You wait where you woke up. You feel as if hours have passed but with no watch or knowledge of how the moons in the sky respond to time of day, it's hard to know if any time has actually passed. In the deadening silence you feel as if time might be on pause.");
        $("#option1").html("Take a nap and see if you might wake up in your bed - maybe... you hope. <b>(sleep)</b>");
       $("#option2").html("Yell and see if anyone hears you. <b>(yell)</b>");
       $("#option3").html("Start crying.<b>(cry)</b>");
     }
      
     //north options 
     if (input == "smash"){
       $("#story").html("You smash the house with the hammer. You enjoy destroying the little glass house. Let's face it. This is the most interesting thing you have done since you woke up in this weird place. It is a strange experience, however, because as you smash the house it makes absolutely no noise. The world around you remains eerily silent. Suddenly you feel a tap on your shoulder.");
       $("#option1").html("Turn around and see what touched your shoulder <b>(turn)</b>");
       $("#option2").html("Say 'Did someone just tap my shoudler?' <b>(talk)</b>");
       $("#option3").html("In one swift move turn and smash your possible attacker with the hammer<b>(turn and smash)</b>");
     }else if (input == "enter"){
       
       $("#story").html("You walk closer to the house and turn the door knob. As the door starts to open some thing taps you on the shoulder.");
        $("#option1").html("Turn around and see what touched your shoulder <b>(turn around)</b>");
    $("#option2").html("Say 'Did someone just tap my shoudler?' <b>(talk)</b>"); 
    $("#option3").html("Walk into house and shut door behind you. <b>(enter and shut)</b>");
     }else if (input == "flare"){
        $("#story").html("You pick up the flare and walk away from the house. You are about to light it when you realize that you don't have any matches. Without any way to light the flare it's not going to do much.");
       $("#option1").html("Look around and try to find matches. <b>(look  around)</b>");
       $("#option2").html("Walk back to the house<b>(return to house)</b>");
       $("#option3").html("Break the flare in half. <b>(break flare)</b>");
     }
     //south options
    if (input == "rest"){
        $("#story").html("You sit down to rest and your eyelids begin to grow heavy. Maybe it wouldn't be bad to get some shut eye. You are in your pjs after all.");
       $("#option1").html("Lie down, curl up in a ball and get some sleep. <b>(sleep)</b>");
       $("#option2").html("Decide you should probably stay awake. Slap yourself in the face and get moving.<b>(stay awake)</b>");
       $("#option3").html("Nap but don't sleep... probably <b>(nap)</b>");
    }else if (input == "continue south") {
        $("#story").html("Looks like you were right. You do get to something. It's a glistening portal. It is beautiful. You look behind the portal and it looks exactly the same from the back.");
       $("#option1").html("Walk into the portal <b>(enter portal)</b>");
       $("#option2").html("Test portal by throwing something into it <b>(test portal)</b>");
       $("#option3").html("Walk through the back side of the portal<b>(enter portal back)</b>");
    }else if (input == "walk back"){
      $("#story").html("Well, you're back to where you woke up in this strange place. What were you planning on doing here again?");
       $("#option1").html("You have no idea why you came back. Walk south again. <b>(south)</b>");
       $("#option2").html("Walk north this time. <b>(north)</b>");
       $("#option3").html("Maybe if you wait here something better will happen? <b>(wait)</b>");
    }
    //wait options
     if (input == "sleep"){
       $("#story").html("You wake up after sleeping. Wait? Where are you? Oh still where you fell asleep. How exciting. Maybe you should move around? Go somewhere?");
       $("#option1").html("Try going south <b>(south)</b>");
       $("#option2").html("Try going north <b>(north)</b>");
       $("#option3").html("Wonder why you've never concidered going East or West then go south <b>(south)</b>");
     }else if (input == "yell"){
       $("#story").html("You yell so loud that your vocal chords start to ache but no sound comes out. Seems like something out of a nightmare. Yikes.");
       $("#option1").html("Try going south <b>(south)</b>");
       $("#option2").html("Try going north <b>(north)</b>");
       $("#option3").html("Concider going east or west but then determine that you should go north <b>(north)</b>");
     }else if (input == "cry"){
       $("#story").html("You start crying and no sound comes out which is a weird sensation. If you start crying and there's no one there to hear you, are you really crying? Yes you think as you wipe a puddle of tears away from your eyes. You are definately crying.");
       $("#option1").html("Calm yourself down and try going south <b>(south)</b>");
       $("#option2").html("Keep crying for a while then walk north <b>(north)</b>");
       $("#option3").html("Cry yourself to sleep <b>(sleep)</b>");
     } 
     //smash options
       if (input == "turn"){
       $("#story").html("You turn around and see that someone was indeed tapping your shoulder. It is a short little - man? - lizard? - dog? .. You really aren't sure. This guy, though, he looks very sad. It occurs to you that this is probably his house that you had been smashing.");
       $("#option1").html("Drop the hammer in a sign of apology <b>(apologize)</b>");
       $("#option2").html("Smash the small man with a hammer <b>(kill)</b>");
       $("#option3").html("Run away from the man <b>(run away)</b>");  
       }else if (input == "talk"){
       $("#story").html("You begin to ask who is tapping your shoulder but then you remember there is no sound in this strange place. You are about to turn around when a man runs up in front of you looking very angry and covering his ears. He is not any ordinary man though. He looks like a combination of a man, a lizard, and a dog. He is also quite short.");
       $("#option1").html("Drop the hammer in a sign of apology <b>(apologize)</b>");
       $("#option2").html("Smash the small man with a hammer <b>(kill)</b>");
       $("#option3").html("Run away from the man <b>(run away)</b>");  
       }else if (input == "turn and smash"){
         $("#story").html("You grip the hammer tightly and whip around thrashing the hammer into whatever is behind you. It hits something very hard. You look down at what you smashed and see that it's a small dog-lizard looking dude. Hmm. You wonder if he was a nice or mean dog-lizard man. Well you'll never know now. He is dead.");
       $("#option1").html("Enter the glass house now that the man is dead.<b>(retry enter)</b>");
       $("#option2").html("Smash the small man with a hammer some more!!! MUHAHAHA!<b>(kill)</b>");
       $("#option3").html("Run away from the dead body <b>(run away)</b>");
       }
      // enter options
      if (input == "turn around"){
       $("#story").html("You turn around and there is no one behind you. There is also nothing there that could have tapped you. You turn back toward the house and the door is closed again! There is also a sign hanging from it with the words 'Do not enter' written on it. You feel oddly compelled to obey the sign.");
       $("#option1").html("Walk south to where you woke up. <b>(walk back)</b>");
       $("#option2").html("Walk south past where you woke up. <b>(walk south)</b>");
       $("#option3").html("Go against your instincts and smash the house with the hammer <b>(smash)</b>"); 
      }else if (input == "enter and shut"){
        $("#story").html("You walk into the house and evrything goes black. You are also overwhelmed with an emense sense of dread - and familiarity? You feel like you've been here before.");
       $("#option1").html("Stumble around in the dark looking for... something? <b>(wander blindly)</b>");
       $("#option2").html("Fall asleep because you give in to the darkness and are oh so tired. <b>(go to sleep)</b>");
       $("#option3").html("Run around blindly in panic <b>(run blindly)</b>");
      }
      //flare options
      if(input == "look around"){
       $("#story").html("You look around and everything looks just as before. There is literally nothing to pick up. Man is this place empty.");
       $("#option1").html("Look around again <b>(look around)</b>");
       $("#option2").html("Decide you need a break. Lie down and get some rest. <b>(sleep)</b>");
       $("#option3").html("Walk back to where you woke up <b>(walk back)</b>"); 
      }else if(input == "return to house"){
        $("#story").html("You walk back to the house and - what? - It's gone. Well, that's one less thing to look at.");
       $("#option1").html("Look for something else to look at <b>(look around)</b>");
       $("#option2").html("Decide you need a break. Lie down and get some rest. <b>(sleep)</b>");
       $("#option3").html("Walk back to where you woke up <b>(walk back)</b>");
      }else if (input == "break flare"){
       $("#story").html("You break the flare open and see that there is a box of matches inside. Well, that's ironic.");
       $("#option1").html("Look for something else to look at <b>(look around)</b>");
       $("#option2").html("Decide you need a break. Lie down and get some rest. <b>(sleep)</b>");
       $("#option3").html("Walk back to where you woke up <b>(walk back)</b>"); 
      }
      //rest options
      if (input == "stay awake"){
        $("#story").html("You have decided to stay awake. Good for you. What do you plan on doing while awake?");
       $("#option1").html("Walk south <b>(south)</b>");
       $("#option2").html("Decide that maybe you should sleep after all.<b>(sleep)</b>");
       $("#option3").html("Walk back to where you woke up <b>(walk back)</b>");
       } 
     //continue south options
        if (input == "enter portal"){
          $("#story").html("You step through the portal and suddenly appear back in your own bed. Also, you have no recollection of what you had been dreaming about! So strange. Well time for breakfast! Congratz! Go get some pancakes."); 
           $("#option1").html("");
       $("#option2").html("");
       $("#option3").html("");
        }else if (input == "test portal"){
          $("#story").html("You throw one of your socks into the portal. It vanishes into the portal. What were you checking for anyway?");
       $("#option1").html("Test the portal again <b>(test portal)</b>");
       $("#option2").html("Thanks to the very informative results of your test you decide to enter the portal <b>(enter portal)</b>");
       $("#option3").html("Walk back to where you woke up. Maybe this whole portal thing is too weird for you after all. <b>(walk back)</b>");
        }
     // turn options   
      if (input == "apologize"){
        $("#story").html("You lower your hammer in a sign of good faith. The weird little dude walks by you and into his house.");
       $("#option1").html("Follow the guy into his house closing the door behind you<b>(enter and shut)</b>");
       $("#option2").html("Walk back to where you woke up. <b>(walk back)</b>");
       $("#option3").html("Smash the house with the weird dude seemingly inside.<b>(smash)</b>");
      }else if (input == "kill") {
       $("#story").html("Wow. You are a monster aren't you? You murdered this little man after invading his home. Well, guess what. The second you have killed this poor, innocent, dog-lizard man, a deathly loud alarm sounds. Or maybe it's just an ordinary alarm. It's been a while since you've heard sound. You look around for a source of the sound and realize you have been surrounded by what looks like a hundred little dog-lizard men. They yell 'Charge!' and come at you with pitchforks and torches. And, that is the last thing you see. ");
         $("#option1").html("");
       $("#option2").html("");
       $("#option3").html("");
     }else if (input == "run away"){
       $("#story").html("You drop the hammer and run as fast as you can. You stop running when you get back to where you first woke up here and you feel more or less safe.");
       $("#option1").html("You decide to walk north this time <b>(north)</b>");
       $("#option2").html("Maybe take a nap? All that running made you tired. You feel mostly safe here. <b>(sleep)</b>");
       $("#option3").html("Maybe if you wait here something better will happen? <b>(wait)</b>");
     }
      //enter and shut options
      if (input == "wander blindly"){
        $("#story").html("You start to wander forward unsure if you are walking further into the house or back toward the door. You don't really even know if up is up. And you keep wandering for a very long time. Forever actually. And all the while your sense of dread increases. You really begin to wish you had never entered the house. Oh well, you screwed that up.");
         $("#option1").html("");
       $("#option2").html("");
       $("#option3").html("");
      }else if (input == "go to sleep"){
        $("#story").html("You drift off into a very uncomfortable sleep and wake up... you guessed it, still in this horrible black room, with no idea of where you are.");
       $("#option1").html("Yell for help! <b>help</b>");
       $("#option2").html("Wander around in the dark. <b>(wander blindly)</b>");
       $("#option3").html("run around in the dark<b>(run blindly)</b>");
      }else if (input == "run blindly"){
       $("#story").html("You start to run around in a blind panic. You are surprised you are able to run for so long without hitting a wall in this small house. Suddenly, bam! You hit something cold and... damp? Suddenly you feel water around your feet then it begins rising to your ankles then knees. You panic and run more and the water continues to rise. As the water approaches your nose, you take your last breath.");
         $("#option1").html("");
       $("#option2").html("");
       $("#option3").html("");
      }
      //added retry enter
      if (input == "retry enter"){
        $("#story").html("You walk into the house and evrything goes black. You are also overwhelmed with an emense sense of dread - and familiarity? You feel like you've been here before.");
       $("#option1").html("Stumble around in the dark looking for... something? <b>(wander blindly)</b>");
       $("#option2").html("Fall asleep because you give in to the darkness and are oh so tired. <b>(go to sleep)</b>");
       $("#option3").html("Run around blindly in panic <b>(run blindly)</b>");
        
      }
      
      
    })
      
    })//end
    