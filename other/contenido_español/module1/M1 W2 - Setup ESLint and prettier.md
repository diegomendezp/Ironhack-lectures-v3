## Configuring ESLint and Prettier (globaly) - For Module 1





- Open the terminal

- Navigate to the root `~` folder for the current user:

  - ```bash
    cd ~
    
    # This will navigate back to the root folder for the current user:
    # ~
    ```

    

s

- Install `eslint` CLI globaly

  - ```bash
    npm i -g eslint
    ```

    



- Create a `package.json` before creating a eslint global config. Run the command in the root folder for the current user **~**

  - ```bash
    npx eslint --init
    ```

    

  



- Select the following options:

  

  - How would you like to use ESLint ?
    - **To check syntax and find problems.**
  - What type of modules does your project use?
    - **CommonJS (require/exports)**
  - Which framework does your project use ?
    - **None of these**
  - Does your project use TypeScript (y/N) ?
    - **N**
  - Where does your code run ?
    - **Select both** with <u>space</u> : **Browser and Node**
  - What format do you want your config file to be in ?
    - **JSON**





- Open VSCode and install **ESLint** and **Prettier** extensions:
  - [Prettier - VSCode Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [ESLint - VSCode extenison](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)





- Open the User settings in VSCode:

  - Open the Command palette:  `cmd` + `Shift` + `P`

  - Search for  `User Settings`

  - Select **Preferences - Open User Settings**

  - Check that the follwoing options are set:

    - <u>Check</u> option: **Editor: Format On Save** :ballot_box_with_check:

    - <u>Check</u> option: **Eslint: Enable** :ballot_box_with_check:

    - If Enabled, disable **JSHint**

      

- Restart VSCode.