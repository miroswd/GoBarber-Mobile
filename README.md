<h1 align="center">GoBarber Mobile [Em Desenvolvimento]</h1>
<p align="center">Criando a versão para dispositivos móveis do <a href="https://github.com/miroswd/GoBarber-Web">GoBaber</a>.</p>

<p align="center">
  <img src="https://github.com/miroswd/GoBarber-Mobile/blob/master/assets/screenshots/create-account.jpeg" width="200px" />
  <img src="https://github.com/miroswd/GoBarber-Mobile/blob/master/assets/screenshots/success.jpeg" width="200px" />
  <img src="https://github.com/miroswd/GoBarber-Mobile/blob/master/assets/screenshots/logon.jpeg" width="200px" />
  <img src="https://github.com/miroswd/GoBarber-Mobile/blob/master/assets/screenshots/loading.jpeg" width="200px" />
</p>

<h4>Para rodar a aplicação no dispositivo físico</h4>

- Modificar o ip da máquina, no arquivo <a href="https://github.com/miroswd/GoBarber-Mobile/blob/b2209909da8f96bc6f2237420e45c558adf5fba8/src/services/api.ts"/>api.ts</a>

```bash
yarn # ou npm install
```


```bash
yarn android
yarn start

```

<h4>Incluindo o Back end</h4>

- Necessário clonar o repositório: <a href="https://github.com/miroswd/gobarber-backend" target="_blank" >gobarber-backend</a>
- Baixar a imagem do Postgres

```bash
docker run --name gobarber -e POSTGRES_PASSWORD=suasenha -p 5432:5432 -d postgres # Caso a porta 5432 esteja ocupada, modificar de 5432:5432 para 5433:5432
```
- Criar uma database chamada <b>gostack_gobarber</b> 
- Rodar as migrations

```bash
yarn typeorm migration:run
```

- Inicializar o projeto

```bash
yarn dev:server
```
