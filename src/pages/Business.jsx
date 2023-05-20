// Purpose: Display Business page
import './Business.css'
import Image2 from '../assets/th-2157978630.jpeg'

function Business() {
    return (
        <div className="page2" style={{textAlign: "center", height:"100vh", }}>
            <div className="title">
                <h2>Business News</h2> <br />
                <img src={Image2} alt="" /> <br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque quaerat reiciendis, repellendus facere perferendis voluptate officia repellat. Repellendus expedita mollitia minus est atque sunt magnam placeat, facilis at ipsa.</p>
            </div>
        </div>
    );
}

export default Business