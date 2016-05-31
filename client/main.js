import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '/imports/startup/client';


// Pre Loaded Scripts to Load in the client!!!
Template.layout.rendered = function() {
$('head').append('<script type="text/javascript" src="js/retina.js"></script>');
$('head').append('<script type="text/javascript" src="js/jquery.flexslider-min.js"></script>');
$('head').append('<script type="text/javascript" src="js/jackbox-packed.min.js"></script>');
$('head').append('<script type="text/javascript" src="js/jquery.themepunch.plugins.min.js"></script>');
$('head').append('<script type="text/javascript" src="js/jquery.themepunch.revolution.min.js"></script>');
$('head').append('<script type="text/javascript" src="js/waypoints.min.js"></script>');
$('head').append('<script type="text/javascript" src="js/jquery.isotope.min.js"></script>');
$('head').append('<script type="text/javascript" src="js/owl.carousel.min.js"></script>');
$('head').append('<script type="text/javascript" src="js/jquery.tweet.min.js""></script>');
$('head').append('<script type="text/javascript" src="js/jquery.custom-scrollbar.js"></script>');
$('head').append('<script type="text/javascript" src="js/scripts.js"></script>');
$('head').append('<script type="text/javascript" src="http://s7.addthis.com/js/300/addthis_widget.js#pubid=xa-5306f8f674bfda4c"></script>');

};
