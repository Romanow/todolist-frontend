FROM node:16.3 as builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.21
COPY config/default.conf.template /etc/nginx/conf.d/default.conf.template
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
