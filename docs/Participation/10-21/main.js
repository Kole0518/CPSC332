function errorAlert(input)
{
    alert("You forgot to enter a value for " + input);
}

function saveAlert(value, input)
{
    let display = document.getElementById(input);
    let update = document.getElementById("error-display");
    let form = document.getElementById("form-submission");
    display.style.backgroundColor = "lightgreen";
    form.style.borderBottomLeftRadius = 0;
    form.style.borderBottomRightRadius = 0;
    var text = document.createTextNode("Value '" + value + "' saved successfully.");
    update.innerHTML = "";
    update.appendChild(text);
}

function resetForm()
{
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let fcolor = document.getElementById("fcolor");
    let clookalike = document.getElementById("clookalike");
    let update = document.getElementById("error-display");
    let form = document.getElementById("form-submission");

    form.style.borderBottomLeftRadius = "1rem";
    form.style.borderBottomRightRadius = "1rem";
    fname.style.backgroundColor = "ghostwhite";
    lname.style.backgroundColor = "ghostwhite";
    fcolor.style.backgroundColor = "ghostwhite";
    clookalike.style.backgroundColor = "ghostwhite";
    update.innerHTML = "";
}

function saveFirstName()
{
    let fname = document.getElementById("fname");

    if (!fname.value)
    {
        console.log("No value entered for first name.");
        errorAlert("First Name");
    }
    else
    {
        sessionStorage.setItem(fname, fname.value);
        console.log("First name: " + sessionStorage.getItem(fname));
        saveAlert(fname.value, "fname");
    }
}

function saveLastName()
{
    let lname = document.getElementById("lname");

    if (!lname.value)
    {
        console.log("No value entered for last name.");
        errorAlert("Last Name");
    }
    else
    {
        sessionStorage.setItem(lname, lname.value);
        console.log("Last name: " + sessionStorage.getItem(lname));
        saveAlert(lname.value, "lname");
    }
}

function saveColor()
{
    let color = document.getElementById("fcolor");

    if (!color.value)
    {
        console.log("No value entered for color.");
        errorAlert("Favorite Color");
    }
    else
    {
        sessionStorage.setItem(color, color.value);
        console.log("Favorite Color: " + sessionStorage.getItem(color));
        saveAlert(color.value, "fcolor");
    }
}

function saveCelebrity()
{
    let clookalike = document.getElementById("clookalike");

    if (!clookalike.value)
    {
        console.log("No value entered for celebrity lookalike.");
        errorAlert("Celebrity Lookalike");
    }
    else
    {
        sessionStorage.setItem(clookalike, clookalike.value);
        console.log("Celebrity lookalike: " + sessionStorage.getItem(clookalike));
        saveAlert(clookalike.value, "clookalike");
    }
}

function submitWatch()
{
    let form = document.getElementById("form-submission");
    let table = document.getElementById("data");

    form.addEventListener("submit", (e) =>
    {
        e.preventDefault();
        submit();
    });

    const submit=()=>
    {
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let fcolor = document.getElementById("fcolor").value;
        let clookalike = document.getElementById("clookalike").value;
        let newArr = [fname, lname, fcolor, clookalike];

        newArr.forEach((item) =>
        {
            var li = document.createElement("li");
            var text = document.createTextNode(item);

            li.appendChild(text);
            table.appendChild(li);
        });

        form.reset();
    }
}