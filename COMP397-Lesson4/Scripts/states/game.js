var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // GAME CLASS
    var Game = (function (_super) {
        __extends(Game, _super);
        // CONSTRUCTOR
        function Game() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Game.prototype.start = function () {
            // level label
            this._levelLabel = new objects.Label("Game Play", "60px Consolas", "#000000", 320, 240);
            this.addChild(this._levelLabel); // add label to the stage
            // back button
            this._backButton = new objects.Button("BackButton", 220, 340);
            this._backButton.on("click", this._clickBackButton, this); // event listener
            this.addChild(this._backButton);
            // next button
            this._nextButton = new objects.Button("NextButton", 420, 340);
            this._nextButton.on("click", this._clickNextButton, this); // event listener
            this.addChild(this._nextButton);
            stage.addChild(this);
        };
        Game.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Back Button Click
        Game.prototype._clickBackButton = function (event) {
            changeState(config.MENU_STATE);
        };
        // Callback function / Event Handler for Next Button Click
        Game.prototype._clickNextButton = function (event) {
            changeState(config.OVER_STATE);
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map