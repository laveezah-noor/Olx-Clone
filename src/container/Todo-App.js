import React from 'react'



class Todo_App extends React.Component {
    constructor(){
        super()
        this.state = {
            todos: [{title:'ghous', edit: false},{title:'ahmed', edit: false},{title:'umair', edit:false}],
            value: ''
          }
    }
  
    add_todo = ()=>{
      let obj = {title: this.state.value}
      // this.state.todos.push(this.state.value);
      this.setState({
        todos: [...this.state.todos,obj],
        // todos: this.state.todos,
        value :""
      })
    }
  
    edit_todo = (index,value)=> {
      if (this.state.todos[index].edit === true){
      this.state.todos[index].edit = false }
      else{this.state.todos[index].edit = true }
      this.setState({
        todos: this.state.todos
      })
      
    }
  
    delete_todo = (index)=> {
      this.state.todos.splice(index, 1)
      this.setState({
        todos: this.state.todos
      })
    }
  
    handleChange = (e,index) =>{
      this.state.todos[index].title = e.target.value
      this.setState({
        todos: this.state.todos
      })
    }
  
    update_todo = (index,value)=> {
      this.state.todos[index].edit = false
      this.setState({
        todos: this.state.todos
      })
      
    }
  
  
    render() {
        let {todos, value} = this.state;
        return (
            <div>
           <input value={value} onChange={(e)=> this.setState({value: e.target.value})} type="text" placeholder="Enter value" />
           <button onClick={this.add_todo}>Add ITEM</button>
             <ul>
                 {this.state.todos.map((v,i)=>{
                     return <li key={i}>
                      {v.edit ? <input onChange={(e)=> this.handleChange(e,i)} value={v.title} type="text" /> : v.title}
                     {v.edit ?
                      <button onClick={() => this.edit_todo(i,v.title)}>Update</button> :
                      <button onClick={()=> this.edit_todo(i,v.title)}>Edit</button>}
                     <button onClick={()=> this.delete_todo(i)}>Delete</button>
                     </li>
                 })}
              </ul>
            </div>
        )
    }
}


export default Todo_App;