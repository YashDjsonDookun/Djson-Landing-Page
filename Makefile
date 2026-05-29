.PHONY: dev build preview test test-headed lint clean deploy install \
	docker-build docker-up docker-down cf-login deploy-cloudflare \
	bootstrap deploy-server server-logs server-status

install:
	@npm install

dev:
	@bash scripts/dev.sh

build:
	@bash scripts/build.sh

preview: build
	@npx astro preview

test:
	@bash scripts/build.sh
	@npx playwright test

test-headed:
	@bash scripts/build.sh
	@npx playwright test --headed

lint:
	@npx astro check

clean:
	@rm -rf dist .astro node_modules
	@echo "Cleaned dist/, .astro/, and node_modules/"

# Legacy deploy (rsync static files or local docker)
deploy:
	@bash scripts/deploy.sh

docker-build:
	@docker build -t djson-landing-page .

docker-up:
	@docker compose up -d

docker-down:
	@docker compose down

# ── Cloudflare Pages ────────────────────────────────────────

cf-login:
	@npx wrangler login

deploy-cloudflare:
	@bash scripts/deploy-cloudflare.sh

# ── Hetzner VPS (optional) ──────────────────────────────────

bootstrap:
	@SERVER_IP="$(SERVER_IP)" bash scripts/bootstrap-server.sh

deploy-server:
	@bash scripts/deploy-server.sh

server-logs:
	@bash scripts/server-logs.sh

server-status:
	@bash scripts/server-status.sh
