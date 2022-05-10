import React, { Component } from 'react';
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {personAction} from '../../redux/actions/person'
class Person extends Component {
  state = {
    persons:[],
    editAge:true,
    isEmpt:false,
  }
  person=()=>{
    const nameVal = this.nameNode.value.trim()
    const ageVal = this.ageNode.value.trim()
    if(nameVal===''||ageVal===''){
      this.setState({isEmpt:true})
      return 
    }else{
      this.setState({isEmpt:false})
    }
    const newPerson = {id:nanoid(),name:nameVal,age:ageVal}
    this.props.jia(newPerson)
    this.nameNode.value = ''
    this.ageNode.value=''
  }
  ageReg=(e)=>{
    const age = e.target.value
    const reg = /^\d*?$/;
    if(!age===''){
      if(!reg.test(age)){
        this.setState({editAge:false})       
      }else{
        this.setState({editAge:true})  
      }
    }    
  }
  nameReg = e=>{
    const name = e.target.value;
    if(name === ''){
      this.setState({isEmpt:true})
    }else{
      this.setState({isEmpt:false})
    }
  }
  emptErrRender = ()=>{
    return (<span style={{color:'red',fontSize:'12px'}}>内容不能为空</span>)     
  }
  render() {
    return (
      <div>
        <h2>person组件,上方求和：{this.props.he}</h2>
        <input type="text" ref={c=>this.nameNode=c} placeholder='名字' onChange={this.nameReg}/>
        {
          this.state.isEmpt?
          this.emptErrRender():null
        }
        <br />
        <input type="text" ref={c=>this.ageNode=c} onChange={this.ageReg} placeholder='年龄'/>
        {
          !this.state.editAge?
          (<span style={{color:'red',fontSize:'12px'}}>请输入数字</span>)
          :null
        }
        {
          this.state.isEmpt?
          this.emptErrRender():null
        }
        
        <br />
        <button onClick={this.person}>添加</button>
        <br />
        <ul>
          {             
            this.props.abc.map(person=>{             
              return <li key={person.id}>{person.name}--{person.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state=>({abc:state.rens,he:state.he}),
  {
    jia:personAction
  }
)(Person);