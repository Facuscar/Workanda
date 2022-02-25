<?php 

namespace Controllers;

myAutoLoader('../models/','Usuario');

use Model\Usuario;
use MVC\Router;

class LoginController{

    public static function login(Router $router){

        if(isset($_SESSION['login'])){
            header('Location: /dashboard');
        }

        if($_SERVER['REQUEST_METHOD'] === 'POST'){

            $usuario = new Usuario($_POST);


            //Validamos el login(campos vacios, etc)
            $usuario->validarLogin();

            $alertas = Usuario::getAlertas();
            
            if(empty($alertas)){
                //Buscamos en la base de datos un usuario con el correo electrónico que se encuentra en post
                $usuario = Usuario::where('email', $_POST['email']);


                //Verificamos si las contraseñas coinciden y existe el usuario
                if( $usuario && password_verify($_POST['password'], $usuario->password)){

                    session_start();
                    $_SESSION['id']  = $usuario->id;
                    $_SESSION['nombre']  = $usuario->nombre;
                    $_SESSION['email']  = $usuario->email;
                    $_SESSION['login']  = true;
                } else{
                    Usuario::setAlerta('error', 'La contaseña y el correo no coinciden');
                }

                $alertas = Usuario::getAlertas(); 
            }  
            $respuesta = [
                'alertas' => $alertas,
            ];
            echo json_encode($respuesta);
            return;
        }
            
        //render a la vista
        $router->render('auth/login',[
        'titulo' => 'Inicia sesión'
        ]);
    }
}