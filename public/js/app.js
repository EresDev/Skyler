(function(){
    const form = document.querySelector('form');
    const input = document.querySelector('input');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const location = input.value;

        fetch('/weather?address=' + location).then((response) => {
            response.json().then((jsonResponse) => {
                if (jsonResponse.error) {
                    console.error(jsonResponse);
                } else {
                    console.log(jsonResponse);
                }
            });
        });

    });

})();