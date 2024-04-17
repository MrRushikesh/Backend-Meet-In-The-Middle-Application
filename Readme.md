# Backend Meet in the Middle App Documentation

## Introduction
The Meet in the Middle app aims to facilitate the process of organizing meetings by finding a convenient location for all invitees. This documentation provides an overview of the features, tools, technologies, and workflows involved in the development and use of the app.

## Application Overview
Meet in the Middle (version 1.0) includes the following core features:
1. OTP-based authentication or email authentication.
2. Creation of new meetings and sending invites via SMS.
3. Ability for users to join meetings by tapping the link in the SMS.
4. Retrieval of user locations upon joining the website.
5. Finding and listing good places that are at an almost equal distance from each meeting participant.

## Tools and Technologies
- **Frontend:**
  - HTML, CSS, and JavaScript
  - React framework

- **Backend:**
  - Developed using Node.js
  - Hosted on Amazon Web Services (AWS)

- **Storage:**
  - Profile pictures stored in AWS S3

- **Authentication:**
  - OTP service implementation left to backend developer's discretion

- **Analytics and Notifications:**
  - Firebase's Crashlytics for app usage analytics
  - Firebase for push notifications

## Web Flow and Screens

### Landing Screen
- Initial screen with options to sign up or sign in using a registered mobile number.

### Authentication Screens
1. **Sign Up Screen:**
   - User provides full name, profile picture, and mobile number.
   - Proceed button to move to OTP Screen.

2. **Sign In Screen:**
   - User enters registered mobile number.
   - Proceed button to move to OTP Screen.

3. **OTP Screen:**
   - User enters OTP received via SMS.
   - Timer for 1 minute with resend OTP option.
   - Proceed button for successful authentication.

### Home Screen
- Displayed after successful authentication.
- Features:
  - My Meetings List
  - Invitation List
  - Create a New Meeting
  - User Profile
  - Notifications

### My Meetings List
- Displays upcoming meetings.
- Details include meeting name, creator, date/time, invited/joined counts.
- Sorted with soonest meetings first.

### Invitations List
- Displays pending meeting invitations.
- Options to accept or decline invites.
- Details include meeting name, creator, date/time, invited/joined counts.

### Meet in the Middle Places List
- Shows suggested meeting places based on user locations.
- Includes place name, distance, and image.
- Sorted by ascending distance.

### Create a New Meeting
- Form to create a new meeting with:
  - Meeting name
  - Description (optional)
  - Date/time
  - Invite contacts
  - Starting location

### User Profile
- Displays user information and options:
  - Profile picture
  - User name
  - List of created meetings
  - List of upcoming meetings
  - List of pending invitations
  - Disable push notifications
  - Log out
  - Send feedback

### Other User Profile Page
- Details of another user on tapping their name.
- Shows profile picture, user name, phone number, and common upcoming meetings.

## Push Notifications
- Users receive notifications for:
  1. New meeting invites
  2. Meeting reminders
  3. Joining of all invitees to a meeting
  4. Updates/deletion of meetings (except for the creator)
  5. Reminder 2 hours before meeting

## Future Ideas 
- Booking a ride (e.g., Uber, Ola)
- Confirming a meeting place
- Voting for meeting places
- Updating phone number
- Adding reminders to user's calendar

## Conclusion
The Meet in the Middle app provides a streamlined way for users to organize meetings at convenient locations for all participants. With features like OTP-based authentication, meeting creation, invitations, and location-based suggestions, it aims to simplify the process of scheduling and planning meetings.