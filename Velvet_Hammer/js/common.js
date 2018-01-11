
    // установливаем обработчик события resize
    $( window ).resize(function() {
        $( "content" ).css("width", $( window ).width() );
      $( "content" ).css("height", $( window ).height() );
  });
// вызовем событие resize
$(window).resize();














