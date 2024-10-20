Herbal Remedy Web App API Documentation
Welcome to the Herbal Remedy Web App API. This application allows users to manage and
explore various herbal remedies. Users can register, authenticate, add remedies to favorites, and
provide reviews and ratings.
The backend is powered by Flask, with PostgreSQL as the database, and SQLAlchemy for ORM.
We use Swagger to provide a comprehensive API documentation.
Table of Contents
* Getting Started
* Environment Setup
* API Endpoints Overview
* Authentication
* Herbal Remedies
* Favorites
* Reviews
* Swagger Documentation Access
* Running Migrations
* Seeding the Database
* Running the App
* License
Getting Started
The Herbal Remedy Web App allows users to:
* Browse, search, and explore herbal remedies.
* Manage their favorite remedies.
* Leave reviews and ratings for herbal remedies.
* Authenticate using secure JWT tokens.
This API follows RESTful conventions and uses standard HTTP methods: GET, POST, PUT, and
DELETE.
Environment Setup
1. Clone the repository:
bash
git clone https://github.com/yourusername/remedy-herb-app.git
2. Navigate to the project directory:
cd remedy-herb-app/backend
3. Create a virtual environment:
python3 -m venv venv
source venv/bin/activate
4. Install dependencies:
pip install -r requirements.txt
5. Environment variables: Create a .env file with the following details:
FLASK_APP=app.py
FLASK_ENV=development
DATABASE_URL=postgresql://username:password@localhost/remedy_db
SECRET_KEY=your_secret_key
API Endpoints Overview
Below is a list of available API endpoints grouped by functionality.
Authentication
* POST /register
Registers a new user. Returns a success message with the user’s details.
Request:
{
 "username": "muktar",
 "password": "securepassword123"
}
Response:
{
 "message": "User registered successfully",
 "user": {
 "id": 1,
 "username": "muktar"
 }
}
* POST /login
Authenticates a user and returns a JWT token.
Request:
json
code
{
 "username": "muktar",
 "password": "securepassword123"
}
Response:
{
 "access_token": "your_jwt_token_here"
}
Herbal Remedies
* GET /remedies
Retrieves a list of all herbal remedies in the database.
Response:
[
 {
 "id": 1,
 "name": "Chamomile",
 "description": "Used for relaxation and sleep.",
 "ingredients": "Chamomile flowers",
 "symptoms": "Insomnia, anxiety"
 }
]
* POST /remedies
Adds a new remedy to the database. (Admin only)
Request:
{
 "name": "Chamomile",
 "description": "Used for relaxation and sleep.",
 "ingredients": "Chamomile flowers",
 "symptoms": "Insomnia, anxiety"
}
Response:
{
 "id": 1,
 "message": "Herbal remedy added successfully!"
}
* GET /remedies/{id}
Retrieves detailed information about a specific remedy by ID.
Response:
{
 "id": 1,
 "name": "Chamomile",
 "description": "Used for relaxation and sleep.",
 "ingredients": "Chamomile flowers",
 "symptoms": "Insomnia, anxiety"
}
* PUT /remedies/{id}
Updates a remedy’s information. (Admin only)
Request:
{
 "description": "Updated description",
 "ingredients": "Updated ingredients"
}
Response:
{
 "message": "Herbal remedy updated successfully"
}
* DELETE /remedies/{id}
Deletes a remedy from the database. (Admin only)
Response:
{
 "message": "Herbal remedy deleted successfully"
}
Favorites
* POST /favorites
Adds a remedy to the authenticated user's list of favorites.
Request:
json
Copy code
{
 "remedy_id": 1
}
Response:
json
Copy code
{
 "message": "Added to favorites"
}
* GET /favorites
Retrieves the list of favorite remedies for the authenticated user.
Response:
json
Copy code
[
 {
 "id": 1,
 "name": "Chamomile"
 }
]
* DELETE /favorites/{id}
Removes a remedy from the user's favorites.
Response:
{
 "message": "Removed from favorites"
}
Reviews
* POST /reviews
Adds a review for a specific remedy.
Request:
json
Copy code
{
 "remedy_id": 1,
 "rating": 5,
 "comment": "This remedy worked wonders!"
}
Response:
{
 "message": "Review added successfully"
}
* GET /remedies/{id}/reviews
Retrieves all reviews for a specific remedy.
Response:
json
Copy code
[
 {
 "id": 1,
 "user": "muktar",
 "rating": 5,
 "comment": "This remedy worked wonders!"
 }
]
Swagger Documentation Access
After running the application, you can access the Swagger UI documentation by navigating to the
following URL:
http://localhost:5000/swagger/
This will bring up an interactive interface where you can:
* Explore all available API endpoints.
* Send test requests directly from the browser.
* View sample responses for each request.
Running Migrations
If you modify your database schema, you can apply changes using Flask-Migrate. Run the
following commands:
1. Generate a new migration:
flask db migrate -m "Your migration message"
2. Apply the migration:
flask db upgrade
Seeding the Database
To seed the database with sample data, such as user accounts or remedies, use the provided seed
script:
1. Create a seed script (seed.py):
from app import db, User, Remedy
def seed():
 # Add a sample user
 muktar = User(username='Muktar')
 muktar.set_password('securepassword123')
 db.session.add(muktar)
 # Add a sample remedy
 chamomile = Remedy(
 name="Chamomile",
 description="Used for relaxation and sleep.",
 ingredients="Chamomile flowers",
 symptoms="Insomnia, anxiety"
 )
 db.session.add(chamomile)
 db.session.commit()
if _name_ == '_main_':
 seed()
2. Run the seed script:
python seed.py
3. example
This will insert initial data into your database, including Muktar as a user and a sample remedy.
Running the App
To run the Flask application, use:
flask run
If port 5000 is already in use, you can specify a different port:
flask run --port=5001
License
This project is licensed under the MIT License. You are free to use, modify, and distribute the
project as per the license terms.





