(function(jQuery){
    jQuery.fn.sideNav = function(data){
        switch(data){
            case 'open':
                $('.L-side').css('width','250px');
                $('.sideNav').css('margin-left','250px');
                break;
            case 'close':
                $('.L-side').css('width','0px');
                $('.sideNav').css('margin-left','0px');
                break;
        }
    }

    jQuery.fn.modal = function(data){
        $('body').on('click','.modal-cancel',function(){
            $('.modal').modal('close');
        })
        switch(data){
            case 'open':
                $('#modal-mask').addClass('show');
                $('.modal').addClass('show');
                break;
            case 'close':
                $('#modal-mask').removeClass('show');
                $('.modal').removeClass('show');
                break;
        }
    }
})(jQuery)