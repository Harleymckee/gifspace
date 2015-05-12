function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


var TheControls = React.createClass({



  redButton: function() {
	    var text = this.refs.text.getDOMNode().value.trim();
	    if (!text) {
	      return;
	    }
	//    this.props.onSubmit({text: text});

		alert(text);

//	    this.refs.text.getDOMNode().value = '';
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


    <div id="wrap">
	<div id="supguys">
		<button onClick={this.redButton}>
		</button>
		<button onClick={this.blueButton}> 
		</button>
		<input ref="text" defaultValue="welcome"> {/* onChange */}
		</input>
			<div id="giphy">
				<a href="http://giphy.com/" target="_blank">
					<img src="200.gif" width="152px" height="35px"/>
				</a>
			</div>
	</div>
	</div>

    );
  }
});


var TheDisplay = React.createClass({

		render: function() {
    return (
       		<div> sadf </div>
    	
    	);
	}



});



var Everything = React.createClass({

	render: function() {
    return (
    	<div>
    		<TheDisplay />
       		<TheControls />
       	</div>
    	
    	);
	}


});



React.render(
  	<Everything />,
  document.getElementById('content')
); 

