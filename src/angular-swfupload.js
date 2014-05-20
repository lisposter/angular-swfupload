angular.module('angular.swfupload', []).
provider('uiSwfuploadOptions', function() {

    var defaultOptions = {

    };

    this.setOption = function(options) {
        angular.extend(defaultOptions, options);
    }
    
    this.$get = function() {
        return defaultOptions;
    };
}).
directive('uiSwfupload', ['$document', '$window', 'uiSwfuploadOptions',
    function($document, $window, uiSwfuploadOptions) {
        
        var defaultOptions = uiSwfuploadOptions || {};

        return {
            priority: 10,
            link: function(scope, elm, attrs) {
                if ( attrs.swfOption ) {
			        var swfOption = scope[attrs.swfOption]
                    var options = angualr.extend(defaultOptions, swfOption);
                    scope[attrs.swfuploadId] = new SWFUpload(options);
			    }

            }
        }
    }
]);