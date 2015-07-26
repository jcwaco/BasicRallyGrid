    // This comment added to show Flowdock integration
    // 04/13/2015
    //
	//More comments added locally.
	//Sure hope this works.

Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    
    launch: function() {
        console.log('Our first App Yeah!');
        this._loadData();
    },
    // Get Data from Rally
    // New Comment
    //
    _loadData: function() {
    	
    	var myStore = Ext.create('Rally.data.wsapi.Store', {
            model: 'User Story',
            autoLoad: true,
            listeners: {
                load: function(myStore, myData, success) {
                   console.log('got data!', myStore, myData, success);
                   this._loadGrid(myStore);
                },
                scope: this
            },
            fetch: ['FormattedID', 'Name', 'ScheduleState']
        });
    },
    
    // Create and show grid of given Stories
    // Add another comment
    _loadGrid: function(myStoryStore) {
    	 
    	var myGrid = Ext.create(Rally.ui.grid.Grid, {
         	store: myStoryStore,
         	columnCfgs: [
         		'FormattedID', 'Name', 'ScheduleState'
         ]
         });
         
         this.add(myGrid);
         
         console.log('What is This?', this);
    }

});
