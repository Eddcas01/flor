document.addEventListener('DOMContentLoaded', () => {
    const petals = document.querySelectorAll('.petal');
    const center = document.querySelector('circle');
    const leaf = document.querySelector('path');




    let currentMessage = 0;
    const messages = ['msj1', 'msj2', 'msj3'];

    document.getElementById('startButton').addEventListener('click', function() {
        // Ocultar todos los mensajes
        messages.forEach(msg => {
            document.getElementById(msg).classList.remove('show');
            document.getElementById(msg).style.display = 'none'; // Se oculta después de la transición
        });
        
        // Mostrar el mensaje actual
        if (currentMessage < messages.length) {
            const currentElement = document.getElementById(messages[currentMessage]);
                currentElement.style.display = 'block'; // Mostrar primero el elemento
                setTimeout(() => {
                    currentElement.classList.add('show'); // Añadir la clase para el fade-in
                }, 10); // Pequeño retraso para que la transición se aplique correctamente
                currentMessage++;
        }
        else{

              // Ocultar el botón cuando comienza la animación
        startButton.style.display = 'none';
        // Animar el círculo después del tallo
        setTimeout(() => {
            center.classList.add('drawing2');
    
            setTimeout(() => {
                center.classList.add('filled');
              }, 150);
        }, 2000); // 2 segundos después de que el tallo comienza
      
        // Animar las hojas después del círculo
        setTimeout(() => {
            leaf.classList.add('drawing');
        }, 4000); // 4 segundos después de que el tallo comienza
    
        // Animar los pétalos después de las hojas
        setTimeout(() => {
            
      
        petals.forEach((petal, index) => {
          setTimeout(() => {
            // Dibujar cada pétalo
            petal.classList.add('drawing');
            
            // Después de que se dibuje, agregar el relleno
            setTimeout(() => {
              petal.classList.add('filled');
            }, 1000); // Tiempo que tarda el dibujo
          }, index * 1000); // Retardo entre pétalos
        });
        }, 4000); 


        const mensaje4 = document.getElementById('msj4');
        mensaje4.style.display = 'block'; // Mostrar primero el elemento
        setTimeout(() => {
            mensaje4.classList.add('show'); // Añadir la clase para el fade-in
        }, 4000);

        const mensaje5 = document.getElementById('msj5');
        mensaje5.style.display = 'block'; // Mostrar primero el elemento
        setTimeout(() => {
            mensaje5.classList.add('show'); // Añadir la clase para el fade-in
        }, 6000);
        
        const mensaje6 = document.getElementById('msj6');
        mensaje6.style.display = 'block'; // Mostrar primero el elemento
        setTimeout(() => {
            mensaje6.classList.add('show'); // Añadir la clase para el fade-in
        }, 9000);

        setTimeout(() => {
            
      
            petals.forEach((petal, index) => {
              setTimeout(() => {
                // Dibujar cada pétalo
                petal.classList.add('drawing');
                
                // Después de que se dibuje, agregar el relleno
                setTimeout(() => {
                  petal.classList.add('filled2');
                }, 150); // Tiempo que tarda el dibujo
              }, index * 150); // Retardo entre pétalos
            });
            }, 20000); 
       
            setTimeout(() => {
            
      
                petals.forEach((petal, index) => {
                  setTimeout(() => {
                    // Dibujar cada pétalo
                    petal.classList.add('drawing');
                    
                    // Después de que se dibuje, agregar el relleno
                    setTimeout(() => {
                      petal.classList.add('filled3');
                    }, 150); // Tiempo que tarda el dibujo
                  }, index * 150); // Retardo entre pétalos
                });
                }, 22000); 

        }
    });





  
   
});
