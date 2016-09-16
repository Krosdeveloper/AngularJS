
    var miapp = angular.module( "miapp" , [] )

    miapp.controller ('controlador1' , ['$scope' , function($scope){

        $scope.nombre = "kevin";

    }])

    miapp.controller ('controlador2' , ['$scope' , function($scope){

        $scope.nombre = "xorena";

    }])

    miapp.controller ('circunferencia' , ['$scope' , function($scope){

        var pi = 3.14;
        $scope.calcularCircunferencia = function(){

            $scope.circunferencia = $scope.diametro * pi;

        }

    }])

    miapp.controller ('nombres' , ['$scope' , function($scope){


        $scope.nombres =["Alois","Gardenzio","Carlos"];
        $scope.heroes = [
            {nombre: "Arnold", Apellido:"ctm..."},
            {nombre: "chuck", Apellido:"norris"},
            {nombre: "Bruce", Apellido:"lee"}
        ]

    }])

    miapp.controller ('buscador' , ['$scope' , function($scope){

        $scope.db = [
            {nombre:"kevin", telefono:"11111"},
            {nombre:"roman", telefono:"22222"},
            {nombre:"oca", telefono:"33333"}
        ]
    }])
