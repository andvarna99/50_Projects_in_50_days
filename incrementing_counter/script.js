const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target') //plus turns it into a number
        const c = +counter.innerText

        const increment = target / 200

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}` //Math.ceil rounds the number up
            setTimeout(updateCounter, 1)
        }else{
            counter.innerText = target
        }
    }

    updateCounter()
})