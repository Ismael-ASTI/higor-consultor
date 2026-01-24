# 🚀 Guia Rápido de Deploy - Netlify

## Método Mais Fácil: Drag & Drop

### Passo 1: Preparar os Arquivos
Certifique-se que você tem todos estes arquivos:
- ✅ index.html
- ✅ styles.css
- ✅ script.js
- ✅ netlify.toml
- ✅ _headers
- ✅ assets/img/foto perfil profissional.png

### Passo 2: Acessar Netlify
1. Acesse: https://app.netlify.com
2. Faça login ou crie uma conta (é grátis!)

### Passo 3: Deploy
1. Na página inicial, você verá uma área escrita "Want to deploy a new site without connecting to Git?"
2. Arraste TODA a pasta `HIGOR-CONSULTOR` para essa área
3. Aguarde 30-60 segundos
4. Pronto! 🎉

### Passo 4: Configurar Domínio Personalizado (Opcional)
1. Clique em "Domain settings"
2. Clique em "Add custom domain"
3. Digite seu domínio (ex: higorloan.com)
4. Siga as instruções para configurar DNS

## Domínio Temporário
Netlify criará automaticamente um domínio tipo:
`https://random-name-123456.netlify.app`

Você pode mudar o nome:
1. Vá em "Site settings"
2. Clique em "Change site name"
3. Digite o nome desejado (ex: higor-consultoria)
4. Novo URL: `https://higor-consultoria.netlify.app`

## ⚡ Deploy Contínuo com Git (Avançado)

Se você usar Git:

### 1. Criar Repositório
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Conectar no Netlify
1. No Netlify, clique em "New site from Git"
2. Escolha GitHub/GitLab/Bitbucket
3. Selecione o repositório
4. Configure:
   - Build command: `echo 'No build needed'`
   - Publish directory: `.`
5. Deploy!

Agora toda vez que você fizer push, o site atualiza automaticamente! 🚀

## 🔧 Solução de Problemas

### Imagem não aparece
- Verifique se a imagem está em `assets/img/foto perfil profissional.png`
- Certifique-se que fez upload da pasta `assets` completa

### Site não carrega CSS
- Verifique se fez upload de `styles.css` e `script.js`
- Todos os arquivos devem estar na raiz do zip/pasta

### Erros 404
- Certifique-se que o arquivo `_headers` foi incluído
- Verifique se o `netlify.toml` está na raiz

## 📞 Precisa de Ajuda?

Netlify Support: https://www.netlify.com/support/
Documentação: https://docs.netlify.com/

---

**Tempo estimado de deploy: 2 minutos** ⏱️
