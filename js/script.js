// =======================================================================
// let reviewContainer = document.getElementById("reviewContainer")
// let reviewInput = document.getElementById("reviewInput")
// let addReviewBtn = document.getElementById("addReviewBtn")

// addReviewBtn.addEventListener("click", ()=> {
//     let inputValue = reviewInput.value 
//     // console.log(inputValue);
//     let paragraph = document.createElement("p")
//     paragraph.innerHTML= inputValue
//     reviewContainer.appendChild(paragraph)
//     reviewInput.value=""   
// })
// =======================================================================


let deleteContent = document.getElementById("deleteContent")
let deleteInput = document.getElementById("deleteInput")
let deleteBtn = document.getElementById("deleteBtn")

deleteInput.addEventListener("keyup", ()=>{
    // console.log(deleteInput.value);
    if (deleteInput.value == "Delete") {
        deleteBtn.removeAttribute("disabled")
    }
    else{
        deleteBtn.setAttribute("disabled", true)
    }
    deleteBtn.addEventListener("click", ()=>{
        deleteContent.style.display="none"
        deleteInput.value=""
    })
})