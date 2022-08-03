.PHONY: up
up: build
	docker-compose -f docker-compose.dev.yml up

.PHONY: build compile
compile: build
build: Gruntfile.js package.json
	@rm -rf www/
	npm run build

.PHONY: init
init: package.json
	npm install