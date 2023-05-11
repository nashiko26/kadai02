// 画像表示切替え
var img;
function chiikawa() {
  img = document.getElementById("image_file");
  img.src = "/img/chiikawa.jpeg";
}

function hachiware() {
  img = document.getElementById("image_file");
  img.src = "/img/hachiaware.jpg";
}

function usagi() {
  img = document.getElementById("image_file");
  img.src = "/img/usagi.jpg";
}

// じゃんけんのリスト作成
function R_Click(p_janken_r) {
  //「R_Click()」に引数を入れて自分が選んだボタンによって結果を変える。
  //自分（p-）
  const p_janken = ["グー", "チョキ", "パー"];

  //NPC
  const janken = ["グー", "チョキ", "パー"];
  const janken_r = Math.floor(Math.random() * 3);
  // 小数点切り捨てて整数に。0,1,2の3パターンを作成。NPC側は乱数を作成。

  // 勝ち負け判定
  // 「if」もしも…　「else if」もしも上の条件以外で…
  if (janken_r === p_janken_r) {
    Result_end = "あいこ！";
  } else if (p_janken_r === 0 && janken_r === 1) {
    Result_end = "勝った～～～！！！";
  } else if (p_janken_r === 1 && janken_r === 2) {
    Result_end = "勝った～～～！！！";
  } else if (p_janken_r === 2 && janken_r === 0) {
    Result_end = "勝った～～～！！！";
  } else {
    Result_end = "残念！負け。";
  }

  // 結果
  // 「janken[janken_r]」「p_janken[p_janken_r]」ランダムに選択したどれかひとつ
  // 「Rejan1」「Rejan2」という指定したidの場所でプログラムを動かす
  // 「innerHTML」でHTMLのデータを書き換える
  document.getElementById("jankenpon").src = "/img/jan" + janken_r + ".png";
  document.getElementById("Rejan2").innerHTML = Result_end;
  document.getElementById("jankenpon2").src = "/img/jan" + p_janken_r + ".png"; // 画像
}
