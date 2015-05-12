var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
     React.createElement("div", {id: "wrap"}, 
React.createElement("div", {id: "supguys"}, 
React.createElement("button", null
), 
React.createElement("button", null
), 
React.createElement("input", null
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

  document.getElementById('content')
); 

