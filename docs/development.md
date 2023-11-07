# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve permitir a criação de contas | ALTA | login.html |
|RF-002| O sistema deve permitir troca de senha | ALTA | login.html |
|RF-003| O sistema deve ter área de compras | ALTA | carrinho.html |
|RF-004| O sistema deve ter área de personalização de perfil | BAIXA | _____ |
|RF-005| O sistema deve permitir várias formas de pagamento| MEDIA | indexcarrinho.html |

### Requisitos Não Funcionais
|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RNF-001| O sistema deve permitir apenas uma conta por e-mail | ALTA | login.html |
|RNF-002| O sistema deve ser responsivo quanto a telas de smartphones | MEDIA | index.html|
|RNF-003| O sistema deve permitir troca de senha | ALTA | login.html |
|RNF-004| O sistema deve ter uma otimização alta para boas respostas | MEDIA | index.html |
|RNF-005| O sistema deve ter contrastes altos para atingir deficientes visuais | ALTA | index.html |
|RNF-006| O sistema deve ser confiável para registro de cartões | ALTA |indexcarrinho.html|

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

