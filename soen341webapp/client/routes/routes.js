FlowRouter.route('/profile', {
    name: 'test',
    action: function() {
        console.log("test is successfull");
        BlazeLayout.render('mainLayout', {
            body: 'profile',
            footer: 'footer'
        });
    }
});

FlowRouter.route('/', {
    name: 'test',
    action: function() {
        BlazeLayout.render('mainLayout', {
            body: 'posts',
            footer: 'footer'
        });
    }
});

FlowRouter.route('/flowChart', {
    name: 'test',
    action: function() {
        BlazeLayout.render('mainLayout', {
            body: 'flowChart',
            footer: 'footer'
        });
    }
});

FlowRouter.route('/wants', {
    name: 'test',
    action: function() {
        BlazeLayout.render('mainLayout', {
            body: 'wants',
            footer: 'footer'
        });
    }
});

FlowRouter.route('/post', {
    name: 'test',
    action: function() {
        alert("post page not created yet");
        BlazeLayout.render('mainLayout', {
            footer: 'footer'
        });
    }
});
FlowRouter.route('/aboutPage', {
    name: 'test',
    action: function() {
        BlazeLayout.render('mainLayout', {
            body: 'aboutPage',
            footer: 'footer'
        });
    }
});

FlowRouter.route('/teamPage', {
    name: 'test',
    action: function() {
        BlazeLayout.render('mainLayout', {
            body: 'teamPage',
            footer: 'footer'
        });
    }
});

FlowRouter.route('/termsOfUse', {
    name: 'test',
    action: function() {
        BlazeLayout.render('mainLayout', {
            body: 'termsOfUse',
            footer: 'footer'
        });
    }
});

FlowRouter.route('/privacyPolicy', {
    name: 'test',
    action: function() {
        BlazeLayout.render('mainLayout', {
            body: 'privacyPolicy',
            footer: 'footer'
        });
    }
});

FlowRouter.route('/ad/:_id', {
    name: 'test',
    action: function() {
        BlazeLayout.render('mainLayout', {
            body: 'ad',
            footer: 'footer'
        });
    }
});
