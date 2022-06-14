# Getting Started with Connect

This project was architected using AWS Cloud services for the backend to create a serverless application. Connect is based off of Meetup with some additional functionality such as being able to utilize Google Maps while on the platform to generate a hangout between you and your friends. Key functional highlights include a chat feature between friends, google maps to generate hangouts, a full follow feature among friends and ability to see other user's hangouts. Coming soon: public/private hangouts, email subscription based off of created hangouts and sharing events feature and ability to filter events based off of calendar selection.

I chose to create a serverless application as my Flatiron capstone project as I wanted to challenge myself with building on top of AWS services. Although I am certified through the AWS SAA exam, I felt most of it was more conceptual based as opposed to actually doing real-world exercises hence my idea to create Connect. The inspiration for the app itself was mostly due to me always forgetting hangouts with my friends due to the work in our everyday lives and wanted to create an application that helped set reminders.

## AWS Architecture

Figma link: https://www.figma.com/file/kVMZFuWwZ9eESFlb9Ji5WR/Connect-Architecture?node-id=0%3A1

Some features have still not been implemented based off of the shown architecture but this is what the project should end up being. Stretch goal is to add a video chat feature utilizing AWS Chime services.

## NPM Libraries

Feel free to run bundle install but the primary libraries used were:
(npm i @reach/combobox) combobox: for GoogleMaps Places Autocomplete
(npm i google-map-react) google-maps-react: for GoogleMaps functionality
MUI libraries for CSS
(npm i @aws-amplify/cli) amplify CLI: to enable serverless functionalities
