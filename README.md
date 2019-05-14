# Leitura (Readable)
Esse é o segundo projeto do curso React Developer da *Udacity*.
O projeto é divido em dois subprojetos:
 - api-server: Aplicação *express* responsável pelo back-end.
 - Leitura: Aplicação React-Redux responsável pelo fron-ent.

# Instalar e rodar
Para rodar o projeto *api-server*:
```bash
 - cd api-server
 - npm i
 - npm start
 ```
 
 Para rodar o projeto *Leitura*:
```bash
 - cd Leitura
 - npm i
 - npm start
 ```
 
 Além do React e do Redux, esse projeto usa as seguintes libs e suas respectivas funcionalidades:
  - [react-icons](https://react-icons.netlify.com): Disponibiliza um grande acervo de ícones svg.
  - [react-modal](https://github.com/reactjs/react-modal): Disponibiliza um componente Modal/Dialog.
  - [react-redux-loading-bar](https://github.com/mironov/react-redux-loading-bar): Disponibiliza um componente de barra de progresso.
  - [redux-thunk](https://github.com/reduxjs/redux-thunk): Disponibiliza um middleware para resolução de [Thunk](https://en.wikipedia.org/wiki/Thunk).
  
# Componentes principais e funcionalidades
- ## Dashboard
  - ##### Lista de posts.
  - ##### Botão que redireciona para o **formulário de cadastro de posts**.
  - ##### **Navbar** que permite filtrar posts por categoria
  - ##### **Sidebar** que permite filtrar posts pela data (mais recente), por votos (maior número de votos) e comentários (maior número de comentários)

- ## PostForm
  - ##### Formulário reutilizável para cadastro e edição de um **post**.
 
- ## Post
  - ##### Cada **post** pode receber votos positivos ou negativos
  - ##### Um **post** exibe a categoria de sua postagem. Ao clicar na categoria de um **post** a aplicação redirecionará para o **Dashboard** realizando a filtragem de posts de acordo com a respectiva categoria.
  - ##### Um **post** exibe o autor de sua postagem. Ao clicar no nome do autor de um **post** a aplicação redirecionará para o **Dashboard** realizando a filtragem de posts de acordo com o autor.
  - ##### Ao clicar no título do post a aplicação redireciona para a tela de detalhamento do **post**.

- ## PostDetail
  - ##### Um **post** pode receber votos positivos ou negativos.
  - ##### É possível editar as informações de um **post**.
  - ##### É possível deletar um **post**.
  - ##### É possível comentar em um **post**.
  - ##### É possível visualizar a lista dos **comments** do **post**.

- ## CommentForm
  - ##### Formulário reutilizável para cadastro e edição de um **comment**.

- ## Comment
  - ##### Um **comment** pode receber votos positivos ou negativos.
  - ##### É possível editar as informações de um **comment**.
  - ##### É possível deletar um **comment**.



