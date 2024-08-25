const headerHamBtn = document.querySelector(".hamburgerBtn");

const headerHamClickEventor = () =>{
    const bodyElement = document.body;
    bodyElement.classList.toggle("ham-off");
}



headerHamBtn.addEventListener("click",headerHamClickEventor);