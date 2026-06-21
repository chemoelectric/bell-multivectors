BELLMVEC := bell-multivectors
ASCDOC := asciidoctor
NPM := npm
NODEJS := node
REALPATH := realpath

.DEFAULT_GOAL := default

.DELETE_ON_ERROR:

.PHONY: default all
default: all
all: $(BELLMVEC).html $(BELLMVEC).pdf

%.html: %.adoc
	$(ASCDOC) --safe $(<) -o $(@)

%.pdf: %.html
	$(NPM) install selenium-webdriver
	$(NODEJS) pdf-driver.js file://`$(REALPATH) $(<)` $(@)

.PHONY: mostlyclean clean
mostlyclean:
	-rm -f $(BELLMVEC).{html,pdf}
clean: mostlyclean
	-rm -f *.json
	-rm -R -f node_modules

