
# Warren Transactions

Projeto de teste criado para Warren Brasil

## Interface

Layout do projeto criado usando o figma. Usei as cores, imagens e fontes retiradas do site da Warren. Acesse o [**link do projeto aqui**](https://www.figma.com/file/IG23c0bB9aD33HS2jS5VfQ/Warren-Transactions).

## Deploy

Realizei o deploy da aplicação usando o Heroku. Ela pode ser acessada por [**esse link**](https://warren-transactions-app.herokuapp.com/).


## Desenvolvimento

Para o desenvolvimento, utilizei Vue3 com TypeScript e Vue Test Utils para os testes unitários. 

Procurei não usar bibliotecas externas, exceto o axios, que é habitualmente usado para lidar com as requisições HTTP e o express que precisei utilizar para o deploy.

Para os filtros e manipulação da lista de transações, como o agrupamento por datas, utilizei apenas funções nativas do javascript.

## Descrição da aplicação

A aplicação consiste em uma tela de listagem de transações financeiras. Nela podem ser aplicados filtros por título da transação ou status. Clicando na transação, é exibido um modal com os detalhes da mesma.


## Scripts

### Instalando as dependências
```
npm install
```
### Levantando o servidor
```
npm run serve
```

### Testes Unitários 
```
npm run test:unit
```

### Testes Unitários observando alterações no código 
```
npm run test:unit:watch
```

## Sobre o Desenvolvedor

E-mail: pfrare.tads@gmail.com
Telegram: @paulofrare

