

Meteor.publish( 'controlledusers', function() {

  // Search of admin, warehouse and blog users
  let isAdmin = Roles.userIsInRole( this.userId, ['admin','warehouse','bloguser'] );

  if ( isAdmin ) {

    return Meteor.users.find( {}, { fields: { "emails.address": 1, "roles": 1 } } );

  } else {

    return null;
  }


});