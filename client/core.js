function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



Array.max = function( array ){
    return Math.max.apply( Math, array );
};



var app = angular.module('snowZone', []);

app.directive('theImage', function() {
		return {

			restrict: 'E',
			templateUrl: 'the-image.html',
			controller: 'ImgController',
			controllerAs: 'imgCtrl'

		};
	});



app.controller('ImgController', ['$scope', '$http', function($scope, $http) {




var here = this, sponseArr = [];

this.tag = 'welcome';



this.changeImage = function() {


var tagg = this.tag;




$http.get('/giphy/' + tagg).then( function(response, err) {


		var re = response.data, sponse = re.data;

	sponse.topp = getRandomInt(-10, 50) + 'vh';
	sponse.leftt = getRandomInt(-10, 50) + 'vw';

		sponseArr.push(sponse);
	here.pics = sponseArr;




	});


};




this.clear = function() {

if (confirm('Are ya sure?')) {
		sponseArr = [];
		here.pics = [];

	} else {
		return;
	}


};




}]);
