FROM ubuntu:20.04

# change to local repository

ADD sources.list /etc/apt/sources.list

# Install Nginx

RUN apt-get -y update && apt-get -y install nginx

# Copy index.html

COPY index.html /var/www/html/

# Expose the port for access

EXPOSE 80/tcp

# RUN the Nginx server
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
