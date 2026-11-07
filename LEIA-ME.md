# Caderno de Estudos — app (PWA)

App para controlar horas de estudo para concurso: cronômetro por disciplina, plano semanal por peso × nível de conhecimento, registro de questões e diagnóstico de onde melhorar. Funciona offline e instala na tela inicial do celular ou do computador.

## Conteúdo da pasta

| Arquivo | Para que serve |
|---|---|
| `index.html` | O app inteiro |
| `manifest.webmanifest` | Nome, ícone e cores do app instalado |
| `sw.js` | Faz o app funcionar sem internet |
| `icons/` | Ícones do app |

## Publicar grátis no GitHub Pages (uma vez só, ~10 minutos)

O app precisa estar num endereço `https://` para ser instalável. O jeito mais simples:

1. Crie uma conta em https://github.com (se ainda não tiver).
2. Clique em **New repository**, dê o nome `caderno-estudos`, marque **Public** e clique em **Create repository**.
3. Na página do repositório, clique em **uploading an existing file** e arraste **todo o conteúdo desta pasta** (incluindo a pasta `icons`). Clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em *Branch*, escolha `main` e a pasta `/ (root)`. Clique em **Save**.
5. Aguarde 1 a 2 minutos. O endereço aparece no topo da página, no formato `https://SEU-USUARIO.github.io/caderno-estudos/`.

Alternativa sem conta no GitHub: arraste a pasta inteira em https://app.netlify.com/drop.

## Instalar

- **Android (Chrome):** abra o endereço, toque no botão **Instalar app** no topo ou no menu ⋮ → **Instalar app**.
- **iPhone (Safari):** abra o endereço, toque em **Compartilhar** → **Adicionar à Tela de Início**.
- **Computador (Chrome/Edge):** clique no ícone de instalar na barra de endereço ou no botão **Instalar app**.

Depois de aberto uma vez, o app funciona sem internet.

## Seus dados

- Ficam guardados **só no aparelho** onde você usa o app. Celular e computador têm dados separados.
- Faça **backup** pela aba **Registro → Exportar backup (.json)**. Para levar os dados a outro aparelho, use **Importar backup** lá.
- Desinstalar o app ou limpar os dados do navegador apaga o que está no aparelho. Por isso, exporte backups com frequência.

## Atualizar o app

Substitua o `index.html` no repositório e, em `sw.js`, troque `caderno-v1` por `caderno-v2` (e assim por diante). O app se atualiza na próxima vez que for aberto com internet.
