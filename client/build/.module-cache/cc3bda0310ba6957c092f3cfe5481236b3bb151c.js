function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



var TheControls = React.createClass({displayName: "TheControls",



  redButton: function(e) {
	    e.preventDefault();
	    var text = this.refs.text.getDOMNode().value.trim();
	    if (!text) {
	      return;
	    }
	//    this.props.onSubmit({text: text});

		console.log(text);

//	    this.refs.text.getDOMNode().value = '';
	  },
  blueButton: function(e) {
	    e.preventDefault();
	    var text = this.refs.text.getDOMNode().value.trim();
	    if (!text) {
	      return;
	    }
	//    this.props.onSubmit({text: text});

		console.log(text);

//	    this.refs.text.getDOMNode().value = '';
	  },
  render: function() {
    return (
    React.createElement("div", {id: "wrap"}, 
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


React.render(

  React.createElement(TheControls, null),
  document.getElementById('content')
); 

