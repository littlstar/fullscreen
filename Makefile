
build/index.js: index.js node_modules
	mkdir -p $(dir $@)
	node_modules/.bin/browserify $< > $@

example: build/example.js build/index.html

build/example.js: example/index.js
	mkdir -p $(dir $@)
	node_modules/.bin/browserify $< > $@

build/index.html: example/index.html
	mkdir -p $(dir $@)
	cp $< $@

node_modules: package.json
	npm install
	touch $@

clean:
	rm -rf build

.PHONY: clean
