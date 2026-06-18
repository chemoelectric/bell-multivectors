BELLMVEC := bell-multivectors
ASCDOC := asciidoctor

.DEFAULT_GOAL := $(BELLMVEC).html

.DELETE_ON_ERROR:

%.html: %.adoc
	$(ASCDOC) --safe $(<) -o $(@)

.PHONY: clean
clean:
	-rm -f $(BELLMVEC).html
