DROP DATABASE IF EXISTS wdc;

CREATE DATABASE wdc;
USE wdc;

-- CREATE TABLE `Profile`(
--     `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
--     `user_id` INT UNSIGNED,
--     `date_of_birth` DATE,
--     `phone` INT,
--     `school` VARCHAR(255) ,
--     `degree` VARCHAR(255),
--     `location` VARCHAR(255),
--     `hobbies` TEXT ,
--     `bio` TEXT,
--     `profile_picture` VARCHAR(255),
--     PRIMARY KEY (`id`)
-- );

-- ALTER TABLE
--     `Profile` ADD UNIQUE `profile_user_id_unique`(`user_id`);
-- ALTER TABLE
--     `Profile` ADD UNIQUE `profile_phone_unique`(`phone`);


CREATE TABLE `Event_Participation`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `event_id` INT UNSIGNED NOT NULL,
    `user_id` INT UNSIGNED NOT NULL,
    PRIMARY KEY(`id`),
    UNIQUE KEY `event_participation_user_id_unique`(`user_id`)
);

CREATE TABLE `Users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    -- `profile_id` INT UNSIGNED NOT NULL DEFAULT 0,
    `is_admin` TINYINT(1) NOT NULL DEFAULT 0,
    `date_of_birth` DATE,
    `phone` INT,
    `school` VARCHAR(255) ,
    `degree` VARCHAR(255),
    `location` VARCHAR(255),
    `hobbies` TEXT ,
    `bio` TEXT,
    `profile_picture` VARCHAR(255),
    PRIMARY KEY (`id`)
);

-- ALTER TABLE
--     `Users` ADD UNIQUE `users_email_unique`(`email`);
-- ALTER TABLE
--     `Users` ADD UNIQUE `users_profile_id_unique`(`profile_id`);


CREATE TABLE `Events`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `club_id` INT UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `start_time` DATETIME NOT NULL,
    `end_time` DATETIME NOT NULL,
    `creator_id` INT UNSIGNED NOT NULL,
   PRIMARY KEY (`id`)
);

ALTER TABLE
    `Events` ADD UNIQUE `events_club_id_unique`(`club_id`);
ALTER TABLE
    `Events` ADD UNIQUE `events_creator_id_unique`(`creator_id`);

CREATE TABLE `Club_Updates`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `club_id` INT NOT NULL,
    `creator_id` INT UNSIGNED NOT NULL,
    `text` TEXT NOT NULL,
    `time_created` DATETIME NOT NULL,
    `is_public` TINYINT(1) NOT NULL,
    PRIMARY KEY (`id`)
);

ALTER TABLE
    `Club_Updates` ADD UNIQUE `club_updates_club_id_unique`(`club_id`);
ALTER TABLE
    `Club_Updates` ADD UNIQUE `club_updates_creator_id_unique`(`creator_id`);

CREATE TABLE `Club_Members`(
    `club_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INT UNSIGNED NOT NULL,
    PRIMARY KEY(`club_id`),
    INDEX (`user_id`)
);

CREATE TABLE `Clubs`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `manager_id` INT UNSIGNED NOT NULL,
    PRIMARY KEY(`id`)
);


ALTER TABLE
    `Clubs` ADD UNIQUE `clubs_manager_id_unique`(`manager_id`);

ALTER TABLE
     `Event_Participation` ADD CONSTRAINT `events_id_foreign` FOREIGN KEY(`event_id`) REFERENCES `Events`(`id`);

ALTER TABLE
    `Club_Updates` ADD CONSTRAINT `club_updates_club_id_foreign` FOREIGN KEY(`id`) REFERENCES `Clubs`(`id`);

ALTER TABLE
    `Club_Updates` ADD CONSTRAINT `club_updates_creator_id_foreign` FOREIGN KEY(`creator_id`) REFERENCES `Users`(`id`);

ALTER TABLE
    `Event_Participation` ADD CONSTRAINT `users_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `Users`(`id`);

ALTER TABLE
    `Events` ADD CONSTRAINT `events_club_id_foreign` FOREIGN KEY(`club_id`) REFERENCES `Clubs`(`id`);

ALTER TABLE
    `Events` ADD CONSTRAINT `events_creator_id_foreign` FOREIGN KEY(`creator_id`) REFERENCES `Users`(`id`);

ALTER TABLE
    `Clubs` ADD CONSTRAINT `clubs_manager_id_foreign` FOREIGN KEY(`manager_id`) REFERENCES `Users`(`id`);

ALTER TABLE
    `Club_Members` ADD CONSTRAINT `clubs_member_users_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `Users`(`id`);

ALTER TABLE
    `Club_Members` ADD CONSTRAINT `clubs_id_foreign` FOREIGN KEY(`club_id`) REFERENCES `Clubs`(`id`);
