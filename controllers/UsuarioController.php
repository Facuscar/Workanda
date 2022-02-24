<?php 

namespace Controllers;
use Model\Usuario;
use MVC\Router;

class UsuarioController{
    public static function index(Router $router){
        session_start();
        isAuth();
        debuguear($_SESSION);
        //render a la vista
        $router->render('dashboard/index',[
        ]);
    }
}