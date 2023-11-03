
Esta é uma API que tem como finalidade poder cadastrar, buscar, atualizar e deletar empresas no banco de dados MySql.

## Tecnologias utilizadas

- Node.js
- Typescript
- Express.js
- TypeORM
- MySql

## Iniciando a aplicação

Siga os passos abaixo para poder rodar a aplicação no seu servidor local:


1. Rode o comando abaixo para instalar todas as dependencias:

```
npm install
```

2. Crie um arquivo chamado `.env` na raiz do projeto, fora da pasta src e defina as variaveis de ambiente para se conectar ao seu banco de dados.
certifique-se de ter criado anteriormente o banco de dados que vai ser utilizado.

```
DB_HOST= 
DB_PORT= 
DB_USERNAME= 
DB_PASSWORD= 
DB_NAME= 
```

4. Agora execute o comando abaixo para rodar as migrações necessárias do projeto:

```
npm run typeorm migration:run -- -d ./src/data-source
```

5. Rode o comando abaixo para iniciar o servidor:

```
npm run dev
```
## Endpoints
<br/>

| Método | Endpoint                   | Responsabilidade                                  
| ------ | -------------------------- | ----------------------------------------------
| GET | /companies                    | buscar todas empresas cadastradas
| GET | /companies/:cnpj              | buscar empresa pelo cnpj                               
| POST| /companies                    | cadastrar uma empresa                              
|PATCH| /companies/:id/               | atualizar informações da empresa                  
|DELETE|/companies/:id/               | excluir empresa                                  
