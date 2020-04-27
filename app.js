let formElement = document.querySelector("form");
let imageUrl = document.querySelector("#link");

//topTextR as for Read; topTextW as for Write
//implement modal
//make text draggable
//known bugs: wider img width messes up narrow img width, bottom text out of place

let topTextR = document.querySelector("#top-text");
let bottomTextR = document.querySelector("#bottom-text");

let ul = document.querySelector("ul");


formElement.addEventListener("submit", function(e){
  e.preventDefault();

  let memeDisplay = document.createElement("div");
  memeDisplay.id = "meme-display";
  ul.appendChild(memeDisplay);
  
   
  let meme = document.createElement("img");

  if(imageUrl.value){
    meme.setAttribute("src", imageUrl.value);
    meme.id = "meme";
    memeDisplay.appendChild(meme);
  
    imageUrl.value= "";
  
    let topTextW = document.createElement("div");
    topTextW.id = "meme-top";
    topTextW.innerText = topTextR.value;
    memeDisplay.appendChild(topTextW);
  
    topTextR.value="";
  
    let bottomTextW = document.createElement("div");
    bottomTextW.id = "meme-bottom";
    bottomTextW.innerText = bottomTextR.value;
    memeDisplay.appendChild(bottomTextW);
  
    bottomTextR.value="";
  
    //modal for remove button

  /*let modal = document.createElement("div");
  modal.id = "modal-container";
  meme.appendChild(modal);*/
  
  /*let modalContent = document.createElement("div");
  modalContent.id = "modal-content";
  modal.appendChild(modalContent);*/

  let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "&#10005";
    removeBtn.id = "remove";
    /*removeBtn.classList.add("hide");*/
    memeDisplay.appendChild(removeBtn);

    /*function toggleModal(){
        modal.classList.add("show");
        console.log("toggled")
    }*/
     
   

    meme.addEventListener("mouseenter", function(){
        removeBtn.style.display = "block";
    });

    /*meme.addEventListener("mouseout", function(event){
              modal.style.display = "none";
    })*/

    removeBtn.addEventListener("click", function(){
        ul.removeChild(memeDisplay);
  })
   

    } else {
        alert("Image please!");
        imageUrl.value= "";
    } 

    })




    
       


   

