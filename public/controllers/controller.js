var app = angular.module('contactlist', []);
app.controller('AppCtrl', function($scope) {
    
	console.log("Hello world from controller.");

	person1={
		name: 'Tim',
		email: 'tim@email.com',
		number: '(111) 111-1111'
	};
	person2={
		name: 'Emily',
		email: 'emily@email.com',
		number: '(222) 222-2222'
	};
	person3={
		name: 'Smith',
		email: 'smith@email.com',
		number: '(333) 333-3333'
	};
	
	$scope.list=[person1,person2,person3];
});