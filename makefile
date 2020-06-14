
web_dir = ../mkomodromos

update:
	    @echo "bundling markdown"
	    cd scripts; \
	    ./makeposts; \
	    ./update


preview:
	    @echo "bundling markdown"
	    cd scripts; \
	    ./makeposts; \
	    $(BROWSER) localhost:8000
	    python -m http.server

