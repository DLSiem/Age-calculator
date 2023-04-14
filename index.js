function calculateAge() {
  // Selecting Elements

  let DD = document.getElementById("day").value;
  let MM = document.getElementById("month").value;
  let YYYY = document.getElementById("year").value;

  // converting the inputs into nunbers

  var day = Number(DD);
  var month = Number(MM) - 1;
  var year = Number(YYYY);
  console.log("Month:" + month + "Days" + day + "Years" + year);

  // getting today's date

  var todayDate = new Date().getDate();
  var todayMonth = new Date().getMonth();
  var todayYear = new Date().getFullYear();

  // console.log(
  //   "Month:" + (month + 1) + "Days" + (day + 1) + "Years" + (year + 1)
  // );

  // calculating years

  var numYears;
  if (todayMonth > month || (todayMonth == month && todayDate >= day)) {
    numYears = todayYear - year;
    if (year === 1) {
      document.getElementById("txtyear").innerHTML = "year";
    }
  } else {
    numYears = todayYear - year - 1;
  }
  if (numYears === 1) {
    document.getElementById("txtyear").innerHTML = " year";
  }

  // calculating months
  var numMonths;
  if (todayDate >= day) {
    numMonths = todayMonth - month;
  } else if (todayDate < day) {
    numMonths = todayMonth - month - 1;
  }
  numMonths = numMonths < 0 ? numMonths + 12 : numMonths;
  if (numYears === 1) {
    document.getElementById("txtyear").innerHTML = " year";
    document.getElementById("age").innerText = "year";
  }

  //calculating days
  var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var numDays;
  if (todayDate >= day) {
    numDays = todayDate - day;
  } else {
    numDays = todayDate - day + monthDays[month];
  }
  if (numYears === 1) {
    document.getElementById("txtyear").innerHTML = " year";
  }

  ///// error messages

  let dayBorder = document.getElementById("day");
  let monthBorder = document.getElementById("month");
  let yearBorder = document.getElementById("year");

  let dayErr = document.querySelector(".day-error");
  let monthErr = document.querySelector(".month-error");
  let yearErr = document.querySelector(".year-error");

  ///// error type: empty input
  if (DD == "" || MM == "" || YYYY == "") {
    dayErr.innerText = "This field is required!";
    monthErr.innerText = "This field is required!";
    yearErr.innerText = "This field is required!";
    document.getElementById("years").innerHTML = "--";
    document.getElementById("months").innerHTML = "--";
    document.getElementById("days").innerHTML = "--";
    document.getElementById("day-label").style.color = "red";
    document.getElementById("month-label").style.color = "red";
    document.getElementById("year-label").style.color = "red";
    dayBorder.style.border = "1px solid red";
    monthBorder.style.border = "1px solid red";
    yearBorder.style.border = "1px solid red";
  } else if (DD != "" && MM != "" && YYYY != "") {
    document.getElementById("years").innerHTML = numYears;
    document.getElementById("months").innerHTML = numMonths;
    document.getElementById("days").innerHTML = numDays;
    dayErr.innerText = "";
    monthErr.innerText = "";
    yearErr.innerText = "";
    document.getElementById("day-label").style.color = "";
    document.getElementById("month-label").style.color = "";
    document.getElementById("year-label").style.color = "";
    dayBorder.style.border = "";
    monthBorder.style.border = "";
    yearBorder.style.border = "";
  }

  ///// error : dates in the future

  if (year > todayYear) {
    yearErr.innerText = "Year in the future";
    document.getElementById("years").innerHTML = "--";
    document.getElementById("months").innerHTML = "--";
    document.getElementById("days").innerHTML = "--";
    document.getElementById("day-label").style.color = "red";
    document.getElementById("month-label").style.color = "red";
    document.getElementById("year-label").style.color = "red";
    dayBorder.style.border = "1px solid red";
    monthBorder.style.border = "1px solid red";
    yearBorder.style.border = "1px solid red";
  } else if (year === todayYear) {
    if (month === todayMonth && day > todayDate) {
      dayErr.innerText = "Date in the future";
      document.getElementById("years").innerHTML = "--";
      document.getElementById("months").innerHTML = "--";
      document.getElementById("days").innerHTML = "--";
      document.getElementById("day-label").style.color = "red";
      document.getElementById("month-label").style.color = "red";
      document.getElementById("year-label").style.color = "red";
      dayBorder.style.border = "1px solid red";
      monthBorder.style.border = "1px solid red";
      yearBorder.style.border = "1px solid red";
    } else if (month > todayMonth) {
      monthErr.innerText = "Month in the future";
      document.getElementById("years").innerHTML = "--";
      document.getElementById("months").innerHTML = "--";
      document.getElementById("days").innerHTML = "--";
      document.getElementById("day-label").style.color = "red";
      document.getElementById("month-label").style.color = "red";
      document.getElementById("year-label").style.color = "red";
      dayBorder.style.border = "1px solid red";
      monthBorder.style.border = "1px solid red";
      yearBorder.style.border = "1px solid red";
    }
  }
  ///// error : invalid month
  if (month > 11) {
    monthErr.innerText = "Must be a valid month";
    document.getElementById("years").innerHTML = "--";
    document.getElementById("months").innerHTML = "--";
    document.getElementById("days").innerHTML = "--";
    document.getElementById("day-label").style.color = "red";
    document.getElementById("month-label").style.color = "red";
    document.getElementById("year-label").style.color = "red";
    dayBorder.style.border = "1px solid red";
    monthBorder.style.border = "1px solid red";
    yearBorder.style.border = "1px solid red";
  }

  //// error invalid days
  if (day > monthDays[month] || day > 31) {
    dayErr.innerText = "Must be a valid date";
    document.getElementById("years").innerHTML = "--";
    document.getElementById("months").innerHTML = "--";
    document.getElementById("days").innerHTML = "--";
    document.getElementById("day-label").style.color = "red";
    document.getElementById("month-label").style.color = "red";
    document.getElementById("year-label").style.color = "red";
    dayBorder.style.border = "1px solid red";
    monthBorder.style.border = "1px solid red";
    yearBorder.style.border = "1px solid red";
  }
  ///// error : if input are not number
  if (day == NaN) {
    dayErr.innerText = "Please input a number!";
    document.getElementById("years").innerHTML = "--";
    document.getElementById("months").innerHTML = "--";
    document.getElementById("days").innerHTML = "--";
    document.getElementById("day-label").style.color = "red";
    document.getElementById("month-label").style.color = "red";
    document.getElementById("year-label").style.color = "red";
    dayBorder.style.border = "1px solid red";
    monthBorder.style.border = "1px solid red";
    yearBorder.style.border = "1px solid red";
  }

  if (month == undefined) {
    monthErr.innerText = "Please input a number!";

    document.getElementById("years").innerHTML = "--";
    document.getElementById("months").innerHTML = "--";
    document.getElementById("days").innerHTML = "--";
    document.getElementById("day-label").style.color = "red";
    document.getElementById("month-label").style.color = "red";
    document.getElementById("year-label").style.color = "red";
    dayBorder.style.border = "1px solid red";
    monthBorder.style.border = "1px solid red";
    yearBorder.style.border = "1px solid red";
  }
  if (year == NaN) {
    yearErr.innerText = "Please input a number!";
    document.getElementById("years").innerHTML = "--";
    document.getElementById("months").innerHTML = "--";
    document.getElementById("days").innerHTML = "--";
    document.getElementById("day-label").style.color = "red";
    document.getElementById("month-label").style.color = "red";
    document.getElementById("year-label").style.color = "red";
    dayBorder.style.border = "1px solid red";
    monthBorder.style.border = "1px solid red";
    yearBorder.style.border = "1px solid red";
  }
  if (numMonths === 0 && numDays === 0) {
    // Birthday

    document.getElementById("result").innerHTML = "<h3> Happy Birthday!</h3>";
    document.getElementById("age").innerHTML =
      "You are " + numYears + (numYears === 1 ? " year" : " years") + " Old";
  }
}

// prevent refresh of the form
var form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
}

form.addEventListener("submit", handleForm);
