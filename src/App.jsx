import useGetData from "./hooks/useGetData"
import "./App.css"
import WithSnipper from "./comp/snipper/snipper"

const Cardswithsnipper = WithSnipper(Cards)

function App() {
 const [data, error, loading] = useGetData(
  "http://jsonplaceholder.typicode.com/posts"
 )
 return (
  <div className="App">
   <Cardswithsnipper isLoading={loading} data={data} />
  </div>
 )
}

function Cards({data}) {
 return (
  <>
   {data.map((el) => (
    <Card key={el.id} element={el} />
   ))}
  </>
 )
}

function Card({element}) {
 return (
  <>
   <h1>{element.title}</h1>
   <p>{element.body}</p>
  </>
 )
}

export default App
