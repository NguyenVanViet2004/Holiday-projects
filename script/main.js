window.addEventListener('load', () => {
    const userName = localStorage.getItem('userName')
    
    const greetingElement = document.querySelector('#greeting')
    
    if (userName) {
        greetingElement.innerHTML = `Gửi ${userName} xinh gái!!!`
    } else {
        greetingElement.innerHTML = `Gửi bạn xinh gái!!!` 
    }
    document.querySelector('.song').play()
})

const b = document.querySelector('button.button--no')
    b.addEventListener("mouseover", moveHover)

    function moveHover() {
        const i = Math.floor(Math.random() * 500) + 1
        const j = Math.floor(Math.random() * 500) + 1
        b.style.transform = `translate(${i}px, ${j}px)`
    }

    let btnyes = document.querySelector('.button--yes')
    let mail = document.querySelector('.mail')
    let text1 = document.querySelector('.text1')
    let text2 = document.querySelector('.text2')
    let yes = document.querySelector('#yes')
    let no = document.querySelector('#no')

    btnyes.onclick = function () {
        mail.classList.toggle('active')
        text1.classList.toggle('active')
        text2.classList.toggle('active')
        yes.classList.toggle('active')
        no.classList.toggle('active')
    }
