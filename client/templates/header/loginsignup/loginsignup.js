// Javascript file for the Accounts and users to be registered


// First Subscribe to the users
Meteor.subscribe("users");



// Login functionality
Template.loginform.events({

	// submit event to log in a user
    'submit .form-login': function(event){

    	event.preventDefault();

		// Get the email and password fields
        var email = trimInput(event.target.email.value);
        var password = trimInput(event.target.password.value);

			// Login the user with the fields given
			Meteor.loginWithPassword(email, password, function(err){

	            if (err) {

	            	// persist longer for errors
	            	FlashMessages.clear();
	            	FlashMessages.sendError(err.reason, { autoHide: true, hideDelay: 5000 });

	            	// Persist the fields if the credentials are wrong
	                event.target.email.value = email;
	                event.target.password.value = password;

	            }
	            else{

					FlashMessages.clear();
	                FlashMessages.sendSuccess("Log in Successful", { autoHide: true, hideDelay: 500 });

	                // Close the pop up and continue to correct route
	                $( '.close' ).click ();
	        		Router.go('/');
	            }

	        });

		return false;
    },


    // Switch between the signup and login 
    'click .createaccount': function(event){

        //Close the current popup and open the signup
        $( '.close' ).click ();
	}

});


// Signup functionality
Template.signupform.events({

	'submit .form-signup': function(event){
    	event.preventDefault();

		// only email, password for now!
        var email = trimInput(event.target.email.value);
        var password = trimInput(event.target.password.value);
        var password2 = trimInput(event.target.password2.value);

		// validate the fields before creating the user
        if(isNotEmpty(email) && isNotEmpty(password) && isEmail(email) && areValidPasswords(password,password2)){

	        id = Accounts.createUser({
	            email: email,
	            password: password,

	        }, function(err){

	        	if(err){

					FlashMessages.clear();
					FlashMessages.sendError(err.reason, { autoHide: true, hideDelay: 5000 });

	        	}else{

					FlashMessages.clear();
        			FlashMessages.sendSuccess("Account Created! Welcome Niyotaa user", { autoHide: true, hideDelay: 1000 });
					$( '.close' ).click ();

					Router.go('/');
	        	}

	        });


        }

     	return false;    
    },

    // Switch between the signup and login 
    'click .exisingaccount': function(event){
        //Close the current popup and open the register
        $( '.close' ).click ();

	}
});


// Log out from the session
Template.headertop.events({

    'click .logout-user': function(event){

        Meteor.logout(function(err){

            if (err) {
                FlashMessages.sendError(err.reason);
            } else {
                FlashMessages.sendSuccess("Logout Successful", { autoHide: true, hideDelay: 500 });
                Router.go('/');
            }

        });

        return false;
    }

});



// validate Input fields for both login and signup

//Trim helper
var trimInput = function(val){
	return val.replace(/^\s*|\s*$/g, "");
}

//Check for Empty fields
var isNotEmpty = function(value){
	if(value && value !== ''){
		return true;
	}
	FlashMessages.sendError("Please fill in all the fields");
	return false;
}

//validate email
var isEmail = function (value) {
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( filter.test(value)){
    	return true;
    }
	FlashMessages.sendError("Please use a valid email address", { autoHide: true, hideDelay: 5000 });
	return false;
}

//validate paswword length
var isValidPassword = function(password){
	if(password.length < 6){
		FlashMessages.sendError("Password must me atleast 6 characters", { autoHide: true, hideDelay: 5000 });
		return false;
	}
	return true;
}

// Match password
var areValidPasswords = function(password, confirm){
	if(!isValidPassword(password)){
		return false;
	}

	if(password !== confirm){
		FlashMessages.sendError("Password do not match", { autoHide: true, hideDelay: 5000 });
		return false;
	}
	return true;
}