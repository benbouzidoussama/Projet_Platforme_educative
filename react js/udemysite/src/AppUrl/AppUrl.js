
export class AppUrl {
    static BaseApi='http://127.0.0.1:8000/api';
    
    
    static Services=this.BaseApi+'/services';
    static AllProjects=this.BaseApi+'/AllProjects';
    static ThreeProjects=this.BaseApi+'/ThreeProjects';
    static ProjectDetails=this.BaseApi+'/ProjectDetails/{id}';
    static AllCourses=this.BaseApi+'/AllCourses';
    static FourCourses=this.BaseApi+'/FourCourses'; 
    static CoursesDetails=this.BaseApi+'/CoursesDetails/';
    static Footer=this.BaseApi+'/Footer';   
    static Chart=this.BaseApi+'/Chart';
    static Team=this.BaseApi+'/Team';
    static About=this.BaseApi+'/About';
    static Home=this.BaseApi+'/Home';
    static Contact=this.BaseApi+'/Contact';
    static SignUp = this.BaseApi + '/signup';
    static SignIn = this.BaseApi + '/signin';


}

export default AppUrl