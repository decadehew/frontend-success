$('body').on('click','.modalOpen',function(e){
    console.log(e.target);
    console.log(this);
    $('.modal').modal('open');
})

