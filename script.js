const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

var counters = document.querySelectorAll('.counter')
counters.forEach(counter => {
    
    let count=1;
    const updateCounter = () => {
        const target = counter.getAttribute('data-target')

            setInterval(()=>{
                if(count<target){
                count++;
                counter.innerText=count;
                }
            },)
            //setTimeout(updateCounter, 50)
        
    }
    updateCounter()
})

