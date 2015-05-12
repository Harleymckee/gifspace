function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}





var TheDisplay = React.createClass({

		render: function() {
	
	var picNodes = this.props.data.map(function (pic) {
		return ( 

		<div key={pic.id}>
		{pic}
		</div>

		);
	
    }); 


  return (

		 <div>
     		{picNodes}
        </div>
    	);
	}



});





var TheControls = React.createClass({

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


    <div id="wrap">
    	<TheDisplay data={this.state.data} />
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



var Everything = React.createClass({

	render: function() {

    return (
    	<div>
       		<TheControls />
       	</div>
    	
    	);
	}


});



React.render(
  	<Everything />,
  document.getElementById('content')
); 

