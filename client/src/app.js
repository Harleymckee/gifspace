function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



Array.max = function( array ){
    return Math.max.apply( Math, array );
};








var TheControls = React.createClass({

  getInitialState: function() {
    return {data: []};
  },



  redButton: function() {


	    var text = this.refs.text.getDOMNode().value.trim();

	    $.ajax({
	  		url: 'http://api.giphy.com/v1/gifs/random?api_key=5xaOcLHMQRWQPesDyc8&tag=' + text,
	  		 type: 'GET',
      		dataType: 'json',
		      success: function(data) {

			console.log(data.data);		    
		    this.setState({data: this.state.data.concat([data.data])});




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



var ListItemWrapper = React.createClass({

		  componentDidMount: function() {



	$("div.pic").draggable({
			stack: ".pic",
			scroll: false, 
			create: function( event, ui ) {
				
				var indArr = [];
				$('.pic').each(function() {

					indArr.push($(this).zIndex());
					

				});

				var tallest = Array.max(indArr);
			
				$(this).zIndex(tallest);

			}

		});
  
  },
  render: function() {
    return (
    	<div className="pichold">
    	<div className="pic">
    	<img src={this.props.data.image_url} />
    	</div>
    	</div>
    );
  }
});


var TheDisplay = React.createClass({



		render: function() {




  return (

	 <div>
        {this.props.data.map(function(result) {
           return <ListItemWrapper key={result.id} data={result}/>;
        })}
      </div>

    	);
	}



});





React.render(
  	<TheControls />,
  document.getElementById('content')
); 

