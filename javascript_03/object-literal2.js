// Set up the object
var hotel = {
    name : 'Park',
    rooms: 120,
    booked: 77,
checkAvailability : function () {
    return this.rooms - this.booked;
};
    var elName = document.getElementById(elementld: 'hotelName');
    elName.textContent = hotel.name;