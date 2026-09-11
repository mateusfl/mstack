#!/usr/bin/env node
import fs from "node:fs";

const file = process.argv[2];
if (!file) {
	console.error("Uso: node check-plan.mjs <README-ou-plano.md>");
	process.exit(2);
}

const text = fs.readFileSync(file, "utf8");
const lines = text.split(/\r?\n/);
const problems = [];
const fail = (line, message) => problems.push(`${file}:${line}: ${message}`);

if (!/^# [^#].+/m.test(text)) fail(1, "falta um título H1");

const headings = [...text.matchAll(/^## (.+)$/gm)].map((match) => match[1].trim());
for (const heading of ["Escopo", "Decisões desta versão", "Ordem de entrega", "Critério de conclusão"]) {
	if (!headings.includes(heading)) fail(1, `falta a seção "${heading}"`);
}

if (!/verifica|teste|critério de aceite|cenário real|comando/i.test(text)) {
	fail(1, "o plano não descreve verificação");
}

const forbiddenInDefaultPlan = [
	[/Ten lanes on `grok-4\.6-fast-xhigh`/i, "matriz fixa de dez lanes"],
	[/Arm the program/i, "checklist operacional de programa"],
	[/git show origin\/main:/i, "releitura operacional de trunk"],
	[/arm(?:e|ar)?[^\n]*\/loop/i, "armação obrigatória de /loop"],
	[/arm(?:e|ar)?[^\n]*\/goal/i, "armação obrigatória de /goal"],
];
for (const [pattern, label] of forbiddenInDefaultPlan) {
	if (pattern.test(text)) fail(1, `o plano comum não deve impor ${label}`);
}

for (const [index, line] of lines.entries()) {
	if (/[\u2013\u2014]/.test(line)) fail(index + 1, "travessão longo");
	if (/[\u2018\u2019\u201c\u201d]/.test(line)) fail(index + 1, "aspas curvas");
}

if (problems.length) {
	for (const problem of problems) console.error(problem);
	process.exit(1);
}

console.log(`${file}: plano válido`);
