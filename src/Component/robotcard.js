

import "./robotcard.css"


function Robotcard({robots}){
    return (
        robots.map((user, index) => {
            return (
            <div key = {robots[index].id} className = "tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${robots[index].name}?200*200`} alt="robot" />
            <p>{robots[index].name}</p>
            <p>{robots[index].email}</p>
            </div>
        )
        })
    )
}






export default Robotcard