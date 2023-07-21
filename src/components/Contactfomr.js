export default function Contactfomr()
{
    return(
        <form>
            <div className="form-title">Want to get in touch?</div>
            <div className="form-inputs">
                <label>Name</label>
                <input type="text"/>
                <label>Email</label>
                <input type='email'/>
                <label>message</label>
                <textarea rows='4' cols="5"/>
            </div>
        </form>
    )
}