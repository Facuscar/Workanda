<?php 

namespace Controllers;
use Model\Usuario;
use MVC\Router;

class UsuarioController{
    public static function index(Router $router){
        session_start();
        isAuth();

        if($_SERVER['REQUEST_METHOD'] === 'POST'){
            $usuario = new Usuario($_POST);

            $respuesta = [
                'respuesta' => 'ok'
            ];

            echo json_encode($respuesta);
            return;
        }

        //render a la vista
        $usuarios = Usuario::all();
        $router->render('dashboard/dashboard',[
            'titulo' => 'Administra usuarios',
            'usuarios' => $usuarios,
            'user' => $_SESSION['nombre']
        ]);
    }
}