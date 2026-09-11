# Plano

Produza um plano de implementação fundamentado na seção **Principles** da skill `mauri-mode`. O plano é o entregável. Não implemente.

## Escolha o formato

Pule o plano quando a mudança tem uma ou duas etapas óbvias e toca no máximo dois arquivos. Diga isso e pare.

Use um único arquivo `NN-slug.md` para uma mudança pequena. Use um diretório para uma mudança com várias fases ou áreas:

```text
NN-slug/
├── README.md
├── diagnostico.md
├── arquitetura.md
├── implementacao.md
└── verificacao.md
```

O `README.md` é a entrada do plano. Os demais arquivos só existem quando o assunto pede esse nível de detalhe. Não crie arquivos vazios.

## Siga o idioma e as referências do projeto

Escreva o plano no idioma dominante do pedido e dos documentos de referência. Preserve nomes de arquivos, símbolos, comandos, payloads e termos técnicos no idioma original.

Antes de inventar um formato, procure planos, RFCs, `openspec`, `docs`, `AGENTS.md` e `CLAUDE.md` no projeto. Preserve padrões que o projeto já usa. Para projetos com planos em fases, prefira a organização de `README.md`, diagnóstico, arquitetura, implementação e verificação.

## Entenda o problema

Abra uma todolist com uma entrada por etapa deste documento. O primeiro item é reler a seção **Principles** da `mauri-mode` por completo.

Registre no plano:

- o problema observado e por que ele importa;
- quem usa o resultado e o que essa pessoa percebe;
- o que entra e o que fica fora;
- as restrições técnicas e os padrões que precisam continuar;
- a definição de concluído, escrita como comportamento verificável.

Explore o código diretamente quando o repositório for pequeno ou a estrutura já estiver clara. Use um subagente explorador somente quando a leitura exceder o contexto útil da sessão ou atravessar subsistemas independentes. O explorador devolve caminhos de arquivos, convenções, dependências, comandos de teste e pontos de entrada. Não exija um modelo, uma quantidade de agentes ou paralelismo por padrão.

Use `how` para entender subsistemas desconhecidos. Use `why` para decisões históricas. Use `architect` somente quando a mudança atravessar fronteiras de função, alterar ownership ou tiver mais de uma forma estrutural plausível.

## Escreva o plano

Use estes documentos, na medida em que se aplicarem:

- `README.md` resume o objetivo, o status, o escopo, a ordem de leitura, as decisões e a ordem de entrega.
- `diagnostico.md` registra o comportamento atual, os arquivos consultados, as lacunas e os testes existentes.
- `arquitetura.md` registra o modelo de domínio, as fronteiras, os contratos, as alternativas e a escolha.
- `implementacao.md` divide o trabalho em fases pequenas e ordenadas. Cada fase nomeia arquivos, mudança, dependências e resultado esperado.
- `verificacao.md` define testes automatizados, execução no ambiente real, cenários do usuário e critérios de aceite.

Separe a fase quando ela misturar mais de uma decisão estrutural, mais de uma fronteira de sistema ou um volume que não caiba em uma revisão clara. Não crie fases para produzir cerimônia. A ordem padrão é diagnóstico, contrato ou modelo, integração, interface ou consumidores e verificação final. Ajuste essa ordem quando o risco do projeto exigir.

Inclua tabelas para comparar alternativas e checklists para trabalho executável. Use prosa curta para explicar decisões. Registre uma decisão junto do motivo e da evidência que a sustenta.

## Verifique o plano

Cada fase precisa de uma verificação estática e, quando houver uma superfície executável, de uma verificação nessa superfície. Para browser, web ou Electron, priorize `control-lize` quando ele estiver no PATH e siga `references/control-lize.md`. Use o caminho de controle local do projeto para outras superfícies antes de ferramentas genéricas. Se não houver caminho para a superfície tocada, registre a lacuna no plano.

Para bug fixes, reproduza primeiro, corrija a causa e repita o cenário na mesma superfície. Testes unitários protegem ramos. Eles não provam sozinhos que o defeito sumiu.

Use protótipo somente para uma pergunta empírica que o código pode responder. Use `/loop` somente para monitoramento, espera ou execução autônoma solicitada pelo usuário. Use `/goal`, `show-me-your-work` e subagentes verificadores somente quando a duração, o risco ou a ausência do usuário tornarem esse registro necessário. Um plano comum termina com um handoff humano.

Rode `node skills/mauri-mode/scripts/check-plan.mjs <README-ou-plano.md>`. Corrija todos os problemas que o script apontar.

## Entregue o plano

Informe o caminho do plano, o objetivo, as fases, as decisões abertas e os comandos de verificação. Pare depois de entregar o plano. A implementação começa apenas quando o usuário pedir.
