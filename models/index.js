const List = require('./list')
const Todo = require('./todo')

List.hasMany(Todo,{
    foreignKey: 'list_id',
    onDelete: 'cascade'
})

Todo.belongsTo(List, {
    foreignKey: 'list_id'
})

module.exports = { List, Todo};