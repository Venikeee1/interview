function Book() {
    this.name = 'foo'
}

Book.prototype = {
    getName: function() {
        return this.name;
    }
};

const book = new Book();

Book.prototype.getUpperName = function() {
    return this.getName().toUpperCase();
}

book.getUpperName();

1)Что вернет?

---------------------------------------------------------------------------------------------------
