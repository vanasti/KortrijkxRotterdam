<?php
/**
 * Craft web bootstrap file
 */

// Load shared bootstrap
require __DIR__ . '/../../craft/stickers/bootstrap.php';

// Load and run Craft
/** @var craft\web\Application $app */
$app = require CRAFT_VENDOR_PATH . '../../craft/stickers/bootstrap.php';
$app->run();
