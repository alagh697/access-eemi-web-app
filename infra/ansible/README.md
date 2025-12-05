# 🚀 Infrastructure Ansible – Déploiement d'une application Next.js sur EC2 (AWS)

Ce dossier contient toute l’infrastructure nécessaire pour déployer automatiquement
une application **Next.js** sur un serveur Ubuntu **EC2 AWS**, en utilisant :

- **Ansible** pour orchestrer le déploiement
- **Node.js (via NodeSource)** pour builder l’app
- **PM2** pour exécuter et superviser le serveur Next.js
- **nginx** comme reverse proxy
- **rsync (synchronize)** pour envoyer le code du projet vers le serveur

Cette infrastructure peut être déclenchée :
- soit **en local depuis WSL**  
- soit **via GitHub Actions** pour une CI/CD complète (à venir)

---

# 📂 Structure du projet Ansible


infra/
└── ansible/
├── inventory/
│ └── hosts.ini
├── playbooks/
│ └── deploy-next.yml
└── roles/
├── common/
│ ├── defaults/main.yml
│ └── tasks/main.yml
├── nodejs/
│ ├── defaults/main.yml
│ └── tasks/main.yml
├── next_build/
│ ├── defaults/main.yml
│ └── tasks/main.yml
├── pm2_app/
│ ├── defaults/main.yml
│ └── tasks/main.yml
└── nginx/
├── defaults/main.yml
├── handlers/main.yml
├── tasks/main.yml
└── templates/next-proxy.conf.j2


---

# 🧩 Description des rôles

## 1️⃣ `common` – Configuration de base
Installe les paquets système nécessaires et configure le timezone.

Actions :
- apt update
- installation de paquets courants (`curl`, `git`, `vim`, etc.)
- configuration du fuseau horaire

---

## 2️⃣ `nodejs` – Installation de Node.js
Installe Node.js **version 20** via NodeSource (compatible avec Next.js 14+).

Actions :
- installation des outils de build
- suppression de l’éventuel Node Ubuntu
- installation de Node.js 20.x
- affichage de la version installée

---

## 3️⃣ `next_build` – Synchronisation + build Next.js

Actions :
- création du dossier `/var/www/next-app`
- synchronisation du projet local → serveur via `rsync`
- installation **de toutes les dépendances**, y compris `devDependencies`
  (nécessaire si `next.config.ts`)
- exécution de `npm run build`

Ce rôle garantit que `package.json` est bien présent avant build.

---

## 4️⃣ `pm2_app` – Démarrage de l’application Next.js

Actions :
- installation de PM2 global
- suppression de l’ancienne instance PM2
- démarrage de l’app : `pm2 start npm --name "next-app" -- start`
- sauvegarde et configuration PM2 pour restart automatique au boot (systemd)

---

## 5️⃣ `nginx` – Reverse proxy

nginx écoute sur le port 80 et redirige vers :

http://127.0.0.1:3000


Actions :
- installation d’nginx
- activation du service
- déploiement de la configuration `next-proxy.conf.j2`
- reload d’nginx

---

# 🎯 Playbook principal : `deploy-next.yml`

Ce playbook orchestre tous les rôles :

```yaml
---
- name: Déploiement complet de l'app Next.js
  hosts: web
  become: true

  vars:
    # playbook_dir = .../infra/ansible/playbooks
    # dirname x3 = racine du repo (access-eemi-web-app)
    project_src: "{{ playbook_dir | dirname | dirname | dirname }}"

  roles:
    - common
    - nodejs
    - next_build
    - pm2_app
    - nginx

Inventaire : inventory/hosts.ini

[web]
YOUR_EC2_IP ansible_user=ansible ansible_ssh_private_key_file=~/.ssh/aws-dev-key.pem

Remplacer YOUR_EC2_IP par l’IP publique de l’instance.

Exécution du déploiement

Depuis WSL :

cd infra/ansible

# nécessaire si Ansible ignore ansible.cfg à cause de /mnt/c
export ANSIBLE_ROLES_PATH=$(pwd)/roles

ansible-playbook -i inventory/hosts.ini playbooks/deploy.yml

Ce que fait le déploiement (résumé)

copie du repo local vers le serveur

installation Node.js 20

npm install (+ devDependencies)

npm run build

démarrage PM2

configuration nginx

l’app est servie sur
http://<ip-de-votre-ec2>

❓ Dépannage rapide
🟥 Erreur : package.json introuvable

→ project_src ne pointe pas vers la racine du repo.
→ Vérifier deploy-next.yml.

🟥 Erreur : Node.js version >=20.9.0 required

→ Le rôle nodejs doit installer NodeSource 20.x.

🟥 Erreur : Cannot find module 'typescript'

→ Next.js compile un next.config.ts → nécessite devDependencies →
→ production: false dans next_build.

🚀 Étapes suivantes

Ajouter un workflow GitHub Actions pour CI/CD automatique

Ajouter des environnements (dev / staging / prod)

Ajouter un load-balancer ou autoscaling si besoin

Gérer un domaine et HTTPS via Certbot

📚 Auteur & Contexte

Ce repo est destiné aux étudiants pour apprendre :

le déploiement automatisé

l’infra as code (IaC)

Ansible

CI/CD

gestion de serveur Linux

déploiement d’une application Next.js en production
