![Imagen](https://github.com/elarreglador/Monocrom-II/blob/main/CAPUTRAS/Social%20preview.png)


************************************
ACERCA DEL AUTOR
************************************

David M.

elarreglador@protonmail.cocm

https://github.com/elarreglador


************************************
ACERCA DE LA APLICACION
************************************
El MONOCROM es un monitor monocromo con pantalla cuadrada formada por una
retícula de 16x16 puntos, cada uno de los cuales se puede poner de color blanco o de
color negro.

El monitor dibuja a partir de ciertas órdenes que recibe en forma de secuencia de
caracteres; los caracteres enviados actúan no sobre toda la pantalla, sino solamente
sobre un área seleccionada, que puede cambiarse mediante algunos de estos caracteres.
Inicialmente, el área seleccionada es toda la pantalla, y puede suponerse que todos sus
puntos son de color blanco. El carácter 'x' sirve para pintar el área seleccionada (es
decir, poner todos sus puntos de color negro) e, inmediatamente, volver a considerar
como área seleccionada la pantalla entera.

Finalmente, los caracteres del '1' al '4' sirven para hacer más pequeña el área
seleccionada, de manera que posteriores caracteres 'x' afecten a menos puntos.
Concretamente, estos caracteres escogen como nueva área seleccionada uno de los
cuatro trozos siguientes:

'1': trozo superior izquierdo
'2': trozo superior derecho
'3': trozo inferior derecho
'4': trozo inferior izquierdo

Nótese, pues, que en realidad MONOCROM sólo permite pintar uno o más cuadrados;
cualquier figura compleja debe pintarse a trozos, seleccionando y pintando los
cuadrados adecuados.

Así, por ejemplo, la siguiente secuencia:

2222x
3x
113x

Debería crear lo siguiente:

0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 x
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 x x 0 0 0 0 0 0 0 0 0 0 0 0
0 0 x x 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 x x x x x x x x
0 0 0 0 0 0 0 0 x x x x x x x x
0 0 0 0 0 0 0 0 x x x x x x x x
0 0 0 0 0 0 0 0 x x x x x x x x
0 0 0 0 0 0 0 0 x x x x x x x x
0 0 0 0 0 0 0 0 x x x x x x x x
0 0 0 0 0 0 0 0 x x x x x x x x
0 0 0 0 0 0 0 0 x x x x x x x x

Tambien es posible emplear otros caracteres en lugar de una X

![Imagen](https://github.com/elarreglador/Monocrom-II/blob/main/CAPUTRAS/Primera.png)


************************************
LANZAR LA APP 
************************************

Esta aplicacion requiere tener electron instalado

npm start



                                                                                            David M.
                                                                             11 de diciembre de 2023


