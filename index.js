// Add your code here
/*
// Describe the data to add
const formData = { 
    dogName: 'Byron',
    dogBreed: 'Poodle',
}

// The url to get data 
const destinationURL= 'http://localhost:3000/dogs'

// Add data
const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify (formData),  // convert data to string
};

fetch(destinationURL, configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
});
*/

// The data to post
const submitData = {
    userName: "Caren",
    userEmail:"fetchTest@moringaSchool.com",
}

  // The destinationUrl
const destinationURL = 'http://localhost:3000/users'

// Constructing a POST request
const modifyObject = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    body: JSON.stringify (submitData),
}

fetch(destinationURL,modifyObject)
.then(function (response) {
    return response.json
})
.then(function (users) {
    console.log(users)
})
.catch (function (error) {
    alert ('Houston we have a problem')
    console.log(error.message)
})