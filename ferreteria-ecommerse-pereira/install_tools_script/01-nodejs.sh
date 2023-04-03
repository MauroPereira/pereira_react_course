#!/bin/bash

if [ -z "$(which highlighted_green_text)" ]; then
    SCRIPT=$(readlink -f $0);
    CURRENT_DIR=`dirname $SCRIPT`;
    source "$CURRENT_DIR/libs/colour_texts.sh"
fi

if [ -z "$(which wget)" ]; then
    highlighted_green_text "Descargando e instalando paquetes necesarios..."
    sudo apt update -y && sudo apt install -y wget
fi    

highlighted_green_text "Descargando Node JS y descomprimiendo..."
wget -O "$CURRENT_DIR/node-linux-x64.tar.xz" "https://nodejs.org/dist/v18.15.0/node-v18.15.0-linux-x64.tar.xz" 
sudo tar -vxf "$CURRENT_DIR/node-linux-x64.tar.xz" -C /opt
rm "$CURRENT_DIR/node-linux-x64.tar.xz"
highlighted_green_text "Creando enlaces simbólicos..."
sudo ln -sf /opt/node-v18.15.0-linux-x64/bin/corepack /usr/bin/corepack
sudo ln -sf /opt/node-v18.15.0-linux-x64/bin/node /usr/bin/node
sudo ln -sf /opt/node-v18.15.0-linux-x64/bin/npm /usr/bin/npm
sudo ln -sf /opt/node-v18.15.0-linux-x64/bin/npx /usr/bin/npx
highlighted_green_text "Chequeando version de node js..."
node -v
highlighted_green_text "Chequeando version de npm..."
npm -v



