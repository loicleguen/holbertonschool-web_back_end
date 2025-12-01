#!/usr/bin/env python3
"""Return all students sorted by average score"""


def top_students(mongo_collection):
    """Returns all students sorted by average score.
    The average score is added as 'averageScore' in each document."""
    students = []
    for student in mongo_collection.find():
        topics = student.get('topics', [])
        if topics:
            avg = sum(t['score'] for t in topics) / len(topics)
        else:
            avg = 0
        student['averageScore'] = avg
        students.append(student)
    return sorted(students, key=lambda x: x['averageScore'], reverse=True)
