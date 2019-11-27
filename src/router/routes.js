import loginPage from '../views/pages/login'
import registerPage from '../views/pages/register'
import templatePage from '../views/pages/template'
import policiesPage from '../views/pages/policies'


export const routes = [
  {
    path      : '/login',
    name      : 'login',
    component : loginPage
  },
  {
    path      : '/register',
    name      : 'register',
    component : registerPage
  },
  {
    path      : '/template',
    name      : 'template',
    component : templatePage
  },
  {
    path      : '/policies',
    name      : 'policies',
    component : policiesPage
  },
  {
    path     : '*',
    redirect : '/login'
  }
]