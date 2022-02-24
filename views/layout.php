<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Workanda - <?php echo $titulo ?></title> 
    <link rel="stylesheet" href="build/css/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto:wght@300;400&display=swap" rel="stylesheet"> 
    <link rel="icon" href="https://workanda.es/wp-content/uploads/2021/05/cropped-favicon-32x32.png" sizes="32x32">
</head>
<body>
    <?php include 'templates/header.php' ?>
    <?php echo $contenido; ?>
    <?php echo $script ?? ''; ?>

</body>
</html>