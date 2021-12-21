.PHONY: test

test:
	yarn jest --collect-coverage

demo:
	npx ts-node fizz_buzz.ts 31
