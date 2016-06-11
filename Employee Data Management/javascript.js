var dataRef = new Firebase("https://employee-management.firebaseio.com/");


$('.submit').on('click', function() {
  var name = $('#name').val();
  var role = $('#role').val();
  var startDate = $('#startDate').val();
  var rate = $('#rate').val();
  var monthsWorked = "placeholder";
  var monthlyRate = $('#rate').val();
  var totalBilled = "placeholder";

  dataRef.push({
    name: name,
    role: role,
    startDate: startDate,
    rate: rate,
    dateAdded: Firebase.ServerValue.TIMESTAMP
  });

  $('.form-control').val('');

  return false;
})

dataRef.on('child_added', function(childSnapshot) {
  var name = $('#name').val();
  var role = $('#role').val();
  var startDate = $('#startDate').val();
  var rate = $('#rate').val();
  var monthsWorked = "placeholder";
  var monthlyRate = $('#rate').val();
  var totalBilled = "placeholder";

  console.log(childSnapshot.val().name);
  console.log(childSnapshot.val().role);
  console.log(childSnapshot.val().startDate);
  console.log(childSnapshot.val().rate);
  console.log(childSnapshot.val().dateAdded);

  $('.table > tbody').append(
    '<tr>' +
    '<td>' + name + '</td>' +
    '<td>' + role + '</td>' +
    '<td>' + startDate + '</td>' +
    '<td>' + monthsWorked + '</td>' +
    '<td>' + monthlyRate + '</td>' +
    '<td>' + totalBilled + '</td>' +
    '</tr>'
  );
})
