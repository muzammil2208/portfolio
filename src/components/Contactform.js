export default function Contactform()
{
    return(
        <div className="container">
            <form className="Contact-form">
            <div className="form-title">Want to get in touch?</div>
            <div className="form-inputs">
                <div className="form-entry">
                    <label>Name</label>
                    <input type="text" placeholder='enter your name'/>
                </div>
                <div className="form-entry">
                    <label>Email</label>
                    <input type="email" placeholder="enter you email"/>
                </div>
                <div className="form-message">
                    <label>Message</label>
                    <textarea rows="5" cols="7" placeholder="enter your message here"/>
                </div>
                <button className='form-button' type="submit">Submit</button>
            </div>
        </form>
        </div>
        
    )
}