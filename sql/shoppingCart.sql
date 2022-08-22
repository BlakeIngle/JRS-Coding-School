DROP SCHEMA IF EXISTS `surfshop`;

CREATE SCHEMA `surfshop`;

CREATE TABLE `surfshop`.`products` (
    `id` VARCHAR(50) NOT NULL UNIQUE,
    `name` VARCHAR(255) NOT NULL,
    `price` FLOAT NOT NULL,
   
    `category` VARCHAR(255) NOT NULL,
    `brand` VARCHAR(255) NOT NULL,
    `style` VARCHAR(255) NOT NULL,
    `size` VARCHAR(20) NOT NULL,
    `color` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `image` VARCHAR(255) NULL,
    
    PRIMARY KEY (`id`)
);

CREATE TABLE `surfshop`.`users` (
    `id` VARCHAR(50) NOT NULL UNIQUE,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(255),
    `last_name` VARCHAR(255),
    `address1` VARCHAR(255),
    `address2` VARCHAR(255),
    `city` VARCHAR(255),
    `state` VARCHAR(4),
    `zip_code` INT,
    PRIMARY KEY (`id`)
);

CREATE TABLE `surfshop`.`transactions` (
    `id` VARCHAR(50) NOT NULL UNIQUE,
    `customer_id` VARCHAR(50) NOT NULL,
    `date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `total` FLOAT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`customer_id`) REFERENCES `users`(`id`)
);

CREATE TABLE `surfshop`.`purchased_items` (
    `id` VARCHAR(50) NOT NULL UNIQUE,
    `product_id` VARCHAR(50) NOT NULL,
    `quantity` INT NOT NULL,
    `transaction_id` VARCHAR(50) NOT NULL,
    `total` FLOAT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`product_id`) REFERENCES `products`(`id`),
    FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`)
);

DROP TABLE IF EXISTS `surfshop`.`cart_items`;

