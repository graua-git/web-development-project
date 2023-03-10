# POST
$body = @'
{
    "name": "v2",
    "reps": 1,
    "weight": 150,
    "unit": "boulder",
    "date": "08-05-21"
}

'@

Invoke-RestMethod -Uri "http://localhost:3000/exercises" -Method Post -Body $body -ContentType "application/json"

# GET all exercises
Invoke-RestMethod -Uri "http://localhost:3000/exercises" -Method Get

# GET exercise using ID
Invoke-RestMethod -Uri "http://localhost:3000/exercises/611591854db63f0f50c253da" -Method Get

# PUT exercise
$body = @'
{   
    "name": "Squats",
    "reps": 5,
    "weight": 50,
    "unit": "lbs",
    "date": "08-12-21"
}
'@

Invoke-RestMethod -Uri "http://localhost:3000/exercises/611591854db63f0f50c253da" -Method Put -Body $body -ContentType "application/json"

# DELETE exercise by ID
Invoke-RestMethod -Uri "http://localhost:3000/exercises/611591854db63f0f50c253da" -Method Delete
