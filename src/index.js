import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncompleteList(inputText);
};

const addIncompleteList = (text) => {
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button（完了）タグ生成
  const compleateButton = document.createElement("button");
  compleateButton.innerText = "完了";
  compleateButton.addEventListener("click", () => {
    addCompleteList(compleateButton.parentNode.firstChild.innerText);
    deleteIncompleteList(compleateButton.parentNode);
  });

  // button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(compleateButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

const deleteIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const addCompleteList = (text) => {
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  returnButton.addEventListener("click", () => {
    addIncompleteList(returnButton.parentNode.firstChild.innerText);
    deleteCompleteList(returnButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(returnButton);

  // 戻すリストに追加
  document.getElementById("complete-list").appendChild(div);
};

const deleteCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
