function linkify(){
  
  regex = new RegExp(
            "(^|[ \t\r\n])((ftp|http|https|gopher|mailto|news|nntp|telnet|wais|file|prospero|aim|webcal):(([A-Za-z0-9$_.+!*(),;/?:@&~=-])|%[A-Fa-f0-9]{2}){2,}(#([a-zA-Z0-9][a-zA-Z0-9$_.+!*(),;/?:@&~=%-]*))?([A-Za-z0-9$_+!*();/?:~-]))"
           ,"g"
         );

  $('.message_body').not('.linkified').each(function(index){
    var oldHTML=$(this).html();

    var match=regex.exec(oldHTML);
      if(match){
        var link='<a href="'+match[0]+'">'+match[0]+'</a>';
        $(this).html(oldHTML.replace(match[0],link))
        $(this).addClass("linkified");
      }
    });
}

setInterval(function() {linkify()}, 100);
