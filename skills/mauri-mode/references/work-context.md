# Contexto de trabalho

Use esta referência antes de editar código, iniciar uma verificação ou abrir uma PR. O ambiente pode ser local ou em nuvem. O agente deve descobrir o contexto atual a partir do checkout e das ferramentas disponíveis, nunca inferi-lo pelo texto da tarefa ou por um turno anterior.

## Diagnóstico mínimo

```bash
pwd
git branch --show-current
git status --short
git worktree list
git remote -v
```

Registre mentalmente ou no relatório:

- diretório e checkout efetivos;
- branch atual e se ela corresponde à tarefa;
- alterações locais, inclusive alterações que não pertencem à tarefa;
- worktrees e agentes que podem compartilhar arquivos;
- remotes e ferramentas de forge disponíveis;
- se a aplicação, credenciais e o `control-lize` estão acessíveis neste ambiente.

Se o contexto continuar incerto, trate-o como desconhecido e investigue. Não assuma que uma branch, processo, servidor, sessão de navegador ou arquivo não commitado de outro ambiente está disponível aqui.

## Fluxo padrão

O caminho normal é:

1. descobrir o contexto e preservar alterações alheias;
2. usar uma única branch da tarefa com nome convencional, como `feat/<slug>`, `fix/<slug>`, `refactor/<slug>`, `perf/<slug>` ou `chore/<slug>`, criando-a somente quando o checkout estiver seguro para isso;
3. implementar features, fixes e ajustes na branch, com commits locais quando ajudarem a recuperar ou revisar o trabalho;
4. verificar testes, lint e o comportamento real no mesmo ambiente;
5. para navegador, web ou Electron, priorizar `control-lize` e repetir `screenshot -> estado -> decisão -> ação -> screenshot`;
6. revisar diff, status e evidências na branch;
7. só então abrir uma única PR para essa branch, caso o usuário tenha autorizado ou pedido essa etapa.

Não abra PR para marcar etapas intermediárias. Não crie PRs empilhadas, não use Graphite e não rebaseie a tarefa em uma cadeia de PRs no fluxo padrão. Uma PR não é autorização implícita para continuar até merge.

Commits intermediários são aceitáveis na branch. Eles não obrigam a criar PRs intermediárias nem a dividir a tarefa artificialmente.

## Local e nuvem

No ambiente local, preserve o checkout do usuário, confirme alterações prévias antes de editar e use os servidores e credenciais locais disponíveis. Não envie o trabalho para a nuvem apenas por hábito.

No ambiente em nuvem, use o checkout e os processos acessíveis ao agente, confirme a branch e deixe explícitos branch, commits e evidências produzidos. Verifique no mesmo ambiente sempre que a aplicação ou a autenticação depender dele.

Ao continuar um trabalho em outro ambiente, repita o diagnóstico. Releia status e diff, confirme a branch, descubra novamente os processos e reestabeleça a sessão do `control-lize`. Se uma validação só puder ocorrer no outro ambiente, registre isso como limite da evidência e não a apresente como aprovada.

## Abertura de PR

`playbooks/opening-a-pr.md` é uma etapa explícita, acionada por pedido como "abra uma PR", "crie a PR" ou por um fluxo de entrega que o usuário autorizou. Antes dela, a branch deve estar validada e sem alterações alheias misturadas.

O resultado dessa etapa é uma única PR para a branch atual. Se houver mais de uma branch ou PR proposta, pare e preserve a branch validada até o usuário escolher um fluxo excepcional.
