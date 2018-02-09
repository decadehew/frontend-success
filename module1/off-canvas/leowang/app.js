
var status = true;
$('body').on('click','.clickSide',(function(status){
    return function(){
        if(Boolean(status) == true){
            $('.sideNav').sideNav('open');
            status = false;
        }else{
            $('.sideNav').sideNav('close');
            status = true;
        }
    }
})(status));