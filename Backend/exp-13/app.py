from flask import Flask, request, jsonify
import os

app = Flask(__name__)

# In-memory database
students = []
current_id = 1


# CREATE
@app.route('/students', methods=['POST'])
def create_student():
    global current_id
    data = request.json

    if not data.get("name"):
        return jsonify({"error": "Name is required"}), 400

    student = {
        "id": current_id,
        "name": data["name"]
    }

    students.append(student)
    current_id += 1

    return jsonify(student), 201


# READ ALL
@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students), 200


# READ ONE
@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    for student in students:
        if student["id"] == id:
            return jsonify(student), 200
    return jsonify({"error": "Student not found"}), 404


# UPDATE
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.json

    for student in students:
        if student["id"] == id:
            student["name"] = data.get("name", student["name"])
            return jsonify(student), 200

    return jsonify({"error": "Student not found"}), 404


# DELETE
@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    global students
    students = [s for s in students if s["id"] != id]
    return jsonify({"message": "Student deleted"}), 200


# RUN APP (Render compatible)
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))