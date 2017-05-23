function contentcontroller($scope, $rootScope, $http, $location){
    //Kontroller for å hente ut tekstbasert innhold 
   
    
    $scope.contentSubmit = function(){
    
    $http({
        method: 'POST',
        url: '../restserver/content/'+$scope.content+'/'+$scope.headline       
    }).
    success(function(data, status, headers, config) 
    { 
        
        var div = document.getElementById('response');
        div.innerHTML =  data;
				
    });
    }
}