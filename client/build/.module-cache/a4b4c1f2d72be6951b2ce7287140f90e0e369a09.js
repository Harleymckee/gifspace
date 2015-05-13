function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}










var TheControls = React.createClass({displayName: "TheControls",

  getInitialState: function() {
    return {data: []};
  },

  redButton: function() {
	    var text = this.refs.text.getDOMNode().value.trim();

	    $.ajax({
	  		url: 'http://api.giphy.com/v1/gifs/random?api_key=5xaOcLHMQRWQPesDyc8&tag=' + text,
      		dataType: 'json',
		      success: function(data) {
		  this.setState({data: this.state.data.concat([data])});
		    

		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
   			
   			 });





	  },
  blueButton: function() { 

			if (confirm('Are ya sure?')) {
			
			  this.setState({data: []}); 

				} else { 
					return;
				}


			
	  },
  render: function() {
    return (


    React.createElement("div", {id: "wrap"}, 
    	React.createElement(TheDisplay, {data: this.state.data}), 
	React.createElement("div", {id: "supguys"}, 
		React.createElement("button", {onClick: this.redButton}
		), 
		React.createElement("button", {onClick: this.blueButton}
		), 
		React.createElement("input", {ref: "text", defaultValue: "welcome"}, " "/* onChange */
		), 
			React.createElement("div", {id: "giphy"}, 
				React.createElement("a", {href: "http://giphy.com/", target: "_blank"}, 
					React.createElement("img", {src: "200.gif", width: "152px", height: "35px"})
				)
			)
	)
	)

    );
  }
});



var ListItemWrapper = React.createClass({displayName: "ListItemWrapper",
  render: function() {
    return React.createElement("li", null, this.props.data.text);
  }
});


var TheDisplay = React.createClass({displayName: "TheDisplay",

		render: function() {


	
	var picNodes = this.props.data.map(function (pic) {
		return ( 

		React.createElement("div", null, 
		pic.image_url
		)

		);
	
    }); 




  return (

	 React.createElement("div", null, 
        this.props.results.map(function(result) {
           return React.createElement(ListItemWrapper, {key: result.id, data: result});
        })
      )

    	);
	}



});





React.render(
  	React.createElement(TheControls, null),
  document.getElementById('content')
); 

