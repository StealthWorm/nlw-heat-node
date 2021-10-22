# nlw-heat-node

## Project NLW Heat

### Estrutura base do backend da aplicação de recebimento e envioo de mensagens utlizando NodeJS. 

Nesse projeto foi utilizado *Typescript*, que auxilia no aumento da produtividade em desenvolvimento.

Para para trabalhar com banco de dados foi utilizado o *Prisma ORM*, uma camada de acesso a base de dados, responsável por fazer a abstração do acesso a base de dados 
e roda em um container Docker. Além da abstração ele também possui um gerenciador de migrações que controla todas as alterações na estrutura de dados do banco.

Para requisições em tempo em real com atualizações instantânes foi utilizada a *Socket.IO*,uma biblioteca JavaScript para aplicativos da web em tempo real.
Permite comunicação bidirecional em tempo real entre clientes e servidores da Web.

## Comandos

**Start Project**
- yarn dev


## FAQ
- As migrations possuem comportamento diferenciado dependendo do SO, por isso, caso o comando "yarn prisma migrate dev" seja rodado em uma primeira , para novas interações com o banco
de dados através do arquivo "schema.prisma", talvez sueja o problema do compilador nao instalar ou não rodar o client, para resolver esse problema é possivel seguir os passos:
\
  *1- excluir a pasta node_modules*\
  *2- excluir os arquivos que ele criou na pasta do prisma ,com exceção do 'schema.prisma'*\
  *3 - rodar o comando ** yarn cache clean**, para limpar o cache da aplicação*\
  *4 - por recomendação, abrir o vscode novamente com permissões avançadas de  admin*\
  *5 - rodar o coomando 'Yarn Install' pra baixar o node_modules novamente*\
  *6 - roder o comando 'npm install @prisma/client', para instalar manualmente a lib e, em seguida, o "yarn prisma migrate dev"*



