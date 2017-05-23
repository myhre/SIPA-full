angular.module('myapp', ['ngUpload']).
    config(function($routeProvider) {
    $routeProvider. 
        when('', {templateUrl:'partials/store.html'}).
        when('/login', {templateUrl: 'partials/login.html', controller: 'logincontroller'}).
        when('/register', {templateUrl:'partials/register.html', controller: 'registercontroller'}).
        when('/structure', {templateUrl:'partials/tool_structure.html', controller: 'structurecontroller'}).
        when('/content', {templateUrl:'partials/tool_content.html', controller: 'contentcontroller'}).
        when('/style', {templateUrl:'partials/tool_style.html', controller: 'styletoolcontroller'}).
        when('/store', {templateUrl:'partials/store.html'}).
        when('/addprod', {templateUrl:'partials/tool_product.html', controller: 'addprodcontroller'}).
        when('/modprod', {templateUrl:'partials/mod_product.html', controller: 'modprodcontroller'}).
        otherwise({redirectTo:'/404', templateUrl:'partials/404.html'});
    });



