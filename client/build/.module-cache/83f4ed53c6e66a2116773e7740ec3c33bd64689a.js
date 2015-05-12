var TheControls = React.createClass({displayName: "TheControls",
	handleSubmit: function(e) {
    e.preventDefault();
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
  },
  render: function() {
    return (
    React.createElement("div", {id: "wrap"}, 
	React.createElement("div", {id: "supguys"}, 
		React.createElement("button", null
		), 
		React.createElement("button", null
		), 
		React.createElement("input", {ref: "rext"}
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

