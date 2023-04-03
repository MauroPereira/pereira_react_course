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

highlighted_green_text "Descargando Visual Studio Code e instalándolo..." 
wget -O "$CURRENT_DIR/code_amd64.deb" "https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64"
sudo apt install -y "$CURRENT_DIR/code_amd64.deb"
rm "$CURRENT_DIR/code_amd64.deb"