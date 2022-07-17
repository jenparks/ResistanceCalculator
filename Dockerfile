FROM node:14.15.1
LABEL "maintainer"="jp00213@my.westga.edu"

WORKDIR /app/
RUN npm install -g @angular/cli
RUN npm install --global http-server

# Build application and start webserver on port 4200
CMD ["dockerscript.sh"]

