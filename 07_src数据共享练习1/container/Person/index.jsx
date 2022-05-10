import React, { Component } from 'react';
import {addPersonReducer,removePersonReducer} from '../../redux/reducer/person'
import {connect} from 'react-redux';
import {nanoid} from 'nanoid'
class personUI extends Component {
  addPerson = ()=>{
    const name = this.nameNode.value
    const age = this.ageNode.value
    if(name,age){
      this.props.add({id:nanoid(),name,age})
    }else{
      return
    }    
    this.nameNode.value=''
    this.ageNode.value=''
  }
  removePerson = (id)=>{
    this.props.remove(id)
  }
  render() {
    // console.log(this.props.rens)
    return (
      <div>
        <h2>personUI组件</h2>
        <h3>countUI组件和：{this.props.he}</h3>
        <div>
          <input type="text" placeholder='name' ref={c=> this.nameNode=c}/>&nbsp;&nbsp;
          <input type="number" placeholder='age' ref={c=>this.ageNode=c}/>&nbsp;&nbsp;
          <input type="button" value="添加" onClick={this.addPerson}/>&nbsp;&nbsp;
        </div>
        <ul>
          {
            this.props.rens.map(person=>{
              return <li key={person.id}>
                {person.name}---{person.age}
                <button onClick={()=>{this.removePerson(person.id)}}>删除</button>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state=>({rens:state.person,he:state.count}),
  {
    add:addPersonReducer,
    remove:removePersonReducer
  }
)(personUI);