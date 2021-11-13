let cards = [{
        value: 1,
        color: "#6F98A8"
    },
    {
        value: 2,
        color: "#2B8EAD"
    },
    {
        value: 3,
        color: "#2F454E"
    },
    {
        value: 4,
        color: "#2B8EAD"
    },
    {
        value: 5,
        color: "#2F454E"
    },
    {
        value: 6,
        color: "#BFBFBF"
    },
    {
        value: 7,
        color: "#BFBFBF"
    },
    {
        value: 8,
        color: "#6F98A8"
    },
    {
        value: 9,
        color: "#2F454E"
    }
]

// Function to append cards to div
function setCards(cards,child) {
    document.getElementById(child).innerHTML = cards.map(card => 
        `<div class="flex-item" style="${setCardStyle(card.color)}">${card.value}</div>`
    ).join('');
}

// Function to get sub cards
function getSubCards() {
    let index = 0;
    for(var i=0;i<cards.length;i++) {
        let slicedCards = cards.slice(i,i+3);
        i=i+2;
        index = index + 1;
        setCards(slicedCards,"child"+ index);
    }
}

// Function to suffle cards
function suffle() {
    cards = cards.sort(() => Math.random() - 0.7);
    getSubCards()
}

// Function to sort cards
function sort() {
    cards = cards.sort(function(a,b) {
        return a.value - b.value
    });
    getSubCards()
}

// Function to set style based on number and window width
function setCardStyle(color) {
    if(window.innerWidth > 375){
       return `background-color: ${color}`;
    }
    else {
        let style = `background-color: #EFEFEF;border-left: 10px solid ${color}`;
        return style;
    }
}