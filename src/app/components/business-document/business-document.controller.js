/**
 * Created by Otherplayer on 2016/10/13.
 */


angular.module('businesdocument', []).controller('businessDocumentController', function($scope,$http,$location,$timeout) {

    // console.log($location.absUrl());



    $scope.title = '关于XXX出差西安的申请';
    $scope.user = 'asfsaf';
    $scope.time = '2341421';
    $scope.address = '喯可；国土厅莂；桂花城中；理发师打；快乐辅导书；连卡佛收到；加霜基；昆仑饭店撒';
    $scope.workHandOver = '234423';
    $scope.content = '22323';


    $scope.resultExpenseItems = [];
    $scope.resultTotal = {id:0,item:'总计',voucher:0,money:0};



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


    $scope.agreeAction = function () {
        agreeAction();
    }
    $scope.unagreeAction = function () {
        unagreeAction();
    }
    $scope.partAgreeAction = function () {
        partAgreeAction();
    }

});

