function addprodcontroller($scope, $rootScope, $location, $http){
    //Kontroller for å legge til produkter
    
    $scope.newProd = function (content, completed) {

        if(completed){
            var fullPath = document.getElementById('file').value;
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
                $scope.picture = filename;
            }



            $http({
                method: 'POST',
                url: '../restserver/prodsubmit/'+$scope.price+'/'+$scope.prodname+'/'+$scope.proddesc+'/'+$scope.picture
            }).
            success(function(data, status, headers){
            
                var prodresult = document.getElementById('result');
                prodresult.innerHTML = data;
                
                $scope.price = '';
                $scope.prodname = '';
                $scope.proddesc = '';
            
            });
        }
    }
};
