export const fetchAllPrograms = () => {
    return fetch("http://localhost:8080/programs/all");
};

export const deleteProgram = (program) => {
    return fetch("http://localhost:8080/programs/" + program.id, {method: "DELETE"});
};

export const createProgram = (programName) => {
    return fetch("http://localhost:8080/programs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: programName
    });
};

export const patchProgram = (id, name) => {
    return fetch("http://localhost:8080/programs/" + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: name
    });
};