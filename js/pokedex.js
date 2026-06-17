export const initPokedex = () => {
    const pokedexGrid = document.getElementById('pokedex-grid');
    
    const modal = document.getElementById('pokedex-modal');
    const btnCerrar = document.getElementById('close-pokedex-modal');
    const modalNombre = document.getElementById('poke-modal-nombre');
    const modalAvatar = document.getElementById('poke-modal-avatar');
    const modalTipo = document.getElementById('poke-modal-tipo');
    const modalHabilidad = document.getElementById('poke-modal-habilidad');
    const modalMovimiento = document.getElementById('poke-modal-movimiento');
    const modalRecomendacion = document.getElementById('poke-modal-recomendacion');

    let datosAlumnos = []; 

    const cargarPokemons = async () => {
        try {
            const respuesta = await fetch('data/students.json');
            
            if (!respuesta.ok) {
                throw new Error(`Error en la carga: ${respuesta.status}`);
            }
            
            datosAlumnos = await respuesta.json();
            renderizarTarjetas(datosAlumnos);
            
        } catch (error) {
            console.error("Hubo un problema al cargar la Pokédex:", error);
        }
    };

    const renderizarTarjetas = (alumnos) => {
        pokedexGrid.innerHTML = '';
        
        alumnos.forEach(alumno => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('poke-card');
            tarjeta.setAttribute('data-id', alumno.id);
            
            tarjeta.innerHTML = `
                <div class="poke-avatar">
                    <img src="${alumno.avatar}" alt="Avatar de ${alumno.nombre}">
                </div>
                <h3 class="poke-nombre">${alumno.nombre}</h3>
            `;

            tarjeta.addEventListener('click', () => {
                abrirModalPokemon(alumno);
            });
            
            pokedexGrid.appendChild(tarjeta);
        });
    };

    const abrirModalPokemon = (alumno) => {
        modalNombre.textContent = alumno.nombre;
        modalAvatar.src = alumno.avatar;
        modalAvatar.alt = `Avatar de ${alumno.nombre}`;
        modalTipo.textContent = alumno.tipo;
        modalHabilidad.textContent = alumno.habilidad;
        modalMovimiento.textContent = alumno.movimiento;
        modalRecomendacion.textContent = alumno.recomendacion;

        modalTipo.className = 'type-badge';
        
        // Paso a minúsculas y eliminación de tildes (ej: "Eléctrico" -> "electrico")
        const tipoClase = alumno.tipo
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
            
        modalTipo.classList.add(`type-${tipoClase}`);

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const cerrarModalPokemon = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (btnCerrar) btnCerrar.addEventListener('click', cerrarModalPokemon);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) cerrarModalPokemon();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            cerrarModalPokemon();
        }
    });

    if (pokedexGrid) {
        cargarPokemons();
    }
};