# NEXUS IDE - Setup & Debug Guide

## 🔍 Debugging Issues

### Issue 1: Files Not Found on Branch
**Problem:** Files committed to `init/monorepo-setup` but showing "not found"
**Solution:** Branch exists and commits are there. Files are properly pushed.

### Issue 2: pnpm install fails
**Solution:**
```bash
# Clear cache
rm -rf node_modules pnpm-lock.yaml

# Use pnpm v8+
pnpm -v  # should be >= 8.0.0

# Install fresh
pnpm install
```

### Issue 3: TypeScript errors in editor
**Solution:**
```bash
# Rebuild packages
pnpm -r build

# Clear Next.js cache
rm -rf apps/web/.next

# Restart dev server
pnpm dev
```

### Issue 4: OpenRouter API not working
**Solution:**
```bash
# Check API key in .env.local
cat apps/web/.env.local

# Test API directly
curl -X POST https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"meta-llama/llama-2-7b-chat","messages":[{"role":"user","content":"hi"}]}'
```

### Issue 5: Monaco editor not loading
**Solution:**
```bash
# Reinstall dependencies
cd apps/web
pnpm install @monaco-editor/react

# Clear cache
rm -rf .next node_modules

# Restart
pnpm dev
```

---

## ✅ Quick Start Checklist

- [ ] Clone repo: `git clone ... && cd NEXUS-AI-NETWORK-IDE`
- [ ] Checkout branch: `git checkout init/monorepo-setup`
- [ ] Install pnpm: `npm install -g pnpm@latest`
- [ ] Install deps: `pnpm install`
- [ ] Create env file: `cp .env.example apps/web/.env.local`
- [ ] Add API key to `.env.local`
- [ ] Start dev: `cd apps/web && pnpm dev`
- [ ] Open http://localhost:3000
- [ ] Test chat panel

---

## 🎯 What Works Now

✅ **UI Layout** - File explorer, editor, chat, terminal visible  
✅ **Monaco Editor** - Code editing with syntax highlighting  
✅ **Chat Panel** - Message input and display  
✅ **AI Router** - OpenRouter integration ready  
✅ **Terminal Panel** - Command input visible  
✅ **Monorepo** - All 5 packages linked  
✅ **API Endpoints** - Chat and terminal routes exist  

---

## 🚨 Known Limitations (MVP)

⚠️ Terminal - Only mock execution (no real shell)  
⚠️ File Explorer - Static mock data (no real file reading)  
⚠️ No GitHub integration yet  
⚠️ No git operations yet  
⚠️ No file write support  
⚠️ No authentication  

These are addressed in **Phase 2+**

---

## 📦 Package Status

| Package | Status | Notes |
|---------|--------|-------|
| `@nexus/shared` | ✅ Ready | Core types |
| `@nexus/ai-router` | ✅ Ready | OpenRouter + Ollama |
| `@nexus/agent` | ✅ Ready | Basic agent structure |
| `@nexus/mcp` | ✅ Ready | Tool framework |
| `@nexus/memory` | ✅ Ready | Note storage |
| `nexus-web` | ✅ Ready | Next.js 14 app |

---

## 🔗 Branch Status

**Current:** `init/monorepo-setup`  
**Latest commit:** `a4f4606b...` (chat API added)  
**Files:** 45+ committed  
**Ready to merge to main:** ✅ Yes  

---

## 🚀 Next Steps After MVP Works

1. **Merge to main**: Create PR from `init/monorepo-setup`
2. **Start Phase 2**: Create branch `feat/github-integration`
3. **Add OAuth**: GitHub authentication
4. **Add git operations**: Commit/push/pull
5. **Real files**: Read actual repo files

See `DEVELOPMENT_ROADMAP.md` for detailed plan.
