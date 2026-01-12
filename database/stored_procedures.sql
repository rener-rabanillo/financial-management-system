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

DELIMITER ;