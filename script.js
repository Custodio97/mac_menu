let firstContainer = document.querySelector('.first-container')

let bigIcon = "scale(1.4) translateY(-1.5vw)"
let middleIcon = "scale(1.2) translateY(-1vw)"
let smallIcon = "scale(1.1) translateY(-0.5vw)"
let normalIcon = "scale(1) translateY(0)"

let icons = document.querySelectorAll(".icon")

icons.forEach((item, index)=> {
    icons[index].addEventListener("mouseover", function(ePC){
        let next1 = index + 1
        let prima1 = index - 1
        
        let next2 = index + 2
        let prima2 = index - 2
        
        firstContainer.style.gap = "0.8vw"
        
        if (ePC.target === icons[0]) {
            this.style.transform = bigIcon

            icons[next1].style.transform = middleIcon
            icons[next2].style.transform = smallIcon
        } else if (ePC.target === icons[icons.length - 1]) {
            this.style.transform = bigIcon
            
            icons[prima1].style.transform = middleIcon
            icons[prima1].style.transform = smallIcon
        } else {
            this.style.transform = bigIcon
            icons[next1].style.transform = middleIcon
            icons[prima1].style.transform = middleIcon
            
            icons[next2].style.transform = smallIcon
            icons[prima2].style.transform=smallIcon
        }
    })
    icons[index].addEventListener("mouseout", function () {
        icons.forEach((item1, hideIndex) => {
            icons[hideIndex].style.transform=normalIcon
        })
        firstContainer.style.gap="0vw"
    })

    icons[index].addEventListener("touchmove", function (eMobile) {
        let next1 = index + 1
        let prima1 = index - 1

        let next2 = index + 2
        let prima2 = index - 2

        firstContainer.style.gap = "0.8vw"

        if (eMobile === icons[0]) {
            this.style.transform = bigIcon

            icons[next1].style.transform = middleIcon
            icons[next2].style.transform = smallIcon
        } else if (eMobile === icons[icons.length - 1]) {
            this.style.transform = bigIcon

            icons[prima1].style.transform = middleIcon
            icons[prima1].style.transform = smallIcon
        } else {
            this.style.transform = bigIcon
            icons[next1].style.transform = middleIcon
            icons[prima1].style.transform = middleIcon

            icons[next2].style.transform = smallIcon
            icons[prima2].style.transform = smallIcon
        }
    })
    icons[index].addEventListener("touchend", () => {
        icons.forEach((item1, hideIndex) => {
            icons[hideIndex].style.transform = normalIcon
        })
        firstContainer.style.gap = "0vw"
    })
})
