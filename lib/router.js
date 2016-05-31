
// Configure the Router to default layout
Router.configure({
    layoutTemplate: 'layout'
});


Router.configure({
    layoutTemplate: 'gatelayout'

});




// This is the home page
Router.map(function(){

    // Gate Page
    this.route('gatepage', {
        path: '/gatepage',
        layoutTemplate: 'gatelayout',
        template: 'gatepage'
    });   

    // Front Page
    this.route('frontpage', {
        path: '/',
        layoutTemplate: 'layout',
        template: 'frontpage'
    }); 

    // dashboard
    this.route('dashboard', {
        path: '/dashboard',
        layoutTemplate: 'layout',
        template: 'dashboard'
    }); 

    // assign Roles
    this.route('assignroles', {
        path: '/assignroles',
        layoutTemplate: 'layout',
        template: 'assignroles'
    }); 

    // add Products
    this.route('addproducts', {
        path: '/addproducts',
        layoutTemplate: 'layout',
        template: 'addproducts'
    }); 

    // stores
    this.route('stores', {
        path: '/stores',
        layoutTemplate: 'layout',
        template: 'stores'
    }); 

    // offers
    this.route('offers', {
        path: '/offers',
        layoutTemplate: 'layout',
        template: 'offers'
    }); 

   // help
    this.route('help', {
        path: '/help',
        layoutTemplate: 'layout',
        template: 'help'
    }); 


    //Wishlist Page
    this.route('wishlistpage', {
        path: '/wishlistpage',
        layoutTemplate: 'layout',
        template: 'wishlistpage'
    });

    //Compare products page
    this.route('comparepage', {
        path: '/comparepage',
        layoutTemplate: 'layout',
        template: 'comparepage'
    });


	// Home Page
    this.route('home', {
        path: '/home',
        layoutTemplate: 'layout',
        template: 'home'
    });

	//Blog Page
	this.route('blog', {
        path: '/blog',
        layoutTemplate: 'layout',
        template: 'blog'
    });

	//checkout
	this.route('checkout', {
        path: '/checkout',
        layoutTemplate: 'layout',
        template: 'checkout'
    });

	//cart
	this.route('cart', {
        path: '/cart',
        layoutTemplate: 'layout',
        template: 'cart'
    });

    //contact
    this.route('contact', {
        path: '/contact',
        layoutTemplate: 'layout',
        template: 'contact'
    });

    //ProductINfo
    this.route('productinfo', {
        path: '/productinfo',
        layoutTemplate: 'layout',
        template: 'productinfo'
    });

});


