let turn = 0;
let money = 1000;
let education = 50;
let health = 50;
let water = 50;
let trust = 50;

function updateStatus(msg) {
  document.getElementById("status").innerText =
    `回合 ${turn} | 資金: $${money} | 教育:${education} | 醫療:${health} | 飲水:${water} | 信任:${trust}\n` + msg;
}

function nextTurn() {
  turn++;
  money -= 50; // 每回合基本開銷
  let msg = "你做出了一些基礎建設決策。";

  // 隨機事件
  let eventChance = Math.random();
  if (eventChance < 0.2) {
    msg = "你資助了村裡的小學翻修 → 教育 +10";
    education += 10;
    money -= 100;
  } else if (eventChance < 0.4) {
    msg = "你設立了社區診所 → 醫療 +10";
    health += 10;
    money -= 120;
  } else if (eventChance < 0.6) {
    msg = "你打了深水井 → 飲水 +15";
    water += 15;
    money -= 150;
  } else if (eventChance < 0.8) {
    msg = "你頒發了獎學金 → 教育 +5, 信任 +5";
    education += 5;
    trust += 5;
    money -= 80;
  } else {
    msg = "這回合沒有特別事件。";
  }

  // 任務挑戰：飲水 >= 80 且 money >= 0
  if (water >= 80 && money >= 0) {
    msg += "\n🎉 恭喜！你完成了任務：三年內改善飲水資源！";
  }

  // 遊戲結束條件
  if (money < -200) {
    msg += "\n💔 你的資金耗盡，無法繼續。遊戲結束！";
    document.querySelector("button").disabled = true;
  }

  updateStatus(msg);
}

// 初始化
updateStatus("準備開始公益建設！");
