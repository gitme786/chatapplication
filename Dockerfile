FROM node:latest
RUN mkdir -p /usr/srv/app

WORKDIR /usr/srv/app

COPY package*.json /usr/srv/app

RUN npm install

COPY . /usr/srv/app

EXPOSE 3000

# CMD ["npm","index.js"]
CMD ["npm","start"]







# STEP 1: ------------------------COMMAND FOR BUILDING---------------------------------
# sudo docker build -t chatwithme:1.0.0 .

# STEP 2:-----------COMMAND WHILE UPLOADING--------------------------------------------

# docker login
# himanshuleena
# Himanshu@Leena
# docker tag chatwithme:1.0.0 himanshuleena/chatwithme_image
# docker push himanshuleena/chatwithme_image


# STEP 3    :-----------COMMAND WHILE PULLING--------------------------------------------
# yum update 
# yum install docker -y
# service docker start
# docker images
# docker pull himanshuleena/chatwithme_image
# docker images
# docker run --publish 3000:3000 himanshuleena/chatwithme_image



###########################################################################################


# -------------------------------FOR MANUAL TRANSFER------------------------------------------------------------------
# docker save -o chatapp.tar chatapp


# ---------------------------------FOR PUBLISHING --------------------------------------------------------------------
# sudo docker images
# docker run --publish 3000:3000 myapp

