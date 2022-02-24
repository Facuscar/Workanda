<?php 

namespace Controllers;
use Model\Usuario;
use MVC\Router;
use SoapServer;

class LoginController{
    public static function login(Router $router){

        if($_SERVER['REQUEST_METHOD'] === 'POST'){
            debuguear($_POST);
        }

        //render a la vista
        $router->render('auth/login',[
            'titulo' => 'Inicia sesión',
        ]);
    }
}