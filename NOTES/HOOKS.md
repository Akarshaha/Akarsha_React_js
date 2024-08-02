# HOOKS
  * Hooks are reusable functions that provide access to state in React Applications.

  ## usecallback()
  * useCallback is a React Hook that lets you cache a function definition between re-renders.

  * `
  const cachedFn = useCallback(fn, dependencies)
  `
  ## useEffect()
  * useEffect is a React Hook that lets you synchronize a component with an external system.

  * `
  useEffect(setup, dependencies?) `
  ## useRef
 * useRef is a React Hook that lets you reference a value that’s not needed for rendering.

 * ` const ref = useRef(initialValue) `
  
  ## useState
* useState is a React Hook that lets you add a state variable to your component.


* ` const [state, setState] = useState(initialState) `