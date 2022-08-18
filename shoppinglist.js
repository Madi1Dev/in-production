const addProductButton = document.getElementById('add_product')
const inputProduct = document.getElementById('product')
const productTable = document.getElementById('shopping_box')
const healthyFoodPlus = document.getElementById('healthy_plus')
const unhealthyFoodMinus = document.getElementById('unhealthy_minus')

addProductButton.addEventListener('click', (event) => {
    addProduct()
}
)


inputProduct.addEventListener('keyup', (event) => {
    if (event.which === 13) {
        addProduct()
    }
}) // this function recognises enter


function addProduct() {
    if (inputProduct.value == '') {
        alert('Enter an item');
    } else {

        // create the list element
        const li = document.createElement('li')
        li.innerHTML = inputProduct.value
        inputProduct.value == '' // ADDING == FIXED THE DOUBLE IMAGE ISSUE!!! Or removing it altogether
        productTable.appendChild(li)    

        // add delete button
        const deleteButton = document.createElement('button') // first need to create the element, then append
        deleteButton.classList.add('delete_button') // not doing anything
        deleteButton.textContent = 'Del';
        li.appendChild(deleteButton)

        // delete the list element
        deleteButton.addEventListener('click', (event) => { // THIS WORKED!!!!!!!! Else, click wasn't triggered.
            li.remove()
            removed1()
            removed2()
        })

        plus1()
        minus1()
        // these work, but they must match the capitalization in the array
    } 
}


// add transformation for li appendage
// add transformation for li remove
// add transformation for removing a healthy food
// add transformation for removing unhealthy food
// the animation is always the opposite



// HEALTHY FOODS ARRAY
const healthyFoods = ['Apple', 'Orange', 'Banana', 'Salad']

// healthy item added
function plus1() {
    for (let i = 0; i < healthyFoods.length; i++) {
        if (inputProduct.value == (healthyFoods[i])) {
            healthyFoodPlus.classList.remove('hide')
        }
    }
}

// healhy item removed
function removed1() {
    for (let i = 0; i < healthyFoods.length; i++) {
        if (inputProduct.value == (healthyFoods[i])) {
            healthyFoodPlus.classList.add('hide')
        }
    }
}


// UNHEALTHY FOODS ARRAY
const unhealthyFoods = ['Burger', 'Coke', 'Candy', 'Cake']

// unhealthy item added
function minus1() {
    for (let i = 0; i < unhealthyFoods.length; i++) {
        if (inputProduct.value == (unhealthyFoods[i])) {
            unhealthyFoodMinus.classList.remove('hide')
        }
    }
}

// unhealthy item removed
function removed2() {
    for (let i = 0; i < unhealthyFoods.length; i++) {
        if (inputProduct.value == (unhealthyFoods[i])) {
            unhealthyFoodMinus.classList.add('hide')
        }
    }
}


// somehow, right now entering ANY value shows both. I think the array interaction is the issue
// maybe the if statement should be INSIDE the original function, not here










// THESE FUNCTIONS DIDN'T WORK
function plus() {
    for (let i = 0; i < healthyFoods.length; i++) {
        if (inputProduct.value.indexOf(healthyFoods[i])) {
            healthyFoodPlus.classList.remove('hide')
        } 
      }
}

function minus() {
    for (let i = 0; i < unhealthyFoods.length; i++) {
        if (inputProduct.value.indexOf(unhealthyFoods[i])) {
            unhealthyFoodMinus.classList.remove('hide')
        }
      }
}

function addHealthyPlusImage() {
    if (inputProduct.value == healthyFoods[0]) { 
        healthyFoodPlus.classList.remove('hide')
    }
}

function addUnhealthyMinusImage() {
    if (inputProduct.value == unhealthyFoods[0]) {
        unhealthyFoodMinus.classList.remove('hide')
    }
}






