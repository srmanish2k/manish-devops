<<<<<<< HEAD
# Simple Node.js To-Do List App

This is a short and simple To-Do List web app built with React + Vite (runs on Node.js tooling).

## 1. Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## 2. Push to GitHub

Create a new empty repository in GitHub, then run:

```bash
git init
git add .
git commit -m "Initial commit: todo app"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 3. Deploy on EC2 (Ubuntu)

### 3.1 Launch EC2

- Create Ubuntu EC2 instance.
- In Security Group, allow ports: `22` (SSH), `80` (HTTP), `443` (HTTPS optional).
- Keep your `.pem` key file safe.

### 3.2 Connect to EC2

```bash
ssh -i /path/to/your-key.pem ubuntu@<EC2_PUBLIC_IP>
```

### 3.3 Install Node.js, Nginx, and Git

```bash
sudo apt update
sudo apt install -y git nginx curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

### 3.4 Clone and build app

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
npm run build
```

### 3.5 Serve build with Nginx

```bash
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/
sudo systemctl restart nginx
sudo systemctl enable nginx
```

Now open:

```text
http://<EC2_PUBLIC_IP>
```

## 4. Update app after new GitHub push

On EC2:

```bash
cd <your-repo>
git pull origin main
npm install
npm run build
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/
sudo systemctl restart nginx
```

## Notes

- If you use a custom domain, point DNS to your EC2 public IP.
- For HTTPS, you can use Certbot with Nginx.
=======
# manish-devops
my first app
>>>>>>> 985fc72efa6c04841851883a6eb5009dd04dee1a
