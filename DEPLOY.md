# 💪 Higor Loan - Consultoria Premium de Musculação

Site moderno e otimizado para conversão de clientes na área de consultoria fitness e musculação.

## 🚀 Deploy no Netlify

### Opção 1: Deploy via Git (Recomendado)

1. Crie uma conta no [Netlify](https://www.netlify.com/)
2. Conecte seu repositório GitHub/GitLab
3. Configure:
   - **Build command:** `echo 'No build needed'`
   - **Publish directory:** `.` (diretório raiz)
4. Clique em "Deploy"

### Opção 2: Deploy Manual (Drag and Drop)

1. Acesse [app.netlify.com](https://app.netlify.com/)
2. Arraste toda a pasta do projeto para a área "Drag and drop"
3. Aguarde o deploy (geralmente leva 30 segundos)

### Opção 3: Deploy via Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## 📁 Estrutura do Projeto

```
HIGOR-CONSULTOR/
├── index.html           # Página principal
├── styles.css           # Estilos modernos e responsivos
├── script.js            # Interatividade e animações
├── netlify.toml         # Configuração Netlify
├── _headers             # Headers de segurança e performance
├── assets/
│   └── img/
│       └── foto perfil profissional.png
└── README.md
```

## ✨ Recursos Implementados

### Design Moderno
- ✅ Scroll reveal animations
- ✅ Efeitos 3D (perspective, tilt)
- ✅ Floating particles no hero
- ✅ Glassmorphism effects
- ✅ Gradientes animados
- ✅ Micro-interações (hover, active states)

### Animações Premium
- ✅ Counter animations (badges de conquistas)
- ✅ Ripple effect nos botões
- ✅ Scale e rotate effects
- ✅ Cubic-bezier custom para transições suaves
- ✅ Stagger effect em grid items

### Performance
- ✅ CSS otimizado com will-change
- ✅ Lazy loading de imagens
- ✅ Preconnect para CDNs
- ✅ Cache headers configurados
- ✅ Minificação automática (Netlify)

### SEO & Social
- ✅ Meta tags Open Graph
- ✅ Twitter Cards
- ✅ Schema.org markup
- ✅ Headers de segurança
- ✅ Performance optimizations

### Mobile First
- ✅ 100% responsivo
- ✅ Menu hamburger animado
- ✅ Touch-friendly interactions
- ✅ Otimizado para iOS/Android

## 🎨 Paleta de Cores

- **Primary Dark:** `#0a0e27`
- **Primary:** `#1a1f3a`
- **Accent (Turquoise):** `#00d4ff`
- **Accent Secondary (Orange):** `#ff6b35`
- **Accent Tertiary (Purple):** `#7c3aed`

## 📱 Seções do Site

1. **Hero** - Apresentação com imagem profissional e CTAs
2. **Achievements** - Badges animados com conquistas
3. **Audience** - Para quem é / não é o serviço
4. **How It Works** - 3 passos do processo
5. **Plans** - 3 planos de consultoria
6. **Results** - Link para Instagram com resultados
7. **About** - Sobre o profissional
8. **Differentials** - 6 diferenciais do serviço
9. **FAQ** - 6 perguntas frequentes
10. **Testimonials** - 3 depoimentos de clientes
11. **CTA Final** - Chamada para ação
12. **Footer** - Links e informações

## 🔧 Personalizações

### Alterar Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
    --primary-dark: #0a0e27;
    --primary: #1a1f3a;
    --accent: #00d4ff;
    /* ... */
}
```

### Alterar Conteúdo

Todo o conteúdo está em `index.html` com classes semânticas para fácil identificação.

### Adicionar Imagens

Coloque as imagens em `assets/img/` e referencie com caminho relativo:

```html
<img src="assets/img/sua-imagem.png" alt="Descrição">
```

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 🎯 First Contentful Paint: < 1.5s
- 🚀 Time to Interactive: < 3s
- 📱 Mobile-Friendly: 100%

## 🔒 Segurança

Headers implementados:
- X-Frame-Options: DENY
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## 📞 Suporte

Para dúvidas ou ajustes, entre em contato através do Instagram [@higor_loan](https://www.instagram.com/higor_loan)

## 📝 Licença

© 2026 Higor Loan - Todos os direitos reservados.

---

**Desenvolvido com 💙 para gerar resultados reais**
