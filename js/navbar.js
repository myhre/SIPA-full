angular.module('myapp');

function NavController($scope, $location){
    $scope.changeView = function(view){
            $location.path('/partials/login.php'); 
        }
}
