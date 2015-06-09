/*global angular:true */
(function () {
  'use strict';

  angular.module('rethinkDBWorkshop.messages', ['ui.router'])
    .controller('MessagesController', MessagesController);

  MessagesController.$inject = ['$scope', '$window', 'MessageFactory'];

  function MessagesController($scope, $window, MessageFactory) {
    var vm = this;
    vm.messages = [];
    vm.submit = submit;

    console.log('MessagesController');
    //$scope.$watch(function() {
      //return vm.messages;
    //}, function (n, o) {
      //console.log('$watch / vm.messages');
    //});

    MessageFactory.getMessageCollection()
     .then(function (coll) {
       vm.messages = coll;
     });

    function submit() {
      if (vm.text.length > 0) {
        MessageFactory.addMessage(vm.text);
        vm.text = '';
      }
    }

  }
})();
