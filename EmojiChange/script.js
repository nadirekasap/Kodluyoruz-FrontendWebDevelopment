const closedEmoji = document.querySelector(".emojiclosed");
const openEmoji = document.querySelector(".emojiopen");

closedEmoji.addEventListener("click",() => {
    if(openEmoji.classList.contains("emojiopen")){
        openEmoji.classList.add("active");
        closedEmoji.classList.remove("active");
    }
})

openEmoji.addEventListener("click",() =>{
    if(closedEmoji.classList.contains("emojiclosed")){
        closedEmoji.classList.add("active");
        openEmoji.classList.remove("active");
    }
})