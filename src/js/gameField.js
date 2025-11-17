import image from "../img/goblin.png";

export class GameField {
  constructor(containerSelector = "body", itemsCount = 16) {
    this.containerSelector = containerSelector;
    this.itemsCount = itemsCount;
    this.fieldItems = [];
    this.currentIndex = 0;
    this.img = null;
    this.intervalID = null;
  }

  init() {
    this.createField();
    this.createGoblinImage();
  }

  createField() {
    const container = document.createElement("div");
    container.className = "field-container";

    for (let i = 0; i < this.itemsCount; i++) {
      const item = document.createElement("div");
      item.className = "field-item";
      container.append(item);
    }

    document.querySelector(this.containerSelector).append(container);
    this.fieldItems = Array.from(document.querySelectorAll(".field-item"));
  }

  createGoblinImage() {
    this.img = document.createElement("img");
    this.img.src = image;
    this.img.alt = "Goblin";
  }

  getRandomItem() {
    let newIndex = this.currentIndex;

    while (newIndex === this.currentIndex) {
      newIndex = Math.floor(Math.random() * this.fieldItems.length);
    }

    this.currentIndex = newIndex;
    return this.fieldItems[this.currentIndex];
  }

  activateRandomField() {
    const activeItem = this.getRandomItem();
    this.clearActiveField();
    activeItem.append(this.img);
  }

  clearActiveField() {
    this.fieldItems.forEach((item) => {
      if (item.contains(this.img)) {
        item.removeChild(this.img);
      }
    });
  }

  startGame(interval = 1000) {
    this.activateRandomField();
    this.intervalID = setInterval(() => this.activateRandomField(), interval);
  }

  stopGame() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = null;
    }
    this.clearActiveField();
  }
}
