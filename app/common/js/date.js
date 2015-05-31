//a bit sloppy since it changes the parameters. 
function daysBetween (date1, date2) {
    date1.setHours(0,0,0,0);
    date2.setHours(0,0,0,0);
    return Math.round((date2 - date1) / 8.64e7);
}

function hoursBetween(date1, date2) {
    return Math.abs(date1 - date2) / 36e5;
}

function weeksBetween(date1, date2) {
    return Math.round((date1 - date2) / 1000 / 604800);
}

Date.prototype.addDays = function (days) {
        this.setDate(this.getDate()+days);
        return this;
    }

Date.prototype.getDayName = function() {var d = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; return d[this.getDay()];}
Date.prototype.getMonthName = function() {var m = ['January','February','March','April','May','June','July','August','September','October','November','December']; return m[this.getMonth()];}
Date.prototype.formatShort = function () { return this.getDayName() + ' ' + (this.getMonth() + 1) + '/' + this.getDate(); }
Date.prototype.formatReports = function () { return this.getFullYear() + '-' + (this.getMonth() < 9 ? "0" : "") + (this.getMonth() + 1) + '-' + (this.getDate() < 10 ? "0" : "") + this.getDate(); }

var shortDays = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];