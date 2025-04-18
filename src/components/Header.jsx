import { useState } from 'react'
import logo from '/react.svg'

export default function Header() {
    const [now, setNow] = useState(new Date()) 

    setInterval(() => setNow(new Date()),1000)

    return (
          <header>
            <img src={logo} alt="Result" />
        {/* <h3>Result University</h3> */}
        <span>Time:{now.toLocaleTimeString()}</span>
    </header>
    )
}