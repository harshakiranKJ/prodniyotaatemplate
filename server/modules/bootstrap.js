Meteor.startup(function(){
    if (Meteor.users.find().count() === 0) {
        
        id = Accounts.createUser({
            email: 'adminkj@niyotaa.com',
            password: 'adminniyotaa',
        });

        Roles.addUsersToRoles(id, ['superadmin']);
    }

});