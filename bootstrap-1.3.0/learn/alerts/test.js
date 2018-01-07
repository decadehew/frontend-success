$(".alert-message").alert()

// (function($) {
//     var transitionEnd
//     $(document).ready(function() {
//         $.support.transition = (function() {
//             var thisBody = document.body || document.documentElement;
//             var thisStyle = thisBody.style;
//             var support = thisStyle.transition !== undefined 
//             return support;
//         })()
//         if ( $.support.transition ) {
//             transitionEnd = "TransitionEnd"
//         }
//         console.log(transitionEnd);
//     })
    
//     var Alert = function(content, selector) {
//         this.$element = $(content)
//             .delegate(selector || '.close', 'click', this.close)
//     }

//     Alert.prototype = {
//         close: function(e) {
//             var $element = $(this).parent('.alert-message')

//             e && e.preventDefault();
//             $element.removeClass('in');

//             function removeElement() {
//                 $element.remove();
//             }

//             $.support.transition && $element.hasClass('fade') ?
//                 $element.
//         }
//     }
// })( window.jQuery )