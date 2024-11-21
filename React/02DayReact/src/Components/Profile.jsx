function Profile(props){
    console.log(props)// object
    
    return(
        <>
            <div className="Profile">
                <p>Name: {props.name ||"TestName"}</p>
                <img src="https://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpg?ga=GA1.1.700783662.1728457916&semt=ais_hybrid" alt="" />
                <p>Email: {props.email ||"TestEMail"}</p>
                <p>City: {props.city ||"TestCity"}</p>
                <p>BirthDate:{props.birthDate||"21stJan"}</p>
                {/* <p>PhoneNumber:{props.phoneNumber}</p> */}
                {/* if phoneNumber >>phonenumber  */}
                {
                    // ternary 
                    //(1==1)?"React":"No React"
                    (props.phoneNumber)?<p>PhoneNumber:{props.phoneNumber}</p>:null                  

                }     
                {
                     (props.birthDate)?<p>BirthDate:{props.birthDate}</p>:null
                }
                 {
                     (props.birthDate)?<p>BirthDate:{props.birthDate}</p>:"BirthDate:21stjan"
                }
            </div>
          


            {/* <div className="Profile">
                <h3>Name: Alice</h3>
                <h4>Email: alice89@gmail.com</h4>
                <h4>City: Phoenix, AR</h4>
            </div> */}
            
        </>
    )
}
export default Profile

// Profile >> 6-7 Profile 
// Conditionally tried to uitilize the data
// >> || OR operator
// >>  ternary opertor 
//props passing 

// Style 
// NOrmal Style 
// App.jsx >> Root File > JS
// App.css >> Root File >CSS >> externaml CSS
// class >> REact >> stateful >> class component
// class reserve keyword >> CSS
// className="" >> rule >> remains same

