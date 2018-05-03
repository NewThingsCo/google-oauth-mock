IMAGE = newthings/google-oauth-mock
VERSION := $(shell node -p "require('./package.json').version")
REDIRECT_URL = $(AUTHORIZED_REDIRECT_URL)
DOCKER_PORT ?= 8081

.PHONY: run docker-build docker-run docker-tag docker-push docker-publish

run:
	npm i
	AUTHORIZED_REDIRECT_URL=$(REDIRECT_URL) npm start

docker-build:
	@echo 'Building $(IMAGE):latest...'
	docker build -t $(IMAGE) .

docker-run:
	@echo 'Starting google-oauth-mock server...'
	docker run -d --name google-oauth-mock -p $(DOCKER_PORT):8081 -e AUTHORIZED_REDIRECT_URL=$(REDIRECT_URL) $(IMAGE)

docker-stop:
	docker rm -f google-oauth-mock

docker-tag:
	@echo 'Creating image tag $(IMAGE):$(VERSION)...'
	docker tag $(IMAGE):latest $(IMAGE):$(VERSION)

docker-push:
	docker login
	@echo 'Pushing images...'
	docker push $(IMAGE):latest
	docker push $(IMAGE):$(VERSION)
	@echo 'Done!'

docker-publish: docker-build docker-tag docker-push
