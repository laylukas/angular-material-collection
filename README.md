**Documentation to Start New Angular Standalone Project, Using Yarn and Angular Material, and Link it to GitHub**



### Project Overview

This project serves as a comprehensive guide and reference for learning and practicing Angular development. It covers everything from setting up a new Angular standalone project to using essential tools like Yarn and Angular Material, and integrating Git for version control. The goal is to provide a complete documentation source where users can learn, review, and reinforce their understanding of Angular development best practices, installations, and related workflows.



### TABLE OF CONTENT ###

1. [Create a New Angular Standalone Project](#create-a-new-angular-standalone-project)
    - [Create a New Project Folder](#create-a-new-project-folder)
    - [Open PowerShell in the Right Directory](#open-powershell-in-the-right-directory)
    - [Install Node.js](#install-nodejs)
    - [Install Angular](#install-angular)
    - [Create New Angular Standalone Project](#create-new-angular-standalone-project)
    - [Create New Angular Standalone Component](#create-new-angular-standalone-component)

2. [Install Yarn](#install-yarn)
    - [Install Yarn](#install-yarn-1)


3. [Install Angular Material with Yarn](#install-angular-material-with-yarn)
    - [Install Angular Material with Yarn](#install-angular-material-with-yarn-1)


4. [Install Git Repository](#install-git-repository)
    - [Create a New Git Repository](#create-a-new-git-repository)
    - [Initialize Your Repository](#initialize-your-repository)


5. [Using GitHubProject with Others](#using-github-project-with-others)
    - [Invite Others to Your Project](#invite-others-to-your-project)
    - [Clone Project](#clone-project)


6. [Working with Issues and Branches](#working-with-issues-and-branches)
    - [Creating a New Issue](#creating-a-new-issue)
    - [Creating a New Branch for the Issue](#creating-a-new-branch-for-the-issue)
    - [Switching Between Branches](#switching-between-branches)
    - [Committing and Pushing Changes in the Issue Branch](#committing-and-pushing-changes-in-the-issue-branch)
    - [Submitting a Pull Request (PR)](#submitting-a-pull-request-pr)


7. [Commit Message Style Guide](#commit-message-style-guide)
    - [Structure of a Commit Message](#structure-of-a-commit-message)
    - [Commit Message Language](#commit-message-language)
    - [Standardized Keywords for Commit Types](#standardized-keywords-for-commit-types)
    - [Examples of Commit Messages](#examples-of-commit-messages)
    - [Commit Message Descriptions](#commit-message-descriptions)


8. [Project Structure in Angular](#project-structure-in-angular)



<!------------------------------------------------ Create a New Angular Standalone Project ------------------------------------------------->

## Create a New Angular Standalone Project

1. # *Create a New Project Folder:*
    - Create a new project folder where you want to save your Angular project.
    - The name should be lowercase, with multiple words connected by a "-".



2. # *Open PowerShell in the Right Directory*
    - Open PowerShell in your project folder directory. (You can also use: cd "project-path" in *PowerShell*).



3. # *Install Node.js:*
    - Download Node.js: 'https://nodejs.org/en/download/prebuilt-installer/current'
    - Test if Node.js is installed:

    ```bash```
    node -version



4. # *Install Angular:*
    - Install Angular through PowerShell in the directory of your project folder:

    ```bash```
    npm install -g @angular/cli



5. # *Create New Angular Standalone Project:*
    - Create a new Angular project:

    ```bash```
    ng new project-name --standalone



6. # *Create New Angular Standalone Component:*
    - Create a new standalone component:

    ```bash```
    ng generate component component-name --standalone

    or 

    ```bash```
    ng g c component-name --standalone



<!---------------------------------------------- END OF CREATING A NEW ANGULAR STANDALONE PROJECT ------------------------------------------>



                                                                                                                                            .



<!---------------------------------------------------------------- Install Yarn ------------------------------------------------------------>

## Install Yarn

1. # *Install Yarn:*
    - Go into your project directory:

    ```bash```
    cd project-name


    - Install Yarn with the following command:

    ```bash```
    npm install -g yarn


    - If Yarn is already installed, install only dependencies:

    ```bash```
    yarn install



<!----------------------------------------------------- Install Angular Material with Yarn ------------------------------------------------->

## Install Angular Material with Yarn

1. # *Install Angular Material with Yarn*
    - You can install Angular Material directly in PowerShell in the project directory or through VS Code by opening your project -> open new Terminal -> cd project-path and type:

    ```bash```
    yarn add @angular/material @angular/cdk @angular/animations



<!---------------------------------------------------- END OF INSTALLING ANGULAR MATERIAL -------------------------------------------------->



                                                                                                                                            .



<!----------------------------------------------------------- Install Git Repository ------------------------------------------------------->

## Install Git Repository

1. # *Create a New Git Repository:*
    - To create a new Git repository, go to your GitHub profile and create a new repository under 'Repository -> New' (green button).
    - Give the repository a name (typically your project name).
    - Choose a license (decide if everyone can use your code and under which terms).
    - Click 'Create Repository'.



2. # *Initialize Your Repository:*
    - Initialize your new Git repository:

    ```bash```
    git init


    - Add a remote repository:

    ```bash```
    git remote add origin https://github.com/your-username/project-name.git  
    (use the URL from your repository -> green button)


    - Add all files to your staging area:

    ```bash```
     git add . 


    - Create and test your first commit:

    ```bash``` 
    git commit -m "Initial commit"


    - Push the changes to the remote repository:

    ```bash```
    git push -u origin main



<!--------------------------------------------------- END OF INSTALLING GIT REPOSITORY ----------------------------------------------------->



                                                                                                                                            .



<!--------------------------------------------------- Using GitHub Project with Others ----------------------------------------------------->

## Using GitHub Project with Others

1. # *Invite Others to Your Project:*
    - Go to your project repository on GitHub.
    - In the settings of your repository, go to: 'Collaborators'.
    - Add people -> type in their username.



2. # *Clone Project:*
    - The person should see the repository after accepting your invitation.
    - To clone the code -> press the green "Code" button and copy the URL.
    - In PowerShell, navigate to the folder where you want to have the cloned project and type:

    ```bash```
    git clone https://github.com/your-username/project-name.git


    - be sure you are in the right branch before commit and push changes
    - Learn more about branchen here.


    ~ The project is now ready to use ~



<!------------------------------------------------------- YOUR PROJECT SETUP IS DONE! ------------------------------------------------------>



                                                                                                                                            .



<!------------------------------------------------------ Working with Issues and Branches -------------------------------------------------->

## Working with Issues and Branches

Using Issues and creating dedicated branches for them helps keep work organized and separate. Here’s a quick guide on how to manage this workflow in GitHub and Git:


1. # *Creating a New Issue*
    - Go to your GitHub repository and navigate to the **Issues** tab.
    - Click **New Issue** to create a new issue.
    - Give the issue a descriptive title and add details in the description about the task, bug, or feature.
    - Assign labels, milestone, or assignees if relevant, then click **Submit new issue**.
   


2. # *Creating a New Branch for the Issue*
    - In your local project, make sure you’re in the `main/master` branch (or the default branch) by running:
     
     ```bash```
    git checkout main/master
     

    - Create a new branch from `main`, naming it according to the issue (e.g., `issue-#<issue-number>-description`), with:
     
     ```bash```
     git checkout -b issue-#<issue-number>-description


    - This will create and switch to a new branch for the issue.

    - you can also do this **in git** by clicking on the issue -> **create new branch**
    
     

3. # *Switching Between Branches*
    - To switch back to `main` or any other branch, use:
     
     ```bash```
     git checkout <branch-name>


    - Check which branch you’re currently on at any time with:
     
     ```bash```
     git branch



4. # *Committing and Pushing Changes in the Issue Branch*
    - After making changes, stage and commit them in your issue branch:
     
     ```bash```
     git add .

     git commit -m "fix: resolve issue #<issue-number> - add description"


    - Push the issue branch to GitHub so others can see or review it:
     
     ```bash```
     git push -u origin issue-#<issue-number>-description



5. # *Submitting a Pull Request (PR)*
    - Once the issue is resolved, go to GitHub and create a Pull Request (PR) from your issue branch to the `main` branch.
    - Describe what was done to resolve the issue and link the PR to the issue (e.g., by mentioning `closes #<issue-number>` in the PR      description).
    - After review, merge the PR and delete the issue branch if no longer needed.
   
    - Organizing work with issues and branches ensures clear task separation, making the project easier to manage and collaborate on.



<!-------------------------------------------------- END OF WORKING WITH ISSUES AND BRANCHES ----------------------------------------------->



                                                                                                                                            .



<!-------------------------------------------------------- Commit Message Style Guide ------------------------------------------------------>

## Commit Message Style Guide

A clear and consistent commit message structure helps keep the project history clean and understandable. Follow these guidelines for better Git organization:


1. # *Structure of a Commit Message*
   - Use a short title (50 characters or fewer) that summarizes the change.
   - Leave a blank line after the title.
   - Use the body section for longer explanations if necessary. Limit line length in the description to 72 characters.
   


2. # *Commit Message Language*
   - Write in the present tense and imperative mood (e.g., "Add" instead of "Added").
   - Keep messages concise and describe the change, not the file (e.g., "Fix login bug" instead of "Edit login.js").



3. # *Standardized Keywords for Commit Types*
   - Use a prefix to describe the type of change. This helps to easily filter commit history.
   - Recommended keywords:

     - `feat:` for new features
     - `fix:` for bug fixes
     - `refactor:` for code restructuring without changing functionality
     - `docs:` for documentation changes
     - `style:` for non-functional changes (e.g., formatting)
     - `test:` for adding or updating tests
     - `chore:` for project configuration and tool changes
     - `perf:` for performance improvements
     - `build:` for changes that affect the build (e.g., dependency updates)



4. # *Examples of Commit Messages*

   - `feat:` Add user authentication module
   - `fix:` Resolve issue with navigation on mobile devices
   - `docs:` Update README with setup instructions
   - `style:` Reformat code according to new ESLint rules
   - `test:` Add unit tests for user login component
   - `chore:` Update dependencies to latest versions



5. # *Commit Message Descriptions*

    If the title alone isn’t sufficient, provide more details in the body section.
    Explain why the change is necessary and, if helpful, describe the files or functions impacted.
    Following a consistent commit style keeps the project well-organized and makes it easier to track specific changes and understand each commit’s purpose in the project history.



<!----------------------------------------------------- END OF COMMIT MESSAGE STYLE GUIDE -------------------------------------------------->



                                                                                                                                            .



<!-------------------------------------------------------- Project Structure in Angular ---------------------------------------------------->

## Project Structure in Angular

When building an Angular application, maintaining a well-organized project structure is essential for scalability, maintainability, and collaboration. Below is a recommended project structure layout with an explanation of each directory and its purpose:

src/
  app/
    core/
    shared/
    features/
      components/
        `home.component.ts`
        `home.component.html`
        `home.component.css`
    `app.component.ts`
    `app.component.html`
    `app.component.css`
  assets/
  environments/
index.html
main.ts


- src/: The main source folder for the application.

    - app/: Contains all the application-specific code.

        - core/: Core services, guards, interceptors, and other singleton components used across the app.

        - shared/: Shared components, directives, pipes, and modules that can be reused throughout the app.

        - features/: Feature modules representing distinct parts of the application, such as specific pages.

            - components/: Example of a feature module for the Home page, containing the component's TypeScript logic, template, and styles.

    - assets/: Static files such as images, icons, etc.

    - environments/: Configuration files for different environments.

- index.html: Entry point for the application.

- main.ts: Entry point for bootstrapping the app.



<!-------------------------------------------------------- PROJECT STRUCTURE IN ANGULAR -------------------------------------------------->