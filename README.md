# EsdrasProject






Configuração do Ambiente
Primeiramente, é essencial garantir que estamos utilizando versões do Node.js e NPM que sejam compatíveis e suportadas. Para isso, é necessário verificar as versões ativamente suportadas conforme indicado na documentação oficial do Angular em Angular.dev.

Siga os passos abaixo para configurar seu ambiente:



## Ambiente de desenvolvimento
Para verificar a versão do Node.js instalada localmente em sua máquina, você pode executar o seguinte comando no terminal:

Pra esse projeto e setup usei  essas versoes, recomendo usar o nvm pra facilitar a troca
[nvm](https://github.com/nvm-sh/nvm)
```bash
node --version v20.12.1
npm --version 
pnpm --version 8.15.6
```

Instalar o angular cli na versão mais recente.
recomendo desistalar a versão na maquina
```bash
pnpm install -g @angular/cli@latest

ng version
```
![img.png](docs/imgs/img.png)
### Workspace
Criar o workspace do projeto

```bash
ng new esdras-project --create-application false --prefix esdras-khan
```

ai vai criar o workspace, com o angular.json quase vazio
![img_1.png](docs/imgs/img_1.png)

vamos colcoar o primeiro app dentro dele
colocando roteamento, estilo, e definindo se a aplicação vai ser com ssr ou não!.
```bash
ng g application frontend-school --prefix esdras-khan --routing --style=scss --strict --ssr false

```
![img_1.png](docs/imgs/img2.png)
com isso nosso project ja esta criado
![img.png](docs/imgs/appcriado.png)

### Schematics
Para garantir que todos os novos componentes criados no seu projeto Angular 
sigam padrões específicos,
como o uso da estratégia de detecção de mudanças OnPush, 
você pode configurar os schematics no arquivo angular.json.
Isso não apenas otimiza a detecção de alterações, mas também 
estabelece uma prática consistente entre os desenvolvedores do projeto.

![img.png](docs/imgs/schematics.png)

### Prettier

O Prettier é um formatador de código opinativo que garante uniformidade na
apresentação do código em todo o seu projeto. Isso elimina a necessidade de 
discussões sobre estilo de código entre os desenvolvedores e 
permite que a equipe concentre seus esforços na lógica do código.
Usar o Prettier ajuda a manter a base de código limpa e consistente, 
facilitando a leitura e manutenção por qualquer pessoa do time.


```bash
pnpm  install -D prettier
```
crie dois arquivos um .prettierrc e um .prettierignore
e coloque essa config pro prettier
```json


{
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 120
}
```
pro ignore
```json 
# Add files here to ignore them from prettier formatting
dist
coverage
.angular
package-lock.json
docs
package-lock.yaml

```


depois de instalar, configure no seu webstorm ou vs code

![img.png](docs/imgs/wbe.png)
Com o Prettier configurado no seu IDE de escolha, 
é uma boa prática adicionar scripts de formatação no
package.json do seu projeto. 
Isso permite formatar o código facilmente ou verificar se tudo 
está formatado corretamente em todo o workspace. 
Aqui está como você pode fazer isso:

```json
"scripts": {
  "format:test": "prettier --list-different \"./projects/**/*.{ts,html,scss,json}\"",
  "format:write": "prettier --write \"./projects/**/*.{ts,html,scss,json}\""
}
```

#### Explicação dos Scripts
format:test: Este script usa o comando --list-different do Prettier para listar os arquivos que não estão formatados corretamente de acordo com as regras definidas. Se houver arquivos que precisam de formatação, eles serão exibidos no terminal.

format:write: Este script usa o comando --write para automaticamente formatar todos os arquivos especificados no padrão do caminho.
