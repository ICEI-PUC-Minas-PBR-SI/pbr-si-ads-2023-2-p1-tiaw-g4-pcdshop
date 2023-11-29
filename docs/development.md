# Programação de Funcionalidades


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
|RF-013| Deve ser obrigatorio que o usário insira sua data de nascimento|ALTA| login.html |
|RF-014| O Sistema deverá ter uma tela de descrição do item que leva pro carrinho ao clicar em comprar | ALTA | teladoitem.html |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade | Responsavel |
|------|-----------------------------------------|----| ----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | todas telas | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | todas telas |
|RNF-003| O sistema deve oferecer facilidades para determinados tipos de usuários.|MEDIA| todas telas |
|RNF-004| Deve aceitar diversos meios de pagamento|ALTA| indexcarrinho.html  |
|RNF-005| O sistema deve ter capacidade para recuperar os dados perdidos da últims recuperação em que realizou em caso de falha|MEDIA| indexcarrinho.html |
|RNF-006| O sistema deve manter todos os cadastros de produtos em um banco de dados|MEDIA| vendas.html |

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

## Tela do Produto
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Comprar        | String            | Efetuar a compra                          | Total: xxx  Comprar produto                    |
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
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
                   









