FlowRouter.route( '/profile', {
	name: 'test', 
  	action: function() {
  		console.log( "test is successfull" );
    	BlazeLayout.render( 'mainLayout', { 
    		body: 'profile',
    		footer:'footer' 
    	}); 
  	}
});

FlowRouter.route( '/', {
	name: 'test', 
  	action: function() {
    	BlazeLayout.render( 'mainLayout', { 
    		body:'posts',
    		footer:'footer' 
    	}); 
  	}
});

FlowRouter.route( '/likes', {
  name: 'test', 
    action: function() {
      alert("likes page not created yet");
      BlazeLayout.render( 'mainLayout', { 
        footer:'footer' 
      }); 
    }
});

FlowRouter.route( '/wants', {
  name: 'test', 
    action: function() {
      BlazeLayout.render( 'mainLayout', { 
        body: 'wants',
        footer:'footer' 
      }); 
    }
});

FlowRouter.route( '/post', {
  name: 'test', 
    action: function() {
      alert("post page not created yet");
      BlazeLayout.render( 'mainLayout', { 
        footer:'footer' 
      }); 
    }
});