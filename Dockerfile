FROM node:14.15.1
LABEL "maintainer"="jp00213@my.westga.edu"

WORKDIR /cs6261/
RUN npm install -g @angular/cli
RUN npm install --global http-server
ADD dockerscript.sh dockerscript.sh

# Build application and start webserver on port 4200
CMD ["/cs6261/dockerscript.sh"]