CREATE TABLE `surfshop`.`cart_items` (
    `id` INT NOT NULL UNIQUE AUTO_INCREMENT,
    `customer_id` VARCHAR(50) NOT NULL,
    `product_id` VARCHAR(50) NOT NULL,
    `quantity` INT NOT NULL,
    `total` FLOAT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`product_id`) REFERENCES `products`(`id`),
    FOREIGN KEY (`customer_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
);


INSERT INTO
    `surfshop`.`products` (
        `id`,
        `name`,
        `price`,
        `category`,
        `brand`,
        `style`,
        `size`,
        `color`,
        `description`,
        `image`
    )
VALUES 
-- Boards seperated by company
    (uuid(), 'Greedy Beaver', 860.00, 'board', 'FireWire', 'board', 'short', 'wood', 'The Greedy Beaver has a real shortboard feel with a compressed longboard outline, a true crossover board with midlength retro glide and shortboard maneuverability.', 'https://cdn.shopify.com/s/files/1/0399/4923/8317/products/greedy-beaver-758250_720x.jpg?v=1645640426'),
    (uuid(), 'Velvet Hour - Thunderbolt Silver', 1225.00, 'board', 'FireWire', 'long board', 'long', 'lavendar', 'This log is a classic Australian style involvement log design made popular in the late 60s in Australia before the transition era.', 'https://cdn.shopify.com/s/files/1/0399/4923/8317/products/VELVET_HR_PINK_720x.png?v=1644520813'),
    (uuid(), 'Diamond Drive - Thunderbolt Red', 1250.00, 'board', 'FireWire', 'long board', 'long', 'white and red', 'The Diamond Drive has a three-stage rocker developed for everything from overhead, open faced waves to knee high, lined up lines.', 'https://cdn.shopify.com/s/files/1/0399/4923/8317/products/diamond-drive-thunderbolt-red-427755_900x.jpg?v=1645640429'),
    (uuid(), 'Sweet Potato', 860.00, 'board', 'FireWire', 'board', 'short ', 'white', 'Keep it in your trunk so that you can always surf it in the junk, because from buttery floaters to no-paddle takeoffs, our new Sweet Potato is my favorite small wave surfboard. ', 'https://cdn.shopify.com/s/files/1/0399/4923/8317/products/SWEET_POTATO_900x.png?v=1646168377'),
    
    (uuid(), 'ODYSEA J.O.B. PRO - FIVE FIN', 424.99, 'board', 'Catch Surf', 'soft top', 'short', 'pink', 'Designed by the undisputed "King of Softboards", Jamie OBrien, the JOB PROs are designed and built to take soft surfboard performance to new levels!', 'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY52PRO-5-JOB_HP20_TBreshoot_2048x2048.jpg?v=1588363954'),
    (uuid(), 'LOG x Evan Rossell PRO', 474.99, 'board', 'Catch Surf', 'soft top', 'long', 'white', 'The Evan Rossell models feature custom metallic gold deck stamps and collectors sticker sheet.', 'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY80L-ER_WH21_TB_1024x1024.jpg?v=1615583531'),
    (uuid(), 'Beater Original 48 - Twin Fin', 239.99, 'board', 'Catch Surf', 'soft top', 'short', 'grey and pink', 'Surf it with or without fins, bodyboard or skim it; do whatever the heck you want. The Beater will turn an average beach day into an Epic Tale of Radness!', 'https://cdn.shopify.com/s/files/1/1154/7998/products/BO48T_CG22T_TBcopy_1024x1024.jpg?v=1651876406'),
    (uuid(), 'Heritage Retro Fish - Twin Fin', 269.99, 'board', 'Catch Surf', 'soft top', 'short', 'black and teal', 'The RETRO FISH is a classic keel-finned, swallow tail, beak-nosed fish shape with flatter rocker for max speed and flow down the line.', 'https://cdn.shopify.com/s/files/1/1154/7998/products/CS56RF-T_TQ20_TB_2048x2048_fix_1024x1024.jpg?v=1590096970'),
    
    (uuid(), 'Fever', 450.99, 'board', 'Channel Island', 'short board', 'short', 'white', 'The Fever has its roots in Al Merricks trusted and proven high-performance shortboard designs.', 'https://cdn.shopify.com/s/files/1/1442/7982/products/Pat-G-Fever-Deck.png?v=1619470425'),
    (uuid(), 'The Proton', 565.00, 'board', 'Channel Island', 'short board', 'short', 'white', 'Original and truly unique from any other board in our line, this board has continuous rocker throughout.', 'https://cdn.shopify.com/s/files/1/1442/7982/products/proton_deck.png?v=1619468531'),
    (uuid(), 'Hoglet', 775.00, 'board', 'Channel Island', 'short board', 'short', 'white', 'With a wide nose and generous rocker throughout, the Hoglet is a fun wave-catcher that can turn on a dime.', 'https://cdn.shopify.com/s/files/1/1442/7982/products/hoglet_deck.png?v=1619468891'),
    (uuid(), 'Fish Beard', 775.00, 'board', 'Channel Island', 'short board', 'short', 'white', 'The FishBeard is pure business in the front and all party in the back. Get forward on this user-friendly board and drive from the center and you will have all the speed and flow you always desired.', 'https://cdn.shopify.com/s/files/1/1442/7982/products/FishBeard_Web_Top.png?v=1619470661'),
    
    (uuid(), 'eGG', 1005.00, 'board', 'Rusty', 'long board', 'long', 'orange', 'This board is built for days when you want to catch more waves and have more fun.', 'https://cdn.shopify.com/s/files/1/0280/0235/3239/products/Egg_Orange_Top_2048x.jpg?v=1653522278'),
    (uuid(), 'What', 765.00, 'board', 'Rusty', 'short board', 'short', 'white', 'It will perform best in shoulder high to well overhead in better conditions with waves that have more power behind them.', 'https://cdn.shopify.com/s/files/1/0280/0235/3239/products/what-top_03a2b77c-f2e4-4e47-83b7-54a7d0a28c3d_2048x.jpg?v=1648664678'),
    (uuid(), 'Mini Tanker', 820.00, 'board', 'Rusty', 'long board', 'long', 'white', 'As the name implies, the Mini Tanker is a shorter version of the longboard. Its an easy to manage, shorter longboard for lighter surfers. Also a good go-to, user friendly design for inexperienced surfers.', 'https://cdn.shopify.com/s/files/1/0280/0235/3239/products/mini_tanker_front__64079.1452035058.1280.1280__45820_2048x.png?v=1590177100'),
    (uuid(), 'The Keg', 765.00, 'board', 'Rusty', 'short board', 'short', 'white', 'Built for conditions all over the world, from point breaks, beachies, punchy slabs and everything in between.', 'https://cdn.shopify.com/s/files/1/0280/0235/3239/products/keg-top_07683c77-26cc-498a-b946-f5cc45322374_2048x.jpg?v=1648508964'),

    
    
    -- accessories
    (uuid(), 'Slater Designs - Leash', 30.00, 'accessories', 'FireWire', 'leash', '6ft', 'black', 'The Slater Designs/Revolwe Eco-Leash incorporates a number of unique features that have dramatically reduced its carbon footprint in comparison to other leashes on the market.', 'https://cdn.shopify.com/s/files/1/0399/4923/8317/products/slater-designs-leash-949539_720x.jpg?v=1645640485'),
    (uuid(), 'Pro-Lite Freesurf Leashes - Knee', 40.00, 'accessories', 'FireWire', ' leash', '10ft', 'black', 'Pro-Lite Freesurf series surfboard leashes are designed for small, medium to overhead waves. With a 7mm cord thickness, this leash is a step up from our comp leash for when the waves start to pack a little more punch.', 'https://cdn.shopify.com/s/files/1/0399/4923/8317/products/pro-lite-freesurf-leashes-knee-992938_720x.jpg?v=1645640469'),
    (uuid(), 'FCS All Around Essential Leash', 40.00, 'accessories', 'FCS', 'leash', '6ft', 'navy', 'The FCS essential series leash has been streamlined into a light, durable and super comfortable leash that is built to handle all conditions.', 'https://cdn.shopify.com/s/files/1/0002/9596/0637/products/FCS_ESSENTIAL_LEASHES_NAVYORANGE_c75898ab-92ba-42e2-8c42-0167965f1e16_1200x.jpg?v=1627521934'),
    (uuid(), 'FCS Protect Big Wave', 50.00, 'accessories', 'FCS', 'leash', '8ft', 'black', 'For protection against the strength of big waves. The protect series leashes have all the bells & whistles of the essential series - with added strength.', 'https://cdn.shopify.com/s/files/1/0002/9596/0637/products/FCS_PRROTECT_LEASH_BLACK_1200x.jpg?v=1612931382'),

-- fins
    (uuid(), 'FCS II Carver Neo Glass Eco Tri Fins', 85.00, 'accessories', 'FCS', 'fins', 'medium', 'green', 'The Carver template in Neo Glass Eco offers powerful, drawn-out turns and excels on open face waves.', 'https://cdn.shopify.com/s/files/1/0002/9596/0637/products/FCSII_CARVER_ECONEO_TRI_1200x.jpg?v=1642576688'),
    (uuid(), 'FCS II Accelerator PC Tri Fins', 105.00, 'accessories', 'FCS', 'fins', 'small', 'black', 'Speed, flow and response with added control. Excels in critical conditions.', 'https://cdn.shopify.com/s/files/1/0002/9596/0637/products/FCSII_ACCELERATOR_2019_PC_TRI-ML_1200x.jpg?v=1580339639'),
    (uuid(), 'FCS II Matt Biolos Tri Fins', 130.00, 'accessories', 'FCS', 'fins', 'medium', 'black', 'Designed by revered shaper Matt "Mayhem" Biolos. Same proven template with a new look.', 'https://cdn.shopify.com/s/files/1/0002/9596/0637/products/FCSII_MB_MEDIUM_2021_TRI_1200x.jpg?v=1614302254'),
    (uuid(), 'FCS II Timber Longboard Fin', 190.00, 'accessories', 'FCS', 'fins', 'large', 'wood', 'Handcrafted in Australia through a collaboration with Wood+Water. Made from locally sourced timber.', 'https://cdn.shopify.com/s/files/1/0002/9596/0637/products/FCS_W_W_LB_SpottedGum_1200x.jpg?v=1637194384'),

-- wax
    (uuid(), 'Original Six Pack - Cold/Cool', 15.49, 'accessories', 'Sticky Bumps', 'wax', 'six pack', 'blue', 'Long lasting and easy to apply. Optimal for water temps 69°F-20°C and below.', 'https://cdn11.bigcommerce.com/s-wsye173qvw/images/stencil/640w/products/453/1097/coolcold3-22__78671.1648234183.jpg?c=2'),
    (uuid(), 'Original Six Pack - Warm', 15.49, 'accessories', 'Sticky Bumps', 'wax', 'six pack', 'orange', 'Long lasting and easy to apply. Optimal for water temps 64°F-74°F.', 'https://cdn11.bigcommerce.com/s-wsye173qvw/images/stencil/640w/products/341/1115/Warm3-22__80478.1648248197.jpg?c=2'),
    (uuid(), 'Original Six Pack - Tropical', 15.49, 'accessories', 'Sticky Bumps', 'wax', 'six pack', 'yellow', 'Long lasting and easy to apply. Optimal for water temps from 75°F and above.', 'https://cdn11.bigcommerce.com/s-wsye173qvw/images/stencil/640w/products/342/1114/tropical3-22__79249.1648247959.jpg?c=2'),

-- Apparel
    (uuid(), 'PSYCHO ONE 4/3MM BACK ZIP FULL WETSUIT', 399.95, 'wetsuits', 'Oneil', 'full suit', 'adult', 'black', 'The Unparalleled Premium in Lightweight Flexibility.', 'https://cdn.shopify.com/s/files/1/2034/7683/products/4965-a00-f_1080x.jpg?v=1581484230'),
    (uuid(), 'HYPERFREAK 4/3MM COMP ZIPLESS FULL WETSUIT', 319.95, 'wetsuits', 'Oneil', 'full suit', 'adult', 'black', 'This advanced technology allows you preform at the highest level with materials so comfortable and light, you would swear you were surfing naked.', 'https://cdn.shopify.com/s/files/1/2034/7683/products/4971-a00-fromt_1080x.jpg?v=1581484242'),
    (uuid(), 'REACTOR-2 2MM BACK ZIP S/S SPRING WETSUIT', 104.95, 'wetsuits', 'Oneil', 'spring suit', 'adult', 'blue', 'The Reactor-2 is engineered for performance in a value driven package. A perfect combination of stretch and durability.', 'https://cdn.shopify.com/s/files/1/2034/7683/products/5041_EJ7_F_WEB_860x.jpg?v=1581484286'),
    (uuid(), 'YOUTH EPIC 4/3MM BACK ZIP FULL WETSUIT', 189.95, 'wetsuits', 'Oneil', 'full suit', 'youth', 'blue', 'The Epic has many of the same great features as our high-end wetsuits, including 100% UltraFlex neoprene, double seal neck closure, LSD (lumbar seamless design) and re-engineered covert blackout zip.', 'https://cdn.shopify.com/s/files/1/2034/7683/products/4216-FZ9-F_1080x.jpg?v=1600130952');



;

INSERT INTO `surfshop`.`users` (
    `id`,
    `email`,
    `password`,
    `first_name`,
    `last_name`,
    `address1`,
    `address2`,
    `city`,
    `state` ,
    `zip_code`
    
)

VALUES 
(uuid(), 'surfer1@gmail.com', 'password', 'Brian', 'Ferri', '603 By the Bridge Lane', 'apartment 1', 'Mount Pleasant', 'SC', 29464),
(uuid(), 'surfer2@gmail.com', 'password', 'Tommy', 'Zwick', '602 By the Bridge Lane', 'apartment 3', 'Mount Pleasant', 'SC', 29464);

DROP SCHEMA IF EXISTS `surfshop`;

CREATE SCHEMA `surfshop`;

CREATE TABLE `surfshop`.`products` (
    `id` VARCHAR(50) NOT NULL UNIQUE,
    `name` VARCHAR(255) NOT NULL,
    `price` FLOAT NOT NULL,
   
    `category` VARCHAR(255) NOT NULL,
    `brand` VARCHAR(255) NOT NULL,
    `style` VARCHAR(255) NOT NULL,
    `size` VARCHAR(20) NOT NULL,
    `color` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) DEFAULT NULL,
    `image` VARCHAR(255) NULL,
    
    PRIMARY KEY (`id`)
);

CREATE TABLE `surfshop`.`users` (
    `id` VARCHAR(50) NOT NULL UNIQUE,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(255),
    `last_name` VARCHAR(255),
    `address1` VARCHAR(255),
    `address2` VARCHAR(255),
    `city` VARCHAR(255),
    `state` VARCHAR(4),
    `zip_code` INT,
    PRIMARY KEY (`id`)
);

CREATE TABLE `surfshop`.`transactions` (
    `id` VARCHAR(50) NOT NULL UNIQUE,
    `customer_id` VARCHAR(50) NOT NULL,
    `date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `total` FLOAT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`customer_id`) REFERENCES `users`(`id`)
);

