import { useRef, useState } from "react"
import { Servics } from "../../apiCLient/services"
import { useNavigate } from 'react-router-dom';

export function VerificationForm(props: { url: any }) {
    const name = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
  
    const [message, setMessage] = useState<any>(null)
    const navigate = useNavigate();
    const send = async () => {
        if (name.current?.value && password.current?.value) {

            const data = {
                name: name.current?.value,
                password: password.current?.value,
               
            }

            const servics = Servics("")
            const result = await servics.post(props.url, data)
            setMessage(result)
            if (result.token) {
                console.log(result);
                localStorage.setItem('1', result.token)
                navigate('');
            }
        }

    }
    return (<>
        <div className="verificationForm">
            <input type="text" name="name" placeholder="הכנס שם" ref={name} />
            <input type="password" name="password" placeholder="הכנס סיסמא" ref={password} />
            <button id="btn" onClick={send}>שלח</button>
            <h5>{message?.message}</h5>
        </div>
    </>
    )

}
export default VerificationForm