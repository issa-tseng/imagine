.PHONY: all clean
default: all	

IMAGINE_CODE = $(shell find imagine -type f -name '*.js' | sort)
SHELL_CODE = $(shell find shell -type f -name '*.js' | sort)
IMAGINE_STYLES = $(shell find imagine -type f -name '*.sass' | sort)
SHELL_STILES = $(shell find shell -type f -name '*.sass' | sort)

package-lock.json:
	npm install
node_modules: package-lock.json
	npm install

dist:
	@mkdir -p dist/
app:
	@mkdir -p app/

app/shell.html: shell/shell.html
	cp $< $@
dist/imagine.js: imagine/imagine.js dist node_modules $(IMAGINE_CODE)
	node node_modules/browserify/bin/cmd.js --exclude domino -e $< -o $@ --im
dist/embed.js: imagine/embed.js dist node_modules $(IMAGINE_CODE)
	node node_modules/browserify/bin/cmd.js --exclude domino -e $< -o $@ --im
app/shell.js: shell/shell.js dist node_modules $(SHELL_CODE)
	node node_modules/browserify/bin/cmd.js --exclude domino -e $< -o $@ --im
dist/imagine.css: imagine/imagine.sass dist $(IMAGINE_STYLES) node_modules
	node node_modules/node-sass/bin/node-sass --output-style compressed $< > $@
app/shell.css: shell/shell.sass dist $(SHELL_STYLES) node_modules
	node node_modules/node-sass/bin/node-sass --output-style compressed $< > $@
app/imagine.%: dist/imagine.%
	cp $< $@

all: dist app dist/imagine.js dist/embed.js dist/imagine.css app/shell.html app/shell.js app/imagine.css app/shell.css

clean:
	rm -rf dist/*
	rm -rf app/*

