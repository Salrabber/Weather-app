

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ModalState } from './Context/ModalContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ModalState>
    <App />
  </ModalState>,
)
