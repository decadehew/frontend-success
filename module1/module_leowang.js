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

    jquery.fn.modal = function(data){
        switch(data){
            case 'open':
                break;
            case 'close':
                break;
        }
    }
})(jQuery)