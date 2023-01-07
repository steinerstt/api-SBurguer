# api-SBurguer

![GitHub](https://img.shields.io/github/license/steinerstt/api-SBurguer?style=for-the-badge)

<br>

![api-sburguer](https://github.com/steinerstt/screenshots-projects/blob/main/api-SBurguer/diagram.png?raw=true)

> Api desenvolvida para a aplicação <a href="https://github.com/steinerstt/SBurguer"> SBurguer </a>

<br>

## 🛠️ Algumas tecnologias

### Esta api foi desenvolvida com as principais tecnologias

- Node.js
- Express.js
- TypeScript
- Typeorm
- PostgreSQL
- Bcrypt
- Jsonwebtoken
- Yup

## 📌 Features

- [x] Cadastro de usuário
- [x] Login
- [x] Listagem de todos os lanches cadastrados
- [x] Adicionar lanche ao carrinho
- [x] Remover lanche do carrinho
- [x] Buscar um lanche específico
- [x] Pesquisar lanches

---

<br>

# 📋 Documentação

## 🔰 Base url: https://api-sburguer.onrender.com

---

## Cadastro de usuário

- ### POST /users

Body

```JSON
{
  "name": "Steiner",
  "email": "d@mail.com",
  "password": "123456"
}
```

Retorno esperado - 201

```JSON
{
  "id": "2e4fc5b9-6dde-4726-bf87-5d56c1b05307",
  "email": "d@mail.com",
  "name": "Steiner",
}
```

Possíveis erros

status - 409

```JSON
{
  "message": "Email already registered"
}
```

status - 400

```JSON
{
  "message": [
    "name is a required field",
    "email is a required field",
    "password is a required field"
  ]
}
```

```JSON
{
  "message": [
    "password must be at least 6 characters"
  ]
}
```

<br>

## Login de usuário

- ### POST /login

Body

```JSON
{
  "email": "d@gmail.com",
  "password": "1234"
}
```

Retorno esperado - 200

```JSON
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNAbWFpbC5jb20iLCJpYXQiOjE2NzI2MjE2NDksImV4cCI6MTY3Mjc5NDQ0OSwic3ViIjoiZWQ1Mjg5ODQtZTg1Yy00NTY2LWFmNDYtNjU5ZTY5YWI0ZDhjIn0.DPW0nai4FkskWOHxGY-hJWnW8Nt4RxDRgMMxAxNwd70",
  "user": {
  "id": "ed528984-e85c-4566-af46-659e69ab4d8c",
  "email": "s@mail.com",
  "name": "Steiner",
  "snacks_cart": [
      {
        "id": "04039c29-7c44-4555-8a03-49cf7c82ca33",
        "name": "Big Burguer",
        "price": "18.00",
        "img": "https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/hamb3.png?raw=true",
        "category": "Sanduíches"
      },
      {
        "id": "d402069f-0c01-4c84-81e0-1b3925c097e0",
        "name": "Fanta Guaraná",
        "price": "5.00",
        "img": "https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/bebi1.png?raw=true",
        "category": "Bebidas"
      }
    ]
  }
}
```

Possíveis erros

status - 400

```JSON
{
  "message": [
    "email is a required field",
    "password is a required field"
  ]
}
```

status - 401

```JSON
{
  "message": "Email or password invalid"
}
```

## Buscar todos os lanches

- ### GET /snacks

Requer autenticação - Bearer token

```JavaScript
{
  headers : {"Authorization": `Bearer ${token}`}
}
```

Retorno esperado - 200

```JSON
[
  {
    "id": "0de5f553-29ea-43a3-b16a-df3c03cccbcb",
    "name": "Hamburguer",
    "price": "14.00",
    "category": "Sanduíches",
    "img": "https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/hamb1.png?raw=true"
  },
  {
    "id": "af2eefee-6335-4038-9bc0-1bb85a915fcd",
    "name": "X-Burguer",
    "price": "16.00",
    "category": "Sanduíches",
    "img": "https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/hamb2.png?raw=true"
  },
  {
    "id": "2767b634-7d85-44ac-bfa3-27dc4accae19",
    "name": "Big Burguer",
    "price": "18.00",
    "category": "Sanduíches",
    "img": "https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/hamb3.png?raw=true"
  },
  {
    "id": "b1b35364-6ee5-4839-a90f-a710477999f7",
    "name": "Fanta Guaraná",
    "price": "5.00",
    "category": "Bebidas",
    "img": "https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/bebi1.png?raw=true"
  },
  {
    "id": "60f2a3cc-7555-4924-9788-93134c88699d",
    "name": "Coca-Cola",
    "price": "4.99",
    "category": "Bebidas",
    "img": "https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/bebi2.png?raw=true"
  }, ...
]
```

Possíveis erros

status - 401

```JSON
{
 "message": "Missing header authorization"
}
```

<br>

## Adicionar lanche ao carrinho

- ### PATCH /cart/${id}

Requer autenticação - Bearer token

```JavaScript
{
  headers : {"Authorization": `Bearer ${token}`}
}

```

Retorno esperado - 204 - No Content

```JSON

```

Possíveis erros

status - 401

```JSON
{
 "message": "Missing header authorization"
}
```

status - 404

```JSON
{
 "message": "Snack not found"
}
```

status - 409

```JSON
{
  "message": "There is already the some snack in the cart"
}
```

<br>

## Remover lanche do carrinho

- ### DELETE /cart/${id}

Requer autenticação - Bearer token

```JavaScript
{
  headers : {"Authorization": `Bearer ${token}`}
}
```

Retorno esperado - 204 - No Content

```JSON

```

Possíveis erros

status - 401

```JSON
{
 "message": "Missing header authorization"
}
```

status - 404

```JSON
{
 "message": "Snack not found"
}
```

```JSON
{
  "message": "Snack not found in the cart"
}
```

 <br>

## Pesquisar snacks

- ### GET /snacks/search/${textSearch} Ex: beb

Requer autenticação - Bearer token

```JavaScript
{
  headers : {"Authorization": `Bearer ${token}`}
}
```

Retorno esperado - 200

```JSON
[
  {
    "id": "b1b35364-6ee5-4839-a90f-a710477999f7",
    "name": "Fanta Guaraná",
    "price": "5.00",
    "category": "Bebidas",
    "img": "https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/bebi1.png?raw=true"
  },
  {
    "id": "60f2a3cc-7555-4924-9788-93134c88699d",
    "name": "Coca-Cola",
    "price": "4.99",
    "category": "Bebidas",
    "img": "https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/bebi2.png?raw=true"
  }
]
```

Possíveis erros

status - 401

```JSON
{
  "message": "Missing header authorization"
}
```

<br>

## Buscar Lanche específico

- ### GET /snacks/${id}

Requer autenticação - Bearer token

```JavaScript
{
 headers : {"Authorization": `Bearer ${token}`}
}
```

Retorno esperado - 200

```JSON
{
  "id": "af2eefee-6335-4038-9bc0-1bb85a915fcd",
  "name": "X-Burguer",
  "price": "16.00",
  "category": "Sanduíches",
  "img": "https://github.com/steinerstt/imgs-projects/blob/main/api-SBurguer/hamb2.png?raw=true"
}
```

Possíveis erros

status - 401

```JSON
{
  "message": "Missing header authorization"
}
```

status - 404

```JSON
{
  "message": "Snack not found"
}
```

<br>

## 📄 Licença

Este projeto está sob a licença do MIT - veja o arquivo [LICENSE](https://github.com/steinerstt/api-SBurguer/blob/main/LICENSE) para detalhes.

Feito com ❤ por [Steiner](https://github.com/steinerstt)
