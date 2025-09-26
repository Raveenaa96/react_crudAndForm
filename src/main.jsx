import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FunctionalSimpleForm } from './Functional_Component/FunctionalSimpleForm'
import { ClassSimpleForm } from './Class_Component/ClassSimpleForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClassSimpleForm />
  </StrictMode>,
)
