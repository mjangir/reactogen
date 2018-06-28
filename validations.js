module.exports = {
    isRequired: function(value, answers) {
        if (value.trim() === '') {
            return 'You must have to provide a value';
        }
        return true;
    },
    validateLines: function(value, answers) {
        const lines = value.split("\r\n");
        for (let i in lines) {
            if (!(/^[a-zA-Z0-9-_]+$/.test(lines[i]))) {
                return 'Please enter words line by line. Only underscore and hyphen is allowed.'
            }
        }
        return true;
    }
}