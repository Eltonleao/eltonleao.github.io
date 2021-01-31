$(document).ready(function () {
    console.log("%c runing..", "background: green; color: white");
    $(".spinner-border").hide();
});


function getText() {
    $(".spinner-border").show();

    var url = $("#search").val();
    var cors = "https://cors-anywhere.herokuapp.com/"+url;
    // console.log(cors);
    // return false;

    $.ajax({
        url: "https://api-elton.herokuapp.com/api/getTextFromSite/"+url,

        // url : url,
        type: 'GET',
        success: function(res) {

            // var text = res.responseText;
            console.log(res);
            $('#content').html(res);
            $('.temp').html(res);
            var p = $('.temp').find('p');
            var html = "";
            for(let i =0; i< p.length; i++){
                html += "<p>";
                // console.log($(p[i]).html());
                html += $(p[i]).html();
                html += "</p>";
            }
            // console.log(html);
            $('.content').html(html);
            window.location.hash = "content";
            $(".spinner-border").hide();
            // then you can manipulate your text as you wish
        },
        error: function(){
            $(".spinner-border").hide();

        }
    });
}