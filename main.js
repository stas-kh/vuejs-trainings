new Vue({
    el: '.container',
    data: {
        player: {
            name: 'YOU',
            health: 100
        },
        monster: {
            name: 'Monster',
            health: 100
        },
        gameLog: null,
        endGameMessage: ''
    },
    computed: {
        isGameStarted: function () {
            return this.gameLog && this.gameLog.length >= 1;
        }
    },
    methods: {
        startNewGame: function () {
            this.gameLog = ['~~~ The game starts ~~~'];
        },
        healthClasses: function (player) {
            return {
                'text-success': player.health >= 80,
                'text-warning': player.health >= 40 && player.health < 80,
                'text-danger': player.health < 40,
            }
        },
        getRandom: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        playerHit: function (min, max, isUltimate = false) {
            const damage = this.getRandom(min, max);

            this.monster.health -= damage;
            if (this.monster.health < 0) {
                this.monster.health = 0;
            }
            this.gameLog.push(`The player ${isUltimate ? 'ultimatevely' : ''} hits the monster with -${damage} HP`);

            this.monsterHit();

            this.checkTheGameEnd();
        },
        monsterHit: function () {
            const damage = this.getRandom(7, 14);

            this.player.health -= damage;
            if (this.player.health < 0) {
                this.monster.health = 0;
            }
            this.gameLog.push(`The monster hits the player with -${damage} HP`);

            this.checkTheGameEnd();
        },
        heal: function () {
            const healedHealth = this.getRandom(7, 14);

            this.player.health += healedHealth;
            this.gameLog.push(`The player healed on ${healedHealth} HP`);

            this.monsterHit();
        },
        checkTheGameEnd: function () {
            if (this.endGameMessage) {
                return;
            }

            if (this.player.health <= 0) {
                return this.endGame('The player has been defeated');
            }

            if (this.monster.health <= 0) {
                return this.endGame('The monster has been defeated');
            }
        },
        endGame: function (endMessage) {
            this.endGameMessage = endMessage;
        },
        playAgain: function () {
            this.player.health = 100;
            this.monster.health = 100;
            this.gameLog = null;
            this.endGame('');
        }
    }
});