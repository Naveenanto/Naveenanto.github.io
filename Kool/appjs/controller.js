
angular.module('myAppcontrollers',[])


    .controller('updates',function($scope,$routeParams,getService){

    $scope.updates = [
        {
            msg:"Website initiation",
            link:"#/init"
        },
        {
            msg:"Lets K!",
            link:"#/"
        },
        {
            msg:"Hai there!",
            link:"#/"
        }

    ];

        $scope.checkUser = function(){
            console.log("Checking");
            getService.user().success(function(data){
                console.log(data);
                $scope.userDetails = data;
            })
        }

    //setInterval($scope.checkUser(),1000);

    })


.controller('dock',function($scope,$routeParams){

    $scope.dockItems = [
        {
            name:"Home",
            link:"#/"
        },
        {
            name:"About Us",
            link:"#/"
        },
        {
            name:"Events",
            link:"#/"
        },
        {
            name:"Workshops",
            link:"#/"
        },
        {
            name:"K!arnival",
            link:"#/"
        },
        {
            name:"Xceed",
            link:"#/"
        }

    ];

})

    .controller('eventsMenu',function($scope,$routeParams,getService){
        $scope.namo="";

        getService.eventTitle().success(function(data){
            $scope.menuItems = data;

        })

        $scope.fire = function(url){
            url = url.toLowerCase();
            url = url.replace(/\s/g, "-");


            getService.content(url).success(function(data){
                console.log(data);

                $scope.content = data;



                if(slider.current!=0)
                    slider._showItem(1);
            })
        }

        $scope.callTab = function(id){

            slider._showItem(id+1);
        }



    })

    .controller('content',function($scope,$routeParams,getService){


    })

