<div class="contenedor contenedor-dashboard">
    <h1>Dashboard de <?php echo $user ?></h1>
    <button data-modal-target="#modal-nuevo" class="boton">Nuevo usuario</button>
    <div class="tabla-dashboard">
        <ul class="lista-dashboard">
            <li class="tts"> <p>ID</p> </li>
            <li class="tts"> <p>Nombre</p> </li>
            <li class="tts"> <p>Email</p> </li>
            <li class="tts"> <p>Acciones</p></li>
        <?php foreach ($usuarios as $usuario) { ?>
            <li>
            <p><?php echo $usuario->id; ?></p>
            </li>
            <li>
            <p><?php echo $usuario->nombre; ?></p>
            </li>
            <li>
            <p><?php echo $usuario->email; ?></p>
            </li>
            <li class="acciones"> 
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                <line x1="16" y1="5" x2="19" y2="8" />
                </svg></a> 

                <a href=""><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg></a></li>
       <?php } ?> 
       </ul>
    </div>

    <div class="modal-nuevo" id="modal-nuevo">
        <div class="modal-header">
            <div class="title">Agregar usuario</div>
            <button data-close-button class="close-button boton">&times;</button>
        </div>
            <div class="modal-body">
        <form action="/" method="POST" class="formulario">
            <div class="campo">
                <label for="nombre">Nombre:</label>
                <input type="nombre" id="nombre" placeholder="El nombre" name="nombre">
            </div>

            <div class="campo">
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="El email" name="email">
            </div>

            <div class="campo">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" placeholder="Contraseña" name="password">
            </div>

            <div class="campo">
                <label for="password2">Confirma la contraseña:</label>
                <input type="password2" id="password2" placeholder="Repite la contraseña" name="password2">
            </div>

            <input type="submit" class="boton" id="crear-usuario" value="Crear usuario">
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
            </div>
    </div>
    <div id="overlay"></div>
    <?php $script = '<script src="/build/js/dashboard.js"></script>
                    <script src="/build/js/modal.js"></script>'?> 
</div>