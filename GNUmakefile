BELLMVEC := bell-multivectors
ASCDOC := asciidoctor
NPM := npm
NODEJS := node
M4 := m4
REALPATH := realpath
SCP := scp
WEBSITE := crudfact@crudfactory.com:www/website_f9a02530

.DEFAULT_GOAL := default

.DELETE_ON_ERROR:

.PHONY: default all
default: all
all: $(BELLMVEC).html $(BELLMVEC).pdf

%.html: %.adoc GNUmakefile
	$(M4) -Ddoctype_attribute=article \
	      -Dtoc_attribute=left \
	      -Dstem_attribute=latexmath \
	      -P $(<) > $(@).tmp.adoc && \
	$(ASCDOC) -b html5 -S safe $(@).tmp.adoc -o $(@) && \
	rm $(@).tmp.adoc

%.pdf: %.html
	$(NPM) install selenium-webdriver
	$(NODEJS) pdf-driver.js file://`$(REALPATH) $(<)` $(@)

.PHONY: mostlyclean clean
mostlyclean:
	-rm -f $(BELLMVEC).{html,pdf}
	-rm -f *.tmp.adoc
clean: mostlyclean
	-rm -f *.json
	-rm -R -f node_modules

.PHONY: upload upload-html upload-pdf
upload: upload-html upload-pdf
upload-html: $(BELLMVEC).html
	$(SCP) $(^) $(WEBSITE)/index.html
upload-pdf: $(BELLMVEC).pdf
	$(SCP) $(^) $(WEBSITE)
