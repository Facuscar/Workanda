<?php 

namespace Controllers;
use Model\Usuario;
use MVC\Router;

class UsuarioController{
    public static function index(Router $router){

        echo "Desde UsuarioController";
        return;
        //render a la vista
        $router->render('dashboard/index',[
        ]);
    }
}