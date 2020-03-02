# API Documentation

## About

This is a API returns users with an array of 17 objects. Each object contains 6 attributes: Plant Id, Name, Description, Grow Zone Number, Watering Interval, and Image URl.

Example object:
<code>
{
    "plantId":"malus-pumila",
    
    "name":"Apple",

    "description":"An apple is a sweet, edible fruit produced by an apple tree (Malus pumila). Apple trees are cultivated worldwide, and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe, and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions.<br><br>Apple trees are large if grown from seed. Generally apple cultivars are propagated by grafting onto rootstocks, which control the size of the resulting tree. There are more than 7,500 known cultivars of apples, resulting in a range of desired characteristics. Different cultivars are bred for various tastes and uses, including cooking, eating raw and cider production. Trees and fruit are prone to a number of fungal, bacterial and pest problems, which can be controlled by a number of organic and non-organic means. In 2010, the fruit's genome was sequenced as part of research on disease control and selective breeding in apple production.<br><br>Worldwide production of apples in 2014 was 84.6 million tonnes, with China accounting for 48% of the total.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Apple\">Wikipedia</a>)",
    
    "growZoneNumber":3,
    
    "wateringInterval":30,
    
    "imageUrl":"https://upload.wikimedia.org/wikipedia/commons/5/55/Apple_orchard_in_Tasmania.jpg"
}
</code>

## Endpoints

### GET
GET : https://jlizardo019-firstapi.glitch.me/plants 

Response: returns entire json file

### POST
POST : https://jlizardo019-firstapi.glitch.me/plants 

*In the body list the new plant object you would like to add to the API*

Body: 
<code>
{
    "plantId": "string",
    
    "name": "string",

    "description":"string",
    
    "growZoneNumber": number,
    
    "wateringInterval":number,
    
    "imageUrl":"string"
}
</code>

Response: updates the json file

### Delete
DELETE : https://jlizardo019-firstapi.glitch.me/plants/plantidyouwantremoved 

*In the url, name the plant id of the object you would like to remove from the API*

Response: updates the json file


