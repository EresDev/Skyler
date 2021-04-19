(function(){
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const messageOne = document.querySelector('#message-1');
    const messageTwo = document.querySelector('#message-2');

    messageOne.textContent = '';
    messageTwo.textContent = '';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        messageOne.textContent = 'Loading...';
        messageTwo.textContent = '';

        const location = input.value;

        fetch('/weather?address=' + location).then((response) => {
            response.json().then((jsonResponse) => {
                if (jsonResponse.error) {
                    messageOne.textContent = jsonResponse.error;
                } else {
                    messageOne.textContent =  jsonResponse.location;
                    messageTwo.textContent =  jsonResponse.forecast;
                }
            });
        });

    });

})();