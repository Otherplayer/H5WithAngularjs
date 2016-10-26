/**
 * Created by Otherplayer on 2016/10/13.
 */


angular.module('documentdeal', []).controller('documentDealController', function($scope,$http,$location,$timeout) {

    // console.log($location.absUrl());






    $scope.title = '关于XXX出差西安的申请';
    $scope.desc = '';
    $scope.helpDesc = '';



    $scope.viewOption = [
        {title:'同意',value:0},
        {title:'不同意',value:1},
        {title:'部分同意',value:2}
    ];
    $scope.receivers = [];
    $scope.receiver = {};
    $scope.selectOption = $scope.viewOption[0];

    $scope.viewOptionChanged = function () {

    }

    $scope.showDetail = function (index) {
        // window.open("../business-document/business-document.html");
        showDetail($scope.viewOption[index]);
    }


    var baseUrl = "http://114.251.243.106/alfresco/s/api/login.json?u=lel.guo&pw=iChocolate6";


    $scope.unagreeAction = function (index) {
        $http({
            url:baseUrl,
            method:'GET',
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' ,'Authorization': 'basic 1|2'}
        }).success(function(data,header,config,status){
            //响应成功
            alert('操作成功');
            $scope.viewOption.splice(index,1);
            shouldBack($scope.viewOption.length);
        }).error(function(data,header,config,status){
            //处理响应失败
            alert('操作失败');
        });
    }
    $scope.agreeAction = function (index) {
        $http({
            url:baseUrl,
            method:'GET',
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' ,'Authorization': 'basic 1|2'}
        }).success(function(data,header,config,status){
            //响应成功
            alert('操作成功');
            $scope.viewOption.splice(index,1);
            shouldBack($scope.viewOption.length);
        }).error(function(data,header,config,status){
            //处理响应失败
            alert('操作失败');
        });
    }


});

