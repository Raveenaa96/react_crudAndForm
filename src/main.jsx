import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FunctionalSimpleForm } from './Functional_Component/FunctionalSimpleForm'
import { ClassSimpleForm } from './Class_Component/ClassSimpleForm'
import { FunctionalCrudOperation } from './Functional_Component/FunctionalCrudOperation'
import { ClassCrudOperation } from './Class_Component/ClassCrudOperation'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FunctionalSimpleForm />
  </StrictMode>,
)
