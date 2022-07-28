//var expect = chai.expect;
//describe('warFunctions', function(){
//    describe('deal', function(){
//        it('should distribute indexes from deck into player.hand', function(){
//            var x = deal();
//            expect(x).to.equal(players[0].hand);
//        });
//        
//    });
//});

describe('warFunctions', function(){
    describe('player1 hand', function(){
        it('should have 26 cards', function(){

            expect(players[0].hand.length).to.equal(26);
            console.log(players[0].hand.length);
        });
    });
});

describe('warFunctions', function(){
    describe('player2 hand', function(){
        it('should have 26 cards', function(){

            expect(players[1].hand.length).to.equal(26);
            console.log(players[1].hand.length);
        });
    });
});

var expect = chai.expect;
describe('warFunctions', function(){
    describe('deck', function(){
        it('should have 0 cards at end of game', function(){

            expect(deck.length).to.equal(0);
            console.log(deck);
        });
    });
});
