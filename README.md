# 👷‍♂ Floating-Point Strapi Gatsby Starter

Default boilerplate for Floating-Point developed websites using Strapi + Gatsby.

## 🚀 Quick start

1.  **Clone the project.**

    Replace `website-name` with your project name

    ```shell
    git clone git@github.com:FP-Design-Code/strapi-gatsby-starter.git website-name
    ```

2.  **Install dependencies.**

    Navigate into your new site’s frontend directory and install the dependencies.

    ```shell
    cd website-name/frontend
    yarn install
    ```

3.  **Start development.**

    Start the gatsby development process.

    ```shell
    gatsby develop
    ```

## 💻 Technologies Used

- [strapi](https://strapi.io/)
- [tailwindcss](https://tailwindcss.com/)
- [twin.macro](https://github.com/ben-rogerson/twin.macro)
- [styled components](https://styled-components.com/)
- [Gatsby](https://www.gatsbyjs.com/)
- [Typescript](https://www.typescriptlang.org/)

## 📂 Project Structure

The site is essentially two parts the Strapi application `./backend` and the Gatsby website `./frontend`.

For the most part, you will be modifying the files/folders in `./frontend` while leaving the `./backend` mostly the same.

All folders and files you will find at the top level of the `./frontend`.

```text
    .
    ├── node_modules
    ├── src
    │    ├── components
    │    ├── fragments
    │    ├── hooks
    │    ├── images
    │    ├── pages
    │    ├── theme
    │    └── types
    ├── .env.example
    ├── .eslintrc
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── config.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── package.json
    ├── LICENCE
    ├── README.md
    ├── tailwind.config.js
    ├── tsconfig.json
    └── yarn.lock
```

### ❗ Important files and folders

1.  **`/src/components`**: Contains all reusable components for the website.

2.  **`/src/hooks`**: Place custom hooks here. Two are available. useMenu to get the main menu and useSiteMetaData to get meta data from the ```gatsby-config.js```.

3.  **`/src/images`**: Place all static images here. Required for SEO: logo.png, favicon.png (512x512).

4.  **`/src/pages`**: Holds static pages like index.tsx (front page).

5.  **`/src/theme`**: This is contains a context and provider for dark mode (if enabled).

6.  **`/src/types`**: Contains all the types required for the site to compile.

7.  **`.env.example`**: Example environment variables. Before developing you should rename this to `.env.development` and fill it out appropriately.

8.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

9.  **`config.js`**: This file is used to set up the site metadata used in `gatsby-config.js`.

10.  **`gatsby-config.js`**:  This is the main configuration file for a Gatsby site. For the most part, this is used to determine the plugins we will use.

11.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
