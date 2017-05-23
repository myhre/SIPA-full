function shopcartcontroller($scope, $http, $rootScope){
    
    
    //Kontroller for options

    $http({
        method: 'GET',
        url: '../restserver/cartconfig/'       
    }).
    success(function(data, status, headers, config) 
    { 
        
        var styleopt = new Array();
        styleopt.push('background-color: #'+data.backgroundhex+'; ');
        styleopt.push('font-size: '+data.fontsize+'em; ');
        styleopt.push('font-family: '+data.font+';');
        $rootScope.style = styleopt.toString();
        
        $rootScope.structure = data.structure;
        $rootScope.headline = data.headline;
        $rootScope.content = data.content;
        $rootScope.coverphoto = data.coverphoto;
        
        switch(data.cart){
        
            case 'Topptekst':
                $rootScope.cartmodel = 'shoppingcart-right-side-none';
                $scope.cart = 'shoppingcart1';
                break;
            
            case 'Toppdetalj':
                $rootScope.cartmodel = 'shoppingcart-right-side-none';
                $scope.cart = 'shoppingcart2';
                break;
                
            case 'Sidekurv':
                $rootScope.cartmodel = 'shoppingcart-right-side';
                $scope.cart = 'shoppingcart1';
                break;
        
        }
        
    });

    $rootScope.EVENT_TOCART = 'event.tocart'; //definerer eventen


    $rootScope.items = new Array();
    $scope.total = 0;
    $scope.itemcount = 0;


    $scope.$on($rootScope.EVENT_TOCART, function(event,name,price){
       
        $scope.itemName = name;
        $scope.itemPrice = parseInt(price);
        $scope.total += $scope.itemPrice;
        $scope.itemcount += 1;
        
        
        $rootScope.items.push({
            itemname:$scope.itemName, 
            itemprice:$scope.itemPrice
        });
         
    });

    $scope.deleteItem = function(item){
        var prodid = item;
        $scope.items.splice(prodid, 1);
    }
    
   

}