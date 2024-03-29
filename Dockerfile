FROM node:20 as base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable as application
WORKDIR /usr/share/nginx/html
COPY --from=base /app/build .
