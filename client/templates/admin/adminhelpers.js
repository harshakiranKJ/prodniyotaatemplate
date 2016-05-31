
Meteor.subscribe("users");

//Add an existing user to the pool of admin/warehouse/blog

Template.assignroles.events({

    'submit .adminpannel': function(event){

        event.preventDefault();
        console.log("inside login admin pannel");

        // Get the email and password fields
        var email = trimInput(event.target.email.value);

        var password = trimInput(event.target.password.value);

        // Get the Drop down
        var role = $(".selectuserid").val();


        // validate the fields before creating the user
        if(isNotEmpty(email) && isNotEmpty(password) && isEmail(email)){

            // call to the server
           if(Meteor.call("addUser", email, password, role) === true)
           {

            FlashMessages.sendSuccess("Account creation succesful", { autoHide: true, hideDelay: 500 });

           }else{

            FlashMessages.sendError("Account creation failed", { autoHide: true, hideDelay: 5000 });;

           }
        }

        return false;
    }
});

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