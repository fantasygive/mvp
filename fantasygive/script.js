angular.module('ionicApp', ['ionic'])

    //.run(function($ionicPlatform, $rootScope, $state, userService) {
    //    $ionicPlatform.ready(function() {
    //        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    //        // for form inputs)
    //        if(window.cordova && window.cordova.plugins.Keyboard) {
    //            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    //        }
    //        if(window.StatusBar) {
    //            StatusBar.styleDefault();
    //        }
    //    });
    //    // UI Router Authentication Check
    //    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    //        if (toState.data.authenticate && !userService.isLoggedIn()){
    //            // User isn’t authenticated
    //            $state.transitionTo("login");
    //            event.preventDefault();
    //        }
    //    });
    //})

    .config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('signin', {
      url: "/sign-in",
      templateUrl: "sign-in.html",
      controller: 'SignInCtrl'
          //data: {
          //    authenticate: false
          //}
    })
    .state('forgotpassword', {
      url: "/forgot-password",
      templateUrl: "forgot-password.html"
    })
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })
    .state('tabs.scoreboard', {
      url: "/scoreboard",
      views: {
        'scoreboard-tab': {
          templateUrl: "scoreboard.html",
          controller: 'ScoreboardTabCtrl',
            //data: {
            //    authenticate: true
            //}
        }
      }
    })
    .state('tabs.league', {
          url: "/league",
          views: {
              'league-tab': {
                  templateUrl: "league.html"
              }
          }
      })
      .state('tabs.charities', {
          url: "/charities",
          views: {
              'charities-tab': {
                  templateUrl: "login.html"
              }
          }
      })
      .state('tabs.profile', {
          url: "/profile",
          views: {
              'profile-tab': {
                  templateUrl: "profile.html"
              }
          }
      });

   $urlRouterProvider.otherwise("/sign-in");

})
    //
    //.factory('userService', ['$rootScope', '$state', function($rootScope, $state) {
    //
    //    // Hello.js Functions
    //    hello.init({
    //            // replace this with your own Facebook App ID
    //            yahoo : 'dj0yJmk9ZlYzTVJYQ2Jod1hiJmQ9WVdrOWIwOHpSRzR5TkhNbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1kYw--'
    //        });
    //
    //    var service = {
    //        isLoggedIn: function() {
    //            return $rootScope.userStatus;
    //        },
    //        login: function() {
    //            hello('yahoo').login( function() {
    //                token = hello( 'yahoo' ).getAuthResponse().access_token;
    //                console.log(token); //code breaks right after this point
    //                hello( 'yahoo' ).api( '/me' ).success(function(json) {
    //                    console.log(json);
    //                    $rootScope.user = json;
    //                    $rootScope.$apply($rootScope.user);
    //                    $rootScope.userStatus = true;
    //
    //                    $state.go('home');
    //                });
    //            });
    //        },
    //        logout: function() {
    //            hello('yahoo').logout( function() {
    //                $rootScope.userStatus = false;
    //                $rootScope.user = null;
    //
    //                $state.go('login');
    //            });
    //        }
    //    }
    //
    //    return service;
    //}])

    //.controller('ScoreboardTabCtrl', ['$scope', 'userService',function($scope, userService) {
    //    $scope.logout = userService.logout;
    //}])
    //
    //.controller('SignInCtrl', ['$scope', 'userService', function($scope, userService) {
    //    $scope.login = userService.login;
    //}]);


    .controller('SignInCtrl', function ($scope, $state) {
        $scope.signIn = function (user) {
            console.log('Sign-In', user);
            $state.go('tabs.scoreboard');
        };
    })

    .controller('ScoreboardTabCtrl', function ($scope) {
        console.log('ScoreboardTabCtrl');
    });