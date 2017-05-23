function structurecontroller($scope, $rootScope, $http, $location){
    
    //Kontroller for å velge struktur på siden
    
    var structure;
    $rootScope.style = '';
    
    $scope.structChoice = function(choice){
        structure = choice;
        var div = document.getElementById('response');
        div.innerHTML =  choice;
    }
    
   
    
    $scope.structureSubmit = function(content, completed) {
        if(completed){
            var fullPath = document.getElementById('file').value;
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
                $scope.coverphoto = filename;
                
               
            }
            
        
            $http({
                method: 'POST',
                url: '../restserver/structure/'+structure+'/'+$scope.coverphoto       
            }).
            success(function(data, status, headers, config) 
            { 
                var div = document.getElementById('response');
                div.innerHTML =  data;
				
            });
        
        }
    }
    
    
    
    
}