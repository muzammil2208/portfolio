export default function Contactform()
{
    return(
        <div className="container">
            <form className="Contact-form">
            <div className="form-title">Want to get in touch?</div>
            <div className="form-inputs">
                <label>Name</label>
                <input type="text"/>
                <label>Email</label>
                <input type='email'/>
                <label>message</label>
                <textarea rows='10' cols="8"/>
            </div>
        </form>
        </div>
        
    )
}