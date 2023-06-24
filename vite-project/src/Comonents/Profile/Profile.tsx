import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div>
       <div className='profilePage'>
        <div className="card-client">
          <div className="user-picture">
            {/* {!image ? <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
            </svg> :
            <img src={`/Images/${image}`} alt="" width={250}/>} */}
          </div>
          <p className="name-client"> {}
            <span>Developer
            </span>
          </p>

        </div>

      </div>
     
     
      <div >
		<form >
			<label >Choose a file:</label>
			<input accept=".jpg, .jpeg, .png, .gif, .pdf" class="inpdddut" name="arquivo" id="arquivo" type="file" />
			<input value="Send" type="submit" class="inpdddut"/>
		</form>
	</div>
    </div>
  )
}

export default Profile
