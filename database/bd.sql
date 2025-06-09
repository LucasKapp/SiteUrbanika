-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS urbanika;
USE urbanika;

-- Criar a tabela usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    documento VARCHAR(18) NOT NULL UNIQUE, -- Aceita CPF ou CNPJ
    senha_hash VARCHAR(255) NOT NULL,
    codigo_recuperacao VARCHAR(255),        -- Para recuperação de senha
    codigo_expira_em DATETIME,              -- Validade do token
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
