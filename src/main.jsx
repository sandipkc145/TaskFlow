
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Maindata from './component/Maindata.jsx';
import Themechanger from './component/Themechanger.jsx'

createRoot(document.getElementById('root')).render(
    // wrapping the app.jsx with the Themechanger
<Themechanger> 
    <Maindata>
          <App/>
    </Maindata> 
</Themechanger> 
   
 
)
