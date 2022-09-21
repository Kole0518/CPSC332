window.onload = function()
{
    let firstName = GetURLParameterValue("fname");
    let lastName = GetURLParameterValue("lname");
    let knowledgeCheck = GetURLParameterValue("knowledge-check");
    let entertainment = GetURLParameterValue("entertainment");

    document.getElementById("fname").textContent = firstName;
    document.getElementById("lname").textContent = lastName;
    document.getElementById("knowledge-check").textContent = knowledgeCheck;
    document.getElementById("entertainment").textContent = entertainment;
};

function GetURLParameterValue(searchParameter)
{
    let queryString = window.location.search.substring(1);
    let URLFieldValues = queryString.split('&');

    for (let i = 0; i < URLFieldValues.length; i++)
    {
        let params = URLFieldValues(i).split('=');
        if (params[0] == searchParameter)
        {
            return params[1];
        }
    }
}