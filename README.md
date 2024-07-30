### README

## Sobre o Projeto

Esse projeto foi desenvolvido com React, Next.js, TypeScript e Tailwind, 
utilizando algumas bibliotecas externas para manter o código mais organizado. 
As bibliotecas utilizadas são: Axios, SWR, React-Table, Heroicons e JSON-Server. 

Este projeto foi criado para o desafio de Front-End da Be Talent.

## Requisitos Gerais
- **Tecnologias:** React.js ou Vanilla JS (JavaScript puro)
- **Bibliotecas:** Permitido usar bibliotecas externas, recomendação de uso mínimo
- **Visualização:** Responsiva
- **Tabela:** Deve conter as seguintes colunas:
  - Imagem (thumb do/a usuário/a)
  - Nome
  - Cargo
  - Data de admissão
  - Telefone
- **Pesquisa:** Deve ser possível realizar pesquisa na tabela por meio de um input, permitindo filtrar dados por:
  - Cargo
  - Nome
  - Telefone
- **Formatação:** Datas e telefones devem ser formatadas no front-end e não na API.

## Acesso aos dados da API simulada
Para ter acesso aos dados que alimentarão o projeto, siga os passos abaixo:
1. Caso você não tenha, instale o pacote JSON-Server.
2. Clone este repositório do GitHub em sua máquina: [https://github.com/BeMobile/desafio-front-end](https://github.com/BeMobile/desafio-front-end).
3. Entre na pasta do projeto, em sua máquina, e execute o comando `json-server --watch db.json` para consumir a API simulada.
4. Inicie a estrutura e o desenvolvimento do projeto.

**Nota:** É necessário deixar o JSON-Server rodando no terminal para que os dados sejam visualizados no projeto. Caso você tenha problemas com o JSON-Server, tente rodá-lo com `npx json-server db.json` ou com `yarn json-server <path>/db.json`, onde `<path>` é o caminho completo até o diretório em que o arquivo `db.json` está localizado. Se mesmo assim não funcionar, busque ajuda na web.

## Critérios de Avaliação
Em ordem de relevância, avaliaremos:

- **Lógica de programação**
- **Organização:** Do código e dos arquivos
- **CSS do projeto**
- **README:** Deve conter, pelo menos, as seguintes informações:
  - Sobre o projeto
  - Pré-requisitos
  - Instruções para rodar a aplicação
- **Diferencial:** Uso de TypeScript

## Pré-requisitos

Tenha instaladas em sua máquina as ferramentas Git, Node.js e Yarn (ou outro gerenciador de pacotes de sua preferência) para poder trabalhar no projeto.

### Instruções para Rodar a Aplicação

1. Clone o repositório em seu computador:

    ```bash
    git clone git@github.com:CaiqueSilva12/betalent-desafio-front-end.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd betalent-desafio-front-end
    ```

3. Instale as dependências necessárias:

    ```bash
    npm install
    ```

4. Execute o JSON-Server em um terminal:

    ```bash
    npx json-server db.json
    ```

    Isso fará com que o JSON-Server execute na porta 3000.

5. Em outro terminal, execute o seguinte comando para rodar o front-end:

    ```bash
    npm run dev
    ```

    O front-end será executado na porta 3001.
