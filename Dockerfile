### BUILD
FROM node:14 as build

WORKDIR /usr/local/app
COPY ./ /usr/local/app/

RUN npm install
RUN npm install -g @angular/cli@12
RUN npm run build

### STAGE 2: Run ###
FROM nginx
COPY --from=build /usr/local/app/kubernetes /usr/local/app/dist/fover-library
COPY --from=build /usr/local/app/dist/fover-library/ /usr/share/nginx/html
EXPOSE 80
