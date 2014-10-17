
angular.module('myAppcontrollers',[]).


    controller('placementDetails',function($scope,$routeParams){

        $scope.menu=0;

        $scope.user = [

            {
                name:"Naveen Anto",
                rollno: "2011103613",
                dept: "CSE",
                year: "fourth",
                sex:"male",
                batch: "G"
            },

            {
                name:"Hari Krishnan",
                rollno: "2010103603",
                dept: "CSE",
                year: "third",
                sex:"female",
                batch: "I"
            },

            {
                name:"Anto",
                rollno: "2011103611",
                dept: "IT",
                year: "second",
                sex:"male",
                batch: "H"
            },

            {
                name:"Zebra",
                rollno: "2010103613",
                dept: "GEO",
                year: "first",
                sex:"female",
                batch: "I"
            },

            {
                name:"Lakshmi Narayanan",
                rollno: "2010103613",
                dept: "GEO",
                year: "first",
                sex:"male",
                batch: "G"
            },

            {
                name:"Zebra",
                rollno: "2010103613",
                dept: "GEO",
                year: "first",
                sex:"female",
                batch: "H"
            },
            {
                name:"Anto",
                rollno: "2011103611",
                dept: "IT",
                year: "second",
                sex:"male",
                batch: "I"
            },
            {
                name:"Google",
                rollno: "2011103611",
                dept: "IT",
                year: "second",
                sex:"male",
                batch: "H"
            },
        ];

        $scope.company = [
            {
                name: "Microsoft",
                rating: 5,
                salary : 17
            },
            {
                name: "Amazon",
                rating: 4,
                salary : 14
            },
            {
                name: "ebay",
                rating: 3,
                salary : 18
            },
            {
                name: "Chronus",
                rating: 3,
                salary : 13
            },
            {
                name: "Morgan Stanely",
                rating: 4,
                salary : 10
            },
            {
                name: "Code Nation",
                rating: 1,
                salary : 18
            }

        ];

        $scope.id = $routeParams.id;

    })

