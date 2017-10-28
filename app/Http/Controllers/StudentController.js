'use strict'
const firebase = use('Firebase');
const bean = 'testing 123';

class StudentController {

  * index(request, response) {
    firebase.database().ref('/students/')
      .once('value', snapshot => {
        response.send(snapshot);
      })

  }

  * create(request, response) {
    const body = request._body;

    firebase.database().ref(`/students/`).push({
      name: body.name,
      registration_number: body.registration_number,
      current_part: body.current_part,
      degree_programme: body.degree_programme,
      department: body.department,
      faculty: body.faculty,
      hall_of_residence: body.hall_of_residence
    }).then((res) => {
      response.status(200).send(res);
    }).catch((err) => {
      response.status(400).send(err)
    });

  }

  * update(request, response) {
    const body = request._body;
    const id = request._params.id;

    firebase.database().ref(`/students/${id}`).set({
      name: body.name,
      registration_number: body.registration_number,
      current_part: body.current_part,
      degree_programme: body.degree_programme,
      department: body.department,
      faculty: body.faculty,
      hall_of_residence: body.hall_of_residence
    }).then((res) => {
      response.status(200).send(res);
    }).catch((err) => {
      response.status(400).send(err)
    });
  }

  * destroy(request, response) {
    const id = request._params.id;
    console.log(id);
    firebase.database().ref(`/students/${id}`).remove()
      .then((res) => {
        response.status(200).send(res)
      }).catch((err) => {
        response.status(404).send(err)
      });
  }

}

module.exports = StudentController
