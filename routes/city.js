var express = require('express');
var router = express.Router();

const cities = require("../data/cities")

// - /city/:people
router.get('/people', function(req, res, next) {
    res.send("people")
});

// - /city/:edurekacity
router.get('/:edurekacity', function(req, res, next) {
    
    let cityInfo = null;
    for (let index = 0; index < cities.list.length; index++) {
        const city = cities.list[index];
        if(city.slug.indexOf(req.params.edurekacity) > -1)
            {
                cityInfo = city
            }
    }
    res.render("city", { info : cityInfo, cities : cities.list, title : cityInfo.name })
});

module.exports = router;