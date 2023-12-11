# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir cadastros de novos usuários | ALTA | login.html  |
|RF-002| Permitir login na conta   | ALTA | login.html |
|RF-003| O Sistema poderá oferecer rastreio de produto | ALTA | vendas.html |
|RF-004| O Sistema deverá ter um sistema de avaliação de produto e perfil | MEDIA | teladoitem.html |
|RF-005| O Sistema deverá oferecer suporte ao comprador | MEDIA | suporte.html |
|RF-006| Permitir a edição e exclusão de usuários no sistema | MEDIA | config.html | 
|RF-007| O sistema deverá gerar automaticamente um codigo único para cada novo usuário | ALTA | login.html |
|RF-008| Exibir uma mensagem caso o novo usuário tente cadastrar uma conta com um usuário ou email que já esteja cadastrado | ALTA | login.html |
|RF-009| O vendedor poderá criar cadastro, anunciar, editar e excluir produtos | ALTA | criaranuncio.html |
|RF-010| Gerar automaticamente um codigo referente a cada novo produto cadastrado | ALTA | criaranuncio.html |
|RF-011| A aplicação deverá possuir um processo de compra de produtos incluindo checkout e carrinho | ALTA | indexcarrinho.html |
|RF-012| O sistema deverá permitir o comprador realizar o cancelamento de uma compra caso esteja adequado ao codigo de defesa do consumidor | ALTA | vendas.html |
|RF-013| Deve ser obrigatorio que o usário insira sua data de nascimento|ALTA| NÃO ATINGIDA |
|RF-014| O Sistema deverá ter uma tela de descrição do item que leva pro carrinho ao clicar em comprar | ALTA | teladoitem.html |
## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

