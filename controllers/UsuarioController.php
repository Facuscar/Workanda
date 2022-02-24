<?php 

namespace Controllers;
use Model\Usuario;
use MVC\Router;

class UsuarioController{
    public static function login(Router $router){

        //render a la vista
        $router->render('auth/login',[
        ]);
    }
}