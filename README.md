## Settings
To set up the project, navigate to the main directory and run the following command: npm i


## Run
The project runs based on the value of the platform variable in the test-settings.js file (either android or ios). Tests to be executed are configured based on the tags variable in the test-settings.js file.

For running local Android tests, set the value of platform to android and execute the following command in the terminal (for others, refer to package.json):

Terminal: npm run local


## Report
To view the report, go to the main project directory and run the command allure open.