CREATE TABLE `surfshop`.`purchased_items` (
    `id` VARCHAR(50) NOT NULL UNIQUE,
    `product_id` VARCHAR(50) NOT NULL,
    `quantity` INT NOT NULL,
    `transaction_id` VARCHAR(50) NOT NULL,
    `total` FLOAT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`product_id`) REFERENCES `products`(`id`),
    FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`)
);

DROP TABLE IF EXISTS `surfshop`.`cart_items`;

CREATE TABLE `surfshop`.`cart_items` (
    `id` INT NOT NULL UNIQUE AUTO_INCREMENT,
    `customer_id` VARCHAR(50) NOT NULL,
    `product_id` VARCHAR(50) NOT NULL,
    `quantity` INT NOT NULL,
    `total` FLOAT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`product_id`) REFERENCES `products`(`id`),
    FOREIGN KEY (`customer_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
);


INSERT INTO
    `surfshop`.`products` (
        `id`,
        `name`,
        `price`,
        `category`,
        `brand`,
        `style`,
        `size`,
        `color`,
        `description`,
        `image`
    )
VALUES 
-- Boards seperated by company
    ('f140fd24-1fe3-11ed-b684-3f4bbcccc888', 'Greedy Beaver', 860.00, 'board', 'FireWire', 'board', 'short', 'wood', 'The Greedy Beaver has a real shortboard feel with a compressed longboard outline, a true crossover board with midlength retro glide and shortboard maneuverability.', 'https://cdn.shopify.com/s/files/1/0399/4923/8317/products/greedy-beaver-758250_720x.jpg?v=1645640426'),
    ('f140fea0-1fe3-11ed-b684-3f4bbcccc888', 'Velvet Hour - Thunderbolt Silver', 1225.00, 'board', 'FireWire', 'long board', 'long', 'lavendar', 'This log is a classic Australian style involvement log design made popular in the late 60s in Australia before the transition era.', 'https://cdn.shopify.com/s/files/1/0399/4923/8317/products/VELVET_HR_PINK_720x.png?v=1644520813'),
    (uuid(), 'Diamond Drive - Thunderbolt Red', 1250.00, 'board', 'FireWire', 'long board', 'long', 'white and red', 'The Diamond Drive has a three-stage rocker developed for everything from overhead, open faced waves to knee high, lined up lines.', 'https://cdn.shopify.com/s/files/1/0399/4923/8317/products/diamond-drive-thunderbolt-red-427755_900x.jpg?v=1645640429'),
    (uuid(), 'Sweet Potato', 860.00, 'board', 'FireWire', 'board', 'short ', 'white', 'Keep it in your trunk so that you can always surf it in the junk, because from buttery floaters to no-paddle takeoffs, our new Sweet Potato is my favorite small wave surfboard. ', 'https://cdn.shopify.com/s/files/1/0399/4923/8317/products/SWEET_POTATO_900x.png?v=1646168377'),
    
    (uuid(), 'ODYSEA J.O.B. PRO - FIVE FIN', 424.99, 'board', 'Catch Surf', 'soft top', 'short', 'pink', 'Designed by the undisputed "King of Softboards", Jamie OBrien, the JOB PROs are designed and built to take soft surfboard performance to new levels!', 'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY52PRO-5-JOB_HP20_TBreshoot_2048x2048.jpg?v=1588363954'),
    (uuid(), 'LOG x Evan Rossell PRO', 474.99, 'board', 'Catch Surf', 'soft top', 'long', 'white', 'The Evan Rossell models feature custom metallic gold deck stamps and collectors sticker sheet.', 'https://cdn.shopify.com/s/files/1/1154/7998/products/ODY80L-ER_WH21_TB_1024x1024.jpg?v=1615583531'),
    (uuid(), 'Beater Original 48 - Twin Fin', 239.99, 'board', 'Catch Surf', 'soft top', 'short', 'grey and pink', 'Surf it with or without fins, bodyboard or skim it; do whatever the heck you want. The Beater will turn an average beach day into an Epic Tale of Radness!', 'https://cdn.shopify.com/s/files/1/1154/7998/products/BO48T_CG22T_TBcopy_1024x1024.jpg?v=1651876406'),
    (uuid(), 'Heritage Retro Fish - Twin Fin', 269.99, 'board', 'Catch Surf', 'soft top', 'short', 'black and teal', 'The RETRO FISH is a classic keel-finned, swallow tail, beak-nosed fish shape with flatter rocker for max speed and flow down the line.', 'https://cdn.shopify.com/s/files/1/1154/7998/products/CS56RF-T_TQ20_TB_2048x2048_fix_1024x1024.jpg?v=1590096970'),
    
    (uuid(), 'Fever', 450.99, 'board', 'Channel Island', 'short board', 'short', 'white', 'The Fever has its roots in Al Merricks trusted and proven high-performance shortboard designs.', 'https://cdn.shopify.com/s/files/1/1442/7982/products/Pat-G-Fever-Deck.png?v=1619470425'),
    (uuid(), 'The Proton', 565.00, 'board', 'Channel Island', 'short board', 'short', 'white', 'Original and truly unique from any other board in our line, this board has continuous rocker throughout.', 'https://cdn.shopify.com/s/files/1/1442/7982/products/proton_deck.png?v=1619468531'),
    (uuid(), 'Hoglet', 775.00, 'board', 'Channel Island', 'short board', 'short', 'white', 'With a wide nose and generous rocker throughout, the Hoglet is a fun wave-catcher that can turn on a dime.', 'https://cdn.shopify.com/s/files/1/1442/7982/products/hoglet_deck.png?v=1619468891'),
    (uuid(), 'Fish Beard', 775.00, 'board', 'Channel Island', 'short board', 'short', 'white', 'The FishBeard is pure business in the front and all party in the back. Get forward on this user-friendly board and drive from the center and you will have all the speed and flow you always desired.', 'https://cdn.shopify.com/s/files/1/1442/7982/products/FishBeard_Web_Top.png?v=1619470661'),
    
    (uuid(), 'eGG', 1005.00, 'board', 'Rusty', 'long board', 'long', 'orange', 'This board is built for days when you want to catch more waves and have more fun.', 'https://cdn.shopify.com/s/files/1/0280/0235/3239/products/Egg_Orange_Top_2048x.jpg?v=1653522278'),
    (uuid(), 'What', 765.00, 'board', 'Rusty', 'short board', 'short', 'white', 'It will perform best in shoulder high to well overhead in better conditions with waves that have more power behind them.', 'https://cdn.shopify.com/s/files/1/0280/0235/3239/products/what-top_03a2b77c-f2e4-4e47-83b7-54a7d0a28c3d_2048x.jpg?v=1648664678'),
    (uuid(), 'Mini Tanker', 820.00, 'board', 'Rusty', 'long board', 'long', 'white', 'As the name implies, the Mini Tanker is a shorter version of the longboard. Its an easy to manage, shorter longboard for lighter surfers. Also a good go-to, user friendly design for inexperienced surfers.', 'https://cdn.shopify.com/s/files/1/0280/0235/3239/products/mini_tanker_front__64079.1452035058.1280.1280__45820_2048x.png?v=1590177100'),
    (uuid(), 'The Keg', 765.00, 'board', 'Rusty', 'short board', 'short', 'white', 'Built for conditions all over the world, from point breaks, beachies, punchy slabs and everything in between.', 'https://cdn.shopify.com/s/files/1/0280/0235/3239/products/keg-top_07683c77-26cc-498a-b946-f5cc45322374_2048x.jpg?v=1648508964'),

    
    
    -- accessories
    (uuid(), 'Slater Designs - Leash', 30.00, 'accessories', 'FireWire', 'leash', '6ft', 'black', 'The Slater Designs/Revolwe Eco-Leash incorporates a number of unique features that have dramatically reduced its carbon footprint in comparison to other leashes on the market.', 'https://cdn.shopify.com/s/files/1/0399/4923/8317/products/slater-designs-leash-949539_720x.jpg?v=1645640485'),
    (uuid(), 'Pro-Lite Freesurf Leashes - Knee', 40.00, 'accessories', 'FireWire', ' leash', '10ft', 'black', 'Pro-Lite Freesurf series surfboard leashes are designed for small, medium to overhead waves. With a 7mm cord thickness, this leash is a step up from our comp leash for when the waves start to pack a little more punch.', 'https://cdn.shopify.com/s/files/1/0399/4923/8317/products/pro-lite-freesurf-leashes-knee-992938_720x.jpg?v=1645640469'),
    (uuid(), 'FCS All Around Essential Leash', 40.00, 'accessories', 'FCS', 'leash', '6ft', 'navy', 'The FCS essential series leash has been streamlined into a light, durable and super comfortable leash that is built to handle all conditions.', 'https://cdn.shopify.com/s/files/1/0002/9596/0637/products/FCS_ESSENTIAL_LEASHES_NAVYORANGE_c75898ab-92ba-42e2-8c42-0167965f1e16_1200x.jpg?v=1627521934'),
    (uuid(), 'FCS Protect Big Wave', 50.00, 'accessories', 'FCS', 'leash', '8ft', 'black', 'For protection against the strength of big waves. The protect series leashes have all the bells & whistles of the essential series - with added strength.', 'https://cdn.shopify.com/s/files/1/0002/9596/0637/products/FCS_PRROTECT_LEASH_BLACK_1200x.jpg?v=1612931382'),

