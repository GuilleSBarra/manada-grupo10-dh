/*
 Navicat Premium Data Transfer

 Source Server         : base_local
 Source Server Type    : MySQL
 Source Server Version : 100413
 Source Host           : localhost:3306
 Source Schema         : proyectomanada

 Target Server Type    : MySQL
 Target Server Version : 100413
 File Encoding         : 65001

 Date: 28/12/2021 21:42:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for productcart
-- ----------------------------
DROP TABLE IF EXISTS `productcart`;
CREATE TABLE `productcart`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idShoppingCart` int(255) NOT NULL,
  `idProduct` int(255) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idProduct`(`idProduct`) USING BTREE,
  INDEX `idShoppingCart`(`idShoppingCart`) USING BTREE,
  CONSTRAINT `idProduct` FOREIGN KEY (`idProduct`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `idShoppingCart` FOREIGN KEY (`idShoppingCart`) REFERENCES `shoppingcarts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of productcart
-- ----------------------------
INSERT INTO `productcart` VALUES (1, 1, 6);
INSERT INTO `productcart` VALUES (2, 1, 38);
INSERT INTO `productcart` VALUES (4, 2, 10);
INSERT INTO `productcart` VALUES (5, 2, 5);
INSERT INTO `productcart` VALUES (7, 2, 8);
INSERT INTO `productcart` VALUES (8, 2, 15);
INSERT INTO `productcart` VALUES (9, 2, 26);
INSERT INTO `productcart` VALUES (10, 3, 1);
INSERT INTO `productcart` VALUES (11, 3, 9);
INSERT INTO `productcart` VALUES (12, 3, 8);
INSERT INTO `productcart` VALUES (13, 3, 7);

-- ----------------------------
-- Table structure for productcategories
-- ----------------------------
DROP TABLE IF EXISTS `productcategories`;
CREATE TABLE `productcategories`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of productcategories
-- ----------------------------
INSERT INTO `productcategories` VALUES (1, 'Jinete', './img/jinete.jpg', 'Todo lo que necesitas para ser Jinete');
INSERT INTO `productcategories` VALUES (2, 'Equipo y Accesorios', './img/accesorios.jpg', 'Todos los accesorios para tu caballo');
INSERT INTO `productcategories` VALUES (3, 'Cuidados del caballo', './img/cuidados.jpg', 'El mejor lugar para cuidar de tu amigo');
INSERT INTO `productcategories` VALUES (4, 'Veterinaria', './img/veterinario-hover.jpg', 'Los mejores productos para tener un caballo sano');

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `idProductsCategory` int(255) NOT NULL,
  `idSize` int(255) NOT NULL,
  `price` decimal(5, 0) NULL DEFAULT NULL,
  `inSale` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `discountPrice` decimal(5, 0) NULL DEFAULT NULL,
  `discount` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idProductsCategory`(`idProductsCategory`) USING BTREE,
  INDEX `idSize`(`idSize`) USING BTREE,
  CONSTRAINT `idProductsCategory` FOREIGN KEY (`idProductsCategory`) REFERENCES `productcategories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `idsize` FOREIGN KEY (`idSize`) REFERENCES `sizes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 'Blue-faced booby', 'Sula dactylatra', '/img/products/bocado-equitacion-fouganza-pelham-articulado-poni-y-caballo-de-caucho.JPG', 2, 5, 1, 'true', 3, '43');
INSERT INTO `products` VALUES (2, 'Chestnut weaver', 'Ploceus rubiginosus', '/img/products/bolsa-de-limpieza-cepillos-equitacion-lami-cell-azul-y-gris.JPG', 3, 4, 6, 'true', 7, '94');
INSERT INTO `products` VALUES (4, 'Squirrel, malabar', 'Ratufa indica', '/img/products/cabezada-equitacion-fouganza-580-estras-caballo-negro-1.JPG', 2, 5, 3, 'false', 5, '21');
INSERT INTO `products` VALUES (5, 'Stork, saddle-billed', 'Ephipplorhynchus senegalensis', '/img/products/cabezada-equitacion-fouganza-580-estras-caballo-negro.JPG', 2, 5, 10, 'true', 2, '41');
INSERT INTO `products` VALUES (6, 'Pig-tailed macaque', 'Macaca nemestrina', '/img/products/calcetines-equitacion-sks-500-ninos-azul-petroleo-turquesa-motivos-ponis.JPG', 1, 2, 9, 'false', NULL, NULL);
INSERT INTO `products` VALUES (7, 'Casco Equitación Fouganza', 'Gyps bengalensiskdsfdsjkhfkdjs', '/img/products/casco-equitacion-fouganza-520-negro-mate.JPG', 1, 2, 9, 'false', NULL, NULL);
INSERT INTO `products` VALUES (8, 'Silver-backed fox', 'Vulpes chama', '/img/products/chaqueta-concurso-equitacion-fouganza-comp-100-mujer-azul-marino.JPG', 1, 4, 4, 'true', 4, '77');
INSERT INTO `products` VALUES (9, 'Great kiskadee', 'Pitangus sulphuratus', '/img/products/cincha-corta-de-cuero-para-silla-de-doma-equitacion-poni-y-caballo-romeo-negro.JPG', 2, 1, 1, 'false', 3, '49');
INSERT INTO `products` VALUES (10, 'Nyala', 'Tragelaphus angasi', '/img/products/desenredante-lustrante-equitacion-ravene-easyshine-caballo-y-poni-750-ml.JPG', 3, 3, 1, 'false', 5, '32');
INSERT INTO `products` VALUES (11, 'Oriental white-backed vulture', 'Gyps bengalensis', '/img/products/estribos-equitacion-reflex-adulto.JPG', 2, 5, 3, 'true', 8, '90');
INSERT INTO `products` VALUES (12, 'Common shelduck', 'Tadorna tadorna', '/img/products/gel-refrescante-tendones-equitacion-fouganza-cool-gel-caballo-y-poni-500ml.JPG', 4, 5, 1, 'false', 4, '95');
INSERT INTO `products` VALUES (13, 'Turaco, violet-crested', 'Tauraco porphyrelophus', '/img/products/grasa-cascos-equitacion-fouganza-unguento-hidratante-caballo-y-poni-verde-750ml.JPG', 4, 3, 7, 'true', 0, '62');
INSERT INTO `products` VALUES (14, 'Gull, southern black-backed', 'Larus dominicanus', '/img/products/helmet.JPG', 1, 5, 3, 'false', 5, '29');
INSERT INTO `products` VALUES (15, 'Siskin, yellow-rumped', 'Carduelis uropygialis', '/img/products/kit-completo-cuidado-cuero-equitacion-fouganza-1.JPG', 3, 5, 6, 'false', 2, '24');
INSERT INTO `products` VALUES (16, 'Magpie, black-backed', 'Gymnorhina tibicen', '/img/products/kit-completo-cuidado-cuero-equitacion-fouganza-2.JPG', 4, 3, 8, 'false', 7, '56');
INSERT INTO `products` VALUES (17, 'Agama lizard (unidentified)', 'Agama sp.', '/img/products/kit-completo-cuidado-cuero-equitacion-fouganza.JPG', 3, 2, 7, 'false', 9, '61');
INSERT INTO `products` VALUES (18, 'Stork, white', 'Ciconia ciconia', '/img/products/mantilla-doma-clasica-con-salvacruz-integrado-caballo-900-fouganza-azul-marino.JPG', 2, 1, 4, 'false', 8, '70');
INSERT INTO `products` VALUES (19, 'Mourning collared dove', 'Streptopelia decipiens', '/img/products/pantalon-equitacion-fouganza-500-mesh-ninos-beige-y-azul-marino.JPG', 1, 5, 8, 'false', 8, '79');
INSERT INTO `products` VALUES (20, 'Boa, emerald green tree', 'Boa caninus', '/img/products/piedra-de-sal-equitacion-kerbl-caballo-y-poni-himalaya-5-kg.JPG', 4, 3, 3, 'true', 1, '24');
INSERT INTO `products` VALUES (21, 'Colobus, white-mantled', 'Colobus guerza', '/img/products/polo-concurso-equitacion-fouganza-100-compet-ninos-blanco-manga-corta.JPG', 1, 1, 3, 'true', 2, '29');
INSERT INTO `products` VALUES (22, 'Mongoose, javan gold-spotted', 'Herpestes javanicus', '/img/products/protectores-integrales-equitacion-fouganza-caballo-negro-neopreno-2-unidades.JPG', 2, 3, 3, 'false', 5, '67');
INSERT INTO `products` VALUES (23, 'Colobus, magistrate black', 'Colobus guerza', '/img/products/rendaje-extensor-caballo-rojo-blanco.JPG', 2, 2, 0, 'false', 2, '51');
INSERT INTO `products` VALUES (24, 'Owl, great horned', 'Bubo virginianus', '/img/products/silla-equitacion-caballo-schooling-negro-polivalente-cuero-equipada-175.JPG', 2, 3, 4, 'false', 4, '52');
INSERT INTO `products` VALUES (25, 'Sandhill crane', 'Grus canadensis', '/img/products/unguento-aceite-casco-top-caballo.JPG', 4, 1, 8, 'false', 7, '41');
INSERT INTO `products` VALUES (26, 'Cobra, cape', 'Naja nivea', '/img/products/vitaminas-equitacion-red-cell-caballo-y-poni-36l.JPG', 3, 5, 7, 'true', 9, '93');
INSERT INTO `products` VALUES (27, 'Mexican beaded lizard', 'Heloderma horridum', '/img/products/orejeras-equitacion-fouganza-hd-strass-caballo-negro-con-cristales.JPG', 2, 3, 9, 'true', 6, '91');
INSERT INTO `products` VALUES (28, 'Turtle, snake-necked', 'Chelodina longicollis', '/img/products/forro-polar-equitacion-mujer-violeta-capucha-2-en-1.JPG', 1, 5, 5, 'false', 0, '31');
INSERT INTO `products` VALUES (29, 'Pigeon, feral rock', 'Columba livia', '/img/products/pantalon-equitacion-fouganza-120-ninos-azul-marino-y-turquesa.JPG', 1, 1, 0, 'false', 9, '100');
INSERT INTO `products` VALUES (30, 'Wombat, common', 'Vombatus ursinus', '/img/products/guantes-equitacion-fouganza-560-ninos-azul-marino-y-rosa.JPG', 1, 2, 7, 'false', 9, '50');
INSERT INTO `products` VALUES (31, 'Wombat, common', 'Vombatus ursinus', '/img/products/pila-para-electrificador-de-valla-equitacion-ako-9v-130-ah.JPG', 3, 2, 7, 'false', 9, '50');
INSERT INTO `products` VALUES (32, 'Wombat, common', 'Vombatus ursinus', '/img/products/red-para-heno-equitacion-fouganza-negro.JPG', 3, 2, 7, 'false', 9, '50');
INSERT INTO `products` VALUES (33, 'Wombat, common', 'Vombatus ursinus', '/img/products/kit-limpieza-equitacion-fouganza-adulto-azul-turquesa.JPG', 3, 2, 7, 'false', 9, '50');
INSERT INTO `products` VALUES (34, 'Wombat, common', 'Vombatus ursinus', '/img/products/kit-limpieza-equitacion-ninos-rosa.JPG', 3, 2, 7, 'false', 9, '50');
INSERT INTO `products` VALUES (35, 'Wombat, common', 'Vombatus ursinus', '/img/products/champu-equitacion-fouganza-caballo-y-poni-frutos-rojos-500-ml.JPG', 3, 2, 7, 'false', 9, '50');
INSERT INTO `products` VALUES (36, 'Wombat, common', 'Vombatus ursinus', '/img/products/quietex-850g-tranquilizante-natural-formulado-para-relajar-animales-nerviosos.JPG', 4, 2, 7, 'false', 9, '50');
INSERT INTO `products` VALUES (37, 'Wombat, common', 'Vombatus ursinus', '/img/products/desenredante-lustrante-equitacion-fouganza-caballo-y-poni-150-ml.JPG', 4, 2, 7, 'false', 9, '50');
INSERT INTO `products` VALUES (38, 'Wombat, common', 'Vombatus ursinus', '/img/products/aptima-biotic-450g-suplemento-sinergico-de-probioticos-y-prebioticos.JPG', 4, 2, 7, 'false', 9, '50');
INSERT INTO `products` VALUES (39, 'Wombat, common', 'Vombatus ursinus', '/img/products/golosinas-equitacion-caballo-y-poni-fougatreats-alfalfa-1-kg.JPG', 4, 2, 7, 'false', 9, '50');
INSERT INTO `products` VALUES (40, 'Repelente de Insectos', 'Vombatus ursinus', '/img/products/repelente-de-insectos-gel.JPG', 3, 1, 10, 'false', 9, '50');

-- ----------------------------
-- Table structure for shoppingcarts
-- ----------------------------
DROP TABLE IF EXISTS `shoppingcarts`;
CREATE TABLE `shoppingcarts`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `totalPrice` decimal(5, 0) NULL DEFAULT NULL,
  `quantityOfItems` int(100) NULL DEFAULT NULL,
  `idUser` int(100) NULL DEFAULT NULL,
  `idStatus` int(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idStatus`(`idStatus`) USING BTREE,
  INDEX `idUser`(`idUser`) USING BTREE,
  CONSTRAINT `idStatus` FOREIGN KEY (`idStatus`) REFERENCES `status` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `idUser` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shoppingcarts
-- ----------------------------
INSERT INTO `shoppingcarts` VALUES (1, 50, 2, 1, 1);
INSERT INTO `shoppingcarts` VALUES (2, 75, 5, 2, 2);
INSERT INTO `shoppingcarts` VALUES (3, 80, 1, 2, 3);

-- ----------------------------
-- Table structure for sizes
-- ----------------------------
DROP TABLE IF EXISTS `sizes`;
CREATE TABLE `sizes`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sizes
-- ----------------------------
INSERT INTO `sizes` VALUES (1, 'XS');
INSERT INTO `sizes` VALUES (2, 'S');
INSERT INTO `sizes` VALUES (3, 'M');
INSERT INTO `sizes` VALUES (4, 'L');
INSERT INTO `sizes` VALUES (5, 'XL');

-- ----------------------------
-- Table structure for status
-- ----------------------------
DROP TABLE IF EXISTS `status`;
CREATE TABLE `status`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of status
-- ----------------------------
INSERT INTO `status` VALUES (1, 'active');
INSERT INTO `status` VALUES (2, 'finished');
INSERT INTO `status` VALUES (3, 'discarded');

-- ----------------------------
-- Table structure for usercategories
-- ----------------------------
DROP TABLE IF EXISTS `usercategories`;
CREATE TABLE `usercategories`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of usercategories
-- ----------------------------
INSERT INTO `usercategories` VALUES (1, 'user');
INSERT INTO `usercategories` VALUES (2, 'Administrador');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `surname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `terms` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `idUserCategory` int(255) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idusercategory`(`idUserCategory`) USING BTREE,
  CONSTRAINT `idusercategory` FOREIGN KEY (`idUserCategory`) REFERENCES `usercategories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'daramayo', 'Damián', 'Aramayo', 'da.aramayo1990@gmail.com', '/img/users/user_1636070545081Perfil-CV.jpg', '$2a$10$/brxNL2HOgQ2kd7.hPhFWe6XPXAUsDbF33VDQVTmhhgJr1P40YkBa', 'true', 2);
INSERT INTO `users` VALUES (2, 'test1', 'Damián', 'Aramayo', 'damian.aramayo@viandascook.com', '/img/users/user_test11636071872167Perfil.JPG', '$2a$10$GWvvedy09ffQ4N/oxn2zueNnTit/PZNP9.v3CcvaINr71YgpnVtOS', 'true', 1);

SET FOREIGN_KEY_CHECKS = 1;
