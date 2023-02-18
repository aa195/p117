//Create date variable
var date = new Date()
var display_date = date.toLocaleDateString()



//Load HTML DOM
$(document).ready(function(){
    $('#display_date').html(display_date)
})

//Define variable to store predicted emotion
var pemo;



//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        var input  = {
            'text':$('#text').val()
        }
        //AJAX call

        $.ajax({
            type : 'POST',
            url :'/predict-emotion',
            data:JSON.stringify(input),
            dataType : 'json',
            contentType :'application/json',
            success : function(result){
                pemo = result.data.pemo
                emoi = result.data.emoi
                $('#emo_img_url').attr('src',emoi)
                $('#prediction').html(pemo)
            },
            error:function(result){
                alert(result.responseJSON.message)
            }
            
             
            
        });
    });
})

