import About from "./components/About";
import './App.css'

const App = ()=>{
  
 const obj = {
  backgroundColor:"red",
  color:"white",
  padding:"20px"
 }


const datas  = JSON.stringify(obj)

const jobh = '{"name":"thisi sreact","age":"20"}'

const conh = JSON.parse(jobh);
console.log(conh.name);


  return (
    <>
    <h1 className="title">This is My component</h1>
    {console.log('This is comement')}

    <About/>





   <div style={obj}>
    <h1>
      This is inline css
    </h1>

    {datas}
{conh.name}

   </div>


    </>
  )
  

}

export default App;