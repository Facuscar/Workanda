<?php 

namespace Controllers;

myAutoLoader('../models/','Usuario');

use Model\Usuario;
use MVC\Router;

class LoginController{
    public static function login(Router $router){

        if($_SERVER['REQUEST_METHOD'] === 'POST'){
            //Creamos un objeto de usuario con lo recibido por POST
            $usuario = new Usuario($_POST);

            //Buscamos en la base de datos un usuario con el correo electrónico que se encuentra en post
            $usuario = Usuario::where('email', $usuario->email);
            debuguear($usuario);
        }

        //render a la vista
        $router->render('auth/login',[
            'titulo' => 'Inicia sesión',
        ]);
    }
}