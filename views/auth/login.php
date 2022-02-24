<div class="login">
    <div class="alertas-container"></div>
    <div class="contenedor">
        <form action="/" method="POST" class="formulario">
            <div class="campo">
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="Tu email" name="email">
            </div>
            <div class="campo">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" placeholder="Tu contraseña" name="password">
            </div>

            <input type="submit" class="boton" value="Iniciar sesión">
            <div class="loading">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-dashed" width="28" height="28" viewBox="0 0 24 24" stroke-width="2.5" stroke="#a00000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
                <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
                <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
                <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
            </svg>
        </div>
        </form>
        <div class="acciones">
        <ul>
            <li>Olvidé mi contraseña</li>
            <li>Registrarme</li>
        </ul>
    </div>
    </div>  
</div>
<?php $script = '<script src="build/js/login.js"></script>' ?>
