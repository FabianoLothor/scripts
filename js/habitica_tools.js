// ==UserScript==
// @name         Habitica Tools
// @namespace    http://fabianolothor.com.br/
// @version      0.1
// @description  TODO
// @author       FabianoLothor
// @match        https://habitica.com/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    function init() {
        ajustColumns();
    }

    function ajustColumns() {
        if($('.todo').length === 0) {
            setTimeout(function() {
                ajustColumns();
            }, 1000);
        } else {
            $('.reward').hide();

            $('.todo').removeClass('col-lg-3');
            $('.todo').addClass('col-lg-6');

            var clone = $('#create-task-btn').clone();

            clone.attr('id', 'show-rewards-column');
            $('#create-task-btn').parent().prepend(clone);
        }
    }

    init();

})();