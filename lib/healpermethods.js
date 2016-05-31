
// production CRUD access
Meteor.methods({

	addUser: function(email, password, role){

		id = Accounts.createUser({
                email: email,
                password: password,

            }, function(err){

                    if(err){

                        return false;

                    }else{

                          Roles.addUsersToRoles(id, role );
                          return true;
                    }

            });
  		
	},

});