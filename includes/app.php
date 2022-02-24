<?php 

require 'funciones.php';
require 'database.php';

myAutoLoader('../models/','ActiveRecord');

// Conectarnos a la base de datos
use Model\ActiveRecord;
ActiveRecord::setDB($db);