function registercontroller($scope, $rootScope, $http, $location){
    
    $rootScope.style = '';
    
    $scope.registerSubmit = function(){
        
        $http({
                method: 'POST',
                url: '../restserver/register/'+$scope.company+'/'+$scope.username+'/'+$scope.password+'/'+$scope.admin       
            }).
            success(function(data, status, headers, config) 
            { 
                var div = document.getElementById('response');
                div.innerHTML =  data;
				
            });
        
    }
    
    $scope.backToShop = function(){
        $location.path('store')
        
    }
    
    
}