import Profile from "./Profile"

const ProfileSection=()=>{
    return(
        <>
        <div className='profileSection'>
      {/* name img email city */}
      <Profile name="Poonam" email={"poonam@gmail.com"} city={"Mumbai"} birthDate="19thJan"/>
      <Profile name="Honoto" email={"honoto@gmail.com"} city={"Shillong"}/>
      <Profile name="Alice" email={"alice89@gmail.com"}
      city="Phoenix, AR"/>
      <Profile phoneNumber="678987654"/>
      
    </div>
        </>
    )
}
export default ProfileSection