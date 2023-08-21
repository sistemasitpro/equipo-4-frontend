# Stage 2: Serve the application with Nginx
FROM nginx:1.19.0-alpine as prod
COPY  ./app/dist /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
