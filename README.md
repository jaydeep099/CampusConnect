# Campus Connect

Campus Connect is a comprehensive club management and event promotion platform.

## Technologies Used

- Frontend:
  - React JS
- Backend:
  - Spring Boot
- Database:
  - MySql

## Functionalities Implemented

Campus Connect offers the following functionalities:

1. **User Authentication:**

- Users can register and log in to the website.

2. **User Roles:**
   - Club Administrator: Can manage club profiles and events.

- Student: Can browse clubs and events, register for events.

3. **Club Management:**

- Club administrators can create club profiles.
- They can also add, update, and delete events associated with their clubs.

4. **Event Exploration:**

- Students can browse all clubs and their events without logging in.
- They can filter events based on date range and upcoming events.

5. **Admin Panel:**

- System administrators can review and approve club registration requests.

6. **Email Notifications:**

- Club administrators receive email notifications upon registration approval or rejection.

7. **Responsive Design:**

- The website is designed to be responsive and accessible on various devices.

## Project Description

CampusConnect is a comprehensive platform designed to streamline and enhance campus life by connecting students, clubs, and event organizers in a single, user-friendly application. The project aims to solve the problem of fragmented communication and event management within educational institutions by providing a centralized hub for club registrations, event announcements, and student engagement.

**Motivation:**
Campus life is vibrant but often disorganized, with students missing out on opportunities due to scattered information. CampusConnect was built to bridge this gap, making it easier for students to discover, join, and participate in campus activities, while empowering clubs and admins to manage events efficiently.

**Technologies Used:**

- **Frontend:** React (Vite), JavaScript, CSS
- **Backend:** Java (Spring Boot), Maven
- **Database:** (Specify if used, e.g., MySQL, PostgreSQL)
- **Other:** REST APIs

**Key Challenges:**

- Integrating seamless authentication and authorization
- Real-time updates for events and club activities
- Responsive and intuitive UI/UX

**Future Goals:**

- Add mobile app support
- Integrate push notifications
- Expand analytics for clubs and admins


## Installation and Setup Instructions

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- Java 17+
- Maven

### Backend Setup

1. Navigate to the `Backend` directory:
   ```sh
   cd Backend
   ```
2. Build the project:
   ```sh
   ./mvnw clean install
   ```
3. Run the Spring Boot application:
   ```sh
   ./mvnw spring-boot:run
   ```
   The backend server will start on `http://localhost:8080` by default.

### Frontend Setup

1. Navigate to the `CampusConnectApp` directory:
   ```sh
   cd CampusConnectApp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173` (default Vite port).


## Usage

1. **Register/Login:**
   - Students and club admins can register and log in to access personalized dashboards.
2. **Browse Clubs & Events:**
   - Explore available clubs and upcoming events from the dashboard.
3. **Join Clubs & Register for Events:**
   - Students can join clubs and register for events with a single click.
4. **Admin Features:**
   - Club admins can create, edit, and manage events and club details.
5. **Profile Management:**
   - Users can update their profiles and view their participation history.

**Authentication:**
CampusConnect uses secure authentication for all users. You must be logged in to access most features.

## Credits

- [Contributors](https://github.com/jaydeep099/CampusConnect/graphs/contributors)
- Inspired by campus community needs and feedback
- Thanks to the maintainers of [React](https://react.dev/), [Spring Boot](https://spring.io/projects/spring-boot), and open-source tools.

