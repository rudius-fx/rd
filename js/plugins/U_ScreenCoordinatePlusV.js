/*:ja
 * @plugindesc
 * 設定した変数の値をプレイヤーのスクリーン座標に直接加算し、
 * 表示位置をドット単位でズラすことが可能になります。
 * 
 * @author ゆう
 *
 * @param ScreenX PlusVariablesID
 * @desc プレイヤーのスクリーン X 座標に直接加算させる変数 ID を指定します。
 * @default 1
 *
 * @param ScreenY PlusVariablesID
 * @desc プレイヤーのスクリーン Y 座標に直接加算させる変数 ID を指定します。
 * @default 2
 *
 * @help 【 Var.1.0.0 】
 * 
 * パラメータを弄らず、デフォルトの状態で変数[0002]番に 16 を代入すると
 * プレイヤーの表示位置を 16 ドット下にズラすことができます。
 * 
 * 【 Class 】
 * Game_Player (PIa1)
 * 
 */


// 〇 プラグインパラメータ
//-------------------------------------------------------------------------------------------------
Game_Player.parametersPIa1 = PluginManager.parameters('U_ScreenCoordinatePlusV');

// 〇 スクリーンＸ座標
//-------------------------------------------------------------------------------------------------
Game_Player.prototype.screenX = function() {
    var tw = $gameMap.tileWidth();
    var gv = $gameVariables.value(Number(Game_Player.parametersPIa1['ScreenX PlusVariablesID']) || 0);
    return Math.round(this.scrolledX() * tw + tw / 2 + gv);
};

// 〇 スクリーンＹ座標
//-------------------------------------------------------------------------------------------------
Game_Player.prototype.screenY = function() {
    var th = $gameMap.tileHeight();
    var gv = $gameVariables.value(Number(Game_Player.parametersPIa1['ScreenY PlusVariablesID']) || 0);
    console.log(gv)
    return Math.round(this.scrolledY() * th + th - this.shiftY() - this.jumpHeight() + gv);
};
</textarea>

<div class="fc2_footer" style="text-align:left;vertical-align:middle;height:auto;">
<div class="fc2button-clap" data-clap-url="//blogvote.fc2.com/pickup/omegapointer/57/clap" id="fc2button-clap-57" style="vertical-align:top;border:none;display:inline;margin-right:2px;">
<script type="text/javascript">
(function(d) {
var img = new Image();
d.getElementById("fc2button-clap-57").appendChild(img);
img.src = '//static.fc2.com/image/clap/number/green/1.gif';
(function(s) { s.cursor = 'pointer'; s.border = 0; s.verticalAlign = 'top'; s.margin = '0'; s.padding = '0'; })(img.style);
var clap = function() { window.open('//blogvote.fc2.com/pickup/omegapointer/57/clap')};
if (img.addEventListener) { img.addEventListener('click', clap, false); } else if (img.attachEvent) { img.attachEvent('onclick', clap); }
})(document);