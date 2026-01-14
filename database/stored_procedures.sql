USE `db_budget_buddy`;
DELIMITER //

CREATE PROCEDURE `create_user`
(
    IN param_id BINARY(16),
    IN param_first_name VARCHAR(50),
    IN param_last_name VARCHAR(50),
    IN param_email VARCHAR(255),
    IN param_password_hash CHAR(60)
)
BEGIN
    INSERT INTO `user`
    (
		`id`,
        `first_name`,
        `last_name`,
        `email`,
        `password_hash`
	)
    VALUES
    (
		param_id,
        param_first_name,
        param_last_name,
        param_email,
        param_password_hash
	);
END//

CREATE PROCEDURE `create_session`
(
    IN param_user_id BINARY(16),
    IN param_token_hash CHAR(64),
    IN param_expires_at DATETIME
)
BEGIN
    INSERT INTO `session`
    (
		`user_id`,
		`token_hash`,
		`expires_at`
	)
    VALUES
    (
        param_token,
		param_user_id,
		param_expires_at
	);
END//


--     --



CREATE PROCEDURE `create_category_group`
(
    IN param_name VARCHAR(50),
    IN param_type ENUM('income','expense'),
    IN param_user_id BINARY(16)
)
BEGIN
    INSERT INTO `category_group`
    (
        `name`,
        `type`,
        `user_id`
    )
    VALUES
    (
        param_name,
        param_type,
        param_user_id
    );
END//



--  -- 

CREATE PROCEDURE `create_category`
(
    IN param_name VARCHAR(50),
    IN param_category_group_id BIGINT UNSIGNED
)
BEGIN
    INSERT INTO `category`
    (
        `name`,
        `category_group_id`
    )
    VALUES
    (
        param_name,
        param_category_group_id
    );
END//

CREATE PROCEDURE `create_income_record`
(
    IN param_amount_received DECIMAL(10,2),
    IN param_year_month DATE,
    IN param_category_id BIGINT UNSIGNED
)
BEGIN
    INSERT INTO `income_record`
    (
        `amount_received`,
        `year_month`,
        `category_id`
    )
    VALUES
    (
        param_amount_received,
        param_year_month,
        param_category_id
    );
END//

--  --

CREATE PROCEDURE `create_expense_record`
(
    IN param_amount_allocated DECIMAL(10,2),
    IN param_amount_spent DECIMAL(10,2),
    IN param_year_month DATE,
    IN param_category_id BIGINT UNSIGNED
)
BEGIN
    INSERT INTO `expense_record`
    (
        `amount_allocated`,
        `amount_spent`,
        `year_month`,
        `category_id`
    )
    VALUES
    (
        param_amount_allocated,
        param_amount_spent,
        param_year_month,
        param_category_id
    );
END//

CREATE PROCEDURE `create_goal`
(
    IN param_name VARCHAR(50),
    IN param_type ENUM('accumulation','reduction'),
    IN param_amount_set DECIMAL(10,2),
    IN param_amount_placed DECIMAL(10,2),
    IN param_date_due DATE,
    IN param_user_id BINARY(16)
)
BEGIN
    INSERT INTO `goal`
    (
        `name`,
        `type`,
        `amount_set`,
        `amount_placed`,
        `date_due`,
        `user_id`
    )
    VALUES
    (
        param_name,
        param_type,
        param_amount_set,
        param_amount_placed,
        param_date_due,
        param_user_id
    );
END//

-- --

CREATE PROCEDURE `create_account`
(
    IN param_name VARCHAR(50),
    IN param_type ENUM('asset','liability'),
    IN param_balance DECIMAL(10,2),
    IN param_user_id BINARY(16)
)
BEGIN
    INSERT INTO `account`
    (
        `name`,
        `type`,
        `balance`,
        `user_id`
    )
    VALUES
    (
        param_name,
        param_type,
        param_balance,
        param_user_id
    );
END//

--  --