-- fins
    (uuid(), 'FCS II Carver Neo Glass Eco Tri Fins', 85.00, 'accessories', 'FCS', 'fins', 'medium', 'green', 'The Carver template in Neo Glass Eco offers powerful, drawn-out turns and excels on open face waves.', 'https://cdn.shopify.com/s/files/1/0002/9596/0637/products/FCSII_CARVER_ECONEO_TRI_1200x.jpg?v=1642576688'),
    (uuid(), 'FCS II Accelerator PC Tri Fins', 105.00, 'accessories', 'FCS', 'fins', 'small', 'black', 'Speed, flow and response with added control. Excels in critical conditions.', 'https://cdn.shopify.com/s/files/1/0002/9596/0637/products/FCSII_ACCELERATOR_2019_PC_TRI-ML_1200x.jpg?v=1580339639'),
    (uuid(), 'FCS II Matt Biolos Tri Fins', 130.00, 'accessories', 'FCS', 'fins', 'medium', 'black', 'Designed by revered shaper Matt "Mayhem" Biolos. Same proven template with a new look.', 'https://cdn.shopify.com/s/files/1/0002/9596/0637/products/FCSII_MB_MEDIUM_2021_TRI_1200x.jpg?v=1614302254'),
    (uuid(), 'FCS II Timber Longboard Fin', 190.00, 'accessories', 'FCS', 'fins', 'large', 'wood', 'Handcrafted in Australia through a collaboration with Wood+Water. Made from locally sourced timber.', 'https://cdn.shopify.com/s/files/1/0002/9596/0637/products/FCS_W_W_LB_SpottedGum_1200x.jpg?v=1637194384'),

