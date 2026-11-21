# Farol da Aprovação — controle de estudos para concurso (versão 5)

Antigo Método Calango. Funciona no celular e no computador, instala como app e funciona sem internet.
Os dados ficam só no aparelho; faça backups em Registro → Exportar backup.

## O que tem

| Aba | Para que serve |
|---|---|
| Hoje | Contagem regressiva da prova, o que estudar hoje, revisões do dia, cadernos em andamento e caderno de erros |
| Estudar | Cronômetro por disciplina e assunto (teoria, exercícios, revisão); agenda revisões em 1, 7 e 30 dias |
| Questões | Cadernos linkados (Método Camocim, TecConcursos, Qconcursos), simulados com nota de corte e caderno de erros |
| Edital | Concurso, banca, data da prova, nota de corte, disciplinas com peso e nível, assuntos do edital e plano semanal |
| Evolução | Onde melhorar, gráfico semana a semana (horas e % de acerto), horas × meta, desempenho por disciplina e assuntos mais fracos |
| Registro | Lançamento manual, histórico e backup |

## Integração com o Método Camocim

No Camocim, o botão **Enviar ao Farol** (em cada caderno e no resultado do simulado) abre o Farol com o resultado.
O Farol pergunta em qual disciplina lançar e, se você quiser, anota as questões erradas no caderno de erros.
O endereço do Farol fica no `config.js` do Camocim (`farolUrl`).

## Arquivos

`index.html`, `manifest.webmanifest`, `sw.js`, `LEIA-ME.md` e a pasta `icons` (4 ícones novos do farol).

## Atualizar no GitHub (repositório M-todo-Calango)

1. Add file → Upload files → arraste todos os arquivos e a pasta `icons` → Commit changes.
2. Espere o github-pages ficar verde. O app instalado se atualiza sozinho ao abrir.
3. Os dados do Método Calango são trazidos automaticamente na primeira abertura.
