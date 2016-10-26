/**
 * Created by Otherplayer on 2016/10/13.
 */


angular.module('businessexpense', []).controller('businessVettingController', function($scope,$http,$location,$timeout) {

    // console.log($location.absUrl());
    var index = 0;//防止添加数据,数据重复报错

    var baseUrl = "http://114.251.243.106/alfresco/s/api/login.json?u=lel.guo&pw=iChocolate6";



    $scope.title = '关于郭乐乐出差西安的申请';

    $scope.gwArchives = ['关于郭乐乐出差西安的申请','关于郭乐乐报销申请'];
    $scope.optionExpenseItems = [
        {title:'机票/火车票',value:0},
        {title:'市内交通费',value:1},
        {title:'伙食费',value:1},
        {title:'住宿费',value:2},
        {title:'杂费',value:2}
    ];
    $scope.gwAddress = '';
    $scope.gwDescription = '';
    $scope.gwStartDate = new Date();
    $scope.gwEndDate = new Date();
    $scope.gwTo = '';
    $scope.gwArchive = $scope.gwArchives[0];
    $scope.selectedItem = $scope.optionExpenseItems[0];

    $scope.initialItem = {id:index,item:$scope.selectedItem.title};;
    $scope.visible = 0;
    // $http.get("/bimbot-h5/src/assets/api/data.json")
    //     .success(function (response) {
    //         console.log(response);
    //         $scope.names = response.sites;
    //     })


    $scope.resultExpenseItems = [];
    $scope.resultTotal = {id:0,item:'总计',voucher:0,money:0};


    $scope.shouldApplyAirTicket = function (value) {
        $scope.gwNeedAirTicket = value;
    }

    $scope.vetItemChanged = function () {
        var newItem = {id:index,item:$scope.selectedItem.title};
        if ($scope.selectedItem.value == 1){
            if ($scope.selectedItem.title == '市内交通费'){
                newItem.standard = 100;
                newItem.voucher = 0;
            }else if ($scope.selectedItem.title == '伙食费'){
                newItem.standard = 100;
                newItem.voucher = 0;
            }
        }else if ($scope.selectedItem.value == 2){
            if ($scope.selectedItem.title == '住宿费'){
                newItem.standard = 500;
            }
        }

        $scope.initialItem = newItem;
        $scope.visible = $scope.selectedItem.value;
    }

    $scope.addNewVetItemAction = function () {
        var newItem = {};
        newItem = $scope.initialItem;
        if (!newItem.voucher || newItem.voucher == 'undefined'){
            newItem.voucher = 0;
        }
        $scope.resultExpenseItems.unshift(newItem);


        $scope.resultTotal.money = $scope.resultTotal.money + newItem.money;
        $scope.resultTotal.voucher = $scope.resultTotal.voucher + newItem.voucher;

        index = index + 1;
        var newItem = {id:index,item:$scope.selectedItem.title};

        $scope.initialItem = newItem;




        alert('添加成功');
    }

    $http({
        url:baseUrl,
        method:'GET',
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' ,'Authorization': 'basic 1|2'}
    }).success(function(data,header,config,status){
         //响应成功
        console.log(data);
        console.log(header);
        console.log(config);
        console.log(status);
    }).error(function(data,header,config,status){
         //处理响应失败
        console.log('!成功');
    });

    // $http({
    //     method : 'POST',
    //     params :{ userId : 'abcd'},
    //     headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    // }).success(function(res){
    //         // 回调函数
    // })
    // $scope.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];



});

