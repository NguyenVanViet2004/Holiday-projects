window.addEventListener('load', () => {
    const inviteButton = document.getElementById('inviteButton')
    
    inviteButton.addEventListener('click', () => {
        window.location.href = 'https://nguyenvanviet2004.github.io/Women-day/main/main.html'
    })
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
})

function checkScreenSize() {
    if (window.innerWidth < 768) {
        Swal.fire({
            title: 'Switch to Desktop Mode!',
            text: 'For the best experience, please open this page on a computer.',
            icon: 'warning',
            confirmButtonText: 'OK',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'https://nguyenvanviet2004.github.io/Women-day/mobile_waring/mobile_warning.html'
            }
        })
    } else {
        askForMusic()
    }
}

function askForMusic() {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play()
        }
        askForName()
    })
}

function askForName() {
    Swal.fire({
        title: 'What is your name?',
        input: 'text',
        inputPlaceholder: 'Enter your name',
        showCancelButton: true,
        confirmButtonText: 'Submit',
    }).then((result) => {
        if (result.isConfirmed) {
            const name = result.value.trim()
            if (validateName(name)) {
                localStorage.setItem('userName', name)
                updateTitle(name)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Name must be 1-20 characters long!',
                }).then(() => {
                    askForName()
                })
            }
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Input Required',
                text: 'Please enter your name to continue.',
            }).then(() => {
                askForName()
            })
        }
    })
}


function validateName(name) {
    return name.length > 0 && name.length <= 20
}

function updateTitle(name) {
    const titleElement = document.querySelector('.cloud h2')
    titleElement.innerText = `Happy Women's Day, ${name}! 20/10`
    setInterval(function () {
        rain()
    }, 20)
}

function rain() {
    let cloud = document.querySelector('.cloud')
    let e = document.createElement('div')

    e.classList.add('drop')
    cloud.appendChild(e)

    let left = Math.floor(Math.random() * 290);
    let size = Math.round(Math.random() * 1.5)
    let duration = Math.random() * 1

    e.innerText = '🩷'
    e.style.left = left + 'px'
    e.style.fontSize = 0.5 + size + 'em'
    e.style.animationDirection = 1 + duration + 's'

    setTimeout(function () {
        cloud.removeChild(e)
    }, 2000)
}
