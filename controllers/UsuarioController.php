<?php 

namespace Controllers;
use Model\Usuario;
use MVC\Router;

class UsuarioController{
    public static function index(Router $router){

        if(!isset($_SESSION)){
            session_start();
        }
        isAuth();

        //render a la vista
        $usuarios = Usuario::all();
        $router->render('dashboard/dashboard',[
            'titulo' => 'Administra usuarios',
            'usuarios' => $usuarios,
            'user' => $_SESSION['nombre']
        ]);
    }

    public static function crear(){

        $result = null;

        if(!isset($_SESSION)){
            session_start();
        }
        
        if($_SERVER['REQUEST_METHOD'] === 'POST'){
            if(!isset($_SESSION['login'])) {
                $respuesta = [
                    'respuesta' => 'access denied'
                ];
            } else{

                $usuario = new Usuario($_POST);
                //Validamos la nueva cuenta
                $usuario->validarNuevaCuenta();

                $alertas = Usuario::getAlertas();
                if(empty($alertas)){
                    //Buscamos en la DB que no haya ningun usuario con ese mismo email
                    $existe = Usuario::where('email', $usuario->email);

                    //Si encontramos un usuario, el correo ya está ocupado
                    if($existe){
                        Usuario::setAlerta('error', 'El correo ya está en uso');
                    } else{
                        //Hasheamos el password
                        $usuario->hashPassword();

                        //Guardamos el usuario
                        $result = $usuario->guardar();
                    }
                }

                $alertas = Usuario::getAlertas();

                $respuesta = [
                    'alertas' => $alertas,
                    'resultado' => $result
                ];
                echo json_encode($respuesta);
                return; 
            }
        }
    }

    public static function actualizar(){
        $respuesta = [
            'Datos' => $_POST,
            'Respuesta' => 'Desde actualizar'
        ];

        echo json_encode($respuesta);
    }
}