-- wax
    (uuid(), 'Original Six Pack - Cold/Cool', 15.49, 'accessories', 'Sticky Bumps', 'wax', 'six pack', 'blue', 'Long lasting and easy to apply. Optimal for water temps 69°F-20°C and below.', 'https://cdn11.bigcommerce.com/s-wsye173qvw/images/stencil/640w/products/453/1097/coolcold3-22__78671.1648234183.jpg?c=2'),
    (uuid(), 'Original Six Pack - Warm', 15.49, 'accessories', 'Sticky Bumps', 'wax', 'six pack', 'orange', 'Long lasting and easy to apply. Optimal for water temps 64°F-74°F.', 'https://cdn11.bigcommerce.com/s-wsye173qvw/images/stencil/640w/products/341/1115/Warm3-22__80478.1648248197.jpg?c=2'),
    (uuid(), 'Original Six Pack - Tropical', 15.49, 'accessories', 'Sticky Bumps', 'wax', 'six pack', 'yellow', 'Long lasting and easy to apply. Optimal for water temps from 75°F and above.', 'https://cdn11.bigcommerce.com/s-wsye173qvw/images/stencil/640w/products/342/1114/tropical3-22__79249.1648247959.jpg?c=2'),

-- Apparel
    (uuid(), 'PSYCHO ONE 4/3MM BACK ZIP FULL WETSUIT', 399.95, 'wetsuits', 'Oneil', 'full suit', 'adult', 'black', 'The Unparalleled Premium in Lightweight Flexibility.', 'https://cdn.shopify.com/s/files/1/2034/7683/products/4965-a00-f_1080x.jpg?v=1581484230'),
    (uuid(), 'HYPERFREAK 4/3MM COMP ZIPLESS FULL WETSUIT', 319.95, 'wetsuits', 'Oneil', 'full suit', 'adult', 'black', 'This advanced technology allows you preform at the highest level with materials so comfortable and light, you would swear you were surfing naked.', 'https://cdn.shopify.com/s/files/1/2034/7683/products/4971-a00-fromt_1080x.jpg?v=1581484242'),
    (uuid(), 'REACTOR-2 2MM BACK ZIP S/S SPRING WETSUIT', 104.95, 'wetsuits', 'Oneil', 'spring suit', 'adult', 'blue', 'The Reactor-2 is engineered for performance in a value driven package. A perfect combination of stretch and durability.', 'https://cdn.shopify.com/s/files/1/2034/7683/products/5041_EJ7_F_WEB_860x.jpg?v=1581484286'),
    (uuid(), 'YOUTH EPIC 4/3MM BACK ZIP FULL WETSUIT', 189.95, 'wetsuits', 'Oneil', 'full suit', 'youth', 'blue', 'The Epic has many of the same great features as our high-end wetsuits, including 100% UltraFlex neoprene, double seal neck closure, LSD (lumbar seamless design) and re-engineered covert blackout zip.', 'https://cdn.shopify.com/s/files/1/2034/7683/products/4216-FZ9-F_1080x.jpg?v=1600130952');



