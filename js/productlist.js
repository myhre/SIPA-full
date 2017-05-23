function productlistcontroller($scope, $http, $rootScope){
    
    //Kontroller for produktlistingen
    
    $http({
        method: 'GET',
        url: '../restserver/product/'       
    }).
    success(function(data, status, headers, config) 
    { 
        $scope.products = data.array;
        $scope.listtype = data.list;
        
    });
    
    
    $scope.toCart = function(input1, input2){      
        $rootScope.$broadcast($rootScope.EVENT_TOCART, input1, input2);             
    }
    
    
}
   
    