//Gettig the heart image element from the DOM
const heartIcons = document.querySelectorAll(".fa-heart")


//Getting the delete icon element from the DOM
const deleteIcon = document.querySelectorAll('.fa-trash-alt')
//console.log(deleteIcon)


//Setting Logic fro the like and unlike feature on the Heart icon
let liked = false

function heartClicked(icon){
    liked = !liked
    if(liked){
         icon.setAttribute('style', 'color:#FF0000')
    }else{
            icon.setAttribute('style', 'color:#000000')
     }
}

//logic for Heart Icon done ere
heartIcons.forEach((heart_icon)=>{
    heart_icon.addEventListener('click',(event) =>{
       heartClicked(heart_icon)
    })
})

//Quantity and Total Price with increased Button clicked logic done below


//Getting Addition element from DOM
let buttonsIncreased = document.querySelectorAll(".fa-plus-circle")


//Acessing Total price element from DOM
let totalClass = document.querySelector(".total")



//Query Selector to select the Quantities element from DOM
let quantities = document.querySelectorAll(".quantity")


//Query Selector to Select an Array of individual product prices
let prices = document.querySelectorAll(".unit-price")


//Query selector to select all Card Body elements
let cardBodies = document.querySelectorAll(".card-body-1")
console.log(cardBodies)

//Conversion of price elements arrays to Int arrays
let priceIntArray = []

prices.forEach((price) =>{
    priceIntArray.push(parseInt(price.textContent.split(" ")[0]))
})

//Keep track of the Total Price
var total = 0

//Array to keep track of Quantity
let quantity = []


//Track the total product prices
var totalQuantityPrice = [0 , 0 , 0]

//Logic for button increased done here

//Function for code abstraction
function clicked(index){
     switch (index) {
            case 0:
                total = totalQuantityPrice[index] + totalQuantityPrice[index + 1] + totalQuantityPrice[index + 2]
                break;
            case 1:
                total = totalQuantityPrice[index - 1] + totalQuantityPrice[index] + totalQuantityPrice[index + 1]
                break;
            case 2:
                total = totalQuantityPrice[index - 2] + totalQuantityPrice[index - 1] + totalQuantityPrice[index]
                break;
            default:
                break;
        }

        totalClass.textContent = " " + total.toString() + " $"
}

Array.from(buttonsIncreased).forEach((buttonIncreasd, index) => {
     quantity[index] = 0
    buttonIncreasd.addEventListener("click", (event) =>{
        //On Increase Circle clicked, increase the quantity and total price
        quantity[index]++
        quantities[index].textContent = quantity[index].toString()
        totalQuantityPrice[index] = quantity[index] * priceIntArray[index]
         clicked(index)
    })
})


//Quantity and Total Price with decreased Button clicked

//Subtraction icon element selected from DOM
let buttonsDecreased = document.querySelectorAll(".fa-minus-circle")

Array.from(buttonsDecreased).forEach((buttonDecreased, index) => {
   buttonDecreased.addEventListener('click', (event) =>{

    //Setting conditions render decrease button inactive when no quantity is selected for that product
        if(parseInt(quantities[index].textContent) === 0)
            return 


        //On Decrease Circle clicked, decrease the quantity and total price
        quantity[index]--

        quantities[index].textContent = quantity[index].toString()

        
        //Substracting the individual prices
        totalQuantityPrice[index] = totalQuantityPrice[index] - priceIntArray[index]
        clicked(index)
   })
})


//Solving the delete option
deleteIcon.forEach((icon, index) =>{
    icon.addEventListener('click', (event) =>{

        //Solving for deleting individual items
        totalQuantityPrice[index] = 0

        clicked(index)

         //Solving for deleting the quantities selected
         quantity[index] = 0

         //Setting the new default quantity in our DOM
         quantities[index].textContent = quantity[index].toString()


         //Deleting Items from Carts
         switch(index){
            case 0:
                cardBodies[index].remove()
            break;

            case 1:
                    cardBodies[index].remove()
                break;
            case 2:
                    cardBodies[index].remove()
            break;

            default:
                break;
         }
    })
})

