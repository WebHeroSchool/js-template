export default class Game {
	constructor(el) {
		this.el = el;
		this.init();
	}

	init() {
		this.renderComponent();
	}

	renderComponent() {
		const fragment = document.createDocumentFragment();
		this.number = this.el === "Простой" ? 3
			: this.el === "Средний" ? 6 : 12;
		const div = document.createElement("div");
		function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max));
		}
		const rand = getRandomInt(this.number);
		for (let i = 0; i < this.number; i++) {
			const elem = document.createElement("div");
			const item = `      <div class="card"></div>
						    <div class="card back ${rand === i ? "bags" : "gamover"}"></div>
					`;
			elem.classList.add("wrap-card");
			elem.innerHTML = item;
			fragment.appendChild(elem);
		}
		const main = document.querySelector(".main");
		main.classList.add("wrap");
		main.innerHTML = "";

		main.appendChild(fragment);
		this.cartChange();
	}

	cartChange() {
		const cards = document.querySelectorAll(".wrap-card");
		this.gameover = false;
		cards.forEach((item) => {
			item.addEventListener("click", () => {
				if (!this.gameover) {
					item.classList.toggle('active');
					this.gameover = true;
				} else {
					this.renderComponent();
					this.gameover = false;
				}
			});
		});
	}
}
