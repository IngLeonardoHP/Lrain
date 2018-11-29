# Lrain
#Lluvia
#Authors: Leonardo hernandez / Leonardo Alvarado
#Emails:  ing.leonardo.hp@gmail.com / ing.leonardo92@gmial.com
#


Este es una libreria destinada a generar un refrescante efecto de "lluvias" sobre la pantalla incial de cualquier proyecto web.

Libre de dependecias como Jquery, o algun framework css, garantizando que la carga en el navegador sera minima.

Los diferentes eventos hacen usos de fuentes, y no de imagenes, asi aseguramos que los equipos menos capaces puedan reproducir los diferentes eventos sin ningun problema (carga minima de memoria).

Como usar:
  1. clonar o descargar el proyecto
  
  2. Agregar lRain.css en el header de la vista donde se desea agregar el efecto
  
    <link rel="stylesheet" href="./css/lrain.css">
  
  3. Agregar lRain.js al final del body de la vista
      
    <script src="./js/lRain.js"></script>
      
      <script>
        /*
          0: ramdom rain / luvia ramdom
          1: leaf rain / lluvia de hojas
          2: drops rain / lluvia gotas de agua
          3: snow / copos de nieve
          4: Storm / tormenta (conbinacion)
        */
        //params: type rain / tipo de luvia
        //        nummber drops  / cantidad de gotas sobre la pantalla  
        generateLrain(2, 100);
      </script>

Prevews

Opcion 1, hojas
![leaf](https://user-images.githubusercontent.com/8810299/49225457-870c5880-f3ba-11e8-9436-e5fab1db094f.png)

Opcion 2, nieve
![snow](https://user-images.githubusercontent.com/8810299/49225477-92f81a80-f3ba-11e8-9ac8-9d18654e38fd.png)

Opcion 3, gotas
![drops](https://user-images.githubusercontent.com/8810299/49225486-98556500-f3ba-11e8-8da2-57a9e4ed5f38.png)

Opcion 4, tormenta
![storm](https://user-images.githubusercontent.com/8810299/49225498-9db2af80-f3ba-11e8-9dc8-0a60756cc1c7.png)


Created by: Ing.leonardo.hp@gmail.com and Ing.leonardo92@gmail.com
