
  function getRating() {
    let science = parseFloat(document.getElementById("science").value);
    let math = parseFloat(document.getElementById("math").value);
    let english = parseFloat(document.getElementById("english").value);

    if (isNaN(science) || isNaN(math) || isNaN(english)) {
      alert("Please enter all grades before analyzing.");
      return;
    }

    let average = (science + math + english) / 3;
    average = Math.round(average * 100) / 100;

    let rating = "";
    if (average >= 94 && average <= 100) {
      rating = "Excellent";
    } else if (average >= 87) {
      rating = "Above Satisfactory";
    } else if (average >= 80) {
      rating = "Satisfactory";
    } else if (average >= 75) {
      rating = "Needs Improvement";
    } else if (average >= 70) {
      rating = "Poor";
    } else {
      rating = "Invalid - below grading scale";
    }

    alert(`Your average is: ${average}\nRating: ${rating}`);
  }
