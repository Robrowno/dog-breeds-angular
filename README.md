# dog-breeds-angular
An Angular App/site that displays information about different dog breeds for a technical test using Typrescript/Angular Framework

I have continued with the project post-assesment in order to get a bit more familiar with the Angular framework.

## Current look of the site:

![Current look of the site](./first-app/src/assets/readme_images/current-look.png)

There is now a working details page included in the latest version of the site - the fix for early troubles is detailed below.

![Details Page](./first-app/src/assets/readme_images/details-page-v1.0.png)

I have included some basic filtering functionality thanks to some help from the Angular docs:

![Filtering functionality](./first-app/src/assets/readme_images/filtering.png)


##  Early version of the site:

![Site Screenshot](./first-app/src/assets/readme_images/site-v1.0.png)


## Objectives:

###  Create a site centered around information around different dog breeds

Key Steps: 
1. Set up IDE/Workspace in VSCode
2. Ensure all dependencies were installed with lastest stable versions
3. Read through the Angular documentation to walkthrough how to create an Angular App in VSCode

## JSON Server set-up:

I moved the dog breeds into a db.json file as per an Angular Tutorial and as such there are some steps you need to take to run the JSON server:

1. When you have created your json file, enter this command into your command line:
    ` npm install -g json-server `
2. Populate the file with the json data that you want to include.
3. Test that it is working by changing directory in to the root where your db.json file should be located and entering:
    ` json-server --watch db.json `
4. In your web browser, navigate to the http://localhost:3000/< name of you json object here > and confirm that the response includes the data stored in db.json.
5. You will need to now convert the rest of your project to use this JSON server to host your data and render it on your site.



## Issues:

- I was not able to install the Angular CLI at first due to permissions issues and errors showing in the terminal. I found a helpful fix online for this, and by inputting this command I had access and full permissions granted to use the Angular CLI:
    - ![Angular CLI issue](./first-app/src/assets/readme_images/Screenshot%202023-05-25%20at%2017.19.24.png)

- I had some issues getting the details page to work properly. I started using the code companion github copilot since the assesment was submitted and it helped me to resolve the issues. See the old code commented out and the fix below:
    -![Details page fix](./first-app/src/assets/readme_images/details-fix.png)

## Credits:

- The [Angular Docs](https://angular.io/docs) and [Tutorials](https://angular.io/tutorial/first-app) were instrumental in helping me to work with a framework that was totally unfamiliar to me up to this point.
- I found the solution to the Angular CLI issue detailed above from stackoverflow - I will include a link to this page later when I can find it.
- Github Copilot code companion for helping to resolve the details page issues!
