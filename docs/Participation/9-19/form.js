function submitWatch()
{
    let form = document.getElementById("formSubmission");
    let table = document.getElementById("data");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        submit();
    })

    const submit=()=>
    {
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let knowledgeCheck = document.getElementById("knowledge-check").value;
        let rating = document.getElementsByName("rating").checked;
        let entertainment = document.getElementById("entertainment").value;

        let newArray = [fname, lname, knowledgeCheck, rating, entertainment];
        newArray.forEach((item)=>{
            var li = document.createElement("li");
            var text = document.createTextNode(item);
            li.appendChild(text);
            table.appendChild(li);
        })

        form.reset();
    }
}