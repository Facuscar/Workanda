<?php 

namespace Controllers;

myAutoLoader('../models/','Usuario');

use Model\Usuario;
use MVC\Router;

class LoginController{

    public static function login(Router $router){

        if($_SERVER['REQUEST_METHOD'] === 'POST'){

            //Buscamos en la base de datos un usuario con el correo electrónico que se encuentra en post
            $usuario = Usuario::where('email', $_POST['email']);


           //Verficamos si existe el usuario
        if(!$usuario){
                
            Usuario::setAlerta('error', 'El correo no es válido');
            
            //Verificamos si las contraseñas coinciden
        } else if(password_verify($_POST['password'], $usuario->password)){
            
            $_SESSION['id']  = $usuario->id;
            $_SESSION['nombre']  = $usuario->nombre;
            $_SESSION['email']  = $usuario->email;
            $_SESSION['login']  = true;
            } else{
                Usuario::setAlerta('error', 'La contaseña y el correo no coinciden');
            }
        }

        $alertas = Usuario::getAlertas();

        //render a la vista
        $router->render('auth/login',[
            'titulo' => 'Inicia sesión',
            'alertas' => $alertas
        ]);
    }
}