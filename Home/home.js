document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#checkin-checkout", {
      mode: "range",
      dateFormat: "Y-m-d",
      minDate: "today", 
      onClose: function(selectedDates, dateStr) {
        console.log("Selected Dates:", dateStr); 
      },
    });
  });
  