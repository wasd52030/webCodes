<?php

/** @var \Laravel\Lumen\Routing\Router $router */
use illuminate\Http\Response;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/hello', function () {
    return "Hello world!";
});

$name = "John";
$router->get('/hellosomeone', function () use ($name) {
    return "Hello $name";
});

$router->get('/ControllerSample', "ControllerSample@helloController");

$router->get('/ControllerSample/{name}', "ControllerSample@hello");
$router->get('/ControllerSample/{a}/{b}', "ControllerSample@add");

$router->get('/getAllUsers', "User@getAllUsers");
$router->get('/getUser/{id}', "User@getUser");
$router->post('/addUser', "User@addUser");
$router->put('/updateUser', "User@updateUser");
$router->delete('/deleteUser', "User@deleteUser");
