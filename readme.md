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


#### Using your grid:
These examples assume you are using the default scope of `.sg`.

Here is an example of a 3 column row inside a container using the default settings. The `.container`, `.row`, and `.column` selectors have no effect in this example, they're just an elaboration of the example.

    <!-- Simple Grid scope -->
    <div class="sg">
        <!-- Container with a max width of 100% and default width of 800px on screens >= small -->
        <div class="container max-w-full sm:w-800 mx-auto px-15">
            <!-- Row with a negative margin of 15px on the x axis -->
            <div class="row -mx-15">
                <!-- Columns with 15px of padding on the x axis - 100% width on mobile and 33% width on screens >= small -->
                <div class="column px-15 w-1/1 sm:w-1/3">Column 1</div>
                <div class="column px-15 w-1/1 sm:w-1/3">column 2</div>
                <div class="column px-15 w-1/1 sm:w-1/3">column 3</div>
            </div>
        </div>
    </div>

Keep in mind you can create dynamic gutter sizes as well, you just have to adjust your `tailwind.config.js` file! 🤔
