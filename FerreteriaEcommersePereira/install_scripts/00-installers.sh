#!/bin/bash

highlighted_green_text(){
    echo -e "\e[1;32m$1\e[0m"
}

highlighted_green_text "Instalador de herramientas de trabajo iniciando!"
highlighted_green_text "Descargando e instalando paquetes necesarios..."
sudo apt update -y && sudo apt install -y wget
highlighted_green_text "Descargando Visual Studio Code e instalandolo..." 
wget -O "code_amd64.deb" "https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64"
sudo apt install -y ./code_amd64.deb
rm code_amd64.deb
highlighted_green_text "Descargando Node JS y descomprimiendo..."
wget "https://nodejs.org/dist/v18.14.0/node-v18.14.0-linux-x64.tar.xz"
sudo tar -vxf node-v18.14.0-linux-x64.tar.xz -C /opt
rm node-v18.14.0-linux-x64.tar.xz
highlighted_green_text "Creando enlaces simbólicos..."
sudo ln -sf /opt/node-v18.14.0-linux-x64/bin/corepack /usr/bin/corepack
sudo ln -sf /opt/node-v18.14.0-linux-x64/bin/node /usr/bin/node
sudo ln -sf /opt/node-v18.14.0-linux-x64/bin/npm /usr/bin/npm
sudo ln -sf /opt/node-v18.14.0-linux-x64/bin/npx /usr/bin/npx
highlighted_green_text "Chequeando version de node js..."
node -v
highlighted_green_text "Chequeando version de npm..."
npm -v
highlighted_green_text "Instalador de herramientas de trabajo finalizado."



