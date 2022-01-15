# Deprecated Scripts

The scripts in this folder are no longer used but kept here for reference.

## Sandbox and Testing

Similar to how we can generate the live demo pages, We can also snapshot all the steps into a
folder `marvelheroes-snapshots`, which then contains an additional folder called `sandbox`.
This `sandbox` folder contains the `goto_step` script which allows you, quickly, to move from one
step to another without having to worry about checking out different tags or branches.

This is particularly useful for running the unit and e2e tests. **Don't forget that, before you can
use karma to do testing, you will need to install the necessary karma plugins by running
`npm install` in the base folder.**

- **snaphot.sh**: Run this script to generate the `marvelheroes-snapshots` folder, containing
  a copy of each step's application files and the `sandbox` folder.
- **goto_step.sh (goto_step.bat)**: These scripts are copied into the `sandbox` folder when the
  snapshots folder is created. Run the appropriate one for your OS to remove the current step's
  application files from the sandbox and copy in a new one.

