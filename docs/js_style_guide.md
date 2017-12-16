# JavaScript Style Guide

## Prettier

The package `prettier` is an autoformatter. Here's a link to their
docs: [prettier](https://github.com/prettier/prettier). The main benefit of
`prettier` is to automatically apply consistent styling. 

### In your editor

We strongly recommend setting to `prettier` in your text editor. See this
section of their docs:
[editor-integration](https://github.com/prettier/prettier#editor-integration).

Whatever editor you use, make sure to set up the formatter to align with our
chosen settings. CLI Override syntax (for editor config):

```
"--bracket-spacing" "true"
"--trailing-comma" "all"
"--single-quote" "true"
```

It is also possible to run `prettier` via the command line:

```sh
> prettier --write \
    --bracket-spacing "true" \
    --trailing-comma "all" \
    --single-quote "true" \
    '{,!(node_modules)/**/}*.js'
```

That command will reformat all JS files with our conventions, ignoring the
`node_modules` directory.
