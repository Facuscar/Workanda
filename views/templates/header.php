<div class="contenedor-header">
    <div class="header">
        <div class="img">
            <img src="/build/img/workanda-logo.png" alt="logo">
        </div>
        <div class="navbar">
            <ul>
                <li>Servicios</li>
                <li>Contacto</li>
                <?php if(isset($user))  { ?>
                    <a href="/logout">
                        <li>Cerrar sesion</li>
                    </a>
                <?php } else {?>
                <li>Iniciar sesión</li>
                <?php } ?>
            </ul>
        </div>
    </div>
</div>