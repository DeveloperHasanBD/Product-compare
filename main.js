
        var im_product_compare_checkbox = 0;
        var imp_product_ids = [];

        $("body").delegate(".imp_compare_checkbox", "click", function (e) {
            if ($(this).prop('checked') == true) {
                im_product_compare_checkbox++;
                if (im_product_compare_checkbox > 3) {
                    alert('Maximum 3 products added!')
                    $(this).prop("checked", false);
                    im_product_compare_checkbox--;
                } else {
                    var imp_product_id = $(this).attr("imp_product_id");
                    imp_product_ids.push(imp_product_id);
                    $('.imp_compare_checkbox_label_' + imp_product_id).text('Rimuovi');
                    $('.imp_compare_checkbox_label_' + imp_product_id).css('color', 'red');
                    // var html
                }
            } else {
                im_product_compare_checkbox--;
                var removeItem = $(this).attr("imp_product_id");
                imp_product_ids = jQuery.grep(imp_product_ids, function (value) {
                    return value != removeItem;
                });
                $('.imp_compare_checkbox_label_' + removeItem).text('Confronta');
                $('.imp_compare_checkbox_label_' + removeItem).css('color', 'black');
            }
            print_imp_product_compare_html();
        });
        $("body").delegate(".imp_compare_product_close", "click", function (e) {
            var imp_close_product_id = $(this).attr('imp_p_id');
            im_product_compare_checkbox--;
            imp_product_ids = jQuery.grep(imp_product_ids, function (value) {
                return value != imp_close_product_id;
            });
            $("#imp_compare_checkbox_" + imp_close_product_id).prop("checked", false);
            $('.imp_compare_checkbox_label_' + imp_close_product_id).text('Confronta');
            $('.imp_compare_checkbox_label_' + imp_close_product_id).css('color', 'black');
            print_imp_product_compare_html();
        });

        function print_imp_product_compare_html() {
            var html = '';
            var url_ids = '';
            if (imp_product_ids.length > 0) {

                for (var i = 0; i < imp_product_ids.length; i++) {

                    var imp_product_title = $("#imp_compare_checkbox_" + imp_product_ids[i]).attr("imp_product_title");
                    var imp_product_name = $("#imp_compare_checkbox_" + imp_product_ids[i]).attr("imp_product_name");
                    html += '<div class="col-md-3 py-3"><div class="imp_product_title_box py-1 d-flex justify-content-center align-items-center"><p class="my-0 me-2">' + imp_product_title + '</p> <span class="imp_compare_product_close" imp_p_id="' + imp_product_ids[i] + '">x</span></div></div>';

                }
                url_ids = imp_product_ids.join(".");
                var site_url = $('.imp_compare_page_link').attr('site_url');
                $('.imp_compare_page_link').attr('href', site_url + '/comparazione-prodotti/?ids=' + url_ids);
                $("#imp_product_compare_p_c").html(html);
                $(".compare-footer").show();
            }
            if (imp_product_ids.length == 0) {
                $('.imp_compare_page_link').attr('href', '#');
                $("#imp_product_compare_p_c").html('');
                $(".compare-footer").hide();
            }
        }

