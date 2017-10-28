'use strict'
const firebase = use('Firebase');
const bean = 'testing 123';

class StudentController {

  * index(request, response) {
    //
    console.log(bean);                
    yield response.sendView('welcome')
  }

  * create(request, response) {
    //
      const body = request._body;
      console.log(request);
      firebase.database().ref(`student-resource-b5dd0`)
      push({
        name: body.name,
        matric_number: body.matric_number,
        level: body.level,
        cgpa: body.cgpa,
        department: body.department,
        dob: body.dob,
        email_address: email_address,        
        phone_number: body.phone_number,
      })

     yield response.sendView('welcome')


  }

  * update(request, response) {
    //
    console.log(bean);                
    yield response.sendView('welcome')
  }

  * destroy(request, response) {
    //
    console.log(bean);                
    yield response.sendView('welcome')
  }

}

module.exports = StudentController
