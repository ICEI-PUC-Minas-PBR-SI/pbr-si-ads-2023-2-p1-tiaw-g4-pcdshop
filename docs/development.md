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
|RF-001| Permitir cadastros de novos usuários | ALTA | Igor |
|RF-002| Permitir login na conta   | ALTA | Luis |
|RF-004| O Sistema deverá ter um sistema de avaliação de produto e perfil | MEDIA | Igor |
|RF-005| O Sistema deverá oferecer suporte ao comprador | MEDIA | Miguel |
|RF-006| Permitir a edição e exclusão de usuários no sistema | MEDIA | Samuel | 
|RF-007| O sistema deverá gerar automaticamente um codigo único para cada novo usuário | ALTA | Igor |
|RF-008| Exibir uma mensagem caso o novo usuário tente cadastrar uma conta com um usuário ou email que já esteja cadastrado | ALTA | Luis |
|RF-009| O vendedor poderá criar cadastro, anunciar, editar e excluir produtos | ALTA | Artur |
|RF-010| Gerar automaticamente um codigo referente a cada novo produto cadastrado | ALTA | Samuel|
|RF-011| A aplicação deverá possuir um processo de compra de produtos incluindo checkout e carrinho | ALTA | Artur |
|RF-012| O sistema deverá ser responsivo | ALTA | Mateus |
|RF-012| O sistema deverá permitir o comprador realizar o cancelamento de uma compra caso esteja adequado ao codigo de defesa do consumidor | ALTA | Luis |
|RF-013| Deve ser obrigatorio que o usário insira sua data de nascimento|ALTA| Luis |
|RF-014| O Sistema deverá ter uma tela de descrição do item que leva pro carrinho ao clicar em comprar | ALTA | Samuel |
|RF-015| O Sistema deverá ter uma parte de favoritos e sua opção de remoção| ALTA | Miguel |
### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade | Responsavel |
|------|-----------------------------------------|----| ----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | Mateus | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | Mateus |
|RNF-003| O sistema deve oferecer facilidades para determinados tipos de usuários.|MEDIA|Todos|
|RNF-006| O sistema deve manter todos os cadastros de produtos em um banco de dados|MEDIA| Samuel |
## Descrição das estruturas:


## Tela de Login
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Login          | String            | Email para efetuar o cadastro             | miguelbarbosa@gmail.com                        |
| Senha          | String            | Identificador unico para o login          | Senhaindecifravel                              |
| Recuperar senha| Texto             | Recuperar senha.                          | Senhaindecifravel.                             |
                              
## Tela Inicial
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Busca          | String            | Buscar pelo produto necessário            | miguelbarbosa@gmail.com                        |
| Perfil         | String            | Abrir a conta pessoal                     | *****                                          |
|Comprar         | String            | Abrir a tela do produto                   | Bola adaptável                                 |
| Favoritos      | String            | Acessar seus produtos favoritos           | Salvar um produto para a compra posterior      |

## Tela do Carrinho
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Comprar        | String            | Efetuar a compra                          | Total: xxx  Comprar produto                    |

## Tela de favoritos
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Favoritos      | String            | Favoritar um item                         | Adicionado aos favoritos                  |

## Tela do Produto
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Comprar        | String            | Efetuar a compra                          | Total: xxx  Comprar produto                    |
|  Favoritos     | String            | Favoritar                                 |  Mover para tela de favoritos                  |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Avaliação       | String            | Avaliar o item                         | Estrelas: xxxxx  Marca quantidade de estrelas                    |

## Tela do Vendedor
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Criar anúncio  | String            | Criar anúncio                             | Criar um anúncio do próprio vendedor           |
| Remover anúncio| String            | Remover anúncio desejado                  | Criar um anúncio do próprio vendedor           |
|Editar anúncio  | String            | Editar as informações do anúncio          | Atualizar preço                                |  

## Tela do Fale Conosco
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Chat           | String            | Resolver problemas ou acessar informações | Chat para tirar dúvida sobre pagamentos        |
