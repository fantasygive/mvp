angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('signin', {
      url: "/sign-in",
      templateUrl: "sign-in.html",
      controller: 'SignInCtrl',
          data: {
              authenticate: false
          }
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
            data: {
                authenticate: true
            }
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

.controller('SignInCtrl', function($scope, $state) {

  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('tabs.scoreboard');
  };

})

.controller('ScoreboardTabCtrl', function($scope) {
  console.log('ScoreboardTabCtrl');
});