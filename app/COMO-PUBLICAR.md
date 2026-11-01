# Como publicar mudanças na tela do HFM

- `app/App.html`  = PRODUÇÃO (todos os testadores veem).
- `app/App.beta.html` = TESTE (só quem apontar para ele).

## Fluxo
1. Edite SEMPRE `app/App.beta.html`.
2. Na planilha de teste (a sua), em Propriedades do script, crie:
   `HFM_FRONT_URL` = `https://devdias-techsolutions.github.io/hfm-pwa/app/App.beta.html`
3. Abra o app com `?fresh=1`. O ícone de nuvem confirma que veio do GitHub.
4. Testou e aprovou? Copie o conteúdo inteiro de `App.beta.html` para `App.html` (commit).
5. Planilhas dos testadores não têm `HFM_FRONT_URL`, então continuam em `App.html`.

Regra: nada vai para `App.html` sem passar pelo beta.
