# Angular swfupload


In dev now




## Config

The directive can be configed by global config through the `uiSwfuploadOptionsProvider.config()`. And single config by a scope varible. exp:

if you set the attribute like this `swf-options='config'`, then you can set the swfupload by create a variable which called `config` in the controller which the directive is.

both of config methods is just like the swfupload's original config. So you may look up the official docs, or see the demo to understand how it works.

The config may like this:

```js
{
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
```

MAKE SURE!

The most config are not required, but before you use it, make sure you have config the `upload_url` and `flash_url`, or it won't work in your way. :)



## LICENSE

MIT LICENSE

Copyright (C) 2014 lisposter(Leigh Zhu)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
