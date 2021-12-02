const Title = ({title}) => {
  return (<h1 onClick={()=>{alert(title)}}>{title}</h1>)
} 

export default Title;