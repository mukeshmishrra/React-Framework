# How to intergrate tailwindCss in the reactproject?
steps
01. Create React project 
  npx create-react-app project-name    |    npm create vite@latest

02. Install tailwindCss dependancy in the project ( Run the given below command ) -
      npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p
this command will generate two files - tailwind.config.js and postcss.config.js

03.  Configure your template paths
Update the tailwind.config.js file -
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],

04. Update index.css file,  so add the given below code -

@tailwind base;
@tailwind components;
@tailwind utilities;

05. Run the Project
   command  -   npm run dev     ( it will be better if the take run script command from the package.json file )

06. You can verify the tailwindCss integration - 
   <h1 className="bg-green-500">
      Hello world!
    </h1>
