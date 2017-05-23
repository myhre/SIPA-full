function modprodcontroller($scope, $rootScope, $location, $http){
    
    //Kontroller for å velge visninger tilknyttet modulene
    
    $scope.carts = ['Topptekst','Toppdetalj','Sidekurv'];
   
   
   $scope.listChoice = function(list){
       
       $scope.listtype = list;
       
       switch ($scope.listtype){
           
           case 'list1':
               
               clicked = document.getElementById('list1').className;
               clicked += ' listactive1';
               
               description = "Matrise medium, ingen produktdetaljer.";
               
               break;
               
               case 'list2':
                   
                   clicked = document.getElementById('list2').className;
               clicked += ' listactive2';
               
               description = "Listevisning med produktdetaljer.";
               
               break;
               
               case 'list3':
                   
                 clicked = document.getElementById('list3').className;
               clicked += ' listactive3';
                   
                   description = "Matrise stor, med produktdetaljer.";
               
               break;
               
               case 'list4':
                   
                   clicked = document.getElementById('list4').className;
               clicked += ' listactive4';
                   
                   description = "Matrise liten, uten produktdetaljer.";
               
               break;
           
       }
       
       var clickresult = document.getElementById('clickresult');
       clickresult.innerHTML = description;
       
   }
   
   $scope.submitProdOpt = function(){
   
   
    $http({
        method: 'POST',
        url: '../restserver/productGet/'+$scope.listtype+'/'+$scope.carttype   
    }).
    success(function(data, status, headers, config) 
    {   
        var prodresult = document.getElementById('result');
                prodresult.innerHTML = data;
    });
   }
}