// JavaScript Document

$(window).load(function() {  
    var $container = $('#container');
    //Run to initialise column sizes
    updateSize();

    //Load masonry when images all loaded
    $container.imagesLoaded( function(){

        $container.isotope({
            // options
            itemSelector : '.transition',	
            layoutMode : 'masonry',
            transformsEnabled: true,
            columnWidth: function( containerWidth ) {
                containerWidth = $browserWidth;
                return Math.floor(containerWidth / $cols);
              }
        });
    });
    
	    // update columnWidth on window resize
    $(window).smartresize(function(){  
        updateSize();
        $container.isotope( 'reLayout' );
    });
	
    //Set item size
    function updateSize() {
        $browserWidth = $container.width();
        $cols = 4;

        if ($browserWidth >= 1200) {
            $cols = 4;
        }
        else if ($browserWidth >= 800 && $browserWidth < 1200) {
            $cols = 4;
        }
        else if ($browserWidth >= 480 && $browserWidth < 800) {
            $cols = 3;
        }
        else if ($browserWidth >= 320 && $browserWidth < 480) {
            $cols = 2;
        }
        else if ($browserWidth < 401) {
            $cols = 2;
        }

        // $gutterTotal = $cols * 20;
		$browserWidth = $browserWidth; // - $gutterTotal;
        $itemWidth = $browserWidth / $cols;
        $itemWidth = Math.floor($itemWidth);

        $(".transition").each(function(index){
            $(this).css({"width":$itemWidth+"px"});             
        });
    };
});

