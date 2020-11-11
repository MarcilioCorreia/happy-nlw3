module.exports = {

    index(request, response) {
        return response.render('index')
    },

    childHome(request, response) {
        return response.render('child_home')
    },
    childrenHome(request, response) {
        return response.render('children_home')
    },
    createChildrenHome (request, response) {
        return response.render('create-children_home')
    }
}