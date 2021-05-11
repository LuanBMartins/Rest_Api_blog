<p># Rest_Api_blog</p>
<h1>Estudo sobre APIs</h1>
<h2>API b&aacute;sica respons&aacute;vel pelo gerenciamento dos posts de um blog</h2>
<h2><em><span style="color: #3366ff;">Tecnologias utilizadas</span></em></h2>
<ul>
<li>Express</li>
<li>Sequelize</li>
<li>Mochas (testes)</li>
<li>Axios</li>
</ul>
<h2><em><span style="color: #3366ff;">Instru&ccedil;&otilde;es para executar o projeto</span></em></h2>
<h4>1) Clone o projeto em uma pasta</h4>
<p>`git clone https://github.com/LuanBMartins/Rest_Api_blog.git`</p>
<h4>2) Entre na pasta raiz do projeto</h4>
<p>`cd Rest_Api_blog`</p>
<h4>3) Instale as depend&ecirc;ncias</h4>
<p>`npm install`</p>
<h4>Para o banco utilize <a href="https://www.postgresql.org/">Postgres</a></h4>
<p>Utilize o seguinte script em sua base de dados criada</p>
<p>
```
create schema blog;
create table blog.post (
    id serial primary key,
    title text not null,
    content text not null,
    date timestamp default now()
); 
```
<h2><em><span style="color: #3366ff;">Execução</span></em></h2>
O projeto está pronto para executado, basta utilizar `npm start` para subir o servidor<br>
Para rodas os testes, basta com estar com o servidor online e utilizar `npm test`

</p>
<h2><em><span style="color: #3366ff;">Rotas</span></em></h2>
<ul>
<li>[GET] /posts</li>
<li>[GET] /posts/:id</li>
<li>[POST] /posts</li>
<li>[PUT] /posts/:id</li>
<li>[DELETE] /posts/:id</li>
</ul>