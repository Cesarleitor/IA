# Criador Mágico de Animação com IA

Este projeto é uma aplicação web desenvolvida com **HTML**, **CSS** e **JavaScript** que permite ao usuário descrever uma animação e receber automaticamente um código CSS gerado por IA, além de uma pré-visualização do resultado na própria interface.

A proposta do projeto é unir front-end com automação e IA, criando uma experiência interativa em que o usuário digita o efeito desejado e a aplicação exibe tanto o código gerado quanto a animação correspondente.

## Funcionalidades

- Campo de entrada para descrever a animação desejada
- Envio da solicitação para um webhook externo
- Exibição do código CSS gerado
- Exibição da prévia visual da animação
- Interface web simples e interativa
- Atualização dinâmica do conteúdo na tela

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Integração com webhook (n8n)

## Estrutura do projeto

- `index.html` → estrutura da página
- `styles.css` → estilização da interface
- `script.js` → lógica da aplicação e integração com o webhook
- `docs/` → arquivos auxiliares do projeto

## Como funciona

1. O usuário descreve a animação no campo de entrada.
2. Ao clicar no botão **Criar Mágica**, a aplicação envia a descrição para um webhook.
3. O sistema recebe uma resposta em formato JSON contendo:
   - código da animação
   - preview da animação
   - estilos CSS
4. O conteúdo é exibido dinamicamente na tela.

## Como executar

1. Baixe ou clone este repositório:
   ```bash
   git clone https://github.com/Cesarleitor/IA.git
