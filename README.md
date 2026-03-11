# CI/CD Playground

10 exercices progressifs pour maîtriser GitHub Actions.

## Setup

```bash
# 1. Crée un repo sur GitHub (public = Actions gratuites illimitées)
gh repo create cicd-playground --public

# 2. Clone et copie les fichiers
git clone https://github.com/TON-USERNAME/cicd-playground.git
cd cicd-playground
# Copie tout le contenu de ce dossier ici

# 3. Installe les deps backend (pour EX_02+)
cd backend && npm install && cd ..

# 4. Premier push
git add .
git commit -m "init: playground with 10 CI/CD exercises"
git push
```

## Exercices

| # | Nom | Difficulté | Concept |
|---|-----|-----------|---------|
| 01 | Hello CI | ⬜ Facile | Structure YAML minimale |
| 02 | Lint Gate | ⬜ Facile | Bloquer du code sale |
| 03 | Parallel Jobs | 🟨 Medium | Jobs parallèles + gate |
| 04 | PostgreSQL Service | 🟨 Medium | Service containers |
| 05 | Monorepo Paths | 🟨 Medium | Paths filter |
| 06 | Docker Build & Scan | 🟨 Medium | Hadolint + Trivy |
| 07 | Push to GHCR | 🟥 Hard | Container registry |
| 08 | Deploy SSH | 🟥 Hard | Déploiement VPS |
| 09 | Auto-Rollback | 🟥 Hard | if: failure() |
| 10 | Boss Final | 🟪 Boss | Tout de zéro |

## Règles

1. Fais les exercices dans l'ordre
2. Ne décommente les TODO que quand tu comprends ce qu'ils font
3. Expérimente : casse volontairement les choses pour comprendre
4. Compare toujours le résultat dans l'onglet Actions de GitHub

## Structure

```
.github/workflows/
├── ex01-hello-ci.yml          ← Prêt à push
├── ex02-lint-gate.yml         ← TODOs à remplir
├── ex03-parallel-jobs.yml     ← TODOs à remplir
├── ex04-postgres-service.yml  ← TODOs à remplir
├── ex05a-frontend-paths.yml   ← TODOs à remplir
├── ex05b-backend-paths.yml    ← TODOs à remplir
├── ex06-docker-scan.yml       ← TODOs à remplir
├── ex07-ghcr-push.yml         ← TODOs à remplir
├── ex08-deploy-ssh.yml        ← TODOs à remplir (besoin d'un VPS)
├── ex09-rollback.yml          ← TODOs à remplir
└── ex10-boss-final.yml        ← Vide — tu construis tout

backend/
├── package.json
├── tsconfig.json
├── .eslintrc.json
└── src/
    └── index.ts               ← A des erreurs de lint VOLONTAIRES

frontend/src/
└── page.tsx

shared/
└── constants.ts
```

## Tips

- **EX_01 à 03** : push directement sur GitHub, c'est assez simple
- **EX_04 à 06** : installe `act` pour itérer en local (`brew install act`)
- **EX_07 à 09** : nécessite GitHub (GHCR, secrets, VPS)
- **EX_10** : commence avec `act`, valide sur GitHub

## Attention

Au premier push, TOUS les workflows vont tourner (ils n'ont pas encore
de paths: filter). C'est normal. Les exercices 05a/05b te montrent
comment résoudre ça.

Pour désactiver temporairement un workflow sans le supprimer,
renomme-le en `.yml.disabled`.
