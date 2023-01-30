### BUILD
FROM node:14 as build

WORKDIR /usr/local/app
COPY ./ /usr/local/app/

RUN npm install
RUN npm install -g @angular/cli@12
RUN npm build

### STAGE 2: Run ###
FROM nginx:1.21.4-alpine
COPY --from=build /usr/local/app/dist/fover-library /usr/share/nginx/html
EXPOSE 80
