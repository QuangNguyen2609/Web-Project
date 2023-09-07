# UniVerse Social Web App

![Group Image](public/images/universe.png)
Universe is a social network platform for student clubs and events. It allows users to sign up, join clubs, view updates, and RSVP for events. Club managers have additional features to manage their clubs, post updates, and create events. System admins have overall control and can manage users, clubs, and other admins.

## Features

- **User Authentication**: Users can sign up and log in to the system to manage their user information and access the app's features.
- **Club Membership**: Users can join clubs of their interest and receive updates from the clubs they are members of.
- **Club Updates**: Users can view updates posted by the clubs they are members of.
- **Event RSVP**: Users can see upcoming club events and RSVP for them.
- **Club Manager Features**: Club managers have additional capabilities, including viewing their club members, posting updates publicly or privately, and creating/updating club events.
- **System Admin Features**: System admins have control over the entire system. They can manage user information, users, clubs, and other admins. They can also sign up other admins.
- **Email Integration**: Users can link their email to facilitate easy login.
- **Public Access**: Users without accounts can still view public information and updates for clubs.
- **Email Notifications** (Special Feature): Users can sign up to receive email notifications from clubs, such as updates and special events. Users can choose the types of email notifications they want to receive for each club.

## Getting Started

To run the web app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/UAdelaide/23S1_WDC_UG063_Red_Devils`
2. Install the required dependencies: `npm install`
3. Turn on the database: `service mysql start`
4. Load the database config and data: `mysql < db.sql`
5. Run the app: `npm start`
6. Access the app in your web browser at `http://localhost:8080`

<b> Warning: nodemailer might not work because the tokens will be expired for security reason. If you want to try that feature, please contact me via this email `quangnguyentechno@gmail.com` so i can give you new tokens. Cheers! </b>

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js, Vue.js, AJAX
- Database: MySQL
- Authentication: JSON Web Tokens (JWT), OAuth2, bcrypt
- Email Notifications: nodemailer

## Contributing

Contributions to the Social Student Club Web App are welcome! If you find any issues or have suggestions for improvement, please submit a pull request. Make sure to follow the project's coding style and guidelines.

## Acknowledgements

- This web app was inspired by Eventbrite and Meetup, a leading event management and ticketing platform.
- Special thanks to the developers and contributors of the libraries and frameworks used in this project.

## Demo Video

- The link to the demo video can be found here: https://drive.google.com/file/d/1d7kOYrGWeHCXrB1kENh3ttJcgj2vDqxX/view?usp=drive_link
