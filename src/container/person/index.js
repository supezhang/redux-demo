import React, { Component } from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {addPerson,removePerson} from '../../redux/actions/person'
class PersonUI extends Component {
  addPerson = ()=>{
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    if(name && age){
      this.props.addPerson({id:nanoid(),name,age})
    }
    this.nameNode.value="";
    this.ageNode.value="";
  }
  render() {
    return (
      <div>
        <h2>PersonUI组件</h2>
        <h3>count组件求和：{this.props.he}</h3>
        <div className="person-area">
          <input type="text" placeholder='name' ref={c=>this.nameNode=c} />&nbsp;
          <input type="number" placeholder='age' ref={c=>this.ageNode=c} />&nbsp;
          <input type="button" value='添加' onClick={this.addPerson}/>&nbsp;
          <ul>
            
            {
              this.props.rens.map(item=>{
                return <li key={item.id}>{item.name}--{item.age}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  state=>({
    rens:state.person,
    he:state.count
  }),
  {
    addPerson,
    removePerson
  }
)(PersonUI)