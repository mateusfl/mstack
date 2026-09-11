### Plano em várias fases

**Você é dono do plano, não do código. O plano é o entregável.** Escreva para a pessoa que vai executar o trabalho e para a pessoa que vai revisar as evidências.

1. Leia `references/plan.md` e `references/plan-template.md`. Siga o idioma do pedido e dos documentos de referência.
2. Pule o plano quando a mudança tiver uma ou duas etapas óbvias e tocar no máximo dois arquivos. Diga isso e pare.
3. Procure planos, RFCs, `openspec`, `docs`, `AGENTS.md` e `CLAUDE.md` no projeto. Registre os padrões úteis antes de escolher a estrutura.
4. Entenda o sistema com leitura direta. Use `how` para subsistemas desconhecidos. Use um subagente explorador apenas quando o volume ou a separação entre subsistemas justificar a delegação. Não exija paralelismo, um modelo específico ou uma contagem fixa de agentes.
5. Crie um arquivo único `NN-slug.md` para mudanças pequenas. Para várias fases, crie um diretório com `README.md` e apenas os documentos que se aplicarem. Use `diagnostico.md`, `arquitetura.md`, `implementacao.md` e `verificacao.md` como nomes padrão.
6. Escreva o plano em português quando o pedido ou as referências estiverem em português. Preserve caminhos, símbolos, comandos, payloads e termos técnicos no idioma original.
7. No `README.md`, resuma o objetivo, o status, o escopo, as decisões, a ordem de entrega e o critério de conclusão. Em `diagnostico.md`, descreva o comportamento atual e as lacunas. Em `arquitetura.md`, registre contratos, alternativas e escolhas. Em `implementacao.md`, divida o trabalho em fases pequenas. Em `verificacao.md`, defina testes, cenários reais e critérios de aceite.
8. Use `architect` somente para uma decisão estrutural que atravesse fronteiras ou tenha alternativas reais. Use protótipo somente para uma pergunta empírica. Não transforme essas ferramentas em etapas obrigatórias.
9. Use `/loop`, `/goal` e `show-me-your-work` somente quando a execução for autônoma, longa, monitorada ou precisar de um registro auditável. O plano comum termina antes da execução e não arma nenhuma dessas ferramentas.
10. Rode `node skills/mauri-mode/scripts/check-plan.mjs <README-ou-plano.md>`. Corrija todos os problemas que o script apontar.
11. Entregue o caminho do plano, o resumo das fases, as decisões abertas e a saída do verificador. Pare. A execução começa no pedido explícito do usuário.

**Verificação.** Cada fase precisa de uma checagem estática. Para browser, web ou Electron, o plano deve priorizar `control-lize` quando ele estiver no PATH e apontar para `../references/control-lize.md`. Mudanças com outra superfície executável também precisam de um cenário nessa superfície. O plano deve nomear o comando, o caminho de controle ou a lacuna.

**Resposta.** Informe o caminho do plano, o que foi decidido, o que ficou aberto, as fases e o comando de verificação. Não abra PR, não arme `/loop` e não inicie a implementação.
