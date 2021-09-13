import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/';

type student = {
  id: number;
  name: String;
  department_id?: number;
  department_name?: String;
};

function App() {
  const [students, setStudents] = useState<student[]>([]);

  const createList = () => {
    return students.map((data: student, index: number) => {
      return (
        <div key={index}>
          <p>id : {data.id}</p>
          <p>name : {data.name}</p>
          <p>department_name : {data.department_name}</p>
        </div>
      );
    });
  };

  const postStudent = (name: String, department_id: number) => {
    axios
      .post('/api/student/post', { name, department_id })
      .then((res) => {
        console.log(res);
      })
      .catch();
  };

  const handleSubmit = (event: any) => {
    event.preventDefault(); //새로고침 막기
    postStudent(
      event.target.student_name.value,
      event.target.department_id.value
    );
  };

  useEffect(() => {
    axios
      .get('/api/student/get')
      .then((res) => {
        setStudents(res.data.students);
        console.log(res.data.students);
      })
      .catch();
  }, []);

  return (
    <div className="App">
      <div className="write">
        <form onSubmit={handleSubmit}>
          이름
          <input type="text" id="student_name" name="student_name" />
          <br />
          학과번호
          <input type="text" id="department_id" name="department_id" />
          <br />
          <button type="submit"> 제출 </button>
        </form>
      </div>
      <div className="list">{createList()}</div>
    </div>
  );
}

export default App;
