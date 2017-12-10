FROM continuumio/miniconda3

RUN pip install Flask-Webpack
RUN apt-get install -y libpng-dev

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g webpack && \
    npm install -g webpack-dev-server

ADD ./ /flask-react/

RUN npm install webpack -g
RUN npm install webpack-dev-server -g

RUN cd /flask-react && \
    npm install && \
    webpack

WORKDIR /flask-react/

