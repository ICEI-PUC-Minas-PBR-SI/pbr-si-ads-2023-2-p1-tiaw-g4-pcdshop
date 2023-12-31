# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Cadastro no Sistema**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, data de nascimento, email, telefone, senha e confirma senha e clica no botão "Cadastrar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela inicial.
**Requisitos associados** | RF-001 / RF-013 / RF-005
**Resultado esperado** | Criar um cadastro e direcionar para o login.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro: nome, data de nascimento, email, telefone, senha.
**Resultado obtido** | Sucesso.


**Caso de Teste** | **CT02 - Logar no sistema**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa email e senha.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam. <br> 3) Caso a aplicação seja verdadeira  e direciona o usuário para a tela de inicial.
**Requisitos associados** | RF-002
**Resultado esperado** | Logar no sistema e direcionar para a tela inicial
**Dados de entrada** | Inserção de dados no email e senha.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Adicionar um item ao carrinho parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Usuario clica em meu perfil 2) Na tela de alteração de perfil pode alterar os dados de cadastro e senha.
**Requisitos associados** | RF-006
**Resultado esperado** | Gerar um pop-up dizendo dados alterados com sucesso ou informando que a senha foi alterada com sucesso.
**Dados de entrada** | Usuario altera os dados cadastrais.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 - Adicionar um item ao carrinho parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Usuario clica em ver o produto na tela inical 2) logo em seguida na tela do item clica em adicionar ao carrinho.
**Requisitos associados** | RF-011 e RF-014
**Resultado esperado** | Gerar um pop-up para levar o usuario ao carrinho de compras e atualizar o carrinho com o produto desejado.
**Dados de entrada** | usuario escolhe o produto.
**Resultado obtido** | Sucesso.


**Caso de Teste** | **CT09 - Adicionar um item ao carrinho parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Ao ser redirecionado ao carrinho, usuario pode adiconar mais itens atraves de um botão de "+" ou decrementar por um botão de "-" ou deletar pelo "x"
**Requisitos associados** | RF-011 e RF-014
**Resultado esperado** | Que mude a quantidade de item desejado pelo metodo do CRUD e que o item seja deletado ao clicar n opção.
**Dados de entrada** | Quantidade de itens desejadas.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Adicionar e Remover um item aos favoritos **
 :--------------: | ------------
**Procedimento**  | 1) Usuário deve clicar no botão de coração para adicionar o produto aos favoritos ode ele será redirecionado, assim que redirecionado o usuário pode remover dos favoritos apertando o botão.
**Requisitos associados** | RF-15
**Resultado esperado** | Ter um item ou não na aba de favoritos.
**Dados de entrada** | Quantidade de itens desejadas.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 & CT7 - Adicionar/Editar/Remover um item como vendedor & Acompanhar o produto pela página de produtos e pelo histórico de vendas/compras **
 :--------------: | ------------
**Procedimento**  | 1) Usuário deve clicar no botão de criar anúncio para criar seu produto, assim que o produto for criado, será automaticamente enviado para a página de histórico de vendas e de compras e para a página de todos os produtos
**Requisitos associados** | RF-09
**Resultado esperado** | Cadastrar um novo produto no nosso site
**Dados de entrada** | Informações do produto
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 & CT8 - Avaliar um produto cadastrado  **
 :--------------: | ------------
**Procedimento**  | 1) Usuário deve clicar na quantidade de estrelas que ela avalia o produto, para que o comprador escolha o melhor produto para ele.
**Requisitos associados** | RF-04
**Resultado esperado** | Avaliar um produto
**Dados de entrada** | Quantidade de estrelas
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 


|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |





|*Caso de Teste*                                 |*TC-03 & 04 - Adicionando um item ao carrinho*                                         |
|---|---|
|Requisito Associado | RF-011 e RF-014 -A aplicação deverá possuir um processo de compra de produtos incluindo checkout e carrinho e O Sistema deverá ter uma tela de descrição do item que leva pro carrinho ao clicar em comprar.|
|Link do vídeo do teste realizado: |https://drive.google.com/file/d/1BseLOmud9U5R1r-HRT3Hj1Z44XG6IDmJ/view?usp=drive_link| 

|*Caso de Teste*                                 |*TC-03 & 04 - Adicionando e removendo um item aos favoritos *                                         |
|---|---|
|Requisito Associado | RF-15 -A aplicação deverá possuir um processo de favoritar e remover um produto da aba de favoritos|
|Link do vídeo do teste realizado: https://drive.google.com/file/d/1Ph5nKrcwaOWSAnyw77swwsNUBFciVRPD/view?usp=sharing| 

|*Caso de Teste*                                 |*TC-06 & 07 - Adicionar/Editar/Remover um item como vendedor & Acompanhar o produto pela página de produtos e pelo histórico de vendas/compras *                        |
|---|---|
|Requisito Associado |O vendedor poderá criar cadastro, anunciar, editar e excluir produtos|
|Link do vídeo do teste realizado: https://drive.google.com/file/d/10hQJ3SLlMFYq-XwhJuh5EgC-BP5zgwRB/view|

|*Caso de Teste*                                 |*TC-08 -  Avaliar um produto cadastrado *                                         |
|---|---|
|Requisito Associado | O Sistema deverá ter um sistema de avaliação de produto e perfil |
|Link do vídeo do teste realizado: https://drive.google.com/file/d/1DHhw2-MYikbfPA5PadejVhjh7khqnJTP/view?usp=sharing|



## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



