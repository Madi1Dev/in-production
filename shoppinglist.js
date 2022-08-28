const addProductButton = document.getElementById('add_product')
const inputProduct = document.getElementById('product')
const productTable = document.getElementById('shopping_box')
const healthyFoodPlus = document.getElementById('healthy_plus')
const unhealthyFoodMinus = document.getElementById('unhealthy_minus')

// ARRAYS IN THE DOM
const treatsArray = document.getElementById('treats_array') 
const healthyFoodsArray = document.getElementById('healthy_foods_array') 

// ARRAYS IN JS
let healthyFoods = []
let treats = []
let allFoods = []






// beginning event listeners
addProductButton.addEventListener('click', function () {
    inputProduct.value.toLowerCase()
    addProduct()
    }
)

// this function recognises enter
inputProduct.addEventListener('keyup', function() {
    if (event.which === 13) {
        inputProduct.value.toLowerCase()
        addProduct()
    }
    }   
) 


function addProduct(input) {

    // declaring the integer
    let integer = 1  

    if (inputProduct.value === '') {
        alert('What would you like to buy?');
    } else if (inputProduct.value === 'number') { // doesn't work
        alert('Please, don\'t use numbers!');
    } else if (allFoods.includes(inputProduct.value.toLowerCase())) {
        alert('This item is already on the list!') 
        return inputProduct.value
    } else {
        addProductContinue()
    }

    function addProductContinue() {
        if (allFoods.includes(inputProduct.value.toLowerCase())) {
            alert('This item is already on the list!')
            return inputProduct.value
        } else {

            allFoods.unshift(inputProduct.value.toLowerCase())
            console.log(allFoods)

            // create the list element + div elements inside
            const li = document.createElement('li')

            // this is for the entered value
            let div1 = document.createElement('div')
            div1.classList.add('div1')
            div1.innerText = inputProduct.value.toLowerCase()
            li.appendChild(div1)
            

            // add counter
            const counter = document.createElement('div')
            counter.classList.add('counter')
            counter.setAttribute('id', 'counter')
            counter.innerHTML = integer
            li.appendChild(counter)

            // this is for the buttons of the value
            let div2 = document.createElement('div')
            div2.classList.add('div2')
            li.appendChild(div2)

            inputProduct.value == ''
            productTable.appendChild(li)

            // add add to one list button
            const addToListButton = document.createElement('button')
            addToListButton.classList.add('add_to_list_button')
            addToListButton.textContent = 'List'
            div2.appendChild(addToListButton)

            // add delete button
            const deleteButton = document.createElement('button') // first need to create the element, then append
            deleteButton.classList.add('delete_button')
            deleteButton.textContent = 'Del';
            div2.appendChild(deleteButton)

            // add add one more button
            const addOneMoreButton = document.createElement('button')
            addOneMoreButton.classList.add('add_one_more_button')
            addOneMoreButton.textContent = '+'
            div2.appendChild(addOneMoreButton)

            // add remove one button
            const removeOne = document.createElement('button')
            removeOne.classList.add('remove_one_button', 'opacity')
            removeOne.disabled = true
            removeOne.textContent = '-'
            div2.appendChild(removeOne)

            // delete the li element
            deleteButton.addEventListener('click', function () {
                li.remove()
                allFoods.splice(div1.innerText)
                console.log(allFoods)
            })


            // add to the array 
            addToListButton.addEventListener('click', function () {
                const promptBox = document.createElement('div')
                promptBox.classList.add('prompt_box')
                div2.appendChild(promptBox)

                // text inside prompt box
                const textInsidePromptBox = document.createElement('p')
                textInsidePromptBox.classList.add('text_inside_prompt_box')
                textInsidePromptBox.innerText = 'Which list would you like to add this item to?'
                promptBox.appendChild(textInsidePromptBox)

                // healthy button prompt
                const promptHealthyButton = document.createElement('button')
                promptHealthyButton.classList.add('promptHealthyButton')
                promptHealthyButton.innerText = 'Healthy'
                promptBox.appendChild(promptHealthyButton)

                promptHealthyButton.addEventListener('click', function () {
                    if (healthyFoods.includes(div1.innerText)) {
                        alert('This item is already on the healthy list!')
                        promptBox.remove()
                    } else {
                        healthyFoods.unshift(div1.innerText)
                        forHealthyIndividual()
                        promptBox.remove()
                    }
                })

                // treats button prompt
                const promptUnhealthyButton = document.createElement('button')
                promptUnhealthyButton.classList.add('promptUnhealthyButton')
                promptUnhealthyButton.innerText = 'Treats'
                promptBox.appendChild(promptUnhealthyButton)
                
                promptUnhealthyButton.addEventListener('click', function () {
                    if (treats.includes(div1.innerText)) {
                        alert('This item is already on the treats list!')
                        promptBox.remove()
                    } else {
                        treats.unshift(div1.innerText)
                        forTreatsIndividual()
                        promptBox.remove()
                    }
                })
            })
                 
                
                
                
            // NEXT SECTION: WORKING WITH THE HEALTHY AND TREATS LIST
            
            // healthy label function
            function forHealthyIndividual() {
                const healthyLabel = document.createElement('label')
                healthyLabel.setAttribute('id', 'healthy_label')
                healthyLabel.classList.add('healthy_label')
                healthyFoodsArray.appendChild(healthyLabel)
                //////////////////////////////////////////////////////////////////////////// toLowerCase here. But I just need to force it upon entry.
                healthyLabel.innerText = (healthyFoods[0])
            

                // clicking on the treat starts this function
                healthyLabel.addEventListener('click', function () {
                    const arrayPromptBox = document.createElement('div')
                    arrayPromptBox.classList.add('prompt_box')
                    healthyFoodsArray.appendChild(arrayPromptBox)
                    
                    // Add this item to the shopping list 
                    const promptHealthyButtonAddToList = document.createElement('button')
                    promptHealthyButtonAddToList.classList.add('prompt_Healthy_Button_Add_To_List')
                    promptHealthyButtonAddToList.innerText = 'Add to list'
                    arrayPromptBox.appendChild(promptHealthyButtonAddToList)


                    promptHealthyButtonAddToList.addEventListener('click', function () {
                        if (div1.innerText == healthyLabel.innerText) {
                            addProductContinue()
                            counter.classList.remove('opacity')
                            removeOne.classList.remove('opacity')
                            removeOne.disabled = false
                            arrayPromptBox.remove()
                    
                        }
                    })
                    
                    
                    // Delete this item from the treats list
                    const promptHealthyButtonRemoveFromArray = document.createElement('button')
                    promptHealthyButtonRemoveFromArray.classList.add('prompt_Healthy_Button_Remove_From_Array')
                    promptHealthyButtonRemoveFromArray.innerText = 'Delete'
                    arrayPromptBox.appendChild(promptHealthyButtonRemoveFromArray)
            
                    // function triggered by the RemoveFromArray
                    promptHealthyButtonRemoveFromArray.addEventListener('click', function () {
                        healthyLabel.remove()
                        arrayPromptBox.remove()
                        healthyFoods.splice(healthyLabel.value)
                    })
                    
                    // text inside treats prompt box
                    const textInsideHealthyPromptBox = document.createElement('p')
                    textInsideHealthyPromptBox.classList.add('text_Inside_Healthy_Prompt_Box')
                    textInsideHealthyPromptBox.innerText = 'Add to shopping list or delete from healthy foods?'
                    arrayPromptBox.appendChild(textInsideHealthyPromptBox)
                })
            }
            
    

            
                    
            // treats label function
            function forTreatsIndividual() {
                const treatsLabel = document.createElement('label')
                treatsLabel.setAttribute('id', 'treats_label')
                treatsLabel.classList.add('treats_label')
                treatsArray.appendChild(treatsLabel)
                treatsLabel.innerText = (treats[0])

                // clicking on the treat starts this function
                treatsLabel.addEventListener('click', function () {
                    const arrayPromptBox = document.createElement('div')
                    arrayPromptBox.classList.add('prompt_box')
                    treatsArray.appendChild(arrayPromptBox)
                
                    // Add this item to the shopping list 
                    const promptTreatsButtonAddToList = document.createElement('button')
                    promptTreatsButtonAddToList.classList.add('prompt_Treats_Button_Add_To_List')
                    promptTreatsButtonAddToList.innerText = 'Add to list'
                    arrayPromptBox.appendChild(promptTreatsButtonAddToList)
                    
                    // the function triggered by the AddToList
                    promptTreatsButtonAddToList.addEventListener('click', function () {
                        if (div1.innerText == treatsLabel.innerText) {
                            addProductContinue()
                            counter.classList.remove('opacity')
                            removeOne.classList.remove('opacity')
                            removeOne.disabled = false
                            arrayPromptBox.remove()
                    
                        }
                    })
                    
                
                    // Delete this item from the treats list
                    const promptTreatsButtonRemoveFromArray = document.createElement('button')
                    promptTreatsButtonRemoveFromArray.classList.add('prompt_Treats_Button_Remove_From_Array')
                    promptTreatsButtonRemoveFromArray.innerText = 'Delete'
                    arrayPromptBox.appendChild(promptTreatsButtonRemoveFromArray)
                
                    // function triggered by the RemoveFromArray
                    promptTreatsButtonRemoveFromArray.addEventListener('click', function () {
                        treatsLabel.remove()
                        arrayPromptBox.remove()
                        treats.splice(treatsLabel.value)
                    })
                

                    // text inside treats prompt box
                    const textInsideTreatsPromptBox = document.createElement('p')
                    textInsideTreatsPromptBox.classList.add('text_Inside_Treats_Prompt_Box')
                    textInsideTreatsPromptBox.innerText = 'Add to shopping list or delete from treats?'
                    arrayPromptBox.appendChild(textInsideTreatsPromptBox)
                })
            }
            
        
    
            // add one more of this item to the counter
            addOneMoreButton.addEventListener('click', function () {
                removeOne.classList.remove('opacity')
                removeOne.disabled = false
                counter.classList.remove('opacity')
                integer += 1
                counter.innerHTML = integer
        
            })
    
            // remove one of this item from the counter
            removeOne.addEventListener('click', function () {
                counter.innerHTML = integer

                if (integer > 0) {
                    integer -= 1
                } else if (counter.innerHTML < 1) {
                    allFoods.splice(div1.innerText)
                    li.remove()
                    alert(`That was the last ${div1.innerText}`) // 
                }
            })
        }
    }            
}
        
            
        
        
        
    
        
       
    















        
             






