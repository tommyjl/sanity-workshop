.PHONY: present

present: presentation.pdf
	open presentation.pdf

presentation.pdf: presentation.md
	pandoc -f markdown -t beamer -o presentation.pdf presentation.md

.PHONY: clean

clean:
	rm presentation.pdf
