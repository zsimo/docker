FROM alpine:3.9
RUN apk add --no-cache \
  openssh-client \
  ca-certificates \
  git \
  bash

RUN mkdir -p ~/.ssh
RUN chmod 700 ~/.ssh
RUN echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
#RUN echo "$SSH_PRIVATE_KEY_STAGING" > ~/.ssh/id_rsa
COPY . /root/.ssh/
RUN chmod 600 ~/.ssh/id_rsa
RUN git clone git@bitbucket.org:swiftref/resources.git