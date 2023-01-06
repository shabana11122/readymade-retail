
export default function Card({data}) {

    return (
        <div className="card">
        <img src={data.url} alt="Avatar" style={{width:"100%"}}/>
        <div className="container">
          <h4><b>{data.title}</b></h4> 
        </div>
      </div>
    )
  }

