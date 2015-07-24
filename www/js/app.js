// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

/*********  FUNCIONES CAMBIO DE COLOR ICONOS  ******************/
//********  HOME
function functionHome() {
       document.getElementById("home").style.color = "#00BAB9 ";
       document.getElementById("heart").style.color = "#A7A9AC ";
       document.getElementById("star").style.color = "#A7A9AC ";
       document.getElementById("tool").style.color = "#A7A9AC ";
       }
//********  HEART
function functionHeart() {
       document.getElementById("home").style.color = "#A7A9AC ";
       document.getElementById("heart").style.color = "#FF5252 ";
       document.getElementById("star").style.color = "#A7A9AC ";
       document.getElementById("tool").style.color = "#A7A9AC ";
       }

//********  STAR
function functionStar() {
       document.getElementById("home").style.color = "#A7A9AC ";
       document.getElementById("heart").style.color = "#A7A9AC ";
       document.getElementById("star").style.color = "#9C28B0 ";
       document.getElementById("tool").style.color = "#A7A9AC ";
       }
//********  TOOL
function functionTool() {
       document.getElementById("home").style.color = "#A7A9AC ";
       document.getElementById("heart").style.color = "#A7A9AC ";
       document.getElementById("star").style.color = "#A7A9AC ";
       document.getElementById("tool").style.color = "#3F51B5 ";
       }

//*************************************************
//***********  FUNCTION BACK
function goBack() {
    window.history.back();
}
//*************************************************
//function favoritos
var contador = 1;
function hola(parametro){
       contador=contador+1;
	   if (contador % 2 == 0){
           document.getElementById(parametro).style.color="red";
	   }
	   else{document.getElementById(parametro).style.color="";}
          
};
/******************************************************/
function check() {
    setTimeout(function(){ 
       document.getElementById("intervaloFrenzy").click(); 
    }, 1000);
};
check()
/******************************************************/
var myApp = angular.module('reallyCoolApp', ['ionic']);
myApp.config(function($ionicConfigProvider) {
  // note that you can also chain configs
  $ionicConfigProvider.navBar.alignTitle('center');
});
//*****************************************************


/******************************************************/
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
//****************************************************
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
$ionicConfigProvider.tabs.position('bottom');
})
//****************************************************
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
//********************************************************************************
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
//******** FRENZY *****
  .state('frenzy', {
    url: "/frenzy",
    templateUrl: "templates/frenzy.html",
  })
//******** FACEBOOK *****
  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
      controller: 'loginCtrl',
    
  })     
//********************************************************************************
  .state('app.favoritos', {
    url: "/favoritos",
    views: {
      'menuContent': {
        templateUrl: "templates/favoritos.html",
        controller: 'ChatsCtrl'
      }
    }
  })
//********************************************************************************
  .state('app.tusFavoritos', {
    url: "/tusFavoritos",
    views: {
      'menuContent': {
        templateUrl: "templates/tusFavoritos.html",
        controller: 'ChatsCtrl'
      }
    }
  })
//********************************************************************************
  .state('app.salvados', {
    url: "/salvados",
    views: {
      'menuContent': {
        templateUrl: "templates/salvados.html",
        controller: 'ChatsCtrl'
      }
    }
  })  
//********************************************************************************
  .state('app.browse', {
    url: "/ofertas",
    views: {
      'menuContent': {
        templateUrl: "templates/ofertas.html",
        controller: 'PaizCtrl'
      }
    }
  })
  
//********************************************************************************
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/page_start.html",
          controller: 'CategoryCtrl'
        }
      }
    })
  
//*********  CUPONES  ************************************************************
  .state('app.cupones', {
    url: "/cupones",
    views: {
      'menuContent': {
        templateUrl: "templates/cupones.html",
        controller: 'ChatsCtrl'
      }
    }
  })  
//********************************************************************************
  .state('app.single', {
    url: "/playlists/Supermercado",
    views: {
      'menuContent': {
        templateUrl: "templates/categories/supermarkets.html",
        controller: 'SupermercadoCtrl'
      }
    }
  })
  
    .state('app.singles', {
    url: "/playlists/Restaurantes",
    views: {
      'menuContent': {
        templateUrl: "templates/categories/restaurantes.html",
        controller: 'RestaurantesCtrl'
      }
    }
  })
  
    .state('app.singless', {
    url: "/playlists/Moda",
    views: {
      'menuContent': {
        templateUrl: "templates/categories/moda.html",
        controller: 'ModaCtrl'
      }
    }
  })
  
      .state('app.singlesss', {
    url: "/playlists/Entretenimiento",
    views: {
      'menuContent': {
        templateUrl: "templates/categories/entretenimiento.html",
        controller: 'EntretenimientoCtrl'
      }
    }
  })
        .state('app.singlessss', {
    url: "/playlists/Electrónicos",
    views: {
      'menuContent': {
        templateUrl: "templates/categories/electronicos.html",
        controller: 'ElectronicosCtrl'
      }
    }
  })
//****************  OFFERTS  *************
  .state('ofertas', {
    url: "/ofertas",
    templateUrl: "templates/ofertas.html",
      controller: 'PaizCtrl'
  })  
//****************  FAVORITOS  ************


    
//********************RUTA Y CONTROLADOR DESCUENTOS.HTML*************************
    .state('app.descuentos', {
      url: "/canjear",
      views: {
        'menuContent': {
          templateUrl: "templates/descuentos.html",
          controller: 'ChatsCtrl'
        }
      }
    });
//********************************************************************************
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/frenzy');
})



// ############## //
//                //
//  Controllers   //
//                //
// ############## //
.controller('rootCtrl', ['$state', function($state) {
  $state.go('app.playlists');
}])

.controller('homeCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.logout = function() {
    console.log('Logout');
    /* 
    facebookConnectPlugin.logout(
      function (success) {
        $state.go('login');
      },
      function (failure) { console.log(failure) }
    );
    */
    Parse.User.logOut();
    $state.go('login');
  };
}])

.controller('loginCtrl', ['$scope', '$state', function($scope, $state) {
  var fbLogged = new Parse.Promise();
    
  var fbLoginSuccess = function(response) {
    if (!response.authResponse){
      fbLoginError("Cannot find the authResponse");
      return;
    }
    var expDate = new Date(
      new Date().getTime() + response.authResponse.expiresIn * 1000
    ).toISOString();

    var authData = {
      id: String(response.authResponse.userID),
      access_token: response.authResponse.accessToken,
      expiration_date: expDate
    }
    fbLogged.resolve(authData);
    console.log(response);
  };

  var fbLoginError = function(error){
    fbLogged.reject(error);
  };

  $scope.login = function() {
    console.log('Login');
    if (!window.cordova) {
      facebookConnectPlugin.browserInit('813128998755561');
    }
    facebookConnectPlugin.login(['email','user_birthday',
'user_hometown',
'user_location'], fbLoginSuccess, fbLoginError);
  
    fbLogged.then( function(authData) {
      console.log('Promised');
      return Parse.FacebookUtils.logIn(authData);
    })
    .then( function(userObject) {
      facebookConnectPlugin.api('/me', null, 
        function(response) {
          console.log(response);
          userObject.set('name', response.name);
          userObject.set('email', response.email);
          userObject.set('birthday', response.birthday);
          userObject.set('location', response.location);
          userObject.set('hometown', response.hometown);
          userObject.save();
        },
        function(error) {
          console.log(error);
        }
      );
      $state.go('app.playlists');
    }, function(error) {
      console.log(error);
    });
  };
}]);
