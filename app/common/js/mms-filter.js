
angular.module('mms-filter', [])
    //display a number as a percentage, or blank if null
    .filter('pfPercentage', ['$filter', function (filter, locale) {
        return function (amount) {
            if (amount == null) return '';
            return amount + '%';
        };
    }])

        //display a number as a percentage, or blank if null
    .filter('pfShortDate', ['$filter', function (filter, locale) {
        var dateFilter = filter('date');
        return function (dt) {
            return dateFilter(dt, "M/d/yyyy");
        };
    }])

    //order an array of objects by a specific field. pretty sure this is currently unused.
    .filter('orderObjectBy', function () {
        return function (items, field, reverse) {
            var filtered = [];
            angular.forEach(items, function (item) {
                filtered.push(item);
            });
            filtered.sort(function (a, b) {
                return (a[field] > b[field]);
            });
            if (reverse) filtered.reverse();
            return filtered;
        };
    })

//for showing a unique list of items     
//can use this as the basis for a category dropdown (adding "all categories" etc)
.filter('unique', function () {
    return function (input, key) {
        if (typeof input == 'undefined') { return; }
        var unique = {};
        var uniqueList = [];
        for (var i = 0; i < input.length; i++) {
            if (typeof unique[input[i][key]] == "undefined") {
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
})

.filter('range', function () {
    return function (input, min, max) {
        min = parseInt(min); //Make string input int
        max = parseInt(max);
        for (var i = min; i <= max; i++)
            input.push(i);
        return input;
    };
})

;