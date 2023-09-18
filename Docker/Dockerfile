# 基于哪个镜像的基础上进行构建
# FROM node:16
# 工作目录
# WORKDIR /
# 拷贝当前目录下的文件 到 /app 中  .dockerignore 文件中可以声明忽略拷贝的文件
# COPY  . /

# RUN npm set registry  https://registry.npmmirror.com
# RUN npm install
# RUN npm run build

# COPY warbler-fe:/dist/ /home/work/warbler-fe/warbler-fe/



# 拉取 nginx 镜像
FROM nginx

COPY dist /usr/share/nginx/html

COPY Docker/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]


# docker build -f ./Docker/Dockerfile -t warbler-fe . --no-cache
# docker run -d --name warbler-fe-instance -p 80:80 --restart=always warbler-fe