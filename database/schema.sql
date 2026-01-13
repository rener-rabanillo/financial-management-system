CREATE DATABASE `db_budget_buddy`;
USE `db_budget_buddy`;

CREATE TABLE `user` (
    `id` BINARY(16) PRIMARY KEY,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password_hash` CHAR(60) NOT NULL,
    `profile_picture_path` TEXT DEFAULT NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `is_active` BOOLEAN NOT NULL DEFAULT TRUE,

    CONSTRAINT `uq_email` UNIQUE (`email`),
    INDEX (`email`)
);

CREATE TABLE `category_group` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL,
    `type` ENUM("income", "expense") NOT NULL,
    `is_remove` BOOLEAN NOT NULL DEFAULT FALSE,
    `user_id` BINARY(16) NOT NULL,
    CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
    INDEX (`user_id`)
);

CREATE TABLE `category` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL,
    `category_group_id` BIGINT UNSIGNED NOT NULL,
    CONSTRAINT `fk_category_group` FOREIGN KEY (`category_group_id`) REFERENCES `category_group` (`id`),
    INDEX (`category_group_id`)
);

CREATE TABLE `income_record` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `amount_received` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `year_month` DATE NOT NULL,
    `category_id` BIGINT UNSIGNED NOT NULL,
    CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
    INDEX (`category_id`)
);

CREATE TABLE `expense_record` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `amount_allocated` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `amount_spent` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `year_month` DATE NOT NULL,
    `category_id` BIGINT UNSIGNED NOT NULL,
    CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
    INDEX (`category_id`)
);

CREATE TABLE `goal` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL,
    `type` ENUM("accumulation", "reduction") NOT NULL,
    `status` ENUM("active", "closed") NOT NULL DEFAULT "active",
    `amount_set` DECIMAL(10, 2) NOT NULL,
    `amount_placed` DECIMAL(10, 2) NOT NULL,
    `date_due` DATE NOT NULL,
    `date_accomplished` DATE DEFAULT NULL,
    `user_id` BINARY(16) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT TRUE,
    `is_remove` BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
    INDEX (`user_id`)
);

CREATE TABLE `account` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL,
    `type` ENUM("asset", "liability") NOT NULL,
    `balance` DECIMAL(10, 2) NOT NULL,
    `is_remove` BOOLEAN NOT NULL DEFAULT FALSE,
    `user_id` BINARY(16) NOT NULL,
    CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
    INDEX (`user_id`)
);

CREATE TABLE `transaction` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `date` DATE NOT NULL,
    `source_account` BIGINT UNSIGNED,
    `destination_account` BIGINT UNSIGNED,
    `amount` DECIMAL(10, 2) NOT NULL,
    `notes` TEXT,
    `is_remove` BOOLEAN NOT NULL DEFAULT FALSE,
    `user_id` BINARY(16) NOT NULL,
    CONSTRAINT `fk_source_account` FOREIGN KEY (`source_account`) REFERENCES `account` (`id`) ON DELETE CASCAD SET NULL,
    CONSTRAINT `fk_destination_account` FOREIGN KEY (`destination_account`) REFERENCES `account` (`id`) ON DELETE SET NULL,
    CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
    INDEX (`source_account`, `destination_account`, `user_id`)
);

CREATE TABLE `session` (
	`id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `token_hash` CHAR(64) NOT NULL,
    `expires_at` DATETIME NOT NULL,
    `is_revoked` BOOLEAN NOT NULL DEFAULT FALSE,
    `user_id` BINARY(16) NOT NULL,
    CONSTRAINT `uq_token_hash` UNIQUE (`token_hash`),
    CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
    INDEX (`token_hash`, `user_id`)
);