// JUNK CODE / THINGS I TRIED THAT DIDN'T MAKE IT IN







/*
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
*/






// dropping these for now
/* 
function plus() {
            for (let i = 0; i < healthyFoods.length; i++) {
                if (li.includes(healthyFoods[healthyFoods[i]])) {
                    healthyFoodPlus.classList.remove('opacity')
                    console.log('Healthy item added')
                } 
            }
            for (let i = 0; i < unhealthyFoods.length; i++) {
                if (li.includes(unhealthyFoods[unhealthyFoods[i]])) {
                    unhealthyFoodMinus.classList.remove('opacity')
                    console.log('Unhealthy item added')
                }
            }
        }

        plus

        // remove functions
// healhy item removed
function removed1() {
    for (let i = 0; i < healthyFoods.length; i++) {
        if (productTable.value == (healthyFoods[healthyFoods[i]])) {
            healthyFoodPlus.classList.add('opacity')
        }
    }
}

// unhealthy item removed
function removed2() {
    for (let i = 0; i < unhealthyFoods.length; i++) {
        if (productTable.value == (unhealthyFoods[unhealthyFoods[i]])) {
            unhealthyFoodMinus.classList.add('opacity')
        }
    }
}

// healthy item added
        function plus1() {
            for (let i = 0; i < healthyFoods.length; i++) {
                if (productTable.innerHTML == (healthyFoods[healthyFoods[i]])) {
                    healthyFoodPlus.classList.remove('opacity')
                } 
            }
        }
        
                // unhealthy item added
        function minus1() {
            for (let i = 0; i < unhealthyFoods.length; i++) {
                if (productTable.innerHTML == (unhealthyFoods[unhealthyFoods[i]])) {
                    unhealthyFoodMinus.classList.remove('opacity')
                }
            }
        }

*/






