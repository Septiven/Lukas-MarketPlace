import react from 'react'

export default class LandingPage extends react.Component{
    render(){
        return(
            <div style={{backgroundColor:"#5aa897"}}>
                <div className="container d-flex flex-column align-items-center" style={{height:'100vh'}}>
                    {/* atas */}
                    <div>
                        <img src="https://freedesignfile.com/upload/2021/02/Cute-funny-cartoon-animal-vector.jpg" style={{}}/>
                    </div>

                    {/* bawah */}
                    <div>
                        <h1>Welcome to Lukas Market-Place</h1>
                        <h6>a place where you can buy something you like with a good prize</h6>
                    </div>
                </div>
            </div>
        )
    }
}