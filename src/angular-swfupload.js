angular.module('angular.swfupload', []).
provider('uiSwfuploadOptions', function() {

    var defaultOptions = {
        upload_url : "",
        flash_url : "swfupload.swf",

        file_post_name : "Filedata",
        post_params : {
            "post_param_name_1" : "post_param_value_1",
            "post_param_name_2" : "post_param_value_2",
            "post_param_name_n" : "post_param_value_n"
        },
        use_query_string : false,
        requeue_on_error : false,
        http_success : [201, 202],
        assume_success_timeout : 0,
        file_types : "*.jpg;*.gif",
        file_types_description: "Web Image Files",
        file_size_limit : "1024",
        file_upload_limit : 10,
        file_queue_limit : 2,

        debug : false,

        prevent_swf_caching : false,
        preserve_relative_urls : false,

        button_placeholder_id : "",
        button_image_url : "http://www.swfupload.org/button_sprite.png",
        button_width : 61,
        button_height : 22,
        button_text : '<b>Click</b> <span class="redText">here</span>',
        button_text_style : ".redText { color: #FF0000; }",
        button_text_left_padding : 3,
        button_text_top_padding : 2,
        button_action : SWFUpload.BUTTON_ACTION.SELECT_FILES,
        button_disabled : false,
        button_cursor : SWFUpload.CURSOR.HAND,
        button_window_mode : SWFUpload.WINDOW_MODE.TRANSPARENT,

        swfupload_loaded_handler : null,
        file_dialog_start_handler : null,
        file_queued_handler : null,
        file_queue_error_handler : null,
        file_dialog_complete_handler : null,
        upload_start_handler : null,
        upload_progress_handler : null,
        upload_error_handler : null,
        upload_success_handler : null,
        upload_complete_handler : null,
        debug_handler : null,

        custom_settings : {
            custom_setting_1 : "custom_setting_value_1",
            custom_setting_2 : "custom_setting_value_2",
            custom_setting_n : "custom_setting_value_n",
        }
    };

    var defaultUpyun = {};

    this.setOption = function(options) {
        angular.extend(defaultOptions, options);
    };

    this.setUpyun = function(upyun) {
        angular.extend(defaultUpyun, upyun);
    };

    this.$get = function() {
        return {
            defaultOptions: defaultOptions,
            upyun: defaultOptions,
        };
    };
}).
directive('uiSwfupload', ['$document', '$window', 'uiSwfuploadOptions',
    function($document, $window, uiSwfuploadOptions) {

        function merge_config(origin, upyun) {
            try {
                var str = JSON.stringify(upyun);
            }
            catch(e) {
                var str = {};
            }

            var upyun = JSON.parse(str);

            return angular.extend(defaultOptions.post_params, upyun);

        }

        var defaultOptions = uiSwfuploadOptions || {};
        var upyun = uiSwfuploadOptions.upyun;

        
        defaultOptions = merge_config(defaultOptions, upyun);


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
