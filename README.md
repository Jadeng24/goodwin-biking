# Goodwin Biking E-commerce store FE and BE

**Go to [Goodwin Biking](http://www.goodwinbiking.com) to see the site in action!**

 Your source of authentic, pragmatic bikepacking adventures catered
        specifically for beginner and intermediate bikepackers.
        <br />
        <br />
        Join us on our quest to explore the unknown and get back to the
        simpleness of life. Experience high-quality bikepacking gear at an
        affordable price! Also Join our [Youtube channel](https://www.youtube.com/@goodwinbiking) for in-depth bikepacking
        content.

![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1Lwj5wb57ZiinWQ_7HD6zjGkeLF1S9S85m4xWMZQNw&s)

## What languages are used?

#### This project is built with the following tech stack:
**FE:** 
- Reactjs
- Typescript
- SCSS
- Tailwind

**BE:** 
- Nodejs
- Strapi CMS
- Stripe checkout


## How to Run e-commerce site locally
client root: `npm i && npm run start`

server root: `npm i && npm run develop`



# Setup Hostinger (hosted) Ubuntu Strapi BE server

#### Start by opening up terminal and going into the VPS root directory: 

`ssh root@ADD_VPS_IP_ADDRESS_HERE`

Now run:

`systemctl stop apache2`

`systemctl disable apache2`

Then remove it by `apt remove apache2`

Delete related dependencies `apt autoremove`


## Cleaning and updating server

Lets start by running: 

`apt clean all && sudo apt update && sudo apt dist-upgrade`

`rm -rf /var/www/html` to remove the default html

Installing Nginx to manage ports and keep server secure because BE uses different PORT number than our Client. Using Nginx creates a secure gate.
In size /var/www/ run:

 `apt install nginx` to create it

## Installing and configuring Firewall
Start by running:

`apt install ufw`

`ufw enable`

`ufw allow "Nginx Full"`

## Configure Nginx

### Deleting default configurations

_Note: We are still running this inside /var/www/_

`rm /etc/nginx/sites-available/default`

and run: 

`rm /etc/nginx/sites-enabled/default`

### Setup our own configurations

_Here we can decide on what we want to call it, we will call it 'api'_

`nano /etc/nginx/sites-available/api`

Add this into the api file. Make sure to use PORT used for BE, in my case its 1337.

```
server {
  listen 80;

  location / {
        proxy_pass http://localhost:1337;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        try_files $uri $uri/ /index.html;
  }
}
```

Now we can make a new directory

`mkdir api`

`cd api`

`ln -s /etc/nginx/sites-available/api /etc/nginx/sites-enabled/api`

## Install strapi application

`apt install get`

`git clone <your_repository>`



### Run our strapi app

Go to the root /var/www and run:

`apt install nodejs`

`apt install npm`

`cd api/goodwin-biking/server`

`npm install`

Now lets adjust some settings in the config

`cd config`

`nano server.ts`

and lets write our new url in this file

`url: "http://77.37.63.116/"`

### Now lets build the project
inside of our root of our project run:
which would be '/var/www/api/goodwin-biking/server/

`NODE_ENV=production npm run build`

Now that it has built, we can reset the nginx:

`systemctl reload nginx`

We can check to see if our nginx is running correctly by:

`systemctl status nginx` and if its active, we should be good!

### Lets run our strapi app now
`NODE_ENV=production npm start`

