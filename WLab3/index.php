<?php

ini_set ('display_errors', true);
error_reporting (E_ALL);

require_once "vendor/autoload.php";
require_once "Parser.php";


$app = new Slim\App();


$app->get("/texts", function ($request, $response) {
    return $response->withJson(["data" => (new Parser())->getAllNotes()], 200);
});

$app->post("/texts", function ($request, $response) {
    return (new Parser())->save($_POST["data"]);
});

$app->delete("/texts/{id}", function ($request, $response, $args) {
    return (new Parser())->remove($args["id"]);
});


$app->run();