<?php 

namespace Controllers;
use Model\Usuario;
use MVC\Router;

class UsuarioController{
    public static function index(Router $router){
        session_start();
        isAuth();
        //render a la vista
        $usuarios = Usuario::all();
        $router->render('dashboard/dashboard',[
            'titulo' => 'Administra usuarios',
            'usuarios' => $usuarios,
            'user' => $_SESSION['nombre']
        ]);
    }
}