Objetivo:

Desenvolver uma pequena aplicação onde os usuários possam registrar tarefas a fazer, um "TO DO LIST". O usuário também poderá fazer login e logout.

Tecnologias:

- [x] Frontend: Ionic com Angular
- [x] Backend: API no padrão REST com Django e Django Rest Framework (Python)
- [x] Banco de Dados: MySQL

Pontos que serão considerados:

- [x] Listar tarefas
- [x] Adicionar tarefas
- [x] Listar tarefas
- [x] Deletar tarefas
- [ ] Login
- [ ] Logout
- [x] Análise de Requisitos (Entendimento dos requisitos)
- [x] Clean Code (Legibilidade de código) (Acredito que esteja bom :D )
- [ ] Documentação (Pode ser via comentários no código, com um readme.md na root)
- [x] Guia de como colocar a aplicação para rodar
- [x] Versionamento de código, utilizar o GitHub
- [x] Organização de Código

Pontos extras (Opcionais):
- [ ] Testes Unitários
- [ ] Utilizar docker

O Desafio pode ser entregue até 12:00h do dia 21/06/2021.

## Considerações iniciais

Esta aplicação é um sistema de controle de tarefas, solicitado pela seleção da TdCard.

## Montar o app

1. Para executar o projeto é necessário clonar o repositório `git clone https://github.com/lacerdarenato/TdCard.git` dentro do diretório em deseja instalá-lo.
2. Instale as dependências contidas no arquivo requirements.txt através do comando `pip install -r requirements.txt`
3. Instale o MySQL Server e crie um banco de dados com nome db_tasks através do comando no terminal do MySQL  `CREATE DATABASE db_tasks;` 
4. Executar as migrações para montar o banco, utilizando o comando `python manage migrate`
5. Levantar o server através do comando `python manage.py runserver`
6. O Webservice rodará na url `http://127.0.0.1:8000/` onde receberá as requisições Http
7. Para levantar o cliente navegue até o diretório `./FrontEnd/tasks` e execute o comando ` ng serve --open`
8. O CLiente será executado na url `http://localhost:4200/` 



## Considerações finais.

- Infelizmente não foi possível fazer os itens opcionais. 


## De qualquer forma e com qualquer resultado, gostaria de agradecer pela oportunidade. 
## Abraços e se cuidem!