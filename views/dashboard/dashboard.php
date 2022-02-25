<div class="contenedor contenedor-dashboard">
    <h1>Dashboard</h1>
    <div class="tabla-dashboard">
        <?php foreach ($usuarios as $usuario) { ?>
            <p><?php echo $usuario->nombre; ?></p>
       <?php } ?>
    </div>
</div>