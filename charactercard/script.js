const charCard = document.querySelector("#charCard");

const character = {
    charName: "Snortleblat",
    charImgSrc: "./snortleblat.png",
    charImageAlt: "swamp creature partially submerged in water",
    charClass: "Swamp Beast Diplomat",
    level: 6,
    health: 40,

    attacked: function () {
        if (this.health <= 0) {
            return;
        }
        this.health -= 20;
        document.querySelector("#pHealth").innerHTML = `<strong>Health: </strong>${this.health}`;
    },

    levelUp: function () {
        if (this.level >= 100) {
            return;
        }
        this.level += 1;
        document.querySelector("#pLevel").innerHTML = `<strong>Level: </strong>${this.level}`;
    }
};

function renderCharCard(character) {
    charCard.innerHTML = `
    
            <img src="${character.charImgSrc}" alt="${character.charImgAlt}">
        <h1 id="charName">${character.charName}</h1>
        <section id="charStats">
            <p><strong>Class: </strong>${character.charClass}</p>
            <p id="pLevel"><strong>Level: </strong>${character.level}</p>
            <p id="pHealth"><strong>Health: </strong>${character.health}</p>
        </section>
        <div>
            <button id="attackedBtn">Attacked</button>
            <button id="levelBtn">Level Up</button>
        </div>`
};

renderCharCard(character);

const attackedBtn = document.querySelector("#attackedBtn");
const levelBtn = document.querySelector("#levelBtn");

attackedBtn.addEventListener("click", function () {
    character.attacked();
    if (character.health <= 0) {
        setTimeout(() => {
            alert("Your character has died.");
        }, 0);
    };
})

levelBtn.addEventListener("click", function () {
    character.levelUp();
    if (character.level >= 100) {
        // Update the DOM before sending the alert (AI helped me with this one)
        setTimeout(() => {
            alert("Your character has reached the max level!");
        }, 0);
    };
})