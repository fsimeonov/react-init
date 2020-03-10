export const fetchAllStudents = () => {
  return fetch("http://localhost:8080/students")
};

export const fetchStudent = (index) => {
  return fetch("http://localhost:8080/students/" + index);
};

export const patchStudent = (index, params) => {
  return fetch("http://localhost:8080/students/" + index,{
      method: "PATCH",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(params)
  })
};

export const deleteStudent = (index) => {
    return fetch("http://localhost:8080/students/" + index, {method: "DELETE"});
};

export const createStudent = (params) => {
    return fetch("http://localhost:8080/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(params)
    });
};