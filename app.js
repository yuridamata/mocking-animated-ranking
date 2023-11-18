const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/quiz/:id", (req, res) => {
  res.send({
    id: 1,
  });
});

app.get("/quiz/:id", (req, res) => {
  res.send({
    id: 1,
    nome: "Quiz BB Week Dungeons & Data",
    perguntas: [
      {
        id: 1,
        descricao:
          "O que é Ciência de Dados? É o estudo de onde as informações vêm, o que representam e como podem ser transformadas em um recurso valioso.",
        opcoes: [
          { id: 1, descricao: "Estudo de dados" },
          { id: 2, descricao: "Estudo de máquinas" },
          { id: 3, descricao: "Estudo de redes" },
          { id: 4, descricao: "Estudo de sistemas" },
        ],
      },
      {
        id: 2,
        descricao:
          "O que é Aprendizado de Máquina? É um método de análise de dados que automatiza a construção de modelos analíticos.",
        opcoes: [
          { id: 1, descricao: "Análise de dados" },
          { id: 2, descricao: "Análise de máquinas" },
          { id: 3, descricao: "Análise de redes" },
          { id: 4, descricao: "Análise de sistemas" },
        ],
      },
      {
        id: 3,
        descricao:
          "O que é Big Data? Refere-se a conjuntos de dados extremamente grandes, complexos e que demandam processamento em escala.",
        opcoes: [
          { id: 1, descricao: "Conjuntos de dados pequenos" },
          { id: 2, descricao: "Conjuntos de dados médios" },
          { id: 3, descricao: "Conjuntos de dados grandes" },
          { id: 4, descricao: "Conjuntos de dados complexos" },
        ],
      },
      {
        id: 4,
        descricao:
          "O que é Deep Learning? É uma técnica de aprendizado de máquina baseada em redes neurais artificiais.",
        opcoes: [
          { id: 1, descricao: "Técnica de redes neurais" },
          { id: 2, descricao: "Técnica de redes sociais" },
          { id: 3, descricao: "Técnica de redes complexas" },
          { id: 4, descricao: "Técnica de redes profundas" },
        ],
      },
      {
        id: 5,
        descricao:
          "O que são Algoritmos? São conjuntos de instruções bem definidas para resolver um problema ou realizar uma tarefa.",
        opcoes: [
          { id: 1, descricao: "Instruções indefinidas" },
          { id: 2, descricao: "Instruções complexas" },
          { id: 3, descricao: "Instruções definidas" },
          { id: 4, descricao: "Instruções aleatórias" },
        ],
      },
      {
        id: 6,
        descricao:
          "O que é Visualização de Dados? É a representação gráfica de informações e dados para facilitar a compreensão.",
        opcoes: [
          { id: 1, descricao: "Representação textual" },
          { id: 2, descricao: "Representação gráfica" },
          { id: 3, descricao: "Representação sonora" },
          { id: 4, descricao: "Representação tátil" },
        ],
      },
      {
        id: 7,
        descricao:
          "O que é Mineração de Dados? É o processo de descobrir padrões ou conhecimento útil a partir de grandes conjuntos de dados.",
        opcoes: [
          { id: 1, descricao: "Processo de ocultar padrões" },
          { id: 2, descricao: "Processo de descobrir padrões" },
          { id: 3, descricao: "Processo de criar padrões" },
          { id: 4, descricao: "Processo de alterar padrões" },
        ],
      },
      {
        id: 8,
        descricao:
          "O que é IA (Inteligência Artificial)? É a capacidade de um sistema realizar atividades que normalmente exigiriam inteligência humana.",
        opcoes: [
          { id: 1, descricao: "Capacidade humana" },
          { id: 2, descricao: "Capacidade artificial" },
          { id: 3, descricao: "Capacidade inteligente" },
          { id: 4, descricao: "Capacidade genérica" },
        ],
      },
      {
        id: 9,
        descricao:
          "O que é Análise Preditiva? É o processo de usar dados, modelos estatísticos e algoritmos para prever eventos futuros.",
        opcoes: [
          { id: 1, descricao: "Previsão do passado" },
          { id: 2, descricao: "Previsão do presente" },
          { id: 3, descricao: "Previsão do futuro" },
          { id: 4, descricao: "Previsão indefinida" },
        ],
      },
      {
        id: 10,
        descricao:
          "O que é Estatística? É a ciência que lida com a coleta, análise, interpretação e apresentação de dados.",
        opcoes: [
          { id: 1, descricao: "Ciência dos números" },
          { id: 2, descricao: "Ciência dos gráficos" },
          { id: 3, descricao: "Ciência dos dados" },
          { id: 4, descricao: "Ciência das probabilidades" },
        ],
      },
    ],
  });
});

app.post(
  "/participacao/:id/responder/:idPergunta/opcao/:idOpcao",
  (req, res) => {
    const idParticipacao = req.params.id;
    const idPergunta = req.params.idPergunta;
    const idOpcao = req.params.idOpcao;

    const gabarito = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];

    res.send({
      idParticipacao,
      idPergunta,
      idOpcao,
      correta: gabarito[idPergunta - 1] == idOpcao,
    });
  }
);

app.get("/participacao/:id/resultado", (req, res) => {
  return res.send({
    participacaoId: 2,
    quantidadePerguntasCorretas: 8,
    quantidadeTotalPerguntas: 10,
    dataInicio: "2023-11-18T15:47:21.811393",
    dataFim: "2023-11-18T15:49:28.307762",
    pontuacaoRespostasCorretas: 80,
    penalidadeRespostasIncorretas: 18,
    multiplicadorTempo: 4.76,
    pontuacaoTotalRespostas: 62,
    pontuacaoTotalTempo: 233,
    pontuacaoTotal: 295,
  });
});

app.listen(port, cors(), () => {
  console.log(`Example app listening on port ${port}`);
});
