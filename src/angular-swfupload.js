angular.module('angular.swfupload', []).
provider('uiSwfupload', function() {
    
    this.$get = function() {

    };
}).
directive('uiSwfupload', ['$document', '$window', 'uiSwfupload',
    function($document, $window, uiSwfupload) {
        

        return {
            priority: 10,
            link: function(scope, elm, attrs) {
                
            }
        }
    }
]);