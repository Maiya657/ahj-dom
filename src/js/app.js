import image from "../img/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  div.className = "field-container";
  document.body.append(div);

  for (let i = 0; i < 16; i++) {
    const item = document.createElement("div");
    item.className = "field-item";
    div.append(item);
  }

  const fieldItems = Array.from(document.querySelectorAll(".field-item"));
  const img = document.createElement("img");
  img.src = image;

  let currentIndex = 0;

  function getItem() {
    let generateIndex = currentIndex;

    while (true) {
      generateIndex = Math.floor(1 + Math.random() * fieldItems.length - 1);
      if (currentIndex !== generateIndex) {
        currentIndex = generateIndex;
        return fieldItems[currentIndex];
      }
    }
  }

  function activateField() {
    const activeItem = getItem();
    activeItem.append(img);
  }

  activateField();

  setInterval(activateField, 1000);
});
