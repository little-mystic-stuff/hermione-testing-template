NODE=/usr/bin/nodejs
NPM=/usr/bin/npm
NPX=/usr/bin/npx

HERMIONE=./node_modules/.bin/hermione
ESLINT=./node_modules/.bin/eslint

.PHONY: selenium-standalone, selenium-standalone-install, deps, lint

selenium-standalone:
	${NPM} i -S selenium-standalone

selenium-standalone-install:
	${NPX} selenium-standalone install

deps:
	make selenium-standalone
	make selenium-standalone-install

lint:
	${ESLINT} ./tests ./commands

.PHONY: test-all, test-desktop, test-desktop-firefox

test-all:
	${HERMIONE}

test-desktop:
	${HERMIONE} --set desktop