;

INSERT INTO `surfshop`.`users` (
    `id`,
    `email`,
    `password`,
    `first_name`,
    `last_name`,
    `address1`,
    `address2`,
    `city`,
    `state` ,
    `zip_code`
    
)

VALUES 
('f1418794-1fe3-11ed-b684-3f4bbcccc888', 'surfer1@gmail.com', 'password', 'Brian', 'Ferri', '603 By the Bridge Lane', 'apartment 1', 'Mount Pleasant', 'SC', 29464),
('f141abc0-1fe3-11ed-b684-3f4bbcccc888', 'surfer2@gmail.com', 'password', 'Tommy', 'Zwick', '602 By the Bridge Lane', 'apartment 3', 'Mount Pleasant', 'SC', 29464);

INSERT INTO `surfshop`.`cart_items` (`customer_id`, `product_id`, `quantity`, `total`) 
VALUES ('f1418794-1fe3-11ed-b684-3f4bbcccc888', 'f140fd24-1fe3-11ed-b684-3f4bbcccc888', '1', '10'),
('f1418794-1fe3-11ed-b684-3f4bbcccc888', 'f140fea0-1fe3-11ed-b684-3f4bbcccc888', '1', '20'),
('f141abc0-1fe3-11ed-b684-3f4bbcccc888', 'f140fd24-1fe3-11ed-b684-3f4bbcccc888', '2', '20'),
('f141abc0-1fe3-11ed-b684-3f4bbcccc888', 'f140fea0-1fe3-11ed-b684-3f4bbcccc888', '2', '40');



-- select items from a list:
-- pick what data you want
SELECT products.id, cart_items.id as foo, name, price, category, image
-- pick a table
FROM surfshop.cart_items
-- join the other table
INNER JOIN surfshop.products
    -- table1.pk = table2.fk
	ON cart_items.product_id = products.id
-- filter somehow
WHERE
	customer_id = 'f1418794-1fe3-11ed-b684-3f4bbcccc888'
;



SELECT *
FROM table1
INNER JOIN table2
    ON table1.fk = table2.id
INNER JOIN table3
    ON table2.fk = table3.id
WHERE
    table1.id = ?;
    