const hasAdmin = Meteor.users.findOne( { 'emails.address': 'adminkj@niyotaa.com' } );

if ( !hasAdmin ) {
  Accounts.createUser({
    email: 'adminkj@niyotaa.com',
    password: 'niyotaaadmin'
  });
}
