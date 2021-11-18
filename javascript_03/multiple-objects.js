//Constructor - Ham Tao
function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
};
//Create two hotel objects
var quayHotel = new Hotel(name: 'Quay', rooms: 40, booked: 25);
var parkHotel = new Hotel(name: 'Park', rooms: 120, booked: 77);

// Update the HTML for the page
var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
    var elHotel1 = document.getElementById(elemantld: 'hotel1');
    elHotel1.textContent = details1;

var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById(elemantld: 'hotel1');
    elHotel1.textContent = details1;

