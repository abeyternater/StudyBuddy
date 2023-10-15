import './Contactformstyles.css';

function Contactform(){

    return(
        <div>
    <form action='https://formsubmit.co/jackbakken29@gmail.com' method='POST'>
		<h2 className="title">Help your child gain confidence in the classroom.</h2><br /><h2> Contact Today!</h2>

			<div className="form-group position-relative">
				<label for="formName" className="d-block">
					<i className="icon" data-feather="user"></i>
				</label>
				<input name='name' type="text" id="formName" className="form-control form-control-lg thick" placeholder="Name" required/>
			</div>


			<div className="form-group position-relative">
				<label for="formEmail" className="d-block">
					<i className="icon" data-feather="mail"></i>
				</label>
				<input name='email' type="email" id="formEmail" className="form-control form-control-lg thick" placeholder="E-mail" />
			</div>

			<div className="form-group message">
				<textarea name='message' id="formMessage" className="form-control form-control-lg" rows="7" placeholder="Message"></textarea>
			</div>
		
			<div className="text-center">
				<button type="submit" className="btn btn-primary" tabIndex="-1">Send message</button>
			</div>
	</form>
    </div>
    );
}
export default Contactform;