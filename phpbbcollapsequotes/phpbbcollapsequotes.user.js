// ==UserScript==
// @name         phpbbcollapsequotes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a button which shows/hides quotes in phpBB boards. Based on phpbbcollapsequickreply
// @homepage     https://github.com/tskho/userscripts/tree/master/phpbbcollapsequotes
// @supportURL   https://github.com/ardiman/userscripts/issues
// @author       You
// @match        */viewtopic.php*
// @grant        none
// @date         2017-07-17
// ==/UserScript==


    $( 'div.postbody div div.content blockquote').before('<div id="reprap" class="panel" style="text-align: left;"><input class="button2" type="submit" value="Show quote"></div>').css('display', 'none');
    $('#reprap input[type=submit]').click(function(){
        $(this).parent().toggleClass('ouvert').next('div.postbody div div.content blockquote').slideToggle();
        $('#reprap input[type=submit]').val('Show quote');
        $('#reprap.ouvert input[type=submit]').val('Hide quote');
});