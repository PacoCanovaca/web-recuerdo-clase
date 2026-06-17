export const initMuseo = () => {
    const datosMuseo = {
        excursiones: {
            titulo: "Sala de las Excursiones",
            contenido: `
                <p>Aquí pondremos las fotos de aquella excursión a la granja escuela...</p>
                <p>Y no podemos olvidar cuando nos perdimos buscando el autobús.</p>
                `
        },
        frases: {
            titulo: "Frases Míticas de la Clase",
            contenido: `
                <ul>
                    <li><strong>Alumno A:</strong> "Pero Paco, ¿esto entra en el examen?"</li>
                    <li><strong>Alumno B:</strong> "¿Podemos ir al baño? (5 minutos después de volver del recreo)"</li>
                    <li><strong>Alumno C:</strong> "¡Profe, el perro se comió mis deberes! (Versión digital)"</li>
                </ul>
            `
        },
        talentos: {
            titulo: "Sala de los Talentos",
            contenido: `
                <p>Una exposición de los mejores dibujos, redacciones y manualidades que habéis hecho durante estos tres años.</p>
            `
        },
        momentos: {
            titulo: "Grandes Momentos",
            contenido: `
                <p>Recordando el torneo de ajedrez donde estuvimos horas jugando.</p>
                <p>El día que ganamos el concurso del colegio y lo celebramos todos juntos.</p>
            `
        },
        proyectos: {
            titulo: "Nuestros Proyectos",
            contenido: `
                <p>Desde el volcán de bicarbonato hasta la presentación sobre el sistema solar.</p>
                <p>Trabajasteis en equipo y demostrasteis lo lejos que podéis llegar.</p>
            `
        }
    };

    const tarjetas = document.querySelectorAll('.sala-card');
    const modal = document.getElementById('museo-modal');
    const btnCerrar = document.getElementById('close-modal');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalBody = document.getElementById('modal-body');

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            const salaId = tarjeta.getAttribute('data-sala');
            const datos = datosMuseo[salaId];
            if (datos) {
                modalTitulo.textContent = datos.titulo;
                modalBody.innerHTML = datos.contenido;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });


    const cerrarModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    btnCerrar.addEventListener('click', cerrarModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            cerrarModal();
        }
    });

};