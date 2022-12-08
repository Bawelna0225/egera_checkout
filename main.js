const checkoutForm = document.querySelector('form.checkout')
const emailInput = document.getElementById('email')
const cardNumber = document.getElementById('card-number')
const expirationDate = document.getElementById('expiration-date')
const cvc = document.getElementById('cvc')
const nameOnCard = document.getElementById('name')
const zipCode = document.getElementById('zip')

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})

function validateForm(){
    // Checks only for empty fields & valid email
	let errorFlag = false
	if (cardNumber.value.length < 1 || cardNumber.value.split(' ').join('') == '') {
		cardNumber.classList.add('error')
		errorFlag = true
	}
	if (expirationDate.value.length < 1 || expirationDate.value.split(' ').join('') == '') {
		expirationDate.classList.add('error')
		errorFlag = true
	}
	if (!emailIsValid(emailInput.value)) {
		emailInput.classList.add('error')
		errorFlag = true
	}
	if (cvc.value.length < 1 || cvc.value.split(' ').join('') == '') {
		cvc.classList.add('error')
		errorFlag = true
	}
	if (nameOnCard.value.length < 1 || nameOnCard.value.split(' ').join('') == '') {
		nameOnCard.classList.add('error')
		errorFlag = true
	}
    	if (zipCode.value.length < 1 || zipCode.value.split(' ').join('') == '') {
		zipCode.classList.add('error')
		errorFlag = true
	}

	cardNumber.addEventListener('input', () => {
		cardNumber.classList.remove('error')
	})
	expirationDate.addEventListener('input', () => {
		expirationDate.classList.remove('error')
	})
	emailInput.addEventListener('input', () => {
		emailInput.classList.remove('error')
	})
	cvc.addEventListener('input', () => {
		cvc.classList.remove('error')
	})
	nameOnCard.addEventListener('input', () => {
		nameOnCard.classList.remove('error')
	})
    zipCode.addEventListener('input', () => {
		zipCode.classList.remove('error')
	})

	if (!errorFlag) {
		// Send to backend
	}
}

// email validation
const emailIsValid = (emailInput) => {
	let pattern = /\S+@\S+\.\S+/
	return pattern.test(emailInput)
}