/* THIS SORTA WORKS

function addProduct() {
     
    if (inputProduct.value === '') {
        alert('Enter an item');
    } else if (typeof inputProduct.value === 'number') {
        alert('Please, don\'t use numbers!');
    } else {
        function plus() {
            for (let i = 0; i < healthyFoods.length; i++) {
                if (li.includes(healthyFoods[healthyFoods[i]])) {
                    healthyFoodPlus.classList.remove('opacity')
                    console.log('Healthy item added')
                } 
            }
            for (let i = 0; i < unhealthyFoods.length; i++) {
                if (li.includes(unhealthyFoods[unhealthyFoods[i]])) {
                    unhealthyFoodMinus.classList.remove('opacity')
                    console.log('Unhealthy item added')
                }
            }
        }

        plus

        // create the list element
        let li = document.createElement('li')
        li.innerHTML = inputProduct.value
        inputProduct.value == '' 
        productTable.appendChild(li)  
        
        // add delete button
        const deleteButton = document.createElement('button') // first need to create the element, then append
        deleteButton.classList.add('delete_button') 
        deleteButton.textContent = 'Del';
        li.appendChild(deleteButton)

        // add add one more button
        const addOneMoreButton = document.createElement('button')
        addOneMoreButton.classList.add('add_one_more_button')
        addOneMoreButton.textContent = 'Add'
        li.appendChild(addOneMoreButton)

        // add remove one button
        const removeOne = document.createElement('button')
        removeOne.classList.add('remove_one_button', 'opacity')
        removeOne.textContent = 'Remove'
        li.appendChild(removeOne)

        // add counter
        const counter = document.createElement('div')
        counter.classList.add('counter', 'opacity')
        counter.setAttribute('id', 'counter')
        counter.textContent = '0'
        li.appendChild(counter)




        // delete the list element
        deleteButton.addEventListener('click', function(){ 
            li.remove()
        })

        // add one more of this item to the counter
        addOneMoreButton.addEventListener('click', function(){
            removeOne.classList.remove('opacity')
            counter.classList.remove('opacity')
            counter.innerHTML = integer
            integer += 1
            

        // remove one of this item from the counter
            removeOne.addEventListener('click', function(){
            counter.classList.remove('opacity')
            
            counter.innerHTML = integer;
                if (integer > 0) {
                    integer -= 1
                } else if (integer = 0) {
                    alert(`None left!`)
                } 
        })    
        })
    } 
}
*/












