function logincontroller($scope, $rootScope, $http, $location){
    //Kontroller for å logge inn på løsningen
    
    //Resetter stilkonfigurasjonen utenfor butikken
    $rootScope.style = '';
    
    //Funksjon for innlogging
    $scope.loginSubmit = function() {
        
        $http({
            method: 'POST',
            url: '../restserver/login/'+$scope.username+'/'+$scope.password         
        }).
        success(function(data, status, headers, config) 
        { 
            //Hvis brukeren er administrator:
            if(data == '"1"'){
                $rootScope.permission = true;
                $location.path('structure');
            //Hvis brukeren er sluttbruker
            }else if(data == '"0"'){
                $location.path('store');
            }
            //Hvis det skjer en feil
            else{
                //Setter inn html som returneres.  Normalt via JSON TESTING 
                var div = document.getElementById('loginresult')
                div.innerHTML =  data; 
            }
				
        });
     	
    }
     $scope.backToShop = function(){
        $location.path('store')
        
    }
    
    
    
    
}
