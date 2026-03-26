# Experiment 11 - Microservice-Based Backend Module
**Name:** Akshat
## 📌 Objective

To develop a microservice-based backend system using Python Flask by creating independent services for handling customer and order-related operations.

---

## 🧩 Task Description

In this experiment, two separate backend services were developed:

### 1. Customer Service

* Built using Flask
* Stores customer data in-memory
* Provides an API to fetch customer orders

**Endpoint:**
GET /customers/<customer_id>/orders

---

### 2. Order Service

* Built using Flask
* Stores order data in-memory
* Provides an API to update order status

**Endpoint:**
PUT /orders/<order_id>

---

## ⚙️ Technologies Used

* Python
* Flask
* Postman (for API testing)
* VS Code
* Render (for deployment)

---

## ▶️ How to Run the Project

### Step 1: Install dependencies

pip install -r requirements.txt

### Step 2: Run Customer Service

cd customer_service
python customer_app.py

### Step 3: Run Order Service

cd order_service
python order_app.py

---

## 🧪 Testing

APIs were tested using Postman:

* Fetch customer orders using GET request
* Update order status using PUT request with JSON body

---

## 🎯 Learning Outcomes

After completing this experiment, I learned:

* Understanding of Microservices Architecture
* How to build REST APIs using Flask
* How to separate services into independent modules
* Handling in-memory data in backend systems
* Testing APIs using Postman
* Running multiple backend services simultaneously
* Basics of deploying backend services on cloud platforms (Render)

---

## 📦 Conclusion

This experiment helped in understanding how microservices work by dividing a system into smaller independent services. It improved my practical knowledge of backend development and API handling using Flask.
