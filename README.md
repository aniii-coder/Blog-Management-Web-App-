<b>NAME: </b> ANIKET V. SINGH <br><b> COMAPNY: </b> CODTECH IT SOLUTIONS <br><b>PROJECT: </b> RECIPE SHARING APP <br><b> DOMAIN: </b> FULL STACK WEB DEVELOPMENT <br><b>ID: </b> CT08DS7685 <br><b>DURATION: </b> AUGUST TO SEPTEMBER 2024






<br>
<h2>Description</h2>

![image](https://github.com/user-attachments/assets/79b66a37-15e8-4450-80bd-7a25401ad2d6)





![image](https://github.com/user-attachments/assets/f00636c6-1d88-4f9d-ad63-7242be9a5158)





![image](https://github.com/user-attachments/assets/5ecbea1c-20d0-42ac-b030-0b44b4c83121)





![image](https://github.com/user-attachments/assets/1c56b005-c805-46fd-aa90-23a06bd7e570)




![image](https://github.com/user-attachments/assets/e2c32e53-a477-4232-b579-adb12cee26d3)






<h1>Recipe Sharing App</h1>

<p>
Welcome to the <strong>Recipe Sharing App</strong>, a platform where users can create, share, and view recipes. This app includes functionalities for creating, updating, and deleting recipes (CRUD operations), and ensures secure user authentication through JSON Web Tokens (JWT).
</p>


<h2>Features</h2>
<ul>
  <li><strong>Recipe Listings</strong>: View different recipes created by various users.</li>
  <li><strong>Create Recipe</strong>: Users can add their own recipes by providing a title, image, category, and instructions.</li>
  <li><strong>Update/Delete Recipe</strong>: Users can modify or delete their previously created recipes.</li>
  <li><strong>Authentication</strong>: Secure user login and registration using JWT for token-based authentication.</li>
  <li><strong>User Roles</strong>: User data management with specific roles such as chef and general users.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li><strong>Frontend</strong>: HTML, CSS, JavaScript (React)</li>
  <li><strong>Backend</strong>: Node.js, Express.js</li>
  <li><strong>Database</strong>: MongoDB</li>
  <li><strong>Authentication</strong>: JWT (JSON Web Tokens)</li>
  <li><strong>Styling</strong>:  CSS </li>
</ul>

<h2>Setup and Installation</h2>

<p>To run this project locally, follow these steps:</p>

<h3>Prerequisites</h3>
<ul>
  <li><a href="https://nodejs.org/" target="_blank">Node.js</a> and npm (Node Package Manager)</li>
  <li><a href="https://www.mongodb.com/" target="_blank">MongoDB</a></li>
</ul>

<h3>Installation</h3>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/yourusername/recipe-sharing-app.git
cd recipe-sharing-app</code></pre>
  </li>
  <li>Install the required dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Create a <code>.env</code> file in the root of the project with the following environment variables:
    <pre><code>MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret_key</code></pre>
  </li>
  <li>Start the backend server:
    <pre><code>npm run dev</code></pre>
  </li>
  <li>Navigate to <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser.</li>
</ol>



<h2>Authentication</h2>
<p>
<strong>JWT</strong> is used for authenticating users. After logging in, the server issues a token which is used for further authenticated requests.
Only authenticated users can create, update, or delete their own recipes.
</p>



<h2>How it Works</h2>
<ol>
  <li><strong>Home Page</strong>: Displays a list of all recipes with images, title, and instructions.</li>
  <li><strong>Create Recipe</strong>: Authenticated users can add new recipes.</li>
  <li><strong>Edit/Delete Recipe</strong>: Users can edit or delete their own recipes.</li>
  <li><strong>User Authentication</strong>: Users must log in or register to create, edit, or delete recipes.</li>
</ol>