CREATE PROCEDURE `create_transaction`
(
    IN param_date DATE,
    IN param_source_account BIGINT UNSIGNED,
    IN param_destination_account BIGINT UNSIGNED,
    IN param_amount DECIMAL(10,2),
    IN param_notes TEXT,
    IN param_user_id BINARY(16)
)
BEGIN
    INSERT INTO `transaction`
    (
        `date`,
        `source_account`,
        `destination_account`,
        `amount`,
        `notes`,
        `user_id`
    )
    VALUES
    (
        param_date,
        param_source_account,
        param_destination_account,
        param_amount,
        param_notes,
        param_user_id
    );
END//

DELIMITER ;

-- REMOVE AND UPDATE --

DELIMITER //

CREATE PROCEDURE update_user(
    IN param_id BINARY(16),
    IN param_first_name VARCHAR(50),
    IN param_last_name VARCHAR(50),
    IN param_email VARCHAR(255),
    IN param_profile_picture_path TEXT,
    IN param_is_active BOOLEAN
)
BEGIN
    UPDATE `user`
    SET
        first_name = p_first_name,
        last_name = p_last_name,
        email = p_email,
        profile_picture_path = p_profile_picture_path,
        is_active = p_is_active
    WHERE id = p_id;
END// 


-- UPDATE--

CREATE PROCEDURE remove_category_group (
    IN param_category_group_id BIGINT UNSIGNED,
    IN param_user_id BINARY(16)
)
BEGIN
    UPDATE category_group
    SET is_remove = TRUE
    WHERE id = p_category_group_id
      AND user_id = p_user_id;
END //


-- -- 

CREATE PROCEDURE sp_remove_category (
    IN p_category_id BIGINT UNSIGNED
)
BEGIN
    UPDATE category
    SET is_remove = TRUE
    WHERE id = p_category_id;
END //

-- ---

CREATE PROCEDURE update_category
(
    IN p_id BIGINT UNSIGNED,
    IN p_name VARCHAR(50),
    IN p_category_group_id BIGINT UNSIGNED
)
BEGIN
    UPDATE `category`
    SET
        `name` = p_name,
        `category_group_id` = p_category_group_id
    WHERE `id` = p_id;
END //


CREATE PROCEDURE update_income_record
(
    IN p_id BIGINT UNSIGNED,
    IN p_amount_received DECIMAL(10,2),
    IN p_year_month DATE,
    IN p_category_id BIGINT UNSIGNED
)
BEGIN
    UPDATE `income_record`
    SET
        `amount_received` = p_amount_received,
        `year_month` = p_year_month,
        `category_id` = p_category_id
    WHERE `id` = p_id;
END //

-- --

CREATE PROCEDURE update_expense_record
(
    IN p_id BIGINT UNSIGNED,
    IN p_amount_allocated DECIMAL(10,2),
    IN p_amount_spent DECIMAL(10,2),
    IN p_year_month DATE,
    IN p_category_id BIGINT UNSIGNED
)
BEGIN
    UPDATE `expense_record`
    SET
        `amount_allocated` = p_amount_allocated,
        `amount_spent` = p_amount_spent,
        `year_month` = p_year_month,
        `category_id` = p_category_id
    WHERE `id` = p_id;
END //

-- --

CREATE PROCEDURE remove_goal (
    IN p_goal_id BIGINT UNSIGNED,
    IN p_user_id BINARY(16)
)
BEGIN
    UPDATE goal
    SET is_remove = TRUE,
        is_active = FALSE,
        status = 'closed'
    WHERE id = p_goal_id
      AND user_id = p_user_id;
END //

-- --

CREATE PROCEDURE remove_account (
    IN p_account_id BIGINT UNSIGNED,
    IN p_user_id BINARY(16)
)
BEGIN
    UPDATE account
    SET is_remove = TRUE
    WHERE id = p_account_id
      AND user_id = p_user_id;
END //

-- --

CREATE PROCEDURE sp_remove_transaction (
    IN p_transaction_id BIGINT UNSIGNED,
    IN p_user_id BINARY(16)
)
BEGIN
    UPDATE transaction
    SET is_remove = TRUE
    WHERE id = p_transaction_id
      AND user_id = p_user_id;
END //
DELIMITER ;

