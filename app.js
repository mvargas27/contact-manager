let contactApp = angular.module('contactApp', []);

contactApp.controller('ContactCtrl', function($scope, $http) {
	console.log($scope);

	$scope.contacts = [   //displays the default contact list that was displayed on the app
	{name: 'Steve Wozniak', email: 'woz@apple.com', location: 'United States', phone: '718-886-5540'},
	{name: 'Linus Torvalds', email: 'linus@linux.com', location: 'Finland', phone: '+358 9 568 042'},
	{name: 'Bill Gates', email: 'bill@microsoft.com', location: 'United States', phone: '4841698514'},
	{name: 'Richard Stallman', email: 'richard@fsf.org', location: 'United States', phone: '664 613 7896'},
	{name: 'Ada Lovelace', email: 'ada@lovelace.co.uk', location: 'United Kingdom', phone: '02394 786236'},
	{name: 'Alan Turing', email: 'alan@turingtest.org.uk', location: 'United Kingdom', phone: '+44796 37829368'},
	{name: 'Charles Babbage', email: 'charles@diffengine.com', location: 'United Kingdom', phone: '+442392343478'},
	{name: 'Dennis Ritchie', email: 'dennis@cprogramming.com', location: 'Finland', phone: '012-589-1651'},
	{name: 'Ken Thompson', email: 'ken@unix.net', location: 'United States', phone: '6434030340'},
	{name: 'Steve Jobs', email: 'steve@apple.com', location: 'United States', phone: '805-110-9825'},
	];

	$scope.saveContact = function() {   //save contact function to enable the buttons to save the contact
		console.log('Saving...');
		$scope.contacts.push($scope.newContact);  //scope refers to the object of the application model
		console.log($scope.contacts);
		$scope.info = 'New contact was succesfully added!';
		$scope.newContact ={};
	};

	$scope.updateContact = function(selectedContact, $index) {   //update contact function enables to edit and update the contact
		console.log(selectedContact, $index);
		$scope.updatedContact = selectedContact;
		$scope.updateIndex = $index;
	};

	$scope.deleteContact = function(selectedContact, $index){   //delete contact funtion enables to delete the contacts that was added on the list
		console.log(selectedContact, $index);
		$scope.deletedContact =selectedContact;
		$scope.contacts.splice($index,1); //splice was used to remove the items which in this case is the contact list


	};
});
