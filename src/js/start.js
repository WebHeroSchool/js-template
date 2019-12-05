import Game from "./game";

export default class Start {
	constructor() {
		this.init();
	}

	init() {
		this.addClickHadler();
	}

	addClickHadler() {
		const links = document.querySelectorAll(".level-wrap input");
		const btn = document.querySelector(".btn-send-js");
		links.forEach((item) => {
			item.addEventListener("click", () => {
				this.value = item.value;
				btn.disabled = false;
			});
		});

		btn.addEventListener("click", (e) => {
			e.preventDefault();
			new Game(this.value);
		});
	}
}
