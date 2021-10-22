# nlw-heat-node

<h1 align="center">NLW Heat - Node.js</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
  <img src="https://img.shields.io/static/v1?label=NLW&message=Heat&color=8257E5&labelColor=000000" alt="NLW Heat" />
</p>

## ✍️ Descrião Básica

Nesse projeto foi utilizado *Typescript*, que auxilia no aumento da produtividade em desenvolvimento.

Para para trabalhar com banco de dados foi utilizado o *Prisma ORM*, uma camada de acesso a base de dados, responsável por fazer a abstração do acesso a base de dados 
e roda em um container Docker. Além da abstração ele também possui um gerenciador de migrações que controla todas as alterações na estrutura de dados do banco.

Para requisições em tempo em real com atualizações instantânes foi utilizada a *Socket.IO*,uma biblioteca JavaScript para aplicativos da web em tempo real.
Permite comunicação bidirecional em tempo real entre clientes e servidores da Web.

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [JSON Web Token](https://jwt.io/)
- [Socket.IO](https://socket.io/)

## 🚀 Como executar

> Obs.: Nesse projeto temos autenticação via OAuth com o GitHub. Para registrar um novo usuário com esse procedimento siga os passos:
- Acesse seu github > Profile > Settings
- Navegue até "Developer Settings"
- Ache a opção "OAuth" > new OAuth App
- De um nome para a aplicação
- Preenche os dados de Homepage URL e Authorization callback URL

<p align="center">
 <b>ATENÇÃO: ambos os campos de URL devem estar preenchidos da mesma forma!!</b>
</p>
 
- Clone o repositório e acesse a pasta;
- Faça uma copia do arquivo `.env.example` para `.env` e preencha com as suas credenciais do GitHub;
- Instale as dependências com `yarn`;
- Executa as migrations com `yarn prisma migrate dev`;
- Inicie o servidor com `yarn dev`;

A aplicação pode ser acessada em [`localhost:4000`](http://localhost:4000).

## ❓ FAQ
- As migrations possuem comportamento diferenciado dependendo do SO, por isso, caso o comando "yarn prisma migrate dev" gere erro, principalmente para novas interações com o banco de dados através do arquivo "schema.prisma", talvez seja o problema do compilador não ter instalado o client, para resolver esse problema é possivel seguir os passos:
\
  *1- excluir a pasta node_modules*\
  *2- excluir os arquivos que ele criou na pasta do prisma ,com exceção do 'schema.prisma'*\
  *3 - rodar o comando ** yarn cache clean**, para limpar o cache da aplicação*\
  *4 - por recomendação, abrir o vscode novamente com permissões avançadas de  admin*\
  *5 - rodar o coomando 'Yarn Install' pra baixar o node_modules novamente*\
  *6 - roder o comando 'npm install @prisma/client', para instalar manualmente a lib e, em seguida, o "yarn prisma migrate dev"*

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.




