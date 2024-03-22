
# API NESTJS XLSX

Este projeto se refere à criação de uma API para um projeto de Desenvolvimento Full Stack com Relacionamento Muitos para Muitos.




## Como rodar?
npm install
&
npm run dev

## caso queira usar o docker compose

docker-compose up -d

depois disso veja qual ip o container docker mysql esta rodando com esse comando;

docker inspect -f '{{range .NetworkSettings.Networks}}{{.Gateway}}{{end}}' mysql


## Criar uma nova nota

Método: POST

Rota: /notas
Descrição: Cria uma nova nota com os dados fornecidos.
Corpo da solicitação (JSON):

```json

{
  "titulo": "Título da nota",
  "conteudo": "Conteúdo da nota",
  "tags": [1, 2, 3] // IDs das tags relacionadas (opcional)
}

```
Resposta bem-sucedida (Status: 201 Created):

Corpo da resposta (JSON): Retorna os dados da nota criada.

## Obter todas as notas

Método: GET

Rota: /notas

Descrição: Retorna todas as notas existentes.

Resposta bem-sucedida (Status: 200 OK):
Corpo da resposta (JSON): Retorna uma lista de notas com seus dados.

## Obter uma nota específica

Método: GET

Rota: /notas/:id

Descrição: Retorna uma nota específica com o ID fornecido.

Parâmetros da rota:

id: ID da nota a ser recuperada.

Resposta bem-sucedida (Status: 200 OK):
Corpo da resposta (JSON): Retorna os dados da nota solicitada.

## Atualizar uma nota

Método: PATCH

Rota: /notas/:id

Descrição: Atualiza uma nota existente com os dados fornecidos.

Parâmetros da rota:

id: ID da nota a ser atualizada.
Corpo da solicitação (JSON):

```json
{
  "titulo": "Novo título da nota",
  "conteudo": "Novo conteúdo da nota",
  "Tags": [1, 2, 3] // IDs das novas tags relacionadas (opcional)
}

```

Resposta bem-sucedida (Status: 202 Accepted):

Corpo da resposta (JSON): Retorna os dados atualizados da nota.

## Rotas relacionadas às tags:

Criar uma nova tag

Método: POST

Rota: /tags

Descrição: Cria uma nova tag com os dados fornecidos.
Corpo da solicitação (JSON):

```json 

{
  "titulo": "Título da tag"
  "notas": [1, 2] ID de notas opcional
}

```
Resposta bem-sucedida (Status: 201 Created):

Corpo da resposta (JSON): Retorna os dados da tag criada.

## Obter todas as tags

Método: GET

Rota: /tags

Descrição: Retorna todas as tags existentes.

Resposta bem-sucedida (Status: 200 OK):

Corpo da resposta (JSON): Retorna uma lista de tags com seus dados.

## Obter uma tag específica

Método: GET

Rota: /tags/:id

Descrição: Retorna uma tag específica com o ID fornecido.

Parâmetros da rota:
id: ID da tag a ser recuperada.

Resposta bem-sucedida (Status: 200 OK):

Corpo da resposta (JSON): Retorna os dados da tag solicitada.

## Atualizar uma tag

Método: PATCH

Rota: /tags/:id

Descrição: Atualiza uma tag existente com os dados fornecidos.

Parâmetros da rota:
id: ID da tag a ser atualizada.
Corpo da solicitação (JSON):

```json

{
  "titulo": "Título da tag"
  "notas": [1, 2] ID de notas opcional
}

```

Resposta bem-sucedida (Status: 202 Accepted):

Corpo da resposta (JSON): Retorna os dados atualizados da tag.


## Excluir uma tag

Método: DELETE

Rota: /tags/:id

Descrição: Exclui uma tag existente com o ID fornecido.

Parâmetros da rota:

id: ID da tag a ser excluída.

Resposta bem-sucedida (Status: 204 No Content):
Corpo da resposta: Sem conteúdo.
