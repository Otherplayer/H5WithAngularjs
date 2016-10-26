/**
 * Created by Otherplayer on 2016/10/13.
 */


angular.module('businesstrip', ['ui.select']).controller('businessTripController', function($scope,$http,$location) {

    console.log($location.absUrl());

    $scope.title = '出差申请';

    $scope.gwTitle = '';
    $scope.gwAddress = '';
    $scope.gwDescription = '';
    $scope.gwStartDate = new Date();
    $scope.gwEndDate = new Date();
    $scope.gwNeedAirTicket = true;
    $scope.gwNeedAirPoint = true;
    $scope.airlinesFrom = [{name:'Beijing',id:1},{name:'Shanghai',id:2},{name:'ZhengZhou',id:3}];
    $scope.airlinesTo = [{name:'Beijing',id:1},{name:'Shanghai',id:2},{name:'ZhengZhou',id:3}];
    $scope.airportNums = [{name:'HU7538',id:1},{name:'HU2350',id:2}];
    $scope.airports = [{name:'海南航空',id:1}];
    $scope.gwFrom = { value: $scope.airlinesFrom[0]};
    $scope.gwTo = {value : $scope.airlinesTo[0]};
    $scope.gwAirplane = {value:$scope.airports[0]};
    $scope.airportNum = {value:$scope.airportNums[0]};
        // $http.get("/bimbot-h5/src/assets/api/data.json")
        //     .success(function (response) {
        //         console.log(response);
        //         $scope.names = response.sites;
        //     })

    $scope.shouldApplyAirTicket = function (value) {
        $scope.gwNeedAirTicket = value;
    }


    var baseUrl = "http://114.251.243.106/alfresco/s/api/login.json?u=lel.guo&pw=iChocolate6";

    $scope.submitTripInfo = function (success,error) {
        $http({
            url:baseUrl,
            method:'GET',
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' ,
                // 'Content-Type': 'application/json',
                'Accept': 'application/json'}
        }).success(success).error(error);
    }


    // $http({
    //     method : 'POST',
    //     params :{ userId : 'abcd'},
    //     headers : { 'Content-Type': 'application/x-www-form-urlencoded' ,'X-Bim-Token':'abcd1234'}
    // }).success(function(res){
    //         // 回调函数
    // })
    // $scope.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

});