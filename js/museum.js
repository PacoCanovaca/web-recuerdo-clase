export const initMuseo = () => {
    const datosMuseo = {
        excursiones: {
            titulo: "Sala de las Excursiones",
            contenido: `
                <p>¡Cuántos kilómetros hemos recorrido juntos en estos años!</p>
                <p>Todavía recuerdo con muchísimo cariño nuestra primera gran salida al Multiaventura de Espiel. Fue el inicio de nuestra historia fuera del aula.</p>
                
                <section class="galeria-fotos-excursion">
                    <img src="assets/museum/espiel_1.jpg" class="img-tilted-left">
                    <img src="assets/museum/espiel_2.jpg" class="img-tilted-right">
                    <img src="assets/museum/espiel_3.jpg" class="img-tilted-left">
                </section>

                <p>A lo largo de estos años hemos visto obras de teatro, hemos disfrutado de la naturaleza fuera y dentro de la ciudad (en el jardín botánico y en el zoo), hemos visitado a la policía y, en definitiva, hemos explorado una pequeña parte del mundo juntos.</p>
                <p>Pero, sin duda, lo que nunca olvidaremos es nuestro último gran viaje a Madrid. Fueron unos días donde compartimos experiencias, emociones y anécdotas que se quedarán para siempre con nosotros. Desde los gritos en las atracciones de la Warner hasta las bocas abiertas con los espectáculos del Puy du Fou</p>

                <section class="galeria-fotos-excursion">
                    <img src="assets/museum/madrid_1.jpg" class="img-tilted-right">
                    <img src="assets/museum/madrid_2.jpg" class="img-tilted-left">
                    <img src="assets/museum/madrid_3.jpg" class="img-tilted-right">
                </section>
                `
        },
        baneos: {
            titulo: "Baneos del Profe",
            contenido: `
                <p>Seamos sinceros: a veces os poníais muy intensos con las modas de internet.</p>
                <p>Esta sala es un homenaje a todos esos <strong>memes virales, canciones, bromas y frasecitas</strong> que acabaron estrictamente prohibidos en clase porque no parabais de repetirlos.</p>
                <p>Aunque en su momento me tocaba ponerme serio para que trabajarais y os dejarais de pegos, siempre ha sido muy divertido reírnos en silencio cuando alguno de vosotros esquivabais de milagro un meme. Echaré de menos esos ratitos (miau miau miau miaaaaauuu).</p>
                <p>Espero que a todos nos siga saliendo una sonrisa cuando vayamos por la página 67 de un libro o al usar la palabra "locura" en cualquier contexto.</p>

                <section class="galeria-fotos-excursion">
                    <img src="assets/museum/miau.jpg" class="img-tilted-left">
                    <img src="assets/museum/brainrot.png"  class="img-tilted-right">
                    <img src="assets/museum/67.png" class="img-tilted-left">
                </section>
            `
        },
        cartas: {
            titulo: "Cartas de Recompensa",
            contenido: `
                <p>Desde que empezamos juntos en el primer año, quise buscar una forma especial de valorar vuestras ganas e implicación con la lectura.</p>
                <p>Así nacieron nuestras cartas de recompensa. Ha sido genial ver cómo os ilusionabais por conseguirlas.</p>
                <p>¿Quién recuerda la ilusión cuando a alguien le tocaba la carta del Genio de Aladdin en 3º? Bueno, y qué momento más bonito aquel en el que os poníais de acuerdo en 4º y 5º para ahorrar y conseguir entre todos la carta misteriora.</p>
                <p>Habéis dado paseos, habéis disfrutado de canciones y abrazos de vuestros compañeros y os habéis librado de algún que otro castigo. Pero, sobre todo, habéis aprendido a gestionar los recursos y a esforzaros para conseguir un objetivo... ¡Además de convertiros en grandes lectores!</p>

                <section class="galeria-fotos-excursion">
                    <img src="assets/museum/cartas_1.png" class="img-tilted-left">
                    <img src="assets/museum/cartas_2.png" class="img-tilted-right">
                    <img src="assets/museum/cartas_3.png" class="img-tilted-left">
                </section>
            `
        },
        dinamicas: {
            titulo: "Dinámicas de Clase",
            contenido: `
                <p>El aprendizaje no siempre está en los libros de texto, y en esta clase lo hemos demostrado con creces. Espero que no olvidéis:</p>
                <ul>
                    <li>Esos <strong>acertijos y enigmas</strong> que os hacían estrujaros el cerebro, incluso durante varios días.</li>
                    <li>Las partidas a los <strong>juegos de mesa</strong> donde sacabais vuestro lado más estratega y donde hasta el profe se picaba de vez en cuando.</li>
                    <li>Los <strong>debates</strong> en los que defendíais vuestras ideas con uñas y dientes, incluso aunque os tocara un punto de vista complicado u opuesto a lo que pensabais en realidad.</li>
                    <li>Todos esos <strong>proyectos</strong> donde sacabais vuestro investigador interior y desplegabais vuestra creatividad (que no es poca), ya fuera a mano o a ordenador.</li>
                    <li>¡Hasta hemos hecho un <strong>concurso de talentos</strong>!</li>
                </ul>
                <p>Gracias por darle tanta vida a cada propuesta que traía al aula.</p>

                <section class="galeria-fotos-excursion">
                    <img src="assets/museum/investigacion_1.jpg" class="img-tilted-right">
                    <img src="assets/museum/investigacion_2.jpg" alt="Partida a un juego de mesa de estrategia" class="img-tilted-left">
                </section>

                <section class="galeria-fotos-excursion">
                    <img src="assets/museum/carta_recompensa.jpg" alt="Equipos investigando con los ordenadores del aula" class="img-tilted-right">
                </section>
            `
        },
        recreo: {
            titulo: "Juegos del Recreo",
            contenido: `
                <p>Desde hace unos años el colegio nos propone el reto de los <strong>Patios Activos</strong>, introduciendo un juegos novedosos y diferentes que os hacen salir de vuestra zona de confort.</p>
                <p>Pero todo hay que decirlo: pocas clases le han puesto tanta ilusión, ganas y energía a estos juegos como vosotros.   Habéis sido el motor de los recreos, aprendiendo rápido, participando siempre y, sobre todo, jugando juntos.</p>
                <p>Sé que hemos tenido nuestros rifirafes y que me he tenido que poner en modo árbitro estricto algunas veces, pero también os he visto disfrutar y me habéis hecho disfrutar a mí como si fuera uno más.</p>

                <section class="galeria-fotos-excursion">
                    <img src="assets/museum/twincon.png" class="img-tilted-left">
                    <img src="assets/museum/recreo.jpg" class="img-tilted-right">
                </section>
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