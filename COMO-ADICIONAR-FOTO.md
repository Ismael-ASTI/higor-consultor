# 📱 Como Adicionar a Foto do Higor

## Opção 1: Arrastar e Soltar (MAIS FÁCIL)

1. Abra a pasta do projeto:
   ```
   c:\Users\ISMAEL TOMAS\Documents\ITS COMPORTS\SITES\HIGOR-CONSULTOR\assets
   ```

2. **Arraste a foto** que você enviou para dentro da pasta `assets`

3. **Renomeie** o arquivo para: `higor.jpg`

4. **Recarregue** o site (F5 ou Ctrl+R)

---

## Opção 2: Copiar e Colar

1. **Clique com botão direito** na imagem que você enviou

2. Selecione **"Salvar imagem como..."**

3. Salve na pasta:
   ```
   c:\Users\ISMAEL TOMAS\Documents\ITS COMPORTS\SITES\HIGOR-CONSULTOR\assets
   ```

4. Nome do arquivo: `higor.jpg`

5. **Recarregue** o navegador

---

## ✅ Verificação

Quando a imagem estiver correta, você verá:

- ✅ Foto do Higor na **Hero Section** (topo da página)
- ✅ Foto do Higor na **Seção Sobre** (meio da página)
- ✅ Badge "Professor Musculação" sobre a foto

---

## 📱 Como Testar no Mobile

### Opção 1: DevTools (Recomendado)
1. Pressione **F12** no navegador
2. Clique no ícone de **celular** (📱)
3. Selecione um dispositivo (iPhone, Samsung, etc)
4. Teste o menu hamburger (☰)

### Opção 2: No celular de verdade
1. No mesmo Wi-Fi, descubra o IP do PC:
   ```powershell
   ipconfig
   ```
2. No celular, acesse:
   ```
   http://[SEU-IP]:porta/index.html
   ```
   (Ou use servidor local - veja abaixo)

---

## 🚀 Servidor Local para Testar no Celular

Execute no PowerShell:

```powershell
cd "c:\Users\ISMAEL TOMAS\Documents\ITS COMPORTS\SITES\HIGOR-CONSULTOR"
python -m http.server 8000
```

Depois acesse no celular:
```
http://[IP-DO-SEU-PC]:8000
```

---

## 🎨 Melhorias Mobile Implementadas

✅ Menu hamburger funcional
✅ Navegação touch-friendly
✅ Imagens responsivas
✅ Botões maiores para toque
✅ Texto legível em telas pequenas
✅ Cards de planos empilhados
✅ Footer reorganizado verticalmente
✅ Modal otimizado para mobile
✅ Animações suaves

---

## ⚠️ Imagem Temporária

Enquanto você não adicionar `higor.jpg`, o site mostra um **placeholder azul** com o texto "Higor Loan Professor".

Isso é só para desenvolvimento. Assim que você adicionar a foto real, ela substitui automaticamente!

---

## 💡 Dica Extra

**Formato recomendado da imagem:**
- Formato: JPG ou PNG
- Tamanho: 500x500px até 1000x1000px
- Peso: Máximo 500KB (para carregar rápido)

Se a imagem for muito pesada, você pode comprimi-la em: https://tinypng.com

---

**Qualquer dúvida, é só pedir! 💪**
