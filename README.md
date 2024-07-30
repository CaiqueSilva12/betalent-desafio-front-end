README
Sobre o Projeto
Esse projeto foi desenvolvido com React, Next.js e TypeScript, utilizando algumas bibliotecas externas para manter o código mais organizado. As bibliotecas utilizadas são: Axios, SWR, React-Table, Heroicons e JSON-Server. Este projeto foi criado para o desafio de Front-End da Be Talent.

Requisitos Gerais
Deve-se utilizar React.js ou Vanilla JS (JavaScript puro) para construir o projeto.
É permitido utilizar bibliotecas externas, mas recomenda-se que seja o mínimo possível.
A visualização deve ser responsiva.
A tabela deve conter as seguintes colunas:
Imagem (thumb do/a usuário/a);
Nome;
Cargo;
Data de admissão;
Telefone.
Deve ser possível realizar pesquisa na tabela por meio de um input. O input de pesquisa deve permitir filtrar dados por cargo, nome e telefone.
Datas e telefones devem ser formatadas no front-end e não na API.
Acesso aos Dados da API Simulada
Para ter acesso aos dados que alimentarão o projeto, siga os passos abaixo:

Caso você não tenha, instale o pacote JSON-Server.
Clone este repositório do GitHub em sua máquina: https://github.com/BeMobile/desafio-front-end.
Entre na pasta do projeto e, por meio da linha de comando, execute o comando json-server --watch db.json para consumir a API simulada.
Inicie a estrutura e o desenvolvimento do projeto.
Nota: É necessário deixar o JSON-Server rodando no terminal para que os dados sejam visualizados no projeto. Caso você tenha problemas com o JSON-Server, tente rodá-lo com npx json-server db.json ou com yarn json-server <path>/db.json, em que <path> é o caminho completo até o diretório em que o arquivo db.json está localizado. Se mesmo assim não funcionar, busque ajuda na web.

Critérios de Avaliação
Em ordem de relevância, avaliaremos:

Lógica de programação.
Organização (do código e dos arquivos).
CSS do projeto.
README, que deve conter, pelo menos, as seguintes informações: sobre o projeto, pré-requisitos e instruções para rodar a aplicação.
Diferencial: Uso de TypeScript.

Pré-requisitos
Tenha instaladas em sua máquina as ferramentas Git, Node.js e Yarn (ou outro gerenciador de pacotes de sua preferência) para poder trabalhar no projeto.\

Instruções para Rodar a Aplicação
Clone o repositório em seu computador:

git clone https://github.com/BeMobile/desafio-front-end.git

Acesse a pasta do projeto:

cd betalent-desafio-front-end

Instale as dependências necessárias:

npm install

Execute o JSON-Server em um terminal:

npx json-server db.json

Isso fará com que o JSON-Server execute na porta 3000.

Em outro terminal, execute o seguinte comando para rodar o front-end:

npm run dev

O front-end será executado na porta 3001.
