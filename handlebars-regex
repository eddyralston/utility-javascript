const template = (string,object) => {
    var regex = /{{(\s+[a-z]+\s)}}/g
    var parsedString = string.replaceAll(regex, ($1,$2) => {
        return object[$2.trim()]
    })
    return html(parsedString)
}
