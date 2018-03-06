var response = class response {
    constructor(success, data, message) {
        this.success = success;
        this.data = data;
        this.message = message;
    }
}

module.exports = response;