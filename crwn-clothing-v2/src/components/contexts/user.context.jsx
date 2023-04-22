import { createContext} from 'react'
import App from '../../App'






export const UserContext=createContext({

})

export const UserProvider=({childern})=>{
  return <UserContext.Provider>{childern}</UserContext.Provider>
}

<UserProvider>
    <App/>
</UserProvider>