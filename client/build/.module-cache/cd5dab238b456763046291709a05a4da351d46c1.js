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
		        this.setState({data: data});
		        console.log(data);
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
   			
   			 });





	  },
  blueButton: function() { 

			if (confirm('Are ya sure?')) {
				//	sponseArr = [];
				//	here.pics = [];

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





var TheDisplay = React.createClass({displayName: "TheDisplay",

		render: function() {

 var picNodes = this.props.data.map(function (pic) {
      return (
					React.createElement("div", {className: "pichold"}, 
			      	React.createElement("div", {className: "pic"}, 
								React.createElement("img", null)
					)
					)
      );
    }); 


      return (
		      React.createElement("div", null, 
"sdfs"
		      )
    	);
	}



});



var Everything = React.createClass({displayName: "Everything",

	render: function() {
    return (
    	React.createElement("div", null, 
       		React.createElement(TheControls, null)
       	)
    	
    	);
	}


});



React.render(
  	React.createElement(Everything, null),
  document.getElementById('content')
); 

