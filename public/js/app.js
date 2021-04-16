(function(){
    fetch('/weather?address=Boston').then((response) => {
        response.json().then((jsonResponse) => {
            if (jsonResponse.error) {
                console.error(jsonResponse);
            } else {
                console.log(jsonResponse);
            }
        });
    });
})();