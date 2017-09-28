angular.module('myApp', [])
        .controller('myCtrl', function($scope){
          $scope.AddTask = AddTask;
          $scope.newTask = '';
          $scope.tasks = [];

          function AddTask(){
            $scope.tasks.push($scope.newTask);
            $scope.newTask = '';
          };
        });
