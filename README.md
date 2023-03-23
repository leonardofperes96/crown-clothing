# CrownClothing

Uma aplicação SPA responsiva de ecommerce, com autenticação do auth0, com filtros, sort, e grande parte da lógica conhecida dentro de aplicativos de ecommerce.
Inicialmente era para ser com Javascript, porém no meio da produção comecei a estudar typescript e então fiz a refatoração completa do aplicativo.

## Funcionalidades

- Filtrar por busca, categorias, companhias, cores e preço.
- Sort por preço decrescente e crescente, e também com nome de a-z e z-a.
- Toda função do carrinho de compra.
- Autenticação com auth0 para prosseguir a compra.
- Forma de pagamento feito com a Api do Stripe.

## Rodando Localmente

### Clone o projeto

git clone git@github.com:leonardofperes96/crown-clothing.git

### Entre no diretório do projeto frontend

cd crown-clothing-app

### Instale as dependencias

npm install

### Inicie o servidor

npm run dev

## Stacks utilizadas

- Frontend : React, Css, Typescript, RestAPI, Stripe
