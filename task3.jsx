function Task3() {
  const students = [
    { id: 1, name: "Aiza", score: 85 },
    { id: 2, name: "Ali", score: 45 },
    { id: 3, name: "Sara", score: 72 },
    { id: 4, name: "Ahmed", score: 35 }
  ];

  return (
    <div>
      <h1>Task 3: Student Results</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Score: {student.score}</p>

          {student.score >= 50 ? (
            <p style={{ color: "green" }}>Pass</p>
          ) : (
            <p style={{ color: "red" }}>Fail</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Task3;