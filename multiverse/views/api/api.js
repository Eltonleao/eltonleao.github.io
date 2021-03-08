$(document).ready(function () {
    console.log("%c api is running...", "background: black; color: white; font-size: 20pt; font-weight: 900; padding: 10px");
    fetch('https://api-elton.herokuapp.com/api/users', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'API-Key': 'secret'
        }
    }).then(res=>{
        return res.json();
    }).then(res =>{
        console.log(res);

        var $html = "";

        res.forEach(element => {
           $html += `<p>${element.name}</p>`; 
        });
        $(".content").html($html);
    });
});