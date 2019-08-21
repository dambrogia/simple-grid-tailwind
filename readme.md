# Simple Grid <sub><sup><sub><sup><sub>with tailwindcss</sub></sup></sub></sup></sub>

A simple grid creator with tailwind. Generate only the CSS you need, and add a unique scope so it doesn't screw up what's already there.

Default size 1.5KB. (Can increase or decrease depending on needs)

#### Install:

    git clone https://github.com/dambrogia/simple-grid-tailwind
    cd simple-grid-tailwind
    yarn

#### Configure your grid:

Adjust the `tailwind.config.js` file to apply only the viewports and widths you need.

#### Compile your grid:

Default scope will be a shorthand for Simple Grid -- `.sg`. Compiled CSS will generate in `dist/compiled.css`. Minifying is enabled by default, however for the purpose of debugging styles, there is an option to disable it.

    yarn run build [--scope=".my-scope"] [--no-scope] [--no-min]


