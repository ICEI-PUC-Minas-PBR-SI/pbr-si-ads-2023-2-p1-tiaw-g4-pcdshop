# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| Permitir cadastros de novos usuários | ALTA | login.html |
|RF-002| Permitir login na conta   | ALTA | perfil.html |
|RF-003| O Sistema poderá oferecer rastreio de produto | ALTA | vendas.html |
|RF-004| O Sistema deverá ter um sistema de avaliação de produto e perfil | MEDIA | teladoitem.html |
|RF-005| O Sistema deverá oferecer suporte ao comprador | MEDIA | suporte.html |
|RF-006| Permitir a edição e exclusão de usuários no sistema | MEDIA | config.html | 
|RF-007| O sistema deverá gerar automaticamente um codigo único para cada novo usuário | ALTA | login.html |
|RF-008| Exibir uma mensagem caso o novo usuário tente cadastrar uma conta com um usuário ou email que já esteja cadastrado | ALTA | login.html|
|RF-009| O vendedor poderá criar cadastro, anunciar, editar e excluir produtos | ALTA | criaranuncio.html|
|RF-010| Gerar automaticamente um codigo referente a cada novo produto cadastrado | ALTA |criaranuncio.html |
|RF-011| A aplicação deverá possuir um processo de compra de produtos incluindo checkout e carrinho | ALTA |indexcarrinho.html |
|RF-012| O sistema deverá permitir o comprador realizar o cancelamento de uma compra caso esteja adequado ao codigo de defesa do consumidor | ALTA | vendas.html | 
|RF-013| Deve ser obrigatorio que o usário insira sua data de nascimento|ALTA| login.html | 
|RF-014| O Sistema deverá ter uma tela de descrição do item que leva pro carrinho ao clicar em comprar | ALTA | teladoitem.html|


### Requisitos Não Funcionais
|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RNF-001| O sistema deve permitir apenas uma conta por e-mail | ALTA | login.html |
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | tela_inicial.html | 
|RNF-003| O sistema deve permitir troca de senha | ALTA | login.html |
|RNF-004| Deve aceitar diversos meios de pagamento|ALTA| indexcarrinho.html |
|RNF-005| O sistema deve ter contrastes altos para atingir deficientes visuais | ALTA | index.html |
|RNF-006| O sistema deve ser confiável para registro de cartões | ALTA |indexcarrinho.html|

## Descrição das estruturas:
Relatório de Estrutura de Código

Introdução

Este relatório aborda a estrutura de código do nosso projeto, um site responsivo que serve como um marketplace para pessoas com deficiência. O projeto utiliza HTML e CSS.

Acessibilidade

A acessibilidade é uma prioridade em nosso projeto. Utilizamos atributos ARIA para melhorar a acessibilidade. Por exemplo, aria-label, aria-labelledby e aria-describedby são usados para fornecer descrições textuais para elementos que de outra forma não teriam um nome acessível ou descrição.

Semântica

Utilizamos elementos HTML semânticos sempre que possível. Isso não só ajuda na acessibilidade, mas também melhora a SEO do nosso site. Por exemplo, usamos a tag <nav> para a barra de navegação, <main> para o conteúdo principal, <header> e <footer> para o cabeçalho e rodapé do site, respectivamente.

CSS

Nosso CSS é organizado e modular. Utilizamos uma metodologia como BEM ou SMACSS para nomear nossas classes. Isso torna nosso código mais legível e fácil de manter.

Responsividade
Nosso site é responsivo e funciona bem em todos os dispositivos. Usamos consultas de mídia para ajustar o layout dependendo do tamanho da tela.

Contraste de Cores

As cores que escolhemos têm contraste suficiente para que pessoas com deficiência visual possam ler o conteúdo facilmente.

Formulários

Para formulários, garantimos que cada campo de entrada tem uma etiqueta associada. Isso ajuda as tecnologias assistivas a entender o que cada campo de entrada faz.

Conclusão

Nosso projeto é um site responsivo que serve como um marketplace para pessoas com deficiência. Através do uso de HTML e CSS, criamos um site que é acessível, semântico, organizado, responsivo e visualmente agradável.

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

