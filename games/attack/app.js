new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    playerName: 'You',
    running: false,
    turns: [],
    coins: 100,
    playerWins: 0,
    monsterWins: 0,
    fullLife: true,
    isDying: false,
    almostDead: false
  },
  methods: {
    startGame: function() {
      this.running = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function() {
      var damage = this.calcDamage(5, 12);
      this.turns.unshift({
        isPlayer: true,
        text: this.playerName + ' caused ' + damage + ' damage to the monster.'
      });
      this.monsterHealth -= damage;
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    specialAttack: function() {
      var damage = this.calcDamage(8, 15);
      if (this.coins >= 5) {
        this.turns.unshift({
          isPlayer: true,
          text: this.playerName + ' used a special attack and caused ' + damage + ' damage to the monster (-5C)'
        });
        this.monsterHealth -= damage;
        this.coins -= 5;
      } else {
        if (this.coins <= 5) {
          this.turns.unshift({
            isPlayer: true,
            text: 'You cannot afford the special attack (5C needed)'
          });
        }
      }

      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    heal: function() {

      if (this.coins >= 3) {
        this.turns.unshift({
          isPlayer: true,
          text: this.playerName + ' got healed for 10 HP. (-3C)'
        });
        if (this.playerHealth <= 90) {
          this.playerHealth += 10;
        } else {
          this.playerHealth = 100;
        }
        this.coins -= 3;
      } else {
        if (this.coins <= 3) {
          this.turns.unshift({
            isPlayer: true,
            text: 'You cannot afford the healing skill. (3C needed)'
          });
        }
      }

      this.monsterAttacks();

    },

    giveUp: function() {
      if (this.running === true) {
        this.running = false;
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.turns = [];
        this.monsterWins++;
        this.coins -= 5;
      }
    },
    monsterAttacks: function() {
      var damage = this.calcDamage(5, 12);
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits ' + this.playerName + ' for ' + damage + ' damage'
      });

      this.playerHealth -= damage;
      this.checkWin();
    },
    calcDamage: function(min, max) {
      return Math.floor((Math.random() * max) + 1, min);
    },

    checkWin: function() {
      if (this.monsterHealth <= 0) {
        this.playerWins++;
        this.coins += 10;
        if (confirm('You won! Want to start a new game?')) {
          this.startGame();
          this.turns = [];
        } else {
          this.running = false;
        }
        return true;
      }
      else if (this.playerHealth <= 0) {
        this.monsterWins++;
        this.coins -= 5;
        if (confirm('You lost! Want to start new game?')) {
          this.startGame();
          this.turns = [];
        } else {
          this.running = false;
        }
        return true;
      }
      return false;
    },
    checkPHealth: function() {
      if (this.playerHealth <= 50) {
        this.almost = true;
        this.full = false;
      } else {
        this.almost = false;
      }

      if (this.playerHealth <= 20) {
        this.dying = true;
        this.almost = false;
        this.full = false;
      } else {
        this.dying = false;
      }
    }

  },

  computed: {

  }
});
