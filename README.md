
# Bootstrap
- Framework ou biblioteca desenvolvimento
- Modular
- Componentes ricos
- CSS + JS
- Grid System
- Responsivo
- Mobile-first
- Amplamente utilizada
- Cross browser 

## Biblioteca x Framework
- Biblioteca: oferece objetos / classes prontas para uso
- Framework: oferece um conjunto de bibliotecas
- Biblioteca: recurso para trabalhar
- Framework: metodologia de trabalho
- Biblioteca: te leva ao destino
- Framework: te ensina a chegar

## Desenvolvimento ágil
- Metodologias: Scrum, Kanban, XP
- Entrega de valor para o negócio
- Ciclos evolutivos
- Não se repita
- Separar grandes projetos em pequenas entregas
- MVP - Mínimo Produto Viável
- Estar envolvido x comprometido

## Vantagens
- Uso simples
- Menos código
- Abstração de estilos
- Documentação completa: https://getbootstrap.com/

## Desvantagens
- Uso excessivo
- Override de estilos (sobreposição)
- Abstração de estilos

### Com Bootstrap
```
 <a class="btn btn-lg">Botão</a>
```

### Sem Bootstrap
```
 <a class="botao botao-grande">Botão</a>


```

## Componentes
- Blocos / Modelos / Templates reutilizáveis 
https://getbootstrap.com/docs/5.1/components


## Helpers 
- Funções básicas
- Incrementos 
- Ajustes
https://getbootstrap.com/docs/5.1/helpers


# Font Awesome
- Biblioteca de ícones
https://fontawesome.com/start/


# Exercicio
- incluir carousel na home antes de sobre
- completar o cadastro, tornando os campos obrigatórios
- incluir campos: bairro, complemento e telefone
=======
# Curso-Front-End

Este projeto contem tecnicas para o desenvolvimento das linguagens HTML e CSS

Ele contém...

## Home Page

Uma pagina falando um pouco sobre mim

## Contatos

Uma pagina mostrando como seria o layout de um formulario. Ele não esta implementado com o back-end

## Tabelas

Uma pagina mostrando as funcionalidades de uma tabela

## Quero Café

uma pagina amistosa convidando-o para tomar café


## Status do projeto

> :construction: Projeto em construção :construction:

# Este projeto tem como intuito aprender as funcionalidades do githob como:

## Commits
 Informação de alteração
 - após testado todo seu código
 > git add *
 > git commit -m "mensagem"
 > git push (enviar alterações para o repositório GitHub)
 > git pull (puxar / trazer alterações do GitHub para sua máquina)

## GitFlow.
Fluxo do Git

### Branchs
são ramificações / versões paralelas

- main / master (vai para produção, quando o projeto é publicado)
- develop 
- DOD Definition of Done: critérios de aceite
- versionamento 1.0.0

> git checkout -b dev (cria uma branch)
> git checkout master (mudar de branch)


### Merge
Mescla de branchs
Você pode precisar resolver conflitos manualmente

> git merge main 

### Pull Requests
Mescla de branchs no repositório
Permite code review
O respositório resolve os conflitos automaticamente


### configura o GitFlow
> git flow init
> git flow feature start {nome-da-feature}

