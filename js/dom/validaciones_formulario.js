const d = document;

export default function conctactFormValidations() {
	const $form = d.querySelector(".contact-form"),
				$inputs = d.querySelectorAll(".contact-form [required]");

	//console.log($inputs);

	$inputs.forEach((input) => {
		const $span = d.createElement("span");
		$span.id = input.name;
		$span.textContent = input.title;
		$span.classList.add("contact-form-error", "none"); 
		input.insertAdjacentElement("afterend", $span);

		d.addEventListener("keyup", (e) => {
			if(e.target.matches(".contact-form [required]")) {
				let $input = e.target,
						pattern = $input.pattern || $input.dataset.pattern; // el primero valida inputs y el segundo txtarea
				
				//console.log($input, pattern);

				if(pattern && $input.value !== "") {
					//console.log("El input tiene patron");
					let regex = new RegExp(pattern);
					return !regex.exec($input.value)
					? d.getElementById($input.name).classList.add("is-active")
					: d.getElementById($input.name).classList.remove("is-active");
				}
			
				if(!pattern) {
					//console.log("El input NO tiene patron")
					return $input.value === ""
					? d.getElementById($input.name).classList.add("is-active")
					: d.getElementById($input.name).classList.remove("is-active");
				}
			}
		});
	});

	d.addEventListener("submit", (e) => {
		//e.preventDefault();
		alert("Enviando Formulario");

		const $loader = d.querySelector(".contact-form-loader"),
					$response = d.querySelector(".contact-form-response");

		$loader.classList.remove("none");

		setTimeout(() => {
			$loader.classList.add("none");
			$response.classList.remove("none");
			$form.reset();

			setTimeout(() => $response.classList.add("none"), 3000);
		}, 3000);
	});

}