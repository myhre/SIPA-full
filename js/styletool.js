function styletoolcontroller($scope, $rootScope, $http, $location){
    
    $scope.background = null;
    $scope.fsize = null;
    
    
   
    
    var preview = document.getElementById('colorpreview');
    var iHex = document.getElementById('hex');
    
    var color = document.getElementById('color');
    var textColor = document.getElementById('text-color');
    
    ColorPicker(
       
        document.getElementById('color-picker'),
        

        function(hex, hsv, rgb) {
            
            iHex.value = hex;
            
            iHex.onchange = function() {
                updateColorPickers(iHex.value);
            };
            
            function updateInputs(hex) {

                iHex.value = hex;
 
            }
            

            function updateColorPickers(hex) {
    
                cpDefault.setHex(hex);
                cpSmall.setHex(hex);
                cpFancy.setHex(hex);
            }
            
          
            preview.style.backgroundColor = hex;
            $scope.background = hex.substring(1);
        });
    
    
    $scope.fontSize = function(size){
        
        $scope.fsize = size;
    }
    
    
    $scope.saveStyle = function(){
        $http({
            method: 'POST',
            url: '../restserver/styleconfig/'+$scope.background+'/'+$scope.fsize+'/'+$scope.font
        }).
        success(function(data, status, headers, config) 
        { 
            //document.body.style.backgroundColor = data; 
            $scope.response = data;		
        });
        
            
    }    
    
        
}