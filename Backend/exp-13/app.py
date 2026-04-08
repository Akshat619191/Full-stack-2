from flask import Flask, request, jsonify

app = Flask(__name__)

# Temporary in-memory database (for testing)
students = []
current_id = 1


# CREATE STUDENT
@app.route('/students', methods=['POST'])
def create_student():
    global current_id
    data = request.json

    # Validation
    if not data.get("name"):
        return jsonify({"error": "Name is required"}), 400

    student = {
        "id": current_id,
        "name": data["name"]
    }

    students.append(student)
    current_id += 1

    return jsonify(student), 201


# GET ALL STUDENTS
@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students), 200


# GET SINGLE STUDENT
@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    for student in students:
        if student["id"] == id:
            return jsonify(student), 200

    return jsonify({"error": "Student not found"}), 404


# UPDATE STUDENT
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.json

    for student in students:
        if student["id"] == id:
            student["name"] = data.get("name", student["name"])
            return jsonify(student), 200

    return jsonify({"error": "Student not found"}), 404


# DELETE STUDENT
@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    global students
    students = [s for s in students if s["id"] != id]

    return jsonify({"message": "Student deleted"}), 200


if __name__ == '__main__':
    app.run(debug=True)