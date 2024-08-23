// gameInfo variables
var game = document.getElementById("game");
var startButton = document.getElementById("start-button");
var gunSound = new Audio("sounds/gunshot.mp3");
var hitCount = 0;
var missCount = 0;

// dog variables
var dog = document.getElementById("dog");
var dogGoRight = true;
var dogLeft = -200;
var dogLeftReturn = dog.offsetWidth;
// settings
var dogSpeed = 6;

// duck variables
var duck = document.getElementById("duck");
var duckSound = new Audio("sounds/duck.mp3");
var duckInterval = null;
var fallInterval = null;
var duckLeft = -200;
// settings
var duckTop = 0;
var minSpeed = 4;
var flySpeed = minSpeed;



function startGame() {
    startButton.style.display = "none"; 
    startDogwalk();
    startDuckFly();
}

function updateHitorMiss() {
    document.getElementById("hit-count").innerHTML = hitCount;
    document.getElementById("miss-count").innerHTML = missCount;
}

function duckHit() {
    duck.src = 'img/duckshot2.png';
    clearInterval(duckInterval);
    var fallSpeed = 1;
    duck.style.zIndex = 1;
    flySpeed = Math.floor(Math.random() * hitCount) + minSpeed;
    gunSound.currentTime = 0;
    gunSound.volume = 0.3;
    gunSound.play();
    hitCount ++;
    updateHitorMiss();
    

    setTimeout(function()  {
        duck.src = "img/duckfalling.png"   

        fallInterval = setInterval(function() {
            duckTop += fallSpeed;
            duck.style.top = duckTop + "px";

            fallSpeed += 1;

            if (duckTop > 1000) {
                clearInterval(fallInterval)
                clearInterval(fallSpeed)
                startDuckFly();
            }
        }, 40);                                     
    }, 800);
}

function playGunshot() {
    gunSound.volume = 0.1;
    gunSound.play();
    gunSound.currentTime = 0;
}

function startDuckFly() {
    duck.style.zIndex = 3;
    duckLeft = -200;
    duck.src = "img/flyingduck.gif";
    duck.style.left = duckLeft + "px";
    duckTop = Math.floor((Math.random() * 250) + 1);
    duck.style.top = duckTop + "px";

    duckInterval = setInterval(function() {
        duckLeft += flySpeed;
        duck.style.left = duckLeft + "px";

        if (duckLeft % 300 == 0 || duckLeft % 33 == 0) {
            duckSound.volume = 0.3;
            duckSound.play();
        }
        //als duck aan t einde komt
        if (duckLeft > game.offsetWidth) {
            missCount ++;
            updateHitorMiss();
            if (missCount >= 3) {
                
            }
            //reset duck left position
            duckLeft = -200;
            duck.style.left = duckLeft + "px";
            //nieuwe random top position
            duckTop = Math.floor((Math.random() * 250) + 1);
            duck.style.top = duckTop + "px";
        }
    }, 50);
};

function startDogwalk() {
        dog.src = "img/sniffingdog.gif"
        //variabel maken om richting te bepalen
        dogMoveInterval = setInterval(function() {
            
            //als richting rechts waar is gaat ie naar rechts
            if (dogGoRight == true) {
                dogLeft += dogSpeed;
                dog.style.left = dogLeft + "px";

                //dog check buiten beeld
                if(dogLeft > game.offsetWidth) {
                    
                    //omdraaien
                    dog.style.transform = "scaleX(-1)";
                    
                    //righting wijzigen
                    dogGoRight = false;
                }
            }
            //als naar rechts niet waar is is t naar links
            if (dogGoRight == false) {
                
                //naar links lopen
                dogLeft -= dogSpeed;
                dog.style.left = dogLeft + "px";
                
                //als dog verder dan zijn eige breedte onder de game div zit gaat ie weer terug
                if(dogLeft < -dogLeftReturn) {
                    dog.style.transform = "scaleX(1)";
                    dogGoRight = true;
                }
            }
            
            if (duckTop > 400) {
                dog.style.zIndex = 0;
                clearInterval(dogMoveInterval)
                dogSpeed = 6;
                setTimeout(function() {
                    dog.src = "img/happydog.gif";
                    dog.style.height = "110px"
                    dog.style.width = "110px"
                    dog.style.top = "240px"
                }, 600);
                setTimeout(function() {
                    dog.style.height = "145px"
                    dog.style.width = "145px"
                    dog.style.top = "270px"
                    dog.style.zIndex = 2;
                    startDogwalk()
                }, 1000);
            }
        }, 100);
    }