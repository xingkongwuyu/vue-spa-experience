/**
 * @file
 * Created by hanan on 16/10/15.
 */
//登录 注册 忘记密码
const Login = r => require(['views/login'], r);
const Register = r => require(['views/register'], r);
const ForgetPwd = r => require(['views/forgetPwd'], r);
const Index = r => require(['views/index'], r);
//首页
// 资讯
const Main = r => require(['views/main'], r);
const NewsList = r => require(['views/newsList'], r);
const NewsDetail = r => require(['views/newsDetail'], r);

// 课程
const Course = r => require(['views/Course'], r);

//个人中心
const Me = r => require(['views/me'], r);

//404
const notFound = r => require(['views/404'], r);
const Test = r => require(['views/test'], r);
const Page = r => require(['views/page'], r);
// 根目录
const rootPath = '';

// 页面路由
const routes = [
  //登录 注册 忘记密码
  {path: '', redirect: {name: 'login'}},
  {path: '/test',  component: Test, name: 'test'},
  {path: '/page',  component: Page, name: 'page'},
  {path: '/login', component: Login, name: 'login'},
  {path: '/register', component: Register, name: 'register'},
  {path: '/forgetPwd', component: ForgetPwd, name: 'forgetPwd'},
  {
    path: '/index',
    component:Index,
    name:'index',
    children: [
      {
        path:'',
        redirect: '/index/main/newsList' 
      },
      {
        path: 'main',
        component:Main,
        name:'main',
        children: [
          {
            path:'',
            redirect: '/index/main/newsList' 
          },
          {
            path: 'newsList',
            component:NewsList,
            name:'newsList',
          },
          {
            path: 'newsDetail/:id',
            component:NewsDetail,
            name:'newsDetail',
          },
          {
            path: 'course',
            component:Course,
            name:'course',
          }
        ]
      },
      {path: 'me', component: Me, name: 'me'}
    ]
  }
].map(route => {
  route.path = rootPath + route.path;
  return route;
});
// 404 页
routes.push({path: '*', component: notFound, name: 'notfound'});
export default routes;
