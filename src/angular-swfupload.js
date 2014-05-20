angular.module('angular.swfupload', []).
provider('uiSwfuploadOptions', function() {

    var defaultOptions = {
        upload_url: '',
        file_post_name: 'file',
        post_params: { },

        flash_color: 'transparent',
        file_size_limit : "30KB", // 100MB
        file_types : "*.jpg;*.gif;*.png;*.jpeg",
        //file_types_description : "Images",
        file_upload_limit : "0",
        file_queue_limit : "0",

        // Event Handler Settings (all my handlers are in the Handler.js file)
        // file_dialog_start_handler : uploadHandle.fileDialogStart,
        // // file_queued_handler : fileQueued,
        // file_queue_error_handler : uploadHandle.fileQueueError,
        // file_dialog_complete_handler : uploadHandle.file404DialogComplete,
        // upload_start_handler : uploadHandle.uploadStart,
        // upload_progress_handler : uploadHandle.uploadProgress,
        // upload_error_handler : uploadHandle.uploadError,
        // upload_success_handler : uploadHandle.uploadSuccess,
        // upload_complete_handler : uploadHandle.uploadComplete,

        // Button Settings

        button_image_url: "",
        button_width: "180",
        button_height: "180",

        
        // Flash Settings
        flash_url : "../lib/swfupload.swf",
        
        
        // Debug Settings
        debug: false
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
                    var options = angular.extend(defaultOptions, swfOption);
                    options.button_placeholder_id = attrs.id;
                    scope[attrs.id] = new SWFUpload(options);
			    }

            }
        }
    }
]);