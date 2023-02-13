# REST API de livros com NodeJS e Express
Uma API de livros feita com Express e NodeJS <br>
### Esta API utiliza: <br>
<div style="display: inline_block" align="left"><br>
  <img align="center" height="60" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" height="60" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
  <img align="center" height="60" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg">
</div>

# Primeiros passos:
### Primeiramente, você precisa ter o <a href="https://nodejs.org/en/">NodeJS</a> e o <a href="https://www.postman.com/downloads/?utm_source=postman-home">PostMan</a> instalados em sua máquina <br>
#### Para instalar as dependências necessárias, coloque o seguinte comando:
```
npm install
```
#### Recomendamos, também, usar o <a href="https://www.npmjs.com/package/nodemon">Nodemon</a> para melhorar sua experiência, rodando o seguinte comando:
```
npm install nodemon
```
##### O Nodemon irá reiniciar o servidor toda vez que uma alteração nova for feita, facilitando a manutenção do código

# Iniciando o projeto
#### Para iniciar, coloque este comando no terminal:
```
node app
```
#### ou, se estiver usando o Nodemon
```
nodemon app
```
### No se terminal, irá aparecer a mensagem `listening on http://localhost:8000/livros`, indicando que sua aplicação está rodando em `http://localhost:8000/livros`
## Entrando no Postman
#### Com o postman instalado, siga estes passos:
### Crie uma Collection e cooque um nome nela, como "Livros"
![Ola](https://user-images.githubusercontent.com/83819836/218352862-df2b3ad7-35ec-479d-9ce2-f73ac5477cbe.png)
### Crie uma Request clicando com o botão direito em "Livros" e coloque um nome nela
![Ola](https://user-images.githubusercontent.com/83819836/218353301-29695639-a222-404c-ae9f-3d355c14426c.png)
### Agora, coloque o link da sua aplicação no lado esquerdo, enquanto no lado direito estará o tipo de requisição que você fará
![Ola](https://user-images.githubusercontent.com/83819836/218353486-35d014f0-12d2-44f6-be82-33b82819a10b.png)

### Para enviar a requisição, só clicar no botão azul "Send"
![Ola](https://user-images.githubusercontent.com/83819836/218353924-8a1841b7-f938-48bc-95c3-9ca96584caa2.png)

# Como usar
## Requisição GET geral
![Ola](https://user-images.githubusercontent.com/83819836/218353753-8a64ef1c-2953-4321-8bcf-e9172c482976.png)
### Esta requisição irá mostrar todos os livros atuais

## Requisição GET em apenas um livro
![Ola](https://user-images.githubusercontent.com/83819836/218354078-43ebd51e-2a4e-44bc-9134-462aa856e20e.png)
### Coloque um `/{id}` no final da URL com o id do livro que você quer ver e irá mostrar as infromações deste livro específico

## Requisição POST
### Mude o tipo de requisição para `POST` antes da URL
![Ola](https://user-images.githubusercontent.com/83819836/218354393-1c13a3e8-0eea-4e9d-aaeb-ef176d38e3c9.png)
### Mude a aba para `body`, depois coloque a opção `raw` e mude para `JSON` na última opção, em azul
### No BODY, coloque um Objeto JSON, no formato { "nome": "Nome do livro" } e aperte em SEND, o ID será criado automaticamente, não se preocupe com ele :)

## Requisição PATCH
### Mude o tipo de requisição para `PATCH` antes da URL
![Ola](https://user-images.githubusercontent.com/83819836/218355359-37537964-cf77-493e-bbaa-da6cb010307e.png)
### Coloque, no final da URL, um `/{id}` com o id do livro que você quer editar
### Mude a aba para `body`, depois coloque a opção `raw` e mude para `JSON` na última opção, em azul
### No `Body`, coloque um objeto JSON no formato { "nome": "nome modificado" } par mudar o nome do livro no id referido

## Requisição DELETE
### Mude o tipo de requisição para `DELETE` antes da URL
![Ola](https://user-images.githubusercontent.com/83819836/218355271-027c3113-8ca7-48d8-ab4b-45dbed3f1a44.png)
### Coloque na URL um `/{id}` e clique no botão SEND para deletar o item com o referido ID

# Conclusão
#### Este projeto foi feito junto ao curso da <a href="https://www.alura.com.br">Alura</a> Sobre NodeJS e Express
#### Obrigado por ler até aqui, fique a vontade para mandar um Pull Request e mudar alguma coisa
#### Se quiser saber mais sobre mim, aqui está o <a href="https://luciano655dev.netlify.app">meu Portfolio</a>
