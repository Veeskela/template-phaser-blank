/* global BasicGame */

'use strict';

BasicGame.MainMenu = function mainMenu() {

};

BasicGame.MainMenu.prototype = {

    preload: function preload() {
        // preload your stuff here
    },

    create: function create() {
        // create your stuff here
        this.add.sprite( 0, 0, 'ta0', 'assets1_bg.png' );
        var startBtn = this.add.button( 0, 0, 'ta0', btnClick, this, 'assets1_btn_play.png', 'assets1_btn_play.png', 'assets1_btn_play.png' );
        startBtn.x = this.game.width * 0.5 - ( startBtn.width * 0.5 );
        startBtn.y = this.game.height * 0.5 - ( startBtn.height * 0.5 );

        var aboutBtn = this.add.button( 0, 0, 'ta0', btnClick, this, 'assets1_btn_about.png', 'assets1_btn_about.png', 'assets1_btn_about.png' );
        aboutBtn.x = this.game.width * 0.5 - ( aboutBtn.width * 0.5 );
        aboutBtn.y = this.game.height * 0.5 + aboutBtn.height;

        function btnClick( target ) {
            if ( target === startBtn ) {
                this.game.state.start( 'Game' );
            }
            else if ( target === aboutBtn ) {
                this.game.state.start( 'About' );
            }
        }
    },

    update: function update() {
        // Do some nice funky main menu stuff here
    }

};