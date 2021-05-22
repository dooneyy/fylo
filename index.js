function validate() {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(document.getElementById('email').value.match(mailformat)){
       console.log(document.getElementById('email').value);
    } else {
        document.querySelector('.small').style.visibility = 'visible';
        setTimeout(() => {
            document.querySelector('.small').style.visibility = 'hidden';
        }, 3000);
    }
};
