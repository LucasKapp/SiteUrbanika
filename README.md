# Urbanika Site

Este projeto consiste no site institucional da Urbanika, apresentando informações sobre seus serviços, como seguros e imóveis, além de oferecer formulários de contato e solicitação de orçamento.

## Visão Geral do Projeto

O Urbanika Site é uma aplicação web desenvolvida para servir como a presença online da Urbanika. Ele permite que os visitantes explorem os serviços oferecidos pela empresa, entrem em contato através de um formulário e solicitem orçamentos de forma conveniente.

## Tecnologias Utilizadas

*   **Frontend:**
    *   HTML5
    *   CSS3
    *   JavaScript

*   **Backend (para processamento de formulários):**
    *   PHP
    *   PHPMailer (para envio de e-mails)

## Estrutura de Pastas

*   `css/`: Contém os arquivos de estilo CSS.
*   `js/`: Contém os arquivos JavaScript para interatividade.
*   `img/`: Armazena as imagens utilizadas no site.
*   `PHPMailer/`: Biblioteca PHPMailer para funcionalidade de e-mail.
*   `database/`: (Possivelmente para futuros bancos de dados ou scripts relacionados, atualmente vazio ou não especificado em detalhes).
*   `telas-de-cadastro/`: (Pode conter telas ou lógicas relacionadas a processos de cadastro, se aplicável).
*   `projeto-urbanika/`: (Pode ser um módulo ou uma versão anterior/sub-projeto da Urbanika).
*   `casas/`: (Possivelmente mais conteúdo relacionado a imóveis ou detalhes de casas).
*   `contato.html`: Página de contato com formulário.
*   `index.html`: Página inicial do site.
*   `orcamento.html`: Página para solicitação de orçamento.
*   `termos.html`: Página de termos e condições.
*   `seguros.html`: Página dedicada a informações sobre seguros.
*   `casas.html`: Página dedicada a informações sobre imóveis/casas.
*   `enviar.php`: Script PHP para processar o envio de formulários (e-mail).
*   `favicon.svg`: Ícone do site.

## Como Rodar o Projeto Localmente

Para visualizar e testar o site localmente, siga os passos abaixo:

### Pré-requisitos

*   Um servidor web com suporte a PHP (ex: Apache, Nginx com PHP-FPM).
*   PHP 7.x ou superior instalado.

### Configuração

1.  **Clone ou baixe o repositório:**
    ```bash
    git clone [(https://github.com/LucasKapp/SiteUrbanika)]
    # ou baixe o ZIP e descompacte
    ```
2.  **Mova os arquivos para a pasta do seu servidor web:**
    Coloque todos os arquivos e pastas deste projeto no diretório raiz do seu servidor web (ex: `htdocs` para Apache, `www` para Nginx).
3.  **Configuração do `enviar.php` (Importante para formulários):**
    Abra o arquivo `enviar.php`. Você precisará configurar as credenciais do seu servidor SMTP para que o PHPMailer possa enviar e-mails corretamente. Preencha as informações necessárias como host, username, password, e o e-mail de destino.

    ```php
    // ... (parte do código enviar.php)
    // Exemplo de configuração, você precisará preencher com seus dados:
    // $mail->Host       = 'smtp.example.com'; // Seu servidor SMTP
    // $mail->Username   = 'seu_email@example.com'; // Seu e-mail
    // $mail->Password   = 'sua_senha'; // Sua senha
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Use ENCRYPTION_SMTPS para SSL/TLS
    // $mail->Port       = 587; // Porta SMTP (ex: 587 para TLS, 465 para SSL)
    // $mail->setFrom('seu_email@example.com', 'Nome do Remetente');
    // $mail->addAddress('email_de_destino@example.com', 'Nome do Destinatário');

### Execução

1.  Inicie o seu servidor web (Apache, Nginx, etc.).
2.  Abra seu navegador e acesse:
    ```
    http://localhost/urbanika-site/index.html
    # ou a URL correspondente ao seu diretório raiz do servidor
    ```

## Funcionalidades Principais

*   **Navegação Rápida:** Páginas dedicadas a "Início", "Contato", "Orçamento", "Termos", "Seguros" e "Casas".
*   **Formulário de Contato:** Envio de mensagens diretamente do site para o e-mail da empresa.
*   **Formulário de Orçamento:** Solicitação de orçamentos específicos de serviços.
*   **Informações sobre Seguros:** Seção detalhada sobre os serviços de seguro.
*   **Informações sobre Imóveis/Casas:** Seção dedicada a informações sobre propriedades.

## Contribuição

Se você deseja contribuir para este projeto, por favor, entre em contato com o proprietário do repositório para discutir as possibilidades.

## Licença

[Urbanika © Alguns direitos reservados.]
