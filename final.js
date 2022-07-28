const suits =['S','H','C','D']
const ranks =[1,2,3,4,5,6,7,8,9,10,11,12,13]
var players = [];
var deck = [];

class Card{
    constructor(suit, rank){
        this.rank = rank;
        this.suit = suit;
        
    }
  
}

class Player{
    constructor(name,hand,points){
        this.name = name;
        this.hand = hand;
        this.points = points;
        
        
    }
    
}

class Deck{
    constructor(){
        
    }

    createDeck(){
        for(let i = 0 ;i < ranks.length ;i++){
            for(let t =0; t<suits.length; t++){
                deck.push(new Card(suits[t] , ranks[i]));
            }  
        }
        return deck;
    }
    shuffleDeck(){
        for (let i =0; i< 100; i++){
       let rng = Math.floor(Math.random()*52);
       let cut = deck.splice(rng,1);
        deck.push(cut[0]);
        }
        return deck;
    }
    

}

function deal(){
  
    for(let i = 0; i<26; i++){
        players[0].hand.push(deck.pop());
        players[1].hand.push(deck.pop());
    };
   
    
  
}

function war(){
   for(let i =0; i<26;i++){
    console.log(`player 1's card:`);
    console.log(players[0].hand[i]);
    console.log(`player 2's card:`);
    console.log(players[1].hand[i]);
    if(players[0].hand[i].rank > players[1].hand[i].rank){
        players[0].points++;
        console.log(`
Point to Player 1!`);
    }
    else if(players[0].hand[i].rank < players[1].hand[i].rank){
        players[1].points++;
        console.log(`
Point to Player 2!`);
    }
        else{console.log('Tie!')}
    console.log(players[0]);
    console.log(players[1]);
    console.log(`
    `)
   }
    
        
    }
function declareWinner(){
        if(players[0].points> players[1].points){
            console.log(`
            
            PLAYER 1 WINS!!!`)}
        else if(players[0].points< players[1].points){
            console.log(`
            
            PLAYER 2 WINS!!!`)
            }
        else{console.log(`
            
        IT'S A TIE!!!`)
        }
        }

players.push(new Player('player1',[],0));
console.log(players[0]);
players.push(new Player('player2',[],0));
console.log(players[1]);
let newDeck = new Deck();
console.log(newDeck.createDeck());
console.log(newDeck.shuffleDeck());
deal();
console.log(players[0]);
console.log(players[1]);
console.log(`


Game Start!

`);

war();
declareWinner();


