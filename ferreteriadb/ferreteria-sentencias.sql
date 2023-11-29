USE preciojustodb;
-- categorias
INSERT INTO `preciojustodb`.`categorias`
(`idcategorias`,
`categoria`)
VALUES
(1,
'herramientas');
INSERT INTO `preciojustodb`.`categorias`
(`idcategorias`,
`categoria`)
VALUES
(7,
'mecanica y automotriz');
-- sucursal
INSERT INTO `preciojustodb`.`sucursal`
(`idsucursal`,
`sucursal`,
`ubicacion`,
`telefono`)
VALUES
(1,
'San Antonio',
'San Antonio 503, Juarez, Nuevo Leon',
8130391674);
-- inicia usuario
INSERT INTO `preciojustodb`.`usuario`
(`idusuario`,
`nombre`,
`numero`,
`correo electronico`,
`carrito-compras_idcarrito-compras`)
VALUES
(1,
'Ana Mia Castro Ruiz',
2292157353,
'ruizmia@gmail.com',
1);
INSERT INTO `preciojustodb`.`usuario`
(`idusuario`,
`nombre`,
`numero`,
`correo electronico`,
`carrito-compras_idcarrito-compras`)
VALUES
(2,
'Lilia Salazar Trejo',
'3338225755',
'lilijusatre@gmail.com',
2);
-- inicia carrito de compras
INSERT INTO `preciojustodb`.`carrito-compras`
(`idcarrito-compras`,
`fecha-creacion`,
`cantidad-productos`,
`precio-total`)
VALUES
(1,
'2023-11-11',
9,
400.00);
INSERT INTO `preciojustodb`.`carrito-compras`
(`idcarrito-compras`,
`fecha-creacion`,
`cantidad-productos`,
`precio-total`)
VALUES
(2,
'2023-11-02',
15,
950.00);
INSERT INTO `preciojustodb`.`carrito-compras`
(`idcarrito-compras`,
`fecha-creacion`,
`cantidad-productos`,
`precio-total`)
VALUES
(3,
'2023-11-07',
11,
1520.00);
INSERT INTO `preciojustodb`.`carrito-compras`
(`idcarrito-compras`,
`fecha-creacion`,
`cantidad-productos`,
`precio-total`)
VALUES
(4,
'2023-11-11',
19,
2450.00);
INSERT INTO `preciojustodb`.`carrito-compras`
(`idcarrito-compras`,
`fecha-creacion`,
`cantidad-productos`,
`precio-total`)
VALUES
(5,
'2023-11-11',
2,
200.00);
-- inicia orden-de-compra
INSERT INTO `preciojustodb`.`orden-de-compra`
(`idorden-de-compra`,
`fecha orden`,
`status`,
`precio-total`,
`cantidad-productos`,
`usuario_idusuario`,
`sucursal_idsucursal`)
VALUES
(1,
'2023-11-11',
'entregado',
400.00,
9,
1,
1);
-- productos
INSERT INTO `preciojustodb`.`productos`
(`idproductos`,
`nombre`,
`imagen`,
`precio`,
`descripcion`,
`cantidad`,
`categorias_idcategorias`,
`sucursal_idsucursal`,
`carrito-compras_idcarrito-compras`)
VALUES
(024,
'tijera para podar',
'Productos\024 TIJERA PARA PODAR TRUPER.jpg',
165.00,
'Tijera forjada para poda 8" para jardineria, Truper',
20,
2,
1,
1);

INSERT INTO `preciojustodb`.`productos`
(`idproductos`,
`nombre`,
`imagen`,
`precio`,
`descripcion`,
`cantidad`,
`categorias_idcategorias`,
`sucursal_idsucursal`,
`carrito-compras_idcarrito-compras`,
`orden-de-compra_idorden-de-compra`,
`orden-de-compra_usuario_idusuario`,
`orden-de-compra_sucursal_idsucursal`
)
VALUES
(025,
'navaja retractil',
'Productos\025 NAVAJA RETRÁCTIL TRUPER 18 mm.jpg',
81.00,
'Cutter 18 mm profesional con alma metalica y grip, Truper',
22,
1,
1,
2,
1,
1,
1);

INSERT INTO `preciojustodb`.`productos`
(`idproductos`,
`nombre`,
`imagen`,
`precio`,
`descripcion`,
`cantidad`,
`categorias_idcategorias`,
`sucursal_idsucursal`,
`carrito-compras_idcarrito-compras`,
`orden-de-compra_idorden-de-compra`,
`orden-de-compra_usuario_idusuario`,
`orden-de-compra_sucursal_idsucursal`)
VALUES
(072,
'separadores de loseta 8mm',
'Productos\072 SEPARADORES DE LOSETA 8mm 5_16 TRUPER.jpg',
50.00,
'Bolsa con 75 separadores de 8 mm de losetas 5/16, Truper',
12,
1,
2,
3,
2,
2,
1);

INSERT INTO `preciojustodb`.`productos`
(`idproductos`,
`nombre`,
`imagen`,
`precio`,
`descripcion`,
`cantidad`,
`categorias_idcategorias`,
`sucursal_idsucursal`,
`carrito-compras_idcarrito-compras`,
`orden-de-compra_idorden-de-compra`,
`orden-de-compra_usuario_idusuario`,
`orden-de-compra_sucursal_idsucursal`
)
VALUES
(073,
'separadores de loseta 2mm',
'Productos\073 SEPARADORES DE LOSETA 2mm 5_6 TRUPER.jpg',
34.00,
'Bolsa con 200 separadores de 2 mm de losetas 5/6, Truper',
10,
1,
2,
4,
1,
1,
1);
INSERT INTO `preciojustodb`.`productos`
(`idproductos`,
`nombre`,
`imagen`,
`precio`,
`descripcion`,
`cantidad`,
`categorias_idcategorias`,
`sucursal_idsucursal`,
`carrito-compras_idcarrito-compras`,
`orden-de-compra_idorden-de-compra`,
`orden-de-compra_usuario_idusuario`,
`orden-de-compra_sucursal_idsucursal`
)
VALUES
(1226,
'Regleta calibradora',
'Productos\1226 REGLETA CALIBRADORA TRUPER.jpg',
50.00,
'Regleta medidora de tuercas y tornillos, 22 cm, Truper',
50,
7,
1,
4,
1,
1,
1);