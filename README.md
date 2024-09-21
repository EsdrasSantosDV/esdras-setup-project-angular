# EsdrasProject






Configuração do Ambiente
Primeiramente, é essencial garantir que estamos utilizando versões do Node.js e NPM que sejam compatíveis e suportadas. Para isso, é necessário verificar as versões ativamente suportadas conforme indicado na documentação oficial do Angular em Angular.dev.

Siga os passos abaixo para configurar seu ambiente:



## Development server
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





