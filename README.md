# Projeto: Página Única com Formulário de Captura de Leads e Página de Produto

Este projeto consiste no desenvolvimento de uma página única (Single Page Application) que inclui um formulário de captura de leads e uma página de produto completa. O objetivo é proporcionar uma experiência de usuário fluida e responsiva, seguindo as especificações técnicas e de design estabelecidas.

## Descrição Geral

A aplicação é composta por duas partes principais. A primeira é o **Formulário de Captura de Leads**, posicionado na tela inicial da página. Ele solicita informações básicas do usuário, como nome, e-mail e telefone, aplicando validações e máscaras adequadas para os campos de e-mail e telefone no formato brasileiro (exemplo: (99) 99999-9999). Após o envio bem-sucedido do formulário, o conteúdo é substituído automaticamente pela página de produto, que saúda o usuário pelo nome fornecido.

A segunda parte é a **Página de Produto**, que apresenta informações detalhadas sobre o produto oferecido. Ela inclui diversas seções, como um header fixo (sticky header) com animação ao rolar a página, uma seção hero com carrossel de imagens e thumbnails indexadas, uma seção sobre o produto com textos explicativos e imagens, uma galeria de imagens com modal para visualização em tela cheia, um carrossel de depoimentos com slider manual, um timer de contagem regressiva para uma promoção especial e um footer com informações e links para redes sociais e políticas.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **HTML5** para a estruturação semântica do conteúdo.
- **CSS3** para estilização e responsividade, incluindo estilos personalizados.
- **JavaScript (Vanilla JS)** para adicionar interatividade e funcionalidades dinâmicas.
- **Bootstrap 5** como framework CSS para facilitar o design responsivo e utilizar componentes pré-estilizados.

## Funcionalidades Detalhadas

### Formulário de Captura de Leads

- **Campos Requeridos**: Nome, e-mail e telefone.
- **Validações e Máscaras**: Verificação do formato de e-mail e aplicação de máscara no campo de telefone conforme padrão brasileiro.
- **Ação após Envio**: Substituição do formulário pela página de produto e exibição de uma mensagem de boas-vindas personalizada com o nome do usuário.

### Página de Produto

- **Sticky Header**: Cabeçalho fixo no topo da página que aplica uma animação ao reduzir de tamanho e alterar o background durante a rolagem.
- **Hero Section**: Carrossel de imagens com thumbnails clicáveis que permitem a troca da imagem principal.
- **Sobre o Produto**: Seção com descrição detalhada do produto, incluindo textos explicativos e imagens ilustrativas.
- **Galeria**: Grid de imagens menores que, ao serem clicadas, abrem um modal centralizado com a opção de navegar entre as imagens.
- **Depoimentos**: Carrossel/Slider de depoimentos com slider manual, permitindo navegação por arraste (mouse ou toque), paginação e botões de próximo/anterior.
- **Timer de Contagem Regressiva**: Contador decrescente exibindo minutos e segundos até o término de uma promoção, acompanhado de um botão de chamada para ação.
- **Footer**: Rodapé com informações adicionais, links para redes sociais e políticas fictícias.

## Estrutura de Pastas

A organização dos arquivos no projeto é a seguinte:

```
/projeto
├── index.html
├── css
│   └── styles.css
├── js
│   └── scripts.js
└── imagens
    ├── banner1.jpg
    ├── banner2.jpg
    ├── produto1.jpg
    ├── produto2.jpg
    ├── galeria1.jpg
    ├── galeria2.jpg
    └── depoimentos
        ├── cliente1.jpg
        └── cliente2.jpg
```
## Considerações Técnicas

- **Código Limpo e Semântico**: O projeto foi desenvolvido utilizando boas práticas de codificação, com HTML semântico e CSS organizado. Comentários foram adicionados ao código para facilitar a compreensão e manutenção futura.

- **Interatividade e Animações**: Foram implementadas animações suaves e interações intuitivas para melhorar a experiência do usuário, como a animação do sticky header e a interatividade nos carrosséis e galerias.

- **Validações e Máscaras**: As validações nos campos do formulário garantem que os dados inseridos estejam no formato correto, e as máscaras aplicadas facilitam o preenchimento, especialmente no campo de telefone.

- **Responsividade e Design**: O design da página foi concebido para ser responsivo, adaptando-se a diferentes tamanhos de tela, desde dispositivos móveis até desktops. O uso do Bootstrap auxiliou na criação de um layout consistente e atraente.

## Testes Realizados

- **Validação de Formulários**: Foram realizados testes para garantir que as validações e máscaras estão funcionando corretamente nos campos do formulário de captura de leads.

- **Interatividade**: Testes de usabilidade foram feitos para assegurar que as interações nos carrosséis, galerias e outros elementos dinâmicos estão operando conforme o esperado.

- **Responsividade**: A página foi testada em diferentes dispositivos e tamanhos de tela para verificar a adaptabilidade do layout e a manutenção da usabilidade.

- **Desempenho**: Utilizando a ferramenta do Google PageSpeed Insights, o desempenho da página foi avaliado e otimizado para atender aos critérios estabelecidos.
