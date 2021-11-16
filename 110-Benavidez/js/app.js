$(document).ready(function(){
    $('#btnSubmit').click(function(){
        $.ajax({
            url:'sendEmail.php',
            type:'POST',
            cache:false,
            data:{
                name:$('#name').val(),
                lastname:$('#lastname').val(),
                email:$('#email').val(),
                phone:$('#phone').val(),
                message: $('#message').val()
            },
            success:function(response){
                alert(response)
                window.location = 'index.php';
            }
        })
    })
})