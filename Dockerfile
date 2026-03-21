FROM nginx:alpine

# Remove default Nginx site
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all portfolio files into Nginx html root
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY mediaqueries.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY i18n.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

# Expose HTTP port
EXPOSE 80

# Start Nginx in foreground (required for Docker)
CMD ["nginx", "-g", "daemon off;"]
