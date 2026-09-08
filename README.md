# mstack

Stack pessoal de skills e playbooks para o Cursor. A porta de entrada é o [`/mauri-mode`](./skills/mauri-mode/SKILL.md).

O conteúdo veio da [pstack](https://github.com/cursor/plugins/tree/main/pstack) da Lauren Tan ([poteto](https://x.com/poteto)): princípios, roteamento e fan-out multi-modelo. Este repositório é um recorte dessa pasta, não um fork do monorepo `cursor/plugins`. Os nomes foram trocados (`pstack` → `mstack`, `poteto-mode` → `mauri-mode`) e o plugin é instalado localmente.

Uso no dia a dia no [Lize Edu](https://github.com/LizeEdu/lizeedu) (Django, provas, OMR, integrações). Overlay de produto (OpenSpec, testes Docker, `CLAUDE.md`) fica no repositório do produto, não aqui.

Respostas para o humano em português. Skills e prompts internos continuam em inglês, como na pstack.

## Instalar

O Cursor recusa symlink cujo alvo fica fora de `~/.cursor/plugins/local`. Copie a árvore:

```bash
mkdir -p ~/.cursor/plugins/local/mstack
rsync -a --delete --exclude '.git/' ~/Projects/mstack/ ~/.cursor/plugins/local/mstack/
```

Depois: **Developer: Reload Window**. Em Customize → Plugins, a mstack deve aparecer como plugin local.

Depois de editar este repo, rode o `rsync` de novo e recarregue. Sem isso a cópia local fica velha.

Não instale a pstack do marketplace ao mesmo tempo. As folhas (`how`, `why`, `architect`, …) têm o mesmo nome e o agente mistura as duas.

Dependência opcional: plugin [`cursor-team-kit`](https://cursor.com/marketplace) (`/deslop`; `control-ui` e `control-cli` só como fallback da ordem em `/mauri-mode`). A mstack referencia essas skills e não as empacota.

## Modelos

Os papéis (código, julgamento, painéis de review) estão em `~/.cursor/rules/mstack-models.mdc`, always-on. A cópia atual é o mapeamento que eu já usava na pstack: Grok 4.5 low no trabalho de análise, Composer no exploratório, Sol no hillclimb, Opus no mais difícil. Sem Fable 5.

Para mudar: [`/setup-mstack`](./skills/setup-mstack/SKILL.md). Vale em sessões novas.

## Uso

No começo da tarefa:

```text
/mauri-mode o envio Perseus da turma some para professor com permissão. reproduza, corrija e verifique.
```

O modo escolhe um playbook, copia os passos no todo e chama as outras skills. É sticky: continua no chat até você pedir para sair (considere invocar a skill como "modo" na janela de agentes do Cursor para garantir isso).

O guia: [docs/guide](./docs/guide/README.md).

### Playbooks

| playbook | quando |
|---|---|
| [investigation](./skills/mauri-mode/playbooks/investigation.md) | pergunta só leitura |
| [bug fix](./skills/mauri-mode/playbooks/bug-fix.md) | defeito: reproduzir, causa raiz, evidência em runtime |
| [perf](./skills/mauri-mode/playbooks/perf-issue.md) | lentidão medida contra baseline |
| [hillclimb](./skills/mauri-mode/playbooks/hillclimb.md) | melhorar uma métrica em loop, um commit por ganho |
| [runtime forensics](./skills/mauri-mode/playbooks/runtime-forensics.md) | sintoma ao vivo (leak, CPU ociosa, glitch) |
| [trace forensics](./skills/mauri-mode/playbooks/trace-forensics.md) | artefato de profiling já capturado |
| [feature](./skills/mauri-mode/playbooks/feature.md) | comportamento novo, a partir de um formato de dados nomeado |
| [refactoring](./skills/mauri-mode/playbooks/refactoring.md) | muda estrutura, preserva comportamento |
| [prototype](./skills/mauri-mode/playbooks/prototype.md) | rascunho para decidir barato |
| [visual parity](./skills/mauri-mode/playbooks/visual-parity.md) | UI pixel a pixel entre duas implementações |
| [authoring a skill](./skills/mauri-mode/playbooks/authoring-a-skill.md) | escrever ou editar um `SKILL.md` |
| [eval](./skills/mauri-mode/playbooks/eval.md) | testar mudança de skill no comportamento do agente, às cegas |
| [babysit](./skills/mauri-mode/playbooks/babysit.md) | PR ou stack até merge-ready |
| [shipping](./skills/mauri-mode/playbooks/shipping.md) | verificar uma stack verde e aterrissar o trecho contínuo verificado |
| [autonomous run](./skills/mauri-mode/playbooks/autonomous-run.md) | tarefa longa até um predicado, sem parar |
| [orchestrate](./skills/mauri-mode/playbooks/orchestrate.md) | programa de vários dias, muitos PRs, frota de subagentes |
| [autopilot-full](./skills/mauri-mode/playbooks/autopilot-full.md) | fila de PRs independentes até merge |
| [autopilot-stack](./skills/mauri-mode/playbooks/autopilot-stack.md) | fila linear para você revisar e aterrissar |
| [session pickup](./skills/mauri-mode/playbooks/session-pickup.md) | retomar trabalho de outro agente |
| [pause safely](./skills/mauri-mode/playbooks/pause-safely.md) | suspender limpo para retomar depois |
| [multi-phase plan](./skills/mauri-mode/playbooks/multi-phase-plan.md) | trabalho em fases ou PRs empilhados |
| [worktree cleanup](./skills/mauri-mode/playbooks/worktree-cleanup.md) | podar worktrees mortos, com trava de segurança |
| [opening a pr](./skills/mauri-mode/playbooks/opening-a-pr.md) | abrir um PR pronto, no fim de todo playbook de código |

Todo playbook termina em [abrir um PR](./skills/mauri-mode/playbooks/opening-a-pr.md) quando há mudança de código.

### Skills avulsas

O `/mauri-mode` já chama a maioria. Direto, quando quiser uma só:

| skill | quando |
|---|---|
| [`/how`](./skills/how/SKILL.md) | como um subsistema funciona |
| [`/why`](./skills/why/SKILL.md) | por que foi feito assim (git, tickets, docs, chat, observabilidade) |
| [`/architect`](./skills/architect/SKILL.md) | cruzar fronteira de função: tipos e forma primeiro |
| [`/arena`](./skills/arena/SKILL.md) | N tentativas em paralelo, ficar com o melhor |
| [`/swarm`](./skills/swarm/SKILL.md) | N fatias ou corridas, um relatório só |
| [`/interrogate`](./skills/interrogate/SKILL.md) | vários modelos tentando quebrar o diff |
| [`/tdd`](./skills/tdd/SKILL.md) | teste que falha primeiro, depois o conserto |
| [`/unslop`](./skills/unslop/SKILL.md) | tirar trejeito de IA da prosa |
| [`/setup-mstack`](./skills/setup-mstack/SKILL.md) | mudar os modelos por papel |
| [`/make-bot-ui`](./skills/make-bot-ui/SKILL.md) | página ou dashboard que acorda um Grok Bot por webhook |
| [`/reflect`](./skills/reflect/SKILL.md) | virar lição da sessão em edição de skill |
| [`/automate-me`](./skills/automate-me/SKILL.md) | gerar um `-mode` a partir do seu histórico |

Lista completa no [guia](./docs/guide/README.md) e em [`skills/`](./skills/).

## Subagentes

[`mauri-agent`](./agents/mauri-agent.md) lê o `mauri-mode` inteiro antes de trabalhar. Skills de fluxo (`how`, `why`, `interrogate`, `reflect`, `swarm`) escolhem o próprio `subagent_type` e o modelo do `mstack-models.mdc`. Não force um modelo único por user rule.

[Comment Sicko](./agents/comment-sicko.md) entra via [`/no-comments`](./skills/no-comments/SKILL.md).

## O que não vem neste repo

- `/deslop`, `control-cli`, `control-ui`: `cursor-team-kit` (prova ao vivo só depois de `verify-*` e um `control-*` no PATH)
- `/create-skill`: built-in do Cursor
- Overlay Lize (testes `scripts/`, OpenSpec, `CLAUDE.md`): repositório do produto
- Pack [benny](./automations/benny/): automações Slack, não registrado como slash skill

## Licença

MIT (a mesma da pstack).
