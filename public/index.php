<?php 

require_once __DIR__ . '/../includes/app.php';

myAutoLoader('../', 'Router');
myAutoLoader('../controllers/', 'LoginController');
myAutoLoader('../controllers/', 'UsuarioController');

use Controllers\LoginController;
use Controllers\UsuarioController;
use MVC\Router;
$router = new Router();

//Login
$router->get('/', [LoginController::class, 'login']);
$router->post('/', [LoginController::class, 'login']);
$router->get('/logout', [LoginController::class, 'logout']);



//Zona de usuarios
$router->get('/dashboard', [UsuarioController::class, 'index']);

//Api de usuarios
$router->post('/crear-usuario', [UsuarioController::class, 'crear']);
$router->post('/actualizar-usuario', [UsuarioController::class, 'actualizar']);
$router->post('/eliminar-usuario', [UsuarioController::class, 'eliminar']);


// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();