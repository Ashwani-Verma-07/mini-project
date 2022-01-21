const scriptURL = 'https://script.google.com/macros/s/AKfycbzxp3F0o8cHakGKFGCw0vbQes_ICrKXj1S9VSyo4c-nSBvZtkZO/exec'
        const form = document.forms['google-sheet']

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
        })      
