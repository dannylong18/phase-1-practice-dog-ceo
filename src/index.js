document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((resp) => resp.json())
    .then(function (data) {
        data.message.forEach((element) => {
            let img = document.createElement('img')
            img.src = element
            let dogContainer = document.getElementById('dog-image-container')
            dogContainer.appendChild(img)
        })
    })

    fetch('https://dog.ceo/api/breeds/list/all')
    .then((resp) => resp.json())
    .then(function (breeds) {
        Object.keys(breeds.message).forEach((ele) => {
            let li = document.createElement('li')
            li.innerText = ele
            let dogList = document.querySelector('ul#dog-breeds')
            dogList.appendChild(li)
            li.addEventListener('click', (e) => {
                e.target.style.color = 'blue'
            })

            let filterBreed = document.getElementById('breed-dropdown')
            filterBreed.addEventListener ('change', (e) => {
                let letter = filterBreed.value 
                let filteredList = Object.keys(breeds.message).filter((breed) => breed.startsWith(letter))
                let dogList = document.querySelector('ul#dog-breeds')
                dogList.innerHTML = ''
                filteredList.forEach((dog) => {
                    let li = document.createElement('li')
                    li.innerText = dog
                    dogList.appendChild(li)
                })
            })
        })
    })
})


