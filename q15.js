// Q14 Answer:
var guests = ["Kamran Tessori", "Allama Iqbal", "Quaid-e-Azam", "Nikola Tesla"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// Q15 Answer:
var unableToAttend = "Nikola Tesla";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Ameen Alam";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