/* 

function forTreats() {
    for (let i = 0; i < treats.length; i++) {
        const treatsLabel = document.createElement('label')
        treatsLabel.setAttribute('id', 'treats_label')
        treatsLabel.classList.add('treats_label')
        treatsArray.appendChild(treatsLabel)
        treatsLabel.toLowerCase()
        treatsLabel.innerText = (treats[i])
        
    }
}

forTreats()


function forHealthy() {
    for (let i = 0; i < healthyFoods.length; i++) {
        const healthyLabel = document.createElement('label')
        healthyLabel.setAttribute('id', 'healthy_label')
        healthyLabel.classList.add('healthy_label')
        healthyFoodsArray.appendChild(healthyLabel)
        healthyLabel.toLowerCase()
        healthyLabel.innerText = (healthyFoods[i])

    }
}

forHealthy()
*/


/* 

// the array function
            function plus() {
                for (let i = 0; i < healthyFoods.length; i++) {
                    if (div1.innerText == (healthyFoods[i])) {
                        // but I set it equal to something else...
                        // once I changed li.innerHTML to the div1, it worked.

                        console.log('Healthy item added')
                        healthyFoodPlus.classList.remove('opacity')
                        // the healthy meal animation would play here
                    }
                }
                for (let i = 0; i < treats.length; i++) {
                    if (div1.innerText == (treats[i])) {
                        console.log('Unhealthy item added')
                        unhealthyFoodMinus.classList.remove('opacity')
                        // the cake animation would play here
                    }
                }
            }

            plus()

*/

/* 

<!-- scrapped features -->
<div id="minus" class="minus">
    <div id="unhealthy_minus" class="unhealthy_minus opacity">
    </div>
</div>

<div id="plus" class="plus">
    <div id="healthy_plus" class="healthy_plus cross opacity">
    </div>
</div>
<!-- -->
*/