#### Rest_Api_blog
### Estudo sobre APIs
### API b&aacute;sica respons&aacute;vel pelo gerenciamento dos posts de um blog
## Tecnologias utilizadas

<ul>
<li>Express</li>
<li>Sequelize</li>
<li>Mochas (testes)</li>
<li>Axios</li>
</ul>

## Instruçõees para executar o projeto
#### 1) Clone o projeto em uma pasta
`git clone https://github.com/LuanBMartins/Rest_Api_blog.git`
#### 2) Entre na pasta raiz do projeto
`cd Rest_Api_blog`
#### 3) Instale as depend&ecirc;ncias
`npm install`


<h4>Para o banco utilize <a href="https://www.postgresql.org/">Postgres</a></h4>
Utilize o seguinte script em sua base de dados criada


```
create schema blog;
create table blog.post (
    id serial primary key,
    title text not null,
    content text not null,
    date timestamp default now()
); 
```
Termine de configurar criando um arquivo .env na raiz do projeto e edite com as seguintes informações:  
```
DATABASE=BaseCriada
DB_USER=SeuUsuárioDoBanco
DB_PASS=SuaSenha
```
## Execução
O projeto está pronto para ser executado, basta utilizar `npm start` para subir o servidor e verificar as rotas<br>
Para rodas os testes, basta com estar com o servidor online e utilizar `npm test`

## Rotas
<ul>
<li>[GET] http://localhost:5000/posts</li>
<li>[GET] http://localhost:5000/posts/:id</li>
<li>[POST] http://localhost:5000/posts</li>
<li>[PUT] http://localhost:5000/posts/:id</li>
<li>[DELETE] http://localhost:5000/posts/:id</li>
</